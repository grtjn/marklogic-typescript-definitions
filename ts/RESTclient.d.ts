// Type definitions for RESTclient
// Definitions: 

/**

The Client REST API is a REST-based API for creating applications that 
with document manipulation and search capabilities. Use the web services 
provided by the API to create, read, update, delete, and search content 
in MarkLogic Server. For more information about the API, see 
The REST Application Developer's Guide.

NOTE: To use most of these interfaces, you must have a REST API instance.
To create an instance, use POST /v1/rest-apis on port 8002 or the GUI
available at http://your-host:8000. For details, see
 Creating an Instance in the REST Application Developer's Guide.

The examples in this section use the command line tool curl for 
sending HTTP requests. Though the examples rely on curl, you 
may use any tool capable of sending HTTP requests. If you do not have curl, 
you can download a copy from 
http://curl.haxx.se/download.html.

The following HTTP response codes apply to all requests to the API services.
Additional response codes are covered in the usage information for each
operation.


  CodeDescriptionCause
  200OKSuccess
  400Bad RequestUnsupported or invalid parameters, or missing required parameters.
  401UnauthorizedUser is not authorized.
  403ForbiddenUser does not have access to this resource.
  404Not FoundNo matching pattern for incoming URI.
  405Method Not AllowedThe service does not support the HTTP method used by the client.
  406Unacceptable TypeUnable to provide content type matching the client's Accept header.
  412Precondition FailedA non-syntactic part of the request was rejected. For example, an 
        empty POST or PUT body.
    
  415Unsupported Media TypeA PUT or POST payload cannot be accepted.

 
Use the /alert service to do the following:
Install rules that describe characteristics of documents you want
      to identify in the future.Poll for new database content that matches pre-installed rules.Test a transient document that is not stored in the database for
      matches against your pre-defined rules.

  This feature relies on reverse queries and the MarkLogic Server Alerting
  API, so it requires a valid alerting license key.

  When you use a query to identify documents to test against your
  rules, you should either define a query that matches only a small number
  of documents, or use the start and pageLength
  request parameters of /alert/match to limit the number of
  documents considered. 

  For details, see
 Alerting in the REST Application Developer's Guide.

 
Use the /documents service to create, replace, update, and delete
documents and metadata. You can update documents in their entirety
or incrementally. For details, see
 Manipulating Documents in the REST Application Developer's Guide and
 Reading and Writing Multiple Documents in the REST Application Developer's Guide.
 
Use the /config services to do the following:
  
      Manage properties of your REST API instance, such as defining
      default a document transform, enabling debugging output, and
      setting the MIME type for error reports.
    Manage persistent query options.Manage content transformations.
      Manage namespace bindings you can use to make queries with other
      REST services, such as /search.
    
      Test whether or not your database configuration includes all
      indexes required by persistent query options.
    
 
Use the interfaces in this section to perform query operations such
searching using string, structured, combined, or Query By Example;
lexicon browsing; and search suggestion generation.  For details, see
 Using and Configuring Query Features in the REST Application Developer's Guide.
 
Use the interfaces in this section to manage and query semantic graph
data. The API capabilities include the following:
  Insert, merge, or replace triples.Retrieve a graph.Perform a SPARQL query.
  
   NOTE: You must enable the collection lexicon on your database before
   using the semantics interfaces. You can enable the collection lexicon
 using the Admin Interface. See Configuring the Database to Work with Triples in the Semantics Developer's Guide in the Semantics Developer's Guide.
  
   For more information, see 
 Loading Triples in the REST Application Developer's Guide,
 Querying Triples in the REST Application Developer's Guide,
and the Semantics Developer's Guide.
  
 
The interfaces in this section enable you to extend the capabilities of
the REST Client API in a variety of ways, include resource service
extensions, ad-hoc queries, and invocation of JavaScript and XQuery
modules stored in MarkLogic Server.

  Resource service extensions enable you to install custom XQuery and JavaScript
  modules on MarkLogic Server and then expose them through a RESTful interface.
  Use the /config/resources service to manage the 
  module that implements your extension. Use the /resources 
  service to make requests against resource service extensions.

  Use the /ext service
  to manage assets in the modules database associated with a REST API
  instance, including dependent libraries of resource service extensions,
  content transformations, and XQuery and JavaScript modules usable with
  the /invoke service.

  Use the /eval service to evaluate ad-hoc XQuery and JavaScript
  code on MarkLogic Server. Use the /invoke service to evaluate
  XQuery and JavaScript modules stored on MarkLogic Server.

  For details, see
 Extending the REST API in the REST Application Developer's Guide.

 
  Use the /rest-apis service to create or delete a REST API
  instance, or to retrieve configuration information about a REST API
  instance.

  NOTE: You must send all requests to /rest-apis to port 8002.

  For details, see
 Administering MarkLogic REST API Instances in the REST Application Developer's Guide.

 
Use the /transactions service to manage transactions 
using the REST API. You can create, commit, rollback, and query the
status of transactions. Use these features if your application requires
multiple REST API requests to execute within the same transaction
context. For details, see
 Managing Transactions in the REST Application Developer's Guide.
**/

interface restClientFunctions {

}
declare var restClient:restClientFunctions
