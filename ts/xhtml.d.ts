// Type definitions for XHTMLModule
// Definitions: 

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

interface xhtmlFunctions {

    /** Clean up the XHTML: pruning empty spans, consolidating adjacent spans, etc. **/
  clean(doc: Node): Object;

    /** Turn an XHTML with flat structure into one with div structure based on the header elements. **/
  restructure(doc: Node): Object;

    /** Infer numbered or bulleted lists and insert appropriate markup. Restructuring first is highly recommended to improve both accuracy and performance. This function also assumes that indentation styling is already present on the paragraphs in the original input. **/
  addLists(doc: Node): Object;

}
declare var xhtml:xhtmlFunctions
