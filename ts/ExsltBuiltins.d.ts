// Type definitions for ExsltBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/ExsltBuiltins.xml

/**
EXSLT extension functions are extensions to XSLT spec as a community initiative.

They are defined at
EXSLT Extensions.
**/

declare module ExsltBuiltins {

  interface fn {

    /** Returns a sequence of nodes based on the input object. If the input is a sequence of nodes, it is returned as it is. If it is a node, it is simply returned as a singleton sequence. For all other atomic types, a text node is returned based on the string-value of the type. This was a useful function in XSLT 1.0 where "Result Tree Fragments" are returned as a result of xslt instruction. In XSLT 2.0, however, xslt instructions return sequences. This function is simply being provided for backward compatibility to existing applications. **/
    nodeSet(value: item()): node();

    /** Returns a string that contains the type-name of the object passed as the argument. **/
    objectType(value: item()): string;


  }
}
