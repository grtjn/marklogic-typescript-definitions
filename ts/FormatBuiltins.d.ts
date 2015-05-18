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
    formatDateTime(value: dateTime, picture: string, language?: string, calendar?: string, country?: string): string;

    /** Returns a formatted date value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatDate(value: date, picture: string, language?: string, calendar?: string, country?: string): string;

    /** Returns a formatted time value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatTime(value: time, picture: string, language?: string, calendar?: string, country?: string): string;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
    parseDateTime(picture: string, value: string, language?: string, calendar?: string, country?: string): dateTime;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
    parseYymmdd(picture: string, value: string, language?: string, calendar?: string, country?: string): dateTime;

    /** Returns a formatted string representation of value argument based on the supplied picture. An optional decimal format name may also be supplied for interpretation of the picture string. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
    formatNumber(value: double, picture: string, decimalFormatName?: string): string;

    /** Returns a formatted number value based on the picture argument. The difference between this function and the W3C standards fn:format-number function is that this function imitates the XSLT xsl:number instruction, which has richer formatting options than the fn:format-number function. This function can be used for spelled-out and ordinal numbering in many languages. This function is available in XSLT as well as in all dialects of XQuery and Server-Side JavaScript. **/
    formatNumber(value: numeric, picture?: string, language?: string, letterValue?: string, ordchar?: string, zeroPadding?: string, groupingSeparator?: string, groupingSize?: number): string;

    /** Returns month name, calculated from the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthNameFromDate(arg: date): string;

    /** Returns an xs:string representing the dayname value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    daynameFromDate(arg: date): string;


  }
}
