// Type definitions for Packaging
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/package-api.xml

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
    create(pkgname: xs:string, pkgbody?: node()): void;

    /** Checks to see if the named package exists. Returns true if the package exists and false if the package does not exist. **/
    exists(pkgname: xs:string): xs:boolean;

    /** Returns the list of packages. **/
    getPackageList(start?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(list:package-list);

    /** Checks to see if the named package can be installed. Returns true if the package is installable and false if the package is not installable. **/
    installable(pkgname: xs:string): xs:boolean;

    /** Install the named package. **/
    install(pkgname: xs:string): pkgins:install($pkgname);

    /** Test a package for consistency. Returns true if the package is valid and false if the package is not valid. **/
    valid(pkgname: xs:string): xs:boolean;

    /** Check a package for errors and, if there are errors, return a description of the errors as err:configuration-error elements. If no errors are detected, an empty sequence is returned. **/
    errors(pkgname: xs:string): element(err:configuration-error);

    /** Revert configuration settings to those prior to a particular package installation. **/
    revert(ticketId: xs:string): pkgins:revert($ticket);

    /** Returns the configuration (in XML) of the named database. **/
    databaseConfiguration(database: xs:string): element(db:package-database);

    /** Adds a database configuration to the named package. **/
    putDatabase(pkgname: xs:string, dbxml: element(db:package-database)): void;

    /** Returns the configuration of the named database from the named package. **/
    getDatabase(pkgname: xs:string, database: xs:string): element(db:package-database);

    /** Removes the configuration of the named database from the named package. **/
    removeDatabase(pkgname: xs:string, database: xs:string): void;

    /** Returns the names of the databases that have configurations in the named package. **/
    getDatabaseList(pkgname: xs:string, start?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(list:database-list);

    /** Returns the configuration (in XML) of the named app server, located in the named group. **/
    serverConfiguration(group: xs:string, server: xs:string, includeModules?: xs:boolean): element();

    /** Adds an app server configuration to the named package. **/
    putServer(pkgname: xs:string, srvxml: element()): void;

    /** Returns the configuration of the named app server from the named package. **/
    getServer(pkgname: xs:string, group: xs:string, server: xs:string): element();

    /** Removes the configuration of the named app server from the named package. **/
    removeServer(pkgname: xs:string, group: xs:string, server: xs:string): void;

    /** Returns the names of the app servers that have configurations in the named package. **/
    getServerList(pkgname: xs:string, start?: xs:unsignedLong, pageLength?: xs:unsignedLong): element(list:server-list);

    /** Returns the contents of the named package. By default, the package is returned in ZIP format. **/
    getPackage(pkgname: xs:string, mimetype?: xs:string): xs:string;

    /** Deletes the named package. **/
    delete(pkgname: xs:string): void;

    /** Determines the differences between the configuration in the package and the current configuration of the MarkLogic server on which the function is executed. **/
    differences(pkgname: xs:string, onlyDiffs?: xs:boolean): element(pkg:package-diff);

    /** Puts the content of the modules database used by the named app server into the named package. **/
    putModules(pkgname: xs:string, group: xs:string, server: xs:string): void;

    /** Returns the modules data for the named app server from the named package. **/
    getModules(pkgname: xs:string, group: xs:string, server: xs:string): binary();

    /** Removes the modules data for the named app server from the named package. **/
    removeModules(pkgname: xs:string, group: xs:string, server: xs:string): void;


  }
}
