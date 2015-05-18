// Type definitions for AdminBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/AdminBuiltins.xml

/****/

declare module AdminBuiltins {

  interface xdmp {

    /** Backs up forest data files. **/
    forestBackup(forestID: number, pathname: string): void;

    /** Restores forest data files. Restarts the forest to complete the restoration. **/
    forestRestore(forestID: number, pathname: string): void;

    /** Clears forest data files. **/
    forestClear(forestIDs: number): void;

    /** Restarts a forest. If multiple forest IDs are specified, the restarts occur in parallel. **/
    forestRestart(forestIDs: number): void;

    /** Rolls forests back to a previous point in time, marking any fragment newer than the specified timestamp as deleted. Also, any fragments that were created before the specified timestamp and deleted after will be rolled back (un-deleted). **/
    forestRollback(forestIDs: number, timestamp: number): void;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
    databaseBackupValidate(forestIDs: number, pathname: string, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): Object;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
    databaseIncrementalBackupValidate(forestIDs: number, pathname: string, includeReplicas?: boolean, incrementalDir?: string, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): Object;

    /** Starts an asynchronous backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
    databaseBackup(forestIDs: number, pathname: string, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): number;

    /** Starts an asynchronous incremental backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
    databaseIncrementalBackup(forestIDs: number, pathname: string, incrementalDir?: string, journalArchiving?: boolean, journalArchivePath?: string, lagLimit?: number): number;

    /** Starts journal archiving to the specified list of forests. **/
    startJournalArchiving(forestIDs: number, journalArchivePath: string, lagLimit?: number): void;

    /** Stops journal archiving to the specified list of forests. **/
    stopJournalArchiving(forestIDs: number): void;

    /** Checks the status of the outstanding backup job with the specified job ID. Returns a database backup status as a JSON node defined in the job-status.xsd schema. **/
    databaseBackupStatus(jobid: number, hostid?: number): ObjectNode;

    /** Checks the status of the specified forests for any outstanding backup jobs. Returns the specified forests portion a database backup status as a JSON node defined in the job-status.xsd schema. **/
    forestBackupStatus(forestid: number): ObjectNode;

    /** Cancels an outstanding backup job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. The xdmp:database-backup-cancel function must be run on the host in which the backup was initiated. **/
    databaseBackupCancel(jobid: number): boolean;

    /** Validates that the specified list of forests can be restored from the backup data directory. Returns a database restore set node. **/
    databaseRestoreValidate(forestIDs: number, pathname: string, restoreToTime?: dateTime, includeReplicas?: boolean, journalArchiving?: boolean, journalArchivePath?: string, incrementalBackup?: boolean, incrementalBackupPath?: string): Object;

    /** Starts an asynchronous restore of the specified list of forests from the backup data directory. Returns a job ID that uniquely identifies the restore task. **/
    databaseRestore(forestIDs: number, pathname: string, restoreToTime?: dateTime, journalArchiving?: boolean, journalArchivePath?: string, incrementalBackup?: boolean, incrementalBackupPath?: string): number;

    /** Checks the status of the outstanding restore job with the specified job ID. Returns a database restore status node JSON node. **/
    databaseRestoreStatus(jobid: number): ArrayNode;

    /** Cancels an outstanding restore job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. **/
    databaseRestoreCancel(jobid: number): boolean;

    /** Shutdown servers on hosts. **/
    shutdown(hostIDs: number, reason: string): void;

    /** Restart servers on hosts. **/
    restart(hostIDs: number, reason: string): void;

    /** Performs a directory listing of the given file pathname. **/
    filesystemDirectory(pathname: string): Object;

    /** Creates the directory specified by pathname. Returns the empty sequence upon success. **/
    filesystemDirectoryCreate(pathname: string, options?: map, options?: Object): void;

    /** Reads a file from the filesystem. The file at the specified path must be UTF-8 encoded. This function is typically used for text files; for binary files, consider using the xdmp:external-binary function. **/
    filesystemFile(pathname: string): string;

    /** Returns the canonicalized file path of the input path. The file at the specified path must be UTF-8 encoded. **/
    filesystemFilepath(pathname: string): string;

    /** Reads the length of a file from the filesystem. It returns empty sequence if the object named by the pathname does not exist or is not a file. **/
    filesystemFileLength(pathname: string): number;

    /** Return true if a file exists on a host; otherwise false. **/
    filesystemFileExists(pathname: string, host?: number): boolean;

    /** Returns true if a value is castable. This is similar to the "castable as" XQuery predicate, except that the type is determined at runtime. **/
    castableAs(namespaceUri: string, localName: string, item: item()): boolean;

    /** Cancel the merge with the specified merge ID on a forest with the specified forest ID. **/
    mergeCancel(forestID: number, mergeID: number): void;

    /** Cancel the request with the given host, server, and request IDs. **/
    requestCancel(hostID: number, serverID: number, requestID: number): void;

    /** Purge old backups from a directory. **/
    databaseBackupPurge(dir: string, keepNumBackups: number, incrementalDir?: string): void;

    /** Purge journal archive before last incremental backup from a directory. **/
    databaseJournalArchivePurge(dir: string, incrementalDir?: string, journalArchivePath?: string): void;

    /** Returns a sequence of the IDs of all orphaned large binaries in a given forest. **/
    getOrphanedBinaries(id: number): number;

    /** Remove an orphaned large binary **/
    removeOrphanedBinary(forestID: number, binaryID: number): void;


  }
}
