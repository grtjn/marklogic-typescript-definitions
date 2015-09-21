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

interface pFunctions {

    /** Insert a fully constructed content processing pipeline, returning its unique ID. If a pipeline with the same name already exists in the database, it is replaced. **/
  insert(pipelineNode: Node): Object;

    /** Create a new content processing pipeline. **/
  create(name: string, description: string, successAction: Node, failureAction: Node, statusTransitions: Node, stateTransitions: Node): Object;

    /** Remove the named pipeline. An error is raised if no such pipeline exists. **/
  remove(pipelineName: string): Object;

    /** Find a particular pipeline. **/
  get(pipelineName: string): Object;

    /** Find a particular pipeline. **/
  getById(pipelineId: string): Object;

    /** Return the name of the collection in which pipelines are stored. **/
  collection(): string;

    /** Return all the pipelines. **/
  pipelines(): Object;

    /** Construct a new state transition element. **/
  stateTransition(state: string, description: string, onSuccess: string, onFailure: string, priority: string, defaultAction: Node, rules: Node): Object;

    /** Construct a new status transition element. **/
  statusTransition(status: string, description: string, onSuccess: string, onFailure: string, priority: string, defaultAction: Node, rules: Node): Object;

    /** Construct a execute element. **/
  execute(condition: Node, action: Node, description: string): Object;

    /** Construct a condition element. **/
  condition(module: string, description: string, options: Node): Object;

    /** Construct an action element. **/
  action(module: string, description: string, options: Node): Object;

}
declare var p:pFunctions
