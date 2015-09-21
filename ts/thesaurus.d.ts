// Type definitions for ThesaurusModule
// Definitions: 

/**
  The thesaurus functions are designed to help you manage thesaurus 
  documents and then use those thesaurus documents to lookup synonyms 
  for words used in queries. The thesaurus function module is installed as 
  the following file:
  install_dir/Modules/MarkLogic/thesaurus.xqy
  where install_dir is the directory in which 
  MarkLogic Server is installed.
  To use the thesaurus.xqy module in your own XQuery modules, 
  include the following line in your XQuery prolog:
  import module namespace 
     thsr="http://marklogic.com/xdmp/thesaurus" at "/MarkLogic/thesaurus.xqy";
  **/

interface thsrFunctions {

    /** Load the file specified in $path to the thesaurus at $uri. Exisiting documents at $uri are overwritten. **/
  load(path: string, uri: string): Object;

    /** Load the entries in $thsr into the thesaurus at $uri. If there is no document at $uri a new one will be created. If there is a document at $uri it will be overwritten. **/
  insert(uri: string, thsr: Node): Object;

    /** Adds the entry $entry to the thesaurus at $uri. **/
  setEntry(uri: string, entry: Node): Object;

    /** Removes all entries with term $term from the thesaurus document(s) at $uri. **/
  removeTerm(uri: string, term: string): Object;

    /** Removes all entries that exactly match $entry from the thesaurus documents(s) at $uri. **/
  removeEntry(uri: string, entry: Node): Object;

    /** Adds a synonym to the specified thesaurus entry. **/
  addSynonym(entry: Node, synonym: Node): Object;

    /** Removes synonym $synonym from thesaurus entry $entry. **/
  removeSynonym(entry: Node, synonym: Node): Object;

    /** Returns all entries for term $term in the thesaurus document(s) at $uri. **/
  lookup(uri: string, term: string): Node;

    /** Returns a sequence of all entries that are found by looking up terms in the query and/or subqueries of $query in the thesaurus document(s) at $uri. **/
  queryLookup(uri: string, query: Object): Node;

    /** Returns a query that searches for all the query strings specified in $query and their synonyms as found in $entries. **/
  expand(query: Object, entries: Node, newWeight: number, minWeight: number, filter: Node): Object;

}
declare var thsr:thsrFunctions
