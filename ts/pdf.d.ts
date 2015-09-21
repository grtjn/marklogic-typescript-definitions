// Type definitions for PDFModule
// Definitions: 

/**
The PDF module is part of the conversion processing pipeline.
These functions are used to manipulate XHTML derived by converting 
PDF documents, as part of conversion processing.

To use the PDF module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace pdf = "http://marklogic.com/cpf/pdf"
         at "/MarkLogic/conversion/pdf.xqy";
You will need to ensure that the PDF module is loaded into the same modules
database as the importing module.
The library namespace prefix pdf is not predefined in
the server.
**/

interface pdfFunctions {

    /** Clean up any conversion artifacts or other infelicities. **/
  clean(doc: Node, toc: Node): Object;

    /** Fetch the linked TOC, if any. **/
  getToc(uri: string): Object;

    /** Clean and normalize the TOC produced by raw conversion. **/
  makeToc(toc: Node): Object;

    /** Locate TOC anchors and make them properly refer to headers at the appropriate level. Returned the transformed document. **/
  insertTocHeaders(doc: Node, toc: Node): Object;

}
declare var pdf:pdfFunctions
