// Type definitions for SearchBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SpellBuiltins.xml

/**
The spelling correction built-in functions are used with dictionary documents
to compare words with words in the dictionary.  These functions use the
double metaphone algorithm, which uses the way words sound to try and
suggest spelling alternatives for incorrectly-spelled words.
There is also a Spelling Dictionary Management XQuery module, which
is used to load and manage dictionary documents, and is complimentary
to the spelling built-in functions.
**/

declare module SearchBuiltins {

  interface  {

    /** Returns true() if the specified word is spelled correctly, otherwise returns false(). A word is considered to be spelled correctly if it is in the specified dictionary. **/
    isCorrect(uri: string, word: string): boolean;

    /** Suggests a list of spellings for a word. Returns a sequence of the most likely spellings for the specified word. **/
    suggest(uri: string, word: string, options?: map)): string;

    /** Given two strings, returns the Levenshtein distance between those strings. The Levenshtein distance is a measure of how many operations it takes to transform a string into another string, and it is useful in determining if a word is spelled correctly, or in simply comparing how "different" two words are. **/
    levenshteinDistance(str1: string, str2: string): number;

    /** Given a word returns the two metaphone keys. The primary and secondary metaphone keys which represent the phonetic encoding of two words are returned as a sequence of two strings. Double metaphone is an algorithm based on phonetic sounds useful in providing data to spelling correction suggestions. **/
    doubleMetaphone(word: string): string;

    /** Suggests a list of spellings for a word. Returns a sequence of elements describing each suggestion, including the suggested word, the distance, the key distance, the word distance, and the levenshtein distance. You can use this extra information to make your own decisions about which suggestions to use. If you do not want to use this information, use the spell:suggest spell.suggest function instead. **/
    suggestDetailed(dictionary_uris: string, word: string, options?: map)): Object;

    /** Returns the romanization of the string, substituting basic Latin letters for the letters in the string, according to their sound. Unsupported characters will be mapped to '?' for compatibility with the double metaphone algorithm. We support romanization of the scripts of the languages with advanced support in MarkLogic except for Chinese characters and Hangul. **/
    romanize(string: string): string;


  }
}
