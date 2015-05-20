// Type definitions for Extensions
// Definitions: 

/****/

declare module Extensions {

  interface xdmp {

    /** Executes an ad hoc SQL query. This function is for testing your SQL views when data modeling; it is not intended to be used directly in applications. **/
    sql(sql: String, options?: String): String;


  }
}
