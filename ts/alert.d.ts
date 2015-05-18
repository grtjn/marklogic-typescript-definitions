// Type definitions for AlertModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/alert.xml

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
    makeConfig(uri: string, name: string, description: string, options: options)): config);

    /** Inserts a config into the database. If this is the first time the config has been inserted, a protected collection will be created for the config's URI. A user must have the alert-admin privilege to call this function. **/
    configInsert(config: config)): void;

    /** Gets the config associated with the specified URI. The user must have the alert-user privilege to call this function. **/
    configGet(uri: string): config);

    /** Remove an alerting configuration identified by the specified URI. If the config does not exist, an exception will be thrown. Any triggers associated with the alerting configuration will be automatically removed. Any actions and/or rules associated by the config will also be removed as well as the protected collection. The caller must have the alert-admin privilege to call this function. **/
    configDelete(uri: string): void;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetId(config: config)): number;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetUri(config: config), uri: string): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetUri(config: config)): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetName(config: config)): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetName(config: config), name: string): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetDescription(config: config)): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetDescription(config: config), description: string): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetTriggerIds(config: config)): number;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetTriggerIds(config: config), ids: number): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetCpfDomainIds(config: config)): number;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetCpfDomainNames(config: config)): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetCpfDomainNames(config: config), names: string): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetCpfDomainIds(config: config), ids: number): config);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configGetOptions(config: config)): options);

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
    configSetOptions(config: config), options: options)): config);

    /** Create triggers that invoke the standard alerting trigger module. The caller must have the alert-admin privilege. The returned trigger IDs must be associated with the config using alert:config-set-trigger-ids and then saving the updated config with alert:config-insert. **/
    createTriggers(uri: string, events: data-event)): number;

    /** Remove triggers whose IDs are listed in the config. The caller must have the alert-admin privilege. This function writes the updated configuration to the database, so if you need to delete the configuration as well (using admin:delete-config, for example), you should do so in another transaction. **/
    removeTriggers(uri: string): void;

    /** Returns a list of all rules associated with the specified config that match the specified document. You must have the alert-admin privilege to call this function. **/
    findMatchingRules(configUri: string, doc: node()): rule);

    /** Finds the rules that match the specified document and invokes their associated actions. The actions will be invoked as the user who owns each rule in a different transaction. **/
    invokeMatchingActions(configUri: string, doc: node(), options: node()): void;

    /** Finds the rules that match the specified document and spawns their associated actions. The spawned tasks will run as the user that owns the rule. **/
    spawnMatchingActions(configUri: string, doc: node(), options: node()): void;

    /** This function creates the XML representing a rule. If the caller does not have the alert-admin privilege then $user-id must be the ID of the current user from the security database. If $user-id is 0, it will be automatically replaced with the current user's ID. **/
    makeRule(name: string, description: string, userId: number, query: query, action: string, options: options)): rule);

    /** This function inserts rule into the database associated with the specified alerting configuration. A user must have the alert-user privilege to call this function. **/
    ruleInsert(collectionUri: string, rule: rule)): void;

    /** This function removes the XML representing the rule from the collection. A user must have the alert-user privilege to call this function. An exception is thrown if the rule does not exist. A user must have the alert-admin privilege to delete other users' rules. **/
    ruleRemove(collectionUri: string, id: number): void;

    /** This function returns all rules visible to the current user. **/
    getAllRules(collectionUri: string, query: query): rule);

    /** This function returns all rules associated with the current user. **/
    getMyRules(collectionUri: string, query: query): rule);

    /** This function creates a query to find rules with any of the specified IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleIdQuery(ids: number): query;

    /** This function creates a query to find rules with any of the specified names. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleNameQuery(names: string): query;

    /** This function creates a query to find rules with any of the specified user IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleUserIdQuery(userIds: number): query;

    /** This function creates a query to find rules with any of the specified actions. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
    ruleActionQuery(actions: string): query;

    /** This function returns the ID of a given rule. **/
    ruleGetId(rule: rule)): number;

    /** This function returns the user ID of a given rule. **/
    ruleGetUserId(rule: rule)): number;

    /** This function returns the rule with the user ID updated. If the caller does not have the alert-config privilege, an exception will be thrown if the caller attempts to save a rule for a user other than himself. **/
    ruleSetUserId(rule: rule), userId: number): rule);

    /** This function returns the action of a given rule. **/
    ruleGetAction(rule: rule)): string;

    /** This function returns the rule with the action updated. **/
    ruleSetAction(rule: rule), action: string): rule);

    /** This function returns the name of a given rule. **/
    ruleGetName(rule: rule)): string;

    /** This function returns the rule with the name of the rule updated. **/
    ruleSetName(rule: rule), name: string): rule);

    /** This function returns the description of a given rule. **/
    ruleGetDescription(rule: rule)): string;

    /** This function returns the rule with the description of the rule updated. **/
    ruleSetDescription(rule: rule), description: string): rule);

    /** Get the cts:query corresponding to the rule's query expression. **/
    ruleGetQuery(rule: rule)): query;

    /** Set the cts:query corresponding to the rule's query expression. **/
    ruleSetQuery(rule: rule), query: query): rule);

    /** This function returns the options of a given rule. **/
    ruleGetOptions(rule: rule)): options);

    /** This function returns the rule with the options of the rule updated. **/
    ruleSetOptions(rule: rule), options: options)): rule);

    /** This function returns the name of a given action. **/
    actionGetName(action: action)): string;

    /** This function returns the action with the name of the action updated. **/
    actionSetName(action: action), name: string): action);

    /** This function returns the description of a given action. **/
    actionGetDescription(action: action)): string;

    /** This function returns the action with the description of the action updated. **/
    actionSetDescription(action: action), description: string): action);

    /** This function returns the module database of a given action. **/
    actionGetModuleDb(action: action)): number;

    /** This function sets the module database of a given action. **/
    actionSetModuleDb(action: action), moduleDb: number): action);

    /** This function returns the module root of a given action. **/
    actionGetModuleRoot(action: action)): string;

    /** This function sets the module root of a given action. **/
    actionSetModuleRoot(action: action), moduleRoot: string): action);

    /** This function returns the module of a given action. **/
    actionGetModule(action: action)): string;

    /** This function returns the action with the module of the action updated. **/
    actionSetModule(action: action), module: string): action);

    /** This function returns the options of a given action. **/
    actionGetOptions(action: action)): options);

    /** This function returns the action with the options of the action updated. **/
    actionSetOptions(action: action), options: options)): action);

    /** This function creates the xml representing an action. When a rule associated with the action matches a document, the action's module will be invoked with the following external variables set: declare variable $alert:config-uri as xs:string external; declare variable $alert:doc as node() external; declare variable $alert:rule as element(alert:rule) external; declare variable $alert:action as element(alert:action) external; All actions must accept these external variables. **/
    makeAction(name: string, description: string, moduleDb: number, moduleRoot: string, module: string, options: options)): action);

    /** Create a standard logging action named "log". Rules that reference this action must provide an <alert:directory/> element that specifies where the log file should be created. The inserted document will have a random long integer ID and its filename will be ID.xml within the specified directory. Rules that reference this action may also provide options with an <alert:permissions> element containing a series of <sec:permission> elements and/or an <alert:collections> element containing <alert:collection> elements that specify the permissions and collections for the log document. This information is simply passed through to xdmp:document-insert. An example of the rule's options is as follows: <alert:options> <alert:directory>/some/directory</alert:directory> <alert:permissions> <sec:permission> <sec:capability>read</sec:capability> <sec:role-id>129382323</sec:role-id> </sec:permission> </alert:permissions> <alert:collections> <alert:collection>http://acme.com/alert-log</alert:collection> </alert:collections> </alert:options> The log document has the following structure: <alert:log> <alert:log-id>82388423</alert:log-id> <alert:config-uri>http://acme.com/alert/message-board</alert:config-uri> <alert:rule-id>12352</alert:rule-id> <alert:user-id>8271938239</alert:user-id> <alert:document-uri>/the/URI/of/the/matching/document</alert:document-uri> <alert:timestamp>2008-05-31T08:20:00-08:00</alert:timestamp> </alert:log> The log document insertion will be performed as the user who created the rule, and the user must have permission to create documents in any collections they specify. The log-id is a random number chosen by the action. **/
    makeLogAction(): action);

    /** This function inserts the xml representing the action into the collection. The caller must have the alert-admin privilege to call this function. **/
    actionInsert(collectionUri: string, action: action)): void;

    /** This function removes the named action from the database or throws an exception if the action does not exist. The caller must have the alert-admin privilege to call this function. **/
    actionRemove(collectionUri: string, name: string): void;

    /** This function retrieves all the named actions in the specified config URI. Returns a list of actions. **/
    getActions(collectionUri: string, names: string): action);


  }
}
