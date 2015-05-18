// Type definitions for AdminModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/admin.xml

/**
The Admin module is an XQuery library module that allows 
you to script administrative tasks that you otherwise would 
need the Admin Interface to perform.  Most functions in this library 
perform adminstrative tasks and therefore require the user who runs the 
XQuery program to have the Admin role.
Many of these functions provide new configuration information.  In most
cases, you must save the configuration (with 
admin:save-configuration, 
for example) in the same statement that you use the functions in order for 
them to take effect.
To use the Admin module as part of your own XQuery module, 
include the following line in your XQuery prolog: 
import module namespace admin = "http://marklogic.com/xdmp/admin" 
		  at "/MarkLogic/admin.xqy" ;

The library namespace prefix admin is not 
	predefined in the server.
	**/

declare module AdminModule {

  interface admin {

    /** This function returns all the database IDs from the configuration. For an example, see databases.xqy in the Scripting Administrative Tasks Guide. **/
    getDatabaseIds(config: element(configuration)): number;

    /** This function returns all the host IDs from the configuration. **/
    getHostIds(config: element(configuration)): number;

    /** This function returns all the group IDs from the configuration. **/
    getGroupIds(config: element(configuration)): number;

    /** This function returns all the forest IDs from the configuration. **/
    getForestIds(config: element(configuration)): number;

    /** This function returns all the appserver IDs from the configuration. **/
    getAppserverIds(config: element(configuration)): number;

    /** Loads the admin configuration into memory for use by other functions in the Admin module. **/
    getConfiguration(): element(configuration);

    /** This function saves a configuration specification to the cluster configuration files, without restarting MarkLogic Server. If you use this function to save any changes that require a server restart ("cold" changes such as App Server port assignment changes), then the changes will not take effect until the next time MarkLogic Server restarts (although they will be saved in the configuration). If you want MarkLogic Server to automatically restart when needed, use admin:save-configuration instead. **/
    saveConfigurationWithoutRestart(config: element(configuration)): number;

    /** This function saves a configuration specification to the cluster configuration files. It restarts MarkLogic Server for "cold" administrative tasks only (for example, for App Server port assignment changes). If you do not want those "cold" administrative tasks to automatically restart MarkLogic Server, use admin:save-configuration-without-restart instead. **/
    saveConfiguration(config: element(configuration)): void;

    /** This function restarts MarkLogic Server for the specified hosts. **/
    restartHosts(hosts: number): void;

    /** This function deletes the configuration from the specified database(s). It does not delete the configuration or data for any forests attached to the deleted database(s). **/
    databaseDelete(config: element(configuration), databaseIds: number): element(configuration);

    /** This function creates a new database specification. **/
    databaseCreate(config: element(configuration), databaseName: string, securityDb: number, schemaDb: number): element(configuration);

    /** This function creates a new database specification with the same settings as the database with the specified ID. The new database configuration will have the specified name. **/
    databaseCopy(config: element(configuration), databaseId: number, databaseName: string): element(configuration);

    /** This function detaches the specified forest from the specified database. **/
    databaseDetachForest(config: element(configuration), databaseId: number, forestId: number): element(configuration);

    /** This function attaches the specified forest to the specified database. **/
    databaseAttachForest(config: element(configuration), databaseId: number, forestId: number): element(configuration);

    /** This function returns the scheduled backups for the specified database from the configuration. **/
    databaseGetBackups(config: element(configuration), databaseId: number): database-backup);

    /** This function constructs a weekly scheduled backup specification. **/
    databaseWeeklyBackup(backupDir: string, backupPeriod: number, days: string, startTime: time, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a weekly scheduled incremental backup specification. **/
    databaseWeeklyIncrementalBackup(backupDir: string, backupPeriod: number, days: string, startTime: time, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a monthly scheduled backup specification. **/
    databaseMonthlyBackup(backupDir: string, backupPeriod: number, backupMonthDay: number, startTime: time, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a scheduled monthly incremental backup specification. **/
    databaseMonthlyIncrementalBackup(backupDir: string, backupPeriod: number, backupMonthDay: number, startTime: time, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a one-time backup specification. **/
    databaseOneTimeBackup(backupDir: string, start: dateTime, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a one-time incremental backup specification. **/
    databaseOneTimeIncrementalBackup(backupDir: string, start: dateTime, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function adds scheduled backup specifications for a database to a configuration. **/
    databaseAddBackup(config: element(configuration), databaseId: number, backups: database-backup)): element(configuration);

    /** This function deletes scheduled backup specifications for a database from a configuration. **/
    databaseDeleteBackup(config: element(configuration), databaseId: number, backups: database-backup)): element(configuration);

    /** This function returns the merge blackouts specification for the specified database from the configuration. **/
    databaseGetMergeBlackouts(config: element(configuration), databaseId: number): merge-blackout);

    /** This function constructs a merge-blackout specification. **/
    databaseRecurringMergeBlackout(limit: number, mergePriority: string, days: string, startTime: time, endTime: time, duration: duration): merge-blackout);

    /** This function constructs a one-time merge-blackout specification. **/
    databaseOneTimeMergeBlackout(limit: number, mergePriority: string, start: dateTime, end: dateTime, duration: duration): merge-blackout);

    /** This function adds a merge blackout specification for a database to a configuration. **/
    databaseAddMergeBlackout(config: element(configuration), databaseId: number, mergeBlackouts: merge-blackout)): element(configuration);

    /** This function deletes a merge blackout specification for a database from a configuration. **/
    databaseDeleteMergeBlackout(config: element(configuration), databaseId: number, blackouts: merge-blackout)): element(configuration);

    /** This function returns the fragment roots specification for the specified database from the configuration. **/
    databaseGetFragmentRoots(config: element(configuration), databaseId: number): fragment-root);

    /** This function constructs a fragment root specification. **/
    databaseFragmentRoot(namespace: string, localname: string): fragment-root);

    /** This function adds the specified fragment root to the specified database in the configuration. **/
    databaseAddFragmentRoot(config: element(configuration), databaseId: number, fragmentRoots: fragment-root)): element(configuration);

    /** This function deletes the specified fragment root in the specified database from the configuration. **/
    databaseDeleteFragmentRoot(config: element(configuration), databaseId: number, fragmentRoots: fragment-root)): element(configuration);

    /** This function returns the fragment parents specification for the specified database from the configuration. **/
    databaseGetFragmentParents(config: element(configuration), databaseId: number): fragment-parent);

    /** This function constructs a fragment parent specification. **/
    databaseFragmentParent(namespace: string, localname: string): fragment-parent);

    /** This function adds the specified fragment parent to the specified database in the configuration. **/
    databaseAddFragmentParent(config: element(configuration), databaseId: number, fragmentParents: fragment-parent)): element(configuration);

    /** This function deletes the specified fragment parent in the specified database from the configuration. **/
    databaseDeleteFragmentParent(config: element(configuration), databaseId: number, fragmentParents: fragment-parent)): element(configuration);

    /** This function constructs a range element index specification. **/
    databaseRangeElementIndex(scalarType: string, namespace: string, localname: string, collation: string, rangeValuePositions: boolean, invalidValues?: string): range-element-index);

    /** This function constructs a range field index specification. **/
    databaseRangeFieldIndex(scalarType: string, fieldname: string, collation: string, rangeValuePositions: boolean, invalidValues?: string): range-field-index);

    /** This function returns the range element indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeElementIndexes(config: element(configuration), databaseId: number): range-element-index);

    /** This function returns the range field indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeFieldIndexes(config: element(configuration), databaseId: number): range-field-index);

    /** This function adds a range element index to the specified database in the configuration. **/
    databaseAddRangeElementIndex(config: element(configuration), databaseId: number, rangeIndexes: range-element-index)): element(configuration);

    /** This function adds a range field index to the specified database in the configuration. **/
    databaseAddRangeFieldIndex(config: element(configuration), databaseId: number, rangeIndexes: range-field-index)): element(configuration);

    /** This function deletes a range element index for the specified database in the configuration. **/
    databaseDeleteRangeElementIndex(config: element(configuration), databaseId: number, rangeIndexes: range-element-index)): element(configuration);

    /** This function deletes a range field index for the specified database in the configuration. **/
    databaseDeleteRangeFieldIndex(config: element(configuration), databaseId: number, rangeIndexes: range-field-index)): element(configuration);

    /** This function deletes all the range field indexes on given fields for the specified database in the configuration. **/
    databaseDeleteAllRangeFieldIndexes(config: element(configuration), databaseId: number, fieldnames: string): element(configuration);

    /** This function returns the range element attribute indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeElementAttributeIndexes(config: element(configuration), databaseId: number): range-element-attribute-index);

    /** This function constructs a range element attribute index specification. **/
    databaseRangeElementAttributeIndex(scalarType: string, parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string, rangeValuePositions: boolean, invalidValues?: string): range-element-attribute-index);

    /** This function adds a range element attribute index to the specified database in the configuration. **/
    databaseAddRangeElementAttributeIndex(config: element(configuration), databaseId: number, attributeIndexes: range-element-attribute-index)): element(configuration);

    /** This function deletes a range element attribute index for the specified database in the configuration. **/
    databaseDeleteRangeElementAttributeIndex(config: element(configuration), databaseId: number, attributeIndexes: range-element-attribute-index)): element(configuration);

    /** This function constructs an element word lexicon specification. **/
    databaseElementWordLexicon(namespace: string, localname: string, collation: string): element-word-lexicon);

    /** This function returns the element word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetElementWordLexicons(config: element(configuration), databaseId: number): element-word-lexicon);

    /** This function adds an element word lexicon to the specified database in the configuration. **/
    databaseAddElementWordLexicon(config: element(configuration), databaseId: number, elementWordLexicons: element-word-lexicon)): element(configuration);

    /** This function deletes an element word lexicon for the specified database from the configuration. **/
    databaseDeleteElementWordLexicon(config: element(configuration), databaseId: number, elementWordLexicons: element-word-lexicon)): element(configuration);

    /** This function constructs an element attribute word lexicon specification. **/
    databaseElementAttributeWordLexicon(parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string): element-attribute-word-lexicon);

    /** This function returns the element attribute word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetElementAttributeWordLexicons(config: element(configuration), databaseId: number): element-attribute-word-lexicon);

    /** This function adds an element attribute word lexicon to the specified database in the configuration. **/
    databaseAddElementAttributeWordLexicon(config: element(configuration), databaseId: number, elementAttributeWordLexicons: element-attribute-word-lexicon)): element(configuration);

    /** This function deletes an element attribute word lexicon for the specified database from the configuration. **/
    databaseDeleteElementAttributeWordLexicon(config: element(configuration), databaseId: number, lexicons: element-attribute-word-lexicon)): element(configuration);

    /** This function constructs a phrase through specification. **/
    databasePhraseThrough(namespace: string, localname: string): phrase-through);

    /** This function returns the phrase throughs specification(s) for the specified database from the configuration. **/
    databaseGetPhraseThroughs(config: element(configuration), databaseId: number): phrase-through);

    /** This function adds a phrase through to the specified database in the configuration. **/
    databaseAddPhraseThrough(config: element(configuration), databaseId: number, phraseThroughs: phrase-through)): element(configuration);

    /** This function deletes a phrase through for the specified database from the configuration. **/
    databaseDeletePhraseThrough(config: element(configuration), databaseId: number, phraseThroughs: phrase-through)): element(configuration);

    /** This function constructs a phrase through specification. **/
    databasePhraseAround(namespace: string, localname: string): phrase-around);

    /** This function returns the phrase arounds specification(s) for the specified database from the configuration. **/
    databaseGetPhraseArounds(config: element(configuration), databaseId: number): phrase-around);

    /** This function adds a phrase around to the specified database in the configuration. **/
    databaseAddPhraseAround(config: element(configuration), databaseId: number, phraseArounds: phrase-around)): element(configuration);

    /** This function deletes a phrase around for the specified database from the configuration. **/
    databaseDeletePhraseAround(config: element(configuration), databaseId: number, phraseArounds: phrase-around)): element(configuration);

    /** This function constructs an element word query through specification. **/
    databaseElementWordQueryThrough(namespace: string, localname: string): element-word-query-through);

    /** This function returns the element word query throughs specification(s) for the specified database from the configuration. **/
    databaseGetElementWordQueryThroughs(config: element(configuration), databaseId: number): element-word-query-through);

    /** This function adds an element word query through to the specified database in the configuration. **/
    databaseAddElementWordQueryThrough(config: element(configuration), databaseId: number, elementWordQueryThroughs: element-word-query-through)): element(configuration);

    /** This function deletes an element word query through for the specified database from the configuration. **/
    databaseDeleteElementWordQueryThrough(config: element(configuration), databaseId: number, throughs: element-word-query-through)): element(configuration);

    /** This function constructs a word lexicon specification. **/
    databaseWordLexicon(collation: string): word-lexicon);

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetWordLexicons(config: element(configuration), databaseId: number): word-lexicon);

    /** This function adds a word lexicon to the specified database in the configuration. **/
    databaseAddWordLexicon(config: element(configuration), databaseId: number, wordLexicons: word-lexicon)): element(configuration);

    /** This function deletes a word lexicon for the specified database from the configuration. **/
    databaseDeleteWordLexicon(config: element(configuration), databaseId: number, wordLexicons: word-lexicon)): element(configuration);

    /** This function constructs a geospatial element index specification. **/
    databaseGeospatialElementIndex(namespace: string, localname: string, coordinateSystem: string, rangeValuePositions: boolean, pointFormat?: string, invalidValues?: string): geospatial-element-index);

    /** This function returns the geospatial element indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementIndexes(config: element(configuration), databaseId: number): geospatial-element-index);

    /** This function adds a range element index to the specified database in the configuration. **/
    databaseAddGeospatialElementIndex(config: element(configuration), databaseId: number, geospatialElementIndexes: geospatial-element-index)): element(configuration);

    /** This function deletes a geospatial element index for the specified database in the configuration. **/
    databaseDeleteGeospatialElementIndex(config: element(configuration), databaseId: number, geospatialElementIndexes: geospatial-element-index)): element(configuration);

    /** This function constructs a geospatial element child index specification. **/
    databaseGeospatialElementChildIndex(parentNamespace: string, parentLocalname: string, namespace: string, localname: string, coordinateSystem: string, rangeValuePositions: boolean, pointFormat?: string, invalidValues?: string): geospatial-element-child-index);

    /** This function returns the geospatial element child indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementChildIndexes(config: element(configuration), databaseId: number): geospatial-element-child-index);

    /** This function adds a geospatial element child index to the specified database in the configuration. **/
    databaseAddGeospatialElementChildIndex(config: element(configuration), databaseId: number, geospatialElementChildIndexes: geospatial-element-child-index)): element(configuration);

    /** This function deletes a geospatial element child index for the specified database in the configuration. **/
    databaseDeleteGeospatialElementChildIndex(config: element(configuration), databaseId: number, geospatialElementChildIndexes: geospatial-element-child-index)): element(configuration);

    /** This function constructs a geospatial element pair index specification. **/
    databaseGeospatialElementPairIndex(parentNamespace: string, parentLocalname: string, latitudeNamespace: string, latitudeLocalname: string, longitudeNamespace: string, longitudeLocalname: string, coordinateSystem: string, rangeValuePositions: boolean, invalidValues?: string): geospatial-element-pair-index);

    /** This function returns the geospatial element pair indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementPairIndexes(config: element(configuration), databaseId: number): geospatial-element-pair-index);

    /** This function adds a geospatial element pair index to the specified database in the configuration. **/
    databaseAddGeospatialElementPairIndex(config: element(configuration), databaseId: number, geospatialElementPairIndexes: geospatial-element-pair-index)): element(configuration);

    /** This function deletes a geospatial element pair index for the specified database from the configuration. **/
    databaseDeleteGeospatialElementPairIndex(config: element(configuration), databaseId: number, geospatialElementPairIndexes: geospatial-element-pair-index)): element(configuration);

    /** This function constructs a geospatial element attribute pair index specification. **/
    databaseGeospatialElementAttributePairIndex(parentNamespace: string, parentLocalname: string, latitudeNamespace: string, latitudeLocalname: string, longitudeNamespace: string, longitudeLocalname: string, coordinateSystem: string, rangeValuePositions: boolean, invalidValues?: string): geospatial-element-attribute-pair-index);

    /** This function returns the geospatial element attribute pair indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementAttributePairIndexes(config: element(configuration), databaseId: number): geospatial-element-attribute-pair-index);

    /** This function adds a geospatial element attribute pair index to the specified database in the configuration. **/
    databaseAddGeospatialElementAttributePairIndex(config: element(configuration), databaseId: number, geospatialElementAttributePairIndexes: geospatial-element-attribute-pair-index)): element(configuration);

    /** This function deletes a geospatial element attribute pair index in the specified database from the configuration. **/
    databaseDeleteGeospatialElementAttributePairIndex(config: element(configuration), databaseId: number, indexes: geospatial-element-attribute-pair-index)): element(configuration);

    /** This function changes the name of the database with the specified ID to the specified name. **/
    databaseSetName(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the enabled value for the specified database in the configuration. **/
    databaseSetEnabled(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the security database for a database to the specified database in the configuration. **/
    databaseSetSecurityDatabase(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the schema database for a database to the specified database in the configuration. **/
    databaseSetSchemaDatabase(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the triggers database to the specified database ID for the specified database in the configuration. **/
    databaseSetTriggersDatabase(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the language for the specified database in the configuration. **/
    databaseSetLanguage(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the stemmed searches setting for the specified database in the configuration. **/
    databaseSetStemmedSearches(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the word searches setting for the specified database in the configuration. **/
    databaseSetWordSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word positions setting for the specified database in the configuration. **/
    databaseSetWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast phrase searches setting for the specified database in the configuration. **/
    databaseSetFastPhraseSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast case sensitive searches setting for the specified database in the configuration. **/
    databaseSetFastCaseSensitiveSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast reverse searches setting for the specified database in the configuration. **/
    databaseSetFastReverseSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast diacritic-sensitive searches setting for the specified database in the configuration. **/
    databaseSetFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the element word searches setting for the specified database in the configuration. **/
    databaseSetFastElementWordSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the element word positions setting for the specified database in the configuration. **/
    databaseSetElementWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast element phrase searches setting for the specified database in the configuration. **/
    databaseSetFastElementPhraseSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the element value positions setting for the specified database in the configuration. **/
    databaseSetElementValuePositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the attribute value positions setting for the specified database in the configuration. **/
    databaseSetAttributeValuePositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetTrailingWildcardSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the trailing wildcard word positions setting for the specified database in the configuration. **/
    databaseSetTrailingWildcardWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast element trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetFastElementTrailingWildcardSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the three character searches setting for the specified database in the configuration. **/
    databaseSetThreeCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the three character word positions setting for the specified database in the configuration. **/
    databaseSetThreeCharacterWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the two character searches setting for the specified database in the configuration. **/
    databaseSetTwoCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the one character searches setting for the specified database in the configuration. **/
    databaseSetOneCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the fast element character searches setting for the specified database in the configuration. **/
    databaseSetFastElementCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the URI lexicon setting for the specified database in the configuration. **/
    databaseSetUriLexicon(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the collection lexicon setting for the specified database in the configuration. **/
    databaseSetCollectionLexicon(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the reindexer enable setting for the specified database in the configuration. **/
    databaseSetReindexerEnable(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the maintain last modified setting for the specified database in the configuration. **/
    databaseSetMaintainLastModified(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the maintain directory last modified setting for the specified database in the configuration. **/
    databaseSetMaintainDirectoryLastModified(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the inherit permissions setting for the specified database in the configuration. **/
    databaseSetInheritPermissions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the inherit collections setting for the specified database in the configuration. **/
    databaseSetInheritCollections(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the inherit quality setting for the specified database in the configuration. **/
    databaseSetInheritQuality(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the preallocate journals setting for the specified database in the configuration. **/
    databaseSetPreallocateJournals(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the preload mapped data setting for the specified database in the configuration. **/
    databaseSetPreloadMappedData(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the range index optimize setting for the specified database in the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
    databaseSetRangeIndexOptimize(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the directory creation setting for the specified database in the configuration. **/
    databaseSetDirectoryCreation(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the format compatibility setting for the specified database in the configuration. **/
    databaseSetFormatCompatibility(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the index detection setting for the specified database in the configuration. **/
    databaseSetIndexDetection(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the expunge locks setting for the specified database in the configuration. **/
    databaseSetExpungeLocks(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the reindexer timestamp setting for the specified database in the configuration. **/
    databaseSetReindexerTimestamp(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the in-memory limit setting for the specified database in the configuration. **/
    databaseSetInMemoryLimit(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the in-memory list size setting for the specified database in the configuration. **/
    databaseSetInMemoryListSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the in-memory tree size setting for the specified database in the configuration. **/
    databaseSetInMemoryTreeSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the in-memory range index size setting for the specified database in the configuration. **/
    databaseSetInMemoryRangeIndexSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the in-memory range reverse index size setting for the specified database in the configuration. **/
    databaseSetInMemoryReverseIndexSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
    databaseSetLargeSizeThreshold(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
    databaseSetLocking(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
    databaseSetJournaling(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the journal size setting for the specified database in the configuration. **/
    databaseSetJournalSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the positions list max size setting for the specified database in the configuration. **/
    databaseSetPositionsListMaxSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the merge max size setting for the specified database in the configuration. **/
    databaseSetMergeMaxSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the merge minimum size setting for the specified database in the configuration. **/
    databaseSetMergeMinSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the merge min ratio setting for the specified database in the configuration. **/
    databaseSetMergeMinRatio(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the CPU scheduler priority for merges. **/
    databaseSetMergePriority(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the merge timestamp setting for the specified database in the configuration. **/
    databaseSetMergeTimestamp(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function sets the reindexer throttle setting for the specified database in the configuration. **/
    databaseSetReindexerThrottle(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function returns the attached forest IDs for the specified database from the configuration. **/
    databaseGetAttachedForests(config: element(configuration), databaseId: number): number;

    /** This function returns the ID for the specified database from the configuration. The difference between this function and xdmp:database() is that the ID from this function can come from a database that has not yet been saved (that is, from a database that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created database without the need to first save the configuration. **/
    databaseGetId(config: element(configuration), databaseName: string): number;

    /** This function returns the enabled value for the specified database from the configuration. **/
    databaseGetEnabled(config: element(configuration), databaseId: number): boolean;

    /** This function returns the name for the specified database from the configuration. **/
    databaseGetName(config: element(configuration), databaseId: number): string;

    /** This function returns the ID of the security database for the specified database from the configuration. **/
    databaseGetSecurityDatabase(config: element(configuration), databaseId: number): number;

    /** This function returns the ID of the schema database for the specified database from the configuration. **/
    databaseGetSchemaDatabase(config: element(configuration), databaseId: number): number;

    /** This function returns the ID of the triggers database for the specified database from the configuration. **/
    databaseGetTriggersDatabase(config: element(configuration), databaseId: number): number;

    /** This function returns the language for the specified database from the configuration. **/
    databaseGetLanguage(config: element(configuration), databaseId: number): string;

    /** This function returns the stemmed searches setting for the specified database from the configuration. **/
    databaseGetStemmedSearches(config: element(configuration), databaseId: number): string;

    /** This function returns the word searches setting for the specified database from the configuration. **/
    databaseGetWordSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the word positions setting for the specified database from the configuration. **/
    databaseGetWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast phrase searches setting for the specified database from the configuration. **/
    databaseGetFastPhraseSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast case sensitive searches setting for the specified database from the configuration. **/
    databaseGetFastCaseSensitiveSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast reverse searches setting for the specified database from the configuration. **/
    databaseGetFastReverseSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast diacritic sensitive searches setting for the specified database from the configuration. **/
    databaseGetFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast element word searches setting for the specified database from the configuration. **/
    databaseGetFastElementWordSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the element word positions setting for the specified database from the configuration. **/
    databaseGetElementWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast element phrase searches setting for the specified database from the configuration. **/
    databaseGetFastElementPhraseSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the element value positions setting for the specified database from the configuration. **/
    databaseGetElementValuePositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the attribute value positions setting for the specified database from the configuration. **/
    databaseGetAttributeValuePositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
    databaseGetTrailingWildcardSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the trailing wildcard word positions setting for the specified database from the configuration. **/
    databaseGetTrailingWildcardWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
    databaseGetFastElementTrailingWildcardSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the three character searches setting for the specified database from the configuration. **/
    databaseGetThreeCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the three character word positions setting for the specified database from the configuration. **/
    databaseGetThreeCharacterWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the two character searches setting for the specified database from the configuration. **/
    databaseGetTwoCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the one character searches setting for the specified database from the configuration. **/
    databaseGetOneCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the fast element character searches setting for the specified database from the configuration. **/
    databaseGetFastElementCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns the URI lexicon setting for the specified database from the configuration. **/
    databaseGetUriLexicon(config: element(configuration), databaseId: number): boolean;

    /** This function returns the collection lexicon setting for the specified database from the configuration. **/
    databaseGetCollectionLexicon(config: element(configuration), databaseId: number): boolean;

    /** This function returns the reindexer enable setting for the specified database from the configuration. **/
    databaseGetReindexerEnable(config: element(configuration), databaseId: number): boolean;

    /** This function returns the maintain last modified setting for the specified database from the configuration. **/
    databaseGetMaintainLastModified(config: element(configuration), databaseId: number): boolean;

    /** This function returns the maintain directory last modified setting for the specified database from the configuration. **/
    databaseGetMaintainDirectoryLastModified(config: element(configuration), databaseId: number): boolean;

    /** This function returns the inherit positions setting for the specified database from the configuration. **/
    databaseGetInheritPermissions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the inherit collections setting for the specified database from the configuration. **/
    databaseGetInheritCollections(config: element(configuration), databaseId: number): boolean;

    /** This function returns the inherit quality setting for the specified database from the configuration. **/
    databaseGetInheritQuality(config: element(configuration), databaseId: number): boolean;

    /** This function returns the preallocate journals setting for the specified database from the configuration. **/
    databaseGetPreallocateJournals(config: element(configuration), databaseId: number): boolean;

    /** This function returns the preload mapped data setting for the specified database from the configuration. **/
    databaseGetPreloadMappedData(config: element(configuration), databaseId: number): boolean;

    /** This function returns the range index optimize setting for the specified database from the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
    databaseGetRangeIndexOptimize(config: element(configuration), databaseId: number): string;

    /** This function returns the directory creation setting for the specified database from the configuration. **/
    databaseGetDirectoryCreation(config: element(configuration), databaseId: number): string;

    /** This function returns the format compatibility setting for the specified database from the configuration. **/
    databaseGetFormatCompatibility(config: element(configuration), databaseId: number): string;

    /** This function returns the index detection setting for the specified database from the configuration. **/
    databaseGetIndexDetection(config: element(configuration), databaseId: number): string;

    /** This function returns the expunge locks setting for the specified database from the configuration. **/
    databaseGetExpungeLocks(config: element(configuration), databaseId: number): string;

    /** This function returns the reindexer timestamp setting for the specified database from the configuration. **/
    databaseGetReindexerTimestamp(config: element(configuration), databaseId: number): number;

    /** This function returns the in memory limit setting for the specified database from the configuration. **/
    databaseGetInMemoryLimit(config: element(configuration), databaseId: number): number;

    /** This function returns the in memory list size setting for the specified database from the configuration. **/
    databaseGetInMemoryListSize(config: element(configuration), databaseId: number): number;

    /** This function returns the in memory tree size setting for the specified database from the configuration. **/
    databaseGetInMemoryTreeSize(config: element(configuration), databaseId: number): number;

    /** This function returns the in memory range index size setting for the specified database from the configuration. **/
    databaseGetInMemoryRangeIndexSize(config: element(configuration), databaseId: number): number;

    /** This function returns the in memory reverse index size setting for the specified database from the configuration. **/
    databaseGetInMemoryReverseIndexSize(config: element(configuration), databaseId: number): number;

    /** This function returns the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
    databaseGetLocking(config: element(configuration), databaseId: number): string;

    /** This function returns the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
    databaseGetJournaling(config: element(configuration), databaseId: number): string;

    /** This function returns the journal size setting for the specified database from the configuration. **/
    databaseGetJournalSize(config: element(configuration), databaseId: number): number;

    /** This function returns the positions list max size setting for the specified database from the configuration. **/
    databaseGetPositionsListMaxSize(config: element(configuration), databaseId: number): number;

    /** This function returns the merge max size setting for the specified database from the configuration. **/
    databaseGetMergeMaxSize(config: element(configuration), databaseId: number): number;

    /** This function returns the merge min size setting for the specified database from the configuration. **/
    databaseGetMergeMinSize(config: element(configuration), databaseId: number): number;

    /** This function returns the merge min ratio setting for the specified database from the configuration. **/
    databaseGetMergeMinRatio(config: element(configuration), databaseId: number): number;

    /** This function returns the CPU scheduler priority for merges for the specified database from the configuration. **/
    databaseGetMergePriority(config: element(configuration), databaseId: number): string;

    /** This function returns the merge timestamp setting for the specified database from the configuration. **/
    databaseGetMergeTimestamp(config: element(configuration), databaseId: number): number;

    /** This function returns the reindexer throttle setting for the specified database from the configuration. **/
    databaseGetReindexerThrottle(config: element(configuration), databaseId: number): number;

    /** This function constructs an included element specification. **/
    databaseIncludedElement(namespace: string, localname: string, weight: double, attributeNamespace: string, attributeLocalname: string, attributeValue: string): included-element);

    /** This function constructs an excluded element specification. **/
    databaseExcludedElement(namespace: string, localname: string, attributeNamespace?: string, attributeLocalname?: string, attributeValue?: string): excluded-element);

    /** This function constructs a field specification. **/
    databaseField(fieldName: string, includeRoot: boolean): field);

    /** This function returns the word query included elements setting for the specified database from the configuration. **/
    databaseGetWordQueryIncludedElements(config: element(configuration), databaseId: number): included-element);

    /** This function returns the word query excluded elements setting for the specified database from the configuration. **/
    databaseGetWordQueryExcludedElements(config: element(configuration), databaseId: number): excluded-element);

    /** This function returns the fields specification(s) for the specified database from the configuration. **/
    databaseGetFields(config: element(configuration), databaseId: number): field);

    /** This function returns the fields included elements specification for the specified database from the configuration. **/
    databaseGetFieldIncludedElements(config: element(configuration), databaseId: number, fieldName: string): included-element);

    /** This function returns the field excluded elements specification for the specified database from the configuration. **/
    databaseGetFieldExcludedElements(config: element(configuration), databaseId: number, fieldName: string): excluded-element);

    /** This function returns the field specification for the specified database from the configuration. **/
    databaseGetField(config: element(configuration), databaseId: number, fieldName: string): field);

    /** This function adds the field specification to the specified database in the configuration. **/
    databaseAddField(config: element(configuration), databaseId: number, fields: field)): element(configuration);

    /** This function deletes the field specification in the specified database from the configuration. **/
    databaseDeleteField(config: element(configuration), databaseId: number, fieldNames: string): element(configuration);

    /** This function adds the word query included element specification to the specified database in the configuration. **/
    databaseAddWordQueryIncludedElement(config: element(configuration), databaseId: number, includedElements: included-element)): element(configuration);

    /** This function deletes the word query included element specification in the specified database from the configuration. **/
    databaseDeleteWordQueryIncludedElement(config: element(configuration), databaseId: number, includedElements: included-element)): element(configuration);

    /** This function adds the field included element specification tn the specified database in the configuration. **/
    databaseAddFieldIncludedElement(config: element(configuration), databaseId: number, fieldName: string, includedElements: included-element)): element(configuration);

    /** This function deletes the field included element specification in the specified database from the configuration. **/
    databaseDeleteFieldIncludedElement(config: element(configuration), databaseId: number, fieldName: string, includedElements: included-element)): element(configuration);

    /** This function adds the word query excluded element specification for the specified database to the configuration. **/
    databaseAddWordQueryExcludedElement(config: element(configuration), databaseId: number, excludedElements: excluded-element)): element(configuration);

    /** This function deletes the word query excluded element specification in the specified database from the configuration. **/
    databaseDeleteWordQueryExcludedElement(config: element(configuration), databaseId: number, excludedElements: excluded-element)): element(configuration);

    /** This function adds the field excluded element specification in the specified database in the configuration. **/
    databaseAddFieldExcludedElement(config: element(configuration), databaseId: number, fieldName: string, excludedElements: excluded-element)): element(configuration);

    /** This function deletes the field excluded element specification in the specified database from the configuration. **/
    databaseDeleteFieldExcludedElement(config: element(configuration), databaseId: number, fieldName: string, excludedElements: excluded-element)): element(configuration);

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetFieldWordLexicons(config: element(configuration), databaseId: number, fieldName: string): word-lexicon);

    /** This function adds a word lexicon to the specified database in the configuration. **/
    databaseAddFieldWordLexicon(config: element(configuration), databaseId: number, fieldName: string, wordLexicons: word-lexicon)): element(configuration);

    /** This function deletes a word lexicon for the specified database from the configuration. **/
    databaseDeleteFieldWordLexicon(config: element(configuration), databaseId: number, fieldName: string, wordLexicons: word-lexicon)): element(configuration);

    /** This function returns the word query include document root setting for the specified database from the configuration. **/
    databaseGetWordQueryIncludeDocumentRoot(config: element(configuration), databaseId: number): boolean;

    /** This function returns the reindexer word query stemmed searches setting for the specified database from the configuration. **/
    databaseGetWordQueryStemmedSearches(config: element(configuration), databaseId: number): string;

    /** This function returns true if the word query searches setting for the specified database is enabled in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryWordSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query fast phrase searches setting for the specified database is set in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastPhraseSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query fast case sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastCaseSensitiveSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query fast diacritic sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query trailing wildcard searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTrailingWildcardSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query trailing wildcard word positions setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTrailingWildcardWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query three character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryThreeCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query three character word positions setting is enabled for the specified database from the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryThreeCharacterWordPositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query two character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTwoCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function returns true if the word query one character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryOneCharacterSearches(config: element(configuration), databaseId: number): boolean;

    /** This function sets the word query stemmed searches setting for the specified database in the configuration. **/
    databaseSetWordQueryStemmedSearches(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function sets the word query word searches setting for the specified database in the configuration. **/
    databaseSetWordQueryWordSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query fast phrase searches setting for the specified database in the configuration. **/
    databaseSetWordQueryFastPhraseSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function returns the word query fast case sensitive searches setting for the specified database from the configuration. **/
    databaseSetWordQueryFastCaseSensitiveSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query fast diacritic sensitive searches setting for the specified database in the configuration. **/
    databaseSetWordQueryFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetWordQueryTrailingWildcardSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query trailing wildcard word positions setting for the specified database in the configuration. **/
    databaseSetWordQueryTrailingWildcardWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query three character searches setting for the specified database in the configuration. **/
    databaseSetWordQueryThreeCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query three character word positions setting for the specified database in the configuration. **/
    databaseSetWordQueryThreeCharacterWordPositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query two character searches setting for the specified database in the configuration. **/
    databaseSetWordQueryTwoCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query one character searches setting for the specified field in the configuration. **/
    databaseSetWordQueryOneCharacterSearches(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the word query include document root setting for the specified field in the configuration. **/
    databaseSetWordQueryIncludeDocumentRoot(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function returns the field include document root setting for the specified field from the configuration. **/
    databaseGetFieldIncludeDocumentRoot(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns stemmed searches setting for the specified field if configured. Otherwise, it returns the empty sequence. **/
    databaseGetFieldStemmedSearches(config: element(configuration), databaseId: number, fieldName: string): string;

    /** This function returns true if the word searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldWordSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the fast phrase searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastPhraseSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the fast case sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastCaseSensitiveSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the fast diacritic sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the trailing wildcard searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTrailingWildcardSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the trailing wildcard word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTrailingWildcardWordPositions(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the three character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldThreeCharacterSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the three character word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldThreeCharacterWordPositions(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the two character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTwoCharacterSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns true if the one character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldOneCharacterSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function sets the field stemmed searches setting for the specified field in the configuration. **/
    databaseSetFieldStemmedSearches(config: element(configuration), databaseId: number, fieldName: string, value: string): element(configuration);

    /** This function sets the field word searches setting for the specified field in the configuration. **/
    databaseSetFieldWordSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field fast phrase searches setting for the specified field in the configuration. **/
    databaseSetFieldFastPhraseSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field fast case sensitive searches setting for the specified field in the configuration. **/
    databaseSetFieldFastCaseSensitiveSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field fast diacritic sensitive searches setting for the specified field in the configuration. **/
    databaseSetFieldFastDiacriticSensitiveSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetFieldTrailingWildcardSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field trailing wildcard word positions setting for the specified field in the configuration. **/
    databaseSetFieldTrailingWildcardWordPositions(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field three character searches setting for the specified field in the configuration. **/
    databaseSetFieldThreeCharacterSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field three character word positions setting for the specified field in the configuration. **/
    databaseSetFieldThreeCharacterWordPositions(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field two character searches setting for the specified field in the configuration. **/
    databaseSetFieldTwoCharacterSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field one character searches setting for the specified field in the configuration. **/
    databaseSetFieldOneCharacterSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field include document root setting for the specified field in the configuration. **/
    databaseSetFieldIncludeDocumentRoot(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field name setting for the specified field in the configuration. **/
    databaseSetFieldName(config: element(configuration), databaseId: number, fieldName: string, value: string): element(configuration);

    /** This function returns the name of the specified forest, given the forest ID. **/
    forestGetName(config: element(configuration), forestId: number): string;

    /** This function returns the ID of the host in which the specified forest resides. **/
    forestGetHost(config: element(configuration), forestId: number): number;

    /** This function returns the ID of the forest with the specified name, from the specified configuration. The difference between this function and xdmp:forest() is that the ID from this function can come from a forest that has not yet been saved (that is, from a forest that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). **/
    forestGetId(config: element(configuration), forestName: string): number;

    /** This function returns the enabled state of the specified forest. **/
    forestGetEnabled(config: element(configuration), forestId: number): boolean;

    /** This function returns the name of the data directory of the specified forest. **/
    forestGetDataDirectory(config: element(configuration), forestId: number): string;

    /** This function returns the name of the large data directory of the specified forest. **/
    forestGetLargeDataDirectory(config: element(configuration), forestId: number): string;

    /** This function returns the state of whether failover is enabled for the specified forest. **/
    forestGetFailoverEnable(config: element(configuration), forestId: number): boolean;

    /** This function returns the state of what kinds of updates are allowed for the specified forest. **/
    forestGetUpdatesAllowed(config: element(configuration), forestId: number): string;

    /** This function returns the IDs of the hosts defined as failover hosts for this forest. The order in which the hosts IDs are returned is significant, with the first ID being the primary host, the second (if there is one) being the secondary, and so on. **/
    forestGetFailoverHosts(config: element(configuration), forestId: number): number;

    /** This function sets a forest configuration to a new host. **/
    forestSetHost(config: element(configuration), forestId: number, value: number): element(configuration);

    /** This function sets the enabled state for a forest configuration. **/
    forestSetEnabled(config: element(configuration), forestId: number, value: boolean): element(configuration);

    /** This function sets the forest failover enabled state for a forest configuration. **/
    forestSetFailoverEnable(config: element(configuration), forestId: number, value: boolean): element(configuration);

    /** This function sets the updates-allowed state for a forest configuration. **/
    forestSetUpdatesAllowed(config: element(configuration), forestId: number, value: string): element(configuration);

    /** This function adds a failover host to the list of failover hosts for the specified forest in the specified configuration. If there are already any hosts specified, this host is added to the end of the list of failover hosts. **/
    forestAddFailoverHost(config: element(configuration), forestId: number, hosts: number): element(configuration);

    /** This function deletes the specified failover host(s) from the failover-host list in the specified configuration. **/
    forestDeleteFailoverHost(config: element(configuration), forestId: number, hosts: number): element(configuration);

    /** This function deletes the configuration for the specified forest from the configuration. **/
    forestDelete(config: element(configuration), forestIds: number, deleteData: boolean): element(configuration);

    /** This function creates a new forest configuration. **/
    forestCreate(config: element(configuration), forestName: string, hostId: number, dataDirectory: string, largeDataDirectory?: string, fastDataDirectory?: string): element(configuration);

    /** This function creates a new forest specification with the same settings as the forest with the specified ID. The new forest configuration will have the specified name. It copies the forest configuration, but does not copy the forest data. **/
    forestCopy(config: element(configuration), forestId: number, forestName: string, dataDirectory: string, largeDataDirectory?: string, fastDataDirectory?: string): element(configuration);

    /** This function returns the scheduled backups for the specified forest from the configuration. **/
    forestGetBackups(config: element(configuration), forestId: number): forest-backup);

    /** This function constructs a weekly scheduled backup. **/
    forestWeeklyBackup(backupDir: string, backupPeriod: number, days: string, startTime: time): forest-backup);

    /** This function constructs a monthly scheduled backup. **/
    forestMonthlyBackup(backupDir: string, backupPeriod: number, backupMonthDay: number, startTime: time): forest-backup);

    /** This function constructs a one-time backup. **/
    forestOneTimeBackup(backupDir: string, start: dateTime): forest-backup);

    /** This function adds scheduled backup specifications for a forest to a configuration. **/
    forestAddBackup(config: element(configuration), forestId: number, backups: forest-backup)): element(configuration);

    /** This function deletes scheduled backup specifications for a forest from a configuration. **/
    forestDeleteBackup(config: element(configuration), forestId: number, backups: forest-backup)): element(configuration);

    /** This function return the ID for the specified host from the configuration. The difference between this function and xdmp:host() is that the ID from this function can come from a host that has not yet been saved (that is, from a host that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created host without the need to first save the configuration. **/
    hostGetId(config: element(configuration), hostName: string): number;

    /** This function returns the name for the host with the specified ID. **/
    hostGetName(config: element(configuration), hostId: number): string;

    /** This function returns the group ID for the host with the specified ID. **/
    hostGetGroup(config: element(configuration), hostId: number): number;

    /** This function returns the bind port for the host with the specified ID. **/
    hostGetPort(config: element(configuration), hostId: number): number;

    /** This function changes the name of an existing host to the newly specified value. **/
    hostSetName(config: element(configuration), hostId: number, value: string): element(configuration);

    /** This function changes the group to which an existing host belongs to the newly specified value. **/
    hostSetGroup(config: element(configuration), hostId: number, value: number): element(configuration);

    /** This function changes the bind port value for the host to the newly specified value. **/
    hostSetPort(config: element(configuration), hostId: number, value: number): element(configuration);

    /** This function returns the type of appserver with the specified ID. It will be one of "http", "xdbc", "odbc", or "webDAV". **/
    appserverGetType(config: element(configuration), appserverId: number): string;

    /** This function returns the ID of the specified App Server's group. **/
    appserverGetGroupId(config: element(configuration), appserverId: number): number;

    /** This function returns the ID(s) of the hosts the specified App Server's is currently running on. **/
    appserverGetHostIds(config: element(configuration), appserverId: number): number;

    /** This function returns the ID of the specified App Server. The difference between this function and xdmp:server() is that the ID from this function can come from an appserver that has not yet been saved (that is, from an appserver that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created appserver without the need to first save the configuration. **/
    appserverGetId(config: element(configuration), groupIds: number, appserverName: string): number;

    /** This function returns the name of the appserver with the specified ID. **/
    appserverGetName(config: element(configuration), appserverId: number): string;

    /** This function returns the root for the specified App Server. **/
    appserverGetRoot(config: element(configuration), appserverId: number): string;

    /** This function returns the port for the specified App Server. **/
    appserverGetPort(config: element(configuration), appserverId: number): number;

    /** This function returns the ID of the database set as the modules database for the specified database. **/
    appserverGetModulesDatabase(config: element(configuration), appserverId: number): number;

    /** This function returns the ID of the database to which the App Server is set to execute queries against for the specified database. **/
    appserverGetDatabase(config: element(configuration), appserverId: number): number;

    /** This function returns the ID of the database to which the App Server stores users' last login information. **/
    appserverGetLastLogin(config: element(configuration), appserverId: number): number;

    /** This function returns the value of the whether or not the appserver should display users' last login information. **/
    appserverGetDisplayLastLogin(config: element(configuration), appserverId: number): boolean;

    /** This function returns the IP address of the App Server configuration. The default is 0.0.0.0. **/
    appserverGetAddress(config: element(configuration), appserverId: number): string;

    /** This function returns the socket listen backlog setting for the specified App Server. **/
    appserverGetBacklog(config: element(configuration), appserverId: number): number;

    /** This function returns the maximum number of threads configured for the specified App Server. **/
    appserverGetThreads(config: element(configuration), appserverId: number): number;

    /** This function returns the request timeout value configured for the specified App Server. **/
    appserverGetRequestTimeout(config: element(configuration), appserverId: number): number;

    /** This function returns the keep alive timeout value configured for the specified App Server. **/
    appserverGetKeepAliveTimeout(config: element(configuration), appserverId: number): number;

    /** This function returns the session timeout value configured for the specified App Server. **/
    appserverGetSessionTimeout(config: element(configuration), appserverId: number): number;

    /** This function returns the connection timeout value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetConnectionTimeout(config: element(configuration), appserverId: number): number;

    /** This function returns the default time limit value configured for the specified App Server. **/
    appserverGetDefaultTimeLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the default SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetDefaultQueryTimeLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the max time limit value configured for the specified App Server. **/
    appserverGetMaxTimeLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the max SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetMaxQueryTimeLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the pre commit trigger depth value configured for the specified App Server. **/
    appserverGetPreCommitTriggerDepth(config: element(configuration), appserverId: number): number;

    /** This function returns the pre commit trigger limit value configured for the specified App Server. **/
    appserverGetPreCommitTriggerLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the collation URI set in the configuration for the specified App Server. **/
    appserverGetCollation(config: element(configuration), appserverId: number): string;

    /** This function returns the authentication scheme (basic, digest, digestbasic, or application-level) configured for the specified App Server. **/
    appserverGetAuthentication(config: element(configuration), appserverId: number): string;

    /** This function returns the default user value configured for the specified App Server. The default user only is used with application-level authentication. **/
    appserverGetDefaultUser(config: element(configuration), appserverId: number): number;

    /** This function returns the privilege ID for the specified App Server. If no privilege is configured, It returns 0. **/
    appserverGetPrivilege(config: element(configuration), appserverId: number): number;

    /** This function returns the concurrent request limit for any user for the specified App Server. 0 indicates no bound on the number of concurrent requests. **/
    appserverGetConcurrentRequestLimit(config: element(configuration), appserverId: number): number;

    /** This function returns the value of the log errors setting configured for this App Server, where true indicates that the App Server will send uncaught exceptions to the ErrorLog.txt file, and false indicates that it will not. **/
    appserverGetLogErrors(config: element(configuration), appserverId: number): boolean;

    /** This function returns the value of debug allow setting configured for this App Server, where true indicates that the App Server will allow queries to be debugged, and false indicates that it will not. **/
    appserverGetDebugAllow(config: element(configuration), appserverId: number): boolean;

    /** This function returns the value of the profile allow setting configured for this App Server, where true indicates that the App Server will allow queries to be profiled, and false indicates that it will not. **/
    appserverGetProfileAllow(config: element(configuration), appserverId: number): boolean;

    /** This function returns the value of the default xquery version configured for the specified App Server. **/
    appserverGetDefaultXqueryVersion(config: element(configuration), appserverId: number): string;

    /** This function returns the value of the multi version concurrency control option configured for the specified App Server. **/
    appserverGetMultiVersionConcurrencyControl(config: element(configuration), appserverId: number): string;

    /** This function returns the value of the distribute timestamps control option configured for the specified App Server. **/
    appserverGetDistributeTimestamps(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output sgml character entities setting for the specified App Server. **/
    appserverGetOutputSgmlCharacterEntities(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output encoding setting for the specified App Server. **/
    appserverGetOutputEncoding(config: element(configuration), appserverId: number): string;

    /** This function returns the path to the error handler configured for this App Server. If no error handler is configured, returns the empty string. **/
    appserverGetErrorHandler(config: element(configuration), appserverId: number): string;

    /** This function returns the path to the URL rewriter configured for this App Server. If no URL rewriter is configured, returns the empty string. **/
    appserverGetUrlRewriter(config: element(configuration), appserverId: number): string;

    /** This function returns the enabled state for the specified App Server. **/
    appserverGetEnabled(config: element(configuration), appserverId: number): boolean;

    /** This function returns the value of any schemas definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetSchemas(config: element(configuration), appserverId: number): schema);

    /** This function returns the value of any namespace definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetNamespaces(config: element(configuration), appserverId: number): namespace);

    /** This function returns the value of the "expires" HTTP header for static content to expire after this many seconds port for the specified App Server. **/
    appserverGetStaticExpires(config: element(configuration), appserverId: number): number;

    /** This function returns the value of whether the WebDAV server computes content length. **/
    appserverGetComputeContentLength(config: element(configuration), appserverId: number): boolean;

    /** This function changes the name of an existing App Server to the newly specified value. **/
    appserverSetName(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function changes the root for a specified App Server to the newly specified value. **/
    appserverSetRoot(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function changes the port in the configuration for the specified App Server to the specified number. Changing the port is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetPort(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the value in the configuration of modules database for the specified App Server to the specified database ID. **/
    appserverSetModulesDatabase(config: element(configuration), appserverId: number, value: any): element(configuration);

    /** This function sets the value in the configuration of the database for the specified App Server. **/
    appserverSetDatabase(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the value in the configuration of the last login database for the specified App Server. If the value is equal to 0, then the last-login feature is disabled for this appserver. **/
    appserverSetLastLogin(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the display last login setting in the configuration for the specified App Server. **/
    appserverSetDisplayLastLogin(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function changes the IP Address in the configuration for the specified App Server to the specified address. Changing the address is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetAddress(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the value in the configuration of the backlog (the maximum number of pending connections allowed on the HTTP socket) for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetBacklog(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the value in the configuration of the maximum number of threads for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetThreads(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the value of the socket request timeout (the number of seconds before the socket times out) in the configuration for the specified App Server. **/
    appserverSetRequestTimeout(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the keep-alive timeout (the maximum number of second for subsequent socket requests to time out) in the configuration for the specified App Server. **/
    appserverSetKeepAliveTimeout(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the session timeout value (in seconds) in the configuration for the specified App Server. **/
    appserverSetSessionTimeout(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the connection timeout value (in seconds) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetConnectionTimeout(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the default time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
    appserverSetDefaultTimeLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the default SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetDefaultQueryTimeLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the max time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
    appserverSetMaxTimeLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the max SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetMaxQueryTimeLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the maximum depth (how many triggers can cause other triggers to fire, which in turn cause others to fire, and so on) in the configuration for the specifed App Server. **/
    appserverSetPreCommitTriggerDepth(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the value in the configuration for the maximum number of pre-commit triggers a single statement can invoke for the specified App Server. **/
    appserverSetPreCommitTriggerLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the default collation in the configuration for the specified App Server. **/
    appserverSetCollation(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the authentication scheme in the configuration for the specified App Server. **/
    appserverSetAuthentication(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the default user (for use with application-level authentication) in the configuration for the specified App Server. **/
    appserverSetDefaultUser(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets an execute privilege in the configuration for the specified App Server. When a privilege is set, the user who makes a request to the App Server must have been granted (via a role, either directly or indirectly) the specified privilege. **/
    appserverSetPrivilege(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the limit on concurrent requests that any user may have on a particular appserver. Setting the limit to 0 indicates there is no bound on the number of concurrent requests. **/
    appserverSetConcurrentRequestLimit(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets the log errors setting in the configuration for the specified App Server. **/
    appserverSetLogErrors(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function sets the debug allow setting in the configuration for the specified App Server. **/
    appserverSetDebugAllow(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function sets the profile allow setting in the configuration for the specified App Server. **/
    appserverSetProfileAllow(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function sets the default XQuery version setting in the configuration for this App Server. This setting determines the XQuery dialect used in queries against this App Server when one is not explicitly specified in the XQuery version declaration. **/
    appserverSetDefaultXqueryVersion(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the multi version concurrency control value in the configuration for this App Server. This option specifies how the latest timestamp is chosen for lock-free queries. When set to contemporaneous, the server chooses the latest timestamp for which any transaction is known to have committed, even though there still may be other transactions for that timestamp that have not yet fully committed. Queries will see more timely results, but may block waiting for contemporaneous transactions to fully commit. When set to nonblocking, the server chooses the latest timestamp for which all transactions are known to have committed, even though there may be a later timestamp for which another transaction has committed. Queries won't block waiting for transactions, but they may see less timely results. **/
    appserverSetMultiVersionConcurrencyControl(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the distribute timestamps control value in the configuration for this App Server. This option specifies how the latest timestamp is distributed after updates. This affects performance of updates and the timeliness of read-after-write query results from other hosts in the group. When set to fast, updates return as quicky as possible. No special timestamp notification messages are broadcasted to other hosts. Instead, timestamps are distributed to other hosts when any other message is sent. The maximum amount of time that could pass before other hosts see the update timestamp is one second, because a heartbeat message is sent to other hosts every second. When set to strict, updates immediately broadcast timestamp notification messages to every other host in the group. Updates do not return until their timestamp has been distributed. This ensures timeliness of read-after-write query results from other hosts in the group. **/
    appserverSetDistributeTimestamps(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the SGML character entity output setting in the configuration for the specified App Server. The SGML setting determines how characters that can be represented as SGML entites are serialized upon output by default in a query against the specified App Server. **/
    appserverSetOutputSgmlCharacterEntities(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the value for the default output encoding in the configuration for the specified App Server. **/
    appserverSetOutputEncoding(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the value of the path to the error handler in the configuration for the specified App Server. The path should specify a relative or absolute path to an XQuery module that is executed in the event of any 400 or 500 series HTTP errors (sometime known as a "sorry" server to give the user a clean error page). **/
    appserverSetErrorHandler(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the value of the path to the URL rewriter in the configuration for the specified App Server. This function supports both the interpretive and declarative rewriters. The path should specify a relative or absolute path to either an XQuery module used as the interpretive rewriter or the XML file used by the declarative rewriter. **/
    appserverSetUrlRewriter(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the enabled state in the configuration for the specified App Server. **/
    appserverSetEnabled(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function changes the value of the "expires" HTTP header for a specified App Server to the newly specified value. **/
    appserverSetStaticExpires(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function changes the value whether a WebDAV server computes content length. **/
    appserverSetComputeContentLength(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function returns the request blackouts specification for the specified appserver from the configuration. **/
    appserverGetRequestBlackouts(config: element(configuration), appserverId: number): request-blackout);

    /** This function constructs a request-blackout specification. **/
    appserverRecurringRequestBlackout(users: number, roles: number, days: string, startTime: time, endTime: time, duration: duration): request-blackout);

    /** This function constructs a one-time request-blackout specification. **/
    appserverOneTimeRequestBlackout(users: number, roles: number, start: dateTime, end: dateTime, duration: duration): request-blackout);

    /** This function adds a request blackout specification for a appserver to a configuration. **/
    appserverAddRequestBlackout(config: element(configuration), appserverId: number, requestBlackouts: request-blackout)): element(configuration);

    /** This function deletes a request blackout specification for a appserver from a configuration. **/
    appserverDeleteRequestBlackout(config: element(configuration), appserverId: number, blackouts: request-blackout)): element(configuration);

    /** This function constructs a schema element with the specified prefix and URI. **/
    groupSchema(namespaceUri: string, schemaLocation: string): schema);

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified App Server. Schemas with a schema binding definition are automatically imported into queries run against the App Server. **/
    appserverAddSchema(config: element(configuration), appserverId: number, schemas: schema)): element(configuration);

    /** This function deletes a schema definition in the configuration for the specified App Server. **/
    appserverDeleteSchema(config: element(configuration), appserverId: number, schemas: schema)): element(configuration);

    /** This function constructs a namespace element with the specified prefix and URI. **/
    groupNamespace(prefix: string, namespaceUri: string): namespace);

    /** Add one or more namespaces to an App Server configuration, which will predefine the namespace(s) for all requests evaluated against the App Server. **/
    appserverAddNamespace(config: element(configuration), appserverId: number, namespaces: namespace)): element(configuration);

    /** This function deletes a namespace configuration from the configuration for the specified App Server. **/
    appserverDeleteNamespace(config: element(configuration), appserverId: number, namespaces: namespace)): element(configuration);

    /** This function deletes one or more App Servers in the configuration. **/
    appserverDelete(config: element(configuration), appserverIds: number): element(configuration);

    /** This function creates a new HTTP App Server with the specified name, root, and port in the configuration. **/
    httpServerCreate(config: element(configuration), groupId: number, appserverName: string, root: string, port: number, modulesId: any, databaseId: number): element(configuration);

    /** This function creates a new XDBC App Server with the specified name, root, and port in the configuration. **/
    xdbcServerCreate(config: element(configuration), groupId: number, appserverName: string, root: string, port: number, modulesId: any, databaseId: number): element(configuration);

    /** This function creates a new WebDAV App Server with the specified name, library, and port in the configuration. **/
    webdavServerCreate(config: element(configuration), groupId: number, appserverName: string, root: string, port: number, databaseId: number): element(configuration);

    /** This function creates a new App Server specification with the same settings as the App Server with the specified ID. The new App Server configuration will have the specified name. You can copy the App Server to a new one either in the same group (by specifying $old-group-id and $new-group-id with the same group ID) or in a different group. **/
    appserverCopy(config: element(configuration), appserverId: number, targetGroupId: number, appserverName: string, port: number): element(configuration);

    /** This function returns the name of the task server for the specified group from the configuration. **/
    taskserverGetName(config: element(configuration), groupId: number): string;

    /** This function returns the number of threads configured on the task server for the specified group. **/
    taskserverGetThreads(config: element(configuration), groupId: number): number;

    /** This function returns the number of debug threads configured on the task server for the specified group. **/
    taskserverGetDebugThreads(config: element(configuration), groupId: number): number;

    /** This function returns the default time limit configured on the task server for the specified group. **/
    taskserverGetDefaultTimeLimit(config: element(configuration), groupId: number): number;

    /** This function returns the maximum time limit configured on the task server for the specified group. **/
    taskserverGetMaxTimeLimit(config: element(configuration), groupId: number): number;

    /** This function returns the number queue size configured on the task server for the specified group. **/
    taskserverGetQueueSize(config: element(configuration), groupId: number): number;

    /** This function returns the maximum pre-commit trigger depth configured on the task server for the specified group. **/
    taskserverGetPreCommitTriggerDepth(config: element(configuration), groupId: number): number;

    /** This function returns the maximum post-commit trigger depth configured on the task server for the specified group. **/
    taskserverGetPostCommitTriggerDepth(config: element(configuration), groupId: number): number;

    /** This function returns the pre-commit trigger limit configured on the task server for the specified group. **/
    taskserverGetPreCommitTriggerLimit(config: element(configuration), groupId: number): number;

    /** This function returns the value for the log-errors setting configured on the task server for the specified group. **/
    taskserverGetLogErrors(config: element(configuration), groupId: number): boolean;

    /** This function returns the value for the debug-allow setting configured on the task server for the specified group. **/
    taskserverGetDebugAllow(config: element(configuration), groupId: number): boolean;

    /** This function returns the value for the profile-allow setting configured on the task server for the specified group. **/
    taskserverGetProfileAllow(config: element(configuration), groupId: number): boolean;

    /** This function sets the value in the configuration of the maximum number of threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetThreads(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value in the configuration of the maximum number of debug threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetDebugThreads(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the task server default time limit in the configuration. **/
    taskserverSetDefaultTimeLimit(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the task server max time limit in the configuration. **/
    taskserverSetMaxTimeLimit(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value in the configuration of the maximum queue size for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetQueueSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
    taskserverSetPreCommitTriggerDepth(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value for the task server post-commit trigger depth in the configuration. **/
    taskserverSetPostCommitTriggerDepth(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
    taskserverSetPreCommitTriggerLimit(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the value for the log errors setting for the task server in the configuration. **/
    taskserverSetLogErrors(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function sets the value for the debug allow setting for the task server in the configuration. **/
    taskserverSetDebugAllow(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function sets the value for the profile allow setting for the task server in the configuration. **/
    taskserverSetProfileAllow(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function returns the IDs of all hosts belonging to the group. **/
    groupGetHostIds(config: element(configuration), groupId: number): number;

    /** This function returns the IDs of all appservers belonging to the group. **/
    groupGetAppserverIds(config: element(configuration), groupId: number): number;

    /** This function returns the IDs of all httpservers belonging to the group. **/
    groupGetHttpserverIds(config: element(configuration), groupId: number): number;

    /** This function returns the IDs of all xdbcservers belonging to the group. **/
    groupGetXdbcserverIds(config: element(configuration), groupId: number): number;

    /** This function returns the IDs of all webdavservers belonging to the group. **/
    groupGetWebdavserverIds(config: element(configuration), groupId: number): number;

    /** This function returns the ID of of the taskserver belonging to the group. **/
    groupGetTaskserverId(config: element(configuration), groupId: number): number;

    /** This function returns the ID of the group. The difference between this function and xdmp:group() is that the ID from this function can come from a group that has not yet been saved (that is, from a group that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created group without the need to first save the configuration. **/
    groupGetId(config: element(configuration), groupName: string): number;

    /** This function returns the name of the specified group. **/
    groupGetName(config: element(configuration), groupId: number): string;

    /** This function returns the value for the list cache size setting from the specified group. **/
    groupGetListCacheSize(config: element(configuration), groupId: number): number;

    /** This function returns the value for the list cache partitions setting from the specified group. **/
    groupGetListCachePartitions(config: element(configuration), groupId: number): number;

    /** This function returns the value for the compressed tree cache size setting from the specified group. **/
    groupGetCompressedTreeCacheSize(config: element(configuration), groupId: number): number;

    /** This function returns the value for the compressed tree cache partitions setting from the specified group. **/
    groupGetCompressedTreeCachePartitions(config: element(configuration), groupId: number): number;

    /** This function returns the value for the compressed tree read size (in kilobytes) setting from the specified group. **/
    groupGetCompressedTreeReadSize(config: element(configuration), groupId: number): number;

    /** This function returns the value for the expanded tree cache size setting from the specified group. **/
    groupGetExpandedTreeCacheSize(config: element(configuration), groupId: number): number;

    /** This function returns the value for the expanded tree cache partitions setting from the specified group. **/
    groupGetExpandedTreeCachePartitions(config: element(configuration), groupId: number): number;

    /** This function returns the value for the smtp relay setting from the specified group. **/
    groupGetSmtpRelay(config: element(configuration), groupId: number): string;

    /** This function returns the value for the smtp timeout setting from the specified group. **/
    groupGetSmtpTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the http user agent setting from the specified group. **/
    groupGetHttpUserAgent(config: element(configuration), groupId: number): string;

    /** This function returns the value for the http timeout setting from the specified group. **/
    groupGetHttpTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the xdqp timeout setting from the specified group. **/
    groupGetXdqpTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the host timeout setting from the specified group. **/
    groupGetHostTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the host initial timeout setting from the specified group. **/
    groupGetHostInitialTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the number of seconds a request will retry before timing out. **/
    groupGetRetryTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
    groupGetModuleCacheTimeout(config: element(configuration), groupId: number): number;

    /** This function returns the value for the system log level setting from the specified group. **/
    groupGetSystemLogLevel(config: element(configuration), groupId: number): string;

    /** This function returns the value for the file log level setting from the specified group. **/
    groupGetFileLogLevel(config: element(configuration), groupId: number): string;

    /** This function returns the value for the rotate log files setting from the specified group. **/
    groupGetRotateLogFiles(config: element(configuration), groupId: number): string;

    /** This function returns the value for the keep log files setting from the specified group. **/
    groupGetKeepLogFiles(config: element(configuration), groupId: number): number;

    /** This function returns the value for the failover enable setting from the specified group. **/
    groupGetFailoverEnable(config: element(configuration), groupId: number): boolean;

    /** This function returns the value for the trace events activated setting from the specified group. **/
    groupGetTraceEventsActivated(config: element(configuration), groupId: number): boolean;

    /** This function returns the value of any schemas definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
    groupGetSchemas(config: element(configuration), groupId: number): schema);

    /** This function returns the value of any namespace definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
    groupGetNamespaces(config: element(configuration), groupId: number): namespace);

    /** This function returns the value of any trace events activated for the specified group. If none are defined, returns the empty sequence. **/
    groupGetTraceEvents(config: element(configuration), groupId: number): event);

    /** This function changes the name of the group with the specified ID to the specified name. **/
    groupSetName(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the list cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetListCacheSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the list cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetListCachePartitions(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the compressed tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeCacheSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the compressed tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeCachePartitions(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the compressed tree read size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeReadSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the expanded tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetExpandedTreeCacheSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the expanded tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetExpandedTreeCachePartitions(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the SMTP relay setting for the group in the configuration. **/
    groupSetSmtpRelay(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the SMTP timeout setting for the group in the configuration. **/
    groupSetSmtpTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the HTTP User-Agent setting for the group in the configuration. **/
    groupSetHttpUserAgent(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the HTTP timeout setting for the group in the configuration. **/
    groupSetHttpTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the XDQP timeout setting (the timeout for communication between data nodes and evaluator nodes) for the group in the configuration. **/
    groupSetXdqpTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the host timeout setting (the timeout for communication between hosts) for the group in the configuration. **/
    groupSetHostTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the host initial timeout setting (the time the cluster will wait for a host to come online during cluster startup) for the group in the configuration. **/
    groupSetHostInitialTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the number of seconds a request will retry before timing out. **/
    groupSetRetryTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
    groupSetModuleCacheTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the host system log level setting for the group in the configuration. **/
    groupSetSystemLogLevel(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the host file log level setting for the group in the configuration. **/
    groupSetFileLogLevel(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the rotate log files setting for the group in the configuration. **/
    groupSetRotateLogFiles(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the keep log files setting for the group in the configuration. **/
    groupSetKeepLogFiles(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the failover enable setting for the group in the configuration. **/
    groupSetFailoverEnable(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function changes the value for trace events in the group configuration. **/
    groupSetTraceEventsActivated(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. Schemas with a schema binding definition are automatically imported into queries run against any App Server in the group. **/
    groupAddSchema(config: element(configuration), groupId: number, schemas: schema)): element(configuration);

    /** This function deletes a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. **/
    groupDeleteSchema(config: element(configuration), groupId: number, schemas: schema)): element(configuration);

    /** Add one or more namespaces to a Group configuration, which will predefine the namespace(s) for all requests evaluated against any App Server in the Group. **/
    groupAddNamespace(config: element(configuration), groupId: number, namespaces: namespace)): element(configuration);

    /** This function deletes the specified namespaces from the configuration for the specified group. **/
    groupDeleteNamespace(config: element(configuration), groupId: number, namespaces: namespace)): element(configuration);

    /** This function constructs an event element for the specified event name. **/
    groupTraceEvent(eventId: string): event);

    /** This function adds trace events to the configuration. **/
    groupAddTraceEvent(config: element(configuration), groupId: number, events: event)): element(configuration);

    /** This function deletes the specified trace events from the configuration. **/
    groupDeleteTraceEvent(config: element(configuration), groupId: number, events: event)): element(configuration);

    /** This function deletes one or more groups in the configuration. **/
    groupDelete(config: element(configuration), groupIds: number): element(configuration);

    /** This function creates a new group with the specified name in the configuration. The new group has the default values. **/
    groupCreate(config: element(configuration), groupName: string): element(configuration);

    /** This function creates a new group specification with the same settings as the group with the specified ID. The new group configuration will have the specified name. **/
    groupCopy(config: element(configuration), groupId: number, groupName: string): element(configuration);

    /** This function returns the value for the audit enabled setting from the specified group. **/
    groupGetAuditEnabled(config: element(configuration), groupId: number): boolean;

    /** This function changes the audit enabled setting for the group in the configuration. **/
    groupSetAuditEnabled(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function returns the value for the rotate audit files setting from the specified group. **/
    groupGetRotateAuditFiles(config: element(configuration), groupId: number): string;

    /** This function returns the value for the keep audit files setting from the specified group. **/
    groupGetKeepAuditFiles(config: element(configuration), groupId: number): number;

    /** This function changes the rotate audit files setting for the group in the configuration. **/
    groupSetRotateAuditFiles(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function changes the keep audit files setting for the group in the configuration. **/
    groupSetKeepAuditFiles(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
    groupEnableAuditEventType(config: element(configuration), groupId: number, eventType: string): element(configuration);

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
    groupDisableAuditEventType(config: element(configuration), groupId: number, eventType: string): element(configuration);

    /** This function returns the audit event type's enabled setting for the audit configuration. A value of true is returned is the specified event type is set. Otherwise false is returned. **/
    groupGetAuditEventTypeEnabled(config: element(configuration), groupId: number, eventType: string): boolean;

    /** This function restricts the audit configuration by excluding or including by user. **/
    groupSetAuditUserRestriction(config: element(configuration), groupId: number, restrictionType: string, users: string): element(configuration);

    /** This function returns the users excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedUsers(config: element(configuration), groupId: number): number;

    /** This function returns the users included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedUsers(config: element(configuration), groupId: number): number;

    /** This function restricts the audit configuration by excluding or including by role. **/
    groupSetAuditRoleRestriction(config: element(configuration), groupId: number, restrictionType: string, roles: string): element(configuration);

    /** This function returns the roles excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedRoles(config: element(configuration), groupId: number): number;

    /** This function returns the roles included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedRoles(config: element(configuration), groupId: number): number;

    /** This function restricts the audit configuration by excluding or including by document uri(s). **/
    groupSetAuditUriRestriction(config: element(configuration), groupId: number, restrictionType: string, uris: string): element(configuration);

    /** This function returns the uris excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedUris(config: element(configuration), groupId: number): string;

    /** This function returns the uris included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedUris(config: element(configuration), groupId: number): string;

    /** This function restricts the audit configuration by auditing events only if they are "success" or "failure" events. **/
    groupSetAuditOutcomeRestriction(config: element(configuration), groupId: number, outcome: string): element(configuration);

    /** This function returns whether auditing events are restricted by a success or failure outcome. Returns "success","failure", or "both" **/
    groupGetAuditOutcomeRestriction(config: element(configuration), groupId: number): string;

    /** This function adds mimetypes to the configuration. This function always requires a server restart to take effect. **/
    mimetypesAdd(config: element(configuration), mimetypes: mimetype)): element(configuration);

    /** This function deletes mimetypes from the configuration. This function always requires a server restart to take effect. **/
    mimetypesDelete(config: element(configuration), mimetypes: mimetype)): element(configuration);

    /** This function returns all the mimetypes from the configuration. **/
    mimetypesGet(config: element(configuration)): mimetype);

    /** This function constructs a mimetype specification. **/
    mimetype(name: string, extensions: string, format: string): mimetype);

    /** This function constructs a daily scheduled database backup specification. **/
    databaseDailyBackup(backupDir: string, backupPeriod: number, startTime: time, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a daily scheduled incremental database backup specification. **/
    databaseDailyIncrementalBackup(backupDir: string, backupPeriod: number, startTime: time, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs an hourly scheduled database backup specification. **/
    databaseHourlyBackup(backupDir: string, backupPeriod: number, startMinute: number, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs an hourly scheduled incremental database backup specification. **/
    databaseHourlyIncrementalBackup(backupDir: string, backupPeriod: number, startMinute: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a scheduled database backup specification on a number-of-minutes basis. **/
    databaseMinutelyBackup(backupDir: string, backupPeriod: number, maxBackups: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a scheduled incremental database backup specification based on a number of minutes. **/
    databaseMinutelyIncrementalBackup(backupDir: string, backupPeriod: number, backupSecurityDb: boolean, backupSchemasDb: boolean, backupTriggersDb: boolean, includeReplicas?: boolean, incrementalDir?: string, purgeJournalArchive?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): database-backup);

    /** This function constructs a hourly scheduled forest backup specification. **/
    forestHourlyBackup(backupDir: string, backupPeriod: number, startMinute: number): forest-backup);

    /** This function constructs a scheduled forest backup on a number-of-minutes basis. **/
    forestMinutelyBackup(backupDir: string, backupPeriod: number): forest-backup);

    /** This function returns all of the tasks scheduled for the specified group. **/
    groupGetScheduledTasks(config: element(configuration), groupId: number): scheduled-task);

    /** This function adds one or more scheduled tasks to the specified group. **/
    groupAddScheduledTask(config: element(configuration), groupId: number, scheduledTasks: scheduled-task)): element(configuration);

    /** This function deletes one or more scheduled tasks from the specified group. **/
    groupDeleteScheduledTask(config: element(configuration), groupId: number, scheduledTasks: scheduled-task)): element(configuration);

    /** This function constructs a task to be invoked once, at a specific calendar day and time. **/
    groupOneTimeScheduledTask(taskPath: string, taskRoot: string, taskStart: dateTime, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function constructs a task to be invoked at monthly intervals. **/
    groupMonthlyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskMonthDay: number, taskStartTime: time, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function constructs a task to be invoked at weekly intervals. **/
    groupWeeklyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskDays: string, taskStartTime: time, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function constructs a task to be invoked at daily intervals. **/
    groupDailyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskStartTime: time, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function constructs a task to be invoked at hourly intervals. **/
    groupHourlyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskMinute: number, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function constructs a task to be invoked at intervals defined in terms of minutes. **/
    groupMinutelyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskDatabase: number, taskModules: number, taskUser: number, taskHost: number, taskPriority?: string): scheduled-task);

    /** This function returns the id of the SSL certificate template used by the specified App Server. If no template is set for the App Server, 0 is returned. **/
    appserverGetSslCertificateTemplate(config: element(configuration), appserverId: number): number;

    /** This function returns the SSL ciphers set for the App Server. **/
    appserverGetSslCiphers(config: element(configuration), appserverId: number): string;

    /** This function returns the SSL hostname for the specified App Server. If no hostname is set, nothing is returned. **/
    appserverGetSslHostname(config: element(configuration), appserverId: number): string;

    /** This function sets an SSL certificate template for the specified App Server. **/
    appserverSetSslCertificateTemplate(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function sets SSL ciphers for the specified App Server. This is the standard cipher specification string for OpenSSL. **/
    appserverSetSslCiphers(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets an SSL hostname for the specified App Server. The SSL hostname should only be set when a proxy or load balancer is used to represent multiple servers. In this case, you can specify an SSL hostname with this function and all instances of the application server will identify themselves as that host. **/
    appserverSetSslHostname(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function returns true if the SSL v3 protocol is enabled for the specified App Server, or false if SSL v3 is disabled. **/
    appserverGetSslAllowSslv3(config: element(configuration), appserverId: number): boolean;

    /** This function returns true if the TLS protocol is enabled for the specified App Server, or false if TLS is disabled. **/
    appserverGetSslAllowTls(config: element(configuration), appserverId: number): boolean;

    /** This function returns the id(s) of the client certificate authority for the specified App Server. If no client certificate authority is set, this function returns an empty sequence. **/
    appserverGetSslClientCertificateAuthorities(config: element(configuration), appserverId: number): number;

    /** This function enables or disables the SSL v3 protocol for the specified App Server. **/
    appserverSetSslAllowSslv3(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function enables or disables the TLS protocol for the specified App Server. **/
    appserverSetSslAllowTls(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function sets one or more client certificate authorities that sign client certificates for the specified App Server. This function is typically used along with the pki:insert-trusted-certificates and pki:get-trusted-certificate-ids functions to import trusted Certificate Authorities for client certificates. **/
    appserverSetSslClientCertificateAuthorities(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function constructs a daily scheduled forest backup. **/
    forestDailyBackup(backupDir: string, backupPeriod: number, startTime: time): forest-backup);

    /** This function specifies whether to use the default term-frequency normalization (scaled-log), which scales the term frequency based on the size of the document, or to use the unscaled-log, which uses term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
    databaseSetTfNormalization(config: element(configuration), databaseId: number, value: string): element(configuration);

    /** This function returns the current term-frequency normalization setting for the database. The returned value is either (scaled-log), which means to scale the term frequency based on the size of the document, or unscaled-log, which means to use term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
    databaseGetTfNormalization(config: element(configuration), databaseId: number): string;

    /** This function returns true if SSL is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslEnabled(config: element(configuration), groupId: number): boolean;

    /** This function returns true if the SSL v3 protocol is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslAllowSslv3(config: element(configuration), groupId: number): boolean;

    /** This function returns true if the TLS protocol is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslAllowTls(config: element(configuration), groupId: number): boolean;

    /** This function returns the SSL ciphers set for the group. **/
    groupGetXdqpSslCiphers(config: element(configuration), groupId: number): string;

    /** This function enables or disables SSL for the group. **/
    groupSetXdqpSslEnabled(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function enables or disables the SSL v3 protocol for the specified group. **/
    groupSetXdqpSslAllowSslv3(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function enables or disables the TLS protocol for the specified group. **/
    groupSetXdqpSslAllowTls(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function sets SSL ciphers for the specified group. This is the standard cipher specification string for OpenSSL. **/
    groupSetXdqpSslCiphers(config: element(configuration), groupId: number, value: string): element(configuration);

    /** This function returns true if a client certificate is required for the specified App Server. Otherwise, it returns false. **/
    appserverGetSslRequireClientCertificate(config: element(configuration), appserverId: number): boolean;

    /** This function determines whether or not a client certificate is required for the specified App Server. **/
    appserverSetSslRequireClientCertificate(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function determines whether or not the specified database exists. Returns true if the database exists, otherwise false is returned. **/
    databaseExists(config: element(configuration), databaseName: string): boolean;

    /** This function determines whether or not the specified forest exists. Returns true if the forest exists, otherwise false is returned. **/
    forestExists(config: element(configuration), forestName: string): boolean;

    /** This function returns the ID of the database that uses the specified forest. **/
    forestGetDatabase(config: element(configuration), forestId: number): number;

    /** This function returns the IDs of the forest replicas for the specified forest. If it returns the empty sequence, then no replacas are assigned to the specified forest. **/
    forestGetReplicas(config: element(configuration), forestId: number): number;

    /** This function adds a forest replica to a master forest. **/
    forestAddReplica(config: element(configuration), masterId: number, replicaId: number): element(configuration);

    /** This function removes a forest replica from a master forest. **/
    forestRemoveReplica(config: element(configuration), masterId: number, replicaId: number): element(configuration);

    /** This function determines whether or not the specified Host exists. Returns true if the Host exists, otherwise false is returned. **/
    hostExists(config: element(configuration), hostName: string): boolean;

    /** This function determines whether or not the specified App Server exists. Returns true if the App Server exists, otherwise false is returned. **/
    appserverExists(config: element(configuration), groupIds: number, appserverName: string): boolean;

    /** This function determines whether or not the specified Group exists. Returns true if the Group exists, otherwise false is returned. **/
    groupExists(config: element(configuration), groupName: string): boolean;

    /** This function sets the field value positions setting for the specified database in the configuration. **/
    databaseSetFieldValuePositions(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function sets the field value searches setting for the specified database in the configuration. **/
    databaseSetFieldValueSearches(config: element(configuration), databaseId: number, fieldName: string, value: boolean): element(configuration);

    /** This function gets the field value positions setting for the specified database in the configuration. **/
    databaseGetFieldValuePositions(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function returns the field value search setting for the specified field. **/
    databaseGetFieldValueSearches(config: element(configuration), databaseId: number, fieldName: string): boolean;

    /** This function sets the preload-replica-mapped-data setting for the specified database. **/
    databaseSetPreloadReplicaMappedData(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function returns the preload replica mapped data setting for the specified database from the configuration. **/
    databaseGetPreloadReplicaMappedData(config: element(configuration), databaseId: number): boolean;

    /** This function returns a replica database configuration. Use the output of this function in the admin:database-set-foreign-replicas function to place the replica database configuration into the cluster configuration. **/
    databaseForeignReplica(foreignClusterId: number, foreignDatabaseId: number, connectForestsByName: boolean, lagLimit: number, replicationEnabled?: boolean, queueSize?: number): foreign-replica);

    /** This function returns the id of the replica cluster from the replica database configuration. **/
    databaseForeignReplicaGetClusterId(foreignReplica: foreign-replica)): number;

    /** This function returns the id of the replica database from the replica database configuration. **/
    databaseForeignReplicaGetDatabaseId(foreignReplica: foreign-replica)): number;

    /** This function returns the connect-forests-by-name setting from the replica database configuration. This function must be executed on the master cluster. **/
    databaseForeignReplicaGetConnectForestsByName(foreignReplica: foreign-replica)): boolean;

    /** This function returns the lag limit value from the replica database configuration. **/
    databaseForeignReplicaGetLagLimit(foreignReplica: foreign-replica)): number;

    /** This function sets the lag limit value on a replica database configuration. **/
    databaseForeignReplicaSetLagLimit(foreignReplica: foreign-replica), lagLimit: number): foreign-replica);

    /** This function returns the enabled flag from the replica database configuration. **/
    databaseForeignReplicaGetReplicationEnabled(foreignReplica: foreign-replica)): boolean;

    /** This function sets the enabled flag on a replica database configuration. **/
    databaseForeignReplicaSetReplicationEnabled(foreignReplica: foreign-replica), enabled: boolean): foreign-replica);

    /** This function returns a master database configuration. Use the output of this function in the admin:database-set-foreign-master function to set the master database configuration. **/
    databaseForeignMaster(foreignClusterId: number, foreignDatabaseId: number, connectForestsByName: boolean): foreign-master);

    /** This function returns the id of the cluster from the specified foreign master configuration. **/
    databaseForeignMasterGetClusterId(foreignMaster: foreign-master)): number;

    /** This function returns the id of the foreign master database. This function must be executed on the replica cluster. **/
    databaseForeignMasterGetDatabaseId(foreignMaster: foreign-master)): number;

    /** This function returns the connect-forests-by-name setting from the master database configuration. This function must be executed on the replica cluster. **/
    databaseForeignMasterGetConnectForestsByName(foreignMaster: foreign-master)): boolean;

    /** This function configures the specified replica database to receive replicated data from the specified foreign master. This function must be executed on the replica cluster. **/
    databaseSetForeignMaster(config: element(configuration), databaseId: number, foreignMaster: foreign-master)): element(configuration);

    /** This function removes the specified master database from the database replication configuration on the replica host. This function must be executed on the replica cluster. **/
    databaseDeleteForeignMaster(config: element(configuration), databaseId: number): element(configuration);

    /** This function returns the configuration for the foreign master database. This function must be executed on the replica host. **/
    databaseGetForeignMaster(config: element(configuration), databaseId: number): foreign-master);

    /** This function adds one or more replica databases to the database replication configuration. This function must be executed on the master cluster. **/
    databaseAddForeignReplicas(config: element(configuration), databaseId: number, replicas: foreign-replica)): element(configuration);

    /** This function sets the foreign replica database configuration. This function must be executed on the master cluster. **/
    databaseSetForeignReplicas(config: element(configuration), databaseId: number, replicas: foreign-replica)): element(configuration);

    /** This function deletes the foreign replica database configurations for the specified master database. This function must be executed on the master cluster. **/
    databaseDeleteForeignReplicas(config: element(configuration), databaseId: number, foreignReplicas: foreign-replica)): element(configuration);

    /** This function returns the configuration elements of the replica databases associated with the master database specified by database-id. This function must be executed on the master cluster. **/
    databaseGetForeignReplicas(config: element(configuration), databaseId: number): foreign-replica);

    /** This function returns a replica forest configuration. Use the output of this function in the admin:forest-set-foreign-replicas function to place the replica forest configuration into the cluster configuration. This function must be executed on the master host. **/
    forestForeignReplica(foreignClusterId: number, foreignDatabaseId: number, foreignForestId: number): foreign-replica);

    /** This function returns the id of the replica cluster from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetClusterId(foreignReplica: foreign-replica)): number;

    /** This function returns the id of the replica database from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetDatabaseId(foreignReplica: foreign-replica)): number;

    /** This function returns the id of the replica forest from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetForestId(foreignReplica: foreign-replica)): number;

    /** This function creates a replicaton configuration element for the specified master forest. This function must be executed on the replica cluster. **/
    forestForeignMaster(foreignClusterId: number, foreignDatabaseId: number, foreignForestId: number): foreign-master);

    /** This function returns the ID for the cluster from the foreign master forest configuration element. **/
    forestForeignMasterGetClusterId(foreignMaster: foreign-master)): number;

    /** This function returns the id for the database from the foreign master forest configuration element. **/
    forestForeignMasterGetDatabaseId(foreignMaster: foreign-master)): number;

    /** This function returns the id for the forest from the foreign master forest configuration element. **/
    forestForeignMasterGetForestId(foreignMaster: foreign-master)): number;

    /** This function writes the specified foreign master forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the replica cluster. **/
    forestSetForeignMaster(config: element(configuration), forestId: number, foreignMaster: foreign-master)): element(configuration);

    /** This function deletes the master forest associated with the specified replica forest from the database replication configuration. This function must be executed on the replica host. **/
    forestDeleteForeignMaster(config: element(configuration), forestId: number): element(configuration);

    /** This function returns the replication configuration for the master forest associated with the specified replica forest. This function must be executed on the replica host. **/
    forestGetForeignMaster(config: element(configuration), forestId: number): foreign-master);

    /** This function adds the replica forest that is associated with the specified master forest to the database replication configuration. This function must be executed on the master host. **/
    forestAddForeignReplicas(config: element(configuration), forestId: number, foreignReplicas: foreign-replica)): element(configuration);

    /** This function writes the specified replica forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the master cluster. **/
    forestSetForeignReplicas(config: element(configuration), forestId: number, foreignReplicas: foreign-replica)): element(configuration);

    /** This function deletes the foreign replica of the specified forest on the master host. **/
    forestDeleteForeignReplicas(config: element(configuration), forestId: number, foreignReplicas: foreign-replica)): element(configuration);

    /** This function returns the foreign replicas configuration element. This function must be executed on the master cluster. **/
    forestGetForeignReplicas(config: element(configuration), forestId: number): foreign-replica);

    /** This function returns the port used by the specified host to listen for communications from foreign hosts. **/
    hostGetForeignPort(config: element(configuration), hostId: number): number;

    /** This function configures the specified domestic host to listen for communications from foreign hosts over the specified port. **/
    hostSetForeignPort(config: element(configuration), hostId: number, value: number): element(configuration);

    /** This function returns the id of this cluster. **/
    clusterGetId(config: element(configuration)): number;

    /** This function returns the name of this cluster. **/
    clusterGetName(config: element(configuration)): string;

    /** This function sets the name for this cluster. **/
    clusterSetName(config: element(configuration), name: string): element(configuration);

    /** This function sets the SSL certificate used to establish secure communication with this cluster. **/
    clusterSetXdqpSslCertificate(config: element(configuration), value: string): element(configuration);

    /** This function returns the SSL certificate used to establish secure communication with this cluster. **/
    clusterGetXdqpSslCertificate(config: element(configuration)): string;

    /** This function returns the private key for the cluster. **/
    clusterGetXdqpSslPrivateKey(config: element(configuration)): string;

    /** This function sets the bootstrap hosts for the domestic cluster. Bootstrap hosts are accessed by hosts on foreign clusters to establish communication with the domestic cluster. **/
    clusterSetXdqpBootstrapHosts(config: element(configuration), hostIds: number): element(configuration);

    /** This function returns the ids of the bootstrap hosts configured for this cluster. **/
    clusterGetXdqpBootstrapHosts(config: element(configuration)): number;

    /** This function configures a foreign host to be set by the admin:foreign-cluster-set-bootstrap-hosts function as the bootstrap host for the foreign cluster. **/
    foreignHost(hostId: number, hostName: string, connectPort: number): foreign-host);

    /** This function returns the id of the foreign bootstrap host. **/
    foreignHostGetId(fh: foreign-host)): number;

    /** This function returns the name of the foreign bootstrap host. **/
    foreignHostGetName(fh: foreign-host)): string;

    /** This function returns the number of the port configured for the foreign bootstrap host. **/
    foreignHostGetConnectPort(fh: foreign-host)): number;

    /** This function deletes the configuration for the specified foreign cluster. **/
    foreignClusterDelete(config: element(configuration), clusterId: number): element(configuration);

    /** This function replaces a configuration for a foreign cluster with a new configuration. **/
    foreignClusterReplace(config: element(configuration), clusterId: number, clusterName: string, xdqpTimeout: number, hostTimeout: number, sslCertificate: string, xdqpSslEnabled: boolean, xdqpSslAllowSslv3: boolean, xdqpSslAllowTls: boolean, xdqpSslCiphers: string, foreignBootstrapHosts: foreign-host)): element(configuration);

    /** This function creates a complete configuration for a foreign cluster. **/
    foreignClusterCreate(config: element(configuration), clusterId: number, clusterName: string, xdqpTimeout: number, hostTimeout: number, sslCertificate: string, xdqpSslEnabled: boolean, xdqpSslAllowSslv3: boolean, xdqpSslAllowTls: boolean, xdqpSslCiphers: string, foreignBootstrapHosts: foreign-host)): element(configuration);

    /** This function returns the ids of the foreign clusters. **/
    clusterGetForeignClusterIds(config: element(configuration)): number;

    /** This function returns the id of the specified foreign cluster. **/
    clusterGetForeignClusterId(config: element(configuration), name: string): number;

    /** This function returns the name of the foreign cluster. **/
    foreignClusterGetName(config: element(configuration), clusterId: number): string;

    /** This function sets the name of a foreign cluster. **/
    foreignClusterSetName(config: element(configuration), clusterId: number, clusterName: string): element(configuration);

    /** This function sets the timeout (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. By default, the XDQP timeout setting is 10 seconds. **/
    foreignClusterSetXdqpTimeout(config: element(configuration), clusterId: number, xdqpTimeout: number): element(configuration);

    /** This function returns the timeout setting (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. **/
    foreignClusterGetXdqpTimeout(config: element(configuration), clusterId: number): number;

    /** This function sets the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. By default, the host timeout setting is 30 seconds. **/
    foreignClusterSetHostTimeout(config: element(configuration), clusterId: number, hostTimeout: number): element(configuration);

    /** This function returns the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. **/
    foreignClusterGetHostTimeout(config: element(configuration), clusterId: number): number;

    /** This function returns the SSL certificate used to communicate with hosts in the foreign cluster. **/
    foreignClusterGetSslCertificate(config: element(configuration), clusterId: number): string;

    /** This function sets the specified SSL certificate for secure communication with hosts in a foreign cluster. This certificate is shared by all hosts in the cluster when communicating with foreign hosts. **/
    foreignClusterSetSslCertificate(config: element(configuration), clusterId: number, sslCertificate: string): element(configuration);

    /** This function returns true if SSL is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslEnabled(config: element(configuration), clusterId: number): boolean;

    /** This function enables or disables SSL for the foreign cluster. **/
    foreignClusterSetXdqpSslEnabled(config: element(configuration), clusterId: number, value: boolean): element(configuration);

    /** This function returns true if the SSL v3 protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslAllowSslv3(config: element(configuration), clusterId: number): boolean;

    /** This function enables or disables the SSL v3 protocol for the specified foreign cluster. **/
    foreignClusterSetXdqpSslAllowSslv3(config: element(configuration), clusterId: number, value: boolean): element(configuration);

    /** This function returns true if the TLS protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslAllowTls(config: element(configuration), clusterId: number): boolean;

    /** This function enables or disables the TLS protocol for the specified foreign cluster. **/
    foreignClusterSetXdqpSslAllowTls(config: element(configuration), clusterId: number, value: boolean): element(configuration);

    /** This function returns the SSL ciphers set for the specified foreign cluster. **/
    foreignClusterGetXdqpSslCiphers(config: element(configuration), clusterId: number): string;

    /** This function sets SSL ciphers for the specified foreign cluster. The value parameter can be any standard cipher specification string for OpenSSL. **/
    foreignClusterSetXdqpSslCiphers(config: element(configuration), clusterId: number, value: string): element(configuration);

    /** This function returns one or more configuration elements that identify the bootstrap hosts on the specified foreign cluster. **/
    foreignClusterGetBootstrapHosts(config: element(configuration), clusterId: number): foreign-host);

    /** This function identifies the foreign host to be used to bootstrap communication with the foreign cluster. When a bootstrap host on a foreign cluster initially starts, it will bootstrap communications by establishing a connection to one or more of the hosts on this cluster. Once a connection has been established between cluster hosts, the bootstrap host retrieves configuration information to identify which foreign hosts are responsible for specific foreign forests. **/
    foreignClusterSetBootstrapHosts(config: element(configuration), clusterId: number, bootstrapHosts: foreign-host)): element(configuration);

    /** This function returns the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
    databaseGetLargeSizeThreshold(config: element(configuration), databaseId: number): number;

    /** This function returns the directory path set in the fast data directory field for the specified forest. **/
    forestGetFastDataDirectory(config: element(configuration), forestId: number): string;

    /** This function is executed on the master cluster to return the replication configuration for the specified local database to the specified foreign replica cluster. **/
    clusterGetForeignReplicaDatabases(config: element(configuration), foreignClusterId: number, databaseIds: number): foreign-replicas);

    /** This function is executed on a replica cluster to return the replication configuration for the specified local database from the specified foreign master cluster. **/
    clusterGetForeignMasterDatabase(config: element(configuration), foreignClusterId: number, databaseIds: number): foreign-master);

    /** This function returns the replica configuration on a foreign cluster. **/
    databaseGetConfigForForeignReplicasOnForeignCluster(config: element(configuration), foreignClusterId: number): database);

    /** This function returns the master configuration on a foreign cluster. **/
    databaseGetConfigForForeignMasterOnForeignCluster(config: element(configuration), foreignClusterId: number): database);

    /** This function returns the value for the default output serialization method setting for the specified App Server. **/
    appserverGetOutputMethod(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output byte order mark setting for the specified App Server. **/
    appserverGetOutputByteOrderMark(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output CDATA section namespace URI setting for the specified App Server. **/
    appserverGetOutputCdataSectionNamespaceUri(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output CDATA section localname setting for the specified App Server. **/
    appserverGetOutputCdataSectionLocalname(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the public doctype output setting for the specified App Server. **/
    appserverGetOutputDoctypePublic(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the system doctype output setting for the specified App Server. **/
    appserverGetOutputDoctypeSystem(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output escape URI attributes setting for the specified App Server. **/
    appserverGetOutputEscapeUriAttributes(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output include content type setting for the specified App Server. **/
    appserverGetOutputIncludeContentType(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output indent setting for the specified App Server. **/
    appserverGetOutputIndent(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output indent untyped setting for the specified App Server. **/
    appserverGetOutputIndentUntyped(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output media type setting for the specified App Server. **/
    appserverGetOutputMediaType(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output normalization form setting for the specified App Server. **/
    appserverGetOutputNormalizationForm(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output omit XML declaration setting for the specified App Server. **/
    appserverGetOutputOmitXmlDeclaration(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output standalone setting for the specified App Server. **/
    appserverGetOutputStandalone(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output undeclare prefixes setting for the specified App Server. **/
    appserverGetOutputUndeclarePrefixes(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output version setting for the specified App Server. **/
    appserverGetOutputVersion(config: element(configuration), appserverId: number): string;

    /** This function returns the value for the output include default attributes setting for the specified App Server. **/
    appserverGetOutputIncludeDefaultAttributes(config: element(configuration), appserverId: number): string;

    /** This function configures the default output serialization method for the specified App Server. **/
    appserverSetOutputMethod(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether for the specified App Server the output sequence of octets is or is not to be preceded by a byte order mark by default. **/
    appserverSetOutputByteOrderMark(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the namespace URI for any CDATA section localnames configured for the specified App Server. **/
    appserverSetOutputCdataSectionNamespaceUri(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the default element localname or list of element localnames to be output as CDATA sections for the specified App Server. **/
    appserverSetOutputCdataSectionLocalname(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures a default public identifier to use on the emitted DOCTYPE for the specified App Server. **/
    appserverSetOutputDoctypePublic(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures a default system identifier to use on the emitted DOCTYPE for the specified App Server. **/
    appserverSetOutputDoctypeSystem(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether or not to apply Unicode normalization, percent-encoding, and HTML escaping when serializing URI attributes by default for the specified App Server. **/
    appserverSetOutputEscapeUriAttributes(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether or not to include the content-type declaration when serializing nodes for the specified App Server. **/
    appserverSetOutputIncludeContentType(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether or not to pretty-print (indent) typed XML (that is, XML for which there is an in-scope schema) output for the specified App Server. **/
    appserverSetOutputIndent(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether or not to pretty-print (indent) untyped XML (that is, XML for which there is no in-scope schema) output for the specified App Server. **/
    appserverSetOutputIndentUntyped(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets the default serialization media type for the specified App Server. **/
    appserverSetOutputMediaType(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function sets a Unicode normalization form to be applied by default to serialized output for the specified App Server. **/
    appserverSetOutputNormalizationForm(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether serialized output for the specified App Server should omit the inclusion of an XML declaration by default. **/
    appserverSetOutputOmitXmlDeclaration(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether for the specified App Server an XML delcaration in serialized output should include a standalone attribute by default. **/
    appserverSetOutputStandalone(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether by default, serialization for the specified App Server should undeclare the namespace prefix of any child element that does not bind the prefix of its parent element. **/
    appserverSetOutputUndeclarePrefixes(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function stipulates a version of the default serialization method associated with the specified App Server. **/
    appserverSetOutputVersion(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function configures whether for the specified App Server, attributes defaulted with a schema should be included in the serialization. **/
    appserverSetOutputIncludeDefaultAttributes(config: element(configuration), appserverId: number, value: string): element(configuration);

    /** This function adds a foreign database to a database **/
    databaseAddForeignDatabase(config: element(configuration), databaseId: number, foreignClusterId: number, foreignDatabaseId: number): element(configuration);

    /** This function removes a foreign database from a database **/
    databaseDeleteForeignDatabase(config: element(configuration), databaseId: number, foreignClusterId: number, foreignDatabaseId: number): element(configuration);

    /** This function constructs a namespace element with the specified prefix and URI. **/
    databasePathNamespace(prefix: string, namespaceUri: string): path-namespace);

    /** This function returns the value of any namespace definitions predefined for the specified database. If none are defined, returns the empty sequence. **/
    databaseGetPathNamespaces(config: element(configuration), databaseId: number): path-namespace);

    /** This function returns the prefixes of all the namespaces that are in use by some path or geospatial path index. If none is used by any path, returns the empty sequence. **/
    databaseInUsePathNamespacePrefixes(config: element(configuration), databaseId: number): string;

    /** Add one or more namespaces to a database configuration, which will predefine the namespace(s) for all XPath expressions used in range index definitions. **/
    databaseAddPathNamespace(config: element(configuration), databaseId: number, pathNamespaces: path-namespace)): element(configuration);

    /** This function deletes the specified namespaces from the configuration for the specified database. If the namespace is already in use in an index path expression, then ADMIN-PATHNAMESPACEINUSE error is returned. **/
    databaseDeletePathNamespace(config: element(configuration), databaseId: number, pathNamespaces: path-namespace)): element(configuration);

    /** This function constructs a path range index specification. **/
    databaseRangePathIndex(databaseId: number, scalarType: string, pathexpr: string, collation: string, rangeValuePositions: boolean, invalidValues: string): range-path-index);

    /** This function returns the range path indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangePathIndexes(config: element(configuration), databaseId: number): range-path-index);

    /** This function adds a range path index to the specified database in the configuration. **/
    databaseAddRangePathIndex(config: element(configuration), databaseId: number, rangeIndexes: range-path-index)): element(configuration);

    /** This function deletes a range path index for the specified database in the configuration. **/
    databaseDeleteRangePathIndex(config: element(configuration), databaseId: number, rangeIndexes: range-path-index)): element(configuration);

    /** This function constructs a geospatial path index specification. For usage details, see Geospatial Path Range Indexes in the Search Developer's Guide. **/
    databaseGeospatialPathIndex(pathexpr: string, coordinateSystem: string, rangeValuePositions: boolean, pointFormat: string, invalidValues: string): geospatial-path-index);

    /** This function returns the geospatial path indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialPathIndexes(config: element(configuration), databaseId: number): geospatial-path-index);

    /** This function adds a range path index to the specified database in the configuration. **/
    databaseAddGeospatialPathIndex(config: element(configuration), databaseId: number, geospatialPathIndexes: geospatial-path-index)): element(configuration);

    /** This function deletes a geospatial path index for the specified database in the configuration. **/
    databaseDeleteGeospatialPathIndex(config: element(configuration), databaseId: number, geospatialPathIndexes: geospatial-path-index)): element(configuration);

    /** This function returns the ids of all of the ODBC App Servers in the specified group. **/
    groupGetOdbcserverIds(config: element(configuration), groupId: number): number;

    /** This function creates a new ODBC App Server with the specified name, root, and port in the configuration. **/
    odbcServerCreate(config: element(configuration), groupId: number, appserverName: string, root: string, port: number, modulesId: any, databaseId: number): element(configuration);

    /** This function returns true when OpenSSL FIPS 140-2 mode is enabled in the cluster configuration. If OpenSSL FIPS 140-2 mode is not enabled, false is returned. **/
    clusterGetSslFipsEnabled(config: element(configuration)): boolean;

    /** This function enables or disables OpenSSL FIPS 140-2 mode for the cluster. **/
    clusterSetSslFipsEnabled(config: element(configuration), flag: boolean): element(configuration);

    /** This function validates the specified path expression, along with any namespaces used in the path expression. **/
    databaseValidatePathExpression(config: element(configuration), databaseId: number, pathexpr: string, ignoreNs: boolean): boolean;

    /** This function returns any undefined namespace prefixes used in a path expression. **/
    databaseValidatePathNamespaces(config: element(configuration), databaseId: number, pathexpr: string): string;

    /** This function gets the value for the I/O background limit that controls the I/O resoources that I/O tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
    groupGetBackgroundIoLimit(config: element(configuration), groupId: number): number;

    /** This function sets a limit on the amount of I/O that background tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
    groupSetBackgroundIoLimit(config: element(configuration), groupId: number, maxMegabytesPerSecond: number): element(configuration);

    /** This function gets the simple storage service internet domain name for hosts in the group. **/
    groupGetS3Domain(config: element(configuration), groupId: number): string;

    /** This function sets the simple storage service internet domain name for hosts in the group. **/
    groupSetS3Domain(config: element(configuration), groupId: number, domain: string): element(configuration);

    /** This function gets the simple storage service protocol for hosts in the group. **/
    groupGetS3Protocol(config: element(configuration), groupId: number): string;

    /** This function sets the simple storage service protocol for hosts in the group. **/
    groupSetS3Protocol(config: element(configuration), groupId: number, protocol: string): element(configuration);

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
    groupGetS3ServerSideEncryption(config: element(configuration), groupId: number): string;

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
    groupSetS3ServerSideEncryption(config: element(configuration), groupId: number, protocol: string): element(configuration);

    /** This function returns the ID of the security database for the specified group from the configuration. **/
    groupGetSecurityDatabase(config: element(configuration), groupId: number): number;

    /** This function sets the security database for a group to the specified database in the configuration. **/
    groupSetSecurityDatabase(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function gets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. **/
    appserverGetRewriteResolvesGlobally(config: element(configuration), appserverId: number): boolean;

    /** This function sets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. This function requires a restart of MarkLogic Server for a change to this setting to take effect. **/
    appserverSetRewriteResolvesGlobally(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function is a constructor for field-path element. The field path element is used to construct a field. **/
    databaseFieldPath(fieldPath: string, weight: double): field-path);

    /** This function constructs a field specification that has field paths. **/
    databasePathField(fieldName: string, fieldPaths: field-path)): field);

    /** This function checks if the paths conform to the permissible XPath syntax. If any of the paths doesn't, it will return an error. Conformance to the permissible syntax for an individual path cal also be checked using function cts:valid-index-path. **/
    databaseValidateFieldPaths(config: element(configuration), databaseId: number, fieldPaths: field-path)): void;

    /** For a given sequence of fields, this function validates all the paths on each field using admin:database-validate-field-paths call. **/
    databaseValidatePathFields(config: element(configuration), databaseId: number, fields: field)): void;

    /** This function deletes paths from a specified field. **/
    databaseDeleteFieldPaths(config: element(configuration), databaseId: number, fieldName: string, fieldPaths: field-path)): element(configuration);

    /** This function adds given paths to the field specified by field-name. **/
    databaseAddFieldPaths(config: element(configuration), databaseId: number, fieldName: string, fieldPaths: field-path)): element(configuration);

    /** This function returns all the paths on a given field. **/
    databaseGetFieldPaths(config: element(configuration), databaseId: number, fieldName: string): field-path);

    /** This function renames a forest. **/
    forestRename(config: element(configuration), forestId: number, newName: string): element(configuration);

    /** This function sets the triple index on or off for a database. **/
    databaseSetTripleIndex(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the triple positions of a database to true or false. **/
    databaseSetTriplePositions(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the size, in megabytes, of the in-memory triple index. This is used for memory to manage triple index data in in-memory stands. **/
    databaseSetInMemoryTripleIndexSize(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function returns true if the triple index is enabled for the specified database, false if it is not enabled. **/
    databaseGetTripleIndex(config: element(configuration), databaseId: number): boolean;

    /** This function returns triple positions setting of a database. **/
    databaseGetTriplePositions(config: element(configuration), databaseId: number): boolean;

    /** This function returns the in memory triple index size setting (in megabytes) for the specified database from the configuration. **/
    databaseGetInMemoryTripleIndexSize(config: element(configuration), databaseId: number): number;

    /** This function returns the value of the triple cache size for the group. **/
    groupGetTripleCacheSize(config: element(configuration), groupId: number): number;

    /** This function returns the number of triple cache partitions configured for the group. **/
    groupGetTripleCachePartitions(config: element(configuration), groupId: number): number;

    /** This function returns the size of triple value cache configured for the group. **/
    groupGetTripleValueCacheSize(config: element(configuration), groupId: number): number;

    /** This function returns the number of triple value cache partitions configured for the group. **/
    groupGetTripleValueCachePartitions(config: element(configuration), groupId: number): number;

    /** This function sets the number of triple cache partitions to allocate. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCacheSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of partitions to allocate for the triple index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCachePartitions(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the size of the value cache for the triple index. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCacheSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of partitons to allocate for the triple value index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCachePartitions(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function gets the timeout value for the triple cache. **/
    groupGetTripleCacheTimeout(config: element(configuration), groupId: number): number;

    /** This function gets the timeout value for the triple value cache. **/
    groupGetTripleValueCacheTimeout(config: element(configuration), groupId: number): number;

    /** This function sets the timeout value for the triple cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCacheTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the timeout value for the triple value cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCacheTimeout(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function returns the value of any "using" namespaces predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetUsingNamespaces(config: element(configuration), appserverId: number): using-namespace);

    /** This function returns the value of any module locations predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetModuleLocations(config: element(configuration), appserverId: number): module-location);

    /** Add one or more "using" namespaces to an App Server configuration, which add the namespaces to the namespace path for all requests evaluated against that App Server. **/
    appserverAddUsingNamespace(config: element(configuration), appserverId: number, namespaces: using-namespace)): element(configuration);

    /** Delete one or more "using" namespaces from an App Server configuration. **/
    appserverDeleteUsingNamespace(config: element(configuration), appserverId: number, namespaces: using-namespace)): element(configuration);

    /** Add one or more module namespace to location mappings to an App Server configuration. The mappings are used to look up a location for an XQuery library module for any request on that App Server when the library module is requested using only the module namespace URI. **/
    appserverAddModuleLocation(config: element(configuration), appserverId: number, moduleLocations: module-location)): element(configuration);

    /** This function returns the value of any "using" namespaces predefined for the specified Group. If none are defined, returns the empty sequence. **/
    groupGetUsingNamespaces(config: element(configuration), groupId: number): using-namespace);

    /** This function returns the value of any module locations predefined for the specified Group. If none are defined, returns the empty sequence. **/
    groupGetModuleLocations(config: element(configuration), groupId: number): module-location);

    /** Delete one or more module location bindings from an App Server configuration. **/
    appserverDeleteModuleLocation(config: element(configuration), appserverId: number, moduleLocations: module-location)): element(configuration);

    /** This function constructs a using namespace element with the specified URI. **/
    groupUsingNamespace(namespaceUri: string): using-namespace);

    /** This function constructs a module namespace element with the specified namespace URI and location. **/
    groupModuleLocation(namespaceUri: string, location: string): module-location);

    /** Add one or more "using" namespaces to a Group configuration, which add the namespaces to the namespace path for all requests evaluated against any App Server in the Group. **/
    groupAddUsingNamespace(config: element(configuration), groupId: number, namespaces: using-namespace)): element(configuration);

    /** Delete one or more "using" namespaces from a Group configuration. **/
    groupDeleteUsingNamespace(config: element(configuration), groupId: number, namespaces: using-namespace)): element(configuration);

    /** Add one or more module namespace to location mappings to a Group configuration. The mappings are used to look up a location for an XQuery library module for any request on any App Server in that group when the library module is requested using only the module namespace URI. **/
    groupAddModuleLocation(config: element(configuration), groupId: number, moduleLocations: module-location)): element(configuration);

    /** Delete one or more module location bindings from a Group configuration. **/
    groupDeleteModuleLocation(config: element(configuration), groupId: number, moduleLocations: module-location)): element(configuration);

    /** This function constructs a custom tokenizer override. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseTokenizerOverride(character: string, class: string): tokenizer-override);

    /** This function fetches any custom tokenizer override specifications for the specified field and database. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseGetFieldTokenizerOverrides(config: element(configuration), databaseId: number, fieldName: string): tokenizer-override);

    /** This function adds tokenizer overrides for the specified field of the specified database. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseAddFieldTokenizerOverride(config: element(configuration), databaseId: number, fieldName: string, tokenizerOverrides: tokenizer-override)): element(configuration);

    /** This function deletes the field's tokenizer override in the specified database from the configuration. **/
    databaseDeleteFieldTokenizerOverride(config: element(configuration), databaseId: number, fieldName: string, tokenizerOverrides: tokenizer-override)): element(configuration);

    /** This function sets the reblanacer enable setting for the specified database in the configuration. **/
    databaseSetRebalancerEnable(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function sets the rebalancer throttle setting for the specified database in the configuration. **/
    databaseSetRebalancerThrottle(config: element(configuration), databaseId: number, value: number): element(configuration);

    /** This function returns the rebalancer enable setting for the specified database from the configuration. **/
    databaseGetRebalancerEnable(config: element(configuration), databaseId: number): boolean;

    /** This function returns the rebalancer throttle setting for the specified database from the configuration. **/
    databaseGetRebalancerThrottle(config: element(configuration), databaseId: number): number;

    /** This function sets the assignment policy for the specified database in the configuration. An assignment policy can be created by either admin:bucket-assignment-policy() or admin:statistical-assignment-policy() or admin:range-assignment-policy($partition-key, $lower-bound-included) or admin:legacy-assignment-policy(). **/
    databaseSetAssignmentPolicy(config: element(configuration), databaseId: number, policy: assignment-policy)): element(configuration);

    /** This function returns the assignment policy for the specified database from the configuration. **/
    databaseGetAssignmentPolicy(config: element(configuration), databaseId: number): assignment-policy);

    /** This function returns an element that represents the legacy assignment policy. **/
    legacyAssignmentPolicy(): assignment-policy);

    /** This function returns an element that represents the bucket assignment policy. **/
    bucketAssignmentPolicy(): assignment-policy);

    /** This function returns an element that represents the statistical assignment policy. **/
    statisticalAssignmentPolicy(): assignment-policy);

    /** This function returns fn:true() if the specificed forest is retired and fn:false() the specificed forest is not retired. **/
    databaseIsForestRetired(config: element(configuration), databaseId: number, forestId: number): boolean;

    /** This function returns fn:true() if the specificed forest is employed and fn:false() the specificed forest is not employed. **/
    databaseIsForestEmployed(config: element(configuration), databaseId: number, forestId: number): boolean;

    /** This function "retires" the specified forest in the configuration. **/
    databaseRetireForest(config: element(configuration), databaseId: number, forestId: number): element(configuration);

    /** This function "employs" the specified forest in the configuration. **/
    databaseEmployForest(config: element(configuration), databaseId: number, forestId: number): element(configuration);

    /** This function reorders the forests in the specified database. **/
    databaseReorderForests(config: element(configuration), databaseId: number, forestIds: number): element(configuration);

    /** This function returns the rebalancer enable setting for the specified forest from the configuration. **/
    forestGetRebalancerEnable(config: element(configuration), forestId: number): boolean;

    /** This function sets the reblanacer enable setting for the specified forest in the configuration. **/
    forestSetRebalancerEnable(config: element(configuration), forestId: number, value: boolean): element(configuration);

    /** This function returns the list of all retired forests for the specified database from the configuration. **/
    databaseGetRetiredForests(config: element(configuration), databaseId: number): number;

    /** This function returns an element that represents the range assignment policy. Use the admin:database-set-assignment-policy function to set the assignment policy. **/
    rangeAssignmentPolicy(partitionKey: reference, lowerBoundIncluded: boolean): assignment-policy);

    /** This function returns the range policy partition key set for the database. **/
    databaseGetRangePolicyPartitionKey(rangePolicy: assignment-policy)): reference;

    /** This function returns the lower bound of the range configured on the forest. **/
    forestGetRangePolicyLowerBound(config: element(configuration), forestId: number): item();

    /** This function returns the upper bound of the range configured on the forest. **/
    forestGetRangePolicyUpperBound(config: element(configuration), forestId: number): item();

    /** This function returns fn:false() if the specificed forest has neither the lower boundary nor the upper boundary set. Otherwise, it returns fn:true(). **/
    forestIsRangePolicyRangeSet(config: element(configuration), forestId: number): item();

    /** This function sets the boundaries of the range on a forest. **/
    forestSetRangePolicyRange(config: element(configuration), forestId: number, lowerBound: item(), upperBound: item()): element(configuration);

    /** This function returns the internal security setting for the specified App Server. **/
    appserverGetInternalSecurity(config: element(configuration), appserverId: number): boolean;

    /** This function returns the external security setting for the specified App Server. **/
    appserverGetExternalSecurity(config: element(configuration), appserverId: number): string;

    /** This function sets the internal security setting in the configuration for the specified App Server. **/
    appserverSetInternalSecurity(config: element(configuration), appserverId: number, value: boolean): element(configuration);

    /** This function sets the external security setting in the configuration for the specified App Server. **/
    appserverSetExternalSecurity(config: element(configuration), appserverId: number, value: string, value2: boolean, value3: string): element(configuration);

    /** This function returns the zone for the host with the specified ID. **/
    hostGetZone(config: element(configuration), hostId: number): string;

    /** This function changes the zone value for the host to the newly specified value. **/
    hostSetZone(config: element(configuration), hostId: number, value: string): element(configuration);

    /** This function enables or disables usage metering for all hosts in the specified group. **/
    groupSetMeteringEnabled(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function specifies the database to be used to store metering data. **/
    groupSetMetersDatabase(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function enables or disables performance metering for all hosts in the specified group. Performance metering will save data into the meters database which can be used to analyze your system performance over time. **/
    groupSetPerformanceMeteringEnabled(config: element(configuration), groupId: number, value: boolean): element(configuration);

    /** This function sets the period (in number of seconds) between when performance data is gathered. setting it to a higher number stores less data but also gives less grainular data; setting it to a lower number stores more data but provides higher grainularity. **/
    groupSetPerformanceMeteringPeriod(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of days of raw performance data to retain. **/
    groupSetPerformanceMeteringRetainRaw(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of days to retain hourly performance data. **/
    groupSetPerformanceMeteringRetainHourly(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function sets the number of days of performance metering data to retain. **/
    groupSetPerformanceMeteringRetainDaily(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function removes a sub-database from a super-database. **/
    databaseDetachSubDatabase(config: element(configuration), databaseId: number, subdatabaseId: number, foreignClusterId?: number): element(configuration);

    /** This function adds a sub-database to a super-database. **/
    databaseAttachSubDatabase(config: element(configuration), databaseId: number, subdatabaseId: number, foreignClusterId?: number): element(configuration);

    /** This function returns a database-reference element representing the sub-databases of the specified super-database. **/
    databaseSubDatabases(config: element(configuration), databaseId: number): database-reference);

    /** This function returns a database-reference element representing where the specified database serves as a sub-database. **/
    databaseSuperDatabases(config: element(configuration), databaseId: number): database-reference);

    /** This function is used by mlcp and is not documented **/
    checkRangePolicyConfig(database: node(), assignments: node()): void;

    /** This function validates the specified field path. If the specified path is not valid, it throws an exception, otherwise it returns the empty sequence. **/
    databaseValidateFieldPath(config: element(configuration), databaseId: number, fieldPath: field-path)): void;

    /** This function gets the availability state of the forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
    forestGetAvailability(config: element(configuration), forestId: number): string;

    /** This function sets the availability state for a forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
    forestSetAvailability(config: element(configuration), forestId: number, value: string): element(configuration);

    /** This function returns the value of the metering-enabled group setting. **/
    groupGetMeteringEnabled(config: element(configuration), groupId: number): boolean;

    /** This function returns the ID of the meters-database configured for the specified group. **/
    groupGetMetersDatabase(config: element(configuration), groupId: number): number;

    /** This function returns the value of the performance-metering-enabled group setting. **/
    groupGetPerformanceMeteringEnabled(config: element(configuration), groupId: number): boolean;

    /** This function returns the value of the performance-metering-period group setting. **/
    groupGetPerformanceMeteringPeriod(config: element(configuration), groupId: number): number;

    /** This function returns the value of the performance-metering-retain-raw group setting. **/
    groupGetPerformanceMeteringRetainRaw(config: element(configuration), groupId: number): number;

    /** This function returns the value of the performance-metering-retain-hourly group setting. **/
    groupGetPerformanceMeteringRetainHourly(config: element(configuration), groupId: number): number;

    /** This function returns the value of the performance-metering-retain-daily group setting. **/
    groupGetPerformanceMeteringRetainDaily(config: element(configuration), groupId: number): number;

    /** This function sets "the retain until backup" setting in the configuration for the specified database. **/
    databaseSetRetainUntilBackup(config: element(configuration), databaseId: number, value: boolean): element(configuration);

    /** This function returns the "retain until backup" setting from the configuration for the specified database. **/
    databaseGetRetainUntilBackup(config: element(configuration), databaseId: number): boolean;

    /** This function creates a db:path-reference specification. **/
    databasePathReference(scalarType: string, pathexpr: string, collation: string): path-reference);

    /** This function creates a db:field-reference specification. **/
    databaseFieldReference(scalarType: string, fieldname: string, collation: string): field-reference);

    /** This function greated a db:element-attribute-reference specification. **/
    databaseElementAttributeReference(scalarType: string, parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string): element-attribute-reference);

    /** This function greated a db:element-reference specification. **/
    databaseElementReference(scalarType: string, namespace: string, localname: string, collation: string): element-reference);

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
    appserverGetDefaultInferenceSize(config: element(configuration), appserverId: number): number;

    /** This function specifies the default value for any request's inference size. **/
    appserverSetDefaultInferenceSize(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
    taskserverGetDefaultInferenceSize(config: element(configuration), groupId: number): number;

    /** This function specifies the default value for any request's inference size. **/
    taskserverSetDefaultInferenceSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The App Server will return an error for queries that exceed this memory limit. **/
    appserverGetMaxInferenceSize(config: element(configuration), appserverId: number): number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The App Server gives up on queries that exceed the memory limit, and returns an error. **/
    appserverSetMaxInferenceSize(config: element(configuration), appserverId: number, value: number): element(configuration);

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The task server will return an error for queries that exceed this memory limit. **/
    taskserverGetMaxInferenceSize(config: element(configuration), groupId: number): number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The task server gives up on queries that exceed the memory limit, and returns an error. **/
    taskserverSetMaxInferenceSize(config: element(configuration), groupId: number, value: number): element(configuration);

    /** The ruleset element (db:default-ruleset) created to be used for inference on a database. One or more rulesets can be used for inference. Rulesets are stored in the Schemas database. By default, no ruleset is configured. **/
    databaseRuleset(location: string): default-ruleset);

    /** This function adds a ruleset (db:ruleset) to be used for inference on a database. One or more rulesets can be used for inference. By default, no ruleset is configured. **/
    databaseAddDefaultRuleset(config: element(configuration), databaseId: number, rulesets: default-ruleset)): element(configuration);

    /** This function returns the default rulesets for a database. **/
    databaseGetDefaultRulesets(config: element(configuration), databaseId: number): default-ruleset);

    /** This function deletes the default ruleset used for inference on a database. **/
    databaseDeleteDefaultRuleset(config: element(configuration), databaseId: number, rulesets: default-ruleset)): element(configuration);

    /** This function returns the queue size for the number of fragments or frames in-flight during database replication. **/
    databaseForeignReplicaGetQueueSize(foreignReplica: foreign-replica)): number;

    /** This function sets the queue size for the number of fragments or frames in-flight during database replication. **/
    databaseForeignReplicaSetQueueSize(foreignReplica: foreign-replica), value: number): foreign-replica);

    /** This function returns true or false to indicate whether a specific backup is enabled for a database. **/
    databaseBackupGetEnabled(config: element(configuration), databaseId: number, backupId: number): boolean;

    /** This function enables database backup for the specified database. **/
    databaseBackupSetEnabled(config: element(configuration), databaseId: number, backupId: number, enabled: boolean): element(configuration);

    /** This function deletes a specific database backup, identified by the backup ID. **/
    databaseDeleteBackupById(config: element(configuration), databaseId: number, backupId: number): element(configuration);

    /** This function returns true or false to indicate whether backup is enabled for the specified forest. **/
    forestBackupGetEnabled(config: element(configuration), forestId: number, backupId: number): boolean;

    /** This function enables forest backup for the specified forest. **/
    forestBackupSetEnabled(config: element(configuration), forestId: number, backupId: number, enabled: boolean): element(configuration);

    /** This function deletes the forest backup specified by the forest ID. **/
    forestDeleteBackupById(config: element(configuration), forestId: number, backupId: number): element(configuration);

    /** This function returns information about a scheduled task for a group based on the task ID and the group ID. **/
    groupGetScheduledTask(config: element(configuration), groupId: number, taskId: number): scheduled-task);

    /** This function enables one or more scheduled tasks for a group based on the group ID and task ID. **/
    groupScheduledTaskSetEnabled(config: element(configuration), groupId: number, taskId: number, enabled: boolean): element(configuration);

    /** This function returns true or false to indicate whether a scheduled task for a group is enabled. **/
    groupScheduledTaskGetEnabled(config: element(configuration), groupId: number, taskId: number): boolean;

    /** This function deletes the scheduled tasks for a group using the group ID. **/
    groupDeleteScheduledTaskById(config: element(configuration), groupId: number, deleteIds: number): element(configuration);

    /** This function returns the default format for protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete formatba sed on many factors, and will end up as JSON, HTML, or XML. **/
    appserverGetDefaultErrorFormat(config: element(configuration), appserverId: number): string;

    /** This function sets the default format protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete format based on many factors, and will end up as JSON, HTML, or XML. **/
    appserverSetDefaultErrorFormat(config: element(configuration), appserverId: number, value: string): element(configuration);


  }
}
