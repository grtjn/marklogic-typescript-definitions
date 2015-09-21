// Type definitions for CPFModule
// Definitions: 

/**
The CPF module is installed as part of the Content Processing Framework.
These functions are used by content processing actions to manage the state of
the document as it is being processed.

To use the CPF module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace cpf = "http://marklogic.com/cpf"
         at "/MarkLogic/cpf/cpf.xqy";
The library namespace prefix cpf is not predefined in
the server.
**/

interface cpfFunctions {

    /** Concludes the action successfully, advancing the state as defined by the transition. The action must call this method to indicate completion of successful processing, passing the external variables $cpf:document-uri and $cpf:transition as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-success state, if any, and marks the document as processed in the current state. **/
  success(docid: string, transition: Node, overrideState: string): Object;

    /** Concludes the state action in failure, advancing the state as defined by the state transition. The state action must call this method to indicate failure, passing the external variables $cpf:document-uri, $cpf:transition, and $cpf:exception as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-failure state, if any, and marks the document as processed in the current state. **/
  failure(docid: string, transition: Node, exception: Node, overrideState: string): Object;

    /** Verify that the current transition is the correct one for the document. If a document is touched from multiple threads certain race conditions may apply that will cause the lookup of the transition to end up out of sync with the transition action when it is actually executed. In this case the action should do nothing; not even call cpf:success or cpf:failure. Some other CPF thread has already done the work on this document. **/
  checkTransition(docid: string, transition: Node): Object;

    /** Determine the document's current state, if any. **/
  documentGetState(doc: string): Object;

    /** Set the document's state to the given state. **/
  documentSetState(doc: string, state: string): Object;

    /** Determine the document's current processing status, if any. The status will be one of "created", "updated", "deleted", "active", or "done". **/
  documentGetProcessingStatus(doc: string): Object;

    /** Set the document's processing status to the given value. **/
  documentSetProcessingStatus(doc: string, processingStatus: string): Object;

    /** Determine the date and time of the last update to the document's content, if any. **/
  documentGetLastUpdated(doc: string): Object;

    /** Set the date and time of the document's last update. **/
  documentSetLastUpdated(doc: string, lastUpdated: Date): Object;

    /** Fetch a trace of the error that caused the document's processing to fail, if any. **/
  documentGetError(doc: string): Object;

    /** Set the document's error trace to the given value. **/
  documentSetError(doc: string, error: Node): Object;

}
declare var cpf:cpfFunctions
