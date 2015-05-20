// Type definitions for LastLogin
// Definitions: 

/****/

declare module LastLogin {

  interface xdmp {

    /** Returns the last-login node for the specified user ID. If no user ID is specified, then the current user is assumed. If no last-login database is specified in the App Server configuration, then the empty sequence is returned. **/
    userLastLogin(user?: String): Object;


  }
}
