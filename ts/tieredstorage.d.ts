// Type definitions for TieredStorageModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/tieredstorage.xml

/**
    This module provides functions for managing forests and partitions
     in storage tiers and for managing super-databases and sub-databases.
 For details, see Tiered Storage in the Administrator's Guide.
    
    The Tiered Storage function module is installed as the following file:
    install_dir/Modules/MarkLogic/tieredstorage.xqy
    where install_dir is the directory in which 
	    MarkLogic Server is installed.
    To use the tieredstorage.xqy module in your own XQuery modules, 
     include the following line in your XQuery prolog:
    
import module namespace ts="http://marklogic.com/xdmp/tieredstorage" 
          at "/MarkLogic/tieredstorage.xqy";
  **/

declare module TieredStorageModule {

  interface tieredstorage {

    /** This function moves data in a forest to new data directories and optionally sets new host for the forest. If no data directory is specified, the default data directory will be used. For details, see Migrating Forests and Partitions in the Administrator's Guide. **/
    forestMigrate(forestIds: xs:unsignedLong, newHostId?: xs:unsignedLong, newDataDirectory?: xs:string, newLargeDataDirectory?: xs:string, newFastDataDirectory?: xs:string, options?: xs:string): void;

    /** This function combines data in multiple forests into one new forest. If no data directory is specified, the default data directory is used. The source forests are required to be either all in "open" or "open-replica" state or all in "sync replicating" state. If a forest's state changes during the combine operation, an error may be thrown. If all source forests are in "open" or "open replica" state and are all attached to a database, the combined forest will be attached to the database and the source forests (or their masters) detached to the database. For details, see Combining Forests in the Administrator's Guide. **/
    forestCombine(forestIds: xs:unsignedLong, forestName: xs:string, hostId: xs:unsignedLong, dataDirectory?: xs:string, largeDataDirectory?: xs:string, fastDataDirectory?: xs:string, options?: xs:string): void;

    /** This function creates forests on the specified hosts and forms a partition with the specified partition range. All of the forests will share the partition name as their prefix, as well as the range policy settings. The names of the created forests will either be in the form of partition- name-[fixed-digit-number] or partition-name-[fixed-digit-number]-[M,Rn], if local disk failover is configured. For details, see Creating Partitions in the Administrator's Guide. **/
    partitionCreate(databaseId: xs:unsignedLong, partitionName: xs:string, lower: xs:anyAtomicType, upper: xs:anyAtomicType, forestsPerHost: xs:unsignedInt, hostIds: xs:unsignedLong, dataDirectory?: xs:string, largeDataDirectory?: xs:string, fastDataDirectory?: xs:string, options?: xs:string): void;

    /** This function returns a sequence of ids for the forests in the named partition. If the $include-replicas parameter is not specified or is set to false, replica forests are not included. For details, see Tiered Storage in the Administrator's Guide. **/
    partitionForests(databaseId: xs:unsignedLong, partitionName: xs:string, includeReplicas?: xs:boolean): xs:unsignedLong;

    /** This function returns the names of the partitions in the named database. For details, see Tiered Storage in the Administrator's Guide. **/
    databasePartitions(databaseId: xs:unsignedLong): xs:string;

    /** This function sets update-allowed state for the forests in the specified partition. For details, see Tiered Storage in the Administrator's Guide. **/
    partitionSetUpdatesAllowed(databaseId: xs:unsignedLong, partitionName: xs:string, value: xs:string): void;

    /** This function sets the availability of the partition to either online or offline. An online partition is fully accessable through queries when its forests are attached to a database. The forests in an offline partition, as well as any replica forests, cannot be accessed. **/
    partitionSetAvailability(databaseId: xs:unsignedLong, partitionName: xs:string, value: xs:string): void;

    /** This function detaches forests in a partition from one database and attaches them to another. For details, see Transferring Partitions between Databases in the Administrator's Guide. **/
    partitionTransfer(partitionDbId: xs:unsignedLong, partitionName: xs:string, dstDbId: xs:unsignedLong): void;

    /** This function migrates all forests in a partition to the specified data directory and hosts. For details, see Migrating Forests and Partitions in the Administrator's Guide. **/
    partitionMigrate(databaseId: xs:unsignedLong, partitionName: xs:string, hostIds: xs:unsignedLong, dataDirectory?: xs:string, largeDataDirectory?: xs:string, fastDataDirectory?: xs:string, options?: xs:string): void;

    /** This function either creates or combines forests in a partition. For details, see Resizing Partitions in the Administrator's Guide. **/
    partitionResize(databaseId: xs:unsignedLong, partitionName: xs:string, forestsPerHost: xs:unsignedInt, hostIds: xs:unsignedLong, dataDirectory?: xs:string, largeDataDirectory?: xs:string, fastDataDirectory?: xs:string, options?: xs:string): void;

    /** This function deletes all forests in the specified partition. For details, see Deleting Partitions in the Administrator's Guide. **/
    partitionDelete(databaseId: xs:unsignedLong, partitionName: xs:string, deleteData?: xs:boolean): void;

    /** This function creates a database with the name $database-name and make the created database the super database of the database designated by $database-id. The newly created database inherits the configuration of the original database. For details, see Creating Super-databases in the Administrator's Guide. **/
    databaseCreateSuperDatabase(databaseId: xs:unsignedLong, databaseName: xs:string): void;

    /** This function creates a database with the name $database-name and make the created database the sub database of the database designated by $database-id. The newly created database inherits the configuration of the original database. For details, see Creating Sub-databases in the Administrator's Guide. **/
    databaseCreateSubDatabase(dbid: xs:unsignedLong, databaseName: xs:string, kind?: xs:string): void;

    /** This function disassociates the super database designated by $delete-dbid with the sub-database designated by $database-id and deletes the super database. An error is thrown if the database designated by $delete-dbid is not a super database of the one designated by $database-id or contains other sub-databases than the one designated by $database-id. For details, see Tiered Storage in the Administrator's Guide. **/
    databaseDeleteSuperDatabase(databaseId: xs:unsignedLong, deleteDbid: xs:unsignedLong): void;

    /** This function disassociates the sub database designated by $delete-dbid with the super-database designated by $database-id and deletes the sub database. An error is thrown if the database designated by $delete-dbid is not a sub database of the one designated by $database-id or contains other super-databases than the one designated by $database-id. For details, see Tiered Storage in the Administrator's Guide. **/
    databaseDeleteSubDatabase(databaseId: xs:unsignedLong, deleteDbid: xs:unsignedLong): void;


  }
}
