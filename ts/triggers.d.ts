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

declare module TriggersModule {

  interface trgr {

    /** Creates a new trigger in the context database. Returns the trigger ID of the created trigger. **/
    createTrigger(triggerName: String, description: String, event: Node, module: Module), enabled: Boolean, permissions: String, recursive?: Boolean, taskPriority?: String): String;

    /** Changes the name of a trigger. **/
    triggerSetName(triggerName: String, newTriggerName: String): void;

    /** Sets the description of the named trigger. **/
    triggerSetDescription(triggerName: String, description: String): void;

    /** Enables the named trigger. **/
    triggerEnable(triggerName: String): void;

    /** Disables the named trigger. **/
    triggerDisable(triggerName: String): void;

    /** Sets or replaces the action module associated with the named trigger. **/
    triggerSetModule(triggerName: String, module: Module)): void;

    /** Assigns a triggering event to the named trigger. **/
    triggerSetEvent(triggerName: String, event: Node): void;

    /** Sets the permissions that determine which roles are permitted to modify the named trigger. **/
    triggerSetPermissions(triggerName: String, permissions: String): void;

    /** Returns the permissions for the named trigger. **/
    triggerGetPermissions(triggerName: String): Permission);

    /** Adds permissions to the set of permissions on the named trigger. **/
    triggerAddPermissions(triggerName: String, permissions: String): void;

    /** Removes a set of permissions from the set of permissions on the named trigger. **/
    triggerRemovePermissions(triggerName: String, permissions: String): void;

    /** Returns the XML representation of a trigger with the given name. **/
    getTrigger(triggerName: String): Trigger);

    /** Returns the XML representation of the trigger with the given trigger id. **/
    getTriggerById(triggerId: String): Trigger);

    /** Returns the XML representation of a trigger module which can be used as the module parameter of trgr:create-trigger. **/
    triggerModule(databaseId: String, root: String, path: String): Module);

    /** Returns the XML representation of a triggering eventa, usable as the event parameter of trgr:create-trigger. **/
    triggerDataEvent(scope: Node, content: Node, when: When)): Data-event);

    /** Returns the XML representation of a database coming online event, usable as the event parameter of trgr:create-trigger. **/
    triggerDatabaseOnlineEvent(userName: String): Database-online-event);

    /** Returns the XML representation of a document scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentScope(uri: String): Document-scope);

    /** Returns the XML representation of a collection scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    collectionScope(uri: String): Collection-scope);

    /** Returns the XML representation of a directory scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    directoryScope(uri: String, depth: String): Directory-scope);

    /** Returns the XML representation of a document part of a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentContent(updateKind: String): Document-content);

    /** Returns the XML representation of an all-properties part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    anyPropertyContent(): Any-property-content);

    /** Returns the XML representation of a property part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    propertyContent(propertyName: QName): Property-content);

    /** Returns the XML representation of a pre-commit trigger timing. **/
    preCommit(): When);

    /** Returns the XML representation of a post-commit trigger timing. **/
    postCommit(): When);

    /** Removes the named trigger. **/
    removeTrigger(triggerName: String): void;

    /** Sets the recursive setting of the identified trigger. When the recursive setting is true, the trigger will trigger itself for recursive changes to the same document. **/
    triggerSetRecursive(triggerName: String, recursive: Boolean): void;

    /** Sets the task priority setting of the identified trigger. The task priority is only applicable to post-commit triggers. **/
    triggerSetTaskPriority(triggerName: String, taskPriority: String): void;

    /** This function changes the trigger definitions of each trigger definition in the database that has the database ID $old-db and replaces each database ID with $new-db. This is useful after restoring a triggers database to a different cluster that has different database IDs than the one from which it was backed up. **/
    triggersChangeModulesDatabase(oldDb: String, newDb: String): void;

    /** This function.... **/
    anyCustomPropertyContent(): Any-custom-property-content);

    /** This function.... **/
    validateTriggerName(triggerName: String): Empty();

    /** This function.... **/
    validateDataEvent(event: Data-event)): Empty();

    /** This function.... **/
    validateScope(): Element());

    /** This function.... **/
    validateContent(): Element());

    /** This function.... **/
    validateWhen(): Element());

    /** This function.... **/
    validateDatabaseOnlineEvent(databaseOnlineEvent: Database-online-event)): Empty();

    /** This function.... **/
    validateModule(module: Module)): Empty();

    /** This function.... **/
    triggersUri(): String;

    /** This function.... **/
    getUniqueTriggerId(): String;

    /** This function.... **/
    triggersCollection(): String;

    /** This function.... **/
    triggersNamespace(): String;


  }
}
