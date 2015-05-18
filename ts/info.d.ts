// Type definitions for InfoModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/info.xml

/**
The Information Studio API module contains functions that allow you to set policy, 
   load content from a directory, configure databases, specify transformations, and 
   check ticket status. 	
The Information Studio API is installed as the following file:
   install_dir/Modules/MarkLogic/appservices/infostudio/info.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the info.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

  
  import module namespace info = "http://marklogic.com/appservices/infostudio"  
      at "/MarkLogic/appservices/infostudio/info.xqy";
  
The library uses the info: namespace, which is 
   not predefined in the server.
MarkLogic recommends enabling the URI Lexicon when using 
   Information Studio; the URI lexicon will improve performance, especially when 
   the database grows to a large number of documents.
**/

declare module InfoModule {

  interface info {

    /** [DEPRECATED] This function creates a database with attached forests. Forests are named sequentially using the pattern of databasename-1, databasename-2 and so on. The API checks for database and forest name conflicts, throwing an INFO-DUPLICATENAME error if any name conflicts are encountered. The database is created with default index settings. If $forests-per-host is an empty sequence or omitted, only one forest (regardless of number of hosts) is created. If database creation succeeds, the database id is returned. **/
    databaseCreate(databaseName: xs:string, forestsPerHost?: xs:positiveInteger, group?: xs:string, dataDirectory?: xs:string, securityDb?: xs:string, schemasDb?: xs:string, triggersDb?: xs:string): xs:unsignedLong;

    /** [DEPRECATED] This function adds or removes the related database settings for wildcarding, word positions, and/or reverse search. Not specifying a feature will leave it in its current state. **/
    databaseSetFeature(database: xs:string, settings: element(info:settings)): void;

    /** [DEPRECATED] This function returns the a node representing support for database features of wildcarding, word positions, and reverse search. Returns a boolean value for each database feature based on whether its corresponding database settings are on or off. If some settings are on for a feature but others are off, then the feature will be noted as off. A "detail" child node includes the value of each related database setting. The optional $preview-settings and $delta arguments allow developers to pass in settings to preview the result of a given set of features. If $delta is set to true(), only values that will change are returned. If not provided, $delta is false(). This call is read-only, it does not change the state of database features supported. **/
    databaseGetFeature(database: xs:string, previewSettings?: element(info:settings), delta?: xs:boolean): element(info:settings);

    /** [DEPRECATED] This function does a one-time scan of the named directory path (local filesystem only), and attempts to load the files, spawning multiple transactions if necessary. This collector should be considered stateless; although some lightweight state information is passed via an external variable to the executing module, it is not persistent. Transactions are asynchronous, and order of insertions is not guaranteed. This function returns a ticket URI that can be used to access status information for that ticket. **/
    load(dirPath: xs:string, policyName?: xs:string, policyDeltas?: element(info:options), database?: xs:string): xs:string;

    /** [DEPRECATED] This function returns the stored policy matching the specified policy. If the policy does not exist, this function returns an empty sequence. **/
    policy(policyName: xs:string): element(info:options);

    /** [DEPRECATED] This function returns the names of all stored policies. **/
    policyNames(): xs:string;

    /** [DEPRECATED] This function sets an ingestion policy, which consists of a reusable <options> node defining parameters for content loading and transformation. **/
    policySet(policyName?: xs:string, policy?: element(info:options)): void;

    /** [DEPRECATED] This function deletes a named policy. If the policy is successfully deleted or does not exist, this function returns an empty sequence. **/
    policyDelete(policyName: xs:string): void;

    /** [DEPRECATED] This function returns a sequence of ticket IDs, optionally narrowed by database name. **/
    tickets(database?: xs:string, status?: xs:string, customQuery?: schema-element(cts:query)): xs:string;

    /** [DEPRECATED] This function deletes a ticket and all associated state information. If the ticket is successfully deleted or does not exist, returns empty-sequence(). A tickets cannot be deleted if work is in progress. **/
    ticketDelete(ticketId: xs:string): void;

    /** [DEPRECATED] This function returns a ticket element containing the status information for a long-running process. **/
    ticket(ticketId: xs:string): element(info:ticket);

    /** [DEPRECATED] This function returns any errors that may have occured when loading content. The load operation must be complete before any errors appear in the ticket. You can use the optional parameters, start and page-length, to paginate through a long list of errors. By default, errors are sorted by descending time. You can set the sort-ascending parameter to true to return errors in ascending time, which can be useful when paginating on an open ticket where new errors are coming in constantly. The filter parameter allows you to annotate errors with metadata. You can create a filter to limit results by anything in the ticket, such as time, some custom annotation, or error code. **/
    ticketErrors(ticketId: xs:string, start?: xs:unsignedInt, pageLength?: xs:unsignedInt, sortAscending?: xs:boolean, filter?: schema-element(cts:query)): element(info:errors);

    /** [DEPRECATED] This function deletes the specified database and its forest. **/
    databaseDelete(databaseName: xs:string, deleteData?: xs:boolean): void;

    /** [DEPRECATED] This function returns the error detail associated with the specified error-id. **/
    errorDetail(errorId: xs:unsignedLong): element(info:error);

    /** [DEPRECATED] This function deletes all of the documents associated with the specified $ticket-id from one or more databases. The documents are deleted from the database associated with the ticket, as well as any additional databases specified by the $database parameter. The ticket status is "unloading" while the delete is in progress and "unloaded" when complete. A ticket may not be unloaded if its status is "active". If errors are encountered during the unloading process, an exception is thrown and the ticket status is set to "unload-aborted". **/
    unload(ticketId: xs:string, database?: xs:string, batchSize?: xs:positiveInteger): void;

    /** [DEPRECATED] [DEPRECATED] This function cancels all active tickets associated with a flow. If the flow does not exist, an exception is thrown. **/
    flowCancel(flowId: xs:string): void;

    /** [DEPRECATED] This function returns the name of the policy associated with a flow. If the flow does not exist, an exception is thrown. **/
    flowPolicy(flowId: xs:string): xs:string;

    /** [DEPRECATED] This function starts (or "plays") the flow. If the flow does not exist, an exception is thrown. **/
    flowStart(flowId: xs:string): xs:string;

    /** [DEPRECATED] This function returns a sequence of IDs for all of the tickets started by this flow. If the flow does not exist, an exception is thrown. **/
    flowTickets(flowId: xs:string, includeInactive?: xs:boolean): xs:string;

    /** [DEPRECATED] This function returns the id of the flow with the specified name. If no flow exists with this name, an empty sequence is returned. **/
    flowId(flowName: xs:string): xs:string;


  }
}
