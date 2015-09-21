// Type definitions for SearchBuiltins
// Definitions: 

/****/

interface xdmpFunctions {

}
declare var xdmp:xdmpFunctions
interface ctsFunctions {

    /** Creates a index-based ordering clause, for use as an option to cts:search. **/
  indexOrder(index: Object, options?: string): Object;

    /** Creates a score-based ordering clause, for use as an option to cts:search. **/
  scoreOrder(options?: string): Object;

    /** Creates a fitness-based ordering clause, for use as an option to cts:search. **/
  fitnessOrder(options?: string): Object;

    /** Creates a confidence-based ordering clause, for use as an option to cts:search. **/
  confidenceOrder(options?: string): Object;

    /** Creates a quality-based ordering clause, for use as an option to cts:search. **/
  qualityOrder(options?: string): Object;

    /** Creates a document-based ordering clause, for use as an option to cts:search. **/
  documentOrder(options?: string): Object;

    /** Specifies that results should be unordered, for use with cts:search. **/
  unordered(): Object;

}
declare var cts:ctsFunctions
