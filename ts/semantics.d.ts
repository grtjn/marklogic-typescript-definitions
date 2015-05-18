// Type definitions for semantics
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/semantics.xml

/**
The semantic functions include functions that are built into MarkLogic 
Server as well as functions that are implemented in an XQuery library.

To use the semantics XQuery library module as part of your own XQuery 
module, include the following line in your XQuery prolog:


import module namespace sem = "http://marklogic.com/semantics"
       at "/MarkLogic/semantics.xqy";
The library namespace prefix sem is predefined in
the server.
**/

declare module semantics {

  interface sem {

    /** This function returns parsed sem:triple objects from a text format or XML. **/
    rdfParse(in: any, options?: xs:string): sem:triple;

    /** This function returns a string or json or XML serialization of the provided triples. **/
    rdfSerialize(triples: sem:triple, options?: xs:string): any;

    /** This function returns sem:triples from a specified location. **/
    rdfGet(location: xs:string, options?: xs:string, httpOpts?: element()): sem:triple;

    /** This function inserts triples into a specified database as one or more sem:triples documents. It also creates graph metadata for the graph specified by the "graph" or "override-graph=URI" option. This is an update function that returns the document URIs of inserted documents. **/
    rdfInsert(triples: sem:triple, triples: sem.triple | ValueIterator | Array, options?: xs:string, permissions?: element(sec:permission), permissions?: Object[], collections?: xs:string, quality?: xs:int, forestIds?: xs:unsignedLong): xs:string;

    /** This function inserts an RDF document from a specified location into the designated database. It also creates the graph metadata for the graph specified by the "graph=URI" or "override-graph=URI" option. This is an update function that returns the document URIs of inserted documents. **/
    rdfLoad(location: xs:string, options?: xs:string, httpOpts?: element(), permissions?: item(), collections?: xs:string, quality?: xs:int, forestIds?: xs:unsignedLong): xs:string;

    /** This function returns database nodes backing given triples. Any given cts:triple may be backed by zero, one, or multiple database nodes. **/
    databaseNodes(triples: sem:triple, options?: xs:string, query?: cts:query): node();

    /** This function returns all triples from a named graph in the database. **/
    graph(graphname: sem:iri): sem:triple;

    /** This function inserts triples into a named graph, creating the graph if necessary. It also creates the graph metadata for the graph specified by the "graphname" option. This is an update function that returns document IDs. **/
    graphInsert(graphname: sem:iri, triples: sem:triple, permissions?: item(), collections?: xs:string, quality?: xs:int, forestIds?: xs:unsignedLong): xs:string;

    /** This function deletes a named graph, and its graph document containing metadata, from the database. This is an update function that deletes documents with a root element of sem:triples. All other documents are not affected. **/
    graphDelete(graphname: sem:iri): void;

    /** This function implements the W3C SPARQL Query Results format. Any value sequence returned by sem:sparql can be passed into this function. The result will be the W3C SPARQL Results format, in either XML or JSON format. **/
    queryResultsSerialize(results: item(), options?: xs:string): item();

    /** This function expands a CURIE (Compact URI) into a sem:iri object. This raises SEM-UNKNOWNPREFIX if no mapping is available. For more information about the default prefixes, see sem:prefixes. **/
    curieExpand(curie: xs:string, mapping?: map:map): sem:iri;

    /** This function shortens an IRI into a CURIE (Compact URI) into a sem:iri object. Returns the IRI string unchanged if no mapping is available. **/
    curieShorten(iri: sem:iri, mapping?: map:map): xs:string;

    /** This function returns a set of prefix mappings for use with CURIE processing. Calling this function returns the internal set of default prefixes. The default mappings include prefixes that are widely used and agreed upon, including "cc" (Creative Commons), "dc" (Dublin Core), "dcterms" (Dublin Core Terms), "dbpedia" (dbpedia resources), "dbpedia-owl" (dbpedia ontology), "geonames" (geonames ontology), "foaf" (FOAF), "media" (MediaRSS), "owl" (OWL), " rdf" (RDF), "product" (productV2), "rdfs" (RDF Schema), "skos" (SKOS), "vcard" (VCard vocab), "void" (Vocabulary of Interlinked Datasets), "wikidata" (wikidata entities), "xhtml" (XHTML), and "xs" (XML Schema). **/
    prefixes(prefixdef: xs:string, includeCommon?: xs:boolean): map:map;

    /** This function returns a function that builds triples from CURIE and blank node syntax. The resulting function takes three string arguments, representing subject, predicate, and object respectively, which returns a sem:triple object using the graph and prefix mappings passed in to the call to sem:rdf-builder. Blank nodes specified with a leading underscore (_) will be assigned blank node identifiers, and will maintain that identity across multiple invocations; for example, "_:person1" will refer to the same node as a later invocation that also mentions "_:person1". In the predicate position, the special value of "a" will be interpreted as the same as "rdf:type". **/
    rdfBuilder(prefixes?: map:map, graph?: sem:iri): function(item(),item(),item()) as sem:triple;

    /** This function implements the Concise Bounded Definition (CBD) specification to describe one or more nodes in the graph. **/
    describe(iris: sem:iri): sem:triple;

    /** From a starting set of seeds, follow a given set of predicates, to a given depth, and return all unique node IRIs. **/
    transitiveClosure(seeds: sem:iri, predicates: sem:iri, limit: xs:integer): sem:iri;

    /** This function executes a SPARQL SELECT query using passed-in bindings participating as a starting point for the query. **/
    sparqlValues(sparql: xs:string, values: map:map, options?: xs:string, store?: item()): map:map;

    /** This is a constructor function that takes a string and constructs an item of type sem:iri sem.iri from it. **/
    iri(stringIri: xs:string): sem.iri;


  }
}
