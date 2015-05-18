// Type definitions for TriggersModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/triggers.xml

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
    createTrigger(triggerName: string, description: string, event: element(), module: module), enabled: boolean, permissions: item(), recursive?: boolean, taskPriority?: string): number;

    /** Changes the name of a trigger. **/
    triggerSetName(triggerName: string, newTriggerName: string): void;

    /** Sets the description of the named trigger. **/
    triggerSetDescription(triggerName: string, description: string): void;

    /** Enables the named trigger. **/
    triggerEnable(triggerName: string): void;

    /** Disables the named trigger. **/
    triggerDisable(triggerName: string): void;

    /** Sets or replaces the action module associated with the named trigger. **/
    triggerSetModule(triggerName: string, module: module)): void;

    /** Assigns a triggering event to the named trigger. **/
    triggerSetEvent(triggerName: string, event: element()): void;

    /** Sets the permissions that determine which roles are permitted to modify the named trigger. **/
    triggerSetPermissions(triggerName: string, permissions: item()): void;

    /** Returns the permissions for the named trigger. **/
    triggerGetPermissions(triggerName: string): permission);

    /** Adds permissions to the set of permissions on the named trigger. **/
    triggerAddPermissions(triggerName: string, permissions: item()): void;

    /** Removes a set of permissions from the set of permissions on the named trigger. **/
    triggerRemovePermissions(triggerName: string, permissions: item()): void;

    /** Returns the XML representation of a trigger with the given name. **/
    getTrigger(triggerName: string): trigger);

    /** Returns the XML representation of the trigger with the given trigger id. **/
    getTriggerById(triggerId: number): trigger);

    /** Returns the XML representation of a trigger module which can be used as the module parameter of trgr:create-trigger. **/
    triggerModule(databaseId: number, root: string, path: string): module);

    /** Returns the XML representation of a triggering eventa, usable as the event parameter of trgr:create-trigger. **/
    triggerDataEvent(scope: element(), content: element(), when: when)): data-event);

    /** Returns the XML representation of a database coming online event, usable as the event parameter of trgr:create-trigger. **/
    triggerDatabaseOnlineEvent(userName: string): database-online-event);

    /** Returns the XML representation of a document scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentScope(uri: string): document-scope);

    /** Returns the XML representation of a collection scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    collectionScope(uri: string): collection-scope);

    /** Returns the XML representation of a directory scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    directoryScope(uri: string, depth: string): directory-scope);

    /** Returns the XML representation of a document part of a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentContent(updateKind: string): document-content);

    /** Returns the XML representation of an all-properties part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    anyPropertyContent(): any-property-content);

    /** Returns the XML representation of a property part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    propertyContent(propertyName: QName): property-content);

    /** Returns the XML representation of a pre-commit trigger timing. **/
    preCommit(): when);

    /** Returns the XML representation of a post-commit trigger timing. **/
    postCommit(): when);

    /** Removes the named trigger. **/
    removeTrigger(triggerName: string): void;

    /** Sets the recursive setting of the identified trigger. When the recursive setting is true, the trigger will trigger itself for recursive changes to the same document. **/
    triggerSetRecursive(triggerName: string, recursive: boolean): void;

    /** Sets the task priority setting of the identified trigger. The task priority is only applicable to post-commit triggers. **/
    triggerSetTaskPriority(triggerName: string, taskPriority: string): void;

    /** This function changes the trigger definitions of each trigger definition in the database that has the database ID $old-db and replaces each database ID with $new-db. This is useful after restoring a triggers database to a different cluster that has different database IDs than the one from which it was backed up. **/
    triggersChangeModulesDatabase(oldDb: number, newDb: number): void;

    /** This function.... **/
    anyCustomPropertyContent(): any-custom-property-content);

    /** This function.... **/
    validateTriggerName(triggerName: string): empty();

    /** This function.... **/
    validateDataEvent(event: data-event)): empty();

    /** This function.... **/
    validateScope(): element());

    /** This function.... **/
    validateContent(): element());

    /** This function.... **/
    validateWhen(): element());

    /** This function.... **/
    validateDatabaseOnlineEvent(databaseOnlineEvent: database-online-event)): empty();

    /** This function.... **/
    validateModule(module: module)): empty();

    /** This function.... **/
    triggersUri(): string;

    /** This function.... **/
    getUniqueTriggerId(): number;

    /** This function.... **/
    triggersCollection(): string;

    /** This function.... **/
    triggersNamespace(): string;


  }
}
