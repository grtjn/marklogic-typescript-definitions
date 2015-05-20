// Type definitions for SpellingModule
// Definitions: 

/**
  The spelling functions are designed to help you manage dictionary 
  documents in  MarkLogic Server. The spelling function
  module is installed as the following file:
  install_dir/Modules/MarkLogic/spell.xqy
  where install_dir is the directory in which 
  MarkLogic Server is installed.
  To use the spell.xqy module in your own XQuery modules, 
  include the following line in your XQuery prolog:
  import module namespace spell = "http://marklogic.com/xdmp/spell" 
		  at "/MarkLogic/spell.xqy";
     
  The library uses the spell: namespace, predefined in 
     the server.  
  The spelling correction functions (spell:is-correct and 
  spell:suggest) are built-in functions and do not require the 
  import module statement in the XQuery prolog.
  
  There are also Spell Built-In functions, which you use to check if
	  words are spelled correctly according to the dictionaries and to
	  suggest alternate spellings.
  
  **/

declare module SpellingModule {

  interface spell {

    /** Add the words from the file specified in $path to the dictionary at $uri. If a document exists with the specified URI, it is replaced with this one. Note that words that are 64 characters or greater will never be returned as suggestions from spell:suggest or spell:suggest-detailed. **/
    load(path: String, uri: String):  empty-sequence() ;

    /** Load the words in $dict into the dictionary at $uri. If there is no document at $uri a new one will be created. If there is a document at $uri it will be overwritten. **/
    insert(uri: String, dict: Dictionary)):  empty-sequence() ;

    /** Add the word $word to the dictionary at $uri. If the word is already in the dictionary (case-sensitive), then this function throws an exception. **/
    addWord(uri: String, word: String):  empty-sequence() ;

    /** Remove the word $word from the dictionary at $uri. **/
    removeWord(uri: String, word: String):  empty-sequence() ;

    /** Creates a dictionary node from a sequence of words. Use spell:load to load the dictionary node into the database as a dictionary. **/
    makeDictionary(words: String): Dictionary);


  }
}
