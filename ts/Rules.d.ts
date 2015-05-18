// Type definitions for Extensions
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Rules.xml

/****/

declare module Extensions {

  interface sem {

    /** Returns a sem:store value that answers queries from the set of triples derived by applying the ruleset to the triples in the sem:store values provided in $store. **/
    rulesetStore(locations: xs:string, store?: sem:store, options?: xs:string): sem:store;


  }
}
