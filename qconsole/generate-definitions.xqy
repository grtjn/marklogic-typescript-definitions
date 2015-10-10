xquery version "1.0-ml";

declare variable $xml external;
let $xml := xdmp:unquote($xml)

let $definition := xdmp:xslt-eval(
  <xsl:stylesheet version="2.0" exclude-result-prefixes="#all" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:apidoc="http://marklogic.com/xdmp/apidoc" xmlns:local="local">

    <xsl:output method="text" indent="yes" omit-xml-declaration="yes"/>

    <xsl:template match="@*|node()" mode="#all">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()" mode="#current"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="apidoc:function" mode="#all">
      <xsl:param name="use-function-keyword" select="false()"/>
      <xsl:text>    /** </xsl:text>
      <xsl:value-of select="normalize-space(apidoc:summary[not(@class) or @class = 'javascript'])"/>
      <xsl:text> **/&#10;</xsl:text>

      <xsl:text>&#32;&#32;</xsl:text>
      <xsl:if test="$use-function-keyword">
        <xsl:text>function </xsl:text>
      </xsl:if>
      <xsl:value-of select="local:fixName(@name)"/>
      <xsl:text>(</xsl:text>
      <xsl:for-each select="apidoc:params/apidoc:param[not(@class) or @class = 'javascript']">
        <xsl:variable name="is-multi" select ="substring(@type, string-length(@type) - 3) = ',...'"/>
        <xsl:if test="$is-multi">...</xsl:if>
        <xsl:value-of select="local:fixName(@name)"/>
        <xsl:if test="preceding-sibling::apidoc:param[not(@class) or @class = 'javascript'][@name = current()/@name]">2</xsl:if>
        <xsl:if test="not($is-multi) and string(@optional) = 'true'">?</xsl:if>
        <xsl:text>: </xsl:text>
        <xsl:value-of select="local:fixType(@type, true())"/>
        <xsl:if test="$is-multi">[]</xsl:if>
        <xsl:if test="not(position() = last())">, </xsl:if>
      </xsl:for-each>
      <xsl:text>): </xsl:text>
      <xsl:value-of select="local:fixType(string(apidoc:return[not(@class) or @class = 'javascript']), false())"/>
      <xsl:text>;&#10;&#10;</xsl:text>
    </xsl:template>

    <xsl:template match="/">
      <xsl:variable name="root" select="."/>

      <xsl:text>// Type definitions for </xsl:text><xsl:value-of select="apidoc:module/@name"/><xsl:text>&#10;</xsl:text>
      <xsl:text>// Definitions: </xsl:text><xsl:value-of select="base-uri(.)"/><xsl:text>&#10;&#10;</xsl:text>

      <xsl:text>/**</xsl:text>
      <xsl:value-of select="apidoc:module/apidoc:summary[not(@class) or @class = 'javascript']"/>
      <xsl:text>**/&#10;&#10;</xsl:text>

        <xsl:for-each select="distinct-values(((apidoc:module/@lib, 'xdmp')[1], //apidoc:function[empty(@http-verb)]/@lib))">
          <xsl:variable name="lib" select="."/>
          <xsl:variable name="name" select="local:fixName($lib)"/>

          <xsl:choose>
          <xsl:when test="$name = 'alert'">
            <xsl:text>declare module </xsl:text>
            <xsl:value-of select="$name"/>
            <xsl:text> {{&#10;&#10;</xsl:text>

            <xsl:apply-templates select="$root//apidoc:function[@lib = $lib][empty(@http-verb)][not(@class) or @class = 'javascript']">
              <xsl:with-param name="use-function-keyword" select="true()"/>
            </xsl:apply-templates>

            <xsl:text>}}&#10;</xsl:text>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>interface </xsl:text>
            <xsl:value-of select="$name"/>
            <xsl:text>Functions {{&#10;&#10;</xsl:text>

            <xsl:apply-templates select="$root//apidoc:function[@lib = $lib][empty(@http-verb)][not(@class) or @class = 'javascript']"/>

            <xsl:text>}}&#10;</xsl:text>

            <xsl:text>declare var </xsl:text>
            <xsl:value-of select="$name"/>
            <xsl:text>:</xsl:text>
            <xsl:value-of select="$name"/>
            <xsl:text>Functions&#10;</xsl:text>
          </xsl:otherwise>
          </xsl:choose>
        </xsl:for-each>
    </xsl:template>

    <xsl:function name="local:fixType">
      <xsl:param name="pType"/>
      <xsl:param name="isForParameter"/>

      <xsl:variable name="preTypeAndCardinality" select="replace(replace($pType, '^([^,]+)(,\.\.\.)?$', '$1'), ' ', '')"/>
      <xsl:variable name="lastCharacter" select="substring($preTypeAndCardinality, string-length($preTypeAndCardinality))"/>
      <xsl:variable name="preType" select="if (matches($lastCharacter, '^[?*+]$')) then substring($preTypeAndCardinality, 1, string-length($preTypeAndCardinality) - 1) else $preTypeAndCardinality"/>
      <xsl:variable name="isArray" select="matches($lastCharacter, '^[*+]$')"/>
      <xsl:variable name="type" select="if (substring($preType, 1, 1) = '(') then substring($preType, 2, string-length($preType) - 2) else $preType"/>

      <xsl:value-of select="local:fixEachType($type, $isArray, $isForParameter)"/>
    </xsl:function>

    <xsl:function name="local:fixEachType">
      <xsl:param name="typeUnion"/>
      <xsl:param name="isArray"/>
      <xsl:param name="isForParameter"/>

      <xsl:variable name="type" select="substring-before(concat($typeUnion,'|'),'|')"/>

      <xsl:choose>
        <xsl:when test="matches($type, '^function\(.*\)as(.+)$')">
          <xsl:value-of select="local:fixFunctionType($type, $isArray)"/>
        </xsl:when>
        <xsl:when test="$isArray">
          <xsl:choose>
            <xsl:when test="$type = ('document-node()', 'binary()', 'element()', 'node()')">
              <xsl:value-of select="local:fixArrayType('any', $isForParameter)"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="local:fixArrayType(string-join(local:fixSingleType($type, $isForParameter), ''), $isForParameter)"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="local:fixSingleType($type, $isForParameter)"/>
        </xsl:otherwise>
      </xsl:choose>

      <xsl:if test="contains($typeUnion, '|')">
        <xsl:value-of select="concat('|', string-join(local:fixEachType(substring-after($typeUnion, '|'), $isArray, $isForParameter), ''))"/>
      </xsl:if>
    </xsl:function>

    <xsl:function name="local:fixArrayType">
      <xsl:param name="type"/>
      <xsl:param name="isForParameter"/>
      <xsl:value-of select="concat(concat(if($isForParameter) then 'MLArray&lt;' else 'ValueIterator&lt;', $type), '&gt;')"/>
    </xsl:function>

    <xsl:function name="local:fixSingleType">
      <xsl:param name="type"/>
      <xsl:param name="isForParameter"/>
      <xsl:choose>
        <xsl:when test="$type = 'ValueIterator'">ValueIterator&lt;any&gt;</xsl:when>
        <xsl:when test="$type = 'document-node()'">DocumentNode&lt;any&gt;</xsl:when>
        <xsl:when test="$type = ('binary()')">MLNode&lt;any&gt;</xsl:when>
        <xsl:when test="$type = ('element()', 'node()', 'item()')">
          <xsl:choose>
            <xsl:when test="$isForParameter">MLNodeOrObject&lt;any&gt;</xsl:when>
            <xsl:otherwise>MLNode&lt;any&gt;</xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:when test="$type = ('empty-sequence()', 'Null')">void</xsl:when>
        <xsl:when test="$type = ('String', 'xs:anyURI', 'xs:NCName', 'xs:string', 'xs:time', 'xs:duration', 'xs:dayTimeDuration')">string</xsl:when>
        <xsl:when test="$type = ('json:array', 'Array')">Array&lt;any&gt;</xsl:when>
        <xsl:when test="$type = ('json:object', 'map:map')">&#123;&#91;key:string&#93;:any&#125;</xsl:when>
        <xsl:when test="$type = ('function()', 'xdmp:function', 'function(*', 'function(*)')">() => any</xsl:when>
        <xsl:when test="$type = 'xs:boolean'">boolean</xsl:when>
        <xsl:when test="$type = 'xs:anyAtomicType'">any</xsl:when>
        <xsl:when test="$type = ('xs:dateTime', 'xs:date')">Date</xsl:when>
        <xsl:when test="$type = ('Int', 'double', 'xs:numeric', 'numeric', 'xs:decimal', 'xs:double', 'xs:unsignedLong', 'xs:int', 'xs:float', 'xs:integer', 'xs:long', 'xs:nonNegativeInteger', 'xs:positiveInteger', 'xs:unsignedInt')">number</xsl:when>
        <xsl:when test="matches($type, '^(schema-)?[Ee]lement\([^)]+\)$')">
          <xsl:choose>
            <!-- TODO: Can we perform generics on this? -->
            <xsl:when test="$isForParameter">MLNodeOrObject&lt;any&gt;</xsl:when>
            <xsl:otherwise>MLNode&lt;any&gt;</xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:otherwise>
          <xsl:variable name="local-name" select="replace($type, '^([^:.]+[:.])?([^\(\)]+)\(?\)?$', '$2')"/>
          <xsl:variable name="fixed-local-name" select="string-join(local:fixName($local-name), '')"/>
          <xsl:variable name="type-name" select="concat(upper-case(substring($fixed-local-name, 1, 1)), substring($fixed-local-name, 2))"/>
          <xsl:choose>
            <xsl:when test="contains($type, ':') or contains($type, '.')">
              <xsl:variable name="prefix-name" select="replace($type, '^([^:.]+[:.])?(.+)$', '$1')"/>
              <xsl:value-of select="concat(substring($prefix-name, 1, string-length($prefix-name) - 1), concat('.', $type-name))"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$type-name"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:function>

    <xsl:function name="local:fixFunctionType">
      <xsl:param name="type"/>
      <xsl:param name="isArray"/>
      <xsl:text>(</xsl:text>
      <xsl:if test="matches($type, '^function\((.+)\)as(.+)$')">
        <xsl:value-of select="local:fixParameters(replace($type, '^function\((.+)\)as(.+)$', '$1'), 1)"/>
      </xsl:if>
      <xsl:text>)=&gt;</xsl:text>
      <xsl:variable name="returnType" select="local:fixType(replace($type, '^function\(.*\)as(.+)$', '$1'), false())"/>
      <xsl:choose>
        <xsl:when test="$isArray">
          <xsl:value-of select="local:fixArrayType($returnType, false())"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$returnType"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:function>

    <xsl:function name="local:fixParameters">
      <xsl:param name="parameters"/>
      <xsl:param name="number"/>
      <xsl:value-of select="concat(concat('p', $number), ':')"/>
      <xsl:variable name="type" select="substring-before(concat($parameters,','),',')"/>
      <xsl:value-of select="local:fixType($type, true())"/>
      <xsl:if test="contains($parameters, ',')">
        <xsl:value-of select="concat(',', string-join(local:fixParameters(substring-after($parameters, ','), $number + 1), ''))"/>
      </xsl:if>
    </xsl:function>

    <xsl:function name="local:fixName">
      <xsl:param name="name"/>

      <xsl:choose>
        <xsl:when test="$name = 'default'">defaultVal</xsl:when>
        <xsl:when test="$name = 'function'">functionArg</xsl:when>
        <xsl:when test="$name = 'in'">input</xsl:when>
        <xsl:when test="$name = 'else'">else_</xsl:when>
        <xsl:when test="$name = 'new'">new_</xsl:when>
        <xsl:when test="$name = 'class'">class_</xsl:when>
        <xsl:when test="$name = 'delete'">delete_</xsl:when>
        <xsl:otherwise>
          <xsl:analyze-string select="replace($name, ' ', '_')" regex="-([a-zA-Z])">

            <xsl:matching-substring>
              <xsl:value-of select="upper-case(regex-group(1))"/>
            </xsl:matching-substring>

            <xsl:non-matching-substring>
              <xsl:value-of select="translate(., '-', '')"/>
            </xsl:non-matching-substring>

          </xsl:analyze-string>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:function>

  </xsl:stylesheet>, $xml)

return $definition
