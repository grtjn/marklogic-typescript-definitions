// Type definitions for Extensions
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/JSONBuiltins.xml

/**
 The JSON built-in functions serialize XQuery items to JSON and
 read a JSON string and create XQuery items from it.  JSON (JavaScript
 Object Notation) is a data-interchange format popular mechanism for passing
 data from JavaScript to other programming environments. 
 **/

declare module Extensions {

  interface xdmp {

    /** Constructs a JSON document. **/
    toJson(item: item()): document-node();

    /** Returns a string representing a JSON serialization of a given item sequence. **/
    toJsonString(item: item()): string;

    /** Atomizes a JSON node, returning a JSON value. **/
    fromJson(arg: node()): item();

    /** Atomizes a JSON node, returning a JSON value. **/
    fromJSON(arg: node()): item();

    /** Parses a string as JSON, returning an item sequence. **/
    fromJsonString(arg: string): item();


  }
}
