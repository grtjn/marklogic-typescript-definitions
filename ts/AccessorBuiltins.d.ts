// Type definitions for AccessorBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/AccessorBuiltins.xml

/**
The accessor built-in functions are XQuery functions to access node properties.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module AccessorBuiltins {

  interface fn {

    /** [0.9-ml only, use xdmp:node-kind in 1.0 and 1.0-ml] Returns an xs:string representing the node's kind: either "document", "element", "attribute", "text", "namespace", "processing-instruction", "binary", or "comment". **/
    nodeKind(node: node()): string;

    /** Returns an xs:string representing the node's kind: either "document", "element", "attribute", "text", "namespace", "processing-instruction", "binary", or "comment". The fn:node-kind builtin was dropped from the final XQuery 1.0 spec. This is the equivalent function in the xdmp: namespace carried over for MarkLogic 1.0 dialects. **/
    nodeKind(node: node()): string;

    /** Returns an expanded-QName for node kinds that can have names. For other kinds of nodes it returns the empty sequence. If $arg is the empty sequence, the empty sequence is returned. **/
    nodeName(arg: node()): QName;

    /** Summary: Returns an xs:boolean indicating whether the argument node is "nilled". If the argument is not an element node, returns the empty sequence. If the argument is the empty sequence, returns the empty sequence. For element nodes, true() is returned if the element is nilled, otherwise false(). Elements may be defined in a schema as nillable, which allows an empty instance of an element to a appear in a document even though its type requires that it always have some content. Nilled elements should always be empty but an element is not considered nilled just because it's empty. It must also have the type annotation attribute xsi:nil="true". **/
    nilled(arg: node()): boolean;

    /** Returns the value of $arg represented as an xs:string. If no argument is supplied, this function returns the string value of the context item (.). **/
    string(arg?: item()): string;

    /** Takes a sequence of items and returns a sequence of atomic values. The fn:data function returns the sequence of atomic values produced by applying the following rules to each item in $arg: If the item is an atomic value, it is returned.If the item is a node: If the node does not have a typed value an error is raised [err:FOTY0012].Otherwise, fn:data returns the typed value of the node as defined by the accessor function dm:typed-value in Section 5.15 typed-value Accessor[DM]. **/
    data(arg: item()): anyAtomicType;

    /** Returns the value of the base-uri property for the specified node. If the node is part of a document and does not have a base-uri attribute explicitly set, fn:base-uri typically returns the URI of the document in which the node resides. **/
    baseUri(arg?: node()): anyURI;

    /** Returns the value of the document-uri property for the specified node. If the node is a document node, then the value returned is the URI of the document. If the node is not a document node, then fn:document-uri returns the empty sequence. **/
    documentUri(arg: node()): anyURI;

    /** Returns true if a value could be atomized without error. If no argument is supplied, this function checks whether the context item can be atomized without error. **/
    atomizable(item?: any): boolean;


  }
}
