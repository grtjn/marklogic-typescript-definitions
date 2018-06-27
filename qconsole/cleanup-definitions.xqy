xquery version "1.0-ml";

declare variable $xml external;
let $xml := xdmp:unquote("<wrap>" || $xml || "</wrap>")

let $definition := xdmp:xslt-eval(
  <xsl:stylesheet version="2.0" exclude-result-prefixes="#all" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:apidoc="http://marklogic.com/xdmp/apidoc" xmlns:local="local">

    <xsl:strip-space elements="*"/>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes"/>

    <!-- copy all by default -->

    <xsl:template match="@*|node()" mode="#all">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()" mode="#current"/>
      </xsl:copy>
    </xsl:template>

    <!-- root template -->

    <xsl:template match="/wrap">
      <!-- jump to other mode -->
      <xsl:apply-templates select="." mode="sort"/>
    </xsl:template>

    <!-- strip-non-javascript -->

    <xsl:template match="apidoc:module[not(@class = 'xquery')]" mode="strip-non-javascript">
      <!-- jump to other mode -->
      <xsl:apply-templates select="." mode="sort"/>
    </xsl:template>

      <!-- module, summary, function, param, return -->
    <xsl:template match="*[@class = 'xquery']|*[@http-verb]|apidoc:function[@name = '']|apidoc:function[apidoc:summary[contains(lower-case(.), 'deprecated')]]" mode="strip-non-javascript"/>

    <xsl:template match="apidoc:function[not(@class = 'xquery')][empty(@http-verb)][not(@name = '')][empty(apidoc:summary[contains(lower-case(.), 'deprecated')])]" mode="strip-non-javascript">
      <xsl:copy>
        <xsl:copy-of select="@*"/>
        <xsl:apply-templates select="node()" mode="strip-non-javascript"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="apidoc:param[not(@class = 'xquery')]" mode="strip-non-javascript">
      <!-- jump to other mode -->
      <xsl:apply-templates select="." mode="cleanup-types"/>
    </xsl:template>

    <xsl:template match="apidoc:return[not(@class = 'xquery')]" mode="strip-non-javascript">
      <!-- jump to other mode -->
      <xsl:apply-templates select="." mode="cleanup-types"/>
    </xsl:template>

    <!-- sort -->

    <xsl:template match="/wrap" mode="sort">
      <!-- jump to other mode -->
      <xsl:apply-templates select="apidoc:module" mode="strip-non-javascript">
        <xsl:sort select="(@lib, 'xdmp')[1]"/>
      </xsl:apply-templates>
    </xsl:template>

    <xsl:template match="apidoc:module" mode="sort">
      <xsl:copy>
        <xsl:copy-of select="@*"/>
        <!-- jump to other mode -->
        <xsl:apply-templates select="apidoc:summary" mode="strip-non-javascript"/>
        <xsl:apply-templates select="apidoc:function" mode="strip-non-javascript">
          <xsl:sort select="@name"/>
        </xsl:apply-templates>
      </xsl:copy>
    </xsl:template>

    <!-- cleanup-types -->

    <xsl:template match="apidoc:param" mode="cleanup-types">
      <xsl:variable name="type" select="normalize-space(@type)"/>
      <xsl:copy>
        <xsl:copy-of select="@* except (@optional, @type)" />
        <xsl:choose>
          <xsl:when test="matches($type, '^\[.*\]$')">
            <xsl:attribute name="type" select="substring($type, 2, string-length($type) - 2)"/>
            <xsl:attribute name="optional" select="'true'"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:copy-of select="@type" />
          </xsl:otherwise>
        </xsl:choose>
        <xsl:if test="empty(following-sibling::apidoc:param[@optional = false() or empty(@optional)])">
          <xsl:copy-of select="@optional" />
        </xsl:if>
        <xsl:copy-of select="node()" />
      </xsl:copy>
    </xsl:template>

    <xsl:template match="apidoc:param/@type" mode="cleanup-types">
      <xsl:variable name="type" select="normalize-space()"/>
      <xsl:copy>
        <xsl:choose>
          <xsl:when test="matches($type, '^\[.*\]$')">
            <xsl:attribute name="optional" select="'true'"/>
            <xsl:value-of select="substring($type, 2, string-length($type) - 2)"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="'XXX'"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="apidoc:return" mode="cleanup-types">
      <xsl:variable name="return" select="normalize-space()"/>
      <xsl:copy>
        <xsl:copy-of select="@*" />
        <xsl:choose>
          <xsl:when test="$return = ('empty-sequence()')">null</xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="$return"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:copy>
    </xsl:template>

  </xsl:stylesheet>, $xml)

return xdmp:quote($definition, map:new((map:entry("indent", "yes"), map:entry("indentUntyped", "yes"))))
