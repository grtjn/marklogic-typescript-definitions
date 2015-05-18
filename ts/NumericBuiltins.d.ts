// Type definitions for NumericBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/NumericBuiltins.xml

/**
The numeric built-in functions are XQuery functions defined to operate on
numeric values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module NumericBuiltins {

  interface fn {

    /** Returns the absolute value of $arg. If $arg is negative returns -$arg otherwise returns $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive zero (+0) or negative zero (-0), then positive zero (+0) is returned. If the argument is positive or negative infinity, positive infinity is returned. For detailed type semantics, see Section 7.2.1 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions of [XQuery 1.0 and XPath 2.0 Formal Semantics]. **/
    abs(arg: numeric): numeric;

    /** Returns the smallest (closest to negative infinity) number with no fractional part that is not less than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero and greater than -1, negative zero is returned. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
    ceiling(arg: numeric): numeric;

    /** Returns the largest (closest to positive infinity) number with no fractional part that is not greater than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For float and double arguments, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
    floor(arg: numeric): numeric;

    /** Returns the number with no fractional part that is closest to the argument. If there are two such numbers, then the one that is closest to positive infinity is returned. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive infinity, then positive infinity is returned. If the argument is negative infinity, then negative infinity is returned. If the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero, but greater than or equal to -0.5, then negative zero is returned. In the cases where positive zero or negative zero is returned, negative zero or positive zero may be returned as [XML Schema Part 2: Datatypes Second Edition] does not distinguish between the values positive zero and negative zero. For the last two cases, note that the result is not the same as fn:floor(x+0.5). For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
    round(arg: numeric): numeric;

    /** The value returned is the nearest (that is, numerically closest) numeric to $arg that is a multiple of ten to the power of minus $precision. If two such values are equally near (e.g. if the fractional part in $arg is exactly .500...), returns the one whose least significant digit is even. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. If no precision is specified, the result produces is the same as with $precision=0. For arguments of type xs:float and xs:double, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero, but greater than or equal o -0.5, then negative zero is returned. If $arg is of type xs:float or xs:double, rounding occurs on the value of the mantissa computed with exponent = 0. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
    roundHalfToEven(arg: numeric, precision?: xs:integer): numeric;


  }
}
