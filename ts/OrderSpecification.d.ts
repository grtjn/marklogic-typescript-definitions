// Type definitions for SearchBuiltins
// Definitions: 

/****/

interface xdmpFunctions {

}
declare var xdmp:xdmpFunctions
interface ctsFunctions {

    /** Creates a index-based ordering clause, for use as an option to cts:search. **/
  indexOrder(index: cts.Reference, options?: string): cts.Order;

    /** Creates a score-based ordering clause, for use as an option to cts:search. **/
  scoreOrder(options?: string): cts.Order;

    /** Creates a fitness-based ordering clause, for use as an option to cts:search. **/
  fitnessOrder(options?: string): cts.Order;

    /** Creates a confidence-based ordering clause, for use as an option to cts:search. **/
  confidenceOrder(options?: string): cts.Order;

    /** Creates a quality-based ordering clause, for use as an option to cts:search. **/
  qualityOrder(options?: string): cts.Order;

    /** Creates a document-based ordering clause, for use as an option to cts:search. **/
  documentOrder(options?: string): cts.Order;

    /** Specifies that results should be unordered, for use with cts:search. **/
  unordered(): cts.Order;

}
declare var cts:ctsFunctions
