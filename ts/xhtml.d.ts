// Type definitions for XHTMLModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/xhtml.xml

/**
The XHTML module is part of the conversion processing pipeline.
These functions are used to manipulate XHTML, as part of conversion processing.

To use the XHTML module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace xhtml = "http://marklogic.com/cpf/xhtml"
         at "/MarkLogic/conversion/xhtml.xqy";
You will need to ensure that the XHTML module is loaded into the same modules
database as the importing module.
The library namespace prefix xhtml is not predefined in
the server.
**/

declare module XHTMLModule {

  interface xhtml {

    /** Clean up the XHTML: pruning empty spans, consolidating adjacent spans, etc. **/
    clean(doc: node()):  node() ;

    /** Turn an XHTML with flat structure into one with div structure based on the header elements. **/
    restructure(doc: node()):  node() ;

    /** Infer numbered or bulleted lists and insert appropriate markup. Restructuring first is highly recommended to improve both accuracy and performance. This function also assumes that indentation styling is already present on the paragraphs in the original input. **/
    addLists(doc: node()):  node() ;


  }
}
