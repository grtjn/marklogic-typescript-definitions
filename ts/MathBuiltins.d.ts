// Type definitions for MathBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/MathBuiltins.xml

/**
The math built-in functions.
**/

declare module MathBuiltins {

  interface math {

    /** Returns the arc cosine of x, in radians, in the range from 0 to pi (inclusive). **/
    acos(x: double): double;

    /** Returns the arc sine of x, in radians, in the range from -pi/2 to +pi/2 (inclusive). **/
    asin(x: double): double;

    /** Returns the arc tangent of x, in radians. in the range from -pi/2 to +pi/2 (inclusive). **/
    atan(x: double): double;

    /** Returns the arc tangent of y/x, in radians, in the range from -pi/2 to +pi/2 (inclusive), using the signs of y and x to determine the apropriate quadrant. **/
    atan2(y: double, x: double): double;

    /** Returns the cosine of x, in the range from -1 to +1 (inclusive). **/
    cos(x: double): double;

    /** Returns the hyperbolic cosine of x. **/
    cosh(x: double): double;

    /** Returns the sine of x, in the range from -1 to +1 (inclusive). **/
    sin(x: double): double;

    /** Returns the hyperbolic sine of x. **/
    sinh(x: double): double;

    /** Returns the tangent of x. **/
    tan(x: double): double;

    /** Returns the cotangent of x. **/
    cot(x: double): double;

    /** Returns the hyperbolic tangent of x, in the range from -1 to +1 (inclusive). **/
    tanh(x: double): double;

    /** Returns e (approximately 2.71828182845905) to the xth power. **/
    exp(x: double): double;

    /** Returns x broken up into mantissa and exponent, where x = mantissa*2^exponent. **/
    frexp(x: double): ValueIterator;

    /** Returns x*2^i. **/
    ldexp(y: double, i: number): double;

    /** Returns the base-e logarithm of x. **/
    log(x: double): double;

    /** Returns the base-10 logarithm of x. **/
    log10(x: double): double;

    /** Returns x broken up into fraction and integer. x = fraction+integer. **/
    modf(x: double): ValueIterator;

    /** Returns x^y. **/
    pow(x: double, y: double): double;

    /** Returns the square root of x. **/
    sqrt(x: double): double;

    /** Returns the smallest integer greater than or equal to x. **/
    ceil(x: double): double;

    /** Returns the absolute value of x. **/
    fabs(x: double): double;

    /** Returns the largest integer less than or equal to x. **/
    floor(x: double): double;

    /** Returns the remainder of x/y. **/
    fmod(x: double, x: double): double;

    /** Returns numeric expression converted from radians to degrees. **/
    degrees(x: double): double;

    /** Returns numeric expression converted from degrees to radians. **/
    radians(x: double): double;

    /** Returns the value of pi. **/
    pi(): double;

    /** Returns the population variance of a sequence of values. The function returns the empty sequence if the input is the empty sequence. **/
    varianceP(arg: double): double;

    /** Returns the sample variance of a sequence of values. The function returns the empty sequence if the length of the input sequence is less than 2. **/
    variance(arg: double): double;

    /** Returns the standard deviation of a population. The function returns the empty sequence if the input is the empty sequence. **/
    stddevP(arg: double): double;

    /** Returns the sample standard deviation of a sequence of values. The function returns the empty sequence if the length of the input sequence is less than 2. **/
    stddev(arg: double): double;

    /** Returns the population covariance of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is 0, the function returns the empty sequence. For the version of this that uses range indexes, see cts:covariance-pcts.covarianceP. **/
    covarianceP(arg: array): double;

    /** Returns the sample covariance of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. For the version of this that uses range indexes, see cts:covariancects.covariance. **/
    covariance(arg: array): double;

    /** Returns the Pearson correlation coefficient of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. After the elimination, if the standard deviation of the first column or the standard deviation of the second column is 0, the function returns the empty sequence. **/
    correlation(arg: array): double;

    /** Returns a linear model that fits the given data set. The size of the input array should be 2, as currently only simple linear regression model is supported. The first element of the array should be the value of the dependent variable while the other element should be the value of the independent variable. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. After the elimination, if the standard deviation of the independent variable is 0, the function returns a linear model with intercept = the mean of the dependent variable, coefficients = NaN and r-squared = NaN. After the elimination, if the standard deviation of the dependent variable is 0, the function returns a linear model with r-squared = NaN. For the version of this function that uses Range Indexes, see cts:linear-model. **/
    linearModel(arg: array): linear-model;

    /** Returns the intercept of the linear model. **/
    linearModelIntercept(linearModel: linear-model): double;

    /** Returns the R^2 value of the linear model. **/
    linearModelRsquared(linearModel: linear-model): double;

    /** Returns the coefficients of the linear model. Currently only simple linear regression model is supported so the return should contain only one coefficient (also called "slope"). **/
    linearModelCoeff(linearModel: linear-model): double;

    /** Returns a sequence of percentile(s) given a sequence of percentage(s). The function returns the empty sequence if either $arg or $p is the empty sequence. **/
    percentile(arg: double, p: double): double;

    /** Returns the median of a sequence of values. The function returns the empty sequence if the input is the empty sequence. **/
    median(arg: double): double;

    /** Returns a sequence of percentile(s) given a sequence of percentage(s). This function works like math:percentile except each item in the sequence is repeated cts:frequency times before calculating the percentiles(s). The function returns the empty sequence if either $arg or $p is the empty sequence. **/
    percentile(arg: double, p: double): double;

    /** Returns a frequency-weighted median of a sequence. This function works like math:median except each item in the sequence is repeated cts:frequency times before calculating the median. If $arg is the empty sequence, the function returns the empty sequence. **/
    median(arg: double): double;

    /** Returns the rank of a value in a data set. Ranks are skipped in the event of ties. If the given value is not equal to any item in the sequence, the function returns the empty sequence. The function can be used on numeric values, xs:yearMonthDuration, xs:dayTimeDuration, xs:string, xs:anyURI, xs:date, xs:dateTime, xs:time, and cts:point. **/
    rank(arg: anyAtomicType, arg: anyAtomicType, options?: string): number;

    /** Returns the rank of a value in a data set as a percentage of the data set. If the given value is not equal to any item in the sequence, the function returns the empty sequence. See math:rank. **/
    percentRank(arg: anyAtomicType, value: anyAtomicType, options?: string): double;

    /** Returns the rank of a value in a data set. This function works like math:rank except each item in the sequence is repeated cts:frequency times before calculating the rank. **/
    rank(arg: anyAtomicType, value: anyAtomicType, options?: string): number;

    /** Returns the rank of a value in a data set as a percentage of the data set. This function works like math:percent-rank except each item in the sequence is repeated cts:frequency times before calculating the rank. **/
    percentRank(arg: anyAtomicType, value: anyAtomicType, options?: string): double;

    /** Returns the mode of a sequence. The mode is the value that occurs most frequently in a data set. If no value occurs more than once in the data set, the function returns the empty sequence. If the input is the empty sequence, the function returns the empty sequence. Note that a data set can have multiple “modes”. The order of multiple modes in the returned sequence is undefined. Also note that values from a lexicon lookup are repeated cts:frequency times before calculating the mode. The function can be used on numeric values, xs:yearMonthDuration, xs:dayTimeDuration, xs:string, xs:anyURI, xs:date, xs:dateTime, xs:time, and cts:point. **/
    mode(arg: anyAtomicType, options?: string): anyAtomicType;

    /** Returns the number truncated to a certain number of decimal places. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive infinity, then positive infinity is returned. If the argument is negative infinity, then negative infinity is returned. If the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. **/
    trunc(arg: numeric, n?: number): numeric;


  }
}
