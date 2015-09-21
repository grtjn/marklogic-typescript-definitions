// Type definitions for DocumentFilter
// Definitions: 

/**
  Includes the document filtering functions using the ISYS
  technology.
**/

interface xdmpFunctions {

    /** Filters a wide variety of document formats, extracting metadata and text, and returning XHTML. The extracted text has very little formatting, and is typically used for search, classification, or other text processing. **/
  documentFilter(doc: Node, options?: Object): Node;

}
declare var xdmp:xdmpFunctions
