// Type definitions for Packaging
// Definitions: 

/**
  
   The Configuration Packaging API module contains functions for scripting
   the packaging of MarkLogic Server resource configurations, such as
   database and App Server settings. Use the API to create, compare, and
   install configuration packages. 
  
  
    The Configuration Packaging API is installed as the following file:
  
  
install_dir/Modules/MarkLogic/manage/package/package.xqy
  
  
   To use the Package module as part of your own XQuery module, include the
   following line in your XQuery prolog:
  
  
import module namespace pkg = "http://marklogic.com/manage/package"
        at "/MarkLogic/manage/package/package.xqy";
  
  
   The library namespace prefix pkg is not predefined
   in the server.
  
**/

declare module Packaging {

  interface pkg {

    /** Create an empty configuration for use with other packaging functions. **/
    create(pkgname: String, pkgbody?: Node): void;

    /** Checks to see if the named package exists. Returns true if the package exists and false if the package does not exist. **/
    exists(pkgname: String): Boolean;

    /** Returns the list of packages. **/
    getPackageList(start?: String, pageLength?: String): Package-list);

    /** Checks to see if the named package can be installed. Returns true if the package is installable and false if the package is not installable. **/
    installable(pkgname: String): Boolean;

    /** Install the named package. **/
    install(pkgname: String): Install($pkgname);

    /** Test a package for consistency. Returns true if the package is valid and false if the package is not valid. **/
    valid(pkgname: String): Boolean;

    /** Check a package for errors and, if there are errors, return a description of the errors as err:configuration-error elements. If no errors are detected, an empty sequence is returned. **/
    errors(pkgname: String): Configuration-error);

    /** Revert configuration settings to those prior to a particular package installation. **/
    revert(ticketId: String): Revert($ticket);

    /** Returns the configuration (in XML) of the named database. **/
    databaseConfiguration(database: String): Package-database);

    /** Adds a database configuration to the named package. **/
    putDatabase(pkgname: String, dbxml: Package-database)): void;

    /** Returns the configuration of the named database from the named package. **/
    getDatabase(pkgname: String, database: String): Package-database);

    /** Removes the configuration of the named database from the named package. **/
    removeDatabase(pkgname: String, database: String): void;

    /** Returns the names of the databases that have configurations in the named package. **/
    getDatabaseList(pkgname: String, start?: String, pageLength?: String): Database-list);

    /** Returns the configuration (in XML) of the named app server, located in the named group. **/
    serverConfiguration(group: String, server: String, includeModules?: Boolean): Node;

    /** Adds an app server configuration to the named package. **/
    putServer(pkgname: String, srvxml: Node): void;

    /** Returns the configuration of the named app server from the named package. **/
    getServer(pkgname: String, group: String, server: String): Node;

    /** Removes the configuration of the named app server from the named package. **/
    removeServer(pkgname: String, group: String, server: String): void;

    /** Returns the names of the app servers that have configurations in the named package. **/
    getServerList(pkgname: String, start?: String, pageLength?: String): Server-list);

    /** Returns the contents of the named package. By default, the package is returned in ZIP format. **/
    getPackage(pkgname: String, mimetype?: String): String;

    /** Deletes the named package. **/
    delete(pkgname: String): void;

    /** Determines the differences between the configuration in the package and the current configuration of the MarkLogic server on which the function is executed. **/
    differences(pkgname: String, onlyDiffs?: Boolean): Package-diff);

    /** Puts the content of the modules database used by the named app server into the named package. **/
    putModules(pkgname: String, group: String, server: String): void;

    /** Returns the modules data for the named app server from the named package. **/
    getModules(pkgname: String, group: String, server: String): Node;

    /** Removes the modules data for the named app server from the named package. **/
    removeModules(pkgname: String, group: String, server: String): void;


  }
}
