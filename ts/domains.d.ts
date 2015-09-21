// Type definitions for DomainsModule
// Definitions: 

/**
The domains module is installed as part of the Content Processing Framework.
These functions are used to manage domains, which define the association of
content processing with particular collections, directories, or documents.

To use the domains module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace dom = "http://marklogic.com/cpf/domains"
         at "/MarkLogic/cpf/domains.xqy";
The library namespace prefix dom is not predefined in
the server.
These functions should be executed in the context of the triggers database.**/

interface domFunctions {

    /** Create a new content processing domain, along with the triggers that perform work in that domain. **/
  create(name: string, description: string, scope: Node, context: Node, pipelines: string, permissions: string): Object;

    /** Remove the domain and any associated triggers. An error is raised if no such domain exists. **/
  remove(domainName: string): Object;

    /** Find a particular domain. **/
  get(domainName: string): Object;

    /** Set the name of the domain to something else. An error is raised if a domain with the new name already exists or if the domain cannot be found. **/
  setName(domainName: string, newName: string): Object;

    /** Set the description of the domain. An error is raised if the domain cannot be found. **/
  setDescription(domainName: string, description: string): Object;

    /** Set the scope of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act on the new scope as well. **/
  setDomainScope(domainName: string, scope: Node): Object;

    /** Set the evaluation context of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act in the new evaluation context. **/
  setEvaluationContext(domainName: string, context: Node): Object;

    /** Set the permissions of the domain. An error is raised if the domain cannot be found. If the triggers associated with the domain will be modified also. **/
  setPermissions(domainName: string, permissions: string): Object;

    /** Add permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
  addPermissions(domainName: string, permissions: string): Object;

    /** Remove permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
  removePermissions(domainName: string, permissions: string): Object;

    /** Add another pipeline to the set of pipelines bound to the domain. An error is raised if the domain cannot be found or the pipeline does not exist. **/
  addPipeline(domainName: string, pipelineId: string): Object;

    /** Bind a new set of pipelines to the domain. An error is raised if the domain cannot be found or any of the pipelines does not exist. If the domain already has pipelines associated with it, those existing pipelines will not be deleted; only the association will be broken. **/
  setPipelines(domainName: string, pipelines: string): Object;

    /** Remove the association between a pipeline and the domain. An error is raised if the domain cannot be found. Only the association between the domain and the pipeline will be broken: the existing pipeline will not be deleted and may still be active in other domains. **/
  removePipeline(domainName: string, pipelineId: string): Object;

    /** Return the name of the collection in which domains are stored. **/
  collection(): Object;

    /** Return all the domains. **/
  domains(): Object;

    /** Create a domain scope element. **/
  domainScope(documentScope: string, uri: string, depth: string): Object;

    /** Create an evaluation context element. **/
  evaluationContext(database: string, root: string): Object;

    /** Set a new context for the CPF configuration. This will ripple down to the restart trigger as well. **/
  configurationSetEvaluationContext(context: Node): void;

    /** Set a new restart user for the CPF configuration. This will ripple down to the restart trigger as well. **/
  configurationSetRestartUser(restartUser: string): void;

    /** Set a new default domain for the CPF configuration. **/
  configurationSetDefaultDomain(domainId: string): void;

    /** Set new permissions for the CPF configuration. This will ripple down to the restart trigger as well. **/
  configurationSetPermissions(permissions: string): void;

    /** Create a new CPF configuration. **/
  configurationCreate(restartUser: string, evaluationContext: Node, defaultDomain: string, permissions: Node): string;

    /** Returns the CPF configuration. **/
  configurationGet(): Node;

}
declare var dom:domFunctions
