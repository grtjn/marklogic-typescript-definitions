// Type definitions for TriggersModule
// Definitions: 

/**
    The triggers function module is installed as the following file:
    install_dir/Modules/MarkLogic/triggers.xqy
    where install_dir is the directory in which 
    MarkLogic Server is installed.
    To use the triggers.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:
    import module namespace trgr="http://marklogic.com/xdmp/triggers" 
		    at "/MarkLogic/triggers.xqy";
    The triggers module is used for manually creating and managing triggers.
    If you use the Content Processing Framework, it automatically creates 
    and manages the triggers.
    The function to create a new trigger,  
    trgr:create-trigger, uses 
    the other trigger functions to construct the trigger XML document and insert
    it into the triggers database.  The trigger functions should all be run 
    against the triggers database of the database in which the content is 
    stored. 
    For more information on using triggers, see "Using Triggers to 
    Spawn Actions" in the Application Developer's Guide.
  **/

interface trgrFunctions {

    /** Creates a new trigger in the context database. Returns the trigger ID of the created trigger. **/
  createTrigger(triggerName: string, description: string, event: Node, module: Node, enabled: Object, permissions: string, recursive?: Object, taskPriority?: string): string;

    /** Changes the name of a trigger. **/
  triggerSetName(triggerName: string, newTriggerName: string): void;

    /** Sets the description of the named trigger. **/
  triggerSetDescription(triggerName: string, description: string): void;

    /** Enables the named trigger. **/
  triggerEnable(triggerName: string): void;

    /** Disables the named trigger. **/
  triggerDisable(triggerName: string): void;

    /** Sets or replaces the action module associated with the named trigger. **/
  triggerSetModule(triggerName: string, module: Node): void;

    /** Assigns a triggering event to the named trigger. **/
  triggerSetEvent(triggerName: string, event: Node): void;

    /** Sets the permissions that determine which roles are permitted to modify the named trigger. **/
  triggerSetPermissions(triggerName: string, permissions: string): void;

    /** Returns the permissions for the named trigger. **/
  triggerGetPermissions(triggerName: string): Node;

    /** Adds permissions to the set of permissions on the named trigger. **/
  triggerAddPermissions(triggerName: string, permissions: string): void;

    /** Removes a set of permissions from the set of permissions on the named trigger. **/
  triggerRemovePermissions(triggerName: string, permissions: string): void;

    /** Returns the XML representation of a trigger with the given name. **/
  getTrigger(triggerName: string): Node;

    /** Returns the XML representation of the trigger with the given trigger id. **/
  getTriggerById(triggerId: string): Node;

    /** Returns the XML representation of a trigger module which can be used as the module parameter of trgr:create-trigger. **/
  triggerModule(databaseId: string, root: string, path: string): Node;

    /** Returns the XML representation of a triggering eventa, usable as the event parameter of trgr:create-trigger. **/
  triggerDataEvent(scope: Node, content: Node, when: Node): Node;

    /** Returns the XML representation of a database coming online event, usable as the event parameter of trgr:create-trigger. **/
  triggerDatabaseOnlineEvent(userName: string): Node;

    /** Returns the XML representation of a document scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  documentScope(uri: string): Node;

    /** Returns the XML representation of a collection scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  collectionScope(uri: string): Node;

    /** Returns the XML representation of a directory scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  directoryScope(uri: string, depth: string): Node;

    /** Returns the XML representation of a document part of a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  documentContent(updateKind: string): Node;

    /** Returns the XML representation of an all-properties part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  anyPropertyContent(): Node;

    /** Returns the XML representation of a property part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
  propertyContent(propertyName: Object): Node;

    /** Returns the XML representation of a pre-commit trigger timing. **/
  preCommit(): Node;

    /** Returns the XML representation of a post-commit trigger timing. **/
  postCommit(): Node;

    /** Removes the named trigger. **/
  removeTrigger(triggerName: string): void;

    /** Sets the recursive setting of the identified trigger. When the recursive setting is true, the trigger will trigger itself for recursive changes to the same document. **/
  triggerSetRecursive(triggerName: string, recursive: Object): void;

    /** Sets the task priority setting of the identified trigger. The task priority is only applicable to post-commit triggers. **/
  triggerSetTaskPriority(triggerName: string, taskPriority: string): void;

    /** This function changes the trigger definitions of each trigger definition in the database that has the database ID $old-db and replaces each database ID with $new-db. This is useful after restoring a triggers database to a different cluster that has different database IDs than the one from which it was backed up. **/
  triggersChangeModulesDatabase(oldDb: string, newDb: string): void;

    /** This function.... **/
  anyCustomPropertyContent(): Node;

    /** This function.... **/
  validateTriggerName(triggerName: string): Object;

    /** This function.... **/
  validateDataEvent(event: Node): Object;

    /** This function.... **/
  validateScope(): Object;

    /** This function.... **/
  validateContent(): Object;

    /** This function.... **/
  validateWhen(): Object;

    /** This function.... **/
  validateDatabaseOnlineEvent(databaseOnlineEvent: Node): Object;

    /** This function.... **/
  validateModule(module: Node): Object;

    /** This function.... **/
  triggersUri(): string;

    /** This function.... **/
  getUniqueTriggerId(): string;

    /** This function.... **/
  triggersCollection(): string;

    /** This function.... **/
  triggersNamespace(): string;

}
declare var trgr:trgrFunctions
