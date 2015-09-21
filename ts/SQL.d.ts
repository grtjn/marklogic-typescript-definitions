// Type definitions for Extensions
// Definitions: 

/****/

interface xdmpFunctions {

    /** Executes an ad hoc SQL query. This function is for testing your SQL views when data modeling; it is not intended to be used directly in applications. **/
  sql(sql: string, options?: string): string;

}
declare var xdmp:xdmpFunctions
