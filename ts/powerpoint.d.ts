// Type definitions for PowerpointModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/powerpoint.xml

/**
The Powerpoint module is part of the conversion processing pipeline.
These functions are used to manipulate XHTML derived by converting Microsoft
Powerpoint spreadsheets, as part of conversion processing.

To use the Powerpoint module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace ppt = "http://marklogic.com/cpf/powerpoint"
         at "/MarkLogic/conversion/powerpoint.xqy";
You will need to ensure that the Powerpoint module is loaded into the same modules
database as the importing module.
The library namespace prefix ppt is not predefined in
the server.
**/

declare module PowerpointModule {

  interface ppt {

    /** Clean up any conversion artifacts or other infelicities, putting each slide into its own div element. **/
    clean(uri: string, doc: node()): node();


  }
}
