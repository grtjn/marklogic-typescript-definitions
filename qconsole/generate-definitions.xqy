xquery version "1.0-ml";

(:
let $docs-dir := "/Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/"
let $docs-files := xdmp:filesystem-directory($docs-dir)/*[ends-with(*:filename, ".xml")]/*:filename

for $file in $docs-files
let $xml := xdmp:document-get(concat($docs-dir, $file))
:)

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
        <xsl:value-of select="local:fixName(@name)"/>
        <xsl:if test="preceding-sibling::apidoc:param[not(@class) or @class = 'javascript'][@name = current()/@name]">2</xsl:if>
        <xsl:if test="string(@optional) = 'true'">?</xsl:if>
        <xsl:text>: </xsl:text>
        <xsl:value-of select="local:fixType(@type)"/>
        <xsl:if test="not(position() = last())">, </xsl:if>
      </xsl:for-each>
      <xsl:text>): </xsl:text>
      <xsl:value-of select="local:fixType(string(apidoc:return[not(@class) or @class = 'javascript']))"/>
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
      <xsl:param name="type"/>

      <xsl:variable name="quantifier" select="replace($type, '^.+([?+*])?$', '$1')"/>
      <xsl:variable name="type" select="replace($type, '^(.+)[?+*]$', '$1')"/>

      <xsl:choose>
        <xsl:when test="$type = ('binary()', 'document-node()', 'element()', 'node()')">Node</xsl:when>
        <xsl:when test="$type = 'empty-sequence()'">void</xsl:when>
        <xsl:when test="$type = ('String', 'item()', 'xs:anyURI', 'xs:string', 'xs:time', 'xs:unsignedLong', '(cts:order|xs:string)')">string</xsl:when>
        <xsl:when test="$type = 'json:array'">Array&lt;any&gt;</xsl:when>
        <xsl:when test="$type = ('json:object', 'map:map', '(element()|map:map)', 'xdmp:function')">Object</xsl:when>
        <xsl:when test="$type = ('function()', 'function(*)')">() => any</xsl:when>
        <xsl:when test="$type = 'xs:dateTime'">Date</xsl:when>
        <xsl:when test="$type = ('Int', 'xs:decimal', 'xs:double', 'xs:float', 'xs:integer', 'xs:long', 'xs:positiveInteger', 'xs:unsignedInt')">number</xsl:when>
        <xsl:when test="matches($type, '^(schema-)?[Ee]lement\([^)]+\)$')">Node</xsl:when>
        <!-- generic fallback -->
        <xsl:otherwise>
          <!--xsl:variable name="local-name" select="replace($type, '^([^:]+:)?(.+)$', '$2')"/>
          <xsl:value-of select="concat(upper-case(substring($local-name, 1, 1)), substring($local-name, 2))"/-->
          <xsl:text>Object</xsl:text>
        </xsl:otherwise>
      </xsl:choose>
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
 
(: 
return xdmp:save(concat(replace($docs-dir, 'xml/$', 'ts/'), replace($file, '\.xml$', ''), '.d.ts'), $definition)
:)
return $definition