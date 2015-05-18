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
    insert(pipelineNode: node()):  xs:unsignedLong ;

    /** Create a new content processing pipeline. **/
    create(name: xs:string, description: xs:string, successAction: element(p:action), failureAction: element(p:action), statusTransitions: element(p:status-transition), stateTransitions: element(p:state-transition)):  xs:unsignedLong ;

    /** Remove the named pipeline. An error is raised if no such pipeline exists. **/
    remove(pipelineName: xs:string):  empty-sequence() ;

    /** Find a particular pipeline. **/
    get(pipelineName: xs:string):  element(p:pipeline) ;

    /** Find a particular pipeline. **/
    getById(pipelineId: xs:unsignedLong):  element(p:pipeline) ;

    /** Return the name of the collection in which pipelines are stored. **/
    collection(): xs:string;

    /** Return all the pipelines. **/
    pipelines():  element(p:pipeline) ;

    /** Construct a new state transition element. **/
    stateTransition(state: xs:anyURI, description: xs:string, onSuccess: xs:anyURI, onFailure: xs:anyURI, priority: xs:unsignedLong, defaultAction: element(p:action), rules: element(p:execute)):  element(p:state-transition) ;

    /** Construct a new status transition element. **/
    statusTransition(status: xs:string, description: xs:string, onSuccess: xs:anyURI, onFailure: xs:anyURI, priority: xs:unsignedLong, defaultAction: element(p:action), rules: element(p:execute)):  element(p:status-transition) ;

    /** Construct a execute element. **/
    execute(condition: element(p:condition), action: element(p:action), description: xs:string):  element(p:execute) ;

    /** Construct a condition element. **/
    condition(module: xs:string, description: xs:string, options: element()):  element(p:condition) ;

    /** Construct an action element. **/
    action(module: xs:string, description: xs:string, options: element()):  element(p:action) ;


  }
}
