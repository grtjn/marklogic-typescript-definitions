// Type definitions for CSSModule
// Definitions: 

/**
The CSS module is part of the conversion processing pipeline.
These functions are used to manipulate CSS (Cascading style sheets) as part 
of conversion processing.

To use the CSS module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace css = "http://marklogic.com/cpf/css"
         at "/MarkLogic/conversion/css.xqy";
You will need to ensure that the CSS module is loaded into the same modules
database as the importing module.
The library namespace prefix css is not predefined in
the server.
**/

declare module CSSModule {

  interface css {

    /** Fetch the CSS for the given document, be it embedded or linked. Limitation: doesn't account for @import directives in the CSS; assumes the linked CSS is in the database. **/
    get(doc: String): Object;

    /** Convert CSS text to an equivalent XML representation that is more suitable for analysis. **/
    convert(css: String, options: Node): Object;


  }
}
