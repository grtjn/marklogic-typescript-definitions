// Type definitions for TraceBuiltins
// Definitions: 

/**
The error and trace built-in functions are XQuery functions defined for 
throwing errors from XQuery programs and debug tracing.
They are defined in
XQuery 1.0 
and XPath 2.0 Functions and Operators. 

The error and trace built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
**/

declare module TraceBuiltins {

  interface fn {

    /** Return the input $value unchanged and, if $label is the name of an enabled server event, emit that server event to the server log file (ErrorLog.txt) with $value as its data. **/
    trace(value: String, label: String): String;


  }
}
