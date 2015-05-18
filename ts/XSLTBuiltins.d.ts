// Type definitions for XSLTBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/XSLTBuiltins.xml

/**
The XSLT functions.  These functions are available in XSLT only.
They are defined in
XSL Transformations (XSLT) Version 2.0.
**/

declare module XSLTBuiltins {

  interface fn {

    /** While the xsl:matching-substring instruction is active, a set of current captured substrings is available, corresponding to the parenthesized sub-expressions of the regular expression. These captured substrings are accessible using the function regex-group. This function takes an integer argument to identify the group, and returns a string representing the captured substring. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    regexGroup(groupNumber: number): string;

    /** Returns the item that was the context item at the point where the expression was invoked from the XSLT stylesheet. This function is only available in XSLT; it is not available in XQuery. **/
    current(): any;

    /** Returns the position of the current item. This function is only available in XSLT; it is not available in XQuery. **/
    currentPosition(): number;

    /** Returns the size of the current node list. This function is only available in XSLT; it is not available in XQuery. **/
    currentLast(): number;

    /** Returns a string representing the value of the system property identified by the name. If there is no such system property, the zero-length string is returned. This function is only available in XSLT; it is not available in XQuery. **/
    systemProperty(propertyName: string): string;

    /** Returns true if and only if the name of an XSLT instruction is passed in. This function is only available in XSLT; it is not available in XQuery. **/
    elementAvailable(elementName: string): boolean;

    /** The key function does for keys what the id function does for IDs. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    key(keyName: string, keyValue: string, top?: node()): node();

    /** Returns the current regex group. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    currentGroup(): item();

    /** Returns the current regex grouping key. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    currentGroupingKey(): anyAtomicType;

    /** Returns true if and only if there is a type whose name matches the value of the $type-name argument is present in the static context. This is an XSLT function, and it is available in both XSLT and in XQuery 1.0-ml. **/
    typeAvailable(typeName: string): boolean;

    /** Returns true if and only if there is a function whose name and optionally arity matches the value of the $function-name and the optional $arity arguments. This is an XSLT function, and it is available in both XSLT, XQuery 1.0-ml, and JavaScript. **/
    functionAvailable(functionName: string, arity?: number): boolean;

    /** Always returns the zero length string. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    unparsedEntityUri(entityName: string): anyURI;

    /** Returns the public identifier of the unparsed entity specified by the $entity-name parameter. If no such entity exists or if the entity has no public identifier, this function returns the empty string. This function is only available in XSLT; it is not available in XQuery or JavaScript. **/
    unparsedEntityPublicId(entityName: string): string;


  }
}
