// Type definitions for Extensions
// Definitions: 

/**
 The JSON built-in functions serialize XQuery items to JSON and
 read a JSON string and create XQuery items from it.  JSON (JavaScript
 Object Notation) is a data-interchange format popular mechanism for passing
 data from JavaScript to other programming environments. 
 **/

interface xdmpFunctions {

    /** Constructs a JSON document. **/
  toJson(item: string): Node;

    /** Returns a string representing a JSON serialization of a given item sequence. **/
  toJsonString(item: string): string;

    /** Atomizes a JSON node, returning a JSON value. **/
  fromJSON(arg: Node): string;

    /** Parses a string as JSON, returning an item sequence. **/
  fromJsonString(arg: string): string;

}
declare var xdmp:xdmpFunctions
