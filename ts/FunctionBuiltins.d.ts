// Type definitions for FunctionBuiltins
// Definitions: 

/**
  The Higher-Order built-in functions are XQuery functions to support
  higher-order functions, and are part of the XQuery 3.0 working draft.
  They are defined in
  XPath and
  XQuery Functions and Operators 3.0.
  **/

interface xdmpFunctions {

    /** Returns the QName of the function(s) that the xdmp:function refers to. **/
  functionName(functionArg: Object): Object;

    /** Returns the module location (if any) that the xdmp:function value refers to. **/
  functionModule(functionArg: Object): string;

    /** Returns the signature of the function that the argument refers to. **/
  functionSignature(functionArg: () => any): string;

    /** Returns the name of the parameter at the designated (1-based) position from the given function's signature. **/
  functionParameterName(functionArg: () => any, position: number): Object;

    /** Returns the type of the parameter at the designated (1-based) position from the given function's signature. **/
  functionParameterType(functionArg: () => any, position: number): string;

    /** Returns the return type from the given function's signature. **/
  functionReturnType(functionArg: () => any): string;

    /** Returns a function value as an xdmp:function xdmp.function type. You can return an xdmp:function xdmp.function from an expression or a function. You can execute the function referred to by an xdmp:function xdmp.function by passing the xdmp:function xdmp.function value to xdmp:applyxdmp.apply. If the module-path ends with a file extension matching the ones configured for application/vnd.marklogic-javascript in your MarkLogic Mimetypes configuration, and the function's namespace URI is empty, the module is considered to be JavaScript. In this case, the function parameter can be empty. **/
  functionArg(functionArg: Object, modulePath?: string): Object;

    /** Applies an xdmp:function with the given parameters. **/
  apply(functionArg: Object, params1ToN?: string): string;

}
declare var xdmp:xdmpFunctions
interface fnFunctions {

    /** Returns a function with the given name and arity, or the empty sequence if none exists. For more details, see XPath 3.0 Functions and Operators. **/
  functionLookup(name: Object, arity: number): () => any;

    /** Returns the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
  head(seq: string, arg: Object): string;

    /** Returns all but the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
  tail(seq: string): string;

}
declare var fn:fnFunctions
