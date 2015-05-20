// Type definitions for FlexRepModule
// Definitions: 

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
    binaryChunkUris(ts: Date): String;

    /** This function returns the IDs of the domains configured for the Master database. **/
    configurationDomainIds(): String;

    /** This function creates a new replication configuration element. The returned element must be subsequently inserted to the database with flexrep:configuration-insert. **/
    configurationCreate(domainId: String, alertingUri?: String): Node;

    /** This function inserts a replication configuration to the database. **/
    configurationInsert(cfg: Node): void;

    /** This function gets the replication configuration for a CPF domain. **/
    configurationGet(domainId: String, assert?: Object): Node;

    /** This function deletes a replication configuration. This removes the configuration document as well as any other documents that were created to track replication state. The properties that track state within individual documents are not removed. **/
    configurationDelete(domainId: String): void;

    /** This function creates a new target and add it to the specified configuration. A random ID is chosen for the target. You must subsequently use flexrep:configuration-insert to write the modified configuration into the database. **/
    targetCreate(cfg: Node, name: String, urls: String, retrySecondsMin: Number, retrySecondsMax: Number, documentsPerBatch: Number, enabled: Object, httpOptions: Node, replicateCpf: Object, filterModule: String, filterOptions: Node, userId?: String, immediatePush?: Object): Node;

    /** This function deletes a target from a replication configuration. You must use the flexrep:configuration-insert function to insert the configuration for the delete to take place. When the configuration is inserted, any additional documents created to track state for the target will be removed. **/
    targetDelete(cfg: Node, targetId: String): Node;

    /** This function returns the replication targets for a configuration. **/
    configurationTargets(cfg: Node): Node;

    /** This function returns a specified target for a configuration, or throws an error if it does not exist. **/
    configurationTarget(cfg: Node, targetId: String, assert?: Object): Node;

    /** This function returns the ID of the named replicaiton target. **/
    configurationTargetGetId(cfg: Node, targetName: String): String;

    /** This function returns the name of the specified target. **/
    configurationTargetGetName(cfg: Node, targetId: String): String;

    /** This function returns the URLs for the specified targets. **/
    configurationTargetGetUrls(cfg: Node, targetId: String): String;

    /** This function returns the value of the minimum retry setting for the replication target. **/
    configurationTargetGetRetrySecondsMin(cfg: Node, targetId: String): Number;

    /** This function returns the value of the documents-per-batch setting for the replication target. **/
    configurationTargetGetDocumentsPerBatch(cfg: Node, targetId: String): Number;

    /** This function returns true if the specified replication target is enabled, otherwise it returns false. **/
    configurationTargetGetEnabled(cfg: Node, targetId: String): Object;

    /** This function returns true if CFG replcation is enabled for the specified replication target, otherwise it returns false. **/
    configurationTargetGetReplicateCpf(cfg: Node, targetId: String): Object;

    /** This function returns the HTTP options configured for the specified replcation target. **/
    configurationTargetGetHttpOptions(cfg: Node, targetId: String): Node;

    /** This function returns the filter module used by the specified replcation target. **/
    configurationTargetGetFilterModule(cfg: Node, targetId: String): Node;

    /** This function retunrs the filter options configured for the specified replcation target. **/
    configurationTargetGetFilterOptions(cfg: Node, targetId: String): Node;

    /** This function sets the name of the specified replcation target. **/
    configurationTargetSetName(cfg: Node, targetId: String, name: String): Node;

    /** This function sets the URLs for the specified replication target. **/
    configurationTargetSetUrls(cfg: Node, targetId: String, urls: String): Node;

    /** This function sets the replication retry minimum value for the specified replication target. **/
    configurationTargetSetRetrySecondsMin(cfg: Node, targetId: String, val: Number): Node;

    /** This function sets the replication retry maximum value for the specified replication target. **/
    configurationTargetGetRetrySecondsMax(cfg: Node, targetId: String): Number;

    /** This function sets the documents-per-batch value for the specified replication target. **/
    configurationTargetSetDocumentsPerBatch(cfg: Node, targetId: String, val: Number): Node;

    /** This function enables or disables the specified replication target. **/
    configurationTargetSetEnabled(cfg: Node, targetId: String, val: Object): Node;

    /** This function enables and disables CPF replication. **/
    configurationTargetSetReplicateCpf(cfg: Node, targetId: String, val: Object): Node;

    /** This function sets the HTTP options on the specified replication target. **/
    configurationTargetSetHttpOptions(cfg: Node, targetId: String, val: Node): Node;

    /** This function sets the specified filter for this replication configuration. **/
    configurationTargetSetFilterModule(cfg: Node, targetId: String, uri: String): Node;

    /** This function sets the specified filter options for this replication configuration. The options specified in the $val parameter are passed to the xdmp:invoke of the filter module, so any of the options you would specify in the xdmp:eval function are recognized. **/
    configurationTargetSetFilterOptions(cfg: Node, targetId: String, val: Node): Node;

    /** This function creates a configuration on a Replica database to pull updates from the Master database. If a configuration already exists for the given target and domain IDs, then the configuration is overwritten. **/
    pullCreate(name: String, domainId: String, targetId: String, urls: String, httpOptions: Node): Node;

    /** This function inserts the specified pull configuration into the Replica database. **/
    pullInsert(pull: Node): void;

    /** This function deletes the pull configuration from the Replica database. **/
    pullDelete(domainId: String, targetId?: String): void;

    /** This function returns the pull replication configuration for the specified domain. **/
    pullGet(domainId: String, assert?: Object): Node;

    /** This function returns the pull replication configurations for all of the domains. **/
    pullGetAll(): Node;

    /** This function returns the ID of the domain associated with the specified pull configuration. **/
    pullGetDomainId(pull: Node): String;

    /** This function returns the ID of the target associated with the specified pull configuration. **/
    pullGetTargetId(pull: Node): String;

    /** This function returns the URLs associated with the specified pull configuration. **/
    pullGetUrls(pull: Node): String;

    /** This function returns the HTTP options associated with the specified pull configuration. **/
    pullGetHttpOptions(pull: Node): Node;

    /** This function sets the URLs for the specified pull configuration. **/
    pullSetUrls(pull: Node, urls: String): Node;

    /** This function sets the HTTP options for the specified pull configuration. **/
    pullSetHttpOptions(pull: Node, httpOptions: Node): Node;

    /** This function creates any indexes needed for CPF based replication. The input configuration is returned from admin:get-configuration and the configuration returned from this function must be inserted again with admin:save-confguration for the changes to take effect. This function may be called multiple times for the same database with no ill effect. **/
    configureDatabase(config: Node, dbid: String): Node;

    /** This function applies an update element to the current database. **/
    apply(update: Node, content: Node): void;

    /** This function applies a delete element to the current database. **/
    delete(delete: Node): void;

    /** This function is used on the master to determine which documents need to be replicated. This function could be used to customize the way pull polling is done (e.g. multiple hosts on the target are polling the master for updates and you want to either have some hosts poll specific forests or you want to have them process different parts of the list of pending documents. **/
    poll(domainId: String, targetId: String, start: Number, size: Number, forestIds: String): Node;

    /** This function processes one or more replicated updates for the specified domain ID, ordered by oldest changes first, and returns the results. **/
    process(domainId: String, size?: Number, targets?: String, forestIds?: String, uris?: String): Node;

    /** This function is used by a Replica to pull updates from the Master. It returns a list of elements; the first element is the response element that was set back to the master, followed by one or more flexrep:ack elements that were posted back to the master. **/
    doPull(pull: Node): Node;

    /** This function returns the replication status for the specified replicated CPF domain. **/
    domainStatus(domainId: String, withTargets?: Object, terse?: Object): Node;

    /** This function returns the replication status for the specified targets within the specified replicated domain. **/
    targetStatus(domainId: String, targetIds: String): Node;

    /** This function returns the status of the target in a pull replication configuration. **/
    remoteTargetStatus(pull: Node): Node;

    /** This function returns the flexrep:document-status element for the document at the specified URI in the specified domain. The returned flexrep:document-status element is extracted from the document's properties, which remain even if the document has been deleted. **/
    documentStatus(domainId: String, uri: String): Node;

    /** This function returns the ID for the specified pull configuration. **/
    pullGetId(pull: Node): String;

    /** This function returns the name of the specified pull configuration. **/
    pullGetName(pull: Node): String;

    /** This function sets the name of the specified pull configuration. **/
    pullSetName(pull: Node, name: String): Node;

    /** This function sets the domain ID for the specified pull configuration. **/
    pullSetDomainId(pull: Node, domainId: String): Node;

    /** This function sets the ID of the replication target for the specified pull replication configuration. **/
    pullSetTargetId(pull: Node, targetId: String): Node;

    /** This function returns the ID of the replication configuration. **/
    configurationGetId(cfg: Node): String;

    /** This function returns the domain name associated with the specified replication configuration. **/
    configurationGetDomainName(cfg: Node): String;

    /** This function returns the status for each domain target. **/
    domainTargetStatuses(): Node;

    /** This function returns status information for documents that failed to replicate for the specified domain and targets. The sequence of status elements returned is ordered in reverse chronological order of the last time replication was attempted for the document. **/
    targetErrorDocuments(domainId: String, targetIds: String): Node;

    /** This function resets the URI status for the specified replication targets. A reset involves retaining any record of last success, clearing any failure status, and setting the time for the next replication attempt to the current time. The status is reset for the specified $target-ids. Resetting the URI status for a target is useful if the document has errored out due to too many failures, or if you want to replicate the document again. **/
    domainTargetReset(domainId: String, targetIds: String, errorsOnly?: Object): void;

    /** This function resets the URI status for all replication targets. A reset involves retaining any record of last success, clearing any failure status, and setting the time for the next replication attempt to the current time. The status is reset for the specified $target-ids. If no $target-ids parameter is specified, then the URI status for all replication targets is reset. Resetting the URI status for a target is useful if the document has errored out due to too many failures, or if you want to replicate the document again. **/
    documentReset(uri: String, domainId: String, targetIds?: String): void;

    /** This function sets the replication retry maximum value for the specified replication target. **/
    configurationTargetSetRetrySecondsMax(cfg: Node, targetId: String, val: Number): Node;

    /** This function.... **/
    validateUrl(url: String): String;

    /** This function.... **/
    applyEncodedUpdates(dts: Node, boundary: String, data: Node): Node;

    /** This function.... **/
    replicate(uri: String, label: String, cfg: Node, domain: Node, docStatus: Node, isDelete: Object, isRetry: Object): Node;

    /** This function.... **/
    multipartEncode(boundary: String, parts: Node): Node;

    /** This function.... **/
    ackApply(domainId: String, targetId: String, acks: Node): Node;

    /** This function.... **/
    validateName(name: String): String;

    /** This function returns the pull replication configuration for the specified Pull ID. **/
    pullGetById(pullId: String, assert?: Object): Node;

    /** This function pushes pending replication updates (either retries or zero-day) for the specified forest on the current host. If any updates are found, a new task is spawned to call this function again. This continues until all pending replication updates have been processed. **/
    pushLocalForest(domainId: String, forestId: String, maxSpawn: String): void;

    /** This function pushes deletes and any pending replication updates (either retries or zero-day) from all of the forests on the current host. A separate task is spawned for each combination of CPF domain and local forest which in turn calls the push-local-forest to increase parallelism. **/
    pushLocalForests(): void;

    /** This function checks the configuration of a database to see if it has all of the necessary indexes for Flexible Replication to work at its best. Returns true if the database needs configuration changes, and returns false if the configuration is as-expected. **/
    databaseNeedsConfiguration(config: Node, dbid: String): Object;

    /** This function.... **/
    pushForestBinaries(domainId: String, targetId: String, forestId: String, maxSpawn: String): void;

    /** This function.... **/
    pushBinary(domainId: String, targetId: String, forestId: String, key: String): void;

    /** This function.... **/
    pushBinaryChunk(statusDoc: Node, useServerField: Object): Number;

    /** This function.... **/
    pushBinaryDocs(domainId: String, targetId: String, forestId: String, map: Object): Node;

    /** This function.... **/
    applyBinaryChunk(key: String, offset: String, bn: Node, forests: String): void;

    /** This function.... **/
    applyBinaryJoin(key: String, forests: String): void;

    /** This function.... **/
    applyBinaryGc(key: String): void;

    /** This function.... **/
    pushBinaries(domainId: String): void;

    /** This function.... **/
    pollBinaryChunk(): Object;

    /** This function.... **/
    getUpdateBinarydocUri(domainId: String, targetId: String, key: String): String;

    /** This function.... **/
    pullBinaries(pull: Node, maxSpawn: String): Node;

    /** This function.... **/
    pullBinaryChunk(pull: Node): Number;

    /** This function.... **/
    ackBinaryChunkApply(domainId: String, targetId: String, key: String, offset: String, subsize: String): Node;

    /** This function.... **/
    targetBinaryPushStatusDocuments(domainId: String, targetIds: String): Node;

    /** This function.... **/
    targetBinaryPushStatusDocument(domainId: String, targetId: String, uri: String): Node;

    /** This function.... **/
    _binaryPushStatusUri(domainId: String, targetId: String, key: String): String;

    /** This function.... **/
    coalesceDomainStatuses(domainId: String): void;

    /** This function.... **/
    pullCheckDuplicate(pull: Node): Node;

    /** Set the alerting URI for a FlexRep configuration. This enables query-based replication to any targets that are configured with a user-id. The alerting URI may be anywhere within the database, however flexrep:domain-alerting-uri() returns a convenient directory withini the FlexRep configuration area. **/
    configurationSetAlertingUri(cfg: Node, uri: String): Node;

    /** Get the alerting URI associated with a FlexRep configuraiton. **/
    configurationGetAlertingUri(cfg: Node): String;

    /** Generate an alerting URI for a CPF domain. The URI will be a subdirectory of the directory used to store other state for the FlexRep domain. There is no requirement that the alerting configuration that a FlexRep domain be stored in this location, but it is a convenient place to put it. **/
    domainAlertingUri(domainId: String): String;

    /** Push a batch of documents from a single forest to a single target, and respawn a new task to do this repeatedly until either nothing remains to replicate or the spawn limit is reached. Typically deployments do not need to call this directly, and instead rely on the push-local-forests.xqy scheduled task. **/
    pushLocalForestTarget(domainId: String, targetId: String, forestId: String, maxSpawn: String): void;

    /** Get a CPF domain's name. **/
    getDomainName(domainId: String): String;

    /** Get a target's name, or nothing if the domain or target does not exist. **/
    getTargetName(domainId: String, targetId: String): String;

    /** Get the user ID associated with a target, if one exists. Only query-based targets have an associated user ID. **/
    configurationTargetGetUserId(cfg: Node, targetId: String): String;

    /** Get the immediate push flag for a target. **/
    configurationTargetGetImmediatePush(cfg: Node, targetId: String): Object;

    /** Set a target's user-id. This is only used for query-based targets, and is only meaningful if the FlexRep configuration also has an alerting URI associated with it. When both of these are true, documents are replicated to the target only if either the document or its properties match one of the user's alerting rules in the alerting configuration. **/
    configurationTargetSetUserId(cfg: Node, targetId: String, userId: String): Node;

    /** Set a target's "immediate push" flag. This defaults to true when a target is created. Normally, when a document is created or updated, flexrep will attempt to replicate it to all push targets from a single CPF action, and a single database transaction. When many targets are configured, there is a danger that this transaction will run for a long time and eventually time out. The "immmediate push" flag allows control over which targets should have documents replicated immediately, and which targets should have them replicated via the periodic retry scheduled task. Query-based targets are always handled by the periodic retry scheduled task. **/
    configurationTargetSetImmediatePush(cfg: Node, targetId: String, immediatePush: Object): Node;

    /** Set the enabled flag for a pull. This provides a way for a target cluster to disable pull replication when necessary. **/
    pullSetEnabled(pull: Node, flag: Object): Node;

    /** Get the enabled flag for a pull configuration. **/
    pullGetEnabled(pull: Node): Object;

    /** This function returns the external user information for a target, if any exists. There is no corresponding set function because the external user information is automatically added by configuration-target-set-user-id(). **/
    configurationTargetGetExternalUser(cfg: Node, targetId: String): Node;

    /** This function creates an inbound filter element. **/
    inboundFilterCreate(filterModule: String, filterOptions: Node): Node;

    /** This function inserts an inbound filter configuration into the database. A single inbound filter applies to all inbound flexible replication to the database. The filter receives two external variables as input, and should return the filtered form of the replication information. An example is shown below. **/
    inboundFilterInsert(filter: Node): void;

    /** This function deletes the inbound filter for this database. If no filter is currently configured, an error will be thrown. **/
    inboundFilterDelete(): void;

    /** This function gets any inbound filter that is contained in the database, or an empty sequence if none is configured. **/
    inboundFilterGet(): Node;

    /** This function creates a flexrep App Server programatically, without needing to know all of the specific settings. **/
    createAppserver(cfg: Node, group: String, name: String, port: String, db: String): Node;

    /** This function is used by appserver upgrade code. Users shouldn't typically need to call this function directly. **/
    upgradeAppserver(cfg: Node, ids: String): Node;


  }
}
