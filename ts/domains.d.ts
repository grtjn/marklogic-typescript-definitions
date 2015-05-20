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

declare module DomainsModule {

  interface dom {

    /** Create a new content processing domain, along with the triggers that perform work in that domain. **/
    create(name: String, description: String, scope: Node, context: Node, pipelines: String, permissions: String): Object;

    /** Remove the domain and any associated triggers. An error is raised if no such domain exists. **/
    remove(domainName: String): Object;

    /** Find a particular domain. **/
    get(domainName: String): Object;

    /** Set the name of the domain to something else. An error is raised if a domain with the new name already exists or if the domain cannot be found. **/
    setName(domainName: String, newName: String): Object;

    /** Set the description of the domain. An error is raised if the domain cannot be found. **/
    setDescription(domainName: String, description: String): Object;

    /** Set the scope of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act on the new scope as well. **/
    setDomainScope(domainName: String, scope: Node): Object;

    /** Set the evaluation context of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act in the new evaluation context. **/
    setEvaluationContext(domainName: String, context: Node): Object;

    /** Set the permissions of the domain. An error is raised if the domain cannot be found. If the triggers associated with the domain will be modified also. **/
    setPermissions(domainName: String, permissions: String): Object;

    /** Add permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    addPermissions(domainName: String, permissions: String): Object;

    /** Remove permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    removePermissions(domainName: String, permissions: String): Object;

    /** Add another pipeline to the set of pipelines bound to the domain. An error is raised if the domain cannot be found or the pipeline does not exist. **/
    addPipeline(domainName: String, pipelineId: String): Object;

    /** Bind a new set of pipelines to the domain. An error is raised if the domain cannot be found or any of the pipelines does not exist. If the domain already has pipelines associated with it, those existing pipelines will not be deleted; only the association will be broken. **/
    setPipelines(domainName: String, pipelines: String): Object;

    /** Remove the association between a pipeline and the domain. An error is raised if the domain cannot be found. Only the association between the domain and the pipeline will be broken: the existing pipeline will not be deleted and may still be active in other domains. **/
    removePipeline(domainName: String, pipelineId: String): Object;

    /** Return the name of the collection in which domains are stored. **/
    collection(): Object;

    /** Return all the domains. **/
    domains(): Object;

    /** Create a domain scope element. **/
    domainScope(documentScope: String, uri: String, depth: String): Object;

    /** Create an evaluation context element. **/
    evaluationContext(database: String, root: String): Object;

    /** Set a new context for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetEvaluationContext(context: Node): void;

    /** Set a new restart user for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetRestartUser(restartUser: String): void;

    /** Set a new default domain for the CPF configuration. **/
    configurationSetDefaultDomain(domainId: String): void;

    /** Set new permissions for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetPermissions(permissions: String): void;

    /** Create a new CPF configuration. **/
    configurationCreate(restartUser: String, evaluationContext: Node, defaultDomain: String, permissions: Node): String;

    /** Returns the CPF configuration. **/
    configurationGet(): Node;


  }
}
