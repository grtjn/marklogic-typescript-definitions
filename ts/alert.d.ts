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

declare module alert {

    /** Create an alerting configuration associated with a particular URI. The URI will be used to create a protected collection when the config is inserted into the database with alert:config-insert. This URI will also be used as a directory for all documents (config, actions, and rules) associated with the config. **/
  function makeConfig(uri: string, name: string, description: string, options: Node): Node;

    /** Inserts a config into the database. If this is the first time the config has been inserted, a protected collection will be created for the config's URI. A user must have the alert-admin privilege to call this function. **/
  function configInsert(config: Node): void;

    /** Gets the config associated with the specified URI. The user must have the alert-user privilege to call this function. **/
  function configGet(uri: string): Node;

    /** Remove an alerting configuration identified by the specified URI. If the config does not exist, an exception will be thrown. Any triggers associated with the alerting configuration will be automatically removed. Any actions and/or rules associated by the config will also be removed as well as the protected collection. The caller must have the alert-admin privilege to call this function. **/
  function configDelete(uri: string): void;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetId(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetUri(config: Node, uri: string): Object;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetUri(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetName(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetName(config: Node, name: string): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetDescription(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetDescription(config: Node, description: string): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetTriggerIds(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetTriggerIds(config: Node, ids: string): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetCpfDomainIds(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetCpfDomainNames(config: Node): string;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetCpfDomainNames(config: Node, names: string): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetCpfDomainIds(config: Node, ids: string): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configGetOptions(config: Node): Node;

    /** This function provides convenient access to the specified sub-element within an alerting config. **/
  function configSetOptions(config: Node, options: Node): Node;

    /** Create triggers that invoke the standard alerting trigger module. The caller must have the alert-admin privilege. The returned trigger IDs must be associated with the config using alert:config-set-trigger-ids and then saving the updated config with alert:config-insert. **/
  function createTriggers(uri: string, events: Node): string;

    /** Remove triggers whose IDs are listed in the config. The caller must have the alert-admin privilege. This function writes the updated configuration to the database, so if you need to delete the configuration as well (using admin:delete-config, for example), you should do so in another transaction. **/
  function removeTriggers(uri: string): void;

    /** Returns a list of all rules associated with the specified config that match the specified document. You must have the alert-admin privilege to call this function. **/
  function findMatchingRules(configUri: string, doc: Node): Node;

    /** Finds the rules that match the specified document and invokes their associated actions. The actions will be invoked as the user who owns each rule in a different transaction. **/
  function invokeMatchingActions(configUri: string, doc: Node, options: Node): void;

    /** Finds the rules that match the specified document and spawns their associated actions. The spawned tasks will run as the user that owns the rule. **/
  function spawnMatchingActions(configUri: string, doc: Node, options: Node): void;

    /** This function creates the XML representing a rule. If the caller does not have the alert-admin privilege then $user-id must be the ID of the current user from the security database. If $user-id is 0, it will be automatically replaced with the current user's ID. **/
  function makeRule(name: string, description: string, userId: string, query: Object, action: string, options: Node): Node;

    /** This function inserts rule into the database associated with the specified alerting configuration. A user must have the alert-user privilege to call this function. **/
  function ruleInsert(collectionUri: string, rule: Node): void;

    /** This function removes the XML representing the rule from the collection. A user must have the alert-user privilege to call this function. An exception is thrown if the rule does not exist. A user must have the alert-admin privilege to delete other users' rules. **/
  function ruleRemove(collectionUri: string, id: string): void;

    /** This function returns all rules visible to the current user. **/
  function getAllRules(collectionUri: string, query: Object): Node;

    /** This function returns all rules associated with the current user. **/
  function getMyRules(collectionUri: string, query: Object): Node;

    /** This function creates a query to find rules with any of the specified IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
  function ruleIdQuery(ids: string): Object;

    /** This function creates a query to find rules with any of the specified names. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
  function ruleNameQuery(names: string): Object;

    /** This function creates a query to find rules with any of the specified user IDs. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
  function ruleUserIdQuery(userIds: string): Object;

    /** This function creates a query to find rules with any of the specified actions. Returns a query to be passed to alert:get-my-rules or alert:get-all-rules. **/
  function ruleActionQuery(actions: string): Object;

    /** This function returns the ID of a given rule. **/
  function ruleGetId(rule: Node): string;

    /** This function returns the user ID of a given rule. **/
  function ruleGetUserId(rule: Node): string;

    /** This function returns the rule with the user ID updated. If the caller does not have the alert-config privilege, an exception will be thrown if the caller attempts to save a rule for a user other than himself. **/
  function ruleSetUserId(rule: Node, userId: string): Node;

    /** This function returns the action of a given rule. **/
  function ruleGetAction(rule: Node): string;

    /** This function returns the rule with the action updated. **/
  function ruleSetAction(rule: Node, action: string): Node;

    /** This function returns the name of a given rule. **/
  function ruleGetName(rule: Node): string;

    /** This function returns the rule with the name of the rule updated. **/
  function ruleSetName(rule: Node, name: string): Node;

    /** This function returns the description of a given rule. **/
  function ruleGetDescription(rule: Node): string;

    /** This function returns the rule with the description of the rule updated. **/
  function ruleSetDescription(rule: Node, description: string): Node;

    /** Get the cts:query corresponding to the rule's query expression. **/
  function ruleGetQuery(rule: Node): Object;

    /** Set the cts:query corresponding to the rule's query expression. **/
  function ruleSetQuery(rule: Node, query: Object): Node;

    /** This function returns the options of a given rule. **/
  function ruleGetOptions(rule: Node): Node;

    /** This function returns the rule with the options of the rule updated. **/
  function ruleSetOptions(rule: Node, options: Node): Node;

    /** This function returns the name of a given action. **/
  function actionGetName(action: Node): string;

    /** This function returns the action with the name of the action updated. **/
  function actionSetName(action: Node, name: string): Node;

    /** This function returns the description of a given action. **/
  function actionGetDescription(action: Node): string;

    /** This function returns the action with the description of the action updated. **/
  function actionSetDescription(action: Node, description: string): Node;

    /** This function returns the module database of a given action. **/
  function actionGetModuleDb(action: Node): string;

    /** This function sets the module database of a given action. **/
  function actionSetModuleDb(action: Node, moduleDb: string): Node;

    /** This function returns the module root of a given action. **/
  function actionGetModuleRoot(action: Node): string;

    /** This function sets the module root of a given action. **/
  function actionSetModuleRoot(action: Node, moduleRoot: string): Node;

    /** This function returns the module of a given action. **/
  function actionGetModule(action: Node): string;

    /** This function returns the action with the module of the action updated. **/
  function actionSetModule(action: Node, module: string): Node;

    /** This function returns the options of a given action. **/
  function actionGetOptions(action: Node): Node;

    /** This function returns the action with the options of the action updated. **/
  function actionSetOptions(action: Node, options: Node): Node;

    /** This function creates the xml representing an action. When a rule associated with the action matches a document, the action's module will be invoked with the following external variables set: declare variable $alert:config-uri as xs:string external; declare variable $alert:doc as node() external; declare variable $alert:rule as element(alert:rule) external; declare variable $alert:action as element(alert:action) external; All actions must accept these external variables. **/
  function makeAction(name: string, description: string, moduleDb: string, moduleRoot: string, module: string, options: Node): Node;

    /** Create a standard logging action named "log". Rules that reference this action must provide an <alert:directory/> element that specifies where the log file should be created. The inserted document will have a random long integer ID and its filename will be ID.xml within the specified directory. Rules that reference this action may also provide options with an <alert:permissions> element containing a series of <sec:permission> elements and/or an <alert:collections> element containing <alert:collection> elements that specify the permissions and collections for the log document. This information is simply passed through to xdmp:document-insert. An example of the rule's options is as follows: <alert:options> <alert:directory>/some/directory</alert:directory> <alert:permissions> <sec:permission> <sec:capability>read</sec:capability> <sec:role-id>129382323</sec:role-id> </sec:permission> </alert:permissions> <alert:collections> <alert:collection>http://acme.com/alert-log</alert:collection> </alert:collections> </alert:options> The log document has the following structure: <alert:log> <alert:log-id>82388423</alert:log-id> <alert:config-uri>http://acme.com/alert/message-board</alert:config-uri> <alert:rule-id>12352</alert:rule-id> <alert:user-id>8271938239</alert:user-id> <alert:document-uri>/the/URI/of/the/matching/document</alert:document-uri> <alert:timestamp>2008-05-31T08:20:00-08:00</alert:timestamp> </alert:log> The log document insertion will be performed as the user who created the rule, and the user must have permission to create documents in any collections they specify. The log-id is a random number chosen by the action. **/
  function makeLogAction(): Node;

    /** This function inserts the xml representing the action into the collection. The caller must have the alert-admin privilege to call this function. **/
  function actionInsert(collectionUri: string, action: Node): void;

    /** This function removes the named action from the database or throws an exception if the action does not exist. The caller must have the alert-admin privilege to call this function. **/
  function actionRemove(collectionUri: string, name: string): void;

    /** This function retrieves all the named actions in the specified config URI. Returns a list of actions. **/
  function getActions(collectionUri: string, names: string): Node;

}
