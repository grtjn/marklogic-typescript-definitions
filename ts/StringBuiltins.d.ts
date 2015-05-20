// Type definitions for StringBuiltins
// Definitions: 

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
    codepointsToString(arg: Number): String;

    /** Returns the sequence of Unicode code points that constitute an xs:string. If $arg is a zero-length string or the empty sequence, the empty sequence is returned. **/
    stringToCodepoints(arg: String): Number;

    /** Returns -1, 0, or 1, depending on whether the value of the $comparand1 is respectively less than, equal to, or greater than the value of $comparand2, according to the rules of the collation that is used. **/
    compare(comparand1: String, comparand2: String, collation?: String): Number;

    /** Returns true if the specified parameters are the same Unicode code point, otherwise returns false. The codepoints are compared according to the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint). If either argument is the empty sequence, the result is the empty sequence. **/
    codepointEqual(comparand1: String, comparand2: String): Object;

    /** Returns the xs:string that is the concatenation of the values of the specified parameters. Accepts two or more xs:anyAtomicType arguments and casts them to xs:string. If any of the parameters is the empty sequence, the parameter is treated as the zero-length string. **/
    concat(parameter1: Object, parameterN?: Object): String;

    /** Returns an xs:string created by concatenating the members of the $parameter1 sequence using $parameter2 as a separator. If the value of $arg2 is the zero-length string, then the members of $parameter1 are concatenated without a separator. If the value of $parameter1 is the empty sequence, the zero-length string is returned. **/
    stringJoin(parameter1: String, parameter2: String): String;

    /** Returns true if the first parameter starts with the string from the second parameter, otherwise returns false. **/
    startsWith(parameter1: String, parameter2: String, collation?: String): Object;

    /** Returns true if the first parameter ends with the string from the second parameter, otherwise returns false. **/
    endsWith(parameter1: String, parameter2: String, collation?: String): Object;

    /** Returns true if the first parameter contains the string from the second parameter, otherwise returns false. **/
    contains(parameter1: String, parameter2: String, collation?: String): Object;

    /** Returns a substring starting from the $startingLoc and continuing for $length characters. **/
    substring(sourceString: String, startingLoc: Number, length?: Number): String;

    /** Returns an integer representing the length of the specified string. The length is 1-based, so a string that is one character long returns a value of 1. **/
    stringLength(sourceString?: String): Number;

    /** Returns the substring created by taking all of the input characters that occur before the specified $before characters. **/
    substringBefore(input: String, before: String, collation?: String): String;

    /** Returns the substring created by taking all of the input characters that occur after the specified $after characters. **/
    substringAfter(input: String, after: String, collation?: String): String;

    /** Returns the specified string with normalized whitespace, which strips off any leading or trailing whitespace and replaces any other sequences of more than one whitespace characters with a single space character (#x20). **/
    normalizeSpace(input?: String): String;

    /** Return the argument normalized according to the normalization criteria for a normalization form identified by the value of $normalizationForm. The effective value of the $normalizationForm is computed by removing leading and trailing blanks, if present, and converting to upper case. **/
    normalizeUnicode(arg: String, normalizationForm?: String): String;

    /** Returns the specified string converting all of the characters to upper-case characters. If a character does not have a corresponding upper-case character, then the original character is returned. The upper-case characters are determined using the Unicode Case Mappings. **/
    upperCase(string: String): String;

    /** Returns the specified string converting all of the characters to lower-case characters. If a character does not have a corresponding lower-case character, then the original character is returned. The lower-case characters are determined using the Unicode Case Mappings. **/
    lowerCase(string: String): String;

    /** Returns a string where every character in $src that occurs in some position in the $mapString is translated into the $transString character in the corresponding location of the $mapString character. **/
    translate(src: String, mapString: String, transString: String): String;

    /** Invertible function that escapes characters required to be escaped inside path segments of URIs. **/
    encodeForUri(uriPart: String): String;

    /** Idempotent function that escapes non-URI characters. **/
    iriToUri(uriPart: String): String;

    /** %-escapes everything except printable ASCII characters. **/
    escapeHtmlUri(uriPart: String): String;


  }
  interface xdmp {

    /** Invertible function that escapes characters required to be part of an NCName. This is useful when translating names from other representations such as JSON to XML. Given any string, the result is always a valid NCName. Providing all names are passed through this function the result is distinct NCNames so the results can be used for searching as well as name generation. The inverse function is xdmp:decode-for-NCName. **/
    encodeForNCName(name: String): String;

    /** Invertible function that decodes characters an NCName produced by xdmp:encode-for-NCName. Given the NCName produced by xdmp:encode-for-NCName this function returns the original string. **/
    decodeFromNCName(name: String): String;

    /** Returns an integer value representing the starting position of a string within the search string. Note, the string starting position is 1. If the first parameter is empty, the result is the empty sequence. **/
    position(test: String, target: String, collation?: String): Number;

    /** Returns the string where the first letter of each token has been uppercased. **/
    initcap(string: String): String;


  }
}
