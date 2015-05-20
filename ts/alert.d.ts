// Type definitions for AlertModule
// Definitions: 

/**
		The Alerting API function module is used to create alerting 
			applications.  The Alerting API abstracts the security 
			considerations and the reverse search functionality
			from the developer.  The Alerting API is installed as 
			the following file:
	install_dir/Modules/MarkLogic/alert.xqy
      where install_dir is the directory in which 
	      MarkLogic Server is installed.
       To use the alert.xqy module in your own XQuery modules, include the 
	      following line in your XQuery prolog:
      import module namespace alert = "http://marklogic.com/xdmp/alert" 
		  at "/MarkLogic/alert.xqy";
      The library uses the alert: namespace, which is 
	      not predefined in the server.
      The Alerting API requires a valid alerting license key.  Without a 
	      valid license key, the functions in the Alerting API will throw an 
	      exception.  Additionally, a valid alerting license key is
	     required to use the reverse index. 
      
   **/

declare module AlertModule {

  interface alert {

    /** Create an alerting configuration associated with a particular URI. The URI will be used to create a protected collection when the config is inserted into the database with alert:config-insert. This URI will also be used as a directory for all documents (config, actions, and rules) associated with the config. **/
    makeConfig(uri: String, name: String, description: String, options: Node): Node;

    /** Inserts a config into the database. If this is the first time the config has been inserted, a protected collection will be created for the config's URI. A user must have the alert-admin privilege to call this function. **/
    configInsert(config: Node): void;

    /** Gets the config associated with the specified URI. The user must have the alert-user privilege to call this function. **/
    configGet(uri: String): Node;

    /** Remove an alerting configuration identified by the specified URI. If the config does not exist, an exception will be thrown. Any triggers associated with the alerting configuration will be automatically removed. Any actions and/or rules associated by the config will also be removed as well as the protected collection. The caller must have the alert-admin privilege to call this function. **/
    configDelete(uri: String): void;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetId(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetUri(config: Node, uri: String): Object;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetUri(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetName(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetName(config: Node, name: String): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetDescription(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetDescription(config: Node, description: String): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetTriggerIds(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetTriggerIds(config: Node, ids: String): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetCpfDomainIds(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetCpfDomainNames(config: Node): String;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetCpfDomainNames(config: Node, names: String): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetCpfDomainIds(config: Node, ids: String): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetOptions(config: Node): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetOptions(config: Node, options: Node): Node;

    /** Create triggers that invoke the standard alerting trigger module. The caller must have the alert-admin privilege. The returned trigger IDs must be associated with the config using alert:config-set-trigger-ids and then saving the updated config with alert:config-insert. **/
    createTriggers(uri: String, events: Node): String;

    /** Remove triggers whose IDs are listed in the config. The caller must have the alert-admin privilege. This function writes the updated configuration to the database, so if you need to delete the configuration as well (using admin:delete-config, for example), you should do so in another transaction. **/
    removeTriggers(uri: String): void;

    /** Returns a list of all rules associated with the specified config that match the specified document. You must have the alert-admin privilege to call this function. **/
    findMatchingRules(configUri: String, doc: Node): Node;

    /** Finds the rules that match the specified document and invokes their associated actions. The actions will be invoked as the user who owns each rule in a different transaction. **/
    invokeMatchingActions(configUri: String, doc: Node, options: Node): void;

    /** Finds the rules that match the specified document and spawns their associated actions. The spawned tasks will run as the user that owns the rule. **/
    spawnMatchingActions(configUri: String, doc: Node, options: Node): void;

    /** This function creates the XML representing a rule. If the caller does not have the alert-admin privilege then $user-id must be the ID of the current user from the security database. If $user-id is 0, it will be automatically replaced with the current user's ID. **/
    makeRule(name: String, description: String, userId: String, query: Object, action: String, options: Node): Node;

    /** This function inserts rule into the database associated with the specified alerting configuration. A user must have the alert-user privilege to call this function. **/
    ruleInsert(collectionUri: String, rule: Node): void;

    /** This function removes the XML representing the rule from the collection. A user must have the alert-user privilege to call this function. An exception is thrown if the rule does not exist. A user must have the alert-admin privilege to delete other users' rules. **/
    ruleRemove(collectionUri: String, id: String): void;

    /** This function returns all rules visible to the current user. **/
    getAllRules(collectionUri: String, query: Object): Node;

    /** This function returns all rules associated with the current user. **/
    getMyRules(collectionUri: String, query: Object): Node;

    /** This function creates a query to find rules with any of the specified IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleIdQuery(ids: String): Object;

    /** This function creates a query to find rules with any of the specified names. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleNameQuery(names: String): Object;

    /** This function creates a query to find rules with any of the specified user IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleUserIdQuery(userIds: String): Object;

    /** This function creates a query to find rules with any of the specified actions. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleActionQuery(actions: String): Object;

    /** This function returns the ID of a given rule. **/
    ruleGetId(rule: Node): String;

    /** This function returns the user ID of a given rule. **/
    ruleGetUserId(rule: Node): String;

    /** This function returns the rule with the user ID updated. If the caller does not have the alert-config privilege, an exception will be thrown if the caller attempts to save a rule for a user other than himself. **/
    ruleSetUserId(rule: Node, userId: String): Node;

    /** This function returns the action of a given rule. **/
    ruleGetAction(rule: Node): String;

    /** This function returns the rule with the action updated. **/
    ruleSetAction(rule: Node, action: String): Node;

    /** This function returns the name of a given rule. **/
    ruleGetName(rule: Node): String;

    /** This function returns the rule with the name of the rule updated. **/
    ruleSetName(rule: Node, name: String): Node;

    /** This function returns the description of a given rule. **/
    ruleGetDescription(rule: Node): String;

    /** This function returns the rule with the description of the rule updated. **/
    ruleSetDescription(rule: Node, description: String): Node;

    /** Get the cts:query corresponding to the rule's query expression. **/
    ruleGetQuery(rule: Node): Object;

    /** Set the cts:query corresponding to the rule's query expression. **/
    ruleSetQuery(rule: Node, query: Object): Node;

    /** This function returns the options of a given rule. **/
    ruleGetOptions(rule: Node): Node;

    /** This function returns the rule with the options of the rule updated. **/
    ruleSetOptions(rule: Node, options: Node): Node;

    /** This function returns the name of a given action. **/
    actionGetName(action: Node): String;

    /** This function returns the action with the name of the action updated. **/
    actionSetName(action: Node, name: String): Node;

    /** This function returns the description of a given action. **/
    actionGetDescription(action: Node): String;

    /** This function returns the action with the description of the action updated. **/
    actionSetDescription(action: Node, description: String): Node;

    /** This function returns the module database of a given action. **/
    actionGetModuleDb(action: Node): String;

    /** This function sets the module database of a given action. **/
    actionSetModuleDb(action: Node, moduleDb: String): Node;

    /** This function returns the module root of a given action. **/
    actionGetModuleRoot(action: Node): String;

    /** This function sets the module root of a given action. **/
    actionSetModuleRoot(action: Node, moduleRoot: String): Node;

    /** This function returns the module of a given action. **/
    actionGetModule(action: Node): String;

    /** This function returns the action with the module of the action updated. **/
    actionSetModule(action: Node, module: String): Node;

    /** This function returns the options of a given action. **/
    actionGetOptions(action: Node): Node;

    /** This function returns the action with the options of the action updated. **/
    actionSetOptions(action: Node, options: Node): Node;

    /** This function creates the xml representing an action. When a rule associated with the action matches a document, the action's module will be invoked with the following external variables set: declare variable $alert:config-uri as xs:string external; declare variable $alert:doc as node() external; declare variable $alert:rule as element(alert:rule) external; declare variable $alert:action as element(alert:action) external; All actions must accept these external variables. **/
    makeAction(name: String, description: String, moduleDb: String, moduleRoot: String, module: String, options: Node): Node;

    /** Create a standard logging action named "log". Rules that reference this action must provide an <alert:directory/> element that specifies where the log file should be created. The inserted document will have a random long integer ID and its filename will be ID.xml within the specified directory. Rules that reference this action may also provide options with an <alert:permissions> element containing a series of <sec:permission> elements and/or an <alert:collections> element containing <alert:collection> elements that specify the permissions and collections for the log document. This information is simply passed through to xdmp:document-insert. An example of the rule's options is as follows: <alert:options> <alert:directory>/some/directory</alert:directory> <alert:permissions> <sec:permission> <sec:capability>read</sec:capability> <sec:role-id>129382323</sec:role-id> </sec:permission> </alert:permissions> <alert:collections> <alert:collection>http://acme.com/alert-log</alert:collection> </alert:collections> </alert:options> The log document has the following structure: <alert:log> <alert:log-id>82388423</alert:log-id> <alert:config-uri>http://acme.com/alert/message-board</alert:config-uri> <alert:rule-id>12352</alert:rule-id> <alert:user-id>8271938239</alert:user-id> <alert:document-uri>/the/URI/of/the/matching/document</alert:document-uri> <alert:timestamp>2008-05-31T08:20:00-08:00</alert:timestamp> </alert:log> The log document insertion will be performed as the user who created the rule, and the user must have permission to create documents in any collections they specify. The log-id is a random number chosen by the action. **/
    makeLogAction(): Node;

    /** This function inserts the xml representing the action into the collection. The caller must have the alert-admin privilege to call this function. **/
    actionInsert(collectionUri: String, action: Node): void;

    /** This function removes the named action from the database or throws an exception if the action does not exist. The caller must have the alert-admin privilege to call this function. **/
    actionRemove(collectionUri: String, name: String): void;

    /** This function retrieves all the named actions in the specified config URI. Returns a list of actions. **/
    getActions(collectionUri: String, names: String): Node;


  }
}
