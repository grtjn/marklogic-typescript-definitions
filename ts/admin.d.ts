// Type definitions for AdminModule
// Definitions: 

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
    getDatabaseIds(config: Element(configuration)): String;

    /** This function returns all the host IDs from the configuration. **/
    getHostIds(config: Element(configuration)): String;

    /** This function returns all the group IDs from the configuration. **/
    getGroupIds(config: Element(configuration)): String;

    /** This function returns all the forest IDs from the configuration. **/
    getForestIds(config: Element(configuration)): String;

    /** This function returns all the appserver IDs from the configuration. **/
    getAppserverIds(config: Element(configuration)): String;

    /** Loads the admin configuration into memory for use by other functions in the Admin module. **/
    getConfiguration(): Element(configuration);

    /** This function saves a configuration specification to the cluster configuration files, without restarting MarkLogic Server. If you use this function to save any changes that require a server restart ("cold" changes such as App Server port assignment changes), then the changes will not take effect until the next time MarkLogic Server restarts (although they will be saved in the configuration). If you want MarkLogic Server to automatically restart when needed, use admin:save-configuration instead. **/
    saveConfigurationWithoutRestart(config: Element(configuration)): String;

    /** This function saves a configuration specification to the cluster configuration files. It restarts MarkLogic Server for "cold" administrative tasks only (for example, for App Server port assignment changes). If you do not want those "cold" administrative tasks to automatically restart MarkLogic Server, use admin:save-configuration-without-restart instead. **/
    saveConfiguration(config: Element(configuration)): void;

    /** This function restarts MarkLogic Server for the specified hosts. **/
    restartHosts(hosts: String): void;

    /** This function deletes the configuration from the specified database(s). It does not delete the configuration or data for any forests attached to the deleted database(s). **/
    databaseDelete(config: Element(configuration), databaseIds: String): Element(configuration);

    /** This function creates a new database specification. **/
    databaseCreate(config: Element(configuration), databaseName: String, securityDb: String, schemaDb: String): Element(configuration);

    /** This function creates a new database specification with the same settings as the database with the specified ID. The new database configuration will have the specified name. **/
    databaseCopy(config: Element(configuration), databaseId: String, databaseName: String): Element(configuration);

    /** This function detaches the specified forest from the specified database. **/
    databaseDetachForest(config: Element(configuration), databaseId: String, forestId: String): Element(configuration);

    /** This function attaches the specified forest to the specified database. **/
    databaseAttachForest(config: Element(configuration), databaseId: String, forestId: String): Element(configuration);

    /** This function returns the scheduled backups for the specified database from the configuration. **/
    databaseGetBackups(config: Element(configuration), databaseId: String): Database-backup);

    /** This function constructs a weekly scheduled backup specification. **/
    databaseWeeklyBackup(backupDir: String, backupPeriod: Number, days: String, startTime: String, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a weekly scheduled incremental backup specification. **/
    databaseWeeklyIncrementalBackup(backupDir: String, backupPeriod: Number, days: String, startTime: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a monthly scheduled backup specification. **/
    databaseMonthlyBackup(backupDir: String, backupPeriod: Number, backupMonthDay: String, startTime: String, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a scheduled monthly incremental backup specification. **/
    databaseMonthlyIncrementalBackup(backupDir: String, backupPeriod: Number, backupMonthDay: String, startTime: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a one-time backup specification. **/
    databaseOneTimeBackup(backupDir: String, start: Date, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a one-time incremental backup specification. **/
    databaseOneTimeIncrementalBackup(backupDir: String, start: Date, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function adds scheduled backup specifications for a database to a configuration. **/
    databaseAddBackup(config: Element(configuration), databaseId: String, backups: Database-backup)): Element(configuration);

    /** This function deletes scheduled backup specifications for a database from a configuration. **/
    databaseDeleteBackup(config: Element(configuration), databaseId: String, backups: Database-backup)): Element(configuration);

    /** This function returns the merge blackouts specification for the specified database from the configuration. **/
    databaseGetMergeBlackouts(config: Element(configuration), databaseId: String): Merge-blackout);

    /** This function constructs a merge-blackout specification. **/
    databaseRecurringMergeBlackout(limit: Number, mergePriority: String, days: String, startTime: String, endTime: String, duration: Duration): Merge-blackout);

    /** This function constructs a one-time merge-blackout specification. **/
    databaseOneTimeMergeBlackout(limit: Number, mergePriority: String, start: Date, end: Date, duration: Duration): Merge-blackout);

    /** This function adds a merge blackout specification for a database to a configuration. **/
    databaseAddMergeBlackout(config: Element(configuration), databaseId: String, mergeBlackouts: Merge-blackout)): Element(configuration);

    /** This function deletes a merge blackout specification for a database from a configuration. **/
    databaseDeleteMergeBlackout(config: Element(configuration), databaseId: String, blackouts: Merge-blackout)): Element(configuration);

    /** This function returns the fragment roots specification for the specified database from the configuration. **/
    databaseGetFragmentRoots(config: Element(configuration), databaseId: String): Fragment-root);

    /** This function constructs a fragment root specification. **/
    databaseFragmentRoot(namespace: String, localname: String): Fragment-root);

    /** This function adds the specified fragment root to the specified database in the configuration. **/
    databaseAddFragmentRoot(config: Element(configuration), databaseId: String, fragmentRoots: Fragment-root)): Element(configuration);

    /** This function deletes the specified fragment root in the specified database from the configuration. **/
    databaseDeleteFragmentRoot(config: Element(configuration), databaseId: String, fragmentRoots: Fragment-root)): Element(configuration);

    /** This function returns the fragment parents specification for the specified database from the configuration. **/
    databaseGetFragmentParents(config: Element(configuration), databaseId: String): Fragment-parent);

    /** This function constructs a fragment parent specification. **/
    databaseFragmentParent(namespace: String, localname: String): Fragment-parent);

    /** This function adds the specified fragment parent to the specified database in the configuration. **/
    databaseAddFragmentParent(config: Element(configuration), databaseId: String, fragmentParents: Fragment-parent)): Element(configuration);

    /** This function deletes the specified fragment parent in the specified database from the configuration. **/
    databaseDeleteFragmentParent(config: Element(configuration), databaseId: String, fragmentParents: Fragment-parent)): Element(configuration);

    /** This function constructs a range element index specification. **/
    databaseRangeElementIndex(scalarType: String, namespace: String, localname: String, collation: String, rangeValuePositions: Boolean, invalidValues?: String): Range-element-index);

    /** This function constructs a range field index specification. **/
    databaseRangeFieldIndex(scalarType: String, fieldname: String, collation: String, rangeValuePositions: Boolean, invalidValues?: String): Range-field-index);

    /** This function returns the range element indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeElementIndexes(config: Element(configuration), databaseId: String): Range-element-index);

    /** This function returns the range field indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeFieldIndexes(config: Element(configuration), databaseId: String): Range-field-index);

    /** This function adds a range element index to the specified database in the configuration. **/
    databaseAddRangeElementIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-element-index)): Element(configuration);

    /** This function adds a range field index to the specified database in the configuration. **/
    databaseAddRangeFieldIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-field-index)): Element(configuration);

    /** This function deletes a range element index for the specified database in the configuration. **/
    databaseDeleteRangeElementIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-element-index)): Element(configuration);

    /** This function deletes a range field index for the specified database in the configuration. **/
    databaseDeleteRangeFieldIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-field-index)): Element(configuration);

    /** This function deletes all the range field indexes on given fields for the specified database in the configuration. **/
    databaseDeleteAllRangeFieldIndexes(config: Element(configuration), databaseId: String, fieldnames: String): Element(configuration);

    /** This function returns the range element attribute indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangeElementAttributeIndexes(config: Element(configuration), databaseId: String): Range-element-attribute-index);

    /** This function constructs a range element attribute index specification. **/
    databaseRangeElementAttributeIndex(scalarType: String, parentNamespace: String, parentLocalname: String, namespace: String, localname: String, collation: String, rangeValuePositions: Boolean, invalidValues?: String): Range-element-attribute-index);

    /** This function adds a range element attribute index to the specified database in the configuration. **/
    databaseAddRangeElementAttributeIndex(config: Element(configuration), databaseId: String, attributeIndexes: Range-element-attribute-index)): Element(configuration);

    /** This function deletes a range element attribute index for the specified database in the configuration. **/
    databaseDeleteRangeElementAttributeIndex(config: Element(configuration), databaseId: String, attributeIndexes: Range-element-attribute-index)): Element(configuration);

    /** This function constructs an element word lexicon specification. **/
    databaseElementWordLexicon(namespace: String, localname: String, collation: String): Element-word-lexicon);

    /** This function returns the element word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetElementWordLexicons(config: Element(configuration), databaseId: String): Element-word-lexicon);

    /** This function adds an element word lexicon to the specified database in the configuration. **/
    databaseAddElementWordLexicon(config: Element(configuration), databaseId: String, elementWordLexicons: Element-word-lexicon)): Element(configuration);

    /** This function deletes an element word lexicon for the specified database from the configuration. **/
    databaseDeleteElementWordLexicon(config: Element(configuration), databaseId: String, elementWordLexicons: Element-word-lexicon)): Element(configuration);

    /** This function constructs an element attribute word lexicon specification. **/
    databaseElementAttributeWordLexicon(parentNamespace: String, parentLocalname: String, namespace: String, localname: String, collation: String): Element-attribute-word-lexicon);

    /** This function returns the element attribute word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetElementAttributeWordLexicons(config: Element(configuration), databaseId: String): Element-attribute-word-lexicon);

    /** This function adds an element attribute word lexicon to the specified database in the configuration. **/
    databaseAddElementAttributeWordLexicon(config: Element(configuration), databaseId: String, elementAttributeWordLexicons: Element-attribute-word-lexicon)): Element(configuration);

    /** This function deletes an element attribute word lexicon for the specified database from the configuration. **/
    databaseDeleteElementAttributeWordLexicon(config: Element(configuration), databaseId: String, lexicons: Element-attribute-word-lexicon)): Element(configuration);

    /** This function constructs a phrase through specification. **/
    databasePhraseThrough(namespace: String, localname: String): Phrase-through);

    /** This function returns the phrase throughs specification(s) for the specified database from the configuration. **/
    databaseGetPhraseThroughs(config: Element(configuration), databaseId: String): Phrase-through);

    /** This function adds a phrase through to the specified database in the configuration. **/
    databaseAddPhraseThrough(config: Element(configuration), databaseId: String, phraseThroughs: Phrase-through)): Element(configuration);

    /** This function deletes a phrase through for the specified database from the configuration. **/
    databaseDeletePhraseThrough(config: Element(configuration), databaseId: String, phraseThroughs: Phrase-through)): Element(configuration);

    /** This function constructs a phrase through specification. **/
    databasePhraseAround(namespace: String, localname: String): Phrase-around);

    /** This function returns the phrase arounds specification(s) for the specified database from the configuration. **/
    databaseGetPhraseArounds(config: Element(configuration), databaseId: String): Phrase-around);

    /** This function adds a phrase around to the specified database in the configuration. **/
    databaseAddPhraseAround(config: Element(configuration), databaseId: String, phraseArounds: Phrase-around)): Element(configuration);

    /** This function deletes a phrase around for the specified database from the configuration. **/
    databaseDeletePhraseAround(config: Element(configuration), databaseId: String, phraseArounds: Phrase-around)): Element(configuration);

    /** This function constructs an element word query through specification. **/
    databaseElementWordQueryThrough(namespace: String, localname: String): Element-word-query-through);

    /** This function returns the element word query throughs specification(s) for the specified database from the configuration. **/
    databaseGetElementWordQueryThroughs(config: Element(configuration), databaseId: String): Element-word-query-through);

    /** This function adds an element word query through to the specified database in the configuration. **/
    databaseAddElementWordQueryThrough(config: Element(configuration), databaseId: String, elementWordQueryThroughs: Element-word-query-through)): Element(configuration);

    /** This function deletes an element word query through for the specified database from the configuration. **/
    databaseDeleteElementWordQueryThrough(config: Element(configuration), databaseId: String, throughs: Element-word-query-through)): Element(configuration);

    /** This function constructs a word lexicon specification. **/
    databaseWordLexicon(collation: String): Word-lexicon);

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetWordLexicons(config: Element(configuration), databaseId: String): Word-lexicon);

    /** This function adds a word lexicon to the specified database in the configuration. **/
    databaseAddWordLexicon(config: Element(configuration), databaseId: String, wordLexicons: Word-lexicon)): Element(configuration);

    /** This function deletes a word lexicon for the specified database from the configuration. **/
    databaseDeleteWordLexicon(config: Element(configuration), databaseId: String, wordLexicons: Word-lexicon)): Element(configuration);

    /** This function constructs a geospatial element index specification. **/
    databaseGeospatialElementIndex(namespace: String, localname: String, coordinateSystem: String, rangeValuePositions: Boolean, pointFormat?: String, invalidValues?: String): Geospatial-element-index);

    /** This function returns the geospatial element indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementIndexes(config: Element(configuration), databaseId: String): Geospatial-element-index);

    /** This function adds a range element index to the specified database in the configuration. **/
    databaseAddGeospatialElementIndex(config: Element(configuration), databaseId: String, geospatialElementIndexes: Geospatial-element-index)): Element(configuration);

    /** This function deletes a geospatial element index for the specified database in the configuration. **/
    databaseDeleteGeospatialElementIndex(config: Element(configuration), databaseId: String, geospatialElementIndexes: Geospatial-element-index)): Element(configuration);

    /** This function constructs a geospatial element child index specification. **/
    databaseGeospatialElementChildIndex(parentNamespace: String, parentLocalname: String, namespace: String, localname: String, coordinateSystem: String, rangeValuePositions: Boolean, pointFormat?: String, invalidValues?: String): Geospatial-element-child-index);

    /** This function returns the geospatial element child indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementChildIndexes(config: Element(configuration), databaseId: String): Geospatial-element-child-index);

    /** This function adds a geospatial element child index to the specified database in the configuration. **/
    databaseAddGeospatialElementChildIndex(config: Element(configuration), databaseId: String, geospatialElementChildIndexes: Geospatial-element-child-index)): Element(configuration);

    /** This function deletes a geospatial element child index for the specified database in the configuration. **/
    databaseDeleteGeospatialElementChildIndex(config: Element(configuration), databaseId: String, geospatialElementChildIndexes: Geospatial-element-child-index)): Element(configuration);

    /** This function constructs a geospatial element pair index specification. **/
    databaseGeospatialElementPairIndex(parentNamespace: String, parentLocalname: String, latitudeNamespace: String, latitudeLocalname: String, longitudeNamespace: String, longitudeLocalname: String, coordinateSystem: String, rangeValuePositions: Boolean, invalidValues?: String): Geospatial-element-pair-index);

    /** This function returns the geospatial element pair indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementPairIndexes(config: Element(configuration), databaseId: String): Geospatial-element-pair-index);

    /** This function adds a geospatial element pair index to the specified database in the configuration. **/
    databaseAddGeospatialElementPairIndex(config: Element(configuration), databaseId: String, geospatialElementPairIndexes: Geospatial-element-pair-index)): Element(configuration);

    /** This function deletes a geospatial element pair index for the specified database from the configuration. **/
    databaseDeleteGeospatialElementPairIndex(config: Element(configuration), databaseId: String, geospatialElementPairIndexes: Geospatial-element-pair-index)): Element(configuration);

    /** This function constructs a geospatial element attribute pair index specification. **/
    databaseGeospatialElementAttributePairIndex(parentNamespace: String, parentLocalname: String, latitudeNamespace: String, latitudeLocalname: String, longitudeNamespace: String, longitudeLocalname: String, coordinateSystem: String, rangeValuePositions: Boolean, invalidValues?: String): Geospatial-element-attribute-pair-index);

    /** This function returns the geospatial element attribute pair indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialElementAttributePairIndexes(config: Element(configuration), databaseId: String): Geospatial-element-attribute-pair-index);

    /** This function adds a geospatial element attribute pair index to the specified database in the configuration. **/
    databaseAddGeospatialElementAttributePairIndex(config: Element(configuration), databaseId: String, geospatialElementAttributePairIndexes: Geospatial-element-attribute-pair-index)): Element(configuration);

    /** This function deletes a geospatial element attribute pair index in the specified database from the configuration. **/
    databaseDeleteGeospatialElementAttributePairIndex(config: Element(configuration), databaseId: String, indexes: Geospatial-element-attribute-pair-index)): Element(configuration);

    /** This function changes the name of the database with the specified ID to the specified name. **/
    databaseSetName(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the enabled value for the specified database in the configuration. **/
    databaseSetEnabled(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the security database for a database to the specified database in the configuration. **/
    databaseSetSecurityDatabase(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the schema database for a database to the specified database in the configuration. **/
    databaseSetSchemaDatabase(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the triggers database to the specified database ID for the specified database in the configuration. **/
    databaseSetTriggersDatabase(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the language for the specified database in the configuration. **/
    databaseSetLanguage(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the stemmed searches setting for the specified database in the configuration. **/
    databaseSetStemmedSearches(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the word searches setting for the specified database in the configuration. **/
    databaseSetWordSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word positions setting for the specified database in the configuration. **/
    databaseSetWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast phrase searches setting for the specified database in the configuration. **/
    databaseSetFastPhraseSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast case sensitive searches setting for the specified database in the configuration. **/
    databaseSetFastCaseSensitiveSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast reverse searches setting for the specified database in the configuration. **/
    databaseSetFastReverseSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast diacritic-sensitive searches setting for the specified database in the configuration. **/
    databaseSetFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the element word searches setting for the specified database in the configuration. **/
    databaseSetFastElementWordSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the element word positions setting for the specified database in the configuration. **/
    databaseSetElementWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast element phrase searches setting for the specified database in the configuration. **/
    databaseSetFastElementPhraseSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the element value positions setting for the specified database in the configuration. **/
    databaseSetElementValuePositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the attribute value positions setting for the specified database in the configuration. **/
    databaseSetAttributeValuePositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetTrailingWildcardSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the trailing wildcard word positions setting for the specified database in the configuration. **/
    databaseSetTrailingWildcardWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast element trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetFastElementTrailingWildcardSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the three character searches setting for the specified database in the configuration. **/
    databaseSetThreeCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the three character word positions setting for the specified database in the configuration. **/
    databaseSetThreeCharacterWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the two character searches setting for the specified database in the configuration. **/
    databaseSetTwoCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the one character searches setting for the specified database in the configuration. **/
    databaseSetOneCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the fast element character searches setting for the specified database in the configuration. **/
    databaseSetFastElementCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the URI lexicon setting for the specified database in the configuration. **/
    databaseSetUriLexicon(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the collection lexicon setting for the specified database in the configuration. **/
    databaseSetCollectionLexicon(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the reindexer enable setting for the specified database in the configuration. **/
    databaseSetReindexerEnable(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the maintain last modified setting for the specified database in the configuration. **/
    databaseSetMaintainLastModified(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the maintain directory last modified setting for the specified database in the configuration. **/
    databaseSetMaintainDirectoryLastModified(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the inherit permissions setting for the specified database in the configuration. **/
    databaseSetInheritPermissions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the inherit collections setting for the specified database in the configuration. **/
    databaseSetInheritCollections(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the inherit quality setting for the specified database in the configuration. **/
    databaseSetInheritQuality(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the preallocate journals setting for the specified database in the configuration. **/
    databaseSetPreallocateJournals(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the preload mapped data setting for the specified database in the configuration. **/
    databaseSetPreloadMappedData(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the range index optimize setting for the specified database in the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
    databaseSetRangeIndexOptimize(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the directory creation setting for the specified database in the configuration. **/
    databaseSetDirectoryCreation(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the format compatibility setting for the specified database in the configuration. **/
    databaseSetFormatCompatibility(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the index detection setting for the specified database in the configuration. **/
    databaseSetIndexDetection(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the expunge locks setting for the specified database in the configuration. **/
    databaseSetExpungeLocks(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the reindexer timestamp setting for the specified database in the configuration. **/
    databaseSetReindexerTimestamp(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the in-memory limit setting for the specified database in the configuration. **/
    databaseSetInMemoryLimit(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the in-memory list size setting for the specified database in the configuration. **/
    databaseSetInMemoryListSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the in-memory tree size setting for the specified database in the configuration. **/
    databaseSetInMemoryTreeSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the in-memory range index size setting for the specified database in the configuration. **/
    databaseSetInMemoryRangeIndexSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the in-memory range reverse index size setting for the specified database in the configuration. **/
    databaseSetInMemoryReverseIndexSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
    databaseSetLargeSizeThreshold(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
    databaseSetLocking(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
    databaseSetJournaling(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the journal size setting for the specified database in the configuration. **/
    databaseSetJournalSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the positions list max size setting for the specified database in the configuration. **/
    databaseSetPositionsListMaxSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the merge max size setting for the specified database in the configuration. **/
    databaseSetMergeMaxSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the merge minimum size setting for the specified database in the configuration. **/
    databaseSetMergeMinSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the merge min ratio setting for the specified database in the configuration. **/
    databaseSetMergeMinRatio(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the CPU scheduler priority for merges. **/
    databaseSetMergePriority(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the merge timestamp setting for the specified database in the configuration. **/
    databaseSetMergeTimestamp(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function sets the reindexer throttle setting for the specified database in the configuration. **/
    databaseSetReindexerThrottle(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function returns the attached forest IDs for the specified database from the configuration. **/
    databaseGetAttachedForests(config: Element(configuration), databaseId: String): String;

    /** This function returns the ID for the specified database from the configuration. The difference between this function and xdmp:database() is that the ID from this function can come from a database that has not yet been saved (that is, from a database that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created database without the need to first save the configuration. **/
    databaseGetId(config: Element(configuration), databaseName: String): String;

    /** This function returns the enabled value for the specified database from the configuration. **/
    databaseGetEnabled(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the name for the specified database from the configuration. **/
    databaseGetName(config: Element(configuration), databaseId: String): String;

    /** This function returns the ID of the security database for the specified database from the configuration. **/
    databaseGetSecurityDatabase(config: Element(configuration), databaseId: String): String;

    /** This function returns the ID of the schema database for the specified database from the configuration. **/
    databaseGetSchemaDatabase(config: Element(configuration), databaseId: String): String;

    /** This function returns the ID of the triggers database for the specified database from the configuration. **/
    databaseGetTriggersDatabase(config: Element(configuration), databaseId: String): String;

    /** This function returns the language for the specified database from the configuration. **/
    databaseGetLanguage(config: Element(configuration), databaseId: String): String;

    /** This function returns the stemmed searches setting for the specified database from the configuration. **/
    databaseGetStemmedSearches(config: Element(configuration), databaseId: String): String;

    /** This function returns the word searches setting for the specified database from the configuration. **/
    databaseGetWordSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the word positions setting for the specified database from the configuration. **/
    databaseGetWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast phrase searches setting for the specified database from the configuration. **/
    databaseGetFastPhraseSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast case sensitive searches setting for the specified database from the configuration. **/
    databaseGetFastCaseSensitiveSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast reverse searches setting for the specified database from the configuration. **/
    databaseGetFastReverseSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast diacritic sensitive searches setting for the specified database from the configuration. **/
    databaseGetFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast element word searches setting for the specified database from the configuration. **/
    databaseGetFastElementWordSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the element word positions setting for the specified database from the configuration. **/
    databaseGetElementWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast element phrase searches setting for the specified database from the configuration. **/
    databaseGetFastElementPhraseSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the element value positions setting for the specified database from the configuration. **/
    databaseGetElementValuePositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the attribute value positions setting for the specified database from the configuration. **/
    databaseGetAttributeValuePositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
    databaseGetTrailingWildcardSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the trailing wildcard word positions setting for the specified database from the configuration. **/
    databaseGetTrailingWildcardWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
    databaseGetFastElementTrailingWildcardSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the three character searches setting for the specified database from the configuration. **/
    databaseGetThreeCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the three character word positions setting for the specified database from the configuration. **/
    databaseGetThreeCharacterWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the two character searches setting for the specified database from the configuration. **/
    databaseGetTwoCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the one character searches setting for the specified database from the configuration. **/
    databaseGetOneCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the fast element character searches setting for the specified database from the configuration. **/
    databaseGetFastElementCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the URI lexicon setting for the specified database from the configuration. **/
    databaseGetUriLexicon(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the collection lexicon setting for the specified database from the configuration. **/
    databaseGetCollectionLexicon(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the reindexer enable setting for the specified database from the configuration. **/
    databaseGetReindexerEnable(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the maintain last modified setting for the specified database from the configuration. **/
    databaseGetMaintainLastModified(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the maintain directory last modified setting for the specified database from the configuration. **/
    databaseGetMaintainDirectoryLastModified(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the inherit positions setting for the specified database from the configuration. **/
    databaseGetInheritPermissions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the inherit collections setting for the specified database from the configuration. **/
    databaseGetInheritCollections(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the inherit quality setting for the specified database from the configuration. **/
    databaseGetInheritQuality(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the preallocate journals setting for the specified database from the configuration. **/
    databaseGetPreallocateJournals(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the preload mapped data setting for the specified database from the configuration. **/
    databaseGetPreloadMappedData(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the range index optimize setting for the specified database from the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
    databaseGetRangeIndexOptimize(config: Element(configuration), databaseId: String): String;

    /** This function returns the directory creation setting for the specified database from the configuration. **/
    databaseGetDirectoryCreation(config: Element(configuration), databaseId: String): String;

    /** This function returns the format compatibility setting for the specified database from the configuration. **/
    databaseGetFormatCompatibility(config: Element(configuration), databaseId: String): String;

    /** This function returns the index detection setting for the specified database from the configuration. **/
    databaseGetIndexDetection(config: Element(configuration), databaseId: String): String;

    /** This function returns the expunge locks setting for the specified database from the configuration. **/
    databaseGetExpungeLocks(config: Element(configuration), databaseId: String): String;

    /** This function returns the reindexer timestamp setting for the specified database from the configuration. **/
    databaseGetReindexerTimestamp(config: Element(configuration), databaseId: String): String;

    /** This function returns the in memory limit setting for the specified database from the configuration. **/
    databaseGetInMemoryLimit(config: Element(configuration), databaseId: String): Number;

    /** This function returns the in memory list size setting for the specified database from the configuration. **/
    databaseGetInMemoryListSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the in memory tree size setting for the specified database from the configuration. **/
    databaseGetInMemoryTreeSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the in memory range index size setting for the specified database from the configuration. **/
    databaseGetInMemoryRangeIndexSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the in memory reverse index size setting for the specified database from the configuration. **/
    databaseGetInMemoryReverseIndexSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
    databaseGetLocking(config: Element(configuration), databaseId: String): String;

    /** This function returns the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
    databaseGetJournaling(config: Element(configuration), databaseId: String): String;

    /** This function returns the journal size setting for the specified database from the configuration. **/
    databaseGetJournalSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the positions list max size setting for the specified database from the configuration. **/
    databaseGetPositionsListMaxSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the merge max size setting for the specified database from the configuration. **/
    databaseGetMergeMaxSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the merge min size setting for the specified database from the configuration. **/
    databaseGetMergeMinSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the merge min ratio setting for the specified database from the configuration. **/
    databaseGetMergeMinRatio(config: Element(configuration), databaseId: String): Number;

    /** This function returns the CPU scheduler priority for merges for the specified database from the configuration. **/
    databaseGetMergePriority(config: Element(configuration), databaseId: String): String;

    /** This function returns the merge timestamp setting for the specified database from the configuration. **/
    databaseGetMergeTimestamp(config: Element(configuration), databaseId: String): Number;

    /** This function returns the reindexer throttle setting for the specified database from the configuration. **/
    databaseGetReindexerThrottle(config: Element(configuration), databaseId: String): Number;

    /** This function constructs an included element specification. **/
    databaseIncludedElement(namespace: String, localname: String, weight: Number, attributeNamespace: String, attributeLocalname: String, attributeValue: String): Included-element);

    /** This function constructs an excluded element specification. **/
    databaseExcludedElement(namespace: String, localname: String, attributeNamespace?: String, attributeLocalname?: String, attributeValue?: String): Excluded-element);

    /** This function constructs a field specification. **/
    databaseField(fieldName: String, includeRoot: Boolean): Field);

    /** This function returns the word query included elements setting for the specified database from the configuration. **/
    databaseGetWordQueryIncludedElements(config: Element(configuration), databaseId: String): Included-element);

    /** This function returns the word query excluded elements setting for the specified database from the configuration. **/
    databaseGetWordQueryExcludedElements(config: Element(configuration), databaseId: String): Excluded-element);

    /** This function returns the fields specification(s) for the specified database from the configuration. **/
    databaseGetFields(config: Element(configuration), databaseId: String): Field);

    /** This function returns the fields included elements specification for the specified database from the configuration. **/
    databaseGetFieldIncludedElements(config: Element(configuration), databaseId: String, fieldName: String): Included-element);

    /** This function returns the field excluded elements specification for the specified database from the configuration. **/
    databaseGetFieldExcludedElements(config: Element(configuration), databaseId: String, fieldName: String): Excluded-element);

    /** This function returns the field specification for the specified database from the configuration. **/
    databaseGetField(config: Element(configuration), databaseId: String, fieldName: String): Field);

    /** This function adds the field specification to the specified database in the configuration. **/
    databaseAddField(config: Element(configuration), databaseId: String, fields: Field)): Element(configuration);

    /** This function deletes the field specification in the specified database from the configuration. **/
    databaseDeleteField(config: Element(configuration), databaseId: String, fieldNames: String): Element(configuration);

    /** This function adds the word query included element specification to the specified database in the configuration. **/
    databaseAddWordQueryIncludedElement(config: Element(configuration), databaseId: String, includedElements: Included-element)): Element(configuration);

    /** This function deletes the word query included element specification in the specified database from the configuration. **/
    databaseDeleteWordQueryIncludedElement(config: Element(configuration), databaseId: String, includedElements: Included-element)): Element(configuration);

    /** This function adds the field included element specification tn the specified database in the configuration. **/
    databaseAddFieldIncludedElement(config: Element(configuration), databaseId: String, fieldName: String, includedElements: Included-element)): Element(configuration);

    /** This function deletes the field included element specification in the specified database from the configuration. **/
    databaseDeleteFieldIncludedElement(config: Element(configuration), databaseId: String, fieldName: String, includedElements: Included-element)): Element(configuration);

    /** This function adds the word query excluded element specification for the specified database to the configuration. **/
    databaseAddWordQueryExcludedElement(config: Element(configuration), databaseId: String, excludedElements: Excluded-element)): Element(configuration);

    /** This function deletes the word query excluded element specification in the specified database from the configuration. **/
    databaseDeleteWordQueryExcludedElement(config: Element(configuration), databaseId: String, excludedElements: Excluded-element)): Element(configuration);

    /** This function adds the field excluded element specification in the specified database in the configuration. **/
    databaseAddFieldExcludedElement(config: Element(configuration), databaseId: String, fieldName: String, excludedElements: Excluded-element)): Element(configuration);

    /** This function deletes the field excluded element specification in the specified database from the configuration. **/
    databaseDeleteFieldExcludedElement(config: Element(configuration), databaseId: String, fieldName: String, excludedElements: Excluded-element)): Element(configuration);

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
    databaseGetFieldWordLexicons(config: Element(configuration), databaseId: String, fieldName: String): Word-lexicon);

    /** This function adds a word lexicon to the specified database in the configuration. **/
    databaseAddFieldWordLexicon(config: Element(configuration), databaseId: String, fieldName: String, wordLexicons: Word-lexicon)): Element(configuration);

    /** This function deletes a word lexicon for the specified database from the configuration. **/
    databaseDeleteFieldWordLexicon(config: Element(configuration), databaseId: String, fieldName: String, wordLexicons: Word-lexicon)): Element(configuration);

    /** This function returns the word query include document root setting for the specified database from the configuration. **/
    databaseGetWordQueryIncludeDocumentRoot(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the reindexer word query stemmed searches setting for the specified database from the configuration. **/
    databaseGetWordQueryStemmedSearches(config: Element(configuration), databaseId: String): String;

    /** This function returns true if the word query searches setting for the specified database is enabled in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryWordSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query fast phrase searches setting for the specified database is set in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastPhraseSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query fast case sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastCaseSensitiveSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query fast diacritic sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query trailing wildcard searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTrailingWildcardSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query trailing wildcard word positions setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTrailingWildcardWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query three character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryThreeCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query three character word positions setting is enabled for the specified database from the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryThreeCharacterWordPositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query two character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryTwoCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns true if the word query one character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
    databaseGetWordQueryOneCharacterSearches(config: Element(configuration), databaseId: String): Boolean;

    /** This function sets the word query stemmed searches setting for the specified database in the configuration. **/
    databaseSetWordQueryStemmedSearches(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function sets the word query word searches setting for the specified database in the configuration. **/
    databaseSetWordQueryWordSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query fast phrase searches setting for the specified database in the configuration. **/
    databaseSetWordQueryFastPhraseSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function returns the word query fast case sensitive searches setting for the specified database from the configuration. **/
    databaseSetWordQueryFastCaseSensitiveSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query fast diacritic sensitive searches setting for the specified database in the configuration. **/
    databaseSetWordQueryFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetWordQueryTrailingWildcardSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query trailing wildcard word positions setting for the specified database in the configuration. **/
    databaseSetWordQueryTrailingWildcardWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query three character searches setting for the specified database in the configuration. **/
    databaseSetWordQueryThreeCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query three character word positions setting for the specified database in the configuration. **/
    databaseSetWordQueryThreeCharacterWordPositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query two character searches setting for the specified database in the configuration. **/
    databaseSetWordQueryTwoCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query one character searches setting for the specified field in the configuration. **/
    databaseSetWordQueryOneCharacterSearches(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the word query include document root setting for the specified field in the configuration. **/
    databaseSetWordQueryIncludeDocumentRoot(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function returns the field include document root setting for the specified field from the configuration. **/
    databaseGetFieldIncludeDocumentRoot(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns stemmed searches setting for the specified field if configured. Otherwise, it returns the empty sequence. **/
    databaseGetFieldStemmedSearches(config: Element(configuration), databaseId: String, fieldName: String): String;

    /** This function returns true if the word searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldWordSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the fast phrase searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastPhraseSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the fast case sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastCaseSensitiveSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the fast diacritic sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the trailing wildcard searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTrailingWildcardSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the trailing wildcard word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTrailingWildcardWordPositions(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the three character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldThreeCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the three character word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldThreeCharacterWordPositions(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the two character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldTwoCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns true if the one character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
    databaseGetFieldOneCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function sets the field stemmed searches setting for the specified field in the configuration. **/
    databaseSetFieldStemmedSearches(config: Element(configuration), databaseId: String, fieldName: String, value: String): Element(configuration);

    /** This function sets the field word searches setting for the specified field in the configuration. **/
    databaseSetFieldWordSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field fast phrase searches setting for the specified field in the configuration. **/
    databaseSetFieldFastPhraseSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field fast case sensitive searches setting for the specified field in the configuration. **/
    databaseSetFieldFastCaseSensitiveSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field fast diacritic sensitive searches setting for the specified field in the configuration. **/
    databaseSetFieldFastDiacriticSensitiveSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field trailing wildcard searches setting for the specified database in the configuration. **/
    databaseSetFieldTrailingWildcardSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field trailing wildcard word positions setting for the specified field in the configuration. **/
    databaseSetFieldTrailingWildcardWordPositions(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field three character searches setting for the specified field in the configuration. **/
    databaseSetFieldThreeCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field three character word positions setting for the specified field in the configuration. **/
    databaseSetFieldThreeCharacterWordPositions(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field two character searches setting for the specified field in the configuration. **/
    databaseSetFieldTwoCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field one character searches setting for the specified field in the configuration. **/
    databaseSetFieldOneCharacterSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field include document root setting for the specified field in the configuration. **/
    databaseSetFieldIncludeDocumentRoot(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field name setting for the specified field in the configuration. **/
    databaseSetFieldName(config: Element(configuration), databaseId: String, fieldName: String, value: String): Element(configuration);

    /** This function returns the name of the specified forest, given the forest ID. **/
    forestGetName(config: Element(configuration), forestId: String): String;

    /** This function returns the ID of the host in which the specified forest resides. **/
    forestGetHost(config: Element(configuration), forestId: String): String;

    /** This function returns the ID of the forest with the specified name, from the specified configuration. The difference between this function and xdmp:forest() is that the ID from this function can come from a forest that has not yet been saved (that is, from a forest that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). **/
    forestGetId(config: Element(configuration), forestName: String): String;

    /** This function returns the enabled state of the specified forest. **/
    forestGetEnabled(config: Element(configuration), forestId: String): Boolean;

    /** This function returns the name of the data directory of the specified forest. **/
    forestGetDataDirectory(config: Element(configuration), forestId: String): String;

    /** This function returns the name of the large data directory of the specified forest. **/
    forestGetLargeDataDirectory(config: Element(configuration), forestId: String): String;

    /** This function returns the state of whether failover is enabled for the specified forest. **/
    forestGetFailoverEnable(config: Element(configuration), forestId: String): Boolean;

    /** This function returns the state of what kinds of updates are allowed for the specified forest. **/
    forestGetUpdatesAllowed(config: Element(configuration), forestId: String): String;

    /** This function returns the IDs of the hosts defined as failover hosts for this forest. The order in which the hosts IDs are returned is significant, with the first ID being the primary host, the second (if there is one) being the secondary, and so on. **/
    forestGetFailoverHosts(config: Element(configuration), forestId: String): String;

    /** This function sets a forest configuration to a new host. **/
    forestSetHost(config: Element(configuration), forestId: String, value: String): Element(configuration);

    /** This function sets the enabled state for a forest configuration. **/
    forestSetEnabled(config: Element(configuration), forestId: String, value: Boolean): Element(configuration);

    /** This function sets the forest failover enabled state for a forest configuration. **/
    forestSetFailoverEnable(config: Element(configuration), forestId: String, value: Boolean): Element(configuration);

    /** This function sets the updates-allowed state for a forest configuration. **/
    forestSetUpdatesAllowed(config: Element(configuration), forestId: String, value: String): Element(configuration);

    /** This function adds a failover host to the list of failover hosts for the specified forest in the specified configuration. If there are already any hosts specified, this host is added to the end of the list of failover hosts. **/
    forestAddFailoverHost(config: Element(configuration), forestId: String, hosts: String): Element(configuration);

    /** This function deletes the specified failover host(s) from the failover-host list in the specified configuration. **/
    forestDeleteFailoverHost(config: Element(configuration), forestId: String, hosts: String): Element(configuration);

    /** This function deletes the configuration for the specified forest from the configuration. **/
    forestDelete(config: Element(configuration), forestIds: String, deleteData: Boolean): Element(configuration);

    /** This function creates a new forest configuration. **/
    forestCreate(config: Element(configuration), forestName: String, hostId: String, dataDirectory: String, largeDataDirectory?: String, fastDataDirectory?: String): Element(configuration);

    /** This function creates a new forest specification with the same settings as the forest with the specified ID. The new forest configuration will have the specified name. It copies the forest configuration, but does not copy the forest data. **/
    forestCopy(config: Element(configuration), forestId: String, forestName: String, dataDirectory: String, largeDataDirectory?: String, fastDataDirectory?: String): Element(configuration);

    /** This function returns the scheduled backups for the specified forest from the configuration. **/
    forestGetBackups(config: Element(configuration), forestId: String): Forest-backup);

    /** This function constructs a weekly scheduled backup. **/
    forestWeeklyBackup(backupDir: String, backupPeriod: Number, days: String, startTime: String): Forest-backup);

    /** This function constructs a monthly scheduled backup. **/
    forestMonthlyBackup(backupDir: String, backupPeriod: Number, backupMonthDay: Number, startTime: String): Forest-backup);

    /** This function constructs a one-time backup. **/
    forestOneTimeBackup(backupDir: String, start: Date): Forest-backup);

    /** This function adds scheduled backup specifications for a forest to a configuration. **/
    forestAddBackup(config: Element(configuration), forestId: String, backups: Forest-backup)): Element(configuration);

    /** This function deletes scheduled backup specifications for a forest from a configuration. **/
    forestDeleteBackup(config: Element(configuration), forestId: String, backups: Forest-backup)): Element(configuration);

    /** This function return the ID for the specified host from the configuration. The difference between this function and xdmp:host() is that the ID from this function can come from a host that has not yet been saved (that is, from a host that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created host without the need to first save the configuration. **/
    hostGetId(config: Element(configuration), hostName: String): String;

    /** This function returns the name for the host with the specified ID. **/
    hostGetName(config: Element(configuration), hostId: String): String;

    /** This function returns the group ID for the host with the specified ID. **/
    hostGetGroup(config: Element(configuration), hostId: String): String;

    /** This function returns the bind port for the host with the specified ID. **/
    hostGetPort(config: Element(configuration), hostId: String): Number;

    /** This function changes the name of an existing host to the newly specified value. **/
    hostSetName(config: Element(configuration), hostId: String, value: String): Element(configuration);

    /** This function changes the group to which an existing host belongs to the newly specified value. **/
    hostSetGroup(config: Element(configuration), hostId: String, value: String): Element(configuration);

    /** This function changes the bind port value for the host to the newly specified value. **/
    hostSetPort(config: Element(configuration), hostId: String, value: Number): Element(configuration);

    /** This function returns the type of appserver with the specified ID. It will be one of "http", "xdbc", "odbc", or "webDAV". **/
    appserverGetType(config: Element(configuration), appserverId: String): String;

    /** This function returns the ID of the specified App Server's group. **/
    appserverGetGroupId(config: Element(configuration), appserverId: String): String;

    /** This function returns the ID(s) of the hosts the specified App Server's is currently running on. **/
    appserverGetHostIds(config: Element(configuration), appserverId: String): String;

    /** This function returns the ID of the specified App Server. The difference between this function and xdmp:server() is that the ID from this function can come from an appserver that has not yet been saved (that is, from an appserver that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created appserver without the need to first save the configuration. **/
    appserverGetId(config: Element(configuration), groupIds: String, appserverName: String): String;

    /** This function returns the name of the appserver with the specified ID. **/
    appserverGetName(config: Element(configuration), appserverId: String): String;

    /** This function returns the root for the specified App Server. **/
    appserverGetRoot(config: Element(configuration), appserverId: String): String;

    /** This function returns the port for the specified App Server. **/
    appserverGetPort(config: Element(configuration), appserverId: String): Number;

    /** This function returns the ID of the database set as the modules database for the specified database. **/
    appserverGetModulesDatabase(config: Element(configuration), appserverId: String): String;

    /** This function returns the ID of the database to which the App Server is set to execute queries against for the specified database. **/
    appserverGetDatabase(config: Element(configuration), appserverId: String): String;

    /** This function returns the ID of the database to which the App Server stores users' last login information. **/
    appserverGetLastLogin(config: Element(configuration), appserverId: String): String;

    /** This function returns the value of the whether or not the appserver should display users' last login information. **/
    appserverGetDisplayLastLogin(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the IP address of the App Server configuration. The default is 0.0.0.0. **/
    appserverGetAddress(config: Element(configuration), appserverId: String): String;

    /** This function returns the socket listen backlog setting for the specified App Server. **/
    appserverGetBacklog(config: Element(configuration), appserverId: String): Number;

    /** This function returns the maximum number of threads configured for the specified App Server. **/
    appserverGetThreads(config: Element(configuration), appserverId: String): Number;

    /** This function returns the request timeout value configured for the specified App Server. **/
    appserverGetRequestTimeout(config: Element(configuration), appserverId: String): Number;

    /** This function returns the keep alive timeout value configured for the specified App Server. **/
    appserverGetKeepAliveTimeout(config: Element(configuration), appserverId: String): Number;

    /** This function returns the session timeout value configured for the specified App Server. **/
    appserverGetSessionTimeout(config: Element(configuration), appserverId: String): Number;

    /** This function returns the connection timeout value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetConnectionTimeout(config: Element(configuration), appserverId: String): Number;

    /** This function returns the default time limit value configured for the specified App Server. **/
    appserverGetDefaultTimeLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the default SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetDefaultQueryTimeLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the max time limit value configured for the specified App Server. **/
    appserverGetMaxTimeLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the max SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
    appserverGetMaxQueryTimeLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the pre commit trigger depth value configured for the specified App Server. **/
    appserverGetPreCommitTriggerDepth(config: Element(configuration), appserverId: String): Number;

    /** This function returns the pre commit trigger limit value configured for the specified App Server. **/
    appserverGetPreCommitTriggerLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the collation URI set in the configuration for the specified App Server. **/
    appserverGetCollation(config: Element(configuration), appserverId: String): String;

    /** This function returns the authentication scheme (basic, digest, digestbasic, or application-level) configured for the specified App Server. **/
    appserverGetAuthentication(config: Element(configuration), appserverId: String): String;

    /** This function returns the default user value configured for the specified App Server. The default user only is used with application-level authentication. **/
    appserverGetDefaultUser(config: Element(configuration), appserverId: String): String;

    /** This function returns the privilege ID for the specified App Server. If no privilege is configured, It returns 0. **/
    appserverGetPrivilege(config: Element(configuration), appserverId: String): String;

    /** This function returns the concurrent request limit for any user for the specified App Server. 0 indicates no bound on the number of concurrent requests. **/
    appserverGetConcurrentRequestLimit(config: Element(configuration), appserverId: String): Number;

    /** This function returns the value of the log errors setting configured for this App Server, where true indicates that the App Server will send uncaught exceptions to the ErrorLog.txt file, and false indicates that it will not. **/
    appserverGetLogErrors(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the value of debug allow setting configured for this App Server, where true indicates that the App Server will allow queries to be debugged, and false indicates that it will not. **/
    appserverGetDebugAllow(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the value of the profile allow setting configured for this App Server, where true indicates that the App Server will allow queries to be profiled, and false indicates that it will not. **/
    appserverGetProfileAllow(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the value of the default xquery version configured for the specified App Server. **/
    appserverGetDefaultXqueryVersion(config: Element(configuration), appserverId: String): String;

    /** This function returns the value of the multi version concurrency control option configured for the specified App Server. **/
    appserverGetMultiVersionConcurrencyControl(config: Element(configuration), appserverId: String): String;

    /** This function returns the value of the distribute timestamps control option configured for the specified App Server. **/
    appserverGetDistributeTimestamps(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output sgml character entities setting for the specified App Server. **/
    appserverGetOutputSgmlCharacterEntities(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output encoding setting for the specified App Server. **/
    appserverGetOutputEncoding(config: Element(configuration), appserverId: String): String;

    /** This function returns the path to the error handler configured for this App Server. If no error handler is configured, returns the empty string. **/
    appserverGetErrorHandler(config: Element(configuration), appserverId: String): String;

    /** This function returns the path to the URL rewriter configured for this App Server. If no URL rewriter is configured, returns the empty string. **/
    appserverGetUrlRewriter(config: Element(configuration), appserverId: String): String;

    /** This function returns the enabled state for the specified App Server. **/
    appserverGetEnabled(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the value of any schemas definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetSchemas(config: Element(configuration), appserverId: String): Schema);

    /** This function returns the value of any namespace definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetNamespaces(config: Element(configuration), appserverId: String): Namespace);

    /** This function returns the value of the "expires" HTTP header for static content to expire after this many seconds port for the specified App Server. **/
    appserverGetStaticExpires(config: Element(configuration), appserverId: String): Number;

    /** This function returns the value of whether the WebDAV server computes content length. **/
    appserverGetComputeContentLength(config: Element(configuration), appserverId: String): Boolean;

    /** This function changes the name of an existing App Server to the newly specified value. **/
    appserverSetName(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function changes the root for a specified App Server to the newly specified value. **/
    appserverSetRoot(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function changes the port in the configuration for the specified App Server to the specified number. Changing the port is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetPort(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the value in the configuration of modules database for the specified App Server to the specified database ID. **/
    appserverSetModulesDatabase(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value in the configuration of the database for the specified App Server. **/
    appserverSetDatabase(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value in the configuration of the last login database for the specified App Server. If the value is equal to 0, then the last-login feature is disabled for this appserver. **/
    appserverSetLastLogin(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the display last login setting in the configuration for the specified App Server. **/
    appserverSetDisplayLastLogin(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function changes the IP Address in the configuration for the specified App Server to the specified address. Changing the address is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetAddress(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value in the configuration of the backlog (the maximum number of pending connections allowed on the HTTP socket) for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetBacklog(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the value in the configuration of the maximum number of threads for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    appserverSetThreads(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the value of the socket request timeout (the number of seconds before the socket times out) in the configuration for the specified App Server. **/
    appserverSetRequestTimeout(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the keep-alive timeout (the maximum number of second for subsequent socket requests to time out) in the configuration for the specified App Server. **/
    appserverSetKeepAliveTimeout(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the session timeout value (in seconds) in the configuration for the specified App Server. **/
    appserverSetSessionTimeout(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the connection timeout value (in seconds) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetConnectionTimeout(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the default time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
    appserverSetDefaultTimeLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the default SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetDefaultQueryTimeLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the max time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
    appserverSetMaxTimeLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the max SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
    appserverSetMaxQueryTimeLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the maximum depth (how many triggers can cause other triggers to fire, which in turn cause others to fire, and so on) in the configuration for the specifed App Server. **/
    appserverSetPreCommitTriggerDepth(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the value in the configuration for the maximum number of pre-commit triggers a single statement can invoke for the specified App Server. **/
    appserverSetPreCommitTriggerLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the default collation in the configuration for the specified App Server. **/
    appserverSetCollation(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the authentication scheme in the configuration for the specified App Server. **/
    appserverSetAuthentication(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the default user (for use with application-level authentication) in the configuration for the specified App Server. **/
    appserverSetDefaultUser(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets an execute privilege in the configuration for the specified App Server. When a privilege is set, the user who makes a request to the App Server must have been granted (via a role, either directly or indirectly) the specified privilege. **/
    appserverSetPrivilege(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the limit on concurrent requests that any user may have on a particular appserver. Setting the limit to 0 indicates there is no bound on the number of concurrent requests. **/
    appserverSetConcurrentRequestLimit(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function sets the log errors setting in the configuration for the specified App Server. **/
    appserverSetLogErrors(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function sets the debug allow setting in the configuration for the specified App Server. **/
    appserverSetDebugAllow(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function sets the profile allow setting in the configuration for the specified App Server. **/
    appserverSetProfileAllow(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function sets the default XQuery version setting in the configuration for this App Server. This setting determines the XQuery dialect used in queries against this App Server when one is not explicitly specified in the XQuery version declaration. **/
    appserverSetDefaultXqueryVersion(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the multi version concurrency control value in the configuration for this App Server. This option specifies how the latest timestamp is chosen for lock-free queries. When set to contemporaneous, the server chooses the latest timestamp for which any transaction is known to have committed, even though there still may be other transactions for that timestamp that have not yet fully committed. Queries will see more timely results, but may block waiting for contemporaneous transactions to fully commit. When set to nonblocking, the server chooses the latest timestamp for which all transactions are known to have committed, even though there may be a later timestamp for which another transaction has committed. Queries won't block waiting for transactions, but they may see less timely results. **/
    appserverSetMultiVersionConcurrencyControl(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the distribute timestamps control value in the configuration for this App Server. This option specifies how the latest timestamp is distributed after updates. This affects performance of updates and the timeliness of read-after-write query results from other hosts in the group. When set to fast, updates return as quicky as possible. No special timestamp notification messages are broadcasted to other hosts. Instead, timestamps are distributed to other hosts when any other message is sent. The maximum amount of time that could pass before other hosts see the update timestamp is one second, because a heartbeat message is sent to other hosts every second. When set to strict, updates immediately broadcast timestamp notification messages to every other host in the group. Updates do not return until their timestamp has been distributed. This ensures timeliness of read-after-write query results from other hosts in the group. **/
    appserverSetDistributeTimestamps(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the SGML character entity output setting in the configuration for the specified App Server. The SGML setting determines how characters that can be represented as SGML entites are serialized upon output by default in a query against the specified App Server. **/
    appserverSetOutputSgmlCharacterEntities(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value for the default output encoding in the configuration for the specified App Server. **/
    appserverSetOutputEncoding(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value of the path to the error handler in the configuration for the specified App Server. The path should specify a relative or absolute path to an XQuery module that is executed in the event of any 400 or 500 series HTTP errors (sometime known as a "sorry" server to give the user a clean error page). **/
    appserverSetErrorHandler(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the value of the path to the URL rewriter in the configuration for the specified App Server. This function supports both the interpretive and declarative rewriters. The path should specify a relative or absolute path to either an XQuery module used as the interpretive rewriter or the XML file used by the declarative rewriter. **/
    appserverSetUrlRewriter(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the enabled state in the configuration for the specified App Server. **/
    appserverSetEnabled(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function changes the value of the "expires" HTTP header for a specified App Server to the newly specified value. **/
    appserverSetStaticExpires(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function changes the value whether a WebDAV server computes content length. **/
    appserverSetComputeContentLength(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function returns the request blackouts specification for the specified appserver from the configuration. **/
    appserverGetRequestBlackouts(config: Element(configuration), appserverId: String): Request-blackout);

    /** This function constructs a request-blackout specification. **/
    appserverRecurringRequestBlackout(users: String, roles: String, days: String, startTime: String, endTime: String, duration: Duration): Request-blackout);

    /** This function constructs a one-time request-blackout specification. **/
    appserverOneTimeRequestBlackout(users: String, roles: String, start: Date, end: Date, duration: Duration): Request-blackout);

    /** This function adds a request blackout specification for a appserver to a configuration. **/
    appserverAddRequestBlackout(config: Element(configuration), appserverId: String, requestBlackouts: Request-blackout)): Element(configuration);

    /** This function deletes a request blackout specification for a appserver from a configuration. **/
    appserverDeleteRequestBlackout(config: Element(configuration), appserverId: String, blackouts: Request-blackout)): Element(configuration);

    /** This function constructs a schema element with the specified prefix and URI. **/
    groupSchema(namespaceUri: String, schemaLocation: String): Schema);

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified App Server. Schemas with a schema binding definition are automatically imported into queries run against the App Server. **/
    appserverAddSchema(config: Element(configuration), appserverId: String, schemas: Schema)): Element(configuration);

    /** This function deletes a schema definition in the configuration for the specified App Server. **/
    appserverDeleteSchema(config: Element(configuration), appserverId: String, schemas: Schema)): Element(configuration);

    /** This function constructs a namespace element with the specified prefix and URI. **/
    groupNamespace(prefix: String, namespaceUri: String): Namespace);

    /** Add one or more namespaces to an App Server configuration, which will predefine the namespace(s) for all requests evaluated against the App Server. **/
    appserverAddNamespace(config: Element(configuration), appserverId: String, namespaces: Namespace)): Element(configuration);

    /** This function deletes a namespace configuration from the configuration for the specified App Server. **/
    appserverDeleteNamespace(config: Element(configuration), appserverId: String, namespaces: Namespace)): Element(configuration);

    /** This function deletes one or more App Servers in the configuration. **/
    appserverDelete(config: Element(configuration), appserverIds: String): Element(configuration);

    /** This function creates a new HTTP App Server with the specified name, root, and port in the configuration. **/
    httpServerCreate(config: Element(configuration), groupId: String, appserverName: String, root: String, port: String, modulesId: String, databaseId: String): Element(configuration);

    /** This function creates a new XDBC App Server with the specified name, root, and port in the configuration. **/
    xdbcServerCreate(config: Element(configuration), groupId: String, appserverName: String, root: String, port: String, modulesId: String, databaseId: String): Element(configuration);

    /** This function creates a new WebDAV App Server with the specified name, library, and port in the configuration. **/
    webdavServerCreate(config: Element(configuration), groupId: String, appserverName: String, root: String, port: String, databaseId: String): Element(configuration);

    /** This function creates a new App Server specification with the same settings as the App Server with the specified ID. The new App Server configuration will have the specified name. You can copy the App Server to a new one either in the same group (by specifying $old-group-id and $new-group-id with the same group ID) or in a different group. **/
    appserverCopy(config: Element(configuration), appserverId: String, targetGroupId: String, appserverName: String, port: String): Element(configuration);

    /** This function returns the name of the task server for the specified group from the configuration. **/
    taskserverGetName(config: Element(configuration), groupId: String): String;

    /** This function returns the number of threads configured on the task server for the specified group. **/
    taskserverGetThreads(config: Element(configuration), groupId: String): Number;

    /** This function returns the number of debug threads configured on the task server for the specified group. **/
    taskserverGetDebugThreads(config: Element(configuration), groupId: String): Number;

    /** This function returns the default time limit configured on the task server for the specified group. **/
    taskserverGetDefaultTimeLimit(config: Element(configuration), groupId: String): Number;

    /** This function returns the maximum time limit configured on the task server for the specified group. **/
    taskserverGetMaxTimeLimit(config: Element(configuration), groupId: String): Number;

    /** This function returns the number queue size configured on the task server for the specified group. **/
    taskserverGetQueueSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the maximum pre-commit trigger depth configured on the task server for the specified group. **/
    taskserverGetPreCommitTriggerDepth(config: Element(configuration), groupId: String): Number;

    /** This function returns the maximum post-commit trigger depth configured on the task server for the specified group. **/
    taskserverGetPostCommitTriggerDepth(config: Element(configuration), groupId: String): Number;

    /** This function returns the pre-commit trigger limit configured on the task server for the specified group. **/
    taskserverGetPreCommitTriggerLimit(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the log-errors setting configured on the task server for the specified group. **/
    taskserverGetLogErrors(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the value for the debug-allow setting configured on the task server for the specified group. **/
    taskserverGetDebugAllow(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the value for the profile-allow setting configured on the task server for the specified group. **/
    taskserverGetProfileAllow(config: Element(configuration), groupId: String): Boolean;

    /** This function sets the value in the configuration of the maximum number of threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetThreads(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value in the configuration of the maximum number of debug threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetDebugThreads(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the task server default time limit in the configuration. **/
    taskserverSetDefaultTimeLimit(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the task server max time limit in the configuration. **/
    taskserverSetMaxTimeLimit(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value in the configuration of the maximum queue size for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    taskserverSetQueueSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
    taskserverSetPreCommitTriggerDepth(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value for the task server post-commit trigger depth in the configuration. **/
    taskserverSetPostCommitTriggerDepth(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
    taskserverSetPreCommitTriggerLimit(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the value for the log errors setting for the task server in the configuration. **/
    taskserverSetLogErrors(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function sets the value for the debug allow setting for the task server in the configuration. **/
    taskserverSetDebugAllow(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function sets the value for the profile allow setting for the task server in the configuration. **/
    taskserverSetProfileAllow(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function returns the IDs of all hosts belonging to the group. **/
    groupGetHostIds(config: Element(configuration), groupId: String): String;

    /** This function returns the IDs of all appservers belonging to the group. **/
    groupGetAppserverIds(config: Element(configuration), groupId: String): String;

    /** This function returns the IDs of all httpservers belonging to the group. **/
    groupGetHttpserverIds(config: Element(configuration), groupId: String): String;

    /** This function returns the IDs of all xdbcservers belonging to the group. **/
    groupGetXdbcserverIds(config: Element(configuration), groupId: String): String;

    /** This function returns the IDs of all webdavservers belonging to the group. **/
    groupGetWebdavserverIds(config: Element(configuration), groupId: String): String;

    /** This function returns the ID of of the taskserver belonging to the group. **/
    groupGetTaskserverId(config: Element(configuration), groupId: String): String;

    /** This function returns the ID of the group. The difference between this function and xdmp:group() is that the ID from this function can come from a group that has not yet been saved (that is, from a group that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created group without the need to first save the configuration. **/
    groupGetId(config: Element(configuration), groupName: String): String;

    /** This function returns the name of the specified group. **/
    groupGetName(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the list cache size setting from the specified group. **/
    groupGetListCacheSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the list cache partitions setting from the specified group. **/
    groupGetListCachePartitions(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the compressed tree cache size setting from the specified group. **/
    groupGetCompressedTreeCacheSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the compressed tree cache partitions setting from the specified group. **/
    groupGetCompressedTreeCachePartitions(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the compressed tree read size (in kilobytes) setting from the specified group. **/
    groupGetCompressedTreeReadSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the expanded tree cache size setting from the specified group. **/
    groupGetExpandedTreeCacheSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the expanded tree cache partitions setting from the specified group. **/
    groupGetExpandedTreeCachePartitions(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the smtp relay setting from the specified group. **/
    groupGetSmtpRelay(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the smtp timeout setting from the specified group. **/
    groupGetSmtpTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the http user agent setting from the specified group. **/
    groupGetHttpUserAgent(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the http timeout setting from the specified group. **/
    groupGetHttpTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the xdqp timeout setting from the specified group. **/
    groupGetXdqpTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the host timeout setting from the specified group. **/
    groupGetHostTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the host initial timeout setting from the specified group. **/
    groupGetHostInitialTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the number of seconds a request will retry before timing out. **/
    groupGetRetryTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
    groupGetModuleCacheTimeout(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the system log level setting from the specified group. **/
    groupGetSystemLogLevel(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the file log level setting from the specified group. **/
    groupGetFileLogLevel(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the rotate log files setting from the specified group. **/
    groupGetRotateLogFiles(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the keep log files setting from the specified group. **/
    groupGetKeepLogFiles(config: Element(configuration), groupId: String): Number;

    /** This function returns the value for the failover enable setting from the specified group. **/
    groupGetFailoverEnable(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the value for the trace events activated setting from the specified group. **/
    groupGetTraceEventsActivated(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the value of any schemas definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
    groupGetSchemas(config: Element(configuration), groupId: String): Schema);

    /** This function returns the value of any namespace definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
    groupGetNamespaces(config: Element(configuration), groupId: String): Namespace);

    /** This function returns the value of any trace events activated for the specified group. If none are defined, returns the empty sequence. **/
    groupGetTraceEvents(config: Element(configuration), groupId: String): Event);

    /** This function changes the name of the group with the specified ID to the specified name. **/
    groupSetName(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the list cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetListCacheSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the list cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetListCachePartitions(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the compressed tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeCacheSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the compressed tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeCachePartitions(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the compressed tree read size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetCompressedTreeReadSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the expanded tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetExpandedTreeCacheSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the expanded tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetExpandedTreeCachePartitions(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the SMTP relay setting for the group in the configuration. **/
    groupSetSmtpRelay(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the SMTP timeout setting for the group in the configuration. **/
    groupSetSmtpTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the HTTP User-Agent setting for the group in the configuration. **/
    groupSetHttpUserAgent(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the HTTP timeout setting for the group in the configuration. **/
    groupSetHttpTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the XDQP timeout setting (the timeout for communication between data nodes and evaluator nodes) for the group in the configuration. **/
    groupSetXdqpTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the host timeout setting (the timeout for communication between hosts) for the group in the configuration. **/
    groupSetHostTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the host initial timeout setting (the time the cluster will wait for a host to come online during cluster startup) for the group in the configuration. **/
    groupSetHostInitialTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the number of seconds a request will retry before timing out. **/
    groupSetRetryTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
    groupSetModuleCacheTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the host system log level setting for the group in the configuration. **/
    groupSetSystemLogLevel(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the host file log level setting for the group in the configuration. **/
    groupSetFileLogLevel(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the rotate log files setting for the group in the configuration. **/
    groupSetRotateLogFiles(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the keep log files setting for the group in the configuration. **/
    groupSetKeepLogFiles(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the failover enable setting for the group in the configuration. **/
    groupSetFailoverEnable(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function changes the value for trace events in the group configuration. **/
    groupSetTraceEventsActivated(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. Schemas with a schema binding definition are automatically imported into queries run against any App Server in the group. **/
    groupAddSchema(config: Element(configuration), groupId: String, schemas: Schema)): Element(configuration);

    /** This function deletes a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. **/
    groupDeleteSchema(config: Element(configuration), groupId: String, schemas: Schema)): Element(configuration);

    /** Add one or more namespaces to a Group configuration, which will predefine the namespace(s) for all requests evaluated against any App Server in the Group. **/
    groupAddNamespace(config: Element(configuration), groupId: String, namespaces: Namespace)): Element(configuration);

    /** This function deletes the specified namespaces from the configuration for the specified group. **/
    groupDeleteNamespace(config: Element(configuration), groupId: String, namespaces: Namespace)): Element(configuration);

    /** This function constructs an event element for the specified event name. **/
    groupTraceEvent(eventId: String): Event);

    /** This function adds trace events to the configuration. **/
    groupAddTraceEvent(config: Element(configuration), groupId: String, events: Event)): Element(configuration);

    /** This function deletes the specified trace events from the configuration. **/
    groupDeleteTraceEvent(config: Element(configuration), groupId: String, events: Event)): Element(configuration);

    /** This function deletes one or more groups in the configuration. **/
    groupDelete(config: Element(configuration), groupIds: String): Element(configuration);

    /** This function creates a new group with the specified name in the configuration. The new group has the default values. **/
    groupCreate(config: Element(configuration), groupName: String): Element(configuration);

    /** This function creates a new group specification with the same settings as the group with the specified ID. The new group configuration will have the specified name. **/
    groupCopy(config: Element(configuration), groupId: String, groupName: String): Element(configuration);

    /** This function returns the value for the audit enabled setting from the specified group. **/
    groupGetAuditEnabled(config: Element(configuration), groupId: String): Boolean;

    /** This function changes the audit enabled setting for the group in the configuration. **/
    groupSetAuditEnabled(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function returns the value for the rotate audit files setting from the specified group. **/
    groupGetRotateAuditFiles(config: Element(configuration), groupId: String): String;

    /** This function returns the value for the keep audit files setting from the specified group. **/
    groupGetKeepAuditFiles(config: Element(configuration), groupId: String): Number;

    /** This function changes the rotate audit files setting for the group in the configuration. **/
    groupSetRotateAuditFiles(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function changes the keep audit files setting for the group in the configuration. **/
    groupSetKeepAuditFiles(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
    groupEnableAuditEventType(config: Element(configuration), groupId: String, eventType: String): Element(configuration);

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
    groupDisableAuditEventType(config: Element(configuration), groupId: String, eventType: String): Element(configuration);

    /** This function returns the audit event type's enabled setting for the audit configuration. A value of true is returned is the specified event type is set. Otherwise false is returned. **/
    groupGetAuditEventTypeEnabled(config: Element(configuration), groupId: String, eventType: String): Boolean;

    /** This function restricts the audit configuration by excluding or including by user. **/
    groupSetAuditUserRestriction(config: Element(configuration), groupId: String, restrictionType: String, users: String): Element(configuration);

    /** This function returns the users excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedUsers(config: Element(configuration), groupId: String): String;

    /** This function returns the users included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedUsers(config: Element(configuration), groupId: String): String;

    /** This function restricts the audit configuration by excluding or including by role. **/
    groupSetAuditRoleRestriction(config: Element(configuration), groupId: String, restrictionType: String, roles: String): Element(configuration);

    /** This function returns the roles excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedRoles(config: Element(configuration), groupId: String): String;

    /** This function returns the roles included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedRoles(config: Element(configuration), groupId: String): String;

    /** This function restricts the audit configuration by excluding or including by document uri(s). **/
    groupSetAuditUriRestriction(config: Element(configuration), groupId: String, restrictionType: String, uris: String): Element(configuration);

    /** This function returns the uris excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditExcludedUris(config: Element(configuration), groupId: String): String;

    /** This function returns the uris included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
    groupGetAuditIncludedUris(config: Element(configuration), groupId: String): String;

    /** This function restricts the audit configuration by auditing events only if they are "success" or "failure" events. **/
    groupSetAuditOutcomeRestriction(config: Element(configuration), groupId: String, outcome: String): Element(configuration);

    /** This function returns whether auditing events are restricted by a success or failure outcome. Returns "success","failure", or "both" **/
    groupGetAuditOutcomeRestriction(config: Element(configuration), groupId: String): String;

    /** This function adds mimetypes to the configuration. This function always requires a server restart to take effect. **/
    mimetypesAdd(config: Element(configuration), mimetypes: Mimetype)): Element(configuration);

    /** This function deletes mimetypes from the configuration. This function always requires a server restart to take effect. **/
    mimetypesDelete(config: Element(configuration), mimetypes: Mimetype)): Element(configuration);

    /** This function returns all the mimetypes from the configuration. **/
    mimetypesGet(config: Element(configuration)): Mimetype);

    /** This function constructs a mimetype specification. **/
    mimetype(name: String, extensions: String, format: String): Mimetype);

    /** This function constructs a daily scheduled database backup specification. **/
    databaseDailyBackup(backupDir: String, backupPeriod: Number, startTime: String, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a daily scheduled incremental database backup specification. **/
    databaseDailyIncrementalBackup(backupDir: String, backupPeriod: Number, startTime: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs an hourly scheduled database backup specification. **/
    databaseHourlyBackup(backupDir: String, backupPeriod: Number, startMinute: NonNegativeInteger, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs an hourly scheduled incremental database backup specification. **/
    databaseHourlyIncrementalBackup(backupDir: String, backupPeriod: Number, startMinute: NonNegativeInteger, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a scheduled database backup specification on a number-of-minutes basis. **/
    databaseMinutelyBackup(backupDir: String, backupPeriod: Number, maxBackups: String, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a scheduled incremental database backup specification based on a number of minutes. **/
    databaseMinutelyIncrementalBackup(backupDir: String, backupPeriod: Number, backupSecurityDb: Boolean, backupSchemasDb: Boolean, backupTriggersDb: Boolean, includeReplicas?: Boolean, incrementalDir?: String, purgeJournalArchive?: Boolean, journalArchiving?: Boolean, journalArchivePath?: String, lagLimit?: String): Database-backup);

    /** This function constructs a hourly scheduled forest backup specification. **/
    forestHourlyBackup(backupDir: String, backupPeriod: Number, startMinute: NonNegativeInteger): Forest-backup);

    /** This function constructs a scheduled forest backup on a number-of-minutes basis. **/
    forestMinutelyBackup(backupDir: String, backupPeriod: Number): Forest-backup);

    /** This function returns all of the tasks scheduled for the specified group. **/
    groupGetScheduledTasks(config: Element(configuration), groupId: String): Scheduled-task);

    /** This function adds one or more scheduled tasks to the specified group. **/
    groupAddScheduledTask(config: Element(configuration), groupId: String, scheduledTasks: Scheduled-task)): Element(configuration);

    /** This function deletes one or more scheduled tasks from the specified group. **/
    groupDeleteScheduledTask(config: Element(configuration), groupId: String, scheduledTasks: Scheduled-task)): Element(configuration);

    /** This function constructs a task to be invoked once, at a specific calendar day and time. **/
    groupOneTimeScheduledTask(taskPath: String, taskRoot: String, taskStart: Date, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function constructs a task to be invoked at monthly intervals. **/
    groupMonthlyScheduledTask(taskPath: String, taskRoot: String, taskPeriod: Number, taskMonthDay: String, taskStartTime: String, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function constructs a task to be invoked at weekly intervals. **/
    groupWeeklyScheduledTask(taskPath: String, taskRoot: String, taskPeriod: Number, taskDays: String, taskStartTime: String, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function constructs a task to be invoked at daily intervals. **/
    groupDailyScheduledTask(taskPath: String, taskRoot: String, taskPeriod: Number, taskStartTime: String, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function constructs a task to be invoked at hourly intervals. **/
    groupHourlyScheduledTask(taskPath: String, taskRoot: String, taskPeriod: Number, taskMinute: NonNegativeInteger, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function constructs a task to be invoked at intervals defined in terms of minutes. **/
    groupMinutelyScheduledTask(taskPath: String, taskRoot: String, taskPeriod: Number, taskDatabase: String, taskModules: String, taskUser: String, taskHost: String, taskPriority?: String): Scheduled-task);

    /** This function returns the id of the SSL certificate template used by the specified App Server. If no template is set for the App Server, 0 is returned. **/
    appserverGetSslCertificateTemplate(config: Element(configuration), appserverId: String): String;

    /** This function returns the SSL ciphers set for the App Server. **/
    appserverGetSslCiphers(config: Element(configuration), appserverId: String): String;

    /** This function returns the SSL hostname for the specified App Server. If no hostname is set, nothing is returned. **/
    appserverGetSslHostname(config: Element(configuration), appserverId: String): String;

    /** This function sets an SSL certificate template for the specified App Server. **/
    appserverSetSslCertificateTemplate(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets SSL ciphers for the specified App Server. This is the standard cipher specification string for OpenSSL. **/
    appserverSetSslCiphers(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets an SSL hostname for the specified App Server. The SSL hostname should only be set when a proxy or load balancer is used to represent multiple servers. In this case, you can specify an SSL hostname with this function and all instances of the application server will identify themselves as that host. **/
    appserverSetSslHostname(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function returns true if the SSL v3 protocol is enabled for the specified App Server, or false if SSL v3 is disabled. **/
    appserverGetSslAllowSslv3(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns true if the TLS protocol is enabled for the specified App Server, or false if TLS is disabled. **/
    appserverGetSslAllowTls(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the id(s) of the client certificate authority for the specified App Server. If no client certificate authority is set, this function returns an empty sequence. **/
    appserverGetSslClientCertificateAuthorities(config: Element(configuration), appserverId: String): String;

    /** This function enables or disables the SSL v3 protocol for the specified App Server. **/
    appserverSetSslAllowSslv3(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function enables or disables the TLS protocol for the specified App Server. **/
    appserverSetSslAllowTls(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function sets one or more client certificate authorities that sign client certificates for the specified App Server. This function is typically used along with the pki:insert-trusted-certificates and pki:get-trusted-certificate-ids functions to import trusted Certificate Authorities for client certificates. **/
    appserverSetSslClientCertificateAuthorities(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function constructs a daily scheduled forest backup. **/
    forestDailyBackup(backupDir: String, backupPeriod: Number, startTime: String): Forest-backup);

    /** This function specifies whether to use the default term-frequency normalization (scaled-log), which scales the term frequency based on the size of the document, or to use the unscaled-log, which uses term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
    databaseSetTfNormalization(config: Element(configuration), databaseId: String, value: String): Element(configuration);

    /** This function returns the current term-frequency normalization setting for the database. The returned value is either (scaled-log), which means to scale the term frequency based on the size of the document, or unscaled-log, which means to use term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
    databaseGetTfNormalization(config: Element(configuration), databaseId: String): String;

    /** This function returns true if SSL is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslEnabled(config: Element(configuration), groupId: String): Boolean;

    /** This function returns true if the SSL v3 protocol is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslAllowSslv3(config: Element(configuration), groupId: String): Boolean;

    /** This function returns true if the TLS protocol is enabled for the group. Otherwise, false is returned. **/
    groupGetXdqpSslAllowTls(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the SSL ciphers set for the group. **/
    groupGetXdqpSslCiphers(config: Element(configuration), groupId: String): String;

    /** This function enables or disables SSL for the group. **/
    groupSetXdqpSslEnabled(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function enables or disables the SSL v3 protocol for the specified group. **/
    groupSetXdqpSslAllowSslv3(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function enables or disables the TLS protocol for the specified group. **/
    groupSetXdqpSslAllowTls(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function sets SSL ciphers for the specified group. This is the standard cipher specification string for OpenSSL. **/
    groupSetXdqpSslCiphers(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function returns true if a client certificate is required for the specified App Server. Otherwise, it returns false. **/
    appserverGetSslRequireClientCertificate(config: Element(configuration), appserverId: String): Boolean;

    /** This function determines whether or not a client certificate is required for the specified App Server. **/
    appserverSetSslRequireClientCertificate(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function determines whether or not the specified database exists. Returns true if the database exists, otherwise false is returned. **/
    databaseExists(config: Element(configuration), databaseName: String): Boolean;

    /** This function determines whether or not the specified forest exists. Returns true if the forest exists, otherwise false is returned. **/
    forestExists(config: Element(configuration), forestName: String): Boolean;

    /** This function returns the ID of the database that uses the specified forest. **/
    forestGetDatabase(config: Element(configuration), forestId: String): String;

    /** This function returns the IDs of the forest replicas for the specified forest. If it returns the empty sequence, then no replacas are assigned to the specified forest. **/
    forestGetReplicas(config: Element(configuration), forestId: String): String;

    /** This function adds a forest replica to a master forest. **/
    forestAddReplica(config: Element(configuration), masterId: String, replicaId: String): Element(configuration);

    /** This function removes a forest replica from a master forest. **/
    forestRemoveReplica(config: Element(configuration), masterId: String, replicaId: String): Element(configuration);

    /** This function determines whether or not the specified Host exists. Returns true if the Host exists, otherwise false is returned. **/
    hostExists(config: Element(configuration), hostName: String): Boolean;

    /** This function determines whether or not the specified App Server exists. Returns true if the App Server exists, otherwise false is returned. **/
    appserverExists(config: Element(configuration), groupIds: String, appserverName: String): Boolean;

    /** This function determines whether or not the specified Group exists. Returns true if the Group exists, otherwise false is returned. **/
    groupExists(config: Element(configuration), groupName: String): Boolean;

    /** This function sets the field value positions setting for the specified database in the configuration. **/
    databaseSetFieldValuePositions(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function sets the field value searches setting for the specified database in the configuration. **/
    databaseSetFieldValueSearches(config: Element(configuration), databaseId: String, fieldName: String, value: Boolean): Element(configuration);

    /** This function gets the field value positions setting for the specified database in the configuration. **/
    databaseGetFieldValuePositions(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function returns the field value search setting for the specified field. **/
    databaseGetFieldValueSearches(config: Element(configuration), databaseId: String, fieldName: String): Boolean;

    /** This function sets the preload-replica-mapped-data setting for the specified database. **/
    databaseSetPreloadReplicaMappedData(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function returns the preload replica mapped data setting for the specified database from the configuration. **/
    databaseGetPreloadReplicaMappedData(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns a replica database configuration. Use the output of this function in the admin:database-set-foreign-replicas function to place the replica database configuration into the cluster configuration. **/
    databaseForeignReplica(foreignClusterId: String, foreignDatabaseId: String, connectForestsByName: Boolean, lagLimit: Number, replicationEnabled?: Boolean, queueSize?: Number): Foreign-replica);

    /** This function returns the id of the replica cluster from the replica database configuration. **/
    databaseForeignReplicaGetClusterId(foreignReplica: Foreign-replica)): String;

    /** This function returns the id of the replica database from the replica database configuration. **/
    databaseForeignReplicaGetDatabaseId(foreignReplica: Foreign-replica)): String;

    /** This function returns the connect-forests-by-name setting from the replica database configuration. This function must be executed on the master cluster. **/
    databaseForeignReplicaGetConnectForestsByName(foreignReplica: Foreign-replica)): Boolean;

    /** This function returns the lag limit value from the replica database configuration. **/
    databaseForeignReplicaGetLagLimit(foreignReplica: Foreign-replica)): Number;

    /** This function sets the lag limit value on a replica database configuration. **/
    databaseForeignReplicaSetLagLimit(foreignReplica: Foreign-replica), lagLimit: Number): Foreign-replica);

    /** This function returns the enabled flag from the replica database configuration. **/
    databaseForeignReplicaGetReplicationEnabled(foreignReplica: Foreign-replica)): Boolean;

    /** This function sets the enabled flag on a replica database configuration. **/
    databaseForeignReplicaSetReplicationEnabled(foreignReplica: Foreign-replica), enabled: Boolean): Foreign-replica);

    /** This function returns a master database configuration. Use the output of this function in the admin:database-set-foreign-master function to set the master database configuration. **/
    databaseForeignMaster(foreignClusterId: String, foreignDatabaseId: String, connectForestsByName: Boolean): Foreign-master);

    /** This function returns the id of the cluster from the specified foreign master configuration. **/
    databaseForeignMasterGetClusterId(foreignMaster: Foreign-master)): String;

    /** This function returns the id of the foreign master database. This function must be executed on the replica cluster. **/
    databaseForeignMasterGetDatabaseId(foreignMaster: Foreign-master)): String;

    /** This function returns the connect-forests-by-name setting from the master database configuration. This function must be executed on the replica cluster. **/
    databaseForeignMasterGetConnectForestsByName(foreignMaster: Foreign-master)): Boolean;

    /** This function configures the specified replica database to receive replicated data from the specified foreign master. This function must be executed on the replica cluster. **/
    databaseSetForeignMaster(config: Element(configuration), databaseId: String, foreignMaster: Foreign-master)): Element(configuration);

    /** This function removes the specified master database from the database replication configuration on the replica host. This function must be executed on the replica cluster. **/
    databaseDeleteForeignMaster(config: Element(configuration), databaseId: String): Element(configuration);

    /** This function returns the configuration for the foreign master database. This function must be executed on the replica host. **/
    databaseGetForeignMaster(config: Element(configuration), databaseId: String): Foreign-master);

    /** This function adds one or more replica databases to the database replication configuration. This function must be executed on the master cluster. **/
    databaseAddForeignReplicas(config: Element(configuration), databaseId: String, replicas: Foreign-replica)): Element(configuration);

    /** This function sets the foreign replica database configuration. This function must be executed on the master cluster. **/
    databaseSetForeignReplicas(config: Element(configuration), databaseId: String, replicas: Foreign-replica)): Element(configuration);

    /** This function deletes the foreign replica database configurations for the specified master database. This function must be executed on the master cluster. **/
    databaseDeleteForeignReplicas(config: Element(configuration), databaseId: String, foreignReplicas: Foreign-replica)): Element(configuration);

    /** This function returns the configuration elements of the replica databases associated with the master database specified by database-id. This function must be executed on the master cluster. **/
    databaseGetForeignReplicas(config: Element(configuration), databaseId: String): Foreign-replica);

    /** This function returns a replica forest configuration. Use the output of this function in the admin:forest-set-foreign-replicas function to place the replica forest configuration into the cluster configuration. This function must be executed on the master host. **/
    forestForeignReplica(foreignClusterId: String, foreignDatabaseId: String, foreignForestId: String): Foreign-replica);

    /** This function returns the id of the replica cluster from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetClusterId(foreignReplica: Foreign-replica)): String;

    /** This function returns the id of the replica database from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetDatabaseId(foreignReplica: Foreign-replica)): String;

    /** This function returns the id of the replica forest from the specified replica forest configuration element. This function must be executed on the master cluster. **/
    forestForeignReplicaGetForestId(foreignReplica: Foreign-replica)): String;

    /** This function creates a replicaton configuration element for the specified master forest. This function must be executed on the replica cluster. **/
    forestForeignMaster(foreignClusterId: String, foreignDatabaseId: String, foreignForestId: String): Foreign-master);

    /** This function returns the ID for the cluster from the foreign master forest configuration element. **/
    forestForeignMasterGetClusterId(foreignMaster: Foreign-master)): String;

    /** This function returns the id for the database from the foreign master forest configuration element. **/
    forestForeignMasterGetDatabaseId(foreignMaster: Foreign-master)): String;

    /** This function returns the id for the forest from the foreign master forest configuration element. **/
    forestForeignMasterGetForestId(foreignMaster: Foreign-master)): String;

    /** This function writes the specified foreign master forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the replica cluster. **/
    forestSetForeignMaster(config: Element(configuration), forestId: String, foreignMaster: Foreign-master)): Element(configuration);

    /** This function deletes the master forest associated with the specified replica forest from the database replication configuration. This function must be executed on the replica host. **/
    forestDeleteForeignMaster(config: Element(configuration), forestId: String): Element(configuration);

    /** This function returns the replication configuration for the master forest associated with the specified replica forest. This function must be executed on the replica host. **/
    forestGetForeignMaster(config: Element(configuration), forestId: String): Foreign-master);

    /** This function adds the replica forest that is associated with the specified master forest to the database replication configuration. This function must be executed on the master host. **/
    forestAddForeignReplicas(config: Element(configuration), forestId: String, foreignReplicas: Foreign-replica)): Element(configuration);

    /** This function writes the specified replica forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the master cluster. **/
    forestSetForeignReplicas(config: Element(configuration), forestId: String, foreignReplicas: Foreign-replica)): Element(configuration);

    /** This function deletes the foreign replica of the specified forest on the master host. **/
    forestDeleteForeignReplicas(config: Element(configuration), forestId: String, foreignReplicas: Foreign-replica)): Element(configuration);

    /** This function returns the foreign replicas configuration element. This function must be executed on the master cluster. **/
    forestGetForeignReplicas(config: Element(configuration), forestId: String): Foreign-replica);

    /** This function returns the port used by the specified host to listen for communications from foreign hosts. **/
    hostGetForeignPort(config: Element(configuration), hostId: String): Number;

    /** This function configures the specified domestic host to listen for communications from foreign hosts over the specified port. **/
    hostSetForeignPort(config: Element(configuration), hostId: String, value: Number): Element(configuration);

    /** This function returns the id of this cluster. **/
    clusterGetId(config: Element(configuration)): String;

    /** This function returns the name of this cluster. **/
    clusterGetName(config: Element(configuration)): String;

    /** This function sets the name for this cluster. **/
    clusterSetName(config: Element(configuration), name: String): Element(configuration);

    /** This function sets the SSL certificate used to establish secure communication with this cluster. **/
    clusterSetXdqpSslCertificate(config: Element(configuration), value: String): Element(configuration);

    /** This function returns the SSL certificate used to establish secure communication with this cluster. **/
    clusterGetXdqpSslCertificate(config: Element(configuration)): String;

    /** This function returns the private key for the cluster. **/
    clusterGetXdqpSslPrivateKey(config: Element(configuration)): String;

    /** This function sets the bootstrap hosts for the domestic cluster. Bootstrap hosts are accessed by hosts on foreign clusters to establish communication with the domestic cluster. **/
    clusterSetXdqpBootstrapHosts(config: Element(configuration), hostIds: String): Element(configuration);

    /** This function returns the ids of the bootstrap hosts configured for this cluster. **/
    clusterGetXdqpBootstrapHosts(config: Element(configuration)): String;

    /** This function configures a foreign host to be set by the admin:foreign-cluster-set-bootstrap-hosts function as the bootstrap host for the foreign cluster. **/
    foreignHost(hostId: String, hostName: String, connectPort: Number): Foreign-host);

    /** This function returns the id of the foreign bootstrap host. **/
    foreignHostGetId(fh: Foreign-host)): String;

    /** This function returns the name of the foreign bootstrap host. **/
    foreignHostGetName(fh: Foreign-host)): String;

    /** This function returns the number of the port configured for the foreign bootstrap host. **/
    foreignHostGetConnectPort(fh: Foreign-host)): Number;

    /** This function deletes the configuration for the specified foreign cluster. **/
    foreignClusterDelete(config: Element(configuration), clusterId: String): Element(configuration);

    /** This function replaces a configuration for a foreign cluster with a new configuration. **/
    foreignClusterReplace(config: Element(configuration), clusterId: String, clusterName: String, xdqpTimeout: Number, hostTimeout: Number, sslCertificate: String, xdqpSslEnabled: Boolean, xdqpSslAllowSslv3: Boolean, xdqpSslAllowTls: Boolean, xdqpSslCiphers: String, foreignBootstrapHosts: Foreign-host)): Element(configuration);

    /** This function creates a complete configuration for a foreign cluster. **/
    foreignClusterCreate(config: Element(configuration), clusterId: String, clusterName: String, xdqpTimeout: Number, hostTimeout: Number, sslCertificate: String, xdqpSslEnabled: Boolean, xdqpSslAllowSslv3: Boolean, xdqpSslAllowTls: Boolean, xdqpSslCiphers: String, foreignBootstrapHosts: Foreign-host)): Element(configuration);

    /** This function returns the ids of the foreign clusters. **/
    clusterGetForeignClusterIds(config: Element(configuration)): String;

    /** This function returns the id of the specified foreign cluster. **/
    clusterGetForeignClusterId(config: Element(configuration), name: String): String;

    /** This function returns the name of the foreign cluster. **/
    foreignClusterGetName(config: Element(configuration), clusterId: String): String;

    /** This function sets the name of a foreign cluster. **/
    foreignClusterSetName(config: Element(configuration), clusterId: String, clusterName: String): Element(configuration);

    /** This function sets the timeout (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. By default, the XDQP timeout setting is 10 seconds. **/
    foreignClusterSetXdqpTimeout(config: Element(configuration), clusterId: String, xdqpTimeout: Number): Element(configuration);

    /** This function returns the timeout setting (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. **/
    foreignClusterGetXdqpTimeout(config: Element(configuration), clusterId: String): Number;

    /** This function sets the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. By default, the host timeout setting is 30 seconds. **/
    foreignClusterSetHostTimeout(config: Element(configuration), clusterId: String, hostTimeout: Number): Element(configuration);

    /** This function returns the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. **/
    foreignClusterGetHostTimeout(config: Element(configuration), clusterId: String): Number;

    /** This function returns the SSL certificate used to communicate with hosts in the foreign cluster. **/
    foreignClusterGetSslCertificate(config: Element(configuration), clusterId: String): String;

    /** This function sets the specified SSL certificate for secure communication with hosts in a foreign cluster. This certificate is shared by all hosts in the cluster when communicating with foreign hosts. **/
    foreignClusterSetSslCertificate(config: Element(configuration), clusterId: String, sslCertificate: String): Element(configuration);

    /** This function returns true if SSL is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslEnabled(config: Element(configuration), clusterId: String): Boolean;

    /** This function enables or disables SSL for the foreign cluster. **/
    foreignClusterSetXdqpSslEnabled(config: Element(configuration), clusterId: String, value: Boolean): Element(configuration);

    /** This function returns true if the SSL v3 protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslAllowSslv3(config: Element(configuration), clusterId: String): Boolean;

    /** This function enables or disables the SSL v3 protocol for the specified foreign cluster. **/
    foreignClusterSetXdqpSslAllowSslv3(config: Element(configuration), clusterId: String, value: Boolean): Element(configuration);

    /** This function returns true if the TLS protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
    foreignClusterGetXdqpSslAllowTls(config: Element(configuration), clusterId: String): Boolean;

    /** This function enables or disables the TLS protocol for the specified foreign cluster. **/
    foreignClusterSetXdqpSslAllowTls(config: Element(configuration), clusterId: String, value: Boolean): Element(configuration);

    /** This function returns the SSL ciphers set for the specified foreign cluster. **/
    foreignClusterGetXdqpSslCiphers(config: Element(configuration), clusterId: String): String;

    /** This function sets SSL ciphers for the specified foreign cluster. The value parameter can be any standard cipher specification string for OpenSSL. **/
    foreignClusterSetXdqpSslCiphers(config: Element(configuration), clusterId: String, value: String): Element(configuration);

    /** This function returns one or more configuration elements that identify the bootstrap hosts on the specified foreign cluster. **/
    foreignClusterGetBootstrapHosts(config: Element(configuration), clusterId: String): Foreign-host);

    /** This function identifies the foreign host to be used to bootstrap communication with the foreign cluster. When a bootstrap host on a foreign cluster initially starts, it will bootstrap communications by establishing a connection to one or more of the hosts on this cluster. Once a connection has been established between cluster hosts, the bootstrap host retrieves configuration information to identify which foreign hosts are responsible for specific foreign forests. **/
    foreignClusterSetBootstrapHosts(config: Element(configuration), clusterId: String, bootstrapHosts: Foreign-host)): Element(configuration);

    /** This function returns the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
    databaseGetLargeSizeThreshold(config: Element(configuration), databaseId: String): Number;

    /** This function returns the directory path set in the fast data directory field for the specified forest. **/
    forestGetFastDataDirectory(config: Element(configuration), forestId: String): String;

    /** This function is executed on the master cluster to return the replication configuration for the specified local database to the specified foreign replica cluster. **/
    clusterGetForeignReplicaDatabases(config: Element(configuration), foreignClusterId: String, databaseIds: String): Foreign-replicas);

    /** This function is executed on a replica cluster to return the replication configuration for the specified local database from the specified foreign master cluster. **/
    clusterGetForeignMasterDatabase(config: Element(configuration), foreignClusterId: String, databaseIds: String): Foreign-master);

    /** This function returns the replica configuration on a foreign cluster. **/
    databaseGetConfigForForeignReplicasOnForeignCluster(config: Element(configuration), foreignClusterId: String): Database);

    /** This function returns the master configuration on a foreign cluster. **/
    databaseGetConfigForForeignMasterOnForeignCluster(config: Element(configuration), foreignClusterId: String): Database);

    /** This function returns the value for the default output serialization method setting for the specified App Server. **/
    appserverGetOutputMethod(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output byte order mark setting for the specified App Server. **/
    appserverGetOutputByteOrderMark(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output CDATA section namespace URI setting for the specified App Server. **/
    appserverGetOutputCdataSectionNamespaceUri(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output CDATA section localname setting for the specified App Server. **/
    appserverGetOutputCdataSectionLocalname(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the public doctype output setting for the specified App Server. **/
    appserverGetOutputDoctypePublic(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the system doctype output setting for the specified App Server. **/
    appserverGetOutputDoctypeSystem(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output escape URI attributes setting for the specified App Server. **/
    appserverGetOutputEscapeUriAttributes(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output include content type setting for the specified App Server. **/
    appserverGetOutputIncludeContentType(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output indent setting for the specified App Server. **/
    appserverGetOutputIndent(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output indent untyped setting for the specified App Server. **/
    appserverGetOutputIndentUntyped(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output media type setting for the specified App Server. **/
    appserverGetOutputMediaType(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output normalization form setting for the specified App Server. **/
    appserverGetOutputNormalizationForm(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output omit XML declaration setting for the specified App Server. **/
    appserverGetOutputOmitXmlDeclaration(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output standalone setting for the specified App Server. **/
    appserverGetOutputStandalone(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output undeclare prefixes setting for the specified App Server. **/
    appserverGetOutputUndeclarePrefixes(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output version setting for the specified App Server. **/
    appserverGetOutputVersion(config: Element(configuration), appserverId: String): String;

    /** This function returns the value for the output include default attributes setting for the specified App Server. **/
    appserverGetOutputIncludeDefaultAttributes(config: Element(configuration), appserverId: String): String;

    /** This function configures the default output serialization method for the specified App Server. **/
    appserverSetOutputMethod(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether for the specified App Server the output sequence of octets is or is not to be preceded by a byte order mark by default. **/
    appserverSetOutputByteOrderMark(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the namespace URI for any CDATA section localnames configured for the specified App Server. **/
    appserverSetOutputCdataSectionNamespaceUri(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the default element localname or list of element localnames to be output as CDATA sections for the specified App Server. **/
    appserverSetOutputCdataSectionLocalname(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures a default public identifier to use on the emitted DOCTYPE for the specified App Server. **/
    appserverSetOutputDoctypePublic(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures a default system identifier to use on the emitted DOCTYPE for the specified App Server. **/
    appserverSetOutputDoctypeSystem(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether or not to apply Unicode normalization, percent-encoding, and HTML escaping when serializing URI attributes by default for the specified App Server. **/
    appserverSetOutputEscapeUriAttributes(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether or not to include the content-type declaration when serializing nodes for the specified App Server. **/
    appserverSetOutputIncludeContentType(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether or not to pretty-print (indent) typed XML (that is, XML for which there is an in-scope schema) output for the specified App Server. **/
    appserverSetOutputIndent(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether or not to pretty-print (indent) untyped XML (that is, XML for which there is no in-scope schema) output for the specified App Server. **/
    appserverSetOutputIndentUntyped(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets the default serialization media type for the specified App Server. **/
    appserverSetOutputMediaType(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function sets a Unicode normalization form to be applied by default to serialized output for the specified App Server. **/
    appserverSetOutputNormalizationForm(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether serialized output for the specified App Server should omit the inclusion of an XML declaration by default. **/
    appserverSetOutputOmitXmlDeclaration(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether for the specified App Server an XML delcaration in serialized output should include a standalone attribute by default. **/
    appserverSetOutputStandalone(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether by default, serialization for the specified App Server should undeclare the namespace prefix of any child element that does not bind the prefix of its parent element. **/
    appserverSetOutputUndeclarePrefixes(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function stipulates a version of the default serialization method associated with the specified App Server. **/
    appserverSetOutputVersion(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function configures whether for the specified App Server, attributes defaulted with a schema should be included in the serialization. **/
    appserverSetOutputIncludeDefaultAttributes(config: Element(configuration), appserverId: String, value: String): Element(configuration);

    /** This function adds a foreign database to a database **/
    databaseAddForeignDatabase(config: Element(configuration), databaseId: String, foreignClusterId: String, foreignDatabaseId: String): Element(configuration);

    /** This function removes a foreign database from a database **/
    databaseDeleteForeignDatabase(config: Element(configuration), databaseId: String, foreignClusterId: String, foreignDatabaseId: String): Element(configuration);

    /** This function constructs a namespace element with the specified prefix and URI. **/
    databasePathNamespace(prefix: String, namespaceUri: String): Path-namespace);

    /** This function returns the value of any namespace definitions predefined for the specified database. If none are defined, returns the empty sequence. **/
    databaseGetPathNamespaces(config: Element(configuration), databaseId: String): Path-namespace);

    /** This function returns the prefixes of all the namespaces that are in use by some path or geospatial path index. If none is used by any path, returns the empty sequence. **/
    databaseInUsePathNamespacePrefixes(config: Element(configuration), databaseId: String): String;

    /** Add one or more namespaces to a database configuration, which will predefine the namespace(s) for all XPath expressions used in range index definitions. **/
    databaseAddPathNamespace(config: Element(configuration), databaseId: String, pathNamespaces: Path-namespace)): Element(configuration);

    /** This function deletes the specified namespaces from the configuration for the specified database. If the namespace is already in use in an index path expression, then ADMIN-PATHNAMESPACEINUSE error is returned. **/
    databaseDeletePathNamespace(config: Element(configuration), databaseId: String, pathNamespaces: Path-namespace)): Element(configuration);

    /** This function constructs a path range index specification. **/
    databaseRangePathIndex(databaseId: String, scalarType: String, pathexpr: String, collation: String, rangeValuePositions: Boolean, invalidValues: String): Range-path-index);

    /** This function returns the range path indexes specification(s) for the specified database from the configuration. **/
    databaseGetRangePathIndexes(config: Element(configuration), databaseId: String): Range-path-index);

    /** This function adds a range path index to the specified database in the configuration. **/
    databaseAddRangePathIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-path-index)): Element(configuration);

    /** This function deletes a range path index for the specified database in the configuration. **/
    databaseDeleteRangePathIndex(config: Element(configuration), databaseId: String, rangeIndexes: Range-path-index)): Element(configuration);

    /** This function constructs a geospatial path index specification. For usage details, see Geospatial Path Range Indexes in the Search Developer's Guide. **/
    databaseGeospatialPathIndex(pathexpr: String, coordinateSystem: String, rangeValuePositions: Boolean, pointFormat: String, invalidValues: String): Geospatial-path-index);

    /** This function returns the geospatial path indexes specification(s) for the specified database from the configuration. **/
    databaseGetGeospatialPathIndexes(config: Element(configuration), databaseId: String): Geospatial-path-index);

    /** This function adds a range path index to the specified database in the configuration. **/
    databaseAddGeospatialPathIndex(config: Element(configuration), databaseId: String, geospatialPathIndexes: Geospatial-path-index)): Element(configuration);

    /** This function deletes a geospatial path index for the specified database in the configuration. **/
    databaseDeleteGeospatialPathIndex(config: Element(configuration), databaseId: String, geospatialPathIndexes: Geospatial-path-index)): Element(configuration);

    /** This function returns the ids of all of the ODBC App Servers in the specified group. **/
    groupGetOdbcserverIds(config: Element(configuration), groupId: String): String;

    /** This function creates a new ODBC App Server with the specified name, root, and port in the configuration. **/
    odbcServerCreate(config: Element(configuration), groupId: String, appserverName: String, root: String, port: String, modulesId: String, databaseId: String): Element(configuration);

    /** This function returns true when OpenSSL FIPS 140-2 mode is enabled in the cluster configuration. If OpenSSL FIPS 140-2 mode is not enabled, false is returned. **/
    clusterGetSslFipsEnabled(config: Element(configuration)): Boolean;

    /** This function enables or disables OpenSSL FIPS 140-2 mode for the cluster. **/
    clusterSetSslFipsEnabled(config: Element(configuration), flag: Boolean): Element(configuration);

    /** This function validates the specified path expression, along with any namespaces used in the path expression. **/
    databaseValidatePathExpression(config: Element(configuration), databaseId: String, pathexpr: String, ignoreNs: Boolean): Boolean;

    /** This function returns any undefined namespace prefixes used in a path expression. **/
    databaseValidatePathNamespaces(config: Element(configuration), databaseId: String, pathexpr: String): String;

    /** This function gets the value for the I/O background limit that controls the I/O resoources that I/O tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
    groupGetBackgroundIoLimit(config: Element(configuration), groupId: String): Number;

    /** This function sets a limit on the amount of I/O that background tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
    groupSetBackgroundIoLimit(config: Element(configuration), groupId: String, maxMegabytesPerSecond: Number): Element(configuration);

    /** This function gets the simple storage service internet domain name for hosts in the group. **/
    groupGetS3Domain(config: Element(configuration), groupId: String): String;

    /** This function sets the simple storage service internet domain name for hosts in the group. **/
    groupSetS3Domain(config: Element(configuration), groupId: String, domain: String): Element(configuration);

    /** This function gets the simple storage service protocol for hosts in the group. **/
    groupGetS3Protocol(config: Element(configuration), groupId: String): String;

    /** This function sets the simple storage service protocol for hosts in the group. **/
    groupSetS3Protocol(config: Element(configuration), groupId: String, protocol: String): Element(configuration);

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
    groupGetS3ServerSideEncryption(config: Element(configuration), groupId: String): String;

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
    groupSetS3ServerSideEncryption(config: Element(configuration), groupId: String, protocol: String): Element(configuration);

    /** This function returns the ID of the security database for the specified group from the configuration. **/
    groupGetSecurityDatabase(config: Element(configuration), groupId: String): String;

    /** This function sets the security database for a group to the specified database in the configuration. **/
    groupSetSecurityDatabase(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function gets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. **/
    appserverGetRewriteResolvesGlobally(config: Element(configuration), appserverId: String): Boolean;

    /** This function sets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. This function requires a restart of MarkLogic Server for a change to this setting to take effect. **/
    appserverSetRewriteResolvesGlobally(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function is a constructor for field-path element. The field path element is used to construct a field. **/
    databaseFieldPath(fieldPath: String, weight: Number): Field-path);

    /** This function constructs a field specification that has field paths. **/
    databasePathField(fieldName: String, fieldPaths: Field-path)): Field);

    /** This function checks if the paths conform to the permissible XPath syntax. If any of the paths doesn't, it will return an error. Conformance to the permissible syntax for an individual path cal also be checked using function cts:valid-index-path. **/
    databaseValidateFieldPaths(config: Element(configuration), databaseId: String, fieldPaths: Field-path)): void;

    /** For a given sequence of fields, this function validates all the paths on each field using admin:database-validate-field-paths call. **/
    databaseValidatePathFields(config: Element(configuration), databaseId: String, fields: Field)): void;

    /** This function deletes paths from a specified field. **/
    databaseDeleteFieldPaths(config: Element(configuration), databaseId: String, fieldName: String, fieldPaths: Field-path)): Element(configuration);

    /** This function adds given paths to the field specified by field-name. **/
    databaseAddFieldPaths(config: Element(configuration), databaseId: String, fieldName: String, fieldPaths: Field-path)): Element(configuration);

    /** This function returns all the paths on a given field. **/
    databaseGetFieldPaths(config: Element(configuration), databaseId: String, fieldName: String): Field-path);

    /** This function renames a forest. **/
    forestRename(config: Element(configuration), forestId: String, newName: String): Element(configuration);

    /** This function sets the triple index on or off for a database. **/
    databaseSetTripleIndex(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the triple positions of a database to true or false. **/
    databaseSetTriplePositions(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the size, in megabytes, of the in-memory triple index. This is used for memory to manage triple index data in in-memory stands. **/
    databaseSetInMemoryTripleIndexSize(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function returns true if the triple index is enabled for the specified database, false if it is not enabled. **/
    databaseGetTripleIndex(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns triple positions setting of a database. **/
    databaseGetTriplePositions(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the in memory triple index size setting (in megabytes) for the specified database from the configuration. **/
    databaseGetInMemoryTripleIndexSize(config: Element(configuration), databaseId: String): Number;

    /** This function returns the value of the triple cache size for the group. **/
    groupGetTripleCacheSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the number of triple cache partitions configured for the group. **/
    groupGetTripleCachePartitions(config: Element(configuration), groupId: String): Number;

    /** This function returns the size of triple value cache configured for the group. **/
    groupGetTripleValueCacheSize(config: Element(configuration), groupId: String): Number;

    /** This function returns the number of triple value cache partitions configured for the group. **/
    groupGetTripleValueCachePartitions(config: Element(configuration), groupId: String): Number;

    /** This function sets the number of triple cache partitions to allocate. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCacheSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of partitions to allocate for the triple index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCachePartitions(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the size of the value cache for the triple index. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCacheSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of partitons to allocate for the triple value index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCachePartitions(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function gets the timeout value for the triple cache. **/
    groupGetTripleCacheTimeout(config: Element(configuration), groupId: String): Number;

    /** This function gets the timeout value for the triple value cache. **/
    groupGetTripleValueCacheTimeout(config: Element(configuration), groupId: String): Number;

    /** This function sets the timeout value for the triple cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleCacheTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the timeout value for the triple value cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
    groupSetTripleValueCacheTimeout(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function returns the value of any "using" namespaces predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetUsingNamespaces(config: Element(configuration), appserverId: String): Using-namespace);

    /** This function returns the value of any module locations predefined for the specified App Server. If none are defined, returns the empty sequence. **/
    appserverGetModuleLocations(config: Element(configuration), appserverId: String): Module-location);

    /** Add one or more "using" namespaces to an App Server configuration, which add the namespaces to the namespace path for all requests evaluated against that App Server. **/
    appserverAddUsingNamespace(config: Element(configuration), appserverId: String, namespaces: Using-namespace)): Element(configuration);

    /** Delete one or more "using" namespaces from an App Server configuration. **/
    appserverDeleteUsingNamespace(config: Element(configuration), appserverId: String, namespaces: Using-namespace)): Element(configuration);

    /** Add one or more module namespace to location mappings to an App Server configuration. The mappings are used to look up a location for an XQuery library module for any request on that App Server when the library module is requested using only the module namespace URI. **/
    appserverAddModuleLocation(config: Element(configuration), appserverId: String, moduleLocations: Module-location)): Element(configuration);

    /** This function returns the value of any "using" namespaces predefined for the specified Group. If none are defined, returns the empty sequence. **/
    groupGetUsingNamespaces(config: Element(configuration), groupId: String): Using-namespace);

    /** This function returns the value of any module locations predefined for the specified Group. If none are defined, returns the empty sequence. **/
    groupGetModuleLocations(config: Element(configuration), groupId: String): Module-location);

    /** Delete one or more module location bindings from an App Server configuration. **/
    appserverDeleteModuleLocation(config: Element(configuration), appserverId: String, moduleLocations: Module-location)): Element(configuration);

    /** This function constructs a using namespace element with the specified URI. **/
    groupUsingNamespace(namespaceUri: String): Using-namespace);

    /** This function constructs a module namespace element with the specified namespace URI and location. **/
    groupModuleLocation(namespaceUri: String, location: String): Module-location);

    /** Add one or more "using" namespaces to a Group configuration, which add the namespaces to the namespace path for all requests evaluated against any App Server in the Group. **/
    groupAddUsingNamespace(config: Element(configuration), groupId: String, namespaces: Using-namespace)): Element(configuration);

    /** Delete one or more "using" namespaces from a Group configuration. **/
    groupDeleteUsingNamespace(config: Element(configuration), groupId: String, namespaces: Using-namespace)): Element(configuration);

    /** Add one or more module namespace to location mappings to a Group configuration. The mappings are used to look up a location for an XQuery library module for any request on any App Server in that group when the library module is requested using only the module namespace URI. **/
    groupAddModuleLocation(config: Element(configuration), groupId: String, moduleLocations: Module-location)): Element(configuration);

    /** Delete one or more module location bindings from a Group configuration. **/
    groupDeleteModuleLocation(config: Element(configuration), groupId: String, moduleLocations: Module-location)): Element(configuration);

    /** This function constructs a custom tokenizer override. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseTokenizerOverride(character: String, class: String): Tokenizer-override);

    /** This function fetches any custom tokenizer override specifications for the specified field and database. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseGetFieldTokenizerOverrides(config: Element(configuration), databaseId: String, fieldName: String): Tokenizer-override);

    /** This function adds tokenizer overrides for the specified field of the specified database. For details, see Custom Tokenization in the Search Developer's Guide. **/
    databaseAddFieldTokenizerOverride(config: Element(configuration), databaseId: String, fieldName: String, tokenizerOverrides: Tokenizer-override)): Element(configuration);

    /** This function deletes the field's tokenizer override in the specified database from the configuration. **/
    databaseDeleteFieldTokenizerOverride(config: Element(configuration), databaseId: String, fieldName: String, tokenizerOverrides: Tokenizer-override)): Element(configuration);

    /** This function sets the reblanacer enable setting for the specified database in the configuration. **/
    databaseSetRebalancerEnable(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function sets the rebalancer throttle setting for the specified database in the configuration. **/
    databaseSetRebalancerThrottle(config: Element(configuration), databaseId: String, value: Number): Element(configuration);

    /** This function returns the rebalancer enable setting for the specified database from the configuration. **/
    databaseGetRebalancerEnable(config: Element(configuration), databaseId: String): Boolean;

    /** This function returns the rebalancer throttle setting for the specified database from the configuration. **/
    databaseGetRebalancerThrottle(config: Element(configuration), databaseId: String): Number;

    /** This function sets the assignment policy for the specified database in the configuration. An assignment policy can be created by either admin:bucket-assignment-policy() or admin:statistical-assignment-policy() or admin:range-assignment-policy($partition-key, $lower-bound-included) or admin:legacy-assignment-policy(). **/
    databaseSetAssignmentPolicy(config: Element(configuration), databaseId: String, policy: Assignment-policy)): Element(configuration);

    /** This function returns the assignment policy for the specified database from the configuration. **/
    databaseGetAssignmentPolicy(config: Element(configuration), databaseId: String): Assignment-policy);

    /** This function returns an element that represents the legacy assignment policy. **/
    legacyAssignmentPolicy(): Assignment-policy);

    /** This function returns an element that represents the bucket assignment policy. **/
    bucketAssignmentPolicy(): Assignment-policy);

    /** This function returns an element that represents the statistical assignment policy. **/
    statisticalAssignmentPolicy(): Assignment-policy);

    /** This function returns fn:true() if the specificed forest is retired and fn:false() the specificed forest is not retired. **/
    databaseIsForestRetired(config: Element(configuration), databaseId: String, forestId: String): Boolean;

    /** This function returns fn:true() if the specificed forest is employed and fn:false() the specificed forest is not employed. **/
    databaseIsForestEmployed(config: Element(configuration), databaseId: String, forestId: String): Boolean;

    /** This function "retires" the specified forest in the configuration. **/
    databaseRetireForest(config: Element(configuration), databaseId: String, forestId: String): Element(configuration);

    /** This function "employs" the specified forest in the configuration. **/
    databaseEmployForest(config: Element(configuration), databaseId: String, forestId: String): Element(configuration);

    /** This function reorders the forests in the specified database. **/
    databaseReorderForests(config: Element(configuration), databaseId: String, forestIds: String): Element(configuration);

    /** This function returns the rebalancer enable setting for the specified forest from the configuration. **/
    forestGetRebalancerEnable(config: Element(configuration), forestId: String): Boolean;

    /** This function sets the reblanacer enable setting for the specified forest in the configuration. **/
    forestSetRebalancerEnable(config: Element(configuration), forestId: String, value: Boolean): Element(configuration);

    /** This function returns the list of all retired forests for the specified database from the configuration. **/
    databaseGetRetiredForests(config: Element(configuration), databaseId: String): String;

    /** This function returns an element that represents the range assignment policy. Use the admin:database-set-assignment-policy function to set the assignment policy. **/
    rangeAssignmentPolicy(partitionKey: Reference, lowerBoundIncluded: Boolean): Assignment-policy);

    /** This function returns the range policy partition key set for the database. **/
    databaseGetRangePolicyPartitionKey(rangePolicy: Assignment-policy)): Reference;

    /** This function returns the lower bound of the range configured on the forest. **/
    forestGetRangePolicyLowerBound(config: Element(configuration), forestId: String): String;

    /** This function returns the upper bound of the range configured on the forest. **/
    forestGetRangePolicyUpperBound(config: Element(configuration), forestId: String): String;

    /** This function returns fn:false() if the specificed forest has neither the lower boundary nor the upper boundary set. Otherwise, it returns fn:true(). **/
    forestIsRangePolicyRangeSet(config: Element(configuration), forestId: String): String;

    /** This function sets the boundaries of the range on a forest. **/
    forestSetRangePolicyRange(config: Element(configuration), forestId: String, lowerBound: String, upperBound: String): Element(configuration);

    /** This function returns the internal security setting for the specified App Server. **/
    appserverGetInternalSecurity(config: Element(configuration), appserverId: String): Boolean;

    /** This function returns the external security setting for the specified App Server. **/
    appserverGetExternalSecurity(config: Element(configuration), appserverId: String): String;

    /** This function sets the internal security setting in the configuration for the specified App Server. **/
    appserverSetInternalSecurity(config: Element(configuration), appserverId: String, value: Boolean): Element(configuration);

    /** This function sets the external security setting in the configuration for the specified App Server. **/
    appserverSetExternalSecurity(config: Element(configuration), appserverId: String, value: String, value2: Boolean, value3: String): Element(configuration);

    /** This function returns the zone for the host with the specified ID. **/
    hostGetZone(config: Element(configuration), hostId: String): String;

    /** This function changes the zone value for the host to the newly specified value. **/
    hostSetZone(config: Element(configuration), hostId: String, value: String): Element(configuration);

    /** This function enables or disables usage metering for all hosts in the specified group. **/
    groupSetMeteringEnabled(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function specifies the database to be used to store metering data. **/
    groupSetMetersDatabase(config: Element(configuration), groupId: String, value: String): Element(configuration);

    /** This function enables or disables performance metering for all hosts in the specified group. Performance metering will save data into the meters database which can be used to analyze your system performance over time. **/
    groupSetPerformanceMeteringEnabled(config: Element(configuration), groupId: String, value: Boolean): Element(configuration);

    /** This function sets the period (in number of seconds) between when performance data is gathered. setting it to a higher number stores less data but also gives less grainular data; setting it to a lower number stores more data but provides higher grainularity. **/
    groupSetPerformanceMeteringPeriod(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of days of raw performance data to retain. **/
    groupSetPerformanceMeteringRetainRaw(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of days to retain hourly performance data. **/
    groupSetPerformanceMeteringRetainHourly(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function sets the number of days of performance metering data to retain. **/
    groupSetPerformanceMeteringRetainDaily(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function removes a sub-database from a super-database. **/
    databaseDetachSubDatabase(config: Element(configuration), databaseId: String, subdatabaseId: String, foreignClusterId?: String): Element(configuration);

    /** This function adds a sub-database to a super-database. **/
    databaseAttachSubDatabase(config: Element(configuration), databaseId: String, subdatabaseId: String, foreignClusterId?: String): Element(configuration);

    /** This function returns a database-reference element representing the sub-databases of the specified super-database. **/
    databaseSubDatabases(config: Element(configuration), databaseId: String): Database-reference);

    /** This function returns a database-reference element representing where the specified database serves as a sub-database. **/
    databaseSuperDatabases(config: Element(configuration), databaseId: String): Database-reference);

    /** This function is used by mlcp and is not documented **/
    checkRangePolicyConfig(database: Node, assignments: Node): void;

    /** This function validates the specified field path. If the specified path is not valid, it throws an exception, otherwise it returns the empty sequence. **/
    databaseValidateFieldPath(config: Element(configuration), databaseId: String, fieldPath: Field-path)): void;

    /** This function gets the availability state of the forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
    forestGetAvailability(config: Element(configuration), forestId: String): String;

    /** This function sets the availability state for a forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
    forestSetAvailability(config: Element(configuration), forestId: String, value: String): Element(configuration);

    /** This function returns the value of the metering-enabled group setting. **/
    groupGetMeteringEnabled(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the ID of the meters-database configured for the specified group. **/
    groupGetMetersDatabase(config: Element(configuration), groupId: String): String;

    /** This function returns the value of the performance-metering-enabled group setting. **/
    groupGetPerformanceMeteringEnabled(config: Element(configuration), groupId: String): Boolean;

    /** This function returns the value of the performance-metering-period group setting. **/
    groupGetPerformanceMeteringPeriod(config: Element(configuration), groupId: String): Number;

    /** This function returns the value of the performance-metering-retain-raw group setting. **/
    groupGetPerformanceMeteringRetainRaw(config: Element(configuration), groupId: String): Number;

    /** This function returns the value of the performance-metering-retain-hourly group setting. **/
    groupGetPerformanceMeteringRetainHourly(config: Element(configuration), groupId: String): Number;

    /** This function returns the value of the performance-metering-retain-daily group setting. **/
    groupGetPerformanceMeteringRetainDaily(config: Element(configuration), groupId: String): Number;

    /** This function sets "the retain until backup" setting in the configuration for the specified database. **/
    databaseSetRetainUntilBackup(config: Element(configuration), databaseId: String, value: Boolean): Element(configuration);

    /** This function returns the "retain until backup" setting from the configuration for the specified database. **/
    databaseGetRetainUntilBackup(config: Element(configuration), databaseId: String): Boolean;

    /** This function creates a db:path-reference specification. **/
    databasePathReference(scalarType: String, pathexpr: String, collation: String): Path-reference);

    /** This function creates a db:field-reference specification. **/
    databaseFieldReference(scalarType: String, fieldname: String, collation: String): Field-reference);

    /** This function greated a db:element-attribute-reference specification. **/
    databaseElementAttributeReference(scalarType: String, parentNamespace: String, parentLocalname: String, namespace: String, localname: String, collation: String): Element-attribute-reference);

    /** This function greated a db:element-reference specification. **/
    databaseElementReference(scalarType: String, namespace: String, localname: String, collation: String): Element-reference);

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
    appserverGetDefaultInferenceSize(config: Element(configuration), appserverId: String): Number;

    /** This function specifies the default value for any request's inference size. **/
    appserverSetDefaultInferenceSize(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
    taskserverGetDefaultInferenceSize(config: Element(configuration), groupId: String): Number;

    /** This function specifies the default value for any request's inference size. **/
    taskserverSetDefaultInferenceSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The App Server will return an error for queries that exceed this memory limit. **/
    appserverGetMaxInferenceSize(config: Element(configuration), appserverId: String): Number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The App Server gives up on queries that exceed the memory limit, and returns an error. **/
    appserverSetMaxInferenceSize(config: Element(configuration), appserverId: String, value: Number): Element(configuration);

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The task server will return an error for queries that exceed this memory limit. **/
    taskserverGetMaxInferenceSize(config: Element(configuration), groupId: String): Number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The task server gives up on queries that exceed the memory limit, and returns an error. **/
    taskserverSetMaxInferenceSize(config: Element(configuration), groupId: String, value: Number): Element(configuration);

    /** The ruleset element (db:default-ruleset) created to be used for inference on a database. One or more rulesets can be used for inference. Rulesets are stored in the Schemas database. By default, no ruleset is configured. **/
    databaseRuleset(location: String): Default-ruleset);

    /** This function adds a ruleset (db:ruleset) to be used for inference on a database. One or more rulesets can be used for inference. By default, no ruleset is configured. **/
    databaseAddDefaultRuleset(config: Element(configuration), databaseId: String, rulesets: Default-ruleset)): Element(configuration);

    /** This function returns the default rulesets for a database. **/
    databaseGetDefaultRulesets(config: Element(configuration), databaseId: String): Default-ruleset);

    /** This function deletes the default ruleset used for inference on a database. **/
    databaseDeleteDefaultRuleset(config: Element(configuration), databaseId: String, rulesets: Default-ruleset)): Element(configuration);

    /** This function returns the queue size for the number of fragments or frames in-flight during database replication. **/
    databaseForeignReplicaGetQueueSize(foreignReplica: Foreign-replica)): String;

    /** This function sets the queue size for the number of fragments or frames in-flight during database replication. **/
    databaseForeignReplicaSetQueueSize(foreignReplica: Foreign-replica), value: Number): Foreign-replica);

    /** This function returns true or false to indicate whether a specific backup is enabled for a database. **/
    databaseBackupGetEnabled(config: Element(configuration), databaseId: String, backupId: String): Boolean;

    /** This function enables database backup for the specified database. **/
    databaseBackupSetEnabled(config: Element(configuration), databaseId: String, backupId: String, enabled: Boolean): Element(configuration);

    /** This function deletes a specific database backup, identified by the backup ID. **/
    databaseDeleteBackupById(config: Element(configuration), databaseId: String, backupId: String): Element(configuration);

    /** This function returns true or false to indicate whether backup is enabled for the specified forest. **/
    forestBackupGetEnabled(config: Element(configuration), forestId: String, backupId: String): Boolean;

    /** This function enables forest backup for the specified forest. **/
    forestBackupSetEnabled(config: Element(configuration), forestId: String, backupId: String, enabled: Boolean): Element(configuration);

    /** This function deletes the forest backup specified by the forest ID. **/
    forestDeleteBackupById(config: Element(configuration), forestId: String, backupId: String): Element(configuration);

    /** This function returns information about a scheduled task for a group based on the task ID and the group ID. **/
    groupGetScheduledTask(config: Element(configuration), groupId: String, taskId: String): Scheduled-task);

    /** This function enables one or more scheduled tasks for a group based on the group ID and task ID. **/
    groupScheduledTaskSetEnabled(config: Element(configuration), groupId: String, taskId: String, enabled: Boolean): Element(configuration);

    /** This function returns true or false to indicate whether a scheduled task for a group is enabled. **/
    groupScheduledTaskGetEnabled(config: Element(configuration), groupId: String, taskId: String): Boolean;

    /** This function deletes the scheduled tasks for a group using the group ID. **/
    groupDeleteScheduledTaskById(config: Element(configuration), groupId: String, deleteIds: String): Element(configuration);

    /** This function returns the default format for protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete formatba sed on many factors, and will end up as JSON, HTML, or XML. **/
    appserverGetDefaultErrorFormat(config: Element(configuration), appserverId: String): String;

    /** This function sets the default format protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete format based on many factors, and will end up as JSON, HTML, or XML. **/
    appserverSetDefaultErrorFormat(config: Element(configuration), appserverId: String, value: String): Element(configuration);


  }
}
