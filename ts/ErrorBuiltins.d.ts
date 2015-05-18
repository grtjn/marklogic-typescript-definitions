// Type definitions for ErrorBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/ErrorBuiltins.xml

/**
The error built-in functions are XQuery functions defined for reporting
errors.
They are defined in
XQuery 1.0 
and XPath 2.0 Functions and Operators. 

The error built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
**/

declare module ErrorBuiltins {

  interface fn {

    /** [1.0 and 1.0-ml only, 0.9-ml has a different signature] Throw the given error. When an error is thrown, the XQuery program execution is stopped. For detailed semantics, see http://www.w3.org/TR/xpath-functions/#func-error. **/
    error(error?: QName, description?: string, data?: item()): void;


  }
}
