// Type definitions for MSWordModule
// Definitions: 

/**
The MSWord module is part of the conversion processing pipeline.
These functions are used to manipulate XHTML derived by converting Microsoft
Msword spreadsheets, as part of conversion processing.

To use the MSWord module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace msword = "http://marklogic.com/cpf/msword"
         at "/MarkLogic/conversion/msword.xqy";
You will need to ensure that the MSWord module is loaded into the same
modules database as the importing module.
The library namespace prefix msword is not predefined
in the server.
**/

declare module MSWordModule {

  interface msword {

    /** Clean up any conversion artifacts or other infelicities. **/
    clean(uri: String, doc: Node): Node;


  }
}
