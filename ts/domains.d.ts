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
    create(name: xs:string, description: xs:string, scope: element(dom:domain-scope), context: element(dom:evaluation-context), pipelines: xs:unsignedLong, permissions: item()):  xs:unsignedLong ;

    /** Remove the domain and any associated triggers. An error is raised if no such domain exists. **/
    remove(domainName: xs:string):  empty-sequence() ;

    /** Find a particular domain. **/
    get(domainName: xs:string):  element(dom:domain) ;

    /** Set the name of the domain to something else. An error is raised if a domain with the new name already exists or if the domain cannot be found. **/
    setName(domainName: xs:string, newName: xs:string):  empty-sequence() ;

    /** Set the description of the domain. An error is raised if the domain cannot be found. **/
    setDescription(domainName: xs:string, description: xs:string):  empty-sequence() ;

    /** Set the scope of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act on the new scope as well. **/
    setDomainScope(domainName: xs:string, scope: element(dom:domain-scope)):  empty-sequence() ;

    /** Set the evaluation context of the domain. An error is raised if the domain cannot be found. If the domain already has triggers associated with it, the triggers will be modified to act in the new evaluation context. **/
    setEvaluationContext(domainName: xs:string, context: element(dom:evaluation-context)):  empty-sequence() ;

    /** Set the permissions of the domain. An error is raised if the domain cannot be found. If the triggers associated with the domain will be modified also. **/
    setPermissions(domainName: xs:string, permissions: item()):  empty-sequence() ;

    /** Add permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    addPermissions(domainName: xs:string, permissions: item()):  empty-sequence() ;

    /** Remove permissions to the domain. An error is raised if the domain cannot be found. The triggers associated with the domain will be modified also. **/
    removePermissions(domainName: xs:string, permissions: item()):  empty-sequence() ;

    /** Add another pipeline to the set of pipelines bound to the domain. An error is raised if the domain cannot be found or the pipeline does not exist. **/
    addPipeline(domainName: xs:string, pipelineId: xs:unsignedLong):  empty-sequence() ;

    /** Bind a new set of pipelines to the domain. An error is raised if the domain cannot be found or any of the pipelines does not exist. If the domain already has pipelines associated with it, those existing pipelines will not be deleted; only the association will be broken. **/
    setPipelines(domainName: xs:string, pipelines: xs:unsignedLong):  empty-sequence() ;

    /** Remove the association between a pipeline and the domain. An error is raised if the domain cannot be found. Only the association between the domain and the pipeline will be broken: the existing pipeline will not be deleted and may still be active in other domains. **/
    removePipeline(domainName: xs:string, pipelineId: xs:unsignedLong):  empty-sequence() ;

    /** Return the name of the collection in which domains are stored. **/
    collection():  xs:string ;

    /** Return all the domains. **/
    domains():  element(dom:domain) ;

    /** Create a domain scope element. **/
    domainScope(documentScope: xs:string, uri: xs:string, depth: xs:string):  element(dom:domain-scope) ;

    /** Create an evaluation context element. **/
    evaluationContext(database: xs:unsignedLong, root: xs:string):  element(dom:evaluation-context) ;

    /** Set a new context for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetEvaluationContext(context: element(dom:evaluation-context)): void;

    /** Set a new restart user for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetRestartUser(restartUser: xs:string): void;

    /** Set a new default domain for the CPF configuration. **/
    configurationSetDefaultDomain(domainId: xs:unsignedLong): void;

    /** Set new permissions for the CPF configuration. This will ripple down to the restart trigger as well. **/
    configurationSetPermissions(permissions: item()): void;

    /** Create a new CPF configuration. **/
    configurationCreate(restartUser: xs:string, evaluationContext: element(dom:evaluation-context), defaultDomain: xs:unsignedLong, permissions: element(sec:permission)): xs:unsignedLong;

    /** Returns the CPF configuration. **/
    configurationGet(): element(dom:configuration);


  }
}
