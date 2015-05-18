// Type definitions for PeriodBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/PeriodBuiltins.xml

/**
The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
**/

declare module PeriodBuiltins {

  interface cts {

    /** Compares two periods using the specified comparision operator. Returns true if the two periods meet the operator conditions or false if they do not meet the conditions. **/
    periodCompare(period-1: cts:period, operator: xs:string, period-2: cts:period): xs:boolean;

    /** This function returns the period (as a dateTime pair) for the named axis in the document identified by its root node in the named collection. An TEMPORAL-NOAXISINFO exception is thrown if no information is found in root for the axis. **/
    documentPeriod(temporalCollection: xs:string, axis: xs:string, root: node()): xs:dateTime;

    /** This function returns the Last Stable Query Time (LSQT) for the collection at current moment. Should read lock if it is in update. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    getLsqt(temporalCollection: xs:string): xs:dateTime;

    /** This function specifies whether the named temporal collection has LSQT (Last Stable Query Time) enabled (true) or disabled (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    getUseLsqt(temporalCollection: xs:string): xs:boolean;

    /** This function enables or disables the use of LSQT (Last Stable Query Time) on the named collection. When enabled (true), a document is created in the database to hold the LSQT. This document is identified by the collection name with an .lsqt suffix. You must have LSQT enabled on the temporal collection in order to use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    setUseLsqt(temporalCollection: xs:string, on: xs:boolean): void;

    /** This function enables Last Stable Query Time (LSQT) on the named collection and advances the LSQT for the collection to the maximum system start time. When LSQT is enabled on the temporal collection, you can use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    advanceLsqt(temporalCollection: xs:string): xs:dateTime;

    /** This function returns whether Last Stable Query Time (LSQT) management is automatically managed (true) or not automatically managed (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    getLsqtAutomation(temporalCollection: xs:string): xs:boolean;

    /** This function returns how often Last Stable Query Time (LSQT) is automatically advanced, in milliseconds. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    getLsqtAutomationPeriod(temporalCollection: xs:string): xs:long;

    /** When the LSQT is advanced automatically, this function returns how far behind (in milliseconds) the Last Stable Query Time (LSQT) is from latest system time. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    getLsqtAutomationLag(temporalCollection: xs:string): xs:long;

    /** This function sets whether Last Stable Query Time (LSQT) management is automatic. And, if enabled, how often LSQT is to be advanced. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
    setLsqtAutomation(temporalCollection: xs:string, on: xs:boolean, period?: xs:unsignedInt, lag?: xs:unsignedInt): void;


  }
}
