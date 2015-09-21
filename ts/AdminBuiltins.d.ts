// Type definitions for AdminBuiltins
// Definitions: 

/****/

interface xdmpFunctions {

    /** Backs up forest data files. **/
  forestBackup(forestID: string, pathname: string): void;

    /** Restores forest data files. Restarts the forest to complete the restoration. **/
  forestRestore(forestID: string, pathname: string): void;

    /** Clears forest data files. **/
  forestClear(forestIDs: string): void;

    /** Restarts a forest. If multiple forest IDs are specified, the restarts occur in parallel. **/
  forestRestart(forestIDs: string): void;

    /** Rolls forests back to a previous point in time, marking any fragment newer than the specified timestamp as deleted. Also, any fragments that were created before the specified timestamp and deleted after will be rolled back (un-deleted). **/
  forestRollback(forestIDs: string, timestamp: string): void;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
  databaseBackupValidate(forestIDs: string, pathname: string, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Object;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
  databaseIncrementalBackupValidate(forestIDs: string, pathname: string, includeReplicas?: Object, incrementalDir?: string, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): Object;

    /** Starts an asynchronous backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
  databaseBackup(forestIDs: string, pathname: string, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): string;

    /** Starts an asynchronous incremental backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
  databaseIncrementalBackup(forestIDs: string, pathname: string, incrementalDir?: string, journalArchiving?: Object, journalArchivePath?: string, lagLimit?: string): string;

    /** Starts journal archiving to the specified list of forests. **/
  startJournalArchiving(forestIDs: string, journalArchivePath: string, lagLimit?: string): void;

    /** Stops journal archiving to the specified list of forests. **/
  stopJournalArchiving(forestIDs: string): void;

    /** Checks the status of the outstanding backup job with the specified job ID. Returns a database backup status as a JSON node defined in the job-status.xsd schema. **/
  databaseBackupStatus(jobid: string, hostid?: string): Object;

    /** Checks the status of the specified forests for any outstanding backup jobs. Returns the specified forests portion a database backup status as a JSON node defined in the job-status.xsd schema. **/
  forestBackupStatus(forestid: string): Object;

    /** Cancels an outstanding backup job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. The xdmp:database-backup-cancel function must be run on the host in which the backup was initiated. **/
  databaseBackupCancel(jobid: string): Object;

    /** Validates that the specified list of forests can be restored from the backup data directory. Returns a database restore set node. **/
  databaseRestoreValidate(forestIDs: string, pathname: string, restoreToTime?: Date, includeReplicas?: Object, journalArchiving?: Object, journalArchivePath?: string, incrementalBackup?: Object, incrementalBackupPath?: string): Object;

    /** Starts an asynchronous restore of the specified list of forests from the backup data directory. Returns a job ID that uniquely identifies the restore task. **/
  databaseRestore(forestIDs: string, pathname: string, restoreToTime?: Date, journalArchiving?: Object, journalArchivePath?: string, incrementalBackup?: Object, incrementalBackupPath?: string): string;

    /** Checks the status of the outstanding restore job with the specified job ID. Returns a database restore status node JSON node. **/
  databaseRestoreStatus(jobid: string): Object;

    /** Cancels an outstanding restore job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. **/
  databaseRestoreCancel(jobid: string): Object;

    /** Shutdown servers on hosts. **/
  shutdown(hostIDs: string, reason: string): void;

    /** Restart servers on hosts. **/
  restart(hostIDs: string, reason: string): void;

    /** Performs a directory listing of the given file pathname. **/
  filesystemDirectory(pathname: string): Object;

    /** Creates the directory specified by pathname. Returns the empty sequence upon success. **/
  filesystemDirectoryCreate(pathname: string, options?: Object): void;

    /** Reads a file from the filesystem. The file at the specified path must be UTF-8 encoded. This function is typically used for text files; for binary files, consider using the xdmp:external-binary function. **/
  filesystemFile(pathname: string): string;

    /** Returns the canonicalized file path of the input path. The file at the specified path must be UTF-8 encoded. **/
  filesystemFilepath(pathname: string): string;

    /** Reads the length of a file from the filesystem. It returns empty sequence if the object named by the pathname does not exist or is not a file. **/
  filesystemFileLength(pathname: string): string;

    /** Return true if a file exists on a host; otherwise false. **/
  filesystemFileExists(pathname: string, host?: string): Object;

    /** Returns true if a value is castable. This is similar to the "castable as" XQuery predicate, except that the type is determined at runtime. **/
  castableAs(namespaceUri: string, localName: string, item: string): Object;

    /** Cancel the merge with the specified merge ID on a forest with the specified forest ID. **/
  mergeCancel(forestID: string, mergeID: string): void;

    /** Cancel the request with the given host, server, and request IDs. **/
  requestCancel(hostID: string, serverID: string, requestID: string): void;

    /** Purge old backups from a directory. **/
  databaseBackupPurge(dir: string, keepNumBackups: number, incrementalDir?: string): void;

    /** Purge journal archive before last incremental backup from a directory. **/
  databaseJournalArchivePurge(dir: string, incrementalDir?: string, journalArchivePath?: string): void;

    /** Returns a sequence of the IDs of all orphaned large binaries in a given forest. **/
  getOrphanedBinaries(id: string): string;

    /** Remove an orphaned large binary **/
  removeOrphanedBinary(forestID: string, binaryID: string): void;

}
declare var xdmp:xdmpFunctions
