// Type definitions for SearchBoxModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/searchapi.xml

/**
    The Search function module is installed as the following file:
    
        install_dir/Modules/MarkLogic/appservices/search/search.xqy
      
    where 
        install_dir
       is the directory in which MarkLogic Server is installed.
      To use the search.xqy module in your own XQuery modules, 
	      include the following line in your XQuery prolog:
    
import module namespace search="http://marklogic.com/appservices/search"
                    at "/MarkLogic/appservices/search/search.xqy";
	    The Search functions are used to create search high-level 
		    results, facets, snippets, and other search-related 
		    items.
  **/

declare module SearchBoxModule {

  interface search {

    /** This function verifies that options XML is properly structured. Used in debugging, normally not in production. Returns the empty sequence on success, otherwise it returns one or more error messages inside <report> elements. **/
    checkOptions(options: element(search:options), strict?: xs:boolean): element(search:report);

    /** This function quickly estimates the number of hits a query will return. The result is unfiltered and reflects the index resolution of the search (like xdmp:estimate). **/
    estimate(ctsQuery: element(), options?: element(search:options)): xs:unsignedLong;

    /** This function returns the default options XML. Default options do not contain any constraints or anything else that requires specific index settings. **/
    getDefaultOptions(): element(search:options);

    /** This function parses query text according to given options and returns the appropriate cts:query XML. **/
    parse(qtext: xs:string, options?: element(search:options), output?: xs:string): element();

    /** NOTE: This function is deprecated. This function safely removes a token from query text, ensuring that grammar elements (AND, OR, quotes, parentheses) are handled properly. **/
    removeConstraint(qtext: xs:string, ptext: xs:string, options: element(search:options)): xs:string;

    /** This function is the same as search:search, except that it takes a parsed and annotated cts:query XML node or a structured search search:query XML node as input. **/
    resolve(query: element(), options?: element(search:options), start?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(search:response);

    /** This function performs the same search as search:search, but it takes a parsed and annotated cts:query XML node or a structured search search:query XML node as input and returns the actual result nodes from the database. **/
    resolveNodes(query: element(), options?: element(search:options), start?: xs:unsignedLong, pageLength?: xs:unsignedLong): node();

    /** This function parses and invokes a query according to specified options, returning up to $page-length result nodes starting from $start. **/
    search(qtext: xs:string, options?: element(search:options), start?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(search:response);

    /** This function extracts matching text from the result node based on options, and returns the matches wrapped in a containing node, with highlights tagged. **/
    snippet(result: node(), ctsQuery: schema-element(cts:query), options?: element(search:transform-results)): element(search:snippet);

    /** This function returns a sequence of suggested text strings that match a wildcarded search for the $qtext input, ready for use in a user interface. Typically this is used for type-ahead applications to provide the user suggestions while entering terms in a search box. **/
    suggest(qtext: xs:string, options?: element(search:options), limit?: xs:unsignedInt, cursorPosition?: xs:unsignedInt, focus?: xs:positiveInteger, query?: element(search:query)): xs:string;

    /** NOTE: This function is deprecated. Turn a serialized, annotated cts:query (typically from search:parse) back into query text according to the specified rules. **/
    unparse(qtree: element()): xs:string;

    /** This function returns lexicon values and co-occurrences, and allows you to calculate aggregates based on the lexicon values. **/
    values(specName: xs:string, options: element(search:options), query?: element(search:query), limit?: xs:unsignedLong, start?: xs:anyAtomicType, pageStart?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(search:values-response);


  }
}
