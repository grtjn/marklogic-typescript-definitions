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

interface pkgFunctions {

    /** Create an empty configuration for use with other packaging functions. **/
  create(pkgname: string, pkgbody?: Node): void;

    /** Checks to see if the named package exists. Returns true if the package exists and false if the package does not exist. **/
  exists(pkgname: string): Object;

    /** Returns the list of packages. **/
  getPackageList(start?: string, pageLength?: string): Node;

    /** Checks to see if the named package can be installed. Returns true if the package is installable and false if the package is not installable. **/
  installable(pkgname: string): Object;

    /** Install the named package. **/
  install(pkgname: string): Object;

    /** Test a package for consistency. Returns true if the package is valid and false if the package is not valid. **/
  valid(pkgname: string): Object;

    /** Check a package for errors and, if there are errors, return a description of the errors as err:configuration-error elements. If no errors are detected, an empty sequence is returned. **/
  errors(pkgname: string): Node;

    /** Revert configuration settings to those prior to a particular package installation. **/
  revert(ticketId: string): Object;

    /** Returns the configuration (in XML) of the named database. **/
  databaseConfiguration(database: string): Node;

    /** Adds a database configuration to the named package. **/
  putDatabase(pkgname: string, dbxml: Node): void;

    /** Returns the configuration of the named database from the named package. **/
  getDatabase(pkgname: string, database: string): Node;

    /** Removes the configuration of the named database from the named package. **/
  removeDatabase(pkgname: string, database: string): void;

    /** Returns the names of the databases that have configurations in the named package. **/
  getDatabaseList(pkgname: string, start?: string, pageLength?: string): Node;

    /** Returns the configuration (in XML) of the named app server, located in the named group. **/
  serverConfiguration(group: string, server: string, includeModules?: Object): Node;

    /** Adds an app server configuration to the named package. **/
  putServer(pkgname: string, srvxml: Node): void;

    /** Returns the configuration of the named app server from the named package. **/
  getServer(pkgname: string, group: string, server: string): Node;

    /** Removes the configuration of the named app server from the named package. **/
  removeServer(pkgname: string, group: string, server: string): void;

    /** Returns the names of the app servers that have configurations in the named package. **/
  getServerList(pkgname: string, start?: string, pageLength?: string): Node;

    /** Returns the contents of the named package. By default, the package is returned in ZIP format. **/
  getPackage(pkgname: string, mimetype?: string): string;

    /** Deletes the named package. **/
  delete_(pkgname: string): void;

    /** Determines the differences between the configuration in the package and the current configuration of the MarkLogic server on which the function is executed. **/
  differences(pkgname: string, onlyDiffs?: Object): Node;

    /** Puts the content of the modules database used by the named app server into the named package. **/
  putModules(pkgname: string, group: string, server: string): void;

    /** Returns the modules data for the named app server from the named package. **/
  getModules(pkgname: string, group: string, server: string): Node;

    /** Removes the modules data for the named app server from the named package. **/
  removeModules(pkgname: string, group: string, server: string): void;

}
declare var pkg:pkgFunctions
