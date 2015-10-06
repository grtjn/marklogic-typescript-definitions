// Type definitions for PeriodBuiltins
// Definitions: 

/**
The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
**/

interface ctsFunctions {

    /** Compares two periods using the specified comparision operator. Returns true if the two periods meet the operator conditions or false if they do not meet the conditions. **/
  periodCompare(period1: cts.Period, operator: string, period2: cts.Period): boolean;

}
declare var cts:ctsFunctions
interface temporalFunctions {

    /** This function returns the period (as a dateTime pair) for the named axis in the document identified by its root node in the named collection. An TEMPORAL-NOAXISINFO exception is thrown if no information is found in root for the axis. **/
  documentPeriod(temporalCollection: string, axis: string, root: MLNode<any>): Date;

    /** This function returns the Last Stable Query Time (LSQT) for the collection at current moment. Should read lock if it is in update. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqt(temporalCollection: string): Date;

    /** This function specifies whether the named temporal collection has LSQT (Last Stable Query Time) enabled (true) or disabled (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getUseLsqt(temporalCollection: string): boolean;

    /** This function enables or disables the use of LSQT (Last Stable Query Time) on the named collection. When enabled (true), a document is created in the database to hold the LSQT. This document is identified by the collection name with an .lsqt suffix. You must have LSQT enabled on the temporal collection in order to use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  setUseLsqt(temporalCollection: string, on: boolean): void;

    /** This function enables Last Stable Query Time (LSQT) on the named collection and advances the LSQT for the collection to the maximum system start time. When LSQT is enabled on the temporal collection, you can use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  advanceLsqt(temporalCollection: string): Date;

    /** This function returns whether Last Stable Query Time (LSQT) management is automatically managed (true) or not automatically managed (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomation(temporalCollection: string): boolean;

    /** This function returns how often Last Stable Query Time (LSQT) is automatically advanced, in milliseconds. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomationPeriod(temporalCollection: string): number;

    /** When the LSQT is advanced automatically, this function returns how far behind (in milliseconds) the Last Stable Query Time (LSQT) is from latest system time. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomationLag(temporalCollection: string): number;

    /** This function sets whether Last Stable Query Time (LSQT) management is automatic. And, if enabled, how often LSQT is to be advanced. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  setLsqtAutomation(temporalCollection: string, on: boolean, period?: number, lag?: number): void;

}
declare var temporal:temporalFunctions
