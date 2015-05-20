// Type definitions for Extensions
// Definitions: 

/****/

declare module Extensions {

  interface sem {

    /** Returns a sem:store value that answers queries from the set of triples derived by applying the ruleset to the triples in the sem:store values provided in $store. **/
    rulesetStore(locations: String, store?: Object, options?: String): Object;


  }
}
