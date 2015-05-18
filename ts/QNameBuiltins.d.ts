// Type definitions for QNameBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/QNameBuiltins.xml

/**
These built-in functions are XQuery functions defined to operate on
qualified name (xs:QName) values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module QNameBuiltins {

  interface fn {

    /** Returns an xs:QName value (that is, an expanded QName) by taking an xs:string that has the lexical form of an xs:QName (a string in the form "prefix:local-name" or "local-name") and resolving it using the in-scope namespaces for a given element. **/
    resolveQName(qname: xs:string, element: element()): xs:QName;

    /** Returns an xs:QName with the namespace URI given in $paramURI. If $paramURI is the zero-length string or the empty sequence, it represents "no namespace"; in this case, if the value of $paramQName contains a colon (:), an error is raised [err:FOCA0002]. The prefix (or absence of a prefix) in $paramQName is retained in the returned xs:QName value. The local name in the result is taken from the local part of $paramQName. **/
    QName(paramURI: xs:string, paramQName: xs:string): xs:QName;

    /** [0.9-ml only, use fn:QName instead] Returns an xs:QName with the namespace URI given in $paramURI and the local name in $paramLocal. If $paramURI is the zero-length string or the empty sequence, it represents "no namespace". **/
    expandedQName(paramURI: xs:string, paramLocal: xs:string): xs:QName;

    /** Returns an xs:NCName representing the prefix of $arg. The empty sequence is returned if $arg is the empty sequence or if the value of $arg contains no prefix. **/
    prefixFromQName(arg: xs:QName): xs:NCName;

    /** Returns an xs:NCName representing the local part of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    localNameFromQName(arg: xs:QName): xs:NCName;

    /** Returns the namespace URI for $arg as an xs:string. If $arg is the empty sequence, the empty sequence is returned. If $arg is in no namespace, the zero-length string is returned. **/
    namespaceUriFromQName(arg: xs:QName): xs:anyURI;

    /** Returns the namespace URI of one of the in-scope namespaces for $element, identified by its namespace prefix. If $element has an in-scope namespace whose namespace prefix is equal to $prefix, it returns the namespace URI of that namespace. If $prefix is the zero-length string or the empty sequence, it returns the namespace URI of the default (unnamed) namespace. Otherwise, it returns the empty sequence. Prefixes are equal only if their Unicode code points match exactly. **/
    namespaceUriForPrefix(prefix: xs:string, element: element()): xs:anyURI;

    /** Returns the prefixes of the in-scope namespaces for $element. For namespaces that have a prefix, it returns the prefix as an xs:NCName. For the default namespace, which has no prefix, it returns the zero-length string. **/
    inScopePrefixes(element: element()): xs:string;


  }
}
