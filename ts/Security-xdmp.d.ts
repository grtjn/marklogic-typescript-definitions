// Type definitions for SecurityBuiltins
// Definitions: 

/**
The security built-in functions are XQuery functions to perform many
security-related tasks in MarkLogic Server.
**/

declare module SecurityBuiltins {

  interface xdmp {

    /** Tests whether a user can grant or revoke a set of roles. Raises an error if the session user can not. **/
    canGrantRoles(roles: String): void;

    /** Tests whether the current user has at least one of a given set of privileges. Raises an error if the user does not have any of the privileges. **/
    securityAssert(privileges: String, kind: String): void;

    /** Tests whether the current user has at least one of a given set of privileges. Returns true if they do, false otherwise. **/
    hasPrivilege(privileges: String, kind: String): Object;

    /** Returns all roles assigned to a user, including roles directly assigned to the user and roles inherited by other roles. **/
    userRoles(name: String, extSecId?: String, secDbFirst?: Object): String;

    /** Returns all roles assigned to a user, including roles directly assigned to the user and roles inherited by other roles. **/
    useridRoles(userId: String, extSecId?: String, secDbFirst?: Object): String;

    /** Returns the set of all roles inherited by a given role, including roles directly assigned to the role and roles inherited from other roles. **/
    roleRoles(name: String): String;

    /** Returns the set of all roles that have a given privilege. **/
    privilegeRoles(action: String, kind: String): String;

    /** Returns the set of all roles assigned to an amp, including roles directly assigned to the amp and roles inherited by other roles. **/
    ampRoles(namespaceUri: String, localname: String, documentUri: String, databaseId: String): String;

    /** Returns the collections to which a given document belongs. **/
    documentGetCollections(uri: String): Object;

    /** Returns the permissions to a given document. **/
    documentGetPermissions(uri: String, format?: String): Object;

    /** Returns the permissions any new document would get if the current user were to insert a document without specifying the default permissions. **/
    defaultPermissions(uri?: String, format?: String): Object;

    /** Returns the collections any new document would get if the current user were to insert a document without specifying the collections. **/
    defaultCollections(uri?: String): String;

    /** Returns the name of the current user. **/
    getCurrentUser(): String;

    /** Returns the ID of the current user. **/
    getCurrentUserid(): String;

    /** If this App Server is using application-level authentication, returns the ID of the user in the last successful call to xdmp:login. Otherwise, returns the ID of the user from the Authorization header of this App Server request. If you want to get the ID of the current user, use the xdmp:get-current-userid function. **/
    getRequestUser(): String;

    /** Returns all the current roles, both assigned and inherited by the current user and any received from amps. **/
    getCurrentRoles(): String;

    /** Returns a permission object corresponding to the named role and capability given. **/
    permission(role: String, capability: String, format?: String): Object;

    /** Returns the user ID for the specified user name. Unlike the security library module function sec:uid-for-name, this function can be evaluted against any database and does not need to be evaluated directly against the security database. It returns the user ID from the security database configured for the database in which the App Server evaluates against. **/
    user(user: String, extSecId?: String, secDbFirst?: Object): String;

    /** Returns the role ID for the specified role name. Unlike the security library module function sec:uid-for-name, this function can be evaluted against any database and does not need to be evaluated directly against the security database. It returns the role ID from the security database configured for the database in which the App Server evaluates against. **/
    role(role: String): String;

    /** Returns the privilege ID for the specified privilege name. Unlike the security library module function sec:uid-for-name, this function can be evaluted against any database and does not need to be evaluated directly against the security database. It returns the privilege ID from the security database configured for the database in which the App Server evaluates against. **/
    privilege(action: String, kind: String): String;

    /** Returns the amp ID for the specified amp. Unlike the security library module function sec:uid-for-name, this function can be evaluted against any database and does not need to be evaluated directly against the security database. It returns the amp ID from the security database configured for the database in which the App Server evaluates against. **/
    amp(namespace: String, localname: String, moduleUri: String, database: String): String;

    /** Returns external security id and user name for an external user. **/
    userExternalSecurity(userId: String): Object;

    /** Returns the external security ID for the specified external security name. Unlike the security library module function sec:uid-for-name, this function can be evaluted against any database and does not need to be evaluated directly against the security database. It returns the external security ID from the security database configured for the database in which the App Server evaluates against. **/
    externalSecurity(externalSecurity: String): String;


  }
}
