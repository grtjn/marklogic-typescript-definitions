// Type definitions for InfoDevModule
// Definitions: 

/**
The Information Studio Developer API module contains functions that allow you to 
   write custom collectors and transformers.  This module is deprecated.	
The Information Studio Developer API is installed as the following file:
install_dir/Modules/MarkLogic/appservices/infostudio/infodev.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the infodev.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

   import module namespace infodev = "http://marklogic.com/appservices/infostudio/dev" 
           at "/MarkLogic/appservices/infostudio/infodev.xqy";
The library uses the infodev: namespace, which is 
   not predefined in the server.
MarkLogic recommends enabling the URI Lexicon when using 
   Information Studio; the URI lexicon will improve performance, 
   especially when the database grows to a large number of documents.
**/

interface infodevFunctions {

    /** [DEPRECATED] This function checks the options node to ensure that the structure and values are correct. It returns a sequence of report elements. An empty sequence indicates that the options node is correct. **/
  checkOptions(options: Node): Node;

    /** [DEPRECATED] This function generates a ticket and stores it in the specified database. It returns the id of the generated ticket. **/
  ticketCreate(annotation: Node, database: string, policyName: string, policyDeltas: Node): string;

    /** [DEPRECATED] This function adds annotation to the specified ticket. **/
  ticketAddAnnotation(ticketId: string, annotation: Node): void;

    /** [DEPRECATED] This function returns the status of the specified ticket. **/
  ticketGetStatus(ticketId: string): string;

    /** [DEPRECATED] This function sets the status of the specified ticket. **/
  ticketSetStatus(ticketId: string, status: string): void;

    /** [DEPRECATED] This function sets the number of documents to load into the database. **/
  ticketSetTotalDocuments(ticketId: string, totalDocuments: number): void;

    /** [DEPRECATED] This function adds and sets the value of a total-transactions element in the specified ticket. **/
  ticketSetTotalTransactions(ticketId: string, totalTransactions: number): void;

    /** [DEPRECATED] This function returns a string representing a matching pattern to be applied to file paths on ingest. **/
  fileFilter(policyName: string, policyDeltas: Node): string;

    /** [DEPRECATED] This function resolves the transaction size parameter based on stored policy and runtime options and returns an integer that represents the maximum number of documents to handled in a single transaction. **/
  transactionSize(policyName: string, policyDeltas: Node): number;

    /** [DEPRECATED] This function provides configuration-aware error handling. If the error is to be logged, a infodev:error element is logged to the App-Services database, including document source-location, error code, and other information necessary to find and fix the error. Must be used within a try-catch block. **/
  handleError(ticketId: string, context: string, error: Node, annotation?: Node, errorLogLevel?: string): void;

    /** [DEPRECATED] This function writes log information into a ticket's progress file that is written to the App-Services database. **/
  logProgress(ticketId: string, annotation: Node, documentsProcessed?: Object, transactionsCompleted?: Object, errorLogLevel?: string): void;

    /** [DEPRECATED] This function ingests a single document into the database specified in the ticket, according to the rules defined by the named policy and user-supplied options. **/
  ingest(document: Node, path: string, ticketId: string, policyDeltas?: Node, properties?: Node): string;

    /** [DEPRECATED] This function returns an options node in the xdmp:document-get namespace that is ready to pass into xdmp:document-get, including default-namespace, repair, format, default-language, encoding if they are defined by policy or options. **/
  collectorOptions(policyName: string, policyDeltas: Node): Node;

    /** [DEPRECATED] This function temporarily resets the specified deltas on the named policy, while leaving the policy itself unchanged. **/
  effectivePolicy(policyName: string, policyDeltas: Node): Node;

    /** [DEPRECATED] This function can be used along with the infodev:ingest function to build custom load operations. This function recurses the specified filesystem directory and uses the policy deltas from the specified ticket to determine which files to select for ingestion. The specified process function can be written to modify the content of files before calling the infodev:ingest function to load them into the database. **/
  filesystemWalk(dirPath: string, ticketId: string, functionArg: Object, policyDeltas: Node, context?: string): void;

    /** [DEPRECATED] This function ingests a batch of documents in a single invoked transaction. The batch of documents is contained in $document-map. Ingestion is done using a function named by the $function parameter. **/
  transaction(documentMap: Object, ticketId: string, functionArg: Object, policyDeltas: Node, transactionIndex: number, context: string, errorLogLevel?: string): void;

    /** [DEPRECATED] This is a convenience function that wraps xdmp:document-get. The document specified in $source-location is bundled with other documents into a transaction, and ingested. This function is similar to infodev:ingest, only it takes care of handling the infostudio options. **/
  getFile(sourceLocation: string, ticketId: string, policyDeltas: Node): Node;

    /** [DEPRECATED] This function gets the specified binary file from the filesystem. **/
  getExternalBinaryFile(sourceLocation: string): Node;

}
declare var infodev:infodevFunctions
