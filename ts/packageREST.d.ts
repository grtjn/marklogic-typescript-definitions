// Type definitions for Management
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/packageREST.xml

/**

The Packaging API is a REST-based API that allows you to export and import MarkLogic Server 
App Server and database configurations.  
	
**/

declare module Management {

  interface manage {

    /** This resource address returns a list of packages exported for this cluster. **/
    /manage/v2/packages(start: string, pageLength: string, format: string): ;

    /** This resource address creates a new package and returns the URI of the created package. **/
    /manage/v2/packages(pkgname: string, format: string): ;

    /** This resource address tests for an existing package, named pkgname. 200 OK is returned if the package exists. Otherwise 404 Not Found is returned. **/
    /manage/v2/packages/{pkgname}(): ;

    /** This resource address returns the named package (pkgname). **/
    /manage/v2/packages/{pkgname}(view: string, filename: string, format: string): ;

    /** This resource address allows you to add a packaged configuration to the named package (pkgname). **/
    /manage/v2/packages/{pkgname}(format: string): ;

    /** This resource address deletes the named package (pkgname). **/
    /manage/v2/packages/{pkgname}(): ;

    /** This resource address returns a list of the databases in the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/databases(start: string, pageLength: string, format: string): ;

    /** This resource address tests to see if the named database (name) is in the named package (pkgname). 200 OK is returned if the named database is in the package. Otherwise 404 Not Found is returned. **/
    /manage/v2/packages/{pkgname}/databases/{name}(): ;

    /** This resource address returns configuration for the named database (name) in the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/databases/{name}(format: string): ;

    /** This resource address adds a database configuration to the named package (pkgname). The name of the database in the payload body is ignored and name is used as the name. **/
    /manage/v2/packages/{pkgname}/databases/{name}(format: string): ;

    /** This resource address deletes the named database (name) from the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/databases/{name}(): ;

    /** This resource address returns a list of the servers in the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/servers(start: string, pageLength: string, format: string): ;

    /** This resource address tests to see if the named server (name) is in the named package (pkgname). 200 OK is returned if the named server is in the package. Otherwise 404 Not Found is returned. **/
    /manage/v2/packages/{pkgname}/servers/{name}(groupId={groupId}: string): ;

    /** This resource address returns configuration for the named server (name) in the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/servers/{name}(groupId={groupId}: string, format: string, modules: string): ;

    /** This resource address adds a server configuration to the named package (pkgname). The name of the server in the payload body is ignored and name is used as the name. **/
    /manage/v2/packages/{pkgname}/servers/{name}(groupId={groupId}: string, format: string, modules: string): ;

    /** This resource address deletes the named server (name) from the named package (pkgname). **/
    /manage/v2/packages/{pkgname}/servers/{name}(groupId={groupId}: string, modules: string): ;

    /** This resource address installs the named package (pkgname). The URI of the ticket is returned that provides the status of the install operation, along with the details of the installed resources. You can view this ticket by entering the URI in a browser. **/
    /manage/v2/packages/{pkgname}/install(format: string): ;

    /** This resource address reverts to the configuration that existed before installing the package associated with the specified ticket (ticketnumber). The ticketnumber is in the ticket URI returned by the install operation. Reverting an installed package does not remove any imported forests. **/
    /manage/v2/tickets/{ticketnumber}/revert(): ;


  }
}
