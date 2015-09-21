// Type definitions for QNameBuiltins
// Definitions: 

/**
These built-in functions are XQuery functions defined to operate on
qualified name (xs:QName) values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

interface fnFunctions {

    /** Returns an xs:QName value (that is, an expanded QName) by taking an xs:string that has the lexical form of an xs:QName (a string in the form "prefix:local-name" or "local-name") and resolving it using the in-scope namespaces for a given element. **/
  resolveQName(qname: string, element: Node): Object;

    /** Returns an xs:QName with the namespace URI given in $paramURI. If $paramURI is the zero-length string or the empty sequence, it represents "no namespace"; in this case, if the value of $paramQName contains a colon (:), an error is raised [err:FOCA0002]. The prefix (or absence of a prefix) in $paramQName is retained in the returned xs:QName value. The local name in the result is taken from the local part of $paramQName. **/
  QName(paramURI: string, paramQName: string): Object;

    /** Returns an xs:NCName representing the prefix of $arg. The empty sequence is returned if $arg is the empty sequence or if the value of $arg contains no prefix. **/
  prefixFromQName(arg: Object): Object;

    /** Returns an xs:NCName representing the local part of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  localNameFromQName(arg: Object): Object;

    /** Returns the namespace URI for $arg as an xs:string. If $arg is the empty sequence, the empty sequence is returned. If $arg is in no namespace, the zero-length string is returned. **/
  namespaceUriFromQName(arg: Object): string;

    /** Returns the namespace URI of one of the in-scope namespaces for $element, identified by its namespace prefix. If $element has an in-scope namespace whose namespace prefix is equal to $prefix, it returns the namespace URI of that namespace. If $prefix is the zero-length string or the empty sequence, it returns the namespace URI of the default (unnamed) namespace. Otherwise, it returns the empty sequence. Prefixes are equal only if their Unicode code points match exactly. **/
  namespaceUriForPrefix(prefix: string, element: Node): string;

    /** Returns the prefixes of the in-scope namespaces for $element. For namespaces that have a prefix, it returns the prefix as an xs:NCName. For the default namespace, which has no prefix, it returns the zero-length string. **/
  inScopePrefixes(element: Node): string;

}
declare var fn:fnFunctions
