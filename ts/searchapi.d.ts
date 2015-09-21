// Type definitions for SearchBoxModule
// Definitions: 

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

interface searchFunctions {

    /** This function verifies that options XML is properly structured. Used in debugging, normally not in production. Returns the empty sequence on success, otherwise it returns one or more error messages inside <report> elements. **/
  checkOptions(options: Node, strict?: Object): Node;

    /** This function quickly estimates the number of hits a query will return. The result is unfiltered and reflects the index resolution of the search (like xdmp:estimate). **/
  estimate(ctsQuery: Node, options?: Node): string;

    /** This function returns the default options XML. Default options do not contain any constraints or anything else that requires specific index settings. **/
  getDefaultOptions(): Node;

    /** This function parses query text according to given options and returns the appropriate cts:query XML. **/
  parse(qtext: string, options?: Node, output?: string): Node;

    /** NOTE: This function is deprecated. This function safely removes a token from query text, ensuring that grammar elements (AND, OR, quotes, parentheses) are handled properly. **/
  removeConstraint(qtext: string, ptext: string, options: Node): string;

    /** This function is the same as search:search, except that it takes a parsed and annotated cts:query XML node or a structured search search:query XML node as input. **/
  resolve(query: Node, options?: Node, start?: string, pageLength?: string): Node;

    /** This function performs the same search as search:search, but it takes a parsed and annotated cts:query XML node or a structured search search:query XML node as input and returns the actual result nodes from the database. **/
  resolveNodes(query: Node, options?: Node, start?: string, pageLength?: string): Node;

    /** This function parses and invokes a query according to specified options, returning up to $page-length result nodes starting from $start. **/
  search(qtext: string, options?: Node, start?: string, pageLength?: string): Node;

    /** This function extracts matching text from the result node based on options, and returns the matches wrapped in a containing node, with highlights tagged. **/
  snippet(result: Node, ctsQuery: Node, options?: Node): Node;

    /** This function returns a sequence of suggested text strings that match a wildcarded search for the $qtext input, ready for use in a user interface. Typically this is used for type-ahead applications to provide the user suggestions while entering terms in a search box. **/
  suggest(qtext: string, options?: Node, limit?: number, cursorPosition?: number, focus?: number, query?: Node): string;

    /** NOTE: This function is deprecated. Turn a serialized, annotated cts:query (typically from search:parse) back into query text according to the specified rules. **/
  unparse(qtree: Node): string;

    /** This function returns lexicon values and co-occurrences, and allows you to calculate aggregates based on the lexicon values. **/
  values(specName: string, options: Node, query?: Node, limit?: string, start?: Object, pageStart?: string, pageLength?: string): Node;

}
declare var search:searchFunctions
