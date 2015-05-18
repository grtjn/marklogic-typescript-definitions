// Type definitions for DomainsModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/domains.xml

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
    create(name: string, description: string, scope: domain-scope), context: evaluation-context), pipelines: number, permissions: item()): number;

    /** Remove the domain and any associated triggers. An error is raised if no such domain exists. **/
    remove(domainName: string):  empty-sequence() ;

    /** Find a particular domain. **/
    get(domainName: string): domain) ;

    /** Set the name of the domain to something else. An error is raised if a domain with the new name already exists or if the domain cannot be found. **/
    setName(domainName: string, newName: string):  empty-sequence() ;

    /** Set the description of the domain. An error is raised if the domain cannot be found. **/
    setDescription(domainName: string, description: string):  empty-sequence() ;

    /** Set the scope of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act on the new scope as well. **/
    setDomainScope(domainName: string, scope: domain-scope)):  empty-sequence() ;

    /** Set the evaluation context of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act in the new evaluation context. **/
    setEvaluationContext(domainName: string, context: evaluation-context)):  empty-sequence() ;

    /** Set the permissions of the domain. An error is raised if the domain cannot be found. If the triggers associated with the domain will be modified also. **/
    setPermissions(domainName: string, permissions: item()):  empty-sequence() ;

    /** Add permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    addPermissions(domainName: string, permissions: item()):  empty-sequence() ;

    /** Remove permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    removePermissions(domainName: string, permissions: item()):  empty-sequence() ;

    /** Add another pipeline to the set of pipelines bound to the domain. An error is raised if the domain cannot be found or the pipeline does not exist. **/
    addPipeline(domainName: string, pipelineId: number):  empty-sequence() ;

    /** Bind a new set of pipelines to the domain. An error is raised if the domain cannot be found or any of the pipelines does not exist. If the domain already has pipelines associated with it, those existing pipelines will not be deleted; only the association will be broken. **/
    setPipelines(domainName: string, pipelines: number):  empty-sequence() ;

    /** Remove the association between a pipeline and the domain. An error is raised if the domain cannot be found. Only the association between the domain and the pipeline will be broken: the existing pipeline will not be deleted and may still be active in other domains. **/
    removePipeline(domainName: string, pipelineId: number):  empty-sequence() ;

    /** Return the name of the collection in which domains are stored. **/
    collection(): string ;

    /** Return all the domains. **/
    domains(): domain) ;

    /** Create a domain scope element. **/
    domainScope(documentScope: string, uri: string, depth: string): domain-scope) ;

    /** Create an evaluation context element. **/
    evaluationContext(database: number, root: string): evaluation-context) ;

    /** Set a new context for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetEvaluationContext(context: evaluation-context)): void;

    /** Set a new restart user for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetRestartUser(restartUser: string): void;

    /** Set a new default domain for the CPF configuration. **/
    configurationSetDefaultDomain(domainId: number): void;

    /** Set new permissions for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetPermissions(permissions: item()): void;

    /** Create a new CPF configuration. **/
    configurationCreate(restartUser: string, evaluationContext: evaluation-context), defaultDomain: number, permissions: permission)): number;

    /** Returns the CPF configuration. **/
    configurationGet(): configuration);


  }
}
