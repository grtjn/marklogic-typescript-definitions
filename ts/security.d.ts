// Type definitions for SecurityModule
// Definitions: 

/**
    The security function module is installed as the following file:
    install_dir/Modules/MarkLogic/security.xqy 
    where install_dir is the directory in which 
    MarkLogic Server is installed.
     To use the security.xqy module in your own XQuery modules, include the 
    following line in your XQuery prolog:
    import module "http://marklogic.com/xdmp/security" at 
             "/MarkLogic/security.xqy"
    The library uses the sec: namespace, predefined in the 
    server.
    NOTE:  When using these functions to administer 
    security for an application, be sure to execute them against the security 
    database configured for your application's database.  Function calls 
    in this library can only be executed against a a security 
    database (for example, Security); the database named
    Security is automatically configured when MarkLogic Server 
    is installed, and it is the default security database. To execute  
    these functions against the security database, 
    you can specify the database option in xdmp:eval 
    or xdmp:invoke, or you can run it in an App Server that 
    has your security database configured as its database.  
  **/

declare module SecurityModule {

  interface sec {

    /** Creates a new user in the system database for the context database. Returns the user ID of the created user. **/
    createUser(userName: String, description: String, password: String, roleNames: String, permissions: Permission), collections: String, externalNames?: String): String;

    /** Creates a new user in the system database for the context database. Returns the user ID of the created user. Also creates a role by the same name and assigns the newly-created user to the newly-created role. Parameters that define roles, permissions, and collections are only applied to the new user. **/
    createUserWithRole(userName: String, description: String, password: String, roleNames: String, permissions: Permission), collections: String, externalNames: String): String;

    /** Changes the name of the user from $user-name to $new-user-name. **/
    userSetName(userName: String, newUserName: String, password: String): void;

    /** Changes the password for the user identified by $user-name to $password. **/
    userSetPassword(userName: String, password: String): void;

    /** Changes the description of the user identified by $user-name to $description. **/
    userSetDescription(userName: String, description: String): void;

    /** Changes the description of the role identified by $role-name to $description. **/
    roleSetDescription(roleName: String, description: String): void;

    /** Returns the description for the specified role. **/
    roleGetDescription(roleName: String): String ;

    /** Returns a sequence of unique sec:role-id elements that corresponds to the sequence of role names $role-names. Duplicate names return a single ID. If $role-names is omitted, returns all of the sec:role-id elements in the database. If a role name in $role-names does not correspond to an existing role, an error is returned. **/
    getRoleIds(roleNames?: String): Role-id);

    /** Returns sequence of unique sec:role-name's that corresponds to the sequence of role IDs $role-ids. Duplicate IDs return a single name. **/
    getRoleNames(roleIds: String): Role-name)* ;

    /** Assigns the user with name $user-name to have the roles identified by $role-names. Removes previously assigned roles. If a user with name equal to $user-name is not found, an error is returned. If a role name in $role-names does not correspond to an existing role, an error is returned. If $role-names is the empty sequence, all existing roles for the user are removed. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles or one of the removed roles is not a subset of the current user's roles, then an error is returned. **/
    userSetRoles(userName: String, roleNames: String): void;

    /** Adds the roles ($role-names) to the list of roles granted to the user ($user-name). If a user with name equal to $user-name is not found, an error is returned. If one of the $role-names does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and $role is not a subset of the current user's roles, then an error is returned. **/
    userAddRoles(userName: String, roleNames: String): void;

    /** Removes the roles ($role-names) from the list of roles granted to the user ($user-name). If a user with name equal to $user-name is not found, an error is returned. If one of $role-names does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and one of $role-names is not a subset of the current user's roles, then an error is returned. **/
    userRemoveRoles(userName: String, roleNames: String): void;

    /** Returns a sequence of role names for the roles directly assigned to the user ($user-name). Does not flatten the roles to include "inherited roles." If a user with name equal to $user-name is not found, an error is returned. **/
    userGetRoles(userName: String): String;

    /** Returns the user's description. If a user with name equal to $user-name is not found, an error is returned. **/
    userGetDescription(userName: String): String ;

    /** Removes the user with name $user-name. If a user with name equal to $user-name is not found, an error is returned. **/
    removeUser(userName: String): void;

    /** Creates a new role in the system database for the context database. If $role-name is not unique, an error is returned. If one of the $role-names does not identify a role, an error is returned. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. Returns the role-id. **/
    createRole(roleName: String, description: String, roleNames: String, permissions: Permission), collections: String, compartment?: String, externalNames?: String): UnsignedLong ;

    /** Changes the sec:role-name of a role from $role-name to $new-role-name. If $new-role-name is not unique, an error is returned. **/
    roleSetName(roleName: String, newRoleName: String): void;

    /** Assigns roles (named $role-names) to be the set of included roles for the role ($role-name). Removes previously assigned roles. If a role with name equal to $role-name is not found, an error is returned. If a role name in $role-names does not correspond to an existing role, an error is returned. If $role-names is the empty sequence, all included roles for the role are removed. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. **/
    roleSetRoles(roleName: String, roleNames: String): void;

    /** Adds new roles ($new-roles) to the role specified by $role-name. If a role with name equal to $role-name is not found, an error is returned. If one of $new-roles does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and $new-role is not a subset of the current user's roles, then an error is returned. **/
    roleAddRoles(roleName: String, newRoles: String): void;

    /** Removes the roles ($role-names) from the set of roles included by the role ($role-name). If a role with name equal to $role-name is not found, an error is returned. If one of $role-names does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and $old-role is not a subset of the current user's roles, then an error is returned. **/
    roleRemoveRoles(roleName: String, roleNames: String): void;

    /** Removes the role ($role-name). If a role with name equal to $role-name is not found, an error is returned. This function also removes all references to the role (privileges, amps, permissions and users). **/
    removeRole(roleName: String): void;

    /** Removes references to the role ($role-name) from all users. If a role with name equal to $role-name is not found, an error is returned. If the current user is limited to granting only his/her roles, and $role-name is not a subset of the current user's roles, then an error is returned. **/
    removeRoleFromUsers(roleName: String): void;

    /** Removes references to the role ($role-name) from all other roles. If a role with name equal to $role-name is not found, an error is returned. If the current user is limited to granting only his/her roles, and $role-name is not a subset of the current user's roles, then an error is returned. **/
    removeRoleFromRoles(roleName: String): void;

    /** Removes references to the role ($role-name) from all privileges. If a role with name equal to $role-name is not found, an error is returned. If the current user is limited to granting only his/her roles, and $role-name is not a subset of the current user's roles, then an error is returned. **/
    removeRoleFromPrivileges(roleName: String): void;

    /** Removes references to the role ($role-name) from all amps. If a role with name equal to $role-name is not found, an error is returned. If the current user is limited to granting only his/her roles, and $role-name is not a subset of the current user's roles, then an error is returned. **/
    removeRoleFromAmps(roleName: String): void;

    /** Creates a new privilege and returns the new privilege-id. For execute privileges, the privilege is initially nothing more than a name. Use the xdmp:security-assert() function in your code to associate the privilege with a protected operation. For URI privleges, the $action parameter identifies the base URI to be protected. Users must have this privilege to access any of the documents or code under the specified URI. If $action is not unique, an error is returned. If $kind is not one of ("execute", "uri") then en error is returned. If one of the $role-names names a role that does not exist, an error is returned. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. **/
    createPrivilege(privilegeName: String, action: String, kind: String, roleNames: String): UnsignedLong ;

    /** Changes the sec:privilege-name of a sec:privilege to $new-privilege-name. If a privilege with the given $action and $kind is not found, an error is returned. If $new-privilege-name is not unique, an error is returned. **/
    privilegeSetName(action: String, kind: String, newPrivilegeName: String): void;

    /** Removes the privilege identified by ($action,$kind). If a privilege identified by ($action,$kind) is not found, an error is returned. **/
    removePrivilege(action: String, kind: String): void;

    /** Returns a sequence of role names for the roles assigned to the privilege ($action,$kind). If a privilege with action equal to $action is not found, an error is returned. **/
    privilegeGetRoles(action: String, kind: String): String* ;

    /** Assigns the privilege ($action,$kind) to have the roles identified by $role-names. Removes the prviously assigned roles. If a privilege identified by ($action,$kind) is not found, an error is returned. If a role name in $role-names does not correspond to an existing role, an error is returned. If $role-names is the empty sequence, all existing roles for the privilege are removed. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. **/
    privilegeSetRoles(action: String, kind: String, roleNames: String): void;

    /** Adds the roles ($role-names) to the list of roles assigned to the privilege ($action,$kind). If a privilege identified by ($action,$kind) is not found, an error is returned. If one of $role-names does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and $role is not a subset of the current user's roles, then an error is returned. **/
    privilegeAddRoles(action: String, kind: String, roleNames: String): void;

    /** Removes roles ($role-names) from the roles assigned to the privilege ($action,$kind). If a privilege identified by ($action,$kind) is not found, an error is returned. If one of $role-names does not correspond to an existing role, an error is returned. If the current user is limited to granting only his/her roles, and $role is not a subset of the current user's roles, then an error is returned. **/
    privilegeRemoveRoles(action: String, kind: String, roleNames: String): void;

    /** Creates a new amp in the system database for the context database. If the tuple ($namespace, $local-name, $document-uri, $database) is not unique, an error is returned. If one of the $role-names does not identify a role, an error is returned. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. Returns the amp-id. **/
    createAmp(namespace: String, localName: String, documentUri: String, database: String, roleNames: String): UnsignedLong ;

    /** Assigns the amp identified by $namespace, $local-name and $document-uri to have the roles identified by $roles-names. Removes previously assigned roles. If an amp with the given identifiers does not exist, an error is returned. If a role name in $role-names does not correspond to an existing role, an error is returned. If $role-names is the empty sequence, all roles assigned to the amp are removed. If the current user is limited to granting only his/her roles, and $role-names is not a subset of the current user's roles, then an error is returned. **/
    ampSetRoles(namespace: String, localName: String, documentUri: String, database: String, roleNames: String): void;

    /** Adds the roles ($role-names) to the list of roles granted to the amp ($namespace, $local-name, $document-uri). **/
    ampAddRoles(namespace: String, localName: String, documentUri: String, database: String, roleNames: String): void;

    /** Returns a sequence of role names for the roles directly assigned to the amp ($namespace, $local-name, $document-uri). **/
    ampGetRoles(namespace: String, localName: String, documentUri: String, database: String): String* ;

    /** Returns a sequence of role names for the roles directly assigned to the given role ($role-name). **/
    roleGetRoles(roleName: String): String* ;

    /** Removes a role ($role-name) from the set of roles included by the amp ($namespace, $local-name, $document-uri). **/
    ampRemoveRoles(namespace: String, localName: String, documentUri: String, database: String, roleNames: String): void;

    /** Removes the amp ($namespace, $local-name, $document-uri, $database) and returns true after completion. **/
    removeAmp(namespace: String, localName: String, documentUri: String, database: String): void;

    /** Returns a sequence of strings corresponding to the collection uri's that amps belong to. **/
    ampDocCollections(): String* ;

    /** Returns a sequence of permission elements that all newly created amp documents receive. **/
    ampDocPermissions(): Permission)* ;

    /** Returns a sequence of strings corresponding to the collection uri's that users belong to. **/
    userDocCollections(): String* ;

    /** Returns a sequence of permission elements that all newly created user documents receive. **/
    userDocPermissions(): Permission)* ;

    /** Returns a sequence of strings corresponding to the collection uri's that roles belong to. **/
    roleDocCollections(): String* ;

    /** Returns a sequence of permission elements that all newly created role documents receive. **/
    roleDocPermissions(): Permission)* ;

    /** Returns an sec:amp element corresponding to an amp identified by ($namespace, $local-name, $document-uri). If no such amp is found, an error is returned. **/
    getAmp(namespace: String, localName: String, documentUri: String, database: String): Amp)? ;

    /** Returns a sec:privilege element corresponding to a privilege identified by ($action,$kind). If no such privilege is found, an error is returned. **/
    getPrivilege(action: String, kind: String): Privilege)? ;

    /** Returns a sequence of strings corresponding to the collection uri's that privileges belong to. **/
    privDocCollections(): String* ;

    /** Returns a sequence of permission elements that all newly created privilege documents receive. **/
    privDocPermissions(): Permission)* ;

    /** Returns a string corresponding to the uri for the Security collection. **/
    securityCollection(): String ;

    /** Returns a string corresponding to the uri of the security namespace. **/
    securityNamespace(): String ;

    /** Returns a string corresponding to the uri for the users collection. **/
    usersCollection(): String ;

    /** Returns a string corresponding to the uri for the roles collection. **/
    rolesCollection(): String ;

    /** Returns a string corresponding to the uri for the privileges collection. **/
    privilegesCollection(): String ;

    /** Returns a string corresponding to the uri for the amps collection. **/
    ampsCollection(): String ;

    /** Returns a string corresponding to the uri for the protected collections collection. **/
    collectionsCollection(): String ;

    /** Sets the default permissions for a user with name $user-name. **/
    userSetDefaultPermissions(userName: String, permissions: Permission)): void;

    /** Returns a sequence of permission elements made up of a concatenation of $output-perms and the distinct permission elements of $input-perms. **/
    getDistinctPermissions(inputPerms: Permission), outputPerms: Permission)): Permission)* ;

    /** Sets the default permissions for a role with name $role-name. **/
    roleSetDefaultPermissions(roleName: String, permissions: Permission)): void;

    /** Returns a sequence of permission elements correspondinig to the user's default permissions. **/
    userGetDefaultPermissions(userName: String): Permission)* ;

    /** Returns a sequence of permission elements correspondinig to the role's default permissions. **/
    roleGetDefaultPermissions(roleName: String): Permission)* ;

    /** Returns a sequence of strings correspondinig to the uri's of the user's default collections. **/
    userGetDefaultCollections(userName: String): String* ;

    /** Returns a sequence of strings correspondinig to the uri's of the role's default collections. **/
    roleGetDefaultCollections(roleName: String): String* ;

    /** Sets the default collections of a user with name $user-name to $collections. **/
    userSetDefaultCollections(userName: String, collections: String): void;

    /** Sets the default collections of a role with name $role-name to $collections. **/
    roleSetDefaultCollections(roleName: String, collections: String): void;

    /** Gets the security document corresponding to a protected collection with uri equal to $uri. **/
    getCollection(uri: String): Collection) ;

    /** Protects a collection $uri with the given permissions ($permissions). Returns the unique id of the protected collection. If the protected collection at the specified URI does not exist, it is created. **/
    protectCollection(uri: String, permissions: Permission)): UnsignedLong ;

    /** Removes the protection of a collection $uri. This does not remove the collection or any of its documents, but it does remove the protected collection from the security database. **/
    unprotectCollection(uri: String): void;

    /** Sets the permissions of a protected collection identified by $uri to $permissions. **/
    collectionSetPermissions(uri: String, permissions: Permission)): void;

    /** Add the permissions $permissions to the protected collection identified by $uri. **/
    collectionAddPermissions(uri: String, permissions: Permission)): void;

    /** Removes the permissions $permissions from the protected collection identified by $uri. **/
    collectionRemovePermissions(uri: String, permissions: Permission)): void;

    /** Returns a sequence of permission elements corresponding to the current permissions granted to the protected collection identified by $uri. **/
    collectionGetPermissions(uri: String): Permission)* ;

    /** Returns a set of privilege elements corresponding to all privileges that a user has. (roles are flattened to give a complete set of privileges). **/
    userPrivileges(userName: String): Privilege)* ;

    /** Returns a set of privilege elements corresponding to all privileges that a role has. (Roles are flattened to give a complete set of privileges). **/
    rolePrivileges(roleName: String): Privilege);

    /** Returns fn:true() if security has been installed on the current database. Otherwise, returns false. **/
    securityInstalled(): Boolean ;

    /** Returns the uids for the named user or () if no such user exists. **/
    uidForName(name: String): String;

    /** Returns sequence of unique sec:user-names that corresponds to the sequence of user IDs $user-ids. Duplicate IDs return a single name. **/
    getUserNames(userIds: String): User-name)* ;

    /** Changes the realm of this security database to $realm. If the realm is different from the old value this function also invalidates all the existing digest passwords since they will no longer work with the new realm. Warning: this invalidates all user's digest passwords, including the user running this function and users of the Admin Interface (if the Admin Interface is set to digest authentication, which is the default setting); once a user's digest password is invalidated, that user will no longer be able to log in with digest authentication. **/
    setRealm(realm: String): void;

    /** Throws an error if the current user does not have the admin role. **/
    checkAdmin(): void;

    /** Returns the current version of the security database. **/
    securityVersion(): Number;

    /** This function returns a list of all of the compartments. **/
    getCompartments(): String;

    /** This function returns the compartment for the specified role. **/
    roleGetCompartment(roleName: String): String;

    /** This function returns a list of roles in the specifed compartment. **/
    compartmentGetRoles(compartmentName: String): Role);

    /** This function throws the SEC_NOPERMCAP exception if a permission has no capability specified and it throws the SEC-NOPERMROLEID exception if there is no role specified in the permission. **/
    validatePermissions(permissions: Permission)): Node;

    /** This function returns true if the specified role exists in the security database. **/
    roleExists(roleName: String): Boolean;

    /** This function returns true if the specified user exists in the security database. **/
    userExists(userName: String): Boolean;

    /** This function returns true if the specified privilege exists. **/
    privilegeExists(action: String, kind: String): Boolean;

    /** This function returns true if the specified amp exists in the security database. **/
    ampExists(namespace: String, localName: String, documentUri: String, database: String): Boolean;

    /** This function returns the time of the most recent password change for the specified user. If the password for the user has not been changed since the upgrade to 4.2, there is no history, so an empty sequence will be returned. If the user does not exist, an exception is thrown. **/
    userGetLastPasswordDate(userName: String): Date;

    /** This function returns the extra information for the specified user. If the user does not exist, an exception is thrown. **/
    userGetPasswordExtra(userName: String): Password-extra);

    /** This function sets extra information for the specified user. If the user does not exist, an exception is thrown. **/
    userSetPasswordExtra(userName: String, extra: Password-extra)): void;

    /** Sets the Amazon Web Services credentials. Thse are used when accessing files on the simple storage service. If you set both $access-key and $secret-key to the empty string, then the credentials are deleted from the security database. **/
    credentialsSetAws(accessKey: String, secretKey: String): void;

    /** This function sets the external names for the named user. **/
    userSetExternalNames(userName: String, externalName: String): void;

    /** This function sets a role to be matched to one or more external LDAP group names. **/
    roleSetExternalNames(roleName: String, externalName: String): void;

    /** This function returns the external LDAP group names assigned to the named role. **/
    roleGetExternalNames(roleName: String): String;

    /** This function returns a sequence of permission elements that all newly created external authentication configuration objects receive. **/
    externalSecurityDocPermissions(): Permission);

    /** This function returns a sequence of collection elements that all newly created external authentication configuration objects receive. **/
    externalSecurityDocCollections(): String;

    /** This function returns the uri for the external-securitys collection. **/
    externalSecuritiesCollection(): String;

    /** This function creates an external authentication configuration object and returns the id of the configuration. This configuration is used when MarkLogic Server is used with an external Kerberos and/or LDAP server to control user access. For more information on external security, see External Authentication (LDAP and Kerberos) in the Understanding and Using Security Guide. **/
    createExternalSecurity(externalSecurityName: String, description: String, authentication: String, cacheTimeout: Number, authorization: String, ldapServerUri: String, ldapBase: String, ldapAttribute: String, ldapDefaultUser: String, ldapPassword: String, ldapBindMethod: String): String;

    /** This function deletes the named external authentication configuration object. **/
    removeExternalSecurity(externalSecurityName: String): void;

    /** This function sets the name of the external authorization configuration object. **/
    externalSecuritySetName(externalSecurityName: String, newExternalSecurityName: String): void;

    /** This function sets the description for the named external authorization configuration object. **/
    externalSecuritySetDescription(externalSecurityName: String, description: String): void;

    /** This function sets the authentication protocol for the named external authorization configuration object. **/
    externalSecuritySetAuthentication(externalSecurityName: String, authentication: String): void;

    /** This function sets the login cache timeout for the named external authorization configuration object. **/
    externalSecuritySetCacheTimeout(externalSecurityName: String, cacheTimeout: Number): void;

    /** This function sets the authentication scheme for the named external authorization configuration object. **/
    externalSecuritySetAuthorization(externalSecurityName: String, authorization: String): void;

    /** This function sets the LDAP server uri for the named external authorization configuration object. This setting is required if protocol or authorization is ldap. **/
    externalSecuritySetLdapServerUri(externalSecurityName: String, ldapServerUri: String): void;

    /** This function sets the LDAP base for user lookup for the named external authorization configuration object. This setting is required if protocol or authorization is ldap. **/
    externalSecuritySetLdapBase(externalSecurityName: String, ldapBase: String): void;

    /** This function sets the LDAP attribute for user lookup for the named external authorization configuration object. This setting is required if protocol or authorization is ldap. **/
    externalSecuritySetLdapAttribute(externalSecurityName: String, ldapAttribute: String): void;

    /** This function sets the default user name for the named external authorization configuration object. This parameter is required if the protocol is kerberos and authorization is ldap. **/
    externalSecuritySetLdapDefaultUser(externalSecurityName: String, ldapDefaultUser: String): void;

    /** This function sets the default user password for the named external authorization configuration object. This parameter is required if the protocol is kerberos and authorization is ldap. **/
    externalSecuritySetLdapPassword(externalSecurityName: String, ldapPassword: String): void;

    /** This function returns the description set in the named external authorization configuration object. **/
    externalSecurityGetDescription(externalSecurityName: String): String;

    /** This function returns the authentication protocol set in the named external authorization configuration object. **/
    externalSecurityGetAuthentication(externalSecurityName: String): String;

    /** This function returns the login cache timeout (in seconds) set in the named external authorization configuration object. **/
    externalSecurityGetCacheTimeout(externalSecurityName: String): Number;

    /** This function returns the authorization scheme set in the named external authorization configuration object. **/
    externalSecurityGetAuthorization(externalSecurityName: String): String;

    /** This function returns the LDAP server uri set in the named external authorization configuration object. **/
    externalSecurityGetLdapServerUri(externalSecurityName: String): String;

    /** This function returns the LDAP base for user lookup set in the named external authorization configuration object. **/
    externalSecurityGetLdapBase(externalSecurityName: String): String;

    /** This function returns the LDAP attribute for user lookup set in the named external authorization configuration object. **/
    externalSecurityGetLdapAttribute(externalSecurityName: String): String;

    /** This function returns the default LDAP user name set in the named external authorization configuration object. **/
    externalSecurityGetLdapDefaultUser(externalSecurityName: String): String;

    /** This function clears the login cache in the named external authorization configuration object. **/
    externalSecurityClearCache(externalSecurityName: String): void;

    /** Returns the Amazon Web Services access key and secret key used to access the Amazon Simple Storage Service. **/
    credentialsGetAws(): String;

    /** This function changes all amps that refer to one modules database to refer to a different database. This is useful when using database replication for disaster recovery and a replica security database is being promoted to master during a disaster scenario. **/
    ampsChangeModulesDatabase(oldDb: String, newDb: String): String;

    /** This function returns the external LDAP group names assigned to the named user. **/
    userGetExternalNames(userName: String): String;

    /** This function sets the bind method on the named external security object. For more information on the external security bind method, see Creating an External Authentication Configuration Object in the Understanding and Using Security Guide. **/
    externalSecuritySetLdapBindMethod(externalSecurityName: String, ldapBindMethod: String): void;

    /** This function returns the bind method set on the named external security object. For more information on the external security bind method, see Creating an External Authentication Configuration Object in the Understanding and Using Security Guide. **/
    externalSecurityGetLdapBindMethod(externalSecurityName: String): String;


  }
}
