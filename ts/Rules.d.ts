// Type definitions for Extensions
// Definitions: 

/****/

interface semFunctions {

    /** Returns a sem:store value that answers queries from the set of triples derived by applying the ruleset to the triples in the sem:store values provided in $store. **/
  rulesetStore(locations: string, store?: Object, options?: string): Object;

}
declare var sem:semFunctions
