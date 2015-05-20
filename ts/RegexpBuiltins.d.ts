// Type definitions for StringBuiltins
// Definitions: 

/****/

declare module StringBuiltins {

  interface fn {

    /** Returns true if the specified $input matches the specified $pattern, otherwise returns false. **/
    matches(input: String, pattern: String, flags?: String): Object;

    /** Returns a string constructed by replacing the specified $pattern on the $input string with the specified $replacement string. **/
    replace(input: String, pattern: String, replacement: String, flags?: String): String;

    /** The result of the function is a new element node whose string value is the original string, but which contains markup to show which parts of the input match the regular expression. **/
    analyzeString(in: String, regex: String, flags?: String): Node;

    /** Returns a sequence of strings contructed by breaking the specified input into substrings separated by the specified $pattern. The specified $pattern is not returned as part of the returned items. **/
    tokenize(input: String, pattern: String, flags?: String): String;


  }
}
