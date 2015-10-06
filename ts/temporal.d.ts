// Type definitions for TemporalModule
// Definitions: 

/**
    
    This module contains the functions used to insert, delete and manage temporal documents.
    
     To understand the temporal functions, you need to understand the meaning of the following terms:
       
    Instant: an instant of time, such as "now", "12/31/2012, 01:00:00 am".Period: an anchored duration of time (e.g. December 01, 1999 through December 31, 2000, the fall semester)Axis: a named pair of range indexes that is the container for periods.Valid time: when a fact was true in modeled reality.System time: when a fact was stored in the database.User-defined time: a time value that user provides in replacement of system start time.      LSQT (Last Stable Query Time): a document with a system start time before this point 
      can be queried and a document with a system start time after this point can be updated 
      and ingested. 
        
    
    The Tiered Storage function module is installed as the following file:
    install_dir/Modules/MarkLogic/temporal.xqy
    where install_dir is the directory in which 
	    MarkLogic Server is installed.
    To use the temporal.xqy module in your own XQuery modules, 
     include the following line in your XQuery prolog:
    
import module namespace temporal="http://marklogic.com/xdmp/temporal" 
          at "/MarkLogic/temporal.xqy";
  **/

interface temporalFunctions {

    /** This function constructs an axis definition based on the existing range indexes that can be added to a collection in subsequent API calls. The axis definition is stored in the schema database. For details on how to create an axis, see Create System and Valid Axes in the Temporal Developer's Guide A TEMPORAL-NONDATETIME exception is thrown if range index scalar type is not dateTime. A TEMPORAL-DUPAXIS exception is thrown if the axis already exists. **/
  axisCreate(axisName: string, startRangeIndex: cts.Reference, endRangeIndex: cts.Reference): string;

    /** This function removes an axis definition from the schema database. A TEMPORAL-AXISINUSE exception is thrown if the named axis is referred to by a collection. **/
  axisRemove(axisName: string): void;

    /** This function returns all the axis names defined in the schema databases. **/
  axes(): string;

    /** This function constructs a named and protected temporal collection in the schema database with the specified system and valid axes. This function assumes that the system and valid axes already exist. The temporal collection is stored in the Security database. A TEMPORAL-DUPCOLLECTION exception is thrown if the collection already exists. For details on how to create a collection, see Create a Temporal Collection in the Temporal Developer's Guide **/
  collectionCreate(collectionName: string, systemAxis: string, validAxis: string, options?: string): string;

    /** This function removes the named temporal collection from the Security database. **/
  collectionRemove(collectionName: string): void;

    /** This function returns the name of either the system or valid axis in the named temporal collection. A TEMPORAL-COLLECTIONNOTFOUND exception is thrown if the collection does not exist. A TEMPORAL-INVALIDAXIS if axis is not "system" or "valid." **/
  collectionGetAxis(temporalCollection: string, axis: string): string;

    /** This function returns all of the temporal collection names in the schema database. **/
  collections(): string;

    /** This function returns the range index used to define the start of the period by the named axis. A TEMPORAL-AXISNOTFOUND exception is thrown if the axis does not exist. **/
  axisGetStart(axisName: string): cts.Reference;

    /** This function returns the range index used to define the end of the period by the named axis. A TEMPORAL-AXISNOTFOUND exception is thrown if the axis does not exist. **/
  axisGetEnd(axisName: string): cts.Reference;

    /** This function returns the options set on the temporal collection. **/
  collectionGetOptions(temporalCollection: string): string;

    /** This function sets the options on the temporal collection. **/
  collectionSetOptions(temporalCollection: string, options: string): void;

}
declare var temporal:temporalFunctions
