// Type definitions for StringBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/StringBuiltins.xml

/**
The string built-in functions are XQuery functions defined to operate on
string values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The string built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
**/

declare module StringBuiltins {

  interface fn {

    /** Creates an xs:string from a sequence of Unicode code points. Returns the zero-length string if $arg is the empty sequence. If any of the code points in $arg is not a legal XML character, an error is raised. **/
    codepointsToString(arg: xs:integer): xs:string;

    /** Returns the sequence of Unicode code points that constitute an xs:string. If $arg is a zero-length string or the empty sequence, the empty sequence is returned. **/
    stringToCodepoints(arg: xs:string): xs:integer;

    /** Returns -1, 0, or 1, depending on whether the value of the $comparand1 is respectively less than, equal to, or greater than the value of $comparand2, according to the rules of the collation that is used. **/
    compare(comparand1: xs:string, comparand2: xs:string, collation?: xs:string): xs:integer;

    /** Returns true if the specified parameters are the same Unicode code point, otherwise returns false. The codepoints are compared according to the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint). If either argument is the empty sequence, the result is the empty sequence. **/
    codepointEqual(comparand1: xs:string, comparand2: xs:string): xs:boolean;

    /** Returns the xs:string that is the concatenation of the values of the specified parameters. Accepts two or more xs:anyAtomicType arguments and casts them to xs:string. If any of the parameters is the empty sequence, the parameter is treated as the zero-length string. **/
    concat(parameter1: xs:anyAtomicType, parameterN?: xs:anyAtomicType,...): xs:string;

    /** Returns an xs:string created by concatenating the members of the $parameter1 sequence using $parameter2 as a separator. If the value of $arg2 is the zero-length string, then the members of $parameter1 are concatenated without a separator. If the value of $parameter1 is the empty sequence, the zero-length string is returned. **/
    stringJoin(parameter1: xs:string, parameter2: xs:string): xs:string;

    /** Returns true if the first parameter starts with the string from the second parameter, otherwise returns false. **/
    startsWith(parameter1: xs:string, parameter2: xs:string, collation?: xs:string): xs:boolean;

    /** Returns true if the first parameter ends with the string from the second parameter, otherwise returns false. **/
    endsWith(parameter1: xs:string, parameter2: xs:string, collation?: xs:string): xs:boolean;

    /** Returns true if the first parameter contains the string from the second parameter, otherwise returns false. **/
    contains(parameter1: xs:string, parameter2: xs:string, collation?: xs:string): xs:boolean;

    /** Returns a substring starting from the $startingLoc and continuing for $length characters. **/
    substring(sourceString: xs:string, startingLoc: xs:double, length?: xs:double): xs:string;

    /** Returns an integer representing the length of the specified string. The length is 1-based, so a string that is one character long returns a value of 1. **/
    stringLength(sourceString?: xs:string): xs:integer;

    /** Returns the substring created by taking all of the input characters that occur before the specified $before characters. **/
    substringBefore(input: xs:string, before: xs:string, collation?: xs:string): xs:string;

    /** Returns the substring created by taking all of the input characters that occur after the specified $after characters. **/
    substringAfter(input: xs:string, after: xs:string, collation?: xs:string): xs:string;

    /** Returns the specified string with normalized whitespace, which strips off any leading or trailing whitespace and replaces any other sequences of more than one whitespace characters with a single space character (#x20). **/
    normalizeSpace(input?: xs:string): xs:string;

    /** Return the argument normalized according to the normalization criteria for a normalization form identified by the value of $normalizationForm. The effective value of the $normalizationForm is computed by removing leading and trailing blanks, if present, and converting to upper case. **/
    normalizeUnicode(arg: xs:string, normalizationForm?: xs:string): xs:string;

    /** Returns the specified string converting all of the characters to upper-case characters. If a character does not have a corresponding upper-case character, then the original character is returned. The upper-case characters are determined using the Unicode Case Mappings. **/
    upperCase(string: xs:string): xs:string;

    /** Returns the specified string converting all of the characters to lower-case characters. If a character does not have a corresponding lower-case character, then the original character is returned. The lower-case characters are determined using the Unicode Case Mappings. **/
    lowerCase(string: xs:string): xs:string;

    /** Returns a string where every character in $src that occurs in some position in the $mapString is translated into the $transString character in the corresponding location of the $mapString character. **/
    translate(src: xs:string, mapString: xs:string, transString: xs:string): xs:string;

    /** [0.9-ml only] Returns a string representing the $padString concatenated with itself the number of times specifed in $padCount. **/
    stringPad(padString: xs:string, padCount: xs:integer): xs:string;

    /** This is a May 2003 function, and is only available in compatibility mode (XQuery 0.9-ML)--it has been replaced with fn:encode-for-uri, fn:iri-to-uri, and fn:escape-html-uri. Returns a string representing the specified URI either with escaped reserved characters ($escape-reserved=true) or with the reserved characters left as specified ($escape-reserved=true). For more details, see the W3C XQuery Functions and Operators specification. **/
    escapeUri(uriPart: xs:string, escapeReserved: xs:boolean): xs:string;

    /** Invertible function that escapes characters required to be escaped inside path segments of URIs. **/
    encodeForUri(uriPart: xs:string): xs:string;

    /** Idempotent function that escapes non-URI characters. **/
    iriToUri(uriPart: xs:string): xs:string;

    /** %-escapes everything except printable ASCII characters. **/
    escapeHtmlUri(uriPart: xs:string): xs:string;

    /** Invertible function that escapes characters required to be part of an NCName. This is useful when translating names from other representations such as JSON to XML. Given any string, the result is always a valid NCName. Providing all names are passed through this function the result is distinct NCNames so the results can be used for searching as well as name generation. The inverse function is xdmp:decode-for-NCName. **/
    encodeForNCName(name: xs:string): xs:string;

    /** Invertible function that decodes characters an NCName produced by xdmp:encode-for-NCName. Given the NCName produced by xdmp:encode-for-NCName this function returns the original string. **/
    decodeFromNCName(name: xs:string): xs:string;

    /** Returns an integer value representing the starting position of a string within the search string. Note, the string starting position is 1. If the first parameter is empty, the result is the empty sequence. **/
    position(test: xs:string, target: xs:string, collation?: xs:string): xs:integer;

    /** Returns the string where the first letter of each token has been uppercased. **/
    initcap(string: xs:string): xs:string;


  }
}
