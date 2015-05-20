// Type definitions for SearchBuiltins
// Definitions: 

/****/

declare module SearchBuiltins {

  interface xdmp {


  }
  interface cts {

    /** Creates a index-based ordering clause, for use as an option to cts:search. **/
    indexOrder(index: Object, options?: String): Object;

    /** Creates a score-based ordering clause, for use as an option to cts:search. **/
    scoreOrder(options?: String): Object;

    /** Creates a fitness-based ordering clause, for use as an option to cts:search. **/
    fitnessOrder(options?: String): Object;

    /** Creates a confidence-based ordering clause, for use as an option to cts:search. **/
    confidenceOrder(options?: String): Object;

    /** Creates a quality-based ordering clause, for use as an option to cts:search. **/
    qualityOrder(options?: String): Object;

    /** Creates a document-based ordering clause, for use as an option to cts:search. **/
    documentOrder(options?: String): Object;

    /** Specifies that results should be unordered, for use with cts:search. **/
    unordered(): Object;


  }
}
