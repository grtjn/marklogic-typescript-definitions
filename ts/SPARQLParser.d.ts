// Type definitions for Extensions
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SPARQLParser.xml

/****/

declare module Extensions {

  interface sem {

    /** Executes a SPARQL query against the database. SPARQL "SELECT" queries return a solution as a sequence of map objects in the form of a table, where each map represents a set of bindings that satisfies the query. SPARQL "CONSTRUCT" queries return triples as a sequence of sem:triple values in an RDF graph. SPARQL "DESCRIBE" queries return a sequence of sem:triple values as an RDF graph that describes the resources found by the query. SPARQL "ASK" queries return a single xs:boolean value (true or false) indicating whether a query pattern matches in the dataset. **/
    sparql(sparql: xs:string, bindings?: map:map, options?: xs:string, store?: sem:store): item();

    /** Executes a SPARQL Update operation against the database. Graph Update - addition and removal of triples from some graphs within the Graph Store. Graph Management - creating and deletion of graphs within the Graph Store, as well as convenient shortcuts for graph update operations often used during graph management (to add, move, and copy graphs). **/
    sparqlUpdate(sparql: xs:string, bindings?: map:map, options?: xs:string, store?: sem:store, defaultPermissions?: element(sec:permission), defaultPermissions?: Object[]): void;

    /** Returns a sem:store value queries from the sequence of sem:triple values passed in as an argument. The sem:store value returned from this function will raise an error if it is passed as part of the options argument to a call to sem:sparql-update(). The default rulesets configured on the current database have no effect on a sem:store value created with sem:in-memory-store(). This should be used along with sem:sparql() in preference to the deprecated sem:sparql-triples() function. We will remove documentation of sem:sparql-triples(), but leave the function for backwards compatibility. **/
    inMemoryStore(dataset: sem:triple): sem:store;

    /** Returns a sem:store value that queries from the current database's triple index restricted by the cts:query argument when passed to sem:sparql(), sem:sparql-update(), or sem:sparql-values as part of the options argument. The default for sem:store is the triples that can be inferred from the rulesets. **/
    store(options?: xs:string, query?: cts:query): sem:store;


  }
}
