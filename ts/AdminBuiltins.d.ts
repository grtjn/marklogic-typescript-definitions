// Type definitions for AdminBuiltins
// Definitions: 

/****/

declare module AdminBuiltins {

  interface xdmp {

    /** Backs up forest data files. **/
    forestBackup(forestID: String, pathname: String): void;

    /** Restores forest data files. Restarts the forest to complete the restoration. **/
    forestRestore(forestID: String, pathname: String): void;

    /** Clears forest data files. **/
    forestClear(forestIDs: String): void;

    /** Restarts a forest. If multiple forest IDs are specified, the restarts occur in parallel. **/
    forestRestart(forestIDs: String): void;

    /** Rolls forests back to a previous point in time, marking any fragment newer than the specified timestamp as deleted. Also, any fragments that were created before the specified timestamp and deleted after will be rolled back (un-deleted). **/
    forestRollback(forestIDs: String, timestamp: String): void;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
    databaseBackupValidate(forestIDs: String, pathname: String, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: String, lagLimit?: String): Object;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
    databaseIncrementalBackupValidate(forestIDs: String, pathname: String, includeReplicas?: Object, incrementalDir?: String, journalArchiving?: Object, journalArchivePath?: String, lagLimit?: String): Object;

    /** Starts an asynchronous backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
    databaseBackup(forestIDs: String, pathname: String, journalArchiving?: Object, journalArchivePath?: String, lagLimit?: String): String;

    /** Starts an asynchronous incremental backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
    databaseIncrementalBackup(forestIDs: String, pathname: String, incrementalDir?: String, journalArchiving?: Object, journalArchivePath?: String, lagLimit?: String): String;

    /** Starts journal archiving to the specified list of forests. **/
    startJournalArchiving(forestIDs: String, journalArchivePath: String, lagLimit?: String): void;

    /** Stops journal archiving to the specified list of forests. **/
    stopJournalArchiving(forestIDs: String): void;

    /** Checks the status of the outstanding backup job with the specified job ID. Returns a database backup status as a JSON node defined in the job-status.xsd schema. **/
    databaseBackupStatus(jobid: String, hostid?: String): Object;

    /** Checks the status of the specified forests for any outstanding backup jobs. Returns the specified forests portion a database backup status as a JSON node defined in the job-status.xsd schema. **/
    forestBackupStatus(forestid: String): Object;

    /** Cancels an outstanding backup job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. The xdmp:database-backup-cancel function must be run on the host in which the backup was initiated. **/
    databaseBackupCancel(jobid: String): Object;

    /** Validates that the specified list of forests can be restored from the backup data directory. Returns a database restore set node. **/
    databaseRestoreValidate(forestIDs: String, pathname: String, restoreToTime?: Date, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: String, incrementalBackup?: Object, incrementalBackupPath?: String): Object;

    /** Starts an asynchronous restore of the specified list of forests from the backup data directory. Returns a job ID that uniquely identifies the restore task. **/
    databaseRestore(forestIDs: String, pathname: String, restoreToTime?: Date, journalArchiving?: Object, journalArchivePath?: String, incrementalBackup?: Object, incrementalBackupPath?: String): String;

    /** Checks the status of the outstanding restore job with the specified job ID. Returns a database restore status node JSON node. **/
    databaseRestoreStatus(jobid: String): Object;

    /** Cancels an outstanding restore job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. **/
    databaseRestoreCancel(jobid: String): Object;

    /** Shutdown servers on hosts. **/
    shutdown(hostIDs: String, reason: String): void;

    /** Restart servers on hosts. **/
    restart(hostIDs: String, reason: String): void;

    /** Performs a directory listing of the given file pathname. **/
    filesystemDirectory(pathname: String): Object;

    /** Creates the directory specified by pathname. Returns the empty sequence upon success. **/
    filesystemDirectoryCreate(pathname: String, options?: Object): void;

    /** Reads a file from the filesystem. The file at the specified path must be UTF-8 encoded. This function is typically used for text files; for binary files, consider using the xdmp:external-binary function. **/
    filesystemFile(pathname: String): String;

    /** Returns the canonicalized file path of the input path. The file at the specified path must be UTF-8 encoded. **/
    filesystemFilepath(pathname: String): String;

    /** Reads the length of a file from the filesystem. It returns empty sequence if the object named by the pathname does not exist or is not a file. **/
    filesystemFileLength(pathname: String): String;

    /** Return true if a file exists on a host; otherwise false. **/
    filesystemFileExists(pathname: String, host?: String): Object;

    /** Returns true if a value is castable. This is similar to the "castable as" XQuery predicate, except that the type is determined at runtime. **/
    castableAs(namespaceUri: String, localName: String, item: String): Object;

    /** Cancel the merge with the specified merge ID on a forest with the specified forest ID. **/
    mergeCancel(forestID: String, mergeID: String): void;

    /** Cancel the request with the given host, server, and request IDs. **/
    requestCancel(hostID: String, serverID: String, requestID: String): void;

    /** Purge old backups from a directory. **/
    databaseBackupPurge(dir: String, keepNumBackups: Number, incrementalDir?: String): void;

    /** Purge journal archive before last incremental backup from a directory. **/
    databaseJournalArchivePurge(dir: String, incrementalDir?: String, journalArchivePath?: String): void;

    /** Returns a sequence of the IDs of all orphaned large binaries in a given forest. **/
    getOrphanedBinaries(id: String): String;

    /** Remove an orphaned large binary **/
    removeOrphanedBinary(forestID: String, binaryID: String): void;


  }
}
