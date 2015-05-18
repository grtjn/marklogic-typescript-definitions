// Type definitions for Management
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/management.xml

/**

 The Management API is a REST-based API that allows you to administer MarkLogic 
 Server and access MarkLogic Server instrumentation with no provisioning or 
 set-up. You can use the API to perform administrative tasks
 such as initializing or extending a cluster; creating databases, forests, and
 App Servers; and managing tiered storage partitions. The API also provides 
 the ability to easily capture detailed information on MarkLogic Server 
 objects and processes, such as hosts, databases, forests, 
 App Servers, groups, transactions, and requests from a wide variety of tools.

 All of the resource addresses in the Management API require the 
 http://marklogic.com/xdmp/privileges/manage privilege.
 Methods that modify configuration also require the privilege
 http://marklogic.com/xdmp/privileges/manage-admin. See
 the individual methods for detils.

 If a request results in an error, the body of the response includes
 error details. The MIME type of error details is determined by the 
 format request parameter (where supported), Accept 
 header, or request Content-type header, in that order of precedence. 
 For example, if a request supplies XML input (request Content-type
 set to application/xml), but specifies JSON output using
 the format parameter, then error details are returned as 
 JSON. The default error detail MIME type is XML.

**/

declare module Management {

  interface manage {

    /** This resource address returns summary information for the local cluster. **/
    /manage/v2/(format?: string, view: string): ;

    /** This resource address modifies the properties of the local cluster. **/
    /manage/v2/properties(format?: string): ;

    /** This resource address returns the summary of all of the resources in the local cluster, or resources in the local cluster that match a query. **/
    /manage/v2?view=query(format?: string, nameMatch: string, pageStart: string, pageLength: string): ;

    /** This resource address returns a status summary for the local cluster. **/
    /manage/v2?view=status(format?: string): ;

    /** Retrieve the current properties of the cluster. For an example, see Coupling the Master and Replica Clusters in the Scripting Administrative Tasks Guide. **/
    /manage/v2/properties(format?: string): ;

    /** This resource address returns a list of all of the foreign clusters coupled to the local cluster. **/
    /manage/v2/clusters(format?: string, view?: string, clusterRole: string): ;

    /** This resource address creates a foreign cluster. For an example, see Coupling the Master and Replica Clusters in the Scripting Administrative Tasks Guide. **/
    /manage/v2/clusters(format?: string): ;

    /** Retrieve historical monitoring data for the foreign clusters coupled to the local cluster. **/
    /manage/v2/clusters?view=metrics(format?: string, clusterRole: string): ;

    /** This resource address returns summary information for the specified foreign cluster. **/
    /manage/v2/clusters/{id|name}(format?: string, view: string): ;

    /** Retrieve configuration information for the named foreign cluster. **/
    /manage/v2/clusters/{id|name}?view=config(format?: string): ;

    /** Retrieve historical monitoring data for the specified foreign cluster. **/
    /manage/v2/clusters/{id|name}?view=metrics(format?: string): ;

    /** This resource address returns a status summary for the specified foreign cluster. **/
    /manage/v2/clusters/{id|name}?view=status(format?: string): ;

    /** Initiate a state change on the named cluster, such as a shutdown or restart. **/
    /manage/v2/clusters/{id|name}(state: string, format?: string): ;

    /** This resource address deletes the specified foreign cluster. **/
    /manage/v2/clusters/{id|name}(format?: string): ;

    /** This resource address returns the modifiable properties of the named foreign cluster. The foreign cluster can be identified either by id or name. **/
    /manage/v2/clusters/{id|name}/properties(format?: string): ;

    /** This resource address modifies the properties of the named foreign cluster. **/
    /manage/v2/clusters/{id|name}/properties(format?: string): ;

    /** This resource address returns data about the forests in the cluster. The data returned depends on the view. If no view is specified, this request returns a summary of the forests in the cluster. **/
    /manage/v2/forests(format?: string, view?: string, databaseId?: string, groupId?: string, hostId?: string, fullrefs?: string): ;

    /** Retrieve historical monitoring data about the forests in the cluster. **/
    /manage/v2/forests?view=metrics(format?: string, fullrefs?: string): ;

    /** This resource address returns status information about the forests in the cluster. **/
    /manage/v2/forests?view=status(format?: string, databaseId?: string, groupId?: string, hostId?: string, fullrefs?: string): ;

    /** This resource address returns storage information about the forests in the cluster. **/
    /manage/v2/forests?view=storage(format?: string, databaseId?: string, groupId?: string, hostId?: string, fullrefs?: string): ;

    /** Create a new forest, including replicas if specified. If a database id or database is included, attach the new forest(s) to the database. For an example, see Preliminary Configuration Procedures in the Scripting Administrative Tasks Guide. **/
    /manage/v2/forests(): ;

    /** Perform an operation on one or more forests, such as combining multiple forests into a single new one, or migrating the data in the forests to a new data directory. **/
    /manage/v2/forests(format?: string): ;

    /** Initiate a state change on a forest, such as a merge, restart, or attach. **/
    /manage/v2/forests/{id|name}(state: string, database?: string): ;

    /** Delete a forest. **/
    /manage/v2/forests/{id|name}(level: string): ;

    /** Retrieve information about a forest. The forest can be identified either by id or name. **/
    /manage/v2/forests/{id|name}(format?: string, view?: string, property: string): ;

    /** Retrieve configuration information about the named forest. **/
    /manage/v2/forests/{id|name}?view=config(format?: string): ;

    /** Retrieve count information about a forest. The forest can be identified either by id or name. **/
    /manage/v2/forests/{id|name}?view=counts(format?: string, property: string): ;

    /** Retrieve status information about the named forest. **/
    /manage/v2/forests/{id|name}?view=status(format?: string): ;

    /** Retrieve the current state of modifiable properties of the forest identified by {id|name}. **/
    /manage/v2/forests/{id|name}/properties(format?: string): ;

    /** Modify the configuration of the forest identified by {id|name}. **/
    /manage/v2/forests/{id|name}/properties(format?: string): ;

    /** This resource address returns some custom information for the specified forest, as implemented by a specific plugin. The forest can be identified either by id or name. **/
    /manage/v2/forests/{id|name}/{custom}(format?: string): ;

    /** This resource address returns a summary of the databases in the cluster. **/
    /manage/v2/databases(format?: string, view: string): ;

    /** This resource address creates a new database in the cluster. For an example, see Preliminary Configuration Procedures in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases(format?: string): ;

    /** Retrieve historical monitoring data about the databases in the cluster. **/
    /manage/v2/databases?view=metrics(format?: string): ;

    /** This resource address returns information on the specified database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}(format?: string, view?: string): ;

    /** This resource address can be used to clear the contents of the named database and to perform various configuration operations on the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}(format?: string, overwriteReplicas?: string): ;

    /** This resource address deletes the named database from the cluster. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}(forestDelete?: string, format?: string): ;

    /** This resource address returns the modifiable properties of the named database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/properties(format?: string): ;

    /** This resource address modifies the properties of the named database. The list of modifiable properties can be returned by the GET version of this endpoint. The database can be identified either by id or name. For an example, see Preliminary Configuration Procedures in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/properties(format?: string): ;

    /** This resource address returns configuration information for the named database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}?view=config(format?: string): ;

    /** This resource address returns the count information for forests attached to the named database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}?view=counts(format?: string): ;

    /** This resource address returns configuration details about the named database in a format suitable for use with the /manage/v2/packages interfaces. The database can be identifed either by id or name. **/
    /manage/v2/databases/{id|name}?view=package(format?: string): ;

    /** This resource address returns status information for the named database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}?view=status(format?: string): ;

    /** This resource address returns the list of flexible replication configurations for the specified database. **/
    /manage/v2/databases/{id|name}/flexrep(format?: string): ;

    /** This resource address returns the inbound filter flexible replication properties for the database. **/
    /manage/v2/databases/{id|name}/flexrep/properties(format?: string): ;

    /** This resource address updates the inbound filter flexible replication properties for the database. **/
    /manage/v2/databases/{id|name}/flexrep/properties(format?: string): ;

    /** This resource address returns the list of flexible push replication configurations for the domains for the specified database. **/
    /manage/v2/databases/{id|name}/flexrep/configs(format?: string): ;

    /** This resource address creates a flexible push replication configuration, along with the indexes needed for CPF-based flexible replication on the specified database. For an example, see Creating a Replication Configuration Element in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/flexrep/configs(format?: string): ;

    /** This resource address returns the flexible replication configuration for the specified domain on the specified database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}(format?: string): ;

    /** This resource address deletes the named flexible replication configuration for the specified domain on the specified database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}(format?: string): ;

    /** This resource address returns the flexible replication configuration properties for the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/properties(format?: string): ;

    /** This resource address updates the flexible replication configuration properties for the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/properties(format?: string): ;

    /** This resource address returns the flexible replication pull configurations for the database. **/
    /manage/v2/databases/{id|name}/flexrep/pulls(format?: string): ;

    /** This resource address creates a flexible replication pull configuration for the database. The specified database pulls replicated updates from the target database. **/
    /manage/v2/databases/{id|name}/flexrep/pulls(format?: string): ;

    /** This resource address returns the specified flexible replication pull configuration for the database. **/
    /manage/v2/databases/{id|name}/flexrep/pulls/{id|name}(format?: string): ;

    /** This resource address deletes the named flexible replication pull configuration for the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/flexrep/pulls/{id|name}(format?: string): ;

    /** This resource address returns the flexible replication pull configuration properties for the database. **/
    /manage/v2/databases/{id|name}/flexrep/pulls/{id|name}/properties(format?: string): ;

    /** This resource address is used to update the enabled property to enable or disable pull flexible replication for the specified database. **/
    /manage/v2/databases/{id|name}/flexrep/pulls/{id|name}/properties(format?: string): ;

    /** This resource address returns the flexible replication targets for the database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets(format?: string): ;

    /** This resource address creates a target for use by the flexible replication configuration for the named database. For an example, see Creating a Replication Target in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets(format?: string): ;

    /** This resource address returns the target configuration for the specified flexible replication configuration for the database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets/{id|name}(format?: string): ;

    /** This resource address deletes the configuration for the named target from the named flexible replication configuration for the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets/{id|name}(format?: string): ;

    /** This resource address returns the properties for the specified target configuration in the specified flexible replication configuration for the database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets/{id|name}/properties(format?: string): ;

    /** This resource address is used to set the properties for the target used by the flexible replication configuration for the database. **/
    /manage/v2/databases/{id|name}/flexrep/configs/{id|name}/targets/{id|name}/properties(format?: string): ;

    /** Retrieve a list of partitions in a database. **/
    /manage/v2/databases/{id|name}/partitions(format?: string): ;

    /** Add a partition to the database. **/
    /manage/v2/databases/{id|name}/partitions(format?: string): ;

    /** Retrieve a partition summary that includes links to related resources, such as the containing database, member forests, and the partition configuration. **/
    /manage/v2/databases/{id|name}/partitions/{name}(format?: string): ;

    /** Invoke an operation on a partition, such as resizing the partition or transferring or migrating the partition to a different database. **/
    /manage/v2/databases/{id|name}/partitions/{name}(format?: string): ;

    /** Delete the partition identified by {name} from the database identified by {id|name}. **/
    /manage/v2/databases/{id|name}/partitions/{name}(deleteData: string): ;

    /** Retrieve the current configuration for the partition identified by {name} in the database identified by {name|id}. **/
    /manage/v2/databases/{id|name}/partitions/{name}/properties(format?: string): ;

    /** Modify the configuration of the partition identified by {name} in the database identified by {id|name}. **/
    /manage/v2/databases/{id|name}/partitions/{name}/properties(): ;

    /** This resource address returns the current rebalancer configuration. **/
    /manage/v2/databases/{id|name}/rebalancer(format?: string): ;

    /** Update the rebalancer configuration for a database. **/
    /manage/v2/databases/{id|name}/rebalancer(): ;

    /** This resource address returns some custom information for the specified database, as implemented by a specific plugin. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/{custom}(format?: string): ;

    /** Retrieve a list of sub-databases of the database identified by {id|name}. **/
    /manage/v2/databases/{id|name}/subDatabases(format?: string): ;

    /** Create a new database attached as sub-database of the database identified by {id|name}. **/
    /manage/v2/databases/{id|name}/subDatabases(): ;

    /** Retrieve a summary of the specified sub-database, including a list of sibling sub-databases, if any. **/
    /manage/v2/databases/{superId|name}/subDatabases/{subId|name}(format?: string): ;

    /** Disassociate a sub-database from a super-database and delete the sub-database. **/
    /manage/v2/databases/{superId|name}/subDatabases/{subId|name}(): ;

    /** Retrieve a list of super-databases of which the specified database is a sub-database. **/
    /manage/v2/databases/{id|name}/superDatabases(format?: string): ;

    /** Create a new database and make it a super-database of the database identified by {id|name}. **/
    /manage/v2/databases/{id|name}/superDatabases(): ;

    /** Retrieve a summary about a specific super-database of a sub-database. **/
    /manage/v2/databases/{subId|name}/superDatabases/{superId|name}(format?: string): ;

    /** Disassociate a super-database from a sub-database and delete the super-database. **/
    /manage/v2/databases/{subId|name}/superDatabases/{superId|name}(): ;

    /** Retrieve information about the hosts in a cluster. The data returned depends on the view parameter setting. **/
    /manage/v2/hosts(format?: string, groupId: string, view: string): ;

    /** This resource address is used to add a new host to the cluster. **/
    /manage/v2/hosts(format?: string): ;

    /** Retrieve status information about the hosts in the cluster. **/
    /manage/v2/hosts?view=status(format?: string, groupId: string): ;

    /** Retrieve historical monitoring data about the hosts in the cluster. **/
    /manage/v2/hosts?view=metrics(format?: string, groupId: string): ;

    /** This resource address returns information on a specific host. The host can be identified either by id or name. **/
    /manage/v2/hosts/{id|name}(format?: string, view?: string): ;

    /** This resource address returns configuration information on a specific host. The host can be identified either by id or name. **/
    /manage/v2/hosts/{id|name}?view=config(view: string, format?: string): ;

    /** This resource address returns counts information on a specific host. The host can be identified either by id or name. **/
    /manage/v2/hosts/{id|name}?view=counts(format?: string): ;

    /** This resource address returns status information on a specific host. The host can be identified either by id or name. **/
    /manage/v2/hosts/{id|name}?view=status(format?: string): ;

    /** Initiate a state change on a host, such as a shutdown or restart. **/
    /manage/v2/hosts/{id|name}(state: string, format?: string): ;

    /** This resource address returns the current state of modifiable properties of the specified host. **/
    /manage/v2/hosts/{id|name}/properties(format?: string): ;

    /** Initiate a properties change on the specified host. **/
    /manage/v2/hosts/{id|name}/properties(format?: string): ;

    /** This resource address returns some custom information for the specified host, as implemented by a specific plugin. The host can be identified either by id or name. **/
    /manage/v2/hosts/{id|name}/{custom}(format?: string): ;

    /** This resource address returns data about the App Servers in the cluster. The data returned depends on the setting of the view request parameter. The default view provides a summary of the servers. **/
    /manage/v2/servers(format?: string, groupId: string, view: string, fullrefs: string): ;

    /** Retrieve historical monitoring data about the App Servers in the cluster. **/
    /manage/v2/servers?view=metrics(format?: string, groupId: string, fullrefs: string): ;

    /** This resource address returns status information for the App Servers in the cluster. **/
    /manage/v2/servers?view=status(format?: string, groupId: string, fullrefs: string): ;

    /** This resource address returns data about a specific App Server. The server can be identified either by id or name. The data returned depends on the value of the view request parameter. The default view is a summary with links to additional data. **/
    /manage/v2/servers/{id|name}(groupId: string, format?: string, view?: string, hostId: string, fullrefs: string, modules?: string): ;

    /** This resource address returns configuration data about a specific App Server. The server can be identified either by id or name. **/
    /manage/v2/servers/{id|name}?view=config(groupId: string, format?: string): ;

    /** This resource address returns status information about a specific App Server. The server can be identified either by id or name. **/
    /manage/v2/servers/{id|name}?view=status(groupId: string, format?: string, hostId: string, fullrefs: string): ;

    /** This resource address returns configuration details about the named App Server in a format suitable for use with the /manage/v2/packages interfaces. The server can be identifed either by id or name. **/
    /manage/v2/servers/{id|name}?view=package(groupId: string, format?: string, modules?: string): ;

    /** This resource address returns some custom information for the specified server, as implemented by a specific plugin. The server can be identified either by id or name. **/
    /manage/v2/servers/{id|name}/{custom}(groupId: string, format?: string): ;

    /** This resource address is used to create a new App Server in the specified group. For an example, see Preliminary Configuration Procedures in the Scripting Administrative Tasks Guide. **/
    /manage/v2/servers(groupId: string, serverType: string, format?: string): ;

    /** This resource address deletes the specified App Server from the specified group. **/
    /manage/v2/servers/{id|name}(groupId: string, format?: string): ;

    /** This resource address returns the current state of modifiable properties of the specified App Server. **/
    /manage/v2/servers/{id|name}/properties(groupId: string, format?: string): ;

    /** Initiate a properties change on the specified App Server. **/
    /manage/v2/servers/{id|name}/properties(groupId: string, format?: string): ;

    /** This resource address returns a summary of the groups in the cluster. **/
    /manage/v2/groups(format?: string, view: string): ;

    /** This resource address creates a new group in the cluster. **/
    /manage/v2/groups(format?: string): ;

    /** This resource address returns information on a specific group. The group can be identified either by id or name. **/
    /manage/v2/groups/{id|name}(format?: string, view?: string): ;

    /** This resource address can be used to restart or shutdown a group in the cluster. **/
    /manage/v2/groups/{id|name}(format?: string): ;

    /** This resource address deletes a group from the cluster. **/
    /manage/v2/groups/{id|name}(format?: string): ;

    /** This resource address returns the configuration properties of the named group in the cluster. **/
    /manage/v2/groups/{id|name}/properties(format?: string): ;

    /** This resource address sets the configuration properties of the named group in the cluster. **/
    /manage/v2/groups/{id|name}/properties(format?: string): ;

    /** This resource address returns configuration information on the specified group. The group can be identified either by id or name. **/
    /manage/v2/groups/{id|name}?view=config(format?: string): ;

    /** This resource address returns counts information on the specified group. The group can be identified either by id or name. **/
    /manage/v2/groups/{id|name}?view=counts(format?: string): ;

    /** This resource address returns status information on the specified group. The group can be identified either by id or name. **/
    /manage/v2/groups/{id|name}?view=status(format?: string): ;

    /** This resource address returns a summary of the requests in the cluster. **/
    /manage/v2/requests(format?: string, view: string, groupId: string, hostId: string, serverId: string, secondsMin: string, fullrefs: string): ;

    /** This resource address returns information on the specified request. The request can be identified either by id or URI. **/
    /manage/v2/requests/{id|uri}(format?: string, groupId: string, hostId: string, serverId: string): ;

    /** This resource address returns a summary of the transactions in the cluster. **/
    /manage/v2/transactions(format?: string, view: string, hostId: string, secondsMin: string, fullrefs: string): ;

    /** This resource address returns information on the specified transaction. The transaction can be identified either by id or URI. This resource address must include the id or name of the host that executes the transaction. **/
    /manage/v2/transactions/{id|uri}(format?: string, hostId: string): ;

    /** Check the status of the ticket identified by {tid}. **/
    /manage/v2/tickets/{tid}?view=processStatus(format?: string): ;

    /** Initialize MarkLogic Server, optionally installing or updating an license key at the same time; or install/update a license key for a previously initialized instance of MarkLogic Server. **/
    /admin/v1/init(format?: string, licenseKey?: string, licensee?: string): ;

    /** Install the admin username and password, and initialize the security database and objects. **/
    /admin/v1/instanceAdmin(format?: string, adminUsername?: string, adminPassword?: string): ;

    /** Verify that MarkLogic Server is up and accepting requests. **/
    /admin/v1/timestamp(): ;

    /** Verify that MarkLogic Server is up and accepting requests. **/
    /admin/v1/timestamp(): ;

    /** Retrieve MarkLogic Server configuration information, suitable for use in joining a cluster. **/
    /admin/v1/serverConfig(): ;

    /** Provide host or cluster configuration information suitable for adding a new host to an existing cluster. **/
    /admin/v1/clusterConfig(serverConfig?: string, group?: string, zone?: string): ;

    /** Remove a host's configuration from the cluster configuration, dropping the host from the cluster. The remote-host parameter is required if you are removing a host from a different group. **/
    /admin/v1/hostConfig(remoteHost?: string): ;

    /** This resource address returns a list of all of the resources in the local cluster that existed in specified time period.. Note that using the start and end parameters to define a time range may be expensive. **/
    /manage/v2/meters/resources(format?: string, period: dateTime, start: dateTime, end: dateTime): ;

    /** This resource address returns all of the labels stored for the monitoring history timespans. All labels are returned, unless the start, end, or name parameters specify otherwise. **/
    /manage/v2/meters/labels(format?: string, name: string, start: dateTime, end: dateTime): ;

    /** This resource address creates a label and returns the ID of the created label. The label name must be unique. The event element in the payload body must be either marker or duration. **/
    /manage/v2/meters/labels(format?: string): ;

    /** This resource address returns information on the /manage/v2/meters/labels endpoint. **/
    /manage/v2/meters/labels(): ;

    /** This resource address returns the named label stored for the monitoring history timespans. **/
    /manage/v2/meters/labels/{id|name}(format?: string): ;

    /** This resource address updates an exiting label and returns the ID of the updated label. **/
    /manage/v2/meters/labels/{id|name}(format?: string): ;

    /** This resource address deletes the named label. **/
    /manage/v2/meters/labels/{id|name}(): ;

    /** This resource address tests to see if the named label is in MarkLogic Server. **/
    /manage/v2/meters/labels/{id|name}(): ;

    /** This resource address returns information on the /manage/v2/meters/labels/{id|name} endpoint. **/
    /manage/v2/meters/labels/{id|name}(): ;

    /** This resource address returns the list of CPF configurations. For an example, see Installing and Configuring CPF in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/cpfConfigs(format?: string): ;

    /** This resource address creates a CPF configuration for the database. **/
    /manage/v2/databases/{id|name}/cpfConfigs(format?: string): ;

    /** This resource address returns the CPF configuration for the specified domain. **/
    /manage/v2/databases/{id|name}/cpfConfigs/{domainId|defaultDomainName}(format?: string): ;

    /** This resource address returns the CPF configuration properties for the specified domain. **/
    /manage/v2/databases/{id|name}/cpfConfigs/{domainId|defaultDomainName}/properties(format?: string): ;

    /** This resource address updates the CPF configuration on the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/cpfConfigs/{domainId|defaultDomainName}/properties(format?: string): ;

    /** This resource address returns the list of domains for the specified database. **/
    /manage/v2/databases/{id|name}/domains(format?: string): ;

    /** This resource address creates a new domain for the specified Triggers database. For an example, see Installing and Configuring CPF in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/domains(format?: string): ;

    /** This resource address returns the configuration of the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/domains/{id|name}(format?: string): ;

    /** This resource address allows you to attach and detach pipelines to the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/domains/{id|name}(format?: string): ;

    /** This resource address deletes the named domain from the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/domains/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/domains/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties of the specified domain for the specified database. **/
    /manage/v2/databases/{id|name}/domains/{id|name}/properties(format?: string): ;

    /** This resource address returns the list of pipelines for the specified database. For an example, see Installing and Configuring CPF in the Scripting Administrative Tasks Guide. **/
    /manage/v2/databases/{id|name}/pipelines(format?: string): ;

    /** This resource address can be used to create and load CPF pipelines for the specified database. **/
    /manage/v2/databases/{id|name}/pipelines(format?: string): ;

    /** This resource address returns the configuration for the specified pipeline for the specified database. **/
    /manage/v2/databases/{id|name}/pipelines/{id|name}(format?: string): ;

    /** This resource address deletes the named pipeline from the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/pipelines/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified pipeline for the specified database. **/
    /manage/v2/databases/{id|name}/pipelines/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties of the specified pipeline for the specified database. **/
    /manage/v2/databases/{id|name}/pipelines/{id|name}/properties(format?: string): ;

    /** This resource address returns the list of SQL View Schemas for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas(format?: string): ;

    /** This resource address creates a SQL View Schema in the specified schemas database. **/
    /manage/v2/databases/{id|name}/viewSchemas(format?: string): ;

    /** This resource address returns the specified SQL View Schema for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{id|name}(format?: string): ;

    /** This resource address deletes the named SQL View Schema from the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/viewSchemas/{id|name}(format?: string, deleteViews?: string): ;

    /** This resource address returns the properties of the specified SQL View Schema for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties of a SQL View Schema in the specified SQL Schema for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{id|name}/properties(format?: string): ;

    /** This resource address returns the list of SQL Views for the specified schema in the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views(format?: string): ;

    /** This resource address adds a SQL View to the specified schema on the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views(format?: string): ;

    /** This resource address returns the specified SQL View for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views/{id|name}(format?: string): ;

    /** This resource address deletes the named SQL View from the database. The database can be identified either by id or name. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views/{id|name}(format?: string, deleteViews?: string): ;

    /** This resource address returns the properties of the specified SQL View for the specified database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for a SQL View in the Schemas database. **/
    /manage/v2/databases/{id|name}/viewSchemas/{schemaName}/views/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the users in the cluster. **/
    /manage/v2/users(format?: string): ;

    /** This resource address creates a new user in the security database. **/
    /manage/v2/users(format?: string): ;

    /** This resource address returns the configuration for the specified user. **/
    /manage/v2/users/{id|name}(format?: string): ;

    /** This resource address deletes the named user from the named security database. **/
    /manage/v2/users/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified user. **/
    /manage/v2/users/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for the specified user. **/
    /manage/v2/users/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the roles in the security database. **/
    /manage/v2/roles(format?: string): ;

    /** This resource address creates a new role in the security database. **/
    /manage/v2/roles(format?: string): ;

    /** This resource address returns the configuration for the specified role. **/
    /manage/v2/roles/{id|name}(format?: string): ;

    /** This resource address deletes the named role from the named security database. **/
    /manage/v2/roles/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified role. **/
    /manage/v2/roles/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for the specified role. **/
    /manage/v2/roles/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the privileges in the security database. **/
    /manage/v2/privileges(format?: string): ;

    /** This resource address creates a new privilege in the security database. **/
    /manage/v2/privileges(format?: string): ;

    /** This resource address returns the configuration for the specified privilege. **/
    /manage/v2/privileges/{id|name}(format?: string, kind: string): ;

    /** This resource address deletes the named privilege from the named security database. **/
    /manage/v2/privileges/{id|name}(format?: string, kind: string): ;

    /** This resource address returns the properties of the specified privilege. **/
    /manage/v2/privileges/{id|name}/properties(format?: string, kind: string): ;

    /** This resource address can be used to update the properties for the specified privilege. The only thing you can change about a privilege is the set of associated roles. **/
    /manage/v2/privileges/{id|name}/properties(format?: string, kind: string): ;

    /** This resource address returns a summary of the amps in the security database. **/
    /manage/v2/amps(format?: string): ;

    /** This resource address creates a new amp in the Security database. **/
    /manage/v2/amps(format?: string): ;

    /** This resource address returns the configuration for the specified amp. **/
    /manage/v2/amps/{id|name}(format?: string, namespace?: string, documentUri: string, modulesDatabase?: string): ;

    /** This resource address deletes the named amp from the named security database. **/
    /manage/v2/amps/{id|name}(format?: string, namespace?: string, documentUri: string, modulesDatabase?: string): ;

    /** This resource address returns the properties of the specified amp. **/
    /manage/v2/amps/{id|name}/properties(format?: string, namespace?: string, documentUri: string, modulesDatabase?: string): ;

    /** This resource address can be used to update the properties for the specified amp. **/
    /manage/v2/amps/{id|name}/properties(format?: string, namespace?: string, documentUri: string, modulesDatabase?: string): ;

    /** This resource address returns a summary of the external-security configurations in the security database. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    /manage/v2/externalSecurity(format?: string): ;

    /** This resource address creates a new external-security configuration in the security database. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    /manage/v2/externalSecurity(format?: string): ;

    /** This resource address returns the specified external-security configuration. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    /manage/v2/externalSecurity/{id|name}(format?: string): ;

    /** This resource address deletes the named external-security configuration from the named security database. **/
    /manage/v2/externalSecurity/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified external-security configuration. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    /manage/v2/externalSecurity/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for the specified external-security configuration. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    /manage/v2/externalSecurity/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the protected collections in the cluster. **/
    /manage/v2/protectedCollections(format?: string): ;

    /** This resource address creates a new protected collection in the security database. **/
    /manage/v2/protectedCollections(format?: string): ;

    /** This resource address returns the configuration for the specified protected collection. **/
    /manage/v2/protectedCollections?uri={collectionUri}(uri: string, format?: string): ;

    /** This resource address deletes the named protected collection from the Security database. **/
    /manage/v2/protectedCollections?uri={collectionUri}(uri: string, format?: string): ;

    /** This resource address returns the properties of the specified protected collection. **/
    /manage/v2/protectedCollections/properties?uri={collectionUri}(uri: string, format?: string): ;

    /** This resource address can be used to update the properties for the specified protected collection. **/
    /manage/v2/protectedCollections/properties?uri={collectionUri}(uri: string, format?: string): ;

    /** This resource address returns a summary of the certificate authorities in the cluster. **/
    /manage/v2/certificateAuthorities(format?: string): ;

    /** This resource address creates a new certificate authority in the security database. **/
    /manage/v2/certificateAuthorities(format?: string): ;

    /** This resource address returns the configuration for the specified certificate authority. **/
    /manage/v2/certificateAuthorities/{id|name}(format?: string): ;

    /** This resource address deletes the named certificate authority from the Security database. **/
    /manage/v2/certificateAuthorities/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified certificate authority. **/
    /manage/v2/certificateAuthorities/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the certificate templates in the cluster. **/
    /manage/v2/certificateTemplates(format?: string): ;

    /** This resource address creates a new certificate template in the Security database. **/
    /manage/v2/certificateTemplates(format?: string): ;

    /** This resource address returns the configuration for the specified certificate template. **/
    /manage/v2/certificateTemplates/{id|name}(format?: string): ;

    /** This resource address deletes the named certificate template from the Security database. **/
    /manage/v2/certificateTemplates/{id|name}(format?: string): ;

    /** This resource address is used to perform various operations on the specified certificate template. **/
    /manage/v2/certificateTemplates/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified certificate template. **/
    /manage/v2/certificateTemplates/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for the specified certificate template. **/
    /manage/v2/certificateTemplates/{id|name}/properties(format?: string): ;

    /** This resource address returns a summary of the certificates in the cluster. **/
    /manage/v2/certificates(format?: string): ;

    /** This resource address inserts one or more certificates into the Security database. **/
    /manage/v2/certificates(trusted?: string, format?: string): ;

    /** This resource address returns the configuration for the specified certificate. **/
    /manage/v2/certificates/{id|name}(format?: string): ;

    /** This resource address deletes the named certificate from the Security database. **/
    /manage/v2/certificates/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified certificate. **/
    /manage/v2/certificates/{id|name}/properties(format?: string): ;

    /** This resource address inserts a PEM- or DER-encoded Certificate Revocation List (CRL) into the security database. [Or does is add a certificate to the CRL?????] **/
    /manage/v2/certificateRevocationLists(url: string): ;

    /** This resource address returns the temporal configuration for the named database. **/
    /manage/v2/databases/{id|name}/temporal(format?: string): ;

    /** This resource address returns the list of temporal axes for the named database. **/
    /manage/v2/databases/{id|name}/temporal/axes(format: string): ;

    /** This resource address creates a new temporal axis for the named database. **/
    /manage/v2/databases/{id|name}/temporal/axes(format: string): ;

    /** This resource address returns the configuration for the specified temporal axis. **/
    /manage/v2/databases/{id|name}/temporal/axes/{id|name}(format?: string): ;

    /** This resource address deletes the named temporal axis from the named database. **/
    /manage/v2/databases/{id|name}/temporal/axes/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified temporal axis. **/
    /manage/v2/databases/{id|name}/temporal/axes/{id|name}/properties(format?: string): ;

    /** This resource address returns the list of temporal collections for the named database. **/
    /manage/v2/databases/{id|name}/temporal/collections(format: string): ;

    /** This resource address creates a new temporal collection for the named database. **/
    /manage/v2/databases/{id|name}/temporal/collections(format: string): ;

    /** This resource address returns the configuration for the specified temporal collection. **/
    /manage/v2/databases/{id|name}/temporal/collections?collection={name}(collection: string, format?: string): ;

    /** This resource address deletes the named temporal collection from the named database. **/
    /manage/v2/databases/{id|name}/temporal/collections?collection={name}(collection: string, format?: string): ;

    /** This resource address returns the properties of the specified temporal collection. **/
    /manage/v2/databases/{id|name}/temporal/collections/properties?collection={name}(collection: string, format?: string): ;

    /** This resource sets the optional properties on the specified temporal collection. **/
    /manage/v2/databases/{id|name}/temporal/collections/properties?collection={name}(collection: string, format?: string): ;

    /** This resource address returns the LSQT properties for the specified temporal collection. A value of true indicates that LSQT is enabled, false indicates that LSQT is disabled. **/
    /manage/v2/databases/{id|name}/temporal/collections/LSQT/properties?collection={name}(collection: string, format?: string): ;

    /** This resource sets the LSQT properties on the specified temporal collection. **/
    /manage/v2/databases/{id|name}/temporal/collections/LSQT/properties?collection={name}(collection: string, format?: string): ;

    /** This resource address lists the Task Server properties. **/
    /manage/v2/taskServer(format?: string, groupId: string): ;

    /** This resource address returns the properties of the Task Server in the specified group. **/
    /manage/v2/taskServer/properties(format?: string, groupId: string): ;

    /** Initiate a properties change on the Task Server in the specified group. **/
    /manage/v2/taskServer/properties(groupId: string, format?: string): ;

    /** This resource address returns the list of scheduled tasks for the specified group. **/
    /manage/v2/tasks(format?: string, groupId: string): ;

    /** This resource address is used to create a new scheduled task for the specified group. For an example, see Creating a Push Replication Scheduled Task in the Scripting Administrative Tasks Guide. **/
    /manage/v2/tasks(groupId: string, serverType: string, format?: string): ;

    /** This resource address returns the configuration for the specified task. **/
    /manage/v2/tasks/{id|name}(groupId: string, format?: string): ;

    /** This resource address deletes the named task from the named group. **/
    /manage/v2/tasks/{id|name}(groupId: string, format?: string): ;

    /** This resource address returns the properties of the specified task. **/
    /manage/v2/tasks/{id|name}/properties(groupId: string, format?: string, kind: string): ;

    /** This resource address can be used to update the properties for the specified task. **/
    /manage/v2/tasks/{id|name}/properties(groupId: string, format?: string, kind: string): ;

    /** This resource address returns a list of all of the mimetypes supported by MarkLogic Server. **/
    /manage/v2/mimetypes(format?: string): ;

    /** This resource address creates a new mimetype. **/
    /manage/v2/mimetypes(format?: string): ;

    /** This resource address returns the configuration for the specified mimetype. **/
    /manage/v2/mimetypes/{id|name}(format?: string): ;

    /** This resource address deletes the named mimetype. **/
    /manage/v2/mimetypes/{id|name}(format?: string): ;

    /** This resource address returns the properties of the specified mimetype. **/
    /manage/v2/mimetypes/{id|name}/properties(format?: string): ;

    /** This resource address can be used to update the properties for the specified mimetype. **/
    /manage/v2/mimetypes/{id|name}/properties(format?: string): ;

    /** This resource returns the set of domains for which Flexible Replication is configured. **/
    /manage/v1/domains(format?: string): ;

    /** This resource returns the status for the domain. **/
    /v1/domains/{domainIdOrDefaultDomainName}/status(format?: string, withTargets?: boolean): ;

    /** This resource returns the set of targets configured for the domain. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets(format?: string): ;

    /** This resource returns the specified target. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}(format?: string, withTargets?: boolean): ;

    /** This resource returns the set of rules for a particular target. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}/rules(format?: string): ;

    /** This resource returns the specified rule. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}/rules/ALERT_ID(format?: string): ;

    /** This resource overwrites the specified rule. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}/rules/ALERT_ID(format?: string): ;

    /** This resource deletes the specified rule. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}/rules/ALERT_ID(format?: string): ;

    /** This resource adds new rule. **/
    /v1/domains/{domainIdOrDefaultDomainName}/targets/{id|name}/rules(format?: string): ;


  }
}
