// Type definitions for ExcelModule
// Definitions: 

/**
The Excel module is part of the conversion processing pipeline.
These functions are used to manipulate XHTML derived by converting Microsoft
Excel spreadsheets, as part of conversion processing.

To use the Excel module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace excel = "http://marklogic.com/cpf/excel"
         at "/MarkLogic/conversion/excel.xqy";
You will need to ensure that the Excel module is loaded into the same modules
database as the importing module.
The library namespace prefix excel is not predefined in
the server.
**/

interface excelFunctions {

    /** Clean up any conversion artifacts or other infelicities, putting each sheet into its own div element. **/
  clean(uri: string, doc: Node): Object;

}
declare var excel:excelFunctions
