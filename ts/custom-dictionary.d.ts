// Type definitions for CustomeDictionaryModule
// Definitions: 

/**
  The custom dictionary functions are designed to help you manage dictionaries
  that customize the stemming and tokenization in MarkLogic Server.
  The custom dictionary function module is installed as the following file:
  install_dir/Modules/MarkLogic/custom-dictionary.xqy
  where install_dir is the directory in which 
  MarkLogic Server is installed.
  To use the custom-dictionary.xqy module in your own XQuery modules, 
  include the following line in your XQuery prolog:
  import module namespace cdict = "http://marklogic.com/xdmp/custom-dictionary"
		  at "/MarkLogic/custom-dictionary.xqy";
     
  The library namespace prefix cdict is not predefined in
  the server.
  Changes effect stemming and tokenization results immediately.
  Queries started after a custom dictionary is written or deleted will use the
  new behavior.
  Documents are not automatically reindexed after a custom dictionary change.
  To get accurate results for stemmed searches, documents must be reindexed.
  If it is not practical to reindex all documents, use this process to selectively
  reindex affected documents:
  Collect the words which will be affected by the change. These are
  the contents of the word elements which will be added,
  deleted, or have their stems changed.Search for the documents which contain these words and save the URIs.Update the custom dictionaries.Make a idempotent update to each of the documents in the list.
  This might be adding then deleting an element to each of them. This will
  cause each document to be reindexed.
  Japanese ("ja"), Simplified Chinese ("zh"), and Traditional 
  Chinese ("zh_Hant") use a linguistic tokenizer to divide text into 
  tokens (words and punctuation).
  The custom dictionary affects the tokenizer for these languages. For Japanese,
  it also affects the stemmer.  For all of these languages,
  a custom dictionary entry may have an optional 
  cdict:pos element to give the part of
  speech for that word. The common codes for part of speech are as follows:
  
	  cdict:pos ValuePart of Speech
  AdjAdjective
  AdvAdverb
  InterjInterjection
  NnNoun
  Nn-PropProper noun (default value for pos)
  VerbVerb
  
  Other supported languages tokenize based on spaces and punctuation.
  For these languages, the custom dictionary only affects the stemmer.
  If a pos element is provided, it is ignored.
  **/

declare module CustomeDictionaryModule {

  interface cdict {

    /** Return the ISO language codes for all licensed languages. **/
    getLanguages(): String;

    /** Delete the custom dictionary for $lang, an ISO language code for a licensed language. Returns an empty sequence. Raises an XDMP-LANG error if $lang is not a licensed language. **/
    dictionaryDelete(lang: String): void;

    /** If $lang matches a licensed language with a custom dictionary, the custom dictionary from the local host is returned. The dictionary will have an xml:lang attribute for the language. If there is no custom dictionary for that language, an empty sequence is returned. Raises an XDMP-LANG error if $lang is not a licensed language. **/
    dictionaryRead(lang: String): Node;

    /** $lang is an ISO language code. $dict is the custom dictionary. If $lang matches a licensed language and $dict validates, the custom dictionary is installed on the cluster. Returns an empty sequence. Raises an XDMP-LANG error if $lang is not a licensed language. Raises validation errors if the dictionary fails to validate. **/
    dictionaryWrite(lang: String, dict: Node): void;


  }
}
