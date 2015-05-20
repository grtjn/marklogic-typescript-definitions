// Type definitions for NodeBuiltins
// Definitions: 

/**
The node built-in functions are XQuery functions defined to operate on nodes.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module NodeBuiltins {

  interface fn {

    /** Returns the name of a node, as an xs:string that is either the zero-length string, or has the lexical form of an xs:QName. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY002]. If the context item is not a node an error is raised: [err:XPTY0004]. If the argument is supplied and is the empty sequence, the function returns the zero-length string. If the target node has no name (that is, if it is a document node, a comment, a text node, or a namespace node having no name), the function returns the zero-length string. If the specified node was created with a namespace prefix, that namespace prefix is returned with the element localname (for example, a:hello). Note that the namespace prefix is not always the same prefix that would be returned if you serialized the QName of the node, as the serialized QName will use the namespace from the XQuery context in which it was serialized. **/
    name(arg?: Node): String;

    /** Returns the local part of the name of $arg as an xs:string that will either be the zero-length string or will have the lexical form of an xs:NCName. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. If the argument is supplied and is the empty sequence, the function returns the zero-length string. If the target node has no name (that is, if it is a document node, a comment, a text node, or a namespace node having no name), the function returns the zero-length string. Otherwise, the value returned will be the local part of the expanded-QName of the target node (as determined by the dm:node-name accessor in Section 5.11 node-name Accessor[DM]. This will be an xs:string whose lexical form is an xs:NCName. **/
    localName(arg?: Node): String;

    /** Returns the namespace URI of the xs:QName of the node specified by $arg. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. If $arg is the empty sequence, the xs:anyURI corresponding to the zero-length string is returned. If $arg is neither an element nor an attribute node, or if it is an element or attribute node whose expanded-QName (as determined by the dm:node-name accessor in the Section 5.11 node-name Accessor[DM]) is in no namespace, then the function returns the xs:anyURI corresponding to the zero-length string. **/
    namespaceUri(arg?: Node): String;

    /** Returns the value indicated by $arg or, if $arg is not specified, the context item after atomization, converted to an xs:double. If $arg is the empty sequence or if $arg or the context item cannot be converted to an xs:double, the xs:double value NaN is returned. If the context item is undefined an error is raised: [err:XPDY0002]. Calling the zero-argument version of the function is defined to give the same result as calling the single-argument version with an argument of ".". That is, fn:number() is equivalent to fn:number(.). If $arg is the empty sequence, NaN is returned. Otherwise, $arg, or the context item after atomization, is converted to an xs:double following the rules of 17.1.3.2 Casting to xs:double. If the conversion to xs:double fails, the xs:double value NaN is returned. **/
    number(arg?: Object): Number;

    /** This function tests whether the language of $node, or the context node if the second argument is omitted, as specified by xml:lang attributes is the same as, or is a sublanguage of, the language specified by $testlang. The language of the argument node, or the context node if the second argument is omitted, is determined by the value of the xml:lang attribute on the node, or, if the node has no such attribute, by the value of the xml:lang attribute on the nearest ancestor of the node that has an xml:lang attribute. If there is no such ancestor, then the function returns false If the second argument is omitted and the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised [err:XPTY0004]. If $testlang is the empty sequence it is interpreted as the zero-length string. The relevant xml:lang attribute is determined by the value of the XPath expression: (ancestor-or-self::* /@xml:lang)[last()] If this expression returns an empty sequence, the function returns false. Otherwise, the function returns true if and only if the string-value of the relevant xml:lang attribute is equal to $testlang based on a caseless default match as specified in section 3.13 of [The Unicode Standard], or if the string-value of the relevant testlang attribute contains a hyphen, "-" (The character "-" is HYPHEN-MINUS, #x002D) such that the part of the string-value preceding that hyphen is equal to $testlang, using caseless matching. **/
    lang(testlang: String, node?: Node): Object;

    /** Returns the root of the tree to which $arg belongs. This will usually, but not necessarily, be a document node. If $arg is the empty sequence, the empty sequence is returned. If $arg is a document node, $arg is returned. If the function is called without an argument, the context item is used as the default argument. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. **/
    root(arg?: Node): Node;

    /** Returns a string that uniquely identifies a given node. If $node is the empty sequence, the zero-length string is returned. If the function is called without an argument, the context item is used as the default argument. The behavior of the function when the argument is omitted is the same as if the context item is passed as an argument. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. **/
    generateId(node?: Node): String;


  }
}
