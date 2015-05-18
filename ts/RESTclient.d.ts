// Type definitions for RESTclient
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/RESTclient.xml

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

declare module RESTclient {

  interface rest-client {

    /** Retrieve document content and/or metadata from the database. **/
    /v1/documents(uri+: string, database?: string, category*: string, format?: string, transform?: string, trans:{name}*: string, txid?: string): ;

    /** Returns the same headers as an equivalent GET (content/metadata fetch) on the /documents service. For example, you can use the returned content length to determine the end boundary for iterating over sub-binaries. **/
    /v1/documents(category*: string, database?: string, format?: string, txid?: string, uri: string): ;

    /** Insert or update document contents and/or metadata, at a caller-supplied document URI. **/
    /v1/documents(uri: string, category*: string, database?: string, format?: string, collection*: string, quality?: string, perm:{role}*: string, prop:{name}*: string, extract?: string, repair?: string, transform?: string, trans:{name}*: string, forestName?: string, txid?: string, lang?: string, temporalCollection?: string, systemTime?: string): ;

    /** Perform a partial update to content or metadata of a document at a caller-specified URI. This operation is equivalent to PATCH /v1/documents. **/
    /v1/documents?uri={dbUri}(uri: string, category*: string, database?: string, format?: string, txid?: string): ;

    /** Create a new document with a server-generated database URI. **/
    /v1/documents?extension={ext}(extension: string, category*: string, directory?: string, database?: string, format?: string, collection*: string, quality?: string, perm:{role}*: string, prop:{name}*: string, extract?: string, repair?: string, transform?: string, trans:{name}*: string, forestName?: string, txid?: string, lang?: string): ;

    /** Insert or update content and/or metadata for multiple documents in a single request. **/
    /v1/documents(database?: string, transform?: string, trans:{name}*: string, txid?: string, temporalCollection?: string, systemTime?: string): ;

    /** Perform a partial update to content or metadata of a document. **/
    /v1/documents(uri: string, category*: string, database?: string, format?: string, txid?: string): ;

    /** Remove a document, or reset document metadata. **/
    /v1/documents(uri: string, category*: string, database?: string, txid?: string, temporalCollection?: string, systemTime?: string): ;

    /** Retrieve a list of REST API instances, including configuration details. This request is only available on port 8002. **/
    /v1/restApis(database?: string, format?: string, group?: string): ;

    /** Create an instance of the MarkLogic REST API, including an HTTP app server, required modules, and optionally a content database. This request is only available on port 8002. **/
    /v1/restApis(): ;

    /** Retrieve configuration information about an App Server servicing the MarkLogic REST API. This request is only available on port 8002. **/
    /v1/restApis/{name}(format?: string, group?: string): ;

    /** Remove an HTTP App Server servicing the MarkLogic REST API. Optionally, also remove the attached database and forests. **/
    /v1/restApis/{name}(include*: string, group?: string): ;

    /** Create a multi-statement transaction. The resulting transaction id may be used in the txid request parameter of subsequent requests to force evaluation to take place in the context of the created transaction. **/
    /v1/transactions(name: string, timeLimit: string, database?: string): ;

    /** Retrieve status information for the transaction whose id matches the txid given in the request URI. **/
    /v1/transactions/{txid}(format?: string, database?: string): ;

    /** Commit or rollback the transaction whose id matches the txid given in the request URI. **/
    /v1/transactions/{txid}(result: string, database?: string): ;

    /** Retrieve a list of installed resource service extensions, including their metadata. **/
    /v1/config/resources(format?: string, refresh?: string): ;

    /** Retrieve the XQuery library module or server-side JavaScript module implementing the named resource service extension. **/
    /v1/config/resources/{name}(): ;

    /** Create or update a resource service extension. **/
    /v1/config/resources/{name}(provider?: string, version?: string, title?: string, description?: string, method*: string, method:{name}*: string): 
    Upon success, MarkLogic Server returns a 204, "Created" or "Updated".
  ;

    /** Uninstall the named resource service extension. **/
    /v1/config/resources/{name}(): ;

    /** Make a GET request to the named resource service extension. **/
    /v1/resources/{name}(database?: string, txid?: string, rs:{name}*: string): ;

    /** Perform the PUT operation associated with a resource service extension. **/
    /v1/resources/{name}(database?: string, txid?: string, rs:{name}*: string): ;

    /** Applies an extension-specific operation to a resource implemented by a resource service extension. **/
    /v1/resources/{name}(database?: string, txid?: string, rs:{name}*: string): ;

    /** Send a DELETE request to the named resource service extension. **/
    /v1/resources/{name}(database?: string, txid?: string, rs:{name}*: string): ;

    /** Retrieve a list of assets installed in the modules database associated with a REST API instance, such as a dependent library of an extension or transformation. **/
    /v1/ext/{directories}(format?: string): ;

    /** Delete the assets in /ext/{directories} in the modules database associated with the REST API instance. **/
    /v1/ext/{directories}(): ;

    /** Retrieve an asset installed in the modules database associated with a REST API instance, such as a dependent library of a module implementing an extension or a transformation. The asset should have the database URI /ext/{directories}/{asset}. **/
    /v1/ext/{directories}/{asset}(): ;

    /** Install an asset such as a dependent library of an extension module in the modules database associated with this REST API instance. The asset is installed with the database URI /ext/{directories}/{asset}. **/
    /v1/ext/{directories}/{asset}(format?: string, perm:{role}*: string): ;

    /** Remove the asset with document URI /ext/{directories}/{asset} from the modules database associated with this REST API instance. **/
    /v1/ext/{directories}/{asset}(): ;

    /** Evaluate an ad-hoc query expressed using XQuery or server-side JavaScript. **/
    /v1/eval(xquery?: string, javascript?: string, vars?: string, database?: string, txid?: string): ;

    /** Evaluate an XQuery or server-side JavaScript module installed in MarkLogic Server. **/
    /v1/invoke(module: string, vars?: string, database?: string, txid?: string): ;

    /** Search the database using a string and/or structured query, returning search results and/or matching documents. **/
    /v1/search(q?: string, structuredQuery?: string, start?: string, pageLength?: string, options?: string, view?: string, category*: string, database?: string, format?: string, txid?: string, collection*: string, directory?: string, transform?: string, trans:{name}*: string): ;

    /** Search the database using a structured query, supplied in the POST body; or search the database using a string or structured query with the query options and query combined in the POST body. Returns search results, matching content and/or metadata, or both. **/
    /v1/search(q?: string, start?: string, pageLength?: string, options?: string, view?: string, category*: string, database?: string, format?: string, txid?: string, collection*: string, directory?: string, transform?: string, trans:{name}*: string): ;

    /** Remove documents in a collection or directory, or clear the database. **/
    /v1/search(database?: string, txid?: string, collection?: string, directory?: string): ;

    /** THIS METHOD IS DEPRECATED; use /v1/search and /v1/qbe instead. Query the database based on the value of a JSON key, XML element, or XML element attribute. **/
    /v1/keyvalue(key?: string, element?: string, attribute?: string, value: string, start?: string, pageLength?: string, options?: string, view?: string, format?: string, txid?: string, collection*: string, directory?: string): ;

    /** Search the database using a Query By Example or perform a multi-document read for documents that match a Query By Example. **/
    /v1/qbe(query?: string, start?: string, pageLength?: string, options?: string, category*: string, database?: string, view?: string, format?: string, txid?: string, collection*: string, directory?: string, transform?: string, trans:{name}*: string): ;

    /** Search the database using a Query By Example or perform a multi-document read for documents that match a Query By Example. The QBE is passed in the request body. **/
    /v1/qbe(start?: string, pageLength?: string, options?: string, category*: string, database?: string, view*: string, format?: string, txid?: string, collection*: string, directory?: string, transform?: string, trans:{name}*: string): ;

    /** Retrieve a list of lexicon configurations available for use with GET /v1/values/{name}. **/
    /v1/values(database?: string, format?: string, options?: string): ;

    /** Query the values in a lexicon or range index, or find co-occurrences of values in multiple range indexes. Optionally apply an aggregate function to the values or co-occurrences. **/
    /v1/values/{name}(q?: string, structuredQuery?: string, options?: string, database?: string, view?: string, format?: string, collection*: string, directory?: string, direction?: string, frequency?: string, limit?: string, start?: string, pageLength?: string, aggregate?: string, aggregatePath?: string, transform?: string, trans:{name}*: string, txid?: string): ;

    /** Query the values in a lexicon or range index, or find co-occurrences of values in multiple range indexes. Optionally apply an aggregate function to the values or co-occurrences. Query and query options are passed in the POST body. **/
    /v1/values/{name}(q?: string, options?: string, database?: string, view?: string, format?: string, txid?: string, direction?: string, directory?: string, frequency?: string, limit?: string, start?: string, pageLength?: string, aggregate?: string, aggregatePath?: string, transform?: string, trans:{name}*: string): ;

    /** Retrieve a list of suggested constraint prefixes and/or constraint values that match (complete) the input query text, similar to the XQuery function search:suggest. **/
    /v1/suggest(partialQ?: string, q*: string, limit?: string, cursorPosition?: string, options?: string, database?: string, format?: string): ;

    /** Retrieve a list of suggested constraint prefixes and/or constraint values that match (complete) the input query text, similar to the XQuery function search:suggest. **/
    /v1/suggest(partialQ?: string, q*: string, limit?: string, cursorPosition?: string, options?: string, database?: string, format?: string): ;

    /** Retrieve the definition of all alert rules previously installed in this REST API instance using the /v1/alert/{name} service. **/
    /v1/alert/rules(database?: string, format?: string): ;

    /** Retrieve the alerting rule definition installed with the given name. **/
    /v1/alert/rules/{name}(database?: string, format?: string): ;

    /** Install an alerting rule under the given name. **/
    /v1/alert/rules/{name}(database?: string, format?: string): ;

    /** Test for the existence of a rule with the given name. **/
    /v1/alert/rules/{name}(database?: string): ;

    /** Delete an alerting rule previously installed using PUT /v1/alert/rules/{name}. **/
    /v1/alert/rules/{name}(database?: string): ;

    /** Retrieve a list of rules (including the rule metadata) that match documents identified by a query or a list of URIs. **/
    /v1/alert/match(uri*: string, q?: string, structuredQuery?: string, options?: string, rule*: string, start?: string, pageLength?: string, database?: string, format?: string): ;

    /** Retrieve a list of rules (including the rule metadata) that match either documents in the database identified by a document selection query defined in the request body or a transient document supplied in the request body. **/
    /v1/alert/match(options?: string, start?: string, pageLength?: string, database?: string, format?: string): ;

    /** Retrieve a list of all the named query options available for use with the service. For example, the names of query options previously stored using POST requests to the /config/query service. The results include the name and URI of all named query options. **/
    /v1/config/query(format?: string): ;

    /** Remove all named query options. **/
    /v1/config/query(): ;

    /** Retrieve the query options whose name matches the name in the request URI, or retrieve the default query options. **/
    /v1/config/query/(default|{name})(format?: string): ;

    /** Create or append to named query options. **/
    /v1/config/query/(default|{name})(format?: string): ;

    /** Create or replace named query options. **/
    /v1/config/query/(default|{name})(format?: string): ;

    /** Remove the named (or default) query options from the App Server. **/
    /v1/config/query/(default|{name})(): ;

    /** Retrieve the setting for a particular option in named query options. **/
    /v1/config/query/(default|{name})/{childElement}(format?: string): ;

    /** Add options to existing named query options, or create new named query options if {name} does not already exist. **/
    /v1/config/query/(default|{name})/{childElement}(format?: string): ;

    /** Replace options in existing named query options, or create new named query options if {name} does not already exist. **/
    /v1/config/query/(default|{name})/{childElement}(format?: string): ;

    /** Remove an option setting from the named query options. **/
    /v1/config/query/(default|{name})/{childElement}(): ;

    /** Retrieve a list of all MarkLogic REST API instance configuration properties names and settings. **/
    /v1/config/properties(format?: string): ;

    /** Set or modify MarkLogic REST API instance configuration properties. **/
    /v1/config/properties(format?: string): ;

    /** Reset all MarkLogic REST API instance configuration properties to their default values. **/
    /v1/config/properties(): ;

    /** Retrieve the value of the MarkLogic REST API instance configuration property named by {property-name}. **/
    /v1/config/properties/{propertyName}(format?: string): ;

    /** Set the value of the MarkLogic REST API instance configuration property named by {property-name}. **/
    /v1/config/properties/(propertyName)(format?: string): ;

    /** Reset the MarkLogic REST API instance configuration property {property-name} to its default value. **/
    /v1/config/properties/{propertyName}(): ;

    /** Retrieve metadata about all transforms installed using the /v1/config/transforms/{name} service. **/
    /v1/config/transforms(format?: string, refresh?: string): ;

    /** Retrieve the XQuery, XSLT, or JavaScript implementation installed for the named transform. **/
    /v1/config/transforms/{name}(): ;

    /** Create or update the named transform. **/
    /v1/config/transforms/{name}(title?: string, provider?: string, version?: string, description?: string, trans:{name}*: string, format?: string): ;

    /** Remove the named transform. **/
    /v1/config/transforms/{name}(): ;

    /** List all namespace bindings configured for use in queries, ordered alphabetically by prefix. **/
    /v1/config/namespaces(format?: string): ;

    /** Create or append to namespace bindings that can be used in subsequent query operations. **/
    /v1/config/namespaces(format?: string): ;

    /** Create or replace namespace bindings that can be used in subsequent query operations. **/
    /v1/config/namespaces(format?: string): ;

    /** Remove all installed namespace bindings. **/
    /v1/config/namespaces(): ;

    /** Retrieve the namespace URI associated with the REST service namespace binding prefix {prefix}. **/
    /v1/config/namespaces/{prefix}(format?: string): ;

    /** Create or modify a namespace binding. **/
    /v1/config/namespaces/{prefix}(format?: string): ;

    /** Remove the namespace binding for {prefix}. **/
    /v1/config/namespaces/{prefix}(): ;

    /** Request a report on whether or not the database configuration includes index configurations that satisfy all installed query options. **/
    /v1/config/indexes(format?: string): ;

    /** Request a report on whether or not the database configuration includes index configurations that satisfy these named query options. **/
    /v1/config/indexes/{name}(format?: string): ;

    /** Retrieve a graph or a list of available graph URIs. **/
    /v1/graphs(database?: string, graph?: string, default?: string): ;

    /** Returns the same headers as an equivalent GET on the /graphs service. **/
    /v1/graphs(database?: string, graph?: string, default?: string): ;

    /** Create or replace triples in a named graph or the default graph. **/
    /v1/graphs(database?: string, graph?: string, default?: string, repair: string): ;

    /** Merge triples into a named graph or the default graph. **/
    /v1/graphs(database?: string, graph?: string, default?: string, repair: string): ;

    /** Remove triples in a named graph or the default graph. **/
    /v1/graphs(database?: string, graph: string, default: string): ;

    /** Perform a SPARQL query or SPARQL update on the database. These two operations are mutually exclusive. **/
    /v1/graphs/sparql(query: string, update: string, defaultGraphUri*: string, namedGraphUri*: string, usingGraphUri*: , usingNamedGraphUri*: , database?: string, default permissions*: string): ;

    /** Perform a SPARQL query or SPARQL Update on one or more graphs. These two operations are mutually exclusive. **/
    /v1/graphs/sparql(query: string, update: string, defaultGraphUri*: string, namedGraphUri*: string, usingGraphUri*: , usingNamedGraphUri*: , database?: string, default permissions: ): ;

    /** Retrieve a list of all graph nodes in the database, or a specified set of nodes. **/
    /v1/graphs/things(iri*: string, database?: string): ;


  }
}
