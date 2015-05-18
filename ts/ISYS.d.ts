// Type definitions for DocumentFilter
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/ISYS.xml

/**
  Includes the document filtering functions using the ISYS
  technology.
**/

declare module DocumentFilter {

  interface xdmp {

    /** Filters a wide variety of document formats, extracting metadata and text, and returning XHTML. The extracted text has very little formatting, and is typically used for search, classification, or other text processing. **/
    documentFilter(doc: node(), options?: map)): node();


  }
}
