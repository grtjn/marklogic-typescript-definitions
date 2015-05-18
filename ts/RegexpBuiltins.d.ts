// Type definitions for StringBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/RegexpBuiltins.xml

/****/

declare module StringBuiltins {

  interface fn {

    /** Returns true if the specified $input matches the specified $pattern, otherwise returns false. **/
    matches(input: xs:string, pattern: xs:string, flags?: xs:string): xs:boolean;

    /** Returns a string constructed by replacing the specified $pattern on the $input string with the specified $replacement string. **/
    replace(input: xs:string, pattern: xs:string, replacement: xs:string, flags?: xs:string): xs:string;

    /** The result of the function is a new element node whose string value is the original string, but which contains markup to show which parts of the input match the regular expression. **/
    analyzeString(in: xs:string, regex: xs:string, flags?: xs:string): element(s:results);

    /** Returns a sequence of strings contructed by breaking the specified input into substrings separated by the specified $pattern. The specified $pattern is not returned as part of the returned items. **/
    tokenize(input: xs:string, pattern: xs:string, flags?: xs:string): xs:string;


  }
}
