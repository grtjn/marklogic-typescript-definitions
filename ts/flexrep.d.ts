// Type definitions for FlexRepModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/flexrep.xml

/**
The Flexible Replication API module contains functions that allow you to write scripts to 
  configure flexible replication. 	
The  Flexible Replication API is installed as the following file:
install_dir/Modules/MarkLogic/flexrep.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the flexrep.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

   import module namespace flexrep = "http://marklogic.com/xdmp/flexible-replication" 
           at "/MarkLogic/flexrep.xqy"; 
The library uses the flexrep: namespace, which is 
   not predefined in the server.
MarkLogic recommends enabling the URI Lexicon when using 
    Flexible Replication; the URI lexicon will improve performance, 
   especially when the database grows to a large number of documents.
**/

declare module FlexRepModule {

  interface flexrep {

    /** This function returns the URIs of binary chunks that were created before the given dateTime. **/
    binaryChunkUris(ts: xs:dateTime): xs:string;

    /** This function returns the IDs of the domains configured for the Master database. **/
    configurationDomainIds(): xs:unsignedLong;

    /** This function creates a new replication configuration element. The returned element must be subsequently inserted to the database with flexrep:configuration-insert. **/
    configurationCreate(domainId: xs:unsignedLong, alertingUri?: xs:string): element(flexrep:configuration);

    /** This function inserts a replication configuration to the database. **/
    configurationInsert(cfg: element(flexrep:configuration)): void;

    /** This function gets the replication configuration for a CPF domain. **/
    configurationGet(domainId: xs:unsignedLong, assert?: xs:boolean): element(flexrep:configuration);

    /** This function deletes a replication configuration. This removes the configuration document as well as any other documents that were created to track replication state. The properties that track state within individual documents are not removed. **/
    configurationDelete(domainId: xs:unsignedLong): void;

    /** This function creates a new target and add it to the specified configuration. A random ID is chosen for the target. You must subsequently use flexrep:configuration-insert to write the modified configuration into the database. **/
    targetCreate(cfg: element(flexrep:configuration), name: xs:string, urls: xs:string, retrySecondsMin: xs:unsignedInt, retrySecondsMax: xs:unsignedInt, documentsPerBatch: xs:unsignedInt, enabled: xs:boolean, httpOptions: element(flexrep:http-options), replicateCpf: xs:boolean, filterModule: xs:string, filterOptions: element(flexrep:filter-options), userId?: xs:unsignedLong, immediatePush?: xs:boolean): element(flexrep:configuration);

    /** This function deletes a target from a replication configuration. You must use the flexrep:configuration-insert function to insert the configuration for the delete to take place. When the configuration is inserted, any additional documents created to track state for the target will be removed. **/
    targetDelete(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): element(flexrep:configuration);

    /** This function returns the replication targets for a configuration. **/
    configurationTargets(cfg: element(flexrep:configuration)): element(flexrep:target);

    /** This function returns a specified target for a configuration, or throws an error if it does not exist. **/
    configurationTarget(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, assert?: xs:boolean): element(flexrep:target);

    /** This function returns the ID of the named replicaiton target. **/
    configurationTargetGetId(cfg: element(flexrep:configuration), targetName: xs:string): xs:unsignedLong;

    /** This function returns the name of the specified target. **/
    configurationTargetGetName(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:string;

    /** This function returns the URLs for the specified targets. **/
    configurationTargetGetUrls(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:string;

    /** This function returns the value of the minimum retry setting for the replication target. **/
    configurationTargetGetRetrySecondsMin(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:integer;

    /** This function returns the value of the documents-per-batch setting for the replication target. **/
    configurationTargetGetDocumentsPerBatch(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:integer;

    /** This function returns true if the specified replication target is enabled, otherwise it returns false. **/
    configurationTargetGetEnabled(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:boolean;

    /** This function returns true if CFG replcation is enabled for the specified replication target, otherwise it returns false. **/
    configurationTargetGetReplicateCpf(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:boolean;

    /** This function returns the HTTP options configured for the specified replcation target. **/
    configurationTargetGetHttpOptions(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): element(flexrep:http-options);

    /** This function returns the filter module used by the specified replcation target. **/
    configurationTargetGetFilterModule(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): element(flexrep:filter-module);

    /** This function retunrs the filter options configured for the specified replcation target. **/
    configurationTargetGetFilterOptions(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): element(flexrep:filter-options);

    /** This function sets the name of the specified replcation target. **/
    configurationTargetSetName(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, name: xs:string): element(flexrep:configuration);

    /** This function sets the URLs for the specified replication target. **/
    configurationTargetSetUrls(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, urls: xs:string): element(flexrep:configuration);

    /** This function sets the replication retry minimum value for the specified replication target. **/
    configurationTargetSetRetrySecondsMin(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: xs:integer): element(flexrep:configuration);

    /** This function sets the replication retry maximum value for the specified replication target. **/
    configurationTargetGetRetrySecondsMax(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:integer;

    /** This function sets the documents-per-batch value for the specified replication target. **/
    configurationTargetSetDocumentsPerBatch(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: xs:integer): element(flexrep:configuration);

    /** This function enables or disables the specified replication target. **/
    configurationTargetSetEnabled(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: xs:boolean): element(flexrep:configuration);

    /** This function enables and disables CPF replication. **/
    configurationTargetSetReplicateCpf(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: xs:boolean): element(flexrep:configuration);

    /** This function sets the HTTP options on the specified replication target. **/
    configurationTargetSetHttpOptions(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: element(flexrep:http-options)): element(flexrep:configuration);

    /** This function sets the specified filter for this replication configuration. **/
    configurationTargetSetFilterModule(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, uri: xs:string): element(flexrep:configuration);

    /** This function sets the specified filter options for this replication configuration. The options specified in the $val parameter are passed to the xdmp:invoke of the filter module, so any of the options you would specify in the xdmp:eval function are recognized. **/
    configurationTargetSetFilterOptions(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: element(flexrep:filter-options)): element(flexrep:configuration);

    /** This function creates a configuration on a Replica database to pull updates from the Master database. If a configuration already exists for the given target and domain IDs, then the configuration is overwritten. **/
    pullCreate(name: xs:string, domainId: xs:unsignedLong, targetId: xs:unsignedLong, urls: xs:string, httpOptions: element(flexrep:http-options)): element(flexrep:pull);

    /** This function inserts the specified pull configuration into the Replica database. **/
    pullInsert(pull: element(flexrep:pull)): void;

    /** This function deletes the pull configuration from the Replica database. **/
    pullDelete(domainId: xs:unsignedLong, targetId?: xs:unsignedLong): void;

    /** This function returns the pull replication configuration for the specified domain. **/
    pullGet(domainId: xs:unsignedLong, assert?: xs:boolean): element(flexrep:pull);

    /** This function returns the pull replication configurations for all of the domains. **/
    pullGetAll(): element(flexrep:pull);

    /** This function returns the ID of the domain associated with the specified pull configuration. **/
    pullGetDomainId(pull: element(flexrep:pull)): xs:unsignedLong;

    /** This function returns the ID of the target associated with the specified pull configuration. **/
    pullGetTargetId(pull: element(flexrep:pull)): xs:unsignedLong;

    /** This function returns the URLs associated with the specified pull configuration. **/
    pullGetUrls(pull: element(flexrep:pull)): xs:string;

    /** This function returns the HTTP options associated with the specified pull configuration. **/
    pullGetHttpOptions(pull: element(flexrep:pull)): element(flexrep:http-options);

    /** This function sets the URLs for the specified pull configuration. **/
    pullSetUrls(pull: element(flexrep:pull), urls: xs:string): element(flexrep:pull);

    /** This function sets the HTTP options for the specified pull configuration. **/
    pullSetHttpOptions(pull: element(flexrep:pull), httpOptions: element(flexrep:http-options)): element(flexrep:pull);

    /** This function creates any indexes needed for CPF based replication. The input configuration is returned from admin:get-configuration and the configuration returned from this function must be inserted again with admin:save-confguration for the changes to take effect. This function may be called multiple times for the same database with no ill effect. **/
    configureDatabase(config: element(configuration), dbid: xs:unsignedLong): element(configuration);

    /** This function applies an update element to the current database. **/
    apply(update: element(flexrep:update), content: document-node()): void;

    /** This function applies a delete element to the current database. **/
    delete(delete: element(flexrep:delete)): void;

    /** This function is used on the master to determine which documents need to be replicated. This function could be used to customize the way pull polling is done (e.g. multiple hosts on the target are polling the master for updates and you want to either have some hosts poll specific forests or you want to have them process different parts of the list of pending documents. **/
    poll(domainId: xs:unsignedLong, targetId: xs:unsignedLong, start: xs:integer, size: xs:integer, forestIds: xs:unsignedLong): node();

    /** This function processes one or more replicated updates for the specified domain ID, ordered by oldest changes first, and returns the results. **/
    process(domainId: xs:unsignedLong, size?: xs:unsignedInt, targets?: xs:unsignedLong, forestIds?: xs:unsignedLong, uris?: xs:string): element(flexrep:results);

    /** This function is used by a Replica to pull updates from the Master. It returns a list of elements; the first element is the response element that was set back to the master, followed by one or more flexrep:ack elements that were posted back to the master. **/
    doPull(pull: element(flexrep:pull)): element();

    /** This function returns the replication status for the specified replicated CPF domain. **/
    domainStatus(domainId: xs:unsignedLong, withTargets?: xs:boolean, terse?: xs:boolean): element(flexrep:domain-status);

    /** This function returns the replication status for the specified targets within the specified replicated domain. **/
    targetStatus(domainId: xs:unsignedLong, targetIds: xs:unsignedLong): element(flexrep:target-status);

    /** This function returns the status of the target in a pull replication configuration. **/
    remoteTargetStatus(pull: element(flexrep:pull)): element(flexrep:target-status);

    /** This function returns the flexrep:document-status element for the document at the specified URI in the specified domain. The returned flexrep:document-status element is extracted from the document's properties, which remain even if the document has been deleted. **/
    documentStatus(domainId: xs:unsignedLong, uri: xs:string): element(flexrep:document-status);

    /** This function returns the ID for the specified pull configuration. **/
    pullGetId(pull: element(flexrep:pull)): xs:unsignedLong;

    /** This function returns the name of the specified pull configuration. **/
    pullGetName(pull: element(flexrep:pull)): xs:string;

    /** This function sets the name of the specified pull configuration. **/
    pullSetName(pull: element(flexrep:pull), name: xs:string): element(flexrep:pull);

    /** This function sets the domain ID for the specified pull configuration. **/
    pullSetDomainId(pull: element(flexrep:pull), domainId: xs:unsignedLong): element(flexrep:pull);

    /** This function sets the ID of the replication target for the specified pull replication configuration. **/
    pullSetTargetId(pull: element(flexrep:pull), targetId: xs:unsignedLong): element(flexrep:pull);

    /** This function returns the ID of the replication configuration. **/
    configurationGetId(cfg: element(flexrep:configuration)): xs:unsignedLong;

    /** This function returns the domain name associated with the specified replication configuration. **/
    configurationGetDomainName(cfg: element(flexrep:configuration)): xs:string;

    /** This function returns the status for each domain target. **/
    domainTargetStatuses(): element(flexrep:domain-target-status);

    /** This function returns status information for documents that failed to replicate for the specified domain and targets. The sequence of status elements returned is ordered in reverse chronological order of the last time replication was attempted for the document. **/
    targetErrorDocuments(domainId: xs:unsignedLong, targetIds: xs:unsignedLong): element(flexrep:document-target-status);

    /** This function resets the URI status for the specified replication targets. A reset involves retaining any record of last success, clearing any failure status, and setting the time for the next replication attempt to the current time. The status is reset for the specified $target-ids. Resetting the URI status for a target is useful if the document has errored out due to too many failures, or if you want to replicate the document again. **/
    domainTargetReset(domainId: xs:unsignedLong, targetIds: xs:unsignedLong, errorsOnly?: xs:boolean): void;

    /** This function resets the URI status for all replication targets. A reset involves retaining any record of last success, clearing any failure status, and setting the time for the next replication attempt to the current time. The status is reset for the specified $target-ids. If no $target-ids parameter is specified, then the URI status for all replication targets is reset. Resetting the URI status for a target is useful if the document has errored out due to too many failures, or if you want to replicate the document again. **/
    documentReset(uri: xs:string, domainId: xs:unsignedLong, targetIds?: xs:unsignedLong): void;

    /** This function sets the replication retry maximum value for the specified replication target. **/
    configurationTargetSetRetrySecondsMax(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, val: xs:integer): element(flexrep:configuration);

    /** This function.... **/
    validateUrl(url: xs:string): xs:string;

    /** This function.... **/
    applyEncodedUpdates(dts: element(flexrep:domain-target-status), boundary: xs:string, data: binary()): element();

    /** This function.... **/
    replicate(uri: xs:string, label: xs:string, cfg: element(flexrep:configuration), domain: element(dom:domain), docStatus: element(flexrep:document-status), isDelete: xs:boolean, isRetry: xs:boolean): element(error:error);

    /** This function.... **/
    multipartEncode(boundary: xs:string, parts: node()): binary();

    /** This function.... **/
    ackApply(domainId: xs:unsignedLong, targetId: xs:unsignedLong, acks: element(flexrep:ack)): element(error:error);

    /** This function.... **/
    validateName(name: xs:string): xs:string;

    /** This function returns the pull replication configuration for the specified Pull ID. **/
    pullGetById(pullId: xs:unsignedLong, assert?: xs:boolean): element(flexrep:pull);

    /** This function pushes pending replication updates (either retries or zero-day) for the specified forest on the current host. If any updates are found, a new task is spawned to call this function again. This continues until all pending replication updates have been processed. **/
    pushLocalForest(domainId: xs:unsignedLong, forestId: xs:unsignedLong, maxSpawn: xs:unsignedLong): void;

    /** This function pushes deletes and any pending replication updates (either retries or zero-day) from all of the forests on the current host. A separate task is spawned for each combination of CPF domain and local forest which in turn calls the push-local-forest to increase parallelism. **/
    pushLocalForests(): void;

    /** This function checks the configuration of a database to see if it has all of the necessary indexes for Flexible Replication to work at its best. Returns true if the database needs configuration changes, and returns false if the configuration is as-expected. **/
    databaseNeedsConfiguration(config: element(configuration), dbid: xs:unsignedLong): xs:boolean;

    /** This function.... **/
    pushForestBinaries(domainId: xs:unsignedLong, targetId: xs:unsignedLong, forestId: xs:unsignedLong, maxSpawn: xs:unsignedLong): void;

    /** This function.... **/
    pushBinary(domainId: xs:unsignedLong, targetId: xs:unsignedLong, forestId: xs:unsignedLong, key: xs:unsignedLong): void;

    /** This function.... **/
    pushBinaryChunk(statusDoc: document-node(), useServerField: xs:boolean): xs:integer;

    /** This function.... **/
    pushBinaryDocs(domainId: xs:unsignedLong, targetId: xs:unsignedLong, forestId: xs:unsignedLong, map: map:map): element(flexrep:results);

    /** This function.... **/
    applyBinaryChunk(key: xs:string, offset: xs:string, bn: node(), forests: xs:string): void;

    /** This function.... **/
    applyBinaryJoin(key: xs:string, forests: xs:string): void;

    /** This function.... **/
    applyBinaryGc(key: xs:string): void;

    /** This function.... **/
    pushBinaries(domainId: xs:unsignedLong): void;

    /** This function.... **/
    pollBinaryChunk(): xs:unsignedLong);

    /** This function.... **/
    getUpdateBinarydocUri(domainId: xs:unsignedLong, targetId: xs:unsignedLong, key: xs:unsignedLong): xs:string;

    /** This function.... **/
    pullBinaries(pull: element(flexrep:pull), maxSpawn: xs:unsignedLong): element();

    /** This function.... **/
    pullBinaryChunk(pull: element(flexrep:pull)): xs:integer;

    /** This function.... **/
    ackBinaryChunkApply(domainId: xs:unsignedLong, targetId: xs:unsignedLong, key: xs:unsignedLong, offset: xs:unsignedLong, subsize: xs:unsignedLong): element(error:error);

    /** This function.... **/
    targetBinaryPushStatusDocuments(domainId: xs:unsignedLong, targetIds: xs:unsignedLong): element(flexrep:binary-push-status);

    /** This function.... **/
    targetBinaryPushStatusDocument(domainId: xs:unsignedLong, targetId: xs:unsignedLong, uri: xs:string): element(flexrep:binary-push-status);

    /** This function.... **/
    _binaryPushStatusUri(domainId: xs:unsignedLong, targetId: xs:unsignedLong, key: xs:unsignedLong): xs:string;

    /** This function.... **/
    coalesceDomainStatuses(domainId: xs:unsignedLong): void;

    /** This function.... **/
    pullCheckDuplicate(pull: element(flexrep:pull)): element(flexrep:pull);

    /** Set the alerting URI for a FlexRep configuration. This enables query-based replication to any targets that are configured with a user-id. The alerting URI may be anywhere within the database, however flexrep:domain-alerting-uri() returns a convenient directory withini the FlexRep configuration area. **/
    configurationSetAlertingUri(cfg: element(flexrep:configuration), uri: xs:string): element(flexrep:configuration);

    /** Get the alerting URI associated with a FlexRep configuraiton. **/
    configurationGetAlertingUri(cfg: element(flexrep:configuration)): xs:string;

    /** Generate an alerting URI for a CPF domain. The URI will be a subdirectory of the directory used to store other state for the FlexRep domain. There is no requirement that the alerting configuration that a FlexRep domain be stored in this location, but it is a convenient place to put it. **/
    domainAlertingUri(domainId: xs:unsignedLong): xs:string;

    /** Push a batch of documents from a single forest to a single target, and respawn a new task to do this repeatedly until either nothing remains to replicate or the spawn limit is reached. Typically deployments do not need to call this directly, and instead rely on the push-local-forests.xqy scheduled task. **/
    pushLocalForestTarget(domainId: xs:unsignedLong, targetId: xs:unsignedLong, forestId: xs:unsignedLong, maxSpawn: xs:unsignedLong): void;

    /** Get a CPF domain's name. **/
    getDomainName(domainId: xs:unsignedLong): xs:string;

    /** Get a target's name, or nothing if the domain or target does not exist. **/
    getTargetName(domainId: xs:unsignedLong, targetId: xs:unsignedLong): xs:string;

    /** Get the user ID associated with a target, if one exists. Only query-based targets have an associated user ID. **/
    configurationTargetGetUserId(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:unsignedLong;

    /** Get the immediate push flag for a target. **/
    configurationTargetGetImmediatePush(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): xs:boolean;

    /** Set a target's user-id. This is only used for query-based targets, and is only meaningful if the FlexRep configuration also has an alerting URI associated with it. When both of these are true, documents are replicated to the target only if either the document or its properties match one of the user's alerting rules in the alerting configuration. **/
    configurationTargetSetUserId(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, userId: xs:unsignedLong): element(flexrep:configuration);

    /** Set a target's "immediate push" flag. This defaults to true when a target is created. Normally, when a document is created or updated, flexrep will attempt to replicate it to all push targets from a single CPF action, and a single database transaction. When many targets are configured, there is a danger that this transaction will run for a long time and eventually time out. The "immmediate push" flag allows control over which targets should have documents replicated immediately, and which targets should have them replicated via the periodic retry scheduled task. Query-based targets are always handled by the periodic retry scheduled task. **/
    configurationTargetSetImmediatePush(cfg: element(flexrep:configuration), targetId: xs:unsignedLong, immediatePush: xs:boolean): element(flexrep:configuration);

    /** Set the enabled flag for a pull. This provides a way for a target cluster to disable pull replication when necessary. **/
    pullSetEnabled(pull: element(flexrep:pull), flag: xs:boolean): element(flexrep:pull);

    /** Get the enabled flag for a pull configuration. **/
    pullGetEnabled(pull: element(flexrep:pull)): xs:boolean;

    /** This function returns the external user information for a target, if any exists. There is no corresponding set function because the external user information is automatically added by configuration-target-set-user-id(). **/
    configurationTargetGetExternalUser(cfg: element(flexrep:configuration), targetId: xs:unsignedLong): element(extusr:external-user);

    /** This function creates an inbound filter element. **/
    inboundFilterCreate(filterModule: xs:string, filterOptions: element(flexrep:filter-options)): element(flexrep:inbound-filter);

    /** This function inserts an inbound filter configuration into the database. A single inbound filter applies to all inbound flexible replication to the database. The filter receives two external variables as input, and should return the filtered form of the replication information. An example is shown below. **/
    inboundFilterInsert(filter: element(flexrep:inbound-filter)): void;

    /** This function deletes the inbound filter for this database. If no filter is currently configured, an error will be thrown. **/
    inboundFilterDelete(): void;

    /** This function gets any inbound filter that is contained in the database, or an empty sequence if none is configured. **/
    inboundFilterGet(): element(flexrep:inbound-filter);

    /** This function creates a flexrep App Server programatically, without needing to know all of the specific settings. **/
    createAppserver(cfg: element(configuration), group: xs:unsignedLong, name: xs:string, port: xs:unsignedLong, db: xs:unsignedLong): element(configuration);

    /** This function is used by appserver upgrade code. Users shouldn't typically need to call this function directly. **/
    upgradeAppserver(cfg: element(configuration), ids: xs:unsignedLong): element(configuration);


  }
}
