// Type definitions for JavaScriptBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/JSEngine.xml

/**
  The JavaScript Global Object functions are MarkLogic-specific JavaScript 
  functions that extend the Global Object.  These functions are available
  in the Global space, without any prefixing.
**/

declare module JavaScriptBuiltins {

  interface  {

    /** Declares the statement to be an update. A JavaScript statement is executed as a query unless declareUpdate() is called at the beginning of the statement. Calling declareUpdate with an options argument where explicitCommit property is set to true starts a multi-statement transaction and requires an explicit commit or rollback to complete the transaction. If the options argument is omitted, or the property explicitCommit property is set to false, an update is automatically committed. XDMP-OWNTXN is thrown if the request is in an open transaction. **/
    declareUpdate(options?: Object): Null;

    /** Imports a module at the specified location, and returns a JavaScript object. **/
    require(location: String): Object;

    /** Returns the document stored in the database at the specified URI. To retrieve multiple documents stored at multiple URIs, use fn.doc instead. **/
    doc(uri: String): document-node();


  }
}
