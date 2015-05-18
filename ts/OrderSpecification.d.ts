// Type definitions for SearchBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/OrderSpecification.xml

/****/

declare module SearchBuiltins {

  interface  {

    /** Creates a index-based ordering clause, for use as an option to cts:search. **/
    indexOrder(index: cts:reference, options?: xs:string): cts:order;

    /** Creates a score-based ordering clause, for use as an option to cts:search. **/
    scoreOrder(options?: xs:string): cts:order;

    /** Creates a fitness-based ordering clause, for use as an option to cts:search. **/
    fitnessOrder(options?: xs:string): cts:order;

    /** Creates a confidence-based ordering clause, for use as an option to cts:search. **/
    confidenceOrder(options?: xs:string): cts:order;

    /** Creates a quality-based ordering clause, for use as an option to cts:search. **/
    qualityOrder(options?: xs:string): cts:order;

    /** Creates a document-based ordering clause, for use as an option to cts:search. **/
    documentOrder(options?: xs:string): cts:order;

    /** Specifies that results should be unordered, for use with cts:search. **/
    unordered(): cts:order;


  }
}
