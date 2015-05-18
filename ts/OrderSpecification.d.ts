// Type definitions for SearchBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/OrderSpecification.xml

/****/

declare module SearchBuiltins {

  interface  {

    /** Creates a index-based ordering clause, for use as an option to cts:search. **/
    indexOrder(index: reference, options?: string): order;

    /** Creates a score-based ordering clause, for use as an option to cts:search. **/
    scoreOrder(options?: string): order;

    /** Creates a fitness-based ordering clause, for use as an option to cts:search. **/
    fitnessOrder(options?: string): order;

    /** Creates a confidence-based ordering clause, for use as an option to cts:search. **/
    confidenceOrder(options?: string): order;

    /** Creates a quality-based ordering clause, for use as an option to cts:search. **/
    qualityOrder(options?: string): order;

    /** Creates a document-based ordering clause, for use as an option to cts:search. **/
    documentOrder(options?: string): order;

    /** Specifies that results should be unordered, for use with cts:search. **/
    unordered(): order;


  }
}
