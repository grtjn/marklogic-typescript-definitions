// Type definitions for BooleanBuiltins
// Definitions: 

/**
The boolean built-in functions are XQuery functions to manipulate xs:boolean
values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

interface fnFunctions {

    /** Returns the xs:boolean value true. Equivalent to xs:boolean("1"). **/
  true(): boolean;

    /** Returns the xs:boolean value false. Equivalent to xs:boolean("0"). **/
  false(): boolean;

    /** Returns true if the effective boolean value is false, and false if the effective boolean value is true. The $arg parameter is first reduced to an effective boolean value by applying the fn:boolean function. **/
  not(arg: string): boolean;

}
declare var fn:fnFunctions
