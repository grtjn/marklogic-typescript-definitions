// Type definitions for FormatBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/FormatBuiltins.xml

/**
The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
They are defined in
XPATH 2.0
Functions and Operators.
**/

declare module FormatBuiltins {

  interface fn {

    /** Returns a formatted dateTime value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatDateTime(value: xs:dateTime, picture: xs:string, language?: xs:string, calendar?: xs:string, country?: xs:string): xs:string;

    /** Returns a formatted date value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatDate(value: xs:date, picture: xs:string, language?: xs:string, calendar?: xs:string, country?: xs:string): xs:string;

    /** Returns a formatted time value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatTime(value: xs:time, picture: xs:string, language?: xs:string, calendar?: xs:string, country?: xs:string): xs:string;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
    parseDateTime(picture: xs:string, value: xs:string, language?: xs:string, calendar?: xs:string, country?: xs:string): xs:dateTime;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
    parseYymmdd(picture: xs:string, value: xs:string, language?: xs:string, calendar?: xs:string, country?: xs:string): xs:dateTime;

    /** Returns a formatted string representation of value argument based on the supplied picture. An optional decimal format name may also be supplied for interpretation of the picture string. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatNumber(value: xs:double, picture: xs:string, decimalFormatName?: xs:string): xs:string;

    /** Returns a formatted number value based on the picture argument. The difference between this function and the W3C standards fn:format-number function is that this function imitates the XSLT xsl:number instruction, which has richer formatting options than the fn:format-number function. This function can be used for spelled-out and ordinal numbering in many languages. This function is available in XSLT as well as in all dialects of XQuery and Server-Side JavaScript. **/
    formatNumber(value: xs:numeric, picture?: xs:string, language?: xs:string, letterValue?: xs:string, ordchar?: xs:string, zeroPadding?: xs:string, groupingSeparator?: xs:string, groupingSize?: xs:integer): xs:string;

    /** Returns month name, calculated from the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthNameFromDate(arg: xs:date): xs:string;

    /** Returns an xs:string representing the dayname value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    daynameFromDate(arg: xs:date): xs:string;


  }
}
