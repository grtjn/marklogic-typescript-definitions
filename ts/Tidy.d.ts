// Type definitions for Tidy
// Definitions: 

/**
   The conversion functions are built-in to the server and support
   the ability to convert various document formats to XML.
   There are functions to convert HTML, PDF, Microsoft Word, Microsoft Excel,
   and Microsoft Powerpoint documents.  The output of each of these functions
   is standards-compliant XHTML with cascading style sheets (CSS).
   Additionally, there are functions to zip and unzip documents, which can
   be used to support document formats that are zip archives (for example,
   Microsoft Office 2007 docx format).
**/

declare module Tidy {

  interface xdmp {

    /** Run tidy on the specified html document to convert the document to well-formed and clean XHTML. Returns two nodes: the first is a status node indicating any errors or warning from tidy, and the second is an html node containing the cleaned xhtml. **/
    tidy(doc: String, options?: Object): Node;


  }
}
