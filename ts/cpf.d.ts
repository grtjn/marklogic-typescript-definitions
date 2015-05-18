// Type definitions for CPFModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/cpf.xml

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

declare module CPFModule {

  interface cpf {

    /** Concludes the action successfully, advancing the state as defined by the transition. The action must call this method to indicate completion of successful processing, passing the external variables $cpf:document-uri and $cpf:transition as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-success state, if any, and marks the document as processed in the current state. **/
    success(docid: string, transition: transition), overrideState: anyURI):  empty-sequence() ;

    /** Concludes the state action in failure, advancing the state as defined by the state transition. The state action must call this method to indicate failure, passing the external variables $cpf:document-uri, $cpf:transition, and $cpf:exception as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-failure state, if any, and marks the document as processed in the current state. **/
    failure(docid: string, transition: transition), exception: node(), overrideState: anyURI):  empty-sequence() ;

    /** Verify that the current transition is the correct one for the document. If a document is touched from multiple threads certain race conditions may apply that will cause the lookup of the transition to end up out of sync with the transition action when it is actually executed. In this case the action should do nothing; not even call cpf:success or cpf:failure. Some other CPF thread has already done the work on this document. **/
    checkTransition(docid: string, transition: transition)): boolean ;

    /** Determine the document's current state, if any. **/
    documentGetState(doc: string): anyURI ;

    /** Set the document's state to the given state. **/
    documentSetState(doc: string, state: anyURI):  empty-sequence() ;

    /** Determine the document's current processing status, if any. The status will be one of "created", "updated", "deleted", "active", or "done". **/
    documentGetProcessingStatus(doc: string): string;

    /** Set the document's processing status to the given value. **/
    documentSetProcessingStatus(doc: string, processingStatus: string):  empty-sequence() ;

    /** Determine the date and time of the last update to the document's content, if any. **/
    documentGetLastUpdated(doc: string): dateTime;

    /** Set the date and time of the document's last update. **/
    documentSetLastUpdated(doc: string, lastUpdated: dateTime):  empty-sequence() ;

    /** Fetch a trace of the error that caused the document's processing to fail, if any. **/
    documentGetError(doc: string):  node() ;

    /** Set the document's error trace to the given value. **/
    documentSetError(doc: string, error: node()):  empty-sequence() ;


  }
}
