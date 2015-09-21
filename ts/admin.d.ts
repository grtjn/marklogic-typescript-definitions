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

interface adminFunctions {

    /** This function returns all the database IDs from the configuration. For an example, see databases.xqy in the Scripting Administrative Tasks Guide. **/
  getDatabaseIds(config: Node): string;

    /** This function returns all the host IDs from the configuration. **/
  getHostIds(config: Node): string;

    /** This function returns all the group IDs from the configuration. **/
  getGroupIds(config: Node): string;

    /** This function returns all the forest IDs from the configuration. **/
  getForestIds(config: Node): string;

    /** This function returns all the appserver IDs from the configuration. **/
  getAppserverIds(config: Node): string;

    /** Loads the admin configuration into memory for use by other functions in the Admin module. **/
  getConfiguration(): Node;

    /** This function saves a configuration specification to the cluster configuration files, without restarting MarkLogic Server. If you use this function to save any changes that require a server restart ("cold" changes such as App Server port assignment changes), then the changes will not take effect until the next time MarkLogic Server restarts (although they will be saved in the configuration). If you want MarkLogic Server to automatically restart when needed, use admin:save-configuration instead. **/
  saveConfigurationWithoutRestart(config: Node): string;

    /** This function saves a configuration specification to the cluster configuration files. It restarts MarkLogic Server for "cold" administrative tasks only (for example, for App Server port assignment changes). If you do not want those "cold" administrative tasks to automatically restart MarkLogic Server, use admin:save-configuration-without-restart instead. **/
  saveConfiguration(config: Node): void;

    /** This function restarts MarkLogic Server for the specified hosts. **/
  restartHosts(hosts: string): void;

    /** This function deletes the configuration from the specified database(s). It does not delete the configuration or data for any forests attached to the deleted database(s). **/
  databaseDelete(config: Node, databaseIds: string): Node;

    /** This function creates a new database specification. **/
  databaseCreate(config: Node, databaseName: string, securityDb: string, schemaDb: string): Node;

    /** This function creates a new database specification with the same settings as the database with the specified ID. The new database configuration will have the specified name. **/
  databaseCopy(config: Node, databaseId: string, databaseName: string): Node;

    /** This function detaches the specified forest from the specified database. **/
  databaseDetachForest(config: Node, databaseId: string, forestId: string): Node;

    /** This function attaches the specified forest to the specified database. **/
  databaseAttachForest(config: Node, databaseId: string, forestId: string): Node;

    /** This function returns the scheduled backups for the specified database from the configuration. **/
  databaseGetBackups(config: Node, databaseId: string): Node;

    /** This function constructs a weekly scheduled backup specification. **/
  databaseWeeklyBackup(backupDir: string, backupPeriod: number, days: string, startTime: string, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a weekly scheduled incremental backup specification. **/
  databaseWeeklyIncrementalBackup(backupDir: string, backupPeriod: number, days: string, startTime: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a monthly scheduled backup specification. **/
  databaseMonthlyBackup(backupDir: string, backupPeriod: number, backupMonthDay: string, startTime: string, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a scheduled monthly incremental backup specification. **/
  databaseMonthlyIncrementalBackup(backupDir: string, backupPeriod: number, backupMonthDay: string, startTime: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a one-time backup specification. **/
  databaseOneTimeBackup(backupDir: string, start: Date, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a one-time incremental backup specification. **/
  databaseOneTimeIncrementalBackup(backupDir: string, start: Date, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function adds scheduled backup specifications for a database to a configuration. **/
  databaseAddBackup(config: Node, databaseId: string, backups: Node): Node;

    /** This function deletes scheduled backup specifications for a database from a configuration. **/
  databaseDeleteBackup(config: Node, databaseId: string, backups: Node): Node;

    /** This function returns the merge blackouts specification for the specified database from the configuration. **/
  databaseGetMergeBlackouts(config: Node, databaseId: string): Node;

    /** This function constructs a merge-blackout specification. **/
  databaseRecurringMergeBlackout(limit: number, mergePriority: string, days: string, startTime: string, endTime: string, duration: Object): Node;

    /** This function constructs a one-time merge-blackout specification. **/
  databaseOneTimeMergeBlackout(limit: number, mergePriority: string, start: Date, end: Date, duration: Object): Node;

    /** This function adds a merge blackout specification for a database to a configuration. **/
  databaseAddMergeBlackout(config: Node, databaseId: string, mergeBlackouts: Node): Node;

    /** This function deletes a merge blackout specification for a database from a configuration. **/
  databaseDeleteMergeBlackout(config: Node, databaseId: string, blackouts: Node): Node;

    /** This function returns the fragment roots specification for the specified database from the configuration. **/
  databaseGetFragmentRoots(config: Node, databaseId: string): Node;

    /** This function constructs a fragment root specification. **/
  databaseFragmentRoot(namespace: string, localname: string): Node;

    /** This function adds the specified fragment root to the specified database in the configuration. **/
  databaseAddFragmentRoot(config: Node, databaseId: string, fragmentRoots: Node): Node;

    /** This function deletes the specified fragment root in the specified database from the configuration. **/
  databaseDeleteFragmentRoot(config: Node, databaseId: string, fragmentRoots: Node): Node;

    /** This function returns the fragment parents specification for the specified database from the configuration. **/
  databaseGetFragmentParents(config: Node, databaseId: string): Node;

    /** This function constructs a fragment parent specification. **/
  databaseFragmentParent(namespace: string, localname: string): Node;

    /** This function adds the specified fragment parent to the specified database in the configuration. **/
  databaseAddFragmentParent(config: Node, databaseId: string, fragmentParents: Node): Node;

    /** This function deletes the specified fragment parent in the specified database from the configuration. **/
  databaseDeleteFragmentParent(config: Node, databaseId: string, fragmentParents: Node): Node;

    /** This function constructs a range element index specification. **/
  databaseRangeElementIndex(scalarType: string, namespace: string, localname: string, collation: string, rangeValuePositions: Object, invalidValues?: string): Node;

    /** This function constructs a range field index specification. **/
  databaseRangeFieldIndex(scalarType: string, fieldname: string, collation: string, rangeValuePositions: Object, invalidValues?: string): Node;

    /** This function returns the range element indexes specification(s) for the specified database from the configuration. **/
  databaseGetRangeElementIndexes(config: Node, databaseId: string): Node;

    /** This function returns the range field indexes specification(s) for the specified database from the configuration. **/
  databaseGetRangeFieldIndexes(config: Node, databaseId: string): Node;

    /** This function adds a range element index to the specified database in the configuration. **/
  databaseAddRangeElementIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function adds a range field index to the specified database in the configuration. **/
  databaseAddRangeFieldIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function deletes a range element index for the specified database in the configuration. **/
  databaseDeleteRangeElementIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function deletes a range field index for the specified database in the configuration. **/
  databaseDeleteRangeFieldIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function deletes all the range field indexes on given fields for the specified database in the configuration. **/
  databaseDeleteAllRangeFieldIndexes(config: Node, databaseId: string, fieldnames: string): Node;

    /** This function returns the range element attribute indexes specification(s) for the specified database from the configuration. **/
  databaseGetRangeElementAttributeIndexes(config: Node, databaseId: string): Node;

    /** This function constructs a range element attribute index specification. **/
  databaseRangeElementAttributeIndex(scalarType: string, parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string, rangeValuePositions: Object, invalidValues?: string): Node;

    /** This function adds a range element attribute index to the specified database in the configuration. **/
  databaseAddRangeElementAttributeIndex(config: Node, databaseId: string, attributeIndexes: Node): Node;

    /** This function deletes a range element attribute index for the specified database in the configuration. **/
  databaseDeleteRangeElementAttributeIndex(config: Node, databaseId: string, attributeIndexes: Node): Node;

    /** This function constructs an element word lexicon specification. **/
  databaseElementWordLexicon(namespace: string, localname: string, collation: string): Node;

    /** This function returns the element word lexicons specification(s) for the specified database from the configuration. **/
  databaseGetElementWordLexicons(config: Node, databaseId: string): Node;

    /** This function adds an element word lexicon to the specified database in the configuration. **/
  databaseAddElementWordLexicon(config: Node, databaseId: string, elementWordLexicons: Node): Node;

    /** This function deletes an element word lexicon for the specified database from the configuration. **/
  databaseDeleteElementWordLexicon(config: Node, databaseId: string, elementWordLexicons: Node): Node;

    /** This function constructs an element attribute word lexicon specification. **/
  databaseElementAttributeWordLexicon(parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string): Node;

    /** This function returns the element attribute word lexicons specification(s) for the specified database from the configuration. **/
  databaseGetElementAttributeWordLexicons(config: Node, databaseId: string): Node;

    /** This function adds an element attribute word lexicon to the specified database in the configuration. **/
  databaseAddElementAttributeWordLexicon(config: Node, databaseId: string, elementAttributeWordLexicons: Node): Node;

    /** This function deletes an element attribute word lexicon for the specified database from the configuration. **/
  databaseDeleteElementAttributeWordLexicon(config: Node, databaseId: string, lexicons: Node): Node;

    /** This function constructs a phrase through specification. **/
  databasePhraseThrough(namespace: string, localname: string): Node;

    /** This function returns the phrase throughs specification(s) for the specified database from the configuration. **/
  databaseGetPhraseThroughs(config: Node, databaseId: string): Node;

    /** This function adds a phrase through to the specified database in the configuration. **/
  databaseAddPhraseThrough(config: Node, databaseId: string, phraseThroughs: Node): Node;

    /** This function deletes a phrase through for the specified database from the configuration. **/
  databaseDeletePhraseThrough(config: Node, databaseId: string, phraseThroughs: Node): Node;

    /** This function constructs a phrase through specification. **/
  databasePhraseAround(namespace: string, localname: string): Node;

    /** This function returns the phrase arounds specification(s) for the specified database from the configuration. **/
  databaseGetPhraseArounds(config: Node, databaseId: string): Node;

    /** This function adds a phrase around to the specified database in the configuration. **/
  databaseAddPhraseAround(config: Node, databaseId: string, phraseArounds: Node): Node;

    /** This function deletes a phrase around for the specified database from the configuration. **/
  databaseDeletePhraseAround(config: Node, databaseId: string, phraseArounds: Node): Node;

    /** This function constructs an element word query through specification. **/
  databaseElementWordQueryThrough(namespace: string, localname: string): Node;

    /** This function returns the element word query throughs specification(s) for the specified database from the configuration. **/
  databaseGetElementWordQueryThroughs(config: Node, databaseId: string): Node;

    /** This function adds an element word query through to the specified database in the configuration. **/
  databaseAddElementWordQueryThrough(config: Node, databaseId: string, elementWordQueryThroughs: Node): Node;

    /** This function deletes an element word query through for the specified database from the configuration. **/
  databaseDeleteElementWordQueryThrough(config: Node, databaseId: string, throughs: Node): Node;

    /** This function constructs a word lexicon specification. **/
  databaseWordLexicon(collation: string): Node;

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
  databaseGetWordLexicons(config: Node, databaseId: string): Node;

    /** This function adds a word lexicon to the specified database in the configuration. **/
  databaseAddWordLexicon(config: Node, databaseId: string, wordLexicons: Node): Node;

    /** This function deletes a word lexicon for the specified database from the configuration. **/
  databaseDeleteWordLexicon(config: Node, databaseId: string, wordLexicons: Node): Node;

    /** This function constructs a geospatial element index specification. **/
  databaseGeospatialElementIndex(namespace: string, localname: string, coordinateSystem: string, rangeValuePositions: Object, pointFormat?: string, invalidValues?: string): Node;

    /** This function returns the geospatial element indexes specification(s) for the specified database from the configuration. **/
  databaseGetGeospatialElementIndexes(config: Node, databaseId: string): Node;

    /** This function adds a range element index to the specified database in the configuration. **/
  databaseAddGeospatialElementIndex(config: Node, databaseId: string, geospatialElementIndexes: Node): Node;

    /** This function deletes a geospatial element index for the specified database in the configuration. **/
  databaseDeleteGeospatialElementIndex(config: Node, databaseId: string, geospatialElementIndexes: Node): Node;

    /** This function constructs a geospatial element child index specification. **/
  databaseGeospatialElementChildIndex(parentNamespace: string, parentLocalname: string, namespace: string, localname: string, coordinateSystem: string, rangeValuePositions: Object, pointFormat?: string, invalidValues?: string): Node;

    /** This function returns the geospatial element child indexes specification(s) for the specified database from the configuration. **/
  databaseGetGeospatialElementChildIndexes(config: Node, databaseId: string): Node;

    /** This function adds a geospatial element child index to the specified database in the configuration. **/
  databaseAddGeospatialElementChildIndex(config: Node, databaseId: string, geospatialElementChildIndexes: Node): Node;

    /** This function deletes a geospatial element child index for the specified database in the configuration. **/
  databaseDeleteGeospatialElementChildIndex(config: Node, databaseId: string, geospatialElementChildIndexes: Node): Node;

    /** This function constructs a geospatial element pair index specification. **/
  databaseGeospatialElementPairIndex(parentNamespace: string, parentLocalname: string, latitudeNamespace: string, latitudeLocalname: string, longitudeNamespace: string, longitudeLocalname: string, coordinateSystem: string, rangeValuePositions: Object, invalidValues?: string): Node;

    /** This function returns the geospatial element pair indexes specification(s) for the specified database from the configuration. **/
  databaseGetGeospatialElementPairIndexes(config: Node, databaseId: string): Node;

    /** This function adds a geospatial element pair index to the specified database in the configuration. **/
  databaseAddGeospatialElementPairIndex(config: Node, databaseId: string, geospatialElementPairIndexes: Node): Node;

    /** This function deletes a geospatial element pair index for the specified database from the configuration. **/
  databaseDeleteGeospatialElementPairIndex(config: Node, databaseId: string, geospatialElementPairIndexes: Node): Node;

    /** This function constructs a geospatial element attribute pair index specification. **/
  databaseGeospatialElementAttributePairIndex(parentNamespace: string, parentLocalname: string, latitudeNamespace: string, latitudeLocalname: string, longitudeNamespace: string, longitudeLocalname: string, coordinateSystem: string, rangeValuePositions: Object, invalidValues?: string): Node;

    /** This function returns the geospatial element attribute pair indexes specification(s) for the specified database from the configuration. **/
  databaseGetGeospatialElementAttributePairIndexes(config: Node, databaseId: string): Node;

    /** This function adds a geospatial element attribute pair index to the specified database in the configuration. **/
  databaseAddGeospatialElementAttributePairIndex(config: Node, databaseId: string, geospatialElementAttributePairIndexes: Node): Node;

    /** This function deletes a geospatial element attribute pair index in the specified database from the configuration. **/
  databaseDeleteGeospatialElementAttributePairIndex(config: Node, databaseId: string, indexes: Node): Node;

    /** This function changes the name of the database with the specified ID to the specified name. **/
  databaseSetName(config: Node, databaseId: string, value: string): Node;

    /** This function sets the enabled value for the specified database in the configuration. **/
  databaseSetEnabled(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the security database for a database to the specified database in the configuration. **/
  databaseSetSecurityDatabase(config: Node, databaseId: string, value: string): Node;

    /** This function sets the schema database for a database to the specified database in the configuration. **/
  databaseSetSchemaDatabase(config: Node, databaseId: string, value: string): Node;

    /** This function sets the triggers database to the specified database ID for the specified database in the configuration. **/
  databaseSetTriggersDatabase(config: Node, databaseId: string, value: string): Node;

    /** This function sets the language for the specified database in the configuration. **/
  databaseSetLanguage(config: Node, databaseId: string, value: string): Node;

    /** This function sets the stemmed searches setting for the specified database in the configuration. **/
  databaseSetStemmedSearches(config: Node, databaseId: string, value: string): Node;

    /** This function sets the word searches setting for the specified database in the configuration. **/
  databaseSetWordSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word positions setting for the specified database in the configuration. **/
  databaseSetWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast phrase searches setting for the specified database in the configuration. **/
  databaseSetFastPhraseSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast case sensitive searches setting for the specified database in the configuration. **/
  databaseSetFastCaseSensitiveSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast reverse searches setting for the specified database in the configuration. **/
  databaseSetFastReverseSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast diacritic-sensitive searches setting for the specified database in the configuration. **/
  databaseSetFastDiacriticSensitiveSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the element word searches setting for the specified database in the configuration. **/
  databaseSetFastElementWordSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the element word positions setting for the specified database in the configuration. **/
  databaseSetElementWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast element phrase searches setting for the specified database in the configuration. **/
  databaseSetFastElementPhraseSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the element value positions setting for the specified database in the configuration. **/
  databaseSetElementValuePositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the attribute value positions setting for the specified database in the configuration. **/
  databaseSetAttributeValuePositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the trailing wildcard searches setting for the specified database in the configuration. **/
  databaseSetTrailingWildcardSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the trailing wildcard word positions setting for the specified database in the configuration. **/
  databaseSetTrailingWildcardWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast element trailing wildcard searches setting for the specified database in the configuration. **/
  databaseSetFastElementTrailingWildcardSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the three character searches setting for the specified database in the configuration. **/
  databaseSetThreeCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the three character word positions setting for the specified database in the configuration. **/
  databaseSetThreeCharacterWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the two character searches setting for the specified database in the configuration. **/
  databaseSetTwoCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the one character searches setting for the specified database in the configuration. **/
  databaseSetOneCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the fast element character searches setting for the specified database in the configuration. **/
  databaseSetFastElementCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the URI lexicon setting for the specified database in the configuration. **/
  databaseSetUriLexicon(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the collection lexicon setting for the specified database in the configuration. **/
  databaseSetCollectionLexicon(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the reindexer enable setting for the specified database in the configuration. **/
  databaseSetReindexerEnable(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the maintain last modified setting for the specified database in the configuration. **/
  databaseSetMaintainLastModified(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the maintain directory last modified setting for the specified database in the configuration. **/
  databaseSetMaintainDirectoryLastModified(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the inherit permissions setting for the specified database in the configuration. **/
  databaseSetInheritPermissions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the inherit collections setting for the specified database in the configuration. **/
  databaseSetInheritCollections(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the inherit quality setting for the specified database in the configuration. **/
  databaseSetInheritQuality(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the preallocate journals setting for the specified database in the configuration. **/
  databaseSetPreallocateJournals(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the preload mapped data setting for the specified database in the configuration. **/
  databaseSetPreloadMappedData(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the range index optimize setting for the specified database in the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
  databaseSetRangeIndexOptimize(config: Node, databaseId: string, value: string): Node;

    /** This function sets the directory creation setting for the specified database in the configuration. **/
  databaseSetDirectoryCreation(config: Node, databaseId: string, value: string): Node;

    /** This function sets the format compatibility setting for the specified database in the configuration. **/
  databaseSetFormatCompatibility(config: Node, databaseId: string, value: string): Node;

    /** This function sets the index detection setting for the specified database in the configuration. **/
  databaseSetIndexDetection(config: Node, databaseId: string, value: string): Node;

    /** This function sets the expunge locks setting for the specified database in the configuration. **/
  databaseSetExpungeLocks(config: Node, databaseId: string, value: string): Node;

    /** This function sets the reindexer timestamp setting for the specified database in the configuration. **/
  databaseSetReindexerTimestamp(config: Node, databaseId: string, value: string): Node;

    /** This function sets the in-memory limit setting for the specified database in the configuration. **/
  databaseSetInMemoryLimit(config: Node, databaseId: string, value: number): Node;

    /** This function sets the in-memory list size setting for the specified database in the configuration. **/
  databaseSetInMemoryListSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the in-memory tree size setting for the specified database in the configuration. **/
  databaseSetInMemoryTreeSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the in-memory range index size setting for the specified database in the configuration. **/
  databaseSetInMemoryRangeIndexSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the in-memory range reverse index size setting for the specified database in the configuration. **/
  databaseSetInMemoryReverseIndexSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
  databaseSetLargeSizeThreshold(config: Node, databaseId: string, value: number): Node;

    /** This function sets the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
  databaseSetLocking(config: Node, databaseId: string, value: string): Node;

    /** This function sets the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
  databaseSetJournaling(config: Node, databaseId: string, value: string): Node;

    /** This function sets the journal size setting for the specified database in the configuration. **/
  databaseSetJournalSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the positions list max size setting for the specified database in the configuration. **/
  databaseSetPositionsListMaxSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the merge max size setting for the specified database in the configuration. **/
  databaseSetMergeMaxSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the merge minimum size setting for the specified database in the configuration. **/
  databaseSetMergeMinSize(config: Node, databaseId: string, value: number): Node;

    /** This function sets the merge min ratio setting for the specified database in the configuration. **/
  databaseSetMergeMinRatio(config: Node, databaseId: string, value: number): Node;

    /** This function sets the CPU scheduler priority for merges. **/
  databaseSetMergePriority(config: Node, databaseId: string, value: string): Node;

    /** This function sets the merge timestamp setting for the specified database in the configuration. **/
  databaseSetMergeTimestamp(config: Node, databaseId: string, value: number): Node;

    /** This function sets the reindexer throttle setting for the specified database in the configuration. **/
  databaseSetReindexerThrottle(config: Node, databaseId: string, value: number): Node;

    /** This function returns the attached forest IDs for the specified database from the configuration. **/
  databaseGetAttachedForests(config: Node, databaseId: string): string;

    /** This function returns the ID for the specified database from the configuration. The difference between this function and xdmp:database() is that the ID from this function can come from a database that has not yet been saved (that is, from a database that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created database without the need to first save the configuration. **/
  databaseGetId(config: Node, databaseName: string): string;

    /** This function returns the enabled value for the specified database from the configuration. **/
  databaseGetEnabled(config: Node, databaseId: string): Object;

    /** This function returns the name for the specified database from the configuration. **/
  databaseGetName(config: Node, databaseId: string): string;

    /** This function returns the ID of the security database for the specified database from the configuration. **/
  databaseGetSecurityDatabase(config: Node, databaseId: string): string;

    /** This function returns the ID of the schema database for the specified database from the configuration. **/
  databaseGetSchemaDatabase(config: Node, databaseId: string): string;

    /** This function returns the ID of the triggers database for the specified database from the configuration. **/
  databaseGetTriggersDatabase(config: Node, databaseId: string): string;

    /** This function returns the language for the specified database from the configuration. **/
  databaseGetLanguage(config: Node, databaseId: string): string;

    /** This function returns the stemmed searches setting for the specified database from the configuration. **/
  databaseGetStemmedSearches(config: Node, databaseId: string): string;

    /** This function returns the word searches setting for the specified database from the configuration. **/
  databaseGetWordSearches(config: Node, databaseId: string): Object;

    /** This function returns the word positions setting for the specified database from the configuration. **/
  databaseGetWordPositions(config: Node, databaseId: string): Object;

    /** This function returns the fast phrase searches setting for the specified database from the configuration. **/
  databaseGetFastPhraseSearches(config: Node, databaseId: string): Object;

    /** This function returns the fast case sensitive searches setting for the specified database from the configuration. **/
  databaseGetFastCaseSensitiveSearches(config: Node, databaseId: string): Object;

    /** This function returns the fast reverse searches setting for the specified database from the configuration. **/
  databaseGetFastReverseSearches(config: Node, databaseId: string): Object;

    /** This function returns the fast diacritic sensitive searches setting for the specified database from the configuration. **/
  databaseGetFastDiacriticSensitiveSearches(config: Node, databaseId: string): Object;

    /** This function returns the fast element word searches setting for the specified database from the configuration. **/
  databaseGetFastElementWordSearches(config: Node, databaseId: string): Object;

    /** This function returns the element word positions setting for the specified database from the configuration. **/
  databaseGetElementWordPositions(config: Node, databaseId: string): Object;

    /** This function returns the fast element phrase searches setting for the specified database from the configuration. **/
  databaseGetFastElementPhraseSearches(config: Node, databaseId: string): Object;

    /** This function returns the element value positions setting for the specified database from the configuration. **/
  databaseGetElementValuePositions(config: Node, databaseId: string): Object;

    /** This function returns the attribute value positions setting for the specified database from the configuration. **/
  databaseGetAttributeValuePositions(config: Node, databaseId: string): Object;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
  databaseGetTrailingWildcardSearches(config: Node, databaseId: string): Object;

    /** This function returns the trailing wildcard word positions setting for the specified database from the configuration. **/
  databaseGetTrailingWildcardWordPositions(config: Node, databaseId: string): Object;

    /** This function returns the trailing wildcard searches setting for the specified database from the configuration. **/
  databaseGetFastElementTrailingWildcardSearches(config: Node, databaseId: string): Object;

    /** This function returns the three character searches setting for the specified database from the configuration. **/
  databaseGetThreeCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns the three character word positions setting for the specified database from the configuration. **/
  databaseGetThreeCharacterWordPositions(config: Node, databaseId: string): Object;

    /** This function returns the two character searches setting for the specified database from the configuration. **/
  databaseGetTwoCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns the one character searches setting for the specified database from the configuration. **/
  databaseGetOneCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns the fast element character searches setting for the specified database from the configuration. **/
  databaseGetFastElementCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns the URI lexicon setting for the specified database from the configuration. **/
  databaseGetUriLexicon(config: Node, databaseId: string): Object;

    /** This function returns the collection lexicon setting for the specified database from the configuration. **/
  databaseGetCollectionLexicon(config: Node, databaseId: string): Object;

    /** This function returns the reindexer enable setting for the specified database from the configuration. **/
  databaseGetReindexerEnable(config: Node, databaseId: string): Object;

    /** This function returns the maintain last modified setting for the specified database from the configuration. **/
  databaseGetMaintainLastModified(config: Node, databaseId: string): Object;

    /** This function returns the maintain directory last modified setting for the specified database from the configuration. **/
  databaseGetMaintainDirectoryLastModified(config: Node, databaseId: string): Object;

    /** This function returns the inherit positions setting for the specified database from the configuration. **/
  databaseGetInheritPermissions(config: Node, databaseId: string): Object;

    /** This function returns the inherit collections setting for the specified database from the configuration. **/
  databaseGetInheritCollections(config: Node, databaseId: string): Object;

    /** This function returns the inherit quality setting for the specified database from the configuration. **/
  databaseGetInheritQuality(config: Node, databaseId: string): Object;

    /** This function returns the preallocate journals setting for the specified database from the configuration. **/
  databaseGetPreallocateJournals(config: Node, databaseId: string): Object;

    /** This function returns the preload mapped data setting for the specified database from the configuration. **/
  databaseGetPreloadMappedData(config: Node, databaseId: string): Object;

    /** This function returns the range index optimize setting for the specified database from the configuration. When set to facet-time, range indexes are optimized to minimize the amount of CPU time used. When set to memory-size, range indexes are optimized to minimize the amount of memory used. **/
  databaseGetRangeIndexOptimize(config: Node, databaseId: string): string;

    /** This function returns the directory creation setting for the specified database from the configuration. **/
  databaseGetDirectoryCreation(config: Node, databaseId: string): string;

    /** This function returns the format compatibility setting for the specified database from the configuration. **/
  databaseGetFormatCompatibility(config: Node, databaseId: string): string;

    /** This function returns the index detection setting for the specified database from the configuration. **/
  databaseGetIndexDetection(config: Node, databaseId: string): string;

    /** This function returns the expunge locks setting for the specified database from the configuration. **/
  databaseGetExpungeLocks(config: Node, databaseId: string): string;

    /** This function returns the reindexer timestamp setting for the specified database from the configuration. **/
  databaseGetReindexerTimestamp(config: Node, databaseId: string): string;

    /** This function returns the in memory limit setting for the specified database from the configuration. **/
  databaseGetInMemoryLimit(config: Node, databaseId: string): number;

    /** This function returns the in memory list size setting for the specified database from the configuration. **/
  databaseGetInMemoryListSize(config: Node, databaseId: string): number;

    /** This function returns the in memory tree size setting for the specified database from the configuration. **/
  databaseGetInMemoryTreeSize(config: Node, databaseId: string): number;

    /** This function returns the in memory range index size setting for the specified database from the configuration. **/
  databaseGetInMemoryRangeIndexSize(config: Node, databaseId: string): number;

    /** This function returns the in memory reverse index size setting for the specified database from the configuration. **/
  databaseGetInMemoryReverseIndexSize(config: Node, databaseId: string): number;

    /** This function returns the locking setting for the specified database in the configuration. When set to strict, locking enforces mutual exclusion on existing documents and on new documents. When set to fast, locking enforces mutual exclusion on existing documents but not on new documents. When set to off, locking does not enforce mutual exclusion on existing documents or on new documents. **/
  databaseGetLocking(config: Node, databaseId: string): string;

    /** This function returns the journaling setting for the specified database in the configuration. When set to strict, the journal protects against MarkLogic Server process failures, host operating system kernel failures, and host hardware failures. When set to fast, the journal protects against MarkLogic Server process failures but not against host operating system kernel failures or host hardware failures. When set to off, the journal does not protect against MarkLogic Server process failures, host operating system kernel failures, or host hardware failures. **/
  databaseGetJournaling(config: Node, databaseId: string): string;

    /** This function returns the journal size setting for the specified database from the configuration. **/
  databaseGetJournalSize(config: Node, databaseId: string): number;

    /** This function returns the positions list max size setting for the specified database from the configuration. **/
  databaseGetPositionsListMaxSize(config: Node, databaseId: string): number;

    /** This function returns the merge max size setting for the specified database from the configuration. **/
  databaseGetMergeMaxSize(config: Node, databaseId: string): number;

    /** This function returns the merge min size setting for the specified database from the configuration. **/
  databaseGetMergeMinSize(config: Node, databaseId: string): number;

    /** This function returns the merge min ratio setting for the specified database from the configuration. **/
  databaseGetMergeMinRatio(config: Node, databaseId: string): number;

    /** This function returns the CPU scheduler priority for merges for the specified database from the configuration. **/
  databaseGetMergePriority(config: Node, databaseId: string): string;

    /** This function returns the merge timestamp setting for the specified database from the configuration. **/
  databaseGetMergeTimestamp(config: Node, databaseId: string): number;

    /** This function returns the reindexer throttle setting for the specified database from the configuration. **/
  databaseGetReindexerThrottle(config: Node, databaseId: string): number;

    /** This function constructs an included element specification. **/
  databaseIncludedElement(namespace: string, localname: string, weight: number, attributeNamespace: string, attributeLocalname: string, attributeValue: string): Node;

    /** This function constructs an excluded element specification. **/
  databaseExcludedElement(namespace: string, localname: string, attributeNamespace?: string, attributeLocalname?: string, attributeValue?: string): Node;

    /** This function constructs a field specification. **/
  databaseField(fieldName: string, includeRoot: Object): Node;

    /** This function returns the word query included elements setting for the specified database from the configuration. **/
  databaseGetWordQueryIncludedElements(config: Node, databaseId: string): Node;

    /** This function returns the word query excluded elements setting for the specified database from the configuration. **/
  databaseGetWordQueryExcludedElements(config: Node, databaseId: string): Node;

    /** This function returns the fields specification(s) for the specified database from the configuration. **/
  databaseGetFields(config: Node, databaseId: string): Node;

    /** This function returns the fields included elements specification for the specified database from the configuration. **/
  databaseGetFieldIncludedElements(config: Node, databaseId: string, fieldName: string): Node;

    /** This function returns the field excluded elements specification for the specified database from the configuration. **/
  databaseGetFieldExcludedElements(config: Node, databaseId: string, fieldName: string): Node;

    /** This function returns the field specification for the specified database from the configuration. **/
  databaseGetField(config: Node, databaseId: string, fieldName: string): Node;

    /** This function adds the field specification to the specified database in the configuration. **/
  databaseAddField(config: Node, databaseId: string, fields: Node): Node;

    /** This function deletes the field specification in the specified database from the configuration. **/
  databaseDeleteField(config: Node, databaseId: string, fieldNames: string): Node;

    /** This function adds the word query included element specification to the specified database in the configuration. **/
  databaseAddWordQueryIncludedElement(config: Node, databaseId: string, includedElements: Node): Node;

    /** This function deletes the word query included element specification in the specified database from the configuration. **/
  databaseDeleteWordQueryIncludedElement(config: Node, databaseId: string, includedElements: Node): Node;

    /** This function adds the field included element specification tn the specified database in the configuration. **/
  databaseAddFieldIncludedElement(config: Node, databaseId: string, fieldName: string, includedElements: Node): Node;

    /** This function deletes the field included element specification in the specified database from the configuration. **/
  databaseDeleteFieldIncludedElement(config: Node, databaseId: string, fieldName: string, includedElements: Node): Node;

    /** This function adds the word query excluded element specification for the specified database to the configuration. **/
  databaseAddWordQueryExcludedElement(config: Node, databaseId: string, excludedElements: Node): Node;

    /** This function deletes the word query excluded element specification in the specified database from the configuration. **/
  databaseDeleteWordQueryExcludedElement(config: Node, databaseId: string, excludedElements: Node): Node;

    /** This function adds the field excluded element specification in the specified database in the configuration. **/
  databaseAddFieldExcludedElement(config: Node, databaseId: string, fieldName: string, excludedElements: Node): Node;

    /** This function deletes the field excluded element specification in the specified database from the configuration. **/
  databaseDeleteFieldExcludedElement(config: Node, databaseId: string, fieldName: string, excludedElements: Node): Node;

    /** This function returns the word lexicons specification(s) for the specified database from the configuration. **/
  databaseGetFieldWordLexicons(config: Node, databaseId: string, fieldName: string): Node;

    /** This function adds a word lexicon to the specified database in the configuration. **/
  databaseAddFieldWordLexicon(config: Node, databaseId: string, fieldName: string, wordLexicons: Node): Node;

    /** This function deletes a word lexicon for the specified database from the configuration. **/
  databaseDeleteFieldWordLexicon(config: Node, databaseId: string, fieldName: string, wordLexicons: Node): Node;

    /** This function returns the word query include document root setting for the specified database from the configuration. **/
  databaseGetWordQueryIncludeDocumentRoot(config: Node, databaseId: string): Object;

    /** This function returns the reindexer word query stemmed searches setting for the specified database from the configuration. **/
  databaseGetWordQueryStemmedSearches(config: Node, databaseId: string): string;

    /** This function returns true if the word query searches setting for the specified database is enabled in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryWordSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query fast phrase searches setting for the specified database is set in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryFastPhraseSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query fast case sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryFastCaseSensitiveSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query fast diacritic sensitive searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryFastDiacriticSensitiveSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query trailing wildcard searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryTrailingWildcardSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query trailing wildcard word positions setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryTrailingWildcardWordPositions(config: Node, databaseId: string): Object;

    /** This function returns true if the word query three character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryThreeCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query three character word positions setting is enabled for the specified database from the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryThreeCharacterWordPositions(config: Node, databaseId: string): Object;

    /** This function returns true if the word query two character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryTwoCharacterSearches(config: Node, databaseId: string): Object;

    /** This function returns true if the word query one character searches setting is enabled for the specified database in the configuration. Otherwise, it returns the empty sequence. **/
  databaseGetWordQueryOneCharacterSearches(config: Node, databaseId: string): Object;

    /** This function sets the word query stemmed searches setting for the specified database in the configuration. **/
  databaseSetWordQueryStemmedSearches(config: Node, databaseId: string, value: string): Node;

    /** This function sets the word query word searches setting for the specified database in the configuration. **/
  databaseSetWordQueryWordSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query fast phrase searches setting for the specified database in the configuration. **/
  databaseSetWordQueryFastPhraseSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function returns the word query fast case sensitive searches setting for the specified database from the configuration. **/
  databaseSetWordQueryFastCaseSensitiveSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query fast diacritic sensitive searches setting for the specified database in the configuration. **/
  databaseSetWordQueryFastDiacriticSensitiveSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query trailing wildcard searches setting for the specified database in the configuration. **/
  databaseSetWordQueryTrailingWildcardSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query trailing wildcard word positions setting for the specified database in the configuration. **/
  databaseSetWordQueryTrailingWildcardWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query three character searches setting for the specified database in the configuration. **/
  databaseSetWordQueryThreeCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query three character word positions setting for the specified database in the configuration. **/
  databaseSetWordQueryThreeCharacterWordPositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query two character searches setting for the specified database in the configuration. **/
  databaseSetWordQueryTwoCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query one character searches setting for the specified field in the configuration. **/
  databaseSetWordQueryOneCharacterSearches(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the word query include document root setting for the specified field in the configuration. **/
  databaseSetWordQueryIncludeDocumentRoot(config: Node, databaseId: string, value: Object): Node;

    /** This function returns the field include document root setting for the specified field from the configuration. **/
  databaseGetFieldIncludeDocumentRoot(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns stemmed searches setting for the specified field if configured. Otherwise, it returns the empty sequence. **/
  databaseGetFieldStemmedSearches(config: Node, databaseId: string, fieldName: string): string;

    /** This function returns true if the word searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldWordSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the fast phrase searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldFastPhraseSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the fast case sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldFastCaseSensitiveSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the fast diacritic sensitive searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldFastDiacriticSensitiveSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the trailing wildcard searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldTrailingWildcardSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the trailing wildcard word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldTrailingWildcardWordPositions(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the three character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldThreeCharacterSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the three character word positions setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldThreeCharacterWordPositions(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the two character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldTwoCharacterSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns true if the one character searches setting for the specified field is enabled. Otherwise, it returns the empty sequence. **/
  databaseGetFieldOneCharacterSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function sets the field stemmed searches setting for the specified field in the configuration. **/
  databaseSetFieldStemmedSearches(config: Node, databaseId: string, fieldName: string, value: string): Node;

    /** This function sets the field word searches setting for the specified field in the configuration. **/
  databaseSetFieldWordSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field fast phrase searches setting for the specified field in the configuration. **/
  databaseSetFieldFastPhraseSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field fast case sensitive searches setting for the specified field in the configuration. **/
  databaseSetFieldFastCaseSensitiveSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field fast diacritic sensitive searches setting for the specified field in the configuration. **/
  databaseSetFieldFastDiacriticSensitiveSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field trailing wildcard searches setting for the specified database in the configuration. **/
  databaseSetFieldTrailingWildcardSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field trailing wildcard word positions setting for the specified field in the configuration. **/
  databaseSetFieldTrailingWildcardWordPositions(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field three character searches setting for the specified field in the configuration. **/
  databaseSetFieldThreeCharacterSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field three character word positions setting for the specified field in the configuration. **/
  databaseSetFieldThreeCharacterWordPositions(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field two character searches setting for the specified field in the configuration. **/
  databaseSetFieldTwoCharacterSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field one character searches setting for the specified field in the configuration. **/
  databaseSetFieldOneCharacterSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field include document root setting for the specified field in the configuration. **/
  databaseSetFieldIncludeDocumentRoot(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field name setting for the specified field in the configuration. **/
  databaseSetFieldName(config: Node, databaseId: string, fieldName: string, value: string): Node;

    /** This function returns the name of the specified forest, given the forest ID. **/
  forestGetName(config: Node, forestId: string): string;

    /** This function returns the ID of the host in which the specified forest resides. **/
  forestGetHost(config: Node, forestId: string): string;

    /** This function returns the ID of the forest with the specified name, from the specified configuration. The difference between this function and xdmp:forest() is that the ID from this function can come from a forest that has not yet been saved (that is, from a forest that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). **/
  forestGetId(config: Node, forestName: string): string;

    /** This function returns the enabled state of the specified forest. **/
  forestGetEnabled(config: Node, forestId: string): Object;

    /** This function returns the name of the data directory of the specified forest. **/
  forestGetDataDirectory(config: Node, forestId: string): string;

    /** This function returns the name of the large data directory of the specified forest. **/
  forestGetLargeDataDirectory(config: Node, forestId: string): string;

    /** This function returns the state of whether failover is enabled for the specified forest. **/
  forestGetFailoverEnable(config: Node, forestId: string): Object;

    /** This function returns the state of what kinds of updates are allowed for the specified forest. **/
  forestGetUpdatesAllowed(config: Node, forestId: string): string;

    /** This function returns the IDs of the hosts defined as failover hosts for this forest. The order in which the hosts IDs are returned is significant, with the first ID being the primary host, the second (if there is one) being the secondary, and so on. **/
  forestGetFailoverHosts(config: Node, forestId: string): string;

    /** This function sets a forest configuration to a new host. **/
  forestSetHost(config: Node, forestId: string, value: string): Node;

    /** This function sets the enabled state for a forest configuration. **/
  forestSetEnabled(config: Node, forestId: string, value: Object): Node;

    /** This function sets the forest failover enabled state for a forest configuration. **/
  forestSetFailoverEnable(config: Node, forestId: string, value: Object): Node;

    /** This function sets the updates-allowed state for a forest configuration. **/
  forestSetUpdatesAllowed(config: Node, forestId: string, value: string): Node;

    /** This function adds a failover host to the list of failover hosts for the specified forest in the specified configuration. If there are already any hosts specified, this host is added to the end of the list of failover hosts. **/
  forestAddFailoverHost(config: Node, forestId: string, hosts: string): Node;

    /** This function deletes the specified failover host(s) from the failover-host list in the specified configuration. **/
  forestDeleteFailoverHost(config: Node, forestId: string, hosts: string): Node;

    /** This function deletes the configuration for the specified forest from the configuration. **/
  forestDelete(config: Node, forestIds: string, deleteData: Object): Node;

    /** This function creates a new forest configuration. **/
  forestCreate(config: Node, forestName: string, hostId: string, dataDirectory: string, largeDataDirectory?: string, fastDataDirectory?: string): Node;

    /** This function creates a new forest specification with the same settings as the forest with the specified ID. The new forest configuration will have the specified name. It copies the forest configuration, but does not copy the forest data. **/
  forestCopy(config: Node, forestId: string, forestName: string, dataDirectory: string, largeDataDirectory?: string, fastDataDirectory?: string): Node;

    /** This function returns the scheduled backups for the specified forest from the configuration. **/
  forestGetBackups(config: Node, forestId: string): Node;

    /** This function constructs a weekly scheduled backup. **/
  forestWeeklyBackup(backupDir: string, backupPeriod: number, days: string, startTime: string): Node;

    /** This function constructs a monthly scheduled backup. **/
  forestMonthlyBackup(backupDir: string, backupPeriod: number, backupMonthDay: number, startTime: string): Node;

    /** This function constructs a one-time backup. **/
  forestOneTimeBackup(backupDir: string, start: Date): Node;

    /** This function adds scheduled backup specifications for a forest to a configuration. **/
  forestAddBackup(config: Node, forestId: string, backups: Node): Node;

    /** This function deletes scheduled backup specifications for a forest from a configuration. **/
  forestDeleteBackup(config: Node, forestId: string, backups: Node): Node;

    /** This function return the ID for the specified host from the configuration. The difference between this function and xdmp:host() is that the ID from this function can come from a host that has not yet been saved (that is, from a host that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created host without the need to first save the configuration. **/
  hostGetId(config: Node, hostName: string): string;

    /** This function returns the name for the host with the specified ID. **/
  hostGetName(config: Node, hostId: string): string;

    /** This function returns the group ID for the host with the specified ID. **/
  hostGetGroup(config: Node, hostId: string): string;

    /** This function returns the bind port for the host with the specified ID. **/
  hostGetPort(config: Node, hostId: string): number;

    /** This function changes the name of an existing host to the newly specified value. **/
  hostSetName(config: Node, hostId: string, value: string): Node;

    /** This function changes the group to which an existing host belongs to the newly specified value. **/
  hostSetGroup(config: Node, hostId: string, value: string): Node;

    /** This function changes the bind port value for the host to the newly specified value. **/
  hostSetPort(config: Node, hostId: string, value: number): Node;

    /** This function returns the type of appserver with the specified ID. It will be one of "http", "xdbc", "odbc", or "webDAV". **/
  appserverGetType(config: Node, appserverId: string): string;

    /** This function returns the ID of the specified App Server's group. **/
  appserverGetGroupId(config: Node, appserverId: string): string;

    /** This function returns the ID(s) of the hosts the specified App Server's is currently running on. **/
  appserverGetHostIds(config: Node, appserverId: string): string;

    /** This function returns the ID of the specified App Server. The difference between this function and xdmp:server() is that the ID from this function can come from an appserver that has not yet been saved (that is, from an appserver that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created appserver without the need to first save the configuration. **/
  appserverGetId(config: Node, groupIds: string, appserverName: string): string;

    /** This function returns the name of the appserver with the specified ID. **/
  appserverGetName(config: Node, appserverId: string): string;

    /** This function returns the root for the specified App Server. **/
  appserverGetRoot(config: Node, appserverId: string): string;

    /** This function returns the port for the specified App Server. **/
  appserverGetPort(config: Node, appserverId: string): number;

    /** This function returns the ID of the database set as the modules database for the specified database. **/
  appserverGetModulesDatabase(config: Node, appserverId: string): string;

    /** This function returns the ID of the database to which the App Server is set to execute queries against for the specified database. **/
  appserverGetDatabase(config: Node, appserverId: string): string;

    /** This function returns the ID of the database to which the App Server stores users' last login information. **/
  appserverGetLastLogin(config: Node, appserverId: string): string;

    /** This function returns the value of the whether or not the appserver should display users' last login information. **/
  appserverGetDisplayLastLogin(config: Node, appserverId: string): Object;

    /** This function returns the IP address of the App Server configuration. The default is 0.0.0.0. **/
  appserverGetAddress(config: Node, appserverId: string): string;

    /** This function returns the socket listen backlog setting for the specified App Server. **/
  appserverGetBacklog(config: Node, appserverId: string): number;

    /** This function returns the maximum number of threads configured for the specified App Server. **/
  appserverGetThreads(config: Node, appserverId: string): number;

    /** This function returns the request timeout value configured for the specified App Server. **/
  appserverGetRequestTimeout(config: Node, appserverId: string): number;

    /** This function returns the keep alive timeout value configured for the specified App Server. **/
  appserverGetKeepAliveTimeout(config: Node, appserverId: string): number;

    /** This function returns the session timeout value configured for the specified App Server. **/
  appserverGetSessionTimeout(config: Node, appserverId: string): number;

    /** This function returns the connection timeout value configured for the specified App Server; the value applies only to an ODBC server. **/
  appserverGetConnectionTimeout(config: Node, appserverId: string): number;

    /** This function returns the default time limit value configured for the specified App Server. **/
  appserverGetDefaultTimeLimit(config: Node, appserverId: string): number;

    /** This function returns the default SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
  appserverGetDefaultQueryTimeLimit(config: Node, appserverId: string): number;

    /** This function returns the max time limit value configured for the specified App Server. **/
  appserverGetMaxTimeLimit(config: Node, appserverId: string): number;

    /** This function returns the max SQL query time limit value configured for the specified App Server; the value applies only to an ODBC server. **/
  appserverGetMaxQueryTimeLimit(config: Node, appserverId: string): number;

    /** This function returns the pre commit trigger depth value configured for the specified App Server. **/
  appserverGetPreCommitTriggerDepth(config: Node, appserverId: string): number;

    /** This function returns the pre commit trigger limit value configured for the specified App Server. **/
  appserverGetPreCommitTriggerLimit(config: Node, appserverId: string): number;

    /** This function returns the collation URI set in the configuration for the specified App Server. **/
  appserverGetCollation(config: Node, appserverId: string): string;

    /** This function returns the authentication scheme (basic, digest, digestbasic, or application-level) configured for the specified App Server. **/
  appserverGetAuthentication(config: Node, appserverId: string): string;

    /** This function returns the default user value configured for the specified App Server. The default user only is used with application-level authentication. **/
  appserverGetDefaultUser(config: Node, appserverId: string): string;

    /** This function returns the privilege ID for the specified App Server. If no privilege is configured, It returns 0. **/
  appserverGetPrivilege(config: Node, appserverId: string): string;

    /** This function returns the concurrent request limit for any user for the specified App Server. 0 indicates no bound on the number of concurrent requests. **/
  appserverGetConcurrentRequestLimit(config: Node, appserverId: string): number;

    /** This function returns the value of the log errors setting configured for this App Server, where true indicates that the App Server will send uncaught exceptions to the ErrorLog.txt file, and false indicates that it will not. **/
  appserverGetLogErrors(config: Node, appserverId: string): Object;

    /** This function returns the value of debug allow setting configured for this App Server, where true indicates that the App Server will allow queries to be debugged, and false indicates that it will not. **/
  appserverGetDebugAllow(config: Node, appserverId: string): Object;

    /** This function returns the value of the profile allow setting configured for this App Server, where true indicates that the App Server will allow queries to be profiled, and false indicates that it will not. **/
  appserverGetProfileAllow(config: Node, appserverId: string): Object;

    /** This function returns the value of the default xquery version configured for the specified App Server. **/
  appserverGetDefaultXqueryVersion(config: Node, appserverId: string): string;

    /** This function returns the value of the multi version concurrency control option configured for the specified App Server. **/
  appserverGetMultiVersionConcurrencyControl(config: Node, appserverId: string): string;

    /** This function returns the value of the distribute timestamps control option configured for the specified App Server. **/
  appserverGetDistributeTimestamps(config: Node, appserverId: string): string;

    /** This function returns the value for the output sgml character entities setting for the specified App Server. **/
  appserverGetOutputSgmlCharacterEntities(config: Node, appserverId: string): string;

    /** This function returns the value for the output encoding setting for the specified App Server. **/
  appserverGetOutputEncoding(config: Node, appserverId: string): string;

    /** This function returns the path to the error handler configured for this App Server. If no error handler is configured, returns the empty string. **/
  appserverGetErrorHandler(config: Node, appserverId: string): string;

    /** This function returns the path to the URL rewriter configured for this App Server. If no URL rewriter is configured, returns the empty string. **/
  appserverGetUrlRewriter(config: Node, appserverId: string): string;

    /** This function returns the enabled state for the specified App Server. **/
  appserverGetEnabled(config: Node, appserverId: string): Object;

    /** This function returns the value of any schemas definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
  appserverGetSchemas(config: Node, appserverId: string): Node;

    /** This function returns the value of any namespace definitions predefined for the specified App Server. If none are defined, returns the empty sequence. **/
  appserverGetNamespaces(config: Node, appserverId: string): Node;

    /** This function returns the value of the "expires" HTTP header for static content to expire after this many seconds port for the specified App Server. **/
  appserverGetStaticExpires(config: Node, appserverId: string): number;

    /** This function returns the value of whether the WebDAV server computes content length. **/
  appserverGetComputeContentLength(config: Node, appserverId: string): Object;

    /** This function changes the name of an existing App Server to the newly specified value. **/
  appserverSetName(config: Node, appserverId: string, value: string): Node;

    /** This function changes the root for a specified App Server to the newly specified value. **/
  appserverSetRoot(config: Node, appserverId: string, value: string): Node;

    /** This function changes the port in the configuration for the specified App Server to the specified number. Changing the port is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  appserverSetPort(config: Node, appserverId: string, value: number): Node;

    /** This function sets the value in the configuration of modules database for the specified App Server to the specified database ID. **/
  appserverSetModulesDatabase(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value in the configuration of the database for the specified App Server. **/
  appserverSetDatabase(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value in the configuration of the last login database for the specified App Server. If the value is equal to 0, then the last-login feature is disabled for this appserver. **/
  appserverSetLastLogin(config: Node, appserverId: string, value: string): Node;

    /** This function sets the display last login setting in the configuration for the specified App Server. **/
  appserverSetDisplayLastLogin(config: Node, appserverId: string, value: Object): Node;

    /** This function changes the IP Address in the configuration for the specified App Server to the specified address. Changing the address is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  appserverSetAddress(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value in the configuration of the backlog (the maximum number of pending connections allowed on the HTTP socket) for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  appserverSetBacklog(config: Node, appserverId: string, value: number): Node;

    /** This function sets the value in the configuration of the maximum number of threads for the specified App Server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  appserverSetThreads(config: Node, appserverId: string, value: number): Node;

    /** This function sets the value of the socket request timeout (the number of seconds before the socket times out) in the configuration for the specified App Server. **/
  appserverSetRequestTimeout(config: Node, appserverId: string, value: number): Node;

    /** This function sets the keep-alive timeout (the maximum number of second for subsequent socket requests to time out) in the configuration for the specified App Server. **/
  appserverSetKeepAliveTimeout(config: Node, appserverId: string, value: number): Node;

    /** This function sets the session timeout value (in seconds) in the configuration for the specified App Server. **/
  appserverSetSessionTimeout(config: Node, appserverId: string, value: number): Node;

    /** This function sets the connection timeout value (in seconds) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
  appserverSetConnectionTimeout(config: Node, appserverId: string, value: number): Node;

    /** This function sets the default time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
  appserverSetDefaultTimeLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the default SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
  appserverSetDefaultQueryTimeLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the max time limit (the maximum total amount of time to service a request before the App Server throws a timeout exception) in the configuration for the specified App Server. **/
  appserverSetMaxTimeLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the max SQL query time limit (the maximum total amount of time to service a SQL query before the App Server throws a timeout exception) in the configuration for the specified App Server; the value applies only to an ODBC server. **/
  appserverSetMaxQueryTimeLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the maximum depth (how many triggers can cause other triggers to fire, which in turn cause others to fire, and so on) in the configuration for the specifed App Server. **/
  appserverSetPreCommitTriggerDepth(config: Node, appserverId: string, value: number): Node;

    /** This function sets the value in the configuration for the maximum number of pre-commit triggers a single statement can invoke for the specified App Server. **/
  appserverSetPreCommitTriggerLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the default collation in the configuration for the specified App Server. **/
  appserverSetCollation(config: Node, appserverId: string, value: string): Node;

    /** This function sets the authentication scheme in the configuration for the specified App Server. **/
  appserverSetAuthentication(config: Node, appserverId: string, value: string): Node;

    /** This function sets the default user (for use with application-level authentication) in the configuration for the specified App Server. **/
  appserverSetDefaultUser(config: Node, appserverId: string, value: string): Node;

    /** This function sets an execute privilege in the configuration for the specified App Server. When a privilege is set, the user who makes a request to the App Server must have been granted (via a role, either directly or indirectly) the specified privilege. **/
  appserverSetPrivilege(config: Node, appserverId: string, value: string): Node;

    /** This function sets the limit on concurrent requests that any user may have on a particular appserver. Setting the limit to 0 indicates there is no bound on the number of concurrent requests. **/
  appserverSetConcurrentRequestLimit(config: Node, appserverId: string, value: number): Node;

    /** This function sets the log errors setting in the configuration for the specified App Server. **/
  appserverSetLogErrors(config: Node, appserverId: string, value: Object): Node;

    /** This function sets the debug allow setting in the configuration for the specified App Server. **/
  appserverSetDebugAllow(config: Node, appserverId: string, value: Object): Node;

    /** This function sets the profile allow setting in the configuration for the specified App Server. **/
  appserverSetProfileAllow(config: Node, appserverId: string, value: Object): Node;

    /** This function sets the default XQuery version setting in the configuration for this App Server. This setting determines the XQuery dialect used in queries against this App Server when one is not explicitly specified in the XQuery version declaration. **/
  appserverSetDefaultXqueryVersion(config: Node, appserverId: string, value: string): Node;

    /** This function sets the multi version concurrency control value in the configuration for this App Server. This option specifies how the latest timestamp is chosen for lock-free queries. When set to contemporaneous, the server chooses the latest timestamp for which any transaction is known to have committed, even though there still may be other transactions for that timestamp that have not yet fully committed. Queries will see more timely results, but may block waiting for contemporaneous transactions to fully commit. When set to nonblocking, the server chooses the latest timestamp for which all transactions are known to have committed, even though there may be a later timestamp for which another transaction has committed. Queries won't block waiting for transactions, but they may see less timely results. **/
  appserverSetMultiVersionConcurrencyControl(config: Node, appserverId: string, value: string): Node;

    /** This function sets the distribute timestamps control value in the configuration for this App Server. This option specifies how the latest timestamp is distributed after updates. This affects performance of updates and the timeliness of read-after-write query results from other hosts in the group. When set to fast, updates return as quicky as possible. No special timestamp notification messages are broadcasted to other hosts. Instead, timestamps are distributed to other hosts when any other message is sent. The maximum amount of time that could pass before other hosts see the update timestamp is one second, because a heartbeat message is sent to other hosts every second. When set to strict, updates immediately broadcast timestamp notification messages to every other host in the group. Updates do not return until their timestamp has been distributed. This ensures timeliness of read-after-write query results from other hosts in the group. **/
  appserverSetDistributeTimestamps(config: Node, appserverId: string, value: string): Node;

    /** This function sets the SGML character entity output setting in the configuration for the specified App Server. The SGML setting determines how characters that can be represented as SGML entites are serialized upon output by default in a query against the specified App Server. **/
  appserverSetOutputSgmlCharacterEntities(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value for the default output encoding in the configuration for the specified App Server. **/
  appserverSetOutputEncoding(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value of the path to the error handler in the configuration for the specified App Server. The path should specify a relative or absolute path to an XQuery module that is executed in the event of any 400 or 500 series HTTP errors (sometime known as a "sorry" server to give the user a clean error page). **/
  appserverSetErrorHandler(config: Node, appserverId: string, value: string): Node;

    /** This function sets the value of the path to the URL rewriter in the configuration for the specified App Server. This function supports both the interpretive and declarative rewriters. The path should specify a relative or absolute path to either an XQuery module used as the interpretive rewriter or the XML file used by the declarative rewriter. **/
  appserverSetUrlRewriter(config: Node, appserverId: string, value: string): Node;

    /** This function sets the enabled state in the configuration for the specified App Server. **/
  appserverSetEnabled(config: Node, appserverId: string, value: Object): Node;

    /** This function changes the value of the "expires" HTTP header for a specified App Server to the newly specified value. **/
  appserverSetStaticExpires(config: Node, appserverId: string, value: number): Node;

    /** This function changes the value whether a WebDAV server computes content length. **/
  appserverSetComputeContentLength(config: Node, appserverId: string, value: Object): Node;

    /** This function returns the request blackouts specification for the specified appserver from the configuration. **/
  appserverGetRequestBlackouts(config: Node, appserverId: string): Node;

    /** This function constructs a request-blackout specification. **/
  appserverRecurringRequestBlackout(users: string, roles: string, days: string, startTime: string, endTime: string, duration: Object): Node;

    /** This function constructs a one-time request-blackout specification. **/
  appserverOneTimeRequestBlackout(users: string, roles: string, start: Date, end: Date, duration: Object): Node;

    /** This function adds a request blackout specification for a appserver to a configuration. **/
  appserverAddRequestBlackout(config: Node, appserverId: string, requestBlackouts: Node): Node;

    /** This function deletes a request blackout specification for a appserver from a configuration. **/
  appserverDeleteRequestBlackout(config: Node, appserverId: string, blackouts: Node): Node;

    /** This function constructs a schema element with the specified prefix and URI. **/
  groupSchema(namespaceUri: string, schemaLocation: string): Node;

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified App Server. Schemas with a schema binding definition are automatically imported into queries run against the App Server. **/
  appserverAddSchema(config: Node, appserverId: string, schemas: Node): Node;

    /** This function deletes a schema definition in the configuration for the specified App Server. **/
  appserverDeleteSchema(config: Node, appserverId: string, schemas: Node): Node;

    /** This function constructs a namespace element with the specified prefix and URI. **/
  groupNamespace(prefix: string, namespaceUri: string): Node;

    /** Add one or more namespaces to an App Server configuration, which will predefine the namespace(s) for all requests evaluated against the App Server. **/
  appserverAddNamespace(config: Node, appserverId: string, namespaces: Node): Node;

    /** This function deletes a namespace configuration from the configuration for the specified App Server. **/
  appserverDeleteNamespace(config: Node, appserverId: string, namespaces: Node): Node;

    /** This function deletes one or more App Servers in the configuration. **/
  appserverDelete(config: Node, appserverIds: string): Node;

    /** This function creates a new HTTP App Server with the specified name, root, and port in the configuration. **/
  httpServerCreate(config: Node, groupId: string, appserverName: string, root: string, port: string, modulesId: string, databaseId: string): Node;

    /** This function creates a new XDBC App Server with the specified name, root, and port in the configuration. **/
  xdbcServerCreate(config: Node, groupId: string, appserverName: string, root: string, port: string, modulesId: string, databaseId: string): Node;

    /** This function creates a new WebDAV App Server with the specified name, library, and port in the configuration. **/
  webdavServerCreate(config: Node, groupId: string, appserverName: string, root: string, port: string, databaseId: string): Node;

    /** This function creates a new App Server specification with the same settings as the App Server with the specified ID. The new App Server configuration will have the specified name. You can copy the App Server to a new one either in the same group (by specifying $old-group-id and $new-group-id with the same group ID) or in a different group. **/
  appserverCopy(config: Node, appserverId: string, targetGroupId: string, appserverName: string, port: string): Node;

    /** This function returns the name of the task server for the specified group from the configuration. **/
  taskserverGetName(config: Node, groupId: string): string;

    /** This function returns the number of threads configured on the task server for the specified group. **/
  taskserverGetThreads(config: Node, groupId: string): number;

    /** This function returns the number of debug threads configured on the task server for the specified group. **/
  taskserverGetDebugThreads(config: Node, groupId: string): number;

    /** This function returns the default time limit configured on the task server for the specified group. **/
  taskserverGetDefaultTimeLimit(config: Node, groupId: string): number;

    /** This function returns the maximum time limit configured on the task server for the specified group. **/
  taskserverGetMaxTimeLimit(config: Node, groupId: string): number;

    /** This function returns the number queue size configured on the task server for the specified group. **/
  taskserverGetQueueSize(config: Node, groupId: string): number;

    /** This function returns the maximum pre-commit trigger depth configured on the task server for the specified group. **/
  taskserverGetPreCommitTriggerDepth(config: Node, groupId: string): number;

    /** This function returns the maximum post-commit trigger depth configured on the task server for the specified group. **/
  taskserverGetPostCommitTriggerDepth(config: Node, groupId: string): number;

    /** This function returns the pre-commit trigger limit configured on the task server for the specified group. **/
  taskserverGetPreCommitTriggerLimit(config: Node, groupId: string): number;

    /** This function returns the value for the log-errors setting configured on the task server for the specified group. **/
  taskserverGetLogErrors(config: Node, groupId: string): Object;

    /** This function returns the value for the debug-allow setting configured on the task server for the specified group. **/
  taskserverGetDebugAllow(config: Node, groupId: string): Object;

    /** This function returns the value for the profile-allow setting configured on the task server for the specified group. **/
  taskserverGetProfileAllow(config: Node, groupId: string): Object;

    /** This function sets the value in the configuration of the maximum number of threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  taskserverSetThreads(config: Node, groupId: string, value: number): Node;

    /** This function sets the value in the configuration of the maximum number of debug threads for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  taskserverSetDebugThreads(config: Node, groupId: string, value: number): Node;

    /** This function sets the task server default time limit in the configuration. **/
  taskserverSetDefaultTimeLimit(config: Node, groupId: string, value: number): Node;

    /** This function sets the task server max time limit in the configuration. **/
  taskserverSetMaxTimeLimit(config: Node, groupId: string, value: number): Node;

    /** This function sets the value in the configuration of the maximum queue size for the specified task server. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  taskserverSetQueueSize(config: Node, groupId: string, value: number): Node;

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
  taskserverSetPreCommitTriggerDepth(config: Node, groupId: string, value: number): Node;

    /** This function sets the value for the task server post-commit trigger depth in the configuration. **/
  taskserverSetPostCommitTriggerDepth(config: Node, groupId: string, value: number): Node;

    /** This function sets the value for the task server pre-commit trigger depth in the configuration. **/
  taskserverSetPreCommitTriggerLimit(config: Node, groupId: string, value: number): Node;

    /** This function sets the value for the log errors setting for the task server in the configuration. **/
  taskserverSetLogErrors(config: Node, groupId: string, value: Object): Node;

    /** This function sets the value for the debug allow setting for the task server in the configuration. **/
  taskserverSetDebugAllow(config: Node, groupId: string, value: Object): Node;

    /** This function sets the value for the profile allow setting for the task server in the configuration. **/
  taskserverSetProfileAllow(config: Node, groupId: string, value: Object): Node;

    /** This function returns the IDs of all hosts belonging to the group. **/
  groupGetHostIds(config: Node, groupId: string): string;

    /** This function returns the IDs of all appservers belonging to the group. **/
  groupGetAppserverIds(config: Node, groupId: string): string;

    /** This function returns the IDs of all httpservers belonging to the group. **/
  groupGetHttpserverIds(config: Node, groupId: string): string;

    /** This function returns the IDs of all xdbcservers belonging to the group. **/
  groupGetXdbcserverIds(config: Node, groupId: string): string;

    /** This function returns the IDs of all webdavservers belonging to the group. **/
  groupGetWebdavserverIds(config: Node, groupId: string): string;

    /** This function returns the ID of of the taskserver belonging to the group. **/
  groupGetTaskserverId(config: Node, groupId: string): string;

    /** This function returns the ID of the group. The difference between this function and xdmp:group() is that the ID from this function can come from a group that has not yet been saved (that is, from a group that has been created in the same query with the Admin library but has not yet been saved to the cluster configuration files). This ID enables you to completely configure a newly created group without the need to first save the configuration. **/
  groupGetId(config: Node, groupName: string): string;

    /** This function returns the name of the specified group. **/
  groupGetName(config: Node, groupId: string): string;

    /** This function returns the value for the list cache size setting from the specified group. **/
  groupGetListCacheSize(config: Node, groupId: string): number;

    /** This function returns the value for the list cache partitions setting from the specified group. **/
  groupGetListCachePartitions(config: Node, groupId: string): number;

    /** This function returns the value for the compressed tree cache size setting from the specified group. **/
  groupGetCompressedTreeCacheSize(config: Node, groupId: string): number;

    /** This function returns the value for the compressed tree cache partitions setting from the specified group. **/
  groupGetCompressedTreeCachePartitions(config: Node, groupId: string): number;

    /** This function returns the value for the compressed tree read size (in kilobytes) setting from the specified group. **/
  groupGetCompressedTreeReadSize(config: Node, groupId: string): number;

    /** This function returns the value for the expanded tree cache size setting from the specified group. **/
  groupGetExpandedTreeCacheSize(config: Node, groupId: string): number;

    /** This function returns the value for the expanded tree cache partitions setting from the specified group. **/
  groupGetExpandedTreeCachePartitions(config: Node, groupId: string): number;

    /** This function returns the value for the smtp relay setting from the specified group. **/
  groupGetSmtpRelay(config: Node, groupId: string): string;

    /** This function returns the value for the smtp timeout setting from the specified group. **/
  groupGetSmtpTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the http user agent setting from the specified group. **/
  groupGetHttpUserAgent(config: Node, groupId: string): string;

    /** This function returns the value for the http timeout setting from the specified group. **/
  groupGetHttpTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the xdqp timeout setting from the specified group. **/
  groupGetXdqpTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the host timeout setting from the specified group. **/
  groupGetHostTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the host initial timeout setting from the specified group. **/
  groupGetHostInitialTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the number of seconds a request will retry before timing out. **/
  groupGetRetryTimeout(config: Node, groupId: string): number;

    /** This function returns the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
  groupGetModuleCacheTimeout(config: Node, groupId: string): number;

    /** This function returns the value for the system log level setting from the specified group. **/
  groupGetSystemLogLevel(config: Node, groupId: string): string;

    /** This function returns the value for the file log level setting from the specified group. **/
  groupGetFileLogLevel(config: Node, groupId: string): string;

    /** This function returns the value for the rotate log files setting from the specified group. **/
  groupGetRotateLogFiles(config: Node, groupId: string): string;

    /** This function returns the value for the keep log files setting from the specified group. **/
  groupGetKeepLogFiles(config: Node, groupId: string): number;

    /** This function returns the value for the failover enable setting from the specified group. **/
  groupGetFailoverEnable(config: Node, groupId: string): Object;

    /** This function returns the value for the trace events activated setting from the specified group. **/
  groupGetTraceEventsActivated(config: Node, groupId: string): Object;

    /** This function returns the value of any schemas definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
  groupGetSchemas(config: Node, groupId: string): Node;

    /** This function returns the value of any namespace definitions predefined for the specified group. If none are defined, returns the empty sequence. **/
  groupGetNamespaces(config: Node, groupId: string): Node;

    /** This function returns the value of any trace events activated for the specified group. If none are defined, returns the empty sequence. **/
  groupGetTraceEvents(config: Node, groupId: string): Node;

    /** This function changes the name of the group with the specified ID to the specified name. **/
  groupSetName(config: Node, groupId: string, value: string): Node;

    /** This function changes the list cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetListCacheSize(config: Node, groupId: string, value: number): Node;

    /** This function changes the list cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetListCachePartitions(config: Node, groupId: string, value: number): Node;

    /** This function changes the compressed tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetCompressedTreeCacheSize(config: Node, groupId: string, value: number): Node;

    /** This function changes the compressed tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetCompressedTreeCachePartitions(config: Node, groupId: string, value: number): Node;

    /** This function changes the compressed tree read size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetCompressedTreeReadSize(config: Node, groupId: string, value: number): Node;

    /** This function changes the expanded tree cache size setting of the group with the specified ID to the specified value. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetExpandedTreeCacheSize(config: Node, groupId: string, value: number): Node;

    /** This function changes the expanded tree cache partitions setting of the group with the specified ID to the specified value. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetExpandedTreeCachePartitions(config: Node, groupId: string, value: number): Node;

    /** This function changes the SMTP relay setting for the group in the configuration. **/
  groupSetSmtpRelay(config: Node, groupId: string, value: string): Node;

    /** This function changes the SMTP timeout setting for the group in the configuration. **/
  groupSetSmtpTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the HTTP User-Agent setting for the group in the configuration. **/
  groupSetHttpUserAgent(config: Node, groupId: string, value: string): Node;

    /** This function changes the HTTP timeout setting for the group in the configuration. **/
  groupSetHttpTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the XDQP timeout setting (the timeout for communication between data nodes and evaluator nodes) for the group in the configuration. **/
  groupSetXdqpTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the host timeout setting (the timeout for communication between hosts) for the group in the configuration. **/
  groupSetHostTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the host initial timeout setting (the time the cluster will wait for a host to come online during cluster startup) for the group in the configuration. **/
  groupSetHostInitialTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the number of seconds a request will retry before timing out. **/
  groupSetRetryTimeout(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of seconds a module can be unused before being flushed from caches. Larger values can potentially cause more memory to be used for cached modules. Smaller values can potentially cause more time to be used reloading uncached modules. **/
  groupSetModuleCacheTimeout(config: Node, groupId: string, value: number): Node;

    /** This function changes the host system log level setting for the group in the configuration. **/
  groupSetSystemLogLevel(config: Node, groupId: string, value: string): Node;

    /** This function changes the host file log level setting for the group in the configuration. **/
  groupSetFileLogLevel(config: Node, groupId: string, value: string): Node;

    /** This function changes the rotate log files setting for the group in the configuration. **/
  groupSetRotateLogFiles(config: Node, groupId: string, value: string): Node;

    /** This function changes the keep log files setting for the group in the configuration. **/
  groupSetKeepLogFiles(config: Node, groupId: string, value: number): Node;

    /** This function changes the failover enable setting for the group in the configuration. **/
  groupSetFailoverEnable(config: Node, groupId: string, value: Object): Node;

    /** This function changes the value for trace events in the group configuration. **/
  groupSetTraceEventsActivated(config: Node, groupId: string, value: Object): Node;

    /** This function adds a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. Schemas with a schema binding definition are automatically imported into queries run against any App Server in the group. **/
  groupAddSchema(config: Node, groupId: string, schemas: Node): Node;

    /** This function deletes a schema binding definition to the existing schema binding definitions in the configuration for the specified Group. **/
  groupDeleteSchema(config: Node, groupId: string, schemas: Node): Node;

    /** Add one or more namespaces to a Group configuration, which will predefine the namespace(s) for all requests evaluated against any App Server in the Group. **/
  groupAddNamespace(config: Node, groupId: string, namespaces: Node): Node;

    /** This function deletes the specified namespaces from the configuration for the specified group. **/
  groupDeleteNamespace(config: Node, groupId: string, namespaces: Node): Node;

    /** This function constructs an event element for the specified event name. **/
  groupTraceEvent(eventId: string): Node;

    /** This function adds trace events to the configuration. **/
  groupAddTraceEvent(config: Node, groupId: string, events: Node): Node;

    /** This function deletes the specified trace events from the configuration. **/
  groupDeleteTraceEvent(config: Node, groupId: string, events: Node): Node;

    /** This function deletes one or more groups in the configuration. **/
  groupDelete(config: Node, groupIds: string): Node;

    /** This function creates a new group with the specified name in the configuration. The new group has the default values. **/
  groupCreate(config: Node, groupName: string): Node;

    /** This function creates a new group specification with the same settings as the group with the specified ID. The new group configuration will have the specified name. **/
  groupCopy(config: Node, groupId: string, groupName: string): Node;

    /** This function returns the value for the audit enabled setting from the specified group. **/
  groupGetAuditEnabled(config: Node, groupId: string): Object;

    /** This function changes the audit enabled setting for the group in the configuration. **/
  groupSetAuditEnabled(config: Node, groupId: string, value: Object): Node;

    /** This function returns the value for the rotate audit files setting from the specified group. **/
  groupGetRotateAuditFiles(config: Node, groupId: string): string;

    /** This function returns the value for the keep audit files setting from the specified group. **/
  groupGetKeepAuditFiles(config: Node, groupId: string): number;

    /** This function changes the rotate audit files setting for the group in the configuration. **/
  groupSetRotateAuditFiles(config: Node, groupId: string, value: string): Node;

    /** This function changes the keep audit files setting for the group in the configuration. **/
  groupSetKeepAuditFiles(config: Node, groupId: string, value: number): Node;

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
  groupEnableAuditEventType(config: Node, groupId: string, eventType: string): Node;

    /** This function changes the audit event type(s) enabled setting for the audit configuration. **/
  groupDisableAuditEventType(config: Node, groupId: string, eventType: string): Node;

    /** This function returns the audit event type's enabled setting for the audit configuration. A value of true is returned is the specified event type is set. Otherwise false is returned. **/
  groupGetAuditEventTypeEnabled(config: Node, groupId: string, eventType: string): Object;

    /** This function restricts the audit configuration by excluding or including by user. **/
  groupSetAuditUserRestriction(config: Node, groupId: string, restrictionType: string, users: string): Node;

    /** This function returns the users excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditExcludedUsers(config: Node, groupId: string): string;

    /** This function returns the users included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditIncludedUsers(config: Node, groupId: string): string;

    /** This function restricts the audit configuration by excluding or including by role. **/
  groupSetAuditRoleRestriction(config: Node, groupId: string, restrictionType: string, roles: string): Node;

    /** This function returns the roles excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditExcludedRoles(config: Node, groupId: string): string;

    /** This function returns the roles included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditIncludedRoles(config: Node, groupId: string): string;

    /** This function restricts the audit configuration by excluding or including by document uri(s). **/
  groupSetAuditUriRestriction(config: Node, groupId: string, restrictionType: string, uris: string): Node;

    /** This function returns the uris excluded from auditing. If auditing has a "inclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditExcludedUris(config: Node, groupId: string): string;

    /** This function returns the uris included from auditing. If auditing has a "exclusion" restriction, this function returns the empty sequence. **/
  groupGetAuditIncludedUris(config: Node, groupId: string): string;

    /** This function restricts the audit configuration by auditing events only if they are "success" or "failure" events. **/
  groupSetAuditOutcomeRestriction(config: Node, groupId: string, outcome: string): Node;

    /** This function returns whether auditing events are restricted by a success or failure outcome. Returns "success","failure", or "both" **/
  groupGetAuditOutcomeRestriction(config: Node, groupId: string): string;

    /** This function adds mimetypes to the configuration. This function always requires a server restart to take effect. **/
  mimetypesAdd(config: Node, mimetypes: Node): Node;

    /** This function deletes mimetypes from the configuration. This function always requires a server restart to take effect. **/
  mimetypesDelete(config: Node, mimetypes: Node): Node;

    /** This function returns all the mimetypes from the configuration. **/
  mimetypesGet(config: Node): Node;

    /** This function constructs a mimetype specification. **/
  mimetype(name: string, extensions: string, format: string): Node;

    /** This function constructs a daily scheduled database backup specification. **/
  databaseDailyBackup(backupDir: string, backupPeriod: number, startTime: string, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a daily scheduled incremental database backup specification. **/
  databaseDailyIncrementalBackup(backupDir: string, backupPeriod: number, startTime: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs an hourly scheduled database backup specification. **/
  databaseHourlyBackup(backupDir: string, backupPeriod: number, startMinute: Object, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs an hourly scheduled incremental database backup specification. **/
  databaseHourlyIncrementalBackup(backupDir: string, backupPeriod: number, startMinute: Object, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a scheduled database backup specification on a number-of-minutes basis. **/
  databaseMinutelyBackup(backupDir: string, backupPeriod: number, maxBackups: string, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a scheduled incremental database backup specification based on a number of minutes. **/
  databaseMinutelyIncrementalBackup(backupDir: string, backupPeriod: number, backupSecurityDb: Object, backupSchemasDb: Object, backupTriggersDb: Object, includeReplicas?: Object, incrementalDir?: string, purgeJournalArchive?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Node;

    /** This function constructs a hourly scheduled forest backup specification. **/
  forestHourlyBackup(backupDir: string, backupPeriod: number, startMinute: Object): Node;

    /** This function constructs a scheduled forest backup on a number-of-minutes basis. **/
  forestMinutelyBackup(backupDir: string, backupPeriod: number): Node;

    /** This function returns all of the tasks scheduled for the specified group. **/
  groupGetScheduledTasks(config: Node, groupId: string): Node;

    /** This function adds one or more scheduled tasks to the specified group. **/
  groupAddScheduledTask(config: Node, groupId: string, scheduledTasks: Node): Node;

    /** This function deletes one or more scheduled tasks from the specified group. **/
  groupDeleteScheduledTask(config: Node, groupId: string, scheduledTasks: Node): Node;

    /** This function constructs a task to be invoked once, at a specific calendar day and time. **/
  groupOneTimeScheduledTask(taskPath: string, taskRoot: string, taskStart: Date, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function constructs a task to be invoked at monthly intervals. **/
  groupMonthlyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskMonthDay: string, taskStartTime: string, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function constructs a task to be invoked at weekly intervals. **/
  groupWeeklyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskDays: string, taskStartTime: string, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function constructs a task to be invoked at daily intervals. **/
  groupDailyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskStartTime: string, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function constructs a task to be invoked at hourly intervals. **/
  groupHourlyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskMinute: Object, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function constructs a task to be invoked at intervals defined in terms of minutes. **/
  groupMinutelyScheduledTask(taskPath: string, taskRoot: string, taskPeriod: number, taskDatabase: string, taskModules: string, taskUser: string, taskHost: string, taskPriority?: string): Node;

    /** This function returns the id of the SSL certificate template used by the specified App Server. If no template is set for the App Server, 0 is returned. **/
  appserverGetSslCertificateTemplate(config: Node, appserverId: string): string;

    /** This function returns the SSL ciphers set for the App Server. **/
  appserverGetSslCiphers(config: Node, appserverId: string): string;

    /** This function returns the SSL hostname for the specified App Server. If no hostname is set, nothing is returned. **/
  appserverGetSslHostname(config: Node, appserverId: string): string;

    /** This function sets an SSL certificate template for the specified App Server. **/
  appserverSetSslCertificateTemplate(config: Node, appserverId: string, value: string): Node;

    /** This function sets SSL ciphers for the specified App Server. This is the standard cipher specification string for OpenSSL. **/
  appserverSetSslCiphers(config: Node, appserverId: string, value: string): Node;

    /** This function sets an SSL hostname for the specified App Server. The SSL hostname should only be set when a proxy or load balancer is used to represent multiple servers. In this case, you can specify an SSL hostname with this function and all instances of the application server will identify themselves as that host. **/
  appserverSetSslHostname(config: Node, appserverId: string, value: string): Node;

    /** This function returns true if the SSL v3 protocol is enabled for the specified App Server, or false if SSL v3 is disabled. **/
  appserverGetSslAllowSslv3(config: Node, appserverId: string): Object;

    /** This function returns true if the TLS protocol is enabled for the specified App Server, or false if TLS is disabled. **/
  appserverGetSslAllowTls(config: Node, appserverId: string): Object;

    /** This function returns the id(s) of the client certificate authority for the specified App Server. If no client certificate authority is set, this function returns an empty sequence. **/
  appserverGetSslClientCertificateAuthorities(config: Node, appserverId: string): string;

    /** This function enables or disables the SSL v3 protocol for the specified App Server. **/
  appserverSetSslAllowSslv3(config: Node, appserverId: string, value: Object): Node;

    /** This function enables or disables the TLS protocol for the specified App Server. **/
  appserverSetSslAllowTls(config: Node, appserverId: string, value: Object): Node;

    /** This function sets one or more client certificate authorities that sign client certificates for the specified App Server. This function is typically used along with the pki:insert-trusted-certificates and pki:get-trusted-certificate-ids functions to import trusted Certificate Authorities for client certificates. **/
  appserverSetSslClientCertificateAuthorities(config: Node, appserverId: string, value: string): Node;

    /** This function constructs a daily scheduled forest backup. **/
  forestDailyBackup(backupDir: string, backupPeriod: number, startTime: string): Node;

    /** This function specifies whether to use the default term-frequency normalization (scaled-log), which scales the term frequency based on the size of the document, or to use the unscaled-log, which uses term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
  databaseSetTfNormalization(config: Node, databaseId: string, value: string): Node;

    /** This function returns the current term-frequency normalization setting for the database. The returned value is either (scaled-log), which means to scale the term frequency based on the size of the document, or unscaled-log, which means to use term frequency as a function of the actual term frequency in a document, regardless of the document size. **/
  databaseGetTfNormalization(config: Node, databaseId: string): string;

    /** This function returns true if SSL is enabled for the group. Otherwise, false is returned. **/
  groupGetXdqpSslEnabled(config: Node, groupId: string): Object;

    /** This function returns true if the SSL v3 protocol is enabled for the group. Otherwise, false is returned. **/
  groupGetXdqpSslAllowSslv3(config: Node, groupId: string): Object;

    /** This function returns true if the TLS protocol is enabled for the group. Otherwise, false is returned. **/
  groupGetXdqpSslAllowTls(config: Node, groupId: string): Object;

    /** This function returns the SSL ciphers set for the group. **/
  groupGetXdqpSslCiphers(config: Node, groupId: string): string;

    /** This function enables or disables SSL for the group. **/
  groupSetXdqpSslEnabled(config: Node, groupId: string, value: Object): Node;

    /** This function enables or disables the SSL v3 protocol for the specified group. **/
  groupSetXdqpSslAllowSslv3(config: Node, groupId: string, value: Object): Node;

    /** This function enables or disables the TLS protocol for the specified group. **/
  groupSetXdqpSslAllowTls(config: Node, groupId: string, value: Object): Node;

    /** This function sets SSL ciphers for the specified group. This is the standard cipher specification string for OpenSSL. **/
  groupSetXdqpSslCiphers(config: Node, groupId: string, value: string): Node;

    /** This function returns true if a client certificate is required for the specified App Server. Otherwise, it returns false. **/
  appserverGetSslRequireClientCertificate(config: Node, appserverId: string): Object;

    /** This function determines whether or not a client certificate is required for the specified App Server. **/
  appserverSetSslRequireClientCertificate(config: Node, appserverId: string, value: Object): Node;

    /** This function determines whether or not the specified database exists. Returns true if the database exists, otherwise false is returned. **/
  databaseExists(config: Node, databaseName: string): Object;

    /** This function determines whether or not the specified forest exists. Returns true if the forest exists, otherwise false is returned. **/
  forestExists(config: Node, forestName: string): Object;

    /** This function returns the ID of the database that uses the specified forest. **/
  forestGetDatabase(config: Node, forestId: string): string;

    /** This function returns the IDs of the forest replicas for the specified forest. If it returns the empty sequence, then no replacas are assigned to the specified forest. **/
  forestGetReplicas(config: Node, forestId: string): string;

    /** This function adds a forest replica to a master forest. **/
  forestAddReplica(config: Node, masterId: string, replicaId: string): Node;

    /** This function removes a forest replica from a master forest. **/
  forestRemoveReplica(config: Node, masterId: string, replicaId: string): Node;

    /** This function determines whether or not the specified Host exists. Returns true if the Host exists, otherwise false is returned. **/
  hostExists(config: Node, hostName: string): Object;

    /** This function determines whether or not the specified App Server exists. Returns true if the App Server exists, otherwise false is returned. **/
  appserverExists(config: Node, groupIds: string, appserverName: string): Object;

    /** This function determines whether or not the specified Group exists. Returns true if the Group exists, otherwise false is returned. **/
  groupExists(config: Node, groupName: string): Object;

    /** This function sets the field value positions setting for the specified database in the configuration. **/
  databaseSetFieldValuePositions(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function sets the field value searches setting for the specified database in the configuration. **/
  databaseSetFieldValueSearches(config: Node, databaseId: string, fieldName: string, value: Object): Node;

    /** This function gets the field value positions setting for the specified database in the configuration. **/
  databaseGetFieldValuePositions(config: Node, databaseId: string, fieldName: string): Object;

    /** This function returns the field value search setting for the specified field. **/
  databaseGetFieldValueSearches(config: Node, databaseId: string, fieldName: string): Object;

    /** This function sets the preload-replica-mapped-data setting for the specified database. **/
  databaseSetPreloadReplicaMappedData(config: Node, databaseId: string, value: Object): Node;

    /** This function returns the preload replica mapped data setting for the specified database from the configuration. **/
  databaseGetPreloadReplicaMappedData(config: Node, databaseId: string): Object;

    /** This function returns a replica database configuration. Use the output of this function in the admin:database-set-foreign-replicas function to place the replica database configuration into the cluster configuration. **/
  databaseForeignReplica(foreignClusterId: string, foreignDatabaseId: string, connectForestsByName: Object, lagLimit: number, replicationEnabled?: Object, queueSize?: number): Node;

    /** This function returns the id of the replica cluster from the replica database configuration. **/
  databaseForeignReplicaGetClusterId(foreignReplica: Node): string;

    /** This function returns the id of the replica database from the replica database configuration. **/
  databaseForeignReplicaGetDatabaseId(foreignReplica: Node): string;

    /** This function returns the connect-forests-by-name setting from the replica database configuration. This function must be executed on the master cluster. **/
  databaseForeignReplicaGetConnectForestsByName(foreignReplica: Node): Object;

    /** This function returns the lag limit value from the replica database configuration. **/
  databaseForeignReplicaGetLagLimit(foreignReplica: Node): number;

    /** This function sets the lag limit value on a replica database configuration. **/
  databaseForeignReplicaSetLagLimit(foreignReplica: Node, lagLimit: number): Node;

    /** This function returns the enabled flag from the replica database configuration. **/
  databaseForeignReplicaGetReplicationEnabled(foreignReplica: Node): Object;

    /** This function sets the enabled flag on a replica database configuration. **/
  databaseForeignReplicaSetReplicationEnabled(foreignReplica: Node, enabled: Object): Node;

    /** This function returns a master database configuration. Use the output of this function in the admin:database-set-foreign-master function to set the master database configuration. **/
  databaseForeignMaster(foreignClusterId: string, foreignDatabaseId: string, connectForestsByName: Object): Node;

    /** This function returns the id of the cluster from the specified foreign master configuration. **/
  databaseForeignMasterGetClusterId(foreignMaster: Node): string;

    /** This function returns the id of the foreign master database. This function must be executed on the replica cluster. **/
  databaseForeignMasterGetDatabaseId(foreignMaster: Node): string;

    /** This function returns the connect-forests-by-name setting from the master database configuration. This function must be executed on the replica cluster. **/
  databaseForeignMasterGetConnectForestsByName(foreignMaster: Node): Object;

    /** This function configures the specified replica database to receive replicated data from the specified foreign master. This function must be executed on the replica cluster. **/
  databaseSetForeignMaster(config: Node, databaseId: string, foreignMaster: Node): Node;

    /** This function removes the specified master database from the database replication configuration on the replica host. This function must be executed on the replica cluster. **/
  databaseDeleteForeignMaster(config: Node, databaseId: string): Node;

    /** This function returns the configuration for the foreign master database. This function must be executed on the replica host. **/
  databaseGetForeignMaster(config: Node, databaseId: string): Node;

    /** This function adds one or more replica databases to the database replication configuration. This function must be executed on the master cluster. **/
  databaseAddForeignReplicas(config: Node, databaseId: string, replicas: Node): Node;

    /** This function sets the foreign replica database configuration. This function must be executed on the master cluster. **/
  databaseSetForeignReplicas(config: Node, databaseId: string, replicas: Node): Node;

    /** This function deletes the foreign replica database configurations for the specified master database. This function must be executed on the master cluster. **/
  databaseDeleteForeignReplicas(config: Node, databaseId: string, foreignReplicas: Node): Node;

    /** This function returns the configuration elements of the replica databases associated with the master database specified by database-id. This function must be executed on the master cluster. **/
  databaseGetForeignReplicas(config: Node, databaseId: string): Node;

    /** This function returns a replica forest configuration. Use the output of this function in the admin:forest-set-foreign-replicas function to place the replica forest configuration into the cluster configuration. This function must be executed on the master host. **/
  forestForeignReplica(foreignClusterId: string, foreignDatabaseId: string, foreignForestId: string): Node;

    /** This function returns the id of the replica cluster from the specified replica forest configuration element. This function must be executed on the master cluster. **/
  forestForeignReplicaGetClusterId(foreignReplica: Node): string;

    /** This function returns the id of the replica database from the specified replica forest configuration element. This function must be executed on the master cluster. **/
  forestForeignReplicaGetDatabaseId(foreignReplica: Node): string;

    /** This function returns the id of the replica forest from the specified replica forest configuration element. This function must be executed on the master cluster. **/
  forestForeignReplicaGetForestId(foreignReplica: Node): string;

    /** This function creates a replicaton configuration element for the specified master forest. This function must be executed on the replica cluster. **/
  forestForeignMaster(foreignClusterId: string, foreignDatabaseId: string, foreignForestId: string): Node;

    /** This function returns the ID for the cluster from the foreign master forest configuration element. **/
  forestForeignMasterGetClusterId(foreignMaster: Node): string;

    /** This function returns the id for the database from the foreign master forest configuration element. **/
  forestForeignMasterGetDatabaseId(foreignMaster: Node): string;

    /** This function returns the id for the forest from the foreign master forest configuration element. **/
  forestForeignMasterGetForestId(foreignMaster: Node): string;

    /** This function writes the specified foreign master forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the replica cluster. **/
  forestSetForeignMaster(config: Node, forestId: string, foreignMaster: Node): Node;

    /** This function deletes the master forest associated with the specified replica forest from the database replication configuration. This function must be executed on the replica host. **/
  forestDeleteForeignMaster(config: Node, forestId: string): Node;

    /** This function returns the replication configuration for the master forest associated with the specified replica forest. This function must be executed on the replica host. **/
  forestGetForeignMaster(config: Node, forestId: string): Node;

    /** This function adds the replica forest that is associated with the specified master forest to the database replication configuration. This function must be executed on the master host. **/
  forestAddForeignReplicas(config: Node, forestId: string, foreignReplicas: Node): Node;

    /** This function writes the specified replica forest configuration into the database replication configuration. Any forest-level configuration will override the database level-configuration. This function must be executed on the master cluster. **/
  forestSetForeignReplicas(config: Node, forestId: string, foreignReplicas: Node): Node;

    /** This function deletes the foreign replica of the specified forest on the master host. **/
  forestDeleteForeignReplicas(config: Node, forestId: string, foreignReplicas: Node): Node;

    /** This function returns the foreign replicas configuration element. This function must be executed on the master cluster. **/
  forestGetForeignReplicas(config: Node, forestId: string): Node;

    /** This function returns the port used by the specified host to listen for communications from foreign hosts. **/
  hostGetForeignPort(config: Node, hostId: string): number;

    /** This function configures the specified domestic host to listen for communications from foreign hosts over the specified port. **/
  hostSetForeignPort(config: Node, hostId: string, value: number): Node;

    /** This function returns the id of this cluster. **/
  clusterGetId(config: Node): string;

    /** This function returns the name of this cluster. **/
  clusterGetName(config: Node): string;

    /** This function sets the name for this cluster. **/
  clusterSetName(config: Node, name: string): Node;

    /** This function sets the SSL certificate used to establish secure communication with this cluster. **/
  clusterSetXdqpSslCertificate(config: Node, value: string): Node;

    /** This function returns the SSL certificate used to establish secure communication with this cluster. **/
  clusterGetXdqpSslCertificate(config: Node): string;

    /** This function returns the private key for the cluster. **/
  clusterGetXdqpSslPrivateKey(config: Node): string;

    /** This function sets the bootstrap hosts for the domestic cluster. Bootstrap hosts are accessed by hosts on foreign clusters to establish communication with the domestic cluster. **/
  clusterSetXdqpBootstrapHosts(config: Node, hostIds: string): Node;

    /** This function returns the ids of the bootstrap hosts configured for this cluster. **/
  clusterGetXdqpBootstrapHosts(config: Node): string;

    /** This function configures a foreign host to be set by the admin:foreign-cluster-set-bootstrap-hosts function as the bootstrap host for the foreign cluster. **/
  foreignHost(hostId: string, hostName: string, connectPort: number): Node;

    /** This function returns the id of the foreign bootstrap host. **/
  foreignHostGetId(fh: Node): string;

    /** This function returns the name of the foreign bootstrap host. **/
  foreignHostGetName(fh: Node): string;

    /** This function returns the number of the port configured for the foreign bootstrap host. **/
  foreignHostGetConnectPort(fh: Node): number;

    /** This function deletes the configuration for the specified foreign cluster. **/
  foreignClusterDelete(config: Node, clusterId: string): Node;

    /** This function replaces a configuration for a foreign cluster with a new configuration. **/
  foreignClusterReplace(config: Node, clusterId: string, clusterName: string, xdqpTimeout: number, hostTimeout: number, sslCertificate: string, xdqpSslEnabled: Object, xdqpSslAllowSslv3: Object, xdqpSslAllowTls: Object, xdqpSslCiphers: string, foreignBootstrapHosts: Node): Node;

    /** This function creates a complete configuration for a foreign cluster. **/
  foreignClusterCreate(config: Node, clusterId: string, clusterName: string, xdqpTimeout: number, hostTimeout: number, sslCertificate: string, xdqpSslEnabled: Object, xdqpSslAllowSslv3: Object, xdqpSslAllowTls: Object, xdqpSslCiphers: string, foreignBootstrapHosts: Node): Node;

    /** This function returns the ids of the foreign clusters. **/
  clusterGetForeignClusterIds(config: Node): string;

    /** This function returns the id of the specified foreign cluster. **/
  clusterGetForeignClusterId(config: Node, name: string): string;

    /** This function returns the name of the foreign cluster. **/
  foreignClusterGetName(config: Node, clusterId: string): string;

    /** This function sets the name of a foreign cluster. **/
  foreignClusterSetName(config: Node, clusterId: string, clusterName: string): Node;

    /** This function sets the timeout (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. By default, the XDQP timeout setting is 10 seconds. **/
  foreignClusterSetXdqpTimeout(config: Node, clusterId: string, xdqpTimeout: number): Node;

    /** This function returns the timeout setting (in seconds) for XDQP communication between data nodes and evaluator nodes in the domestic cluster and their counterparts in the foreign cluster. **/
  foreignClusterGetXdqpTimeout(config: Node, clusterId: string): number;

    /** This function sets the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. By default, the host timeout setting is 30 seconds. **/
  foreignClusterSetHostTimeout(config: Node, clusterId: string, hostTimeout: number): Node;

    /** This function returns the timeout period (in seconds) for communication between domestic hosts and hosts in the specified foreign cluster. **/
  foreignClusterGetHostTimeout(config: Node, clusterId: string): number;

    /** This function returns the SSL certificate used to communicate with hosts in the foreign cluster. **/
  foreignClusterGetSslCertificate(config: Node, clusterId: string): string;

    /** This function sets the specified SSL certificate for secure communication with hosts in a foreign cluster. This certificate is shared by all hosts in the cluster when communicating with foreign hosts. **/
  foreignClusterSetSslCertificate(config: Node, clusterId: string, sslCertificate: string): Node;

    /** This function returns true if SSL is enabled for the foreign cluster. Otherwise, false is returned. **/
  foreignClusterGetXdqpSslEnabled(config: Node, clusterId: string): Object;

    /** This function enables or disables SSL for the foreign cluster. **/
  foreignClusterSetXdqpSslEnabled(config: Node, clusterId: string, value: Object): Node;

    /** This function returns true if the SSL v3 protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
  foreignClusterGetXdqpSslAllowSslv3(config: Node, clusterId: string): Object;

    /** This function enables or disables the SSL v3 protocol for the specified foreign cluster. **/
  foreignClusterSetXdqpSslAllowSslv3(config: Node, clusterId: string, value: Object): Node;

    /** This function returns true if the TLS protocol is enabled for the foreign cluster. Otherwise, false is returned. **/
  foreignClusterGetXdqpSslAllowTls(config: Node, clusterId: string): Object;

    /** This function enables or disables the TLS protocol for the specified foreign cluster. **/
  foreignClusterSetXdqpSslAllowTls(config: Node, clusterId: string, value: Object): Node;

    /** This function returns the SSL ciphers set for the specified foreign cluster. **/
  foreignClusterGetXdqpSslCiphers(config: Node, clusterId: string): string;

    /** This function sets SSL ciphers for the specified foreign cluster. The value parameter can be any standard cipher specification string for OpenSSL. **/
  foreignClusterSetXdqpSslCiphers(config: Node, clusterId: string, value: string): Node;

    /** This function returns one or more configuration elements that identify the bootstrap hosts on the specified foreign cluster. **/
  foreignClusterGetBootstrapHosts(config: Node, clusterId: string): Node;

    /** This function identifies the foreign host to be used to bootstrap communication with the foreign cluster. When a bootstrap host on a foreign cluster initially starts, it will bootstrap communications by establishing a connection to one or more of the hosts on this cluster. Once a connection has been established between cluster hosts, the bootstrap host retrieves configuration information to identify which foreign hosts are responsible for specific foreign forests. **/
  foreignClusterSetBootstrapHosts(config: Node, clusterId: string, bootstrapHosts: Node): Node;

    /** This function returns the threshold at which binary documents in the specified database should be handled as binary large objects (BLOBs). Binary documents less than or equal to the threshold are treated as small binary objects, stored in stands. Binary documents larger than the threshold are stored in the Large Data Directory for more efficient memory consumption. **/
  databaseGetLargeSizeThreshold(config: Node, databaseId: string): number;

    /** This function returns the directory path set in the fast data directory field for the specified forest. **/
  forestGetFastDataDirectory(config: Node, forestId: string): string;

    /** This function is executed on the master cluster to return the replication configuration for the specified local database to the specified foreign replica cluster. **/
  clusterGetForeignReplicaDatabases(config: Node, foreignClusterId: string, databaseIds: string): Node;

    /** This function is executed on a replica cluster to return the replication configuration for the specified local database from the specified foreign master cluster. **/
  clusterGetForeignMasterDatabase(config: Node, foreignClusterId: string, databaseIds: string): Node;

    /** This function returns the replica configuration on a foreign cluster. **/
  databaseGetConfigForForeignReplicasOnForeignCluster(config: Node, foreignClusterId: string): Node;

    /** This function returns the master configuration on a foreign cluster. **/
  databaseGetConfigForForeignMasterOnForeignCluster(config: Node, foreignClusterId: string): Node;

    /** This function returns the value for the default output serialization method setting for the specified App Server. **/
  appserverGetOutputMethod(config: Node, appserverId: string): string;

    /** This function returns the value for the output byte order mark setting for the specified App Server. **/
  appserverGetOutputByteOrderMark(config: Node, appserverId: string): string;

    /** This function returns the value for the output CDATA section namespace URI setting for the specified App Server. **/
  appserverGetOutputCdataSectionNamespaceUri(config: Node, appserverId: string): string;

    /** This function returns the value for the output CDATA section localname setting for the specified App Server. **/
  appserverGetOutputCdataSectionLocalname(config: Node, appserverId: string): string;

    /** This function returns the value for the public doctype output setting for the specified App Server. **/
  appserverGetOutputDoctypePublic(config: Node, appserverId: string): string;

    /** This function returns the value for the system doctype output setting for the specified App Server. **/
  appserverGetOutputDoctypeSystem(config: Node, appserverId: string): string;

    /** This function returns the value for the output escape URI attributes setting for the specified App Server. **/
  appserverGetOutputEscapeUriAttributes(config: Node, appserverId: string): string;

    /** This function returns the value for the output include content type setting for the specified App Server. **/
  appserverGetOutputIncludeContentType(config: Node, appserverId: string): string;

    /** This function returns the value for the output indent setting for the specified App Server. **/
  appserverGetOutputIndent(config: Node, appserverId: string): string;

    /** This function returns the value for the output indent untyped setting for the specified App Server. **/
  appserverGetOutputIndentUntyped(config: Node, appserverId: string): string;

    /** This function returns the value for the output media type setting for the specified App Server. **/
  appserverGetOutputMediaType(config: Node, appserverId: string): string;

    /** This function returns the value for the output normalization form setting for the specified App Server. **/
  appserverGetOutputNormalizationForm(config: Node, appserverId: string): string;

    /** This function returns the value for the output omit XML declaration setting for the specified App Server. **/
  appserverGetOutputOmitXmlDeclaration(config: Node, appserverId: string): string;

    /** This function returns the value for the output standalone setting for the specified App Server. **/
  appserverGetOutputStandalone(config: Node, appserverId: string): string;

    /** This function returns the value for the output undeclare prefixes setting for the specified App Server. **/
  appserverGetOutputUndeclarePrefixes(config: Node, appserverId: string): string;

    /** This function returns the value for the output version setting for the specified App Server. **/
  appserverGetOutputVersion(config: Node, appserverId: string): string;

    /** This function returns the value for the output include default attributes setting for the specified App Server. **/
  appserverGetOutputIncludeDefaultAttributes(config: Node, appserverId: string): string;

    /** This function configures the default output serialization method for the specified App Server. **/
  appserverSetOutputMethod(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether for the specified App Server the output sequence of octets is or is not to be preceded by a byte order mark by default. **/
  appserverSetOutputByteOrderMark(config: Node, appserverId: string, value: string): Node;

    /** This function sets the namespace URI for any CDATA section localnames configured for the specified App Server. **/
  appserverSetOutputCdataSectionNamespaceUri(config: Node, appserverId: string, value: string): Node;

    /** This function sets the default element localname or list of element localnames to be output as CDATA sections for the specified App Server. **/
  appserverSetOutputCdataSectionLocalname(config: Node, appserverId: string, value: string): Node;

    /** This function configures a default public identifier to use on the emitted DOCTYPE for the specified App Server. **/
  appserverSetOutputDoctypePublic(config: Node, appserverId: string, value: string): Node;

    /** This function configures a default system identifier to use on the emitted DOCTYPE for the specified App Server. **/
  appserverSetOutputDoctypeSystem(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether or not to apply Unicode normalization, percent-encoding, and HTML escaping when serializing URI attributes by default for the specified App Server. **/
  appserverSetOutputEscapeUriAttributes(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether or not to include the content-type declaration when serializing nodes for the specified App Server. **/
  appserverSetOutputIncludeContentType(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether or not to pretty-print (indent) typed XML (that is, XML for which there is an in-scope schema) output for the specified App Server. **/
  appserverSetOutputIndent(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether or not to pretty-print (indent) untyped XML (that is, XML for which there is no in-scope schema) output for the specified App Server. **/
  appserverSetOutputIndentUntyped(config: Node, appserverId: string, value: string): Node;

    /** This function sets the default serialization media type for the specified App Server. **/
  appserverSetOutputMediaType(config: Node, appserverId: string, value: string): Node;

    /** This function sets a Unicode normalization form to be applied by default to serialized output for the specified App Server. **/
  appserverSetOutputNormalizationForm(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether serialized output for the specified App Server should omit the inclusion of an XML declaration by default. **/
  appserverSetOutputOmitXmlDeclaration(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether for the specified App Server an XML delcaration in serialized output should include a standalone attribute by default. **/
  appserverSetOutputStandalone(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether by default, serialization for the specified App Server should undeclare the namespace prefix of any child element that does not bind the prefix of its parent element. **/
  appserverSetOutputUndeclarePrefixes(config: Node, appserverId: string, value: string): Node;

    /** This function stipulates a version of the default serialization method associated with the specified App Server. **/
  appserverSetOutputVersion(config: Node, appserverId: string, value: string): Node;

    /** This function configures whether for the specified App Server, attributes defaulted with a schema should be included in the serialization. **/
  appserverSetOutputIncludeDefaultAttributes(config: Node, appserverId: string, value: string): Node;

    /** This function adds a foreign database to a database **/
  databaseAddForeignDatabase(config: Node, databaseId: string, foreignClusterId: string, foreignDatabaseId: string): Node;

    /** This function removes a foreign database from a database **/
  databaseDeleteForeignDatabase(config: Node, databaseId: string, foreignClusterId: string, foreignDatabaseId: string): Node;

    /** This function constructs a namespace element with the specified prefix and URI. **/
  databasePathNamespace(prefix: string, namespaceUri: string): Node;

    /** This function returns the value of any namespace definitions predefined for the specified database. If none are defined, returns the empty sequence. **/
  databaseGetPathNamespaces(config: Node, databaseId: string): Node;

    /** This function returns the prefixes of all the namespaces that are in use by some path or geospatial path index. If none is used by any path, returns the empty sequence. **/
  databaseInUsePathNamespacePrefixes(config: Node, databaseId: string): string;

    /** Add one or more namespaces to a database configuration, which will predefine the namespace(s) for all XPath expressions used in range index definitions. **/
  databaseAddPathNamespace(config: Node, databaseId: string, pathNamespaces: Node): Node;

    /** This function deletes the specified namespaces from the configuration for the specified database. If the namespace is already in use in an index path expression, then ADMIN-PATHNAMESPACEINUSE error is returned. **/
  databaseDeletePathNamespace(config: Node, databaseId: string, pathNamespaces: Node): Node;

    /** This function constructs a path range index specification. **/
  databaseRangePathIndex(databaseId: string, scalarType: string, pathexpr: string, collation: string, rangeValuePositions: Object, invalidValues: string): Node;

    /** This function returns the range path indexes specification(s) for the specified database from the configuration. **/
  databaseGetRangePathIndexes(config: Node, databaseId: string): Node;

    /** This function adds a range path index to the specified database in the configuration. **/
  databaseAddRangePathIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function deletes a range path index for the specified database in the configuration. **/
  databaseDeleteRangePathIndex(config: Node, databaseId: string, rangeIndexes: Node): Node;

    /** This function constructs a geospatial path index specification. For usage details, see Geospatial Path Range Indexes in the Search Developer's Guide. **/
  databaseGeospatialPathIndex(pathexpr: string, coordinateSystem: string, rangeValuePositions: Object, pointFormat: string, invalidValues: string): Node;

    /** This function returns the geospatial path indexes specification(s) for the specified database from the configuration. **/
  databaseGetGeospatialPathIndexes(config: Node, databaseId: string): Node;

    /** This function adds a range path index to the specified database in the configuration. **/
  databaseAddGeospatialPathIndex(config: Node, databaseId: string, geospatialPathIndexes: Node): Node;

    /** This function deletes a geospatial path index for the specified database in the configuration. **/
  databaseDeleteGeospatialPathIndex(config: Node, databaseId: string, geospatialPathIndexes: Node): Node;

    /** This function returns the ids of all of the ODBC App Servers in the specified group. **/
  groupGetOdbcserverIds(config: Node, groupId: string): string;

    /** This function creates a new ODBC App Server with the specified name, root, and port in the configuration. **/
  odbcServerCreate(config: Node, groupId: string, appserverName: string, root: string, port: string, modulesId: string, databaseId: string): Node;

    /** This function returns true when OpenSSL FIPS 140-2 mode is enabled in the cluster configuration. If OpenSSL FIPS 140-2 mode is not enabled, false is returned. **/
  clusterGetSslFipsEnabled(config: Node): Object;

    /** This function enables or disables OpenSSL FIPS 140-2 mode for the cluster. **/
  clusterSetSslFipsEnabled(config: Node, flag: Object): Node;

    /** This function validates the specified path expression, along with any namespaces used in the path expression. **/
  databaseValidatePathExpression(config: Node, databaseId: string, pathexpr: string, ignoreNs: Object): Object;

    /** This function returns any undefined namespace prefixes used in a path expression. **/
  databaseValidatePathNamespaces(config: Node, databaseId: string, pathexpr: string): string;

    /** This function gets the value for the I/O background limit that controls the I/O resoources that I/O tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
  groupGetBackgroundIoLimit(config: Node, groupId: string): number;

    /** This function sets a limit on the amount of I/O that background tasks (for example, merges) will consume. If the limit is reached, then merges are throttled back to limit their maximum I/O. This can help in situations when the I/O system on the computer is maxed out. In normal operations, you should not need to set this parameter. **/
  groupSetBackgroundIoLimit(config: Node, groupId: string, maxMegabytesPerSecond: number): Node;

    /** This function gets the simple storage service internet domain name for hosts in the group. **/
  groupGetS3Domain(config: Node, groupId: string): string;

    /** This function sets the simple storage service internet domain name for hosts in the group. **/
  groupSetS3Domain(config: Node, groupId: string, domain: string): Node;

    /** This function gets the simple storage service protocol for hosts in the group. **/
  groupGetS3Protocol(config: Node, groupId: string): string;

    /** This function sets the simple storage service protocol for hosts in the group. **/
  groupSetS3Protocol(config: Node, groupId: string, protocol: string): Node;

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
  groupGetS3ServerSideEncryption(config: Node, groupId: string): string;

    /** This function gets the method of server side encryption for data at rest on the simple storage service. **/
  groupSetS3ServerSideEncryption(config: Node, groupId: string, protocol: string): Node;

    /** This function returns the ID of the security database for the specified group from the configuration. **/
  groupGetSecurityDatabase(config: Node, groupId: string): string;

    /** This function sets the security database for a group to the specified database in the configuration. **/
  groupSetSecurityDatabase(config: Node, groupId: string, value: string): Node;

    /** This function gets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. **/
  appserverGetRewriteResolvesGlobally(config: Node, appserverId: string): Object;

    /** This function sets the value for the rewrite-resolves-globally property, which allows rewritten URLs to be resolved from the marklogic-dir/Modules directory as well as from the App Server root. This function requires a restart of MarkLogic Server for a change to this setting to take effect. **/
  appserverSetRewriteResolvesGlobally(config: Node, appserverId: string, value: Object): Node;

    /** This function is a constructor for field-path element. The field path element is used to construct a field. **/
  databaseFieldPath(fieldPath: string, weight: number): Node;

    /** This function constructs a field specification that has field paths. **/
  databasePathField(fieldName: string, fieldPaths: Node): Node;

    /** This function checks if the paths conform to the permissible XPath syntax. If any of the paths doesn't, it will return an error. Conformance to the permissible syntax for an individual path cal also be checked using function cts:valid-index-path. **/
  databaseValidateFieldPaths(config: Node, databaseId: string, fieldPaths: Node): void;

    /** For a given sequence of fields, this function validates all the paths on each field using admin:database-validate-field-paths call. **/
  databaseValidatePathFields(config: Node, databaseId: string, fields: Node): void;

    /** This function deletes paths from a specified field. **/
  databaseDeleteFieldPaths(config: Node, databaseId: string, fieldName: string, fieldPaths: Node): Node;

    /** This function adds given paths to the field specified by field-name. **/
  databaseAddFieldPaths(config: Node, databaseId: string, fieldName: string, fieldPaths: Node): Node;

    /** This function returns all the paths on a given field. **/
  databaseGetFieldPaths(config: Node, databaseId: string, fieldName: string): Node;

    /** This function renames a forest. **/
  forestRename(config: Node, forestId: string, newName: string): Node;

    /** This function sets the triple index on or off for a database. **/
  databaseSetTripleIndex(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the triple positions of a database to true or false. **/
  databaseSetTriplePositions(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the size, in megabytes, of the in-memory triple index. This is used for memory to manage triple index data in in-memory stands. **/
  databaseSetInMemoryTripleIndexSize(config: Node, databaseId: string, value: number): Node;

    /** This function returns true if the triple index is enabled for the specified database, false if it is not enabled. **/
  databaseGetTripleIndex(config: Node, databaseId: string): Object;

    /** This function returns triple positions setting of a database. **/
  databaseGetTriplePositions(config: Node, databaseId: string): Object;

    /** This function returns the in memory triple index size setting (in megabytes) for the specified database from the configuration. **/
  databaseGetInMemoryTripleIndexSize(config: Node, databaseId: string): number;

    /** This function returns the value of the triple cache size for the group. **/
  groupGetTripleCacheSize(config: Node, groupId: string): number;

    /** This function returns the number of triple cache partitions configured for the group. **/
  groupGetTripleCachePartitions(config: Node, groupId: string): number;

    /** This function returns the size of triple value cache configured for the group. **/
  groupGetTripleValueCacheSize(config: Node, groupId: string): number;

    /** This function returns the number of triple value cache partitions configured for the group. **/
  groupGetTripleValueCachePartitions(config: Node, groupId: string): number;

    /** This function sets the number of triple cache partitions to allocate. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleCacheSize(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of partitions to allocate for the triple index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleCachePartitions(config: Node, groupId: string, value: number): Node;

    /** This function sets the size of the value cache for the triple index. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleValueCacheSize(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of partitons to allocate for the triple value index cache. More partitions allow more concurrency, but make each individual cache partition smaller, which could make it more likely for the cache to fill up. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleValueCachePartitions(config: Node, groupId: string, value: number): Node;

    /** This function gets the timeout value for the triple cache. **/
  groupGetTripleCacheTimeout(config: Node, groupId: string): number;

    /** This function gets the timeout value for the triple value cache. **/
  groupGetTripleValueCacheTimeout(config: Node, groupId: string): number;

    /** This function sets the timeout value for the triple cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleCacheTimeout(config: Node, groupId: string, value: number): Node;

    /** This function sets the timeout value for the triple value cache. This is a "cold" operation; when you use admin:save-configuration to save the configuration, it will automatically restart MarkLogic Server. **/
  groupSetTripleValueCacheTimeout(config: Node, groupId: string, value: number): Node;

    /** This function returns the value of any "using" namespaces predefined for the specified App Server. If none are defined, returns the empty sequence. **/
  appserverGetUsingNamespaces(config: Node, appserverId: string): Node;

    /** This function returns the value of any module locations predefined for the specified App Server. If none are defined, returns the empty sequence. **/
  appserverGetModuleLocations(config: Node, appserverId: string): Node;

    /** Add one or more "using" namespaces to an App Server configuration, which add the namespaces to the namespace path for all requests evaluated against that App Server. **/
  appserverAddUsingNamespace(config: Node, appserverId: string, namespaces: Node): Node;

    /** Delete one or more "using" namespaces from an App Server configuration. **/
  appserverDeleteUsingNamespace(config: Node, appserverId: string, namespaces: Node): Node;

    /** Add one or more module namespace to location mappings to an App Server configuration. The mappings are used to look up a location for an XQuery library module for any request on that App Server when the library module is requested using only the module namespace URI. **/
  appserverAddModuleLocation(config: Node, appserverId: string, moduleLocations: Node): Node;

    /** This function returns the value of any "using" namespaces predefined for the specified Group. If none are defined, returns the empty sequence. **/
  groupGetUsingNamespaces(config: Node, groupId: string): Node;

    /** This function returns the value of any module locations predefined for the specified Group. If none are defined, returns the empty sequence. **/
  groupGetModuleLocations(config: Node, groupId: string): Node;

    /** Delete one or more module location bindings from an App Server configuration. **/
  appserverDeleteModuleLocation(config: Node, appserverId: string, moduleLocations: Node): Node;

    /** This function constructs a using namespace element with the specified URI. **/
  groupUsingNamespace(namespaceUri: string): Node;

    /** This function constructs a module namespace element with the specified namespace URI and location. **/
  groupModuleLocation(namespaceUri: string, location: string): Node;

    /** Add one or more "using" namespaces to a Group configuration, which add the namespaces to the namespace path for all requests evaluated against any App Server in the Group. **/
  groupAddUsingNamespace(config: Node, groupId: string, namespaces: Node): Node;

    /** Delete one or more "using" namespaces from a Group configuration. **/
  groupDeleteUsingNamespace(config: Node, groupId: string, namespaces: Node): Node;

    /** Add one or more module namespace to location mappings to a Group configuration. The mappings are used to look up a location for an XQuery library module for any request on any App Server in that group when the library module is requested using only the module namespace URI. **/
  groupAddModuleLocation(config: Node, groupId: string, moduleLocations: Node): Node;

    /** Delete one or more module location bindings from a Group configuration. **/
  groupDeleteModuleLocation(config: Node, groupId: string, moduleLocations: Node): Node;

    /** This function constructs a custom tokenizer override. For details, see Custom Tokenization in the Search Developer's Guide. **/
  databaseTokenizerOverride(character: string, class_: string): Node;

    /** This function fetches any custom tokenizer override specifications for the specified field and database. For details, see Custom Tokenization in the Search Developer's Guide. **/
  databaseGetFieldTokenizerOverrides(config: Node, databaseId: string, fieldName: string): Node;

    /** This function adds tokenizer overrides for the specified field of the specified database. For details, see Custom Tokenization in the Search Developer's Guide. **/
  databaseAddFieldTokenizerOverride(config: Node, databaseId: string, fieldName: string, tokenizerOverrides: Node): Node;

    /** This function deletes the field's tokenizer override in the specified database from the configuration. **/
  databaseDeleteFieldTokenizerOverride(config: Node, databaseId: string, fieldName: string, tokenizerOverrides: Node): Node;

    /** This function sets the reblanacer enable setting for the specified database in the configuration. **/
  databaseSetRebalancerEnable(config: Node, databaseId: string, value: Object): Node;

    /** This function sets the rebalancer throttle setting for the specified database in the configuration. **/
  databaseSetRebalancerThrottle(config: Node, databaseId: string, value: number): Node;

    /** This function returns the rebalancer enable setting for the specified database from the configuration. **/
  databaseGetRebalancerEnable(config: Node, databaseId: string): Object;

    /** This function returns the rebalancer throttle setting for the specified database from the configuration. **/
  databaseGetRebalancerThrottle(config: Node, databaseId: string): number;

    /** This function sets the assignment policy for the specified database in the configuration. An assignment policy can be created by either admin:bucket-assignment-policy() or admin:statistical-assignment-policy() or admin:range-assignment-policy($partition-key, $lower-bound-included) or admin:legacy-assignment-policy(). **/
  databaseSetAssignmentPolicy(config: Node, databaseId: string, policy: Node): Node;

    /** This function returns the assignment policy for the specified database from the configuration. **/
  databaseGetAssignmentPolicy(config: Node, databaseId: string): Node;

    /** This function returns an element that represents the legacy assignment policy. **/
  legacyAssignmentPolicy(): Node;

    /** This function returns an element that represents the bucket assignment policy. **/
  bucketAssignmentPolicy(): Node;

    /** This function returns an element that represents the statistical assignment policy. **/
  statisticalAssignmentPolicy(): Node;

    /** This function returns fn:true() if the specificed forest is retired and fn:false() the specificed forest is not retired. **/
  databaseIsForestRetired(config: Node, databaseId: string, forestId: string): Object;

    /** This function returns fn:true() if the specificed forest is employed and fn:false() the specificed forest is not employed. **/
  databaseIsForestEmployed(config: Node, databaseId: string, forestId: string): Object;

    /** This function "retires" the specified forest in the configuration. **/
  databaseRetireForest(config: Node, databaseId: string, forestId: string): Node;

    /** This function "employs" the specified forest in the configuration. **/
  databaseEmployForest(config: Node, databaseId: string, forestId: string): Node;

    /** This function reorders the forests in the specified database. **/
  databaseReorderForests(config: Node, databaseId: string, forestIds: string): Node;

    /** This function returns the rebalancer enable setting for the specified forest from the configuration. **/
  forestGetRebalancerEnable(config: Node, forestId: string): Object;

    /** This function sets the reblanacer enable setting for the specified forest in the configuration. **/
  forestSetRebalancerEnable(config: Node, forestId: string, value: Object): Node;

    /** This function returns the list of all retired forests for the specified database from the configuration. **/
  databaseGetRetiredForests(config: Node, databaseId: string): string;

    /** This function returns an element that represents the range assignment policy. Use the admin:database-set-assignment-policy function to set the assignment policy. **/
  rangeAssignmentPolicy(partitionKey: Object, lowerBoundIncluded: Object): Node;

    /** This function returns the range policy partition key set for the database. **/
  databaseGetRangePolicyPartitionKey(rangePolicy: Node): Object;

    /** This function returns the lower bound of the range configured on the forest. **/
  forestGetRangePolicyLowerBound(config: Node, forestId: string): string;

    /** This function returns the upper bound of the range configured on the forest. **/
  forestGetRangePolicyUpperBound(config: Node, forestId: string): string;

    /** This function returns fn:false() if the specificed forest has neither the lower boundary nor the upper boundary set. Otherwise, it returns fn:true(). **/
  forestIsRangePolicyRangeSet(config: Node, forestId: string): string;

    /** This function sets the boundaries of the range on a forest. **/
  forestSetRangePolicyRange(config: Node, forestId: string, lowerBound: string, upperBound: string): Node;

    /** This function returns the internal security setting for the specified App Server. **/
  appserverGetInternalSecurity(config: Node, appserverId: string): Object;

    /** This function returns the external security setting for the specified App Server. **/
  appserverGetExternalSecurity(config: Node, appserverId: string): string;

    /** This function sets the internal security setting in the configuration for the specified App Server. **/
  appserverSetInternalSecurity(config: Node, appserverId: string, value: Object): Node;

    /** This function sets the external security setting in the configuration for the specified App Server. **/
  appserverSetExternalSecurity(config: Node, appserverId: string, value: string, value2: Object, value3: string): Node;

    /** This function returns the zone for the host with the specified ID. **/
  hostGetZone(config: Node, hostId: string): string;

    /** This function changes the zone value for the host to the newly specified value. **/
  hostSetZone(config: Node, hostId: string, value: string): Node;

    /** This function enables or disables usage metering for all hosts in the specified group. **/
  groupSetMeteringEnabled(config: Node, groupId: string, value: Object): Node;

    /** This function specifies the database to be used to store metering data. **/
  groupSetMetersDatabase(config: Node, groupId: string, value: string): Node;

    /** This function enables or disables performance metering for all hosts in the specified group. Performance metering will save data into the meters database which can be used to analyze your system performance over time. **/
  groupSetPerformanceMeteringEnabled(config: Node, groupId: string, value: Object): Node;

    /** This function sets the period (in number of seconds) between when performance data is gathered. setting it to a higher number stores less data but also gives less grainular data; setting it to a lower number stores more data but provides higher grainularity. **/
  groupSetPerformanceMeteringPeriod(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of days of raw performance data to retain. **/
  groupSetPerformanceMeteringRetainRaw(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of days to retain hourly performance data. **/
  groupSetPerformanceMeteringRetainHourly(config: Node, groupId: string, value: number): Node;

    /** This function sets the number of days of performance metering data to retain. **/
  groupSetPerformanceMeteringRetainDaily(config: Node, groupId: string, value: number): Node;

    /** This function removes a sub-database from a super-database. **/
  databaseDetachSubDatabase(config: Node, databaseId: string, subdatabaseId: string, foreignClusterId?: string): Node;

    /** This function adds a sub-database to a super-database. **/
  databaseAttachSubDatabase(config: Node, databaseId: string, subdatabaseId: string, foreignClusterId?: string): Node;

    /** This function returns a database-reference element representing the sub-databases of the specified super-database. **/
  databaseSubDatabases(config: Node, databaseId: string): Node;

    /** This function returns a database-reference element representing where the specified database serves as a sub-database. **/
  databaseSuperDatabases(config: Node, databaseId: string): Node;

    /** This function is used by mlcp and is not documented **/
  checkRangePolicyConfig(database: Node, assignments: Node): void;

    /** This function validates the specified field path. If the specified path is not valid, it throws an exception, otherwise it returns the empty sequence. **/
  databaseValidateFieldPath(config: Node, databaseId: string, fieldPath: Node): void;

    /** This function gets the availability state of the forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
  forestGetAvailability(config: Node, forestId: string): string;

    /** This function sets the availability state for a forest, for use in Tiered Storage. A forest can have an availability state of online or offline. **/
  forestSetAvailability(config: Node, forestId: string, value: string): Node;

    /** This function returns the value of the metering-enabled group setting. **/
  groupGetMeteringEnabled(config: Node, groupId: string): Object;

    /** This function returns the ID of the meters-database configured for the specified group. **/
  groupGetMetersDatabase(config: Node, groupId: string): string;

    /** This function returns the value of the performance-metering-enabled group setting. **/
  groupGetPerformanceMeteringEnabled(config: Node, groupId: string): Object;

    /** This function returns the value of the performance-metering-period group setting. **/
  groupGetPerformanceMeteringPeriod(config: Node, groupId: string): number;

    /** This function returns the value of the performance-metering-retain-raw group setting. **/
  groupGetPerformanceMeteringRetainRaw(config: Node, groupId: string): number;

    /** This function returns the value of the performance-metering-retain-hourly group setting. **/
  groupGetPerformanceMeteringRetainHourly(config: Node, groupId: string): number;

    /** This function returns the value of the performance-metering-retain-daily group setting. **/
  groupGetPerformanceMeteringRetainDaily(config: Node, groupId: string): number;

    /** This function sets "the retain until backup" setting in the configuration for the specified database. **/
  databaseSetRetainUntilBackup(config: Node, databaseId: string, value: Object): Node;

    /** This function returns the "retain until backup" setting from the configuration for the specified database. **/
  databaseGetRetainUntilBackup(config: Node, databaseId: string): Object;

    /** This function creates a db:path-reference specification. **/
  databasePathReference(scalarType: string, pathexpr: string, collation: string): Node;

    /** This function creates a db:field-reference specification. **/
  databaseFieldReference(scalarType: string, fieldname: string, collation: string): Node;

    /** This function greated a db:element-attribute-reference specification. **/
  databaseElementAttributeReference(scalarType: string, parentNamespace: string, parentLocalname: string, namespace: string, localname: string, collation: string): Node;

    /** This function greated a db:element-reference specification. **/
  databaseElementReference(scalarType: string, namespace: string, localname: string, collation: string): Node;

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
  appserverGetDefaultInferenceSize(config: Node, appserverId: string): number;

    /** This function specifies the default value for any request's inference size. **/
  appserverSetDefaultInferenceSize(config: Node, appserverId: string, value: number): Node;

    /** This function returns the default amount of memory (in megabytes) that can be used by sem:store for inference. **/
  taskserverGetDefaultInferenceSize(config: Node, groupId: string): number;

    /** This function specifies the default value for any request's inference size. **/
  taskserverSetDefaultInferenceSize(config: Node, groupId: string, value: number): Node;

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The App Server will return an error for queries that exceed this memory limit. **/
  appserverGetMaxInferenceSize(config: Node, appserverId: string): number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The App Server gives up on queries that exceed the memory limit, and returns an error. **/
  appserverSetMaxInferenceSize(config: Node, appserverId: string, value: number): Node;

    /** This function returns the maximum amount of memory in megabytes that can be used by sem:store for inference. The task server will return an error for queries that exceed this memory limit. **/
  taskserverGetMaxInferenceSize(config: Node, groupId: string): number;

    /** This function specifies the upper bound for any request's inference size. No request may set its inference size higher than this number. The inference size, in turn, is the maximum amount of memory in megabytes allowed for sem:store performing inference. The task server gives up on queries that exceed the memory limit, and returns an error. **/
  taskserverSetMaxInferenceSize(config: Node, groupId: string, value: number): Node;

    /** The ruleset element (db:default-ruleset) created to be used for inference on a database. One or more rulesets can be used for inference. Rulesets are stored in the Schemas database. By default, no ruleset is configured. **/
  databaseRuleset(location: string): Node;

    /** This function adds a ruleset (db:ruleset) to be used for inference on a database. One or more rulesets can be used for inference. By default, no ruleset is configured. **/
  databaseAddDefaultRuleset(config: Node, databaseId: string, rulesets: Node): Node;

    /** This function returns the default rulesets for a database. **/
  databaseGetDefaultRulesets(config: Node, databaseId: string): Node;

    /** This function deletes the default ruleset used for inference on a database. **/
  databaseDeleteDefaultRuleset(config: Node, databaseId: string, rulesets: Node): Node;

    /** This function returns the queue size for the number of fragments or frames in-flight during database replication. **/
  databaseForeignReplicaGetQueueSize(foreignReplica: Node): string;

    /** This function sets the queue size for the number of fragments or frames in-flight during database replication. **/
  databaseForeignReplicaSetQueueSize(foreignReplica: Node, value: number): Node;

    /** This function returns true or false to indicate whether a specific backup is enabled for a database. **/
  databaseBackupGetEnabled(config: Node, databaseId: string, backupId: string): Object;

    /** This function enables database backup for the specified database. **/
  databaseBackupSetEnabled(config: Node, databaseId: string, backupId: string, enabled: Object): Node;

    /** This function deletes a specific database backup, identified by the backup ID. **/
  databaseDeleteBackupById(config: Node, databaseId: string, backupId: string): Node;

    /** This function returns true or false to indicate whether backup is enabled for the specified forest. **/
  forestBackupGetEnabled(config: Node, forestId: string, backupId: string): Object;

    /** This function enables forest backup for the specified forest. **/
  forestBackupSetEnabled(config: Node, forestId: string, backupId: string, enabled: Object): Node;

    /** This function deletes the forest backup specified by the forest ID. **/
  forestDeleteBackupById(config: Node, forestId: string, backupId: string): Node;

    /** This function returns information about a scheduled task for a group based on the task ID and the group ID. **/
  groupGetScheduledTask(config: Node, groupId: string, taskId: string): Node;

    /** This function enables one or more scheduled tasks for a group based on the group ID and task ID. **/
  groupScheduledTaskSetEnabled(config: Node, groupId: string, taskId: string, enabled: Object): Node;

    /** This function returns true or false to indicate whether a scheduled task for a group is enabled. **/
  groupScheduledTaskGetEnabled(config: Node, groupId: string, taskId: string): Object;

    /** This function deletes the scheduled tasks for a group using the group ID. **/
  groupDeleteScheduledTaskById(config: Node, groupId: string, deleteIds: string): Node;

    /** This function returns the default format for protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete formatba sed on many factors, and will end up as JSON, HTML, or XML. **/
  appserverGetDefaultErrorFormat(config: Node, appserverId: string): string;

    /** This function sets the default format protocol errors for an App Server. The 'default' error format can be compatible, json, html, or xml. At runtime the actual error format is resolved to a concrete format based on many factors, and will end up as JSON, HTML, or XML. **/
  appserverSetDefaultErrorFormat(config: Node, appserverId: string, value: string): Node;

}
declare var admin:adminFunctions
