// Type definitions for Management
// Definitions: 

/**

 The Management API is a REST-based API that allows you to administer MarkLogic 
 Server and access MarkLogic Server instrumentation with no provisioning or 
 set-up. You can use the API to perform administrative tasks
 such as initializing or extending a cluster; creating databases, forests, and
 App Servers; and managing tiered storage partitions. The API also provides 
 the ability to easily capture detailed information on MarkLogic Server 
 objects and processes, such as hosts, databases, forests, 
 App Servers, groups, transactions, and requests from a wide variety of tools.

 All of the resource addresses in the Management API require the 
 http://marklogic.com/xdmp/privileges/manage privilege.
 Methods that modify configuration also require the privilege
 http://marklogic.com/xdmp/privileges/manage-admin. See
 the individual methods for detils.

 If a request results in an error, the body of the response includes
 error details. The MIME type of error details is determined by the 
 format request parameter (where supported), Accept 
 header, or request Content-type header, in that order of precedence. 
 For example, if a request supplies XML input (request Content-type
 set to application/xml), but specifies JSON output using
 the format parameter, then error details are returned as 
 JSON. The default error detail MIME type is XML.

**/

interface manageFunctions {

}
declare var manage:manageFunctions
