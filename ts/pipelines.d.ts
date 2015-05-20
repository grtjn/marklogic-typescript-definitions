// Type definitions for PipelinesModule
// Definitions: 

/**
The pipelines module is installed as part of the Content Processing
Framework. 
These functions are used to manage pipelines, which define content processing
steps.

To use the pipelines module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace p = "http://marklogic.com/cpf/pipelines"
         at "/MarkLogic/cpf/pipelines.xqy";
The library namespace prefix p is not predefined in
the server.
These functions should be executed in the context of the triggers database.
**/

declare module PipelinesModule {

  interface p {

    /** Insert a fully constructed content processing pipeline, returning its unique ID. If a pipeline with the same name already exists in the database, it is replaced. **/
    insert(pipelineNode: Node): UnsignedLong ;

    /** Create a new content processing pipeline. **/
    create(name: String, description: String, successAction: Action), failureAction: Action), statusTransitions: Status-transition), stateTransitions: State-transition)): UnsignedLong ;

    /** Remove the named pipeline. An error is raised if no such pipeline exists. **/
    remove(pipelineName: String):  empty-sequence() ;

    /** Find a particular pipeline. **/
    get(pipelineName: String): Pipeline) ;

    /** Find a particular pipeline. **/
    getById(pipelineId: String): Pipeline) ;

    /** Return the name of the collection in which pipelines are stored. **/
    collection(): String;

    /** Return all the pipelines. **/
    pipelines(): Pipeline)* ;

    /** Construct a new state transition element. **/
    stateTransition(state: String, description: String, onSuccess: String, onFailure: String, priority: String, defaultAction: Action), rules: Execute)): State-transition) ;

    /** Construct a new status transition element. **/
    statusTransition(status: String, description: String, onSuccess: String, onFailure: String, priority: String, defaultAction: Action), rules: Execute)): Status-transition) ;

    /** Construct a execute element. **/
    execute(condition: Condition), action: Action), description: String): Execute) ;

    /** Construct a condition element. **/
    condition(module: String, description: String, options: Node): Condition) ;

    /** Construct an action element. **/
    action(module: String, description: String, options: Node): Action) ;


  }
}
