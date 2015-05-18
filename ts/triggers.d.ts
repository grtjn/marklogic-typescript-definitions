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
    createTrigger(triggerName: xs:string, description: xs:string, event: element(), module: element(trgr:module), enabled: xs:boolean, permissions: item(), recursive?: xs:boolean, taskPriority?: xs:string): xs:unsignedLong;

    /** Changes the name of a trigger. **/
    triggerSetName(triggerName: xs:string, newTriggerName: xs:string): void;

    /** Sets the description of the named trigger. **/
    triggerSetDescription(triggerName: xs:string, description: xs:string): void;

    /** Enables the named trigger. **/
    triggerEnable(triggerName: xs:string): void;

    /** Disables the named trigger. **/
    triggerDisable(triggerName: xs:string): void;

    /** Sets or replaces the action module associated with the named trigger. **/
    triggerSetModule(triggerName: xs:string, module: element(trgr:module)): void;

    /** Assigns a triggering event to the named trigger. **/
    triggerSetEvent(triggerName: xs:string, event: element()): void;

    /** Sets the permissions that determine which roles are permitted to modify the named trigger. **/
    triggerSetPermissions(triggerName: xs:string, permissions: item()): void;

    /** Returns the permissions for the named trigger. **/
    triggerGetPermissions(triggerName: xs:string): element(sec:permission);

    /** Adds permissions to the set of permissions on the named trigger. **/
    triggerAddPermissions(triggerName: xs:string, permissions: item()): void;

    /** Removes a set of permissions from the set of permissions on the named trigger. **/
    triggerRemovePermissions(triggerName: xs:string, permissions: item()): void;

    /** Returns the XML representation of a trigger with the given name. **/
    getTrigger(triggerName: xs:string): element(trgr:trigger);

    /** Returns the XML representation of the trigger with the given trigger id. **/
    getTriggerById(triggerId: xs:unsignedLong): element(trgr:trigger);

    /** Returns the XML representation of a trigger module which can be used as the module parameter of trgr:create-trigger. **/
    triggerModule(databaseId: xs:unsignedLong, root: xs:string, path: xs:string): element(trgr:module);

    /** Returns the XML representation of a triggering eventa, usable as the event parameter of trgr:create-trigger. **/
    triggerDataEvent(scope: element(), content: element(), when: element(trgr:when)): element(trgr:data-event);

    /** Returns the XML representation of a database coming online event, usable as the event parameter of trgr:create-trigger. **/
    triggerDatabaseOnlineEvent(userName: xs:string): element(trgr:database-online-event);

    /** Returns the XML representation of a document scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentScope(uri: xs:string): element(trgr:document-scope);

    /** Returns the XML representation of a collection scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    collectionScope(uri: xs:string): element(trgr:collection-scope);

    /** Returns the XML representation of a directory scope, usable as the scope parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    directoryScope(uri: xs:string, depth: xs:string): element(trgr:directory-scope);

    /** Returns the XML representation of a document part of a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    documentContent(updateKind: xs:string): element(trgr:document-content);

    /** Returns the XML representation of an all-properties part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    anyPropertyContent(): element(trgr:any-property-content);

    /** Returns the XML representation of a property part to a triggering event, usable as the content parameter of a trigger event constructor such as trgr:trigger-data-event. **/
    propertyContent(propertyName: xs:QName): element(trgr:property-content);

    /** Returns the XML representation of a pre-commit trigger timing. **/
    preCommit(): element(trgr:when);

    /** Returns the XML representation of a post-commit trigger timing. **/
    postCommit(): element(trgr:when);

    /** Removes the named trigger. **/
    removeTrigger(triggerName: xs:string): void;

    /** Sets the recursive setting of the identified trigger. When the recursive setting is true, the trigger will trigger itself for recursive changes to the same document. **/
    triggerSetRecursive(triggerName: xs:string, recursive: xs:boolean): void;

    /** Sets the task priority setting of the identified trigger. The task priority is only applicable to post-commit triggers. **/
    triggerSetTaskPriority(triggerName: xs:string, taskPriority: xs:string): void;

    /** This function changes the trigger definitions of each trigger definition in the database that has the database ID $old-db and replaces each database ID with $new-db. This is useful after restoring a triggers database to a different cluster that has different database IDs than the one from which it was backed up. **/
    triggersChangeModulesDatabase(oldDb: xs:unsignedLong, newDb: xs:unsignedLong): void;

    /** This function.... **/
    anyCustomPropertyContent(): element(trgr:any-custom-property-content);

    /** This function.... **/
    validateTriggerName(triggerName: xs:string): empty();

    /** This function.... **/
    validateDataEvent(event: element(trgr:data-event)): empty();

    /** This function.... **/
    validateScope(): element());

    /** This function.... **/
    validateContent(): element());

    /** This function.... **/
    validateWhen(): element());

    /** This function.... **/
    validateDatabaseOnlineEvent(databaseOnlineEvent: element(trgr:database-online-event)): empty();

    /** This function.... **/
    validateModule(module: element(trgr:module)): empty();

    /** This function.... **/
    triggersUri(): xs:string;

    /** This function.... **/
    getUniqueTriggerId(): xs:unsignedLong;

    /** This function.... **/
    triggersCollection(): xs:string;

    /** This function.... **/
    triggersNamespace(): xs:string;


  }
}
