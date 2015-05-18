// Type definitions for FunctionBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/FunctionBuiltins.xml

/**
  The Higher-Order built-in functions are XQuery functions to support
  higher-order functions, and are part of the XQuery 3.0 working draft.
  They are defined in
  XPath and
  XQuery Functions and Operators 3.0.
  **/

declare module FunctionBuiltins {

  interface xdmp {

    /** Returns the QName of the function(s) that the xdmp:function refers to. **/
    functionName(function: xdmp:function): xs:QName;

    /** Returns the QName of the function(s) that the argument refers to. For more details, see XPath 3.0 Functions and Operators. **/
    functionName(function: function()): xs:QName;

    /** Returns the module location (if any) that the xdmp:function value refers to. **/
    functionModule(function: xdmp:function): xs:string;

    /** Returns the arity of the function(s) that the argument refers to. For more details, see XPath 3.0 Functions and Operators. **/
    functionArity(function: function()): xs:integer;

    /** Returns the signature of the function that the argument refers to. **/
    functionSignature(function: function()): xs:string;

    /** Returns the name of the parameter at the designated (1-based) position from the given function's signature. **/
    functionParameterName(function: function(), position: xs:integer): xs:QName;

    /** Returns the type of the parameter at the designated (1-based) position from the given function's signature. **/
    functionParameterType(function: function(), position: xs:integer): xs:string;

    /** Returns the return type from the given function's signature. **/
    functionReturnType(function: function()): xs:string;

    /** Returns a function value as an xdmp:function xdmp.function type. You can return an xdmp:function xdmp.function from an expression or a function. You can execute the function referred to by an xdmp:function xdmp.function by passing the xdmp:function xdmp.function value to xdmp:applyxdmp.apply. If the module-path ends with a file extension matching the ones configured for application/vnd.marklogic-javascript in your MarkLogic Mimetypes configuration, and the function's namespace URI is empty, the module is considered to be JavaScript. In this case, the function parameter can be empty. **/
    function(function: xs:QName, modulePath?: xs:string): xdmp:function;

    /** Returns a function with the given name and arity, or the empty sequence if none exists. For more details, see XPath 3.0 Functions and Operators. **/
    functionLookup(name: xs:QName, arity: xs:integer): function();

    /** Applies an xdmp:function with the given parameters. **/
    apply(function: xdmp:function, params-1ToN?: item()): item();

    /** Returns the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
    head(seq: item(), arg: ValueIterator): item();

    /** Returns all but the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
    tail(seq: item()): item();

    /** Applies the function item $function to every item from the sequence $seq in turn, returning the concatenation of the resulting sequences in order. For more details, see XPath 3.0 Functions and Operators. **/
    map(function: function(item()) as item(), seq: item()): item();

    /** Returns those items from the sequence $seq for which the supplied function $function returns true. For more details, see XPath 3.0 Functions and Operators. **/
    filter(function: function(item()) as xs:boolean, seq: item()): item();

    /** Processes the supplied sequence from left to right, applying the supplied function repeatedly to each item in turn, together with an accumulated result value. For more details, see XPath 3.0 Functions and Operators. **/
    foldLeft(function: function(item(), item()) as item(), zero: item(), seq: item()): item();

    /** Processes the supplied sequence from right to left, applying the supplied function repeatedly to each item in turn, together with an accumulated result value. For more details, see XPath 3.0 Functions and Operators. **/
    foldRight(function: function(item(), item()) as item(), zero: item(), seq: item()): item();

    /** Applies the function item $function to successive pairs of items taken one from $seq1 and one from $seq2, returning the concatenation of the resulting sequences in order. For more details, see XPath 3.0 Functions and Operators. **/
    mapPairs(function: function(item(), item()) as item(), seq1: item(), seq2: item()): item();

    /** Returns all in-scope functions. **/
    functions(): function();

    /** Returns the named annotation from the function. **/
    annotation(function: function(), name: xs:QName): item();


  }
}
