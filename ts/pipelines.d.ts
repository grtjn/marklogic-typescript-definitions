// Type definitions for PipelinesModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/pipelines.xml

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
    insert(pipelineNode: node()): number;

    /** Create a new content processing pipeline. **/
    create(name: string, description: string, successAction: action), failureAction: action), statusTransitions: status-transition), stateTransitions: state-transition)): number;

    /** Remove the named pipeline. An error is raised if no such pipeline exists. **/
    remove(pipelineName: string):  empty-sequence() ;

    /** Find a particular pipeline. **/
    get(pipelineName: string): pipeline) ;

    /** Find a particular pipeline. **/
    getById(pipelineId: number): pipeline) ;

    /** Return the name of the collection in which pipelines are stored. **/
    collection(): string;

    /** Return all the pipelines. **/
    pipelines(): pipeline) ;

    /** Construct a new state transition element. **/
    stateTransition(state: anyURI, description: string, onSuccess: anyURI, onFailure: anyURI, priority: number, defaultAction: action), rules: execute)): state-transition) ;

    /** Construct a new status transition element. **/
    statusTransition(status: string, description: string, onSuccess: anyURI, onFailure: anyURI, priority: number, defaultAction: action), rules: execute)): status-transition) ;

    /** Construct a execute element. **/
    execute(condition: condition), action: action), description: string): execute) ;

    /** Construct a condition element. **/
    condition(module: string, description: string, options: element()): condition) ;

    /** Construct an action element. **/
    action(module: string, description: string, options: element()): action) ;


  }
}
