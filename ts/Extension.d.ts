// Type definitions for Extensions
// Definitions: 

/**
   The extension built-in functions are miscellaneous extensions to the
   XQuery core library, including functions for evaluating
   strings as XQuery expressions and functions to get information about
   documents in the database.
  
   The function values functions allow you to pass a function value
   as a parameter to another function.  You can also pass in the location
   of the implementation of a function, allowing the caller to
   specify a different version of a function to use in the context of
   making that function.
  
 The MarkLogic Server extension functions are XQuery extensions that
 return MarkLogic Server-specific information, such as the version of
 MarkLogic Server, the IDs of the hosts in the cluster, and so on. 
  
 The extension functions provide miscellaneous extensions to XQuery.
  
 The HTTP functions allow you to make various HTTP calls from
 within your XQuery program.
  
 The search extension functions complement the Search Built-in functions.
  
 The XML extension functions provide XML functionality such as
 parsing a string as XML.
  
 The XQuery Context functions are XQuery extensions that allow
 you to start a new query context, manipulate the current context, or
 get information about the current context.
  
 The Documents, Directories, Properties, and Locks functions are XQuery built-in
 extension functions that get information from documents, directories,
 properties, and locks from MarkLogic Server.  All of these are stored
 as fragments in a database.
 **/

declare module Extensions {

  interface xdmp {

    /** Formats a dateTime value using POSIX strftime. This function uses the POSIX strftime system call in the way it is implemented on each platform. For other XQuery functions that have more functionality (for example, for things like timezones), use one or more if the various XQuery or XSLT standard functions such as fn:format-dateTime. **/
    strftime(format: String, value: Date): String;

    /** Returns the current MarkLogic Server version. **/
    version(): String;

    /** Returns the operating-system platform upon which MarkLogic Server is running ("solaris", "winnt", "linux", or "macosx"). **/
    platform(): String;

    /** Returns the hardware architecture upon which MarkLogic Server is running. If xdmp:platform() returns "linux", it will return "x86_64" or "i686. If xdmp:platform() returns "solaris", it will return "amd64" or "sparcv9". If xdmp:platform() returns "winnt", it will return "amd64" or "i686". If xdmp:platform() returns "macosx", it will return "x86_64". **/
    architecture(): String;

    /** Returns a string whose value corresponds to the path of the node. **/
    path(node: Node, includeDocument?: Object): String;

    /** Returns a string representing the description of a given item sequence. If you take the output of the xdmp:describe function and evaluate it as an XQuery program, it returns the item(s) input to the function. **/
    describe(item: String, maxSequenceLength?: Number, maxItemLength?: Number): String;

    /** Returns the 32-bit hash of a string. **/
    hash32(string: String): Number;

    /** Returns the 64-bit hash of a string. **/
    hash64(string: String): String;

    /** Combines an initial hash with a subsequent hash. **/
    step64(initial: String, step: String): String;

    /** Add two 64-bit integer values, discarding overflow. **/
    add64(x: String, y: String): String;

    /** AND two 64-bit integer values. **/
    and64(x: String, y: String): String;

    /** Muliply two 64-bit integer values, discarding overflow. **/
    mul64(x: String, y: String): String;

    /** NOT a 64-bit integer value. **/
    not64(x: String): String;

    /** OR two 64-bit integer values. **/
    or64(x: String, y: String): String;

    /** XOR two 64-bit integer values. **/
    xor64(x: String, y: String): String;

    /** Left-shift a 64-bit integer value. **/
    lshift64(x: String, y: Number): String;

    /** Right-shift a 64-bit integer value. **/
    rshift64(x: String, y: Number): String;

    /** Returns a random unsigned integer between 0 and a number up to 64 bits long. **/
    random(max?: String): String;

    /** Parses a hexadecimal string, returning an integer. **/
    hexToInteger(hex: String): Number;

    /** Returns a hexadecimal representation of an integer. **/
    integerToHex(val: Number): String;

    /** Parses an octal string, returning an integer. **/
    octalToInteger(octal: String): Number;

    /** Returns an octal representation of an integer. **/
    integerToOctal(val: Number): String;

    /** Returns the system timestamp for this request if the request is a query statement. Returns the empty sequence if the current request is an update statement. **/
    requestTimestamp(): String;

    /** Returns the database ID of the security database associated with the current database. **/
    securityDatabase(databaseId?: String): String;

    /** Returns the database ID of the schema database associated with the current database. **/
    schemaDatabase(databaseId?: String): String;

    /** Returns the database ID of the modules database. Returns 0 if the current App Server uses the file system for its modules. **/
    modulesDatabase(): String;

    /** Returns the database ID of the triggers database associated with the current database. **/
    triggersDatabase(databaseId?: String): String;

    /** Returns the unevaluated serialized representation of the input parameter as a string. **/
    quote(arg: String, options?: Object): String;

    /** Parses a string as XML, returning one or more document nodes. **/
    unquote(arg: String, defaultNamespace?: String, options?: String): Node;

    /** Logs a message to the log file <install_dir>/Logs/ErrorLog.txt. The log message is sent as soon as this function is called, even if the program from which it is called has not completed. **/
    log(msg: String, level?: String): void;

    /** Retrieves the current server log level. **/
    logLevel(): String;

    /** Returns the current value of the resource meters for this query sequence as a JSON node. **/
    queryMeters(): Object;

    /** Returns the elapsed time since the start of processing of this query. Gives the same information as the elapsed-time element of the xdmp:query-meters output, but has less overhead than calling xdmp:query-meters. **/
    elapsedTime(): Object;

    /** Enables or disables tracing of this query. When query tracing is enabled, "info" level messages are logged detailing the search optimizations performed. **/
    queryTrace(enabled: Object): void;

    /** Returns the list of path namespaces for the given database id. **/
    databasePathNamespaces(dbid?: String): Object;

    /** Returns the document-uri property of the parameter or its ancestor. **/
    nodeUri(node: Node): String;

    /** Returns the database id where the parameter is stored. If the specified node does not come from a document in a database, then xdmp:node-database returns an empty list. **/
    nodeDatabase(node: Node): String;

    /** Returns the current MarkLogic product edition. **/
    productEdition(): String;

    /** Returns the current MarkLogic product environment. **/
    productEnvironment(): String;

    /** Returns the locks for one or more documents or directories. Returns the locks for all documents and directories in the database if no parameter is given. **/
    documentLocks(uri?: String): Node;

    /** Returns a sequence of properties documents, one for each of the specified documents that has a corresponding properties document. If no documents are specified, returns a sequence of properties documents for all documents in the database that have a corresponding properties document. **/
    documentProperties(uri?: String): Node;

    /** Returns the quality of the specified document if the document exists. Otherwise, returns the empty sequence. **/
    documentGetQuality(uri: String): Number;

    /** Returns timestamp of the most recent visible update to a document, lock, or property. Returns the empty sequence if no document, lock, or property exists. **/
    documentTimestamp(uri: String): Number;

    /** Returns the forest ID of the forest in which a document (or a lock or a property) with the specified URI is stored. Otherwise, returns the empty sequence. **/
    documentForest(uri: String, forestIds?: String): String;

    /** Returns the ID of the forest specified as the parameter. Throws XDMP-NOSUCHFOREST if no forest exists at the specified ID. **/
    forest(name: String): String;

    /** Returns the ID of the database named in the parameter. Returns the ID of the current database if no parameter is specified. Throws XDMP-NOSUCHDB if no database exists for the specified name. **/
    database(name?: String): String;

    /** Returns a sequence of forest IDs in the specified database. **/
    databaseForests(databaseId: String, includeReplicas?: Object): String;

    /** Returns the forest ID for each specified forest or for each forest's replica if the forest is currently experiencing a local disk failover. **/
    forestOpenReplica(forestIDs: String): String;

    /** Return updates allowed state of the forest with the given ID. **/
    forestUpdatesAllowed(forestId: String): String;

    /** Return the name of the database with the given ID. **/
    databaseName(databaseId: String): String;

    /** Tests if a database is a replica of a foreign database. **/
    databaseIsReplica(databaseId: String): Object;

    /** Returns the most recent commit timestamp for which a query on the database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
    databaseNonblockingTimestamp(databaseId: String): String;

    /** Returns the most recent commit timestamp for which a query on the database including its foreign database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
    databaseGlobalNonblockingTimestamp(databaseId: String): String;

    /** Return the name of the App Server with the given ID. **/
    serverName(id: String): String;

    /** Return the name of the forest with the given ID. **/
    forestName(forestId: String): String;

    /** Return the host of the forest with the given id. **/
    forestHost(id: String): String;

    /** Returns a sequence of the IDs of all the databases in the system. **/
    databases(): String;

    /** Returns a sequence of the IDs of all the forests in the system. **/
    forests(): String;

    /** Returns the database ID corresponding to the database to which the specified forest belongs. **/
    forestDatabases(forest: String): String;

    /** Returns the document in the file specified by $location. **/
    documentGet(location: String, options?: Object): Node;

    /** Returns the documents from the database in a directory. Note that these are database documents, not from the filesystem; if you want documents from a filesystem directory, use xdmp:filesystem-directoryxdmp.filesystemDirectory instead. **/
    directory(uri: String, depth?: String): Node;

    /** Returns a sequence of properties documents, one for each document in the specified directory that has a corresponding properties document. **/
    directoryProperties(uri: String, depth?: String): Node;

    /** Returns a sequence of properties documents, one for each document in the specified collection(s) that has a corresponding properties document. **/
    collectionProperties(uri?: String): Node;

    /** Returns locks of documents in a directory. **/
    directoryLocks(uri: String, depth?: String): Node;

    /** Returns locks of documents in a collection. **/
    collectionLocks(uri?: String): Node;

    /** Returns the content type of the given URI as matched in the mimetypes configuration. xdmp:content-type continues to work too. **/
    uriContentType(uri: String): String;

    /** Returns the format of the given URI as matched in the mimetypes configuration. **/
    uriFormat(uri: String): String;

    /** Returns the property values for a document's property. Throws XDMP-DOCNOTFOUND if there is no document at the specifed URI. **/
    documentGetProperties(uri: String, property: Object): Node;

    /** Returns whether a given action on the specified document URI would succeed. **/
    access(uri: String, action: String): Object;

    /** Sends the http GET method to the specified URI. Returns the http response as well as whatever information is identified by the specified URI (for example, an html document). **/
    httpGet(uri: String, options?: Object): String;

    /** Sends the http HEAD method to the specified URI. Returns the http response header for the specified URI. **/
    httpHead(uri: String, options?: Object): String;

    /** Sends the http OPTIONS method to the specified URI. Returns the http response for the specified URI. **/
    httpOptions(uri: String, options?: Object): String;

    /** Sends an http DELETE request to the http server specified in the URI to delete the specified resource. The server should respond if the request is to be completed, but a response is not guaranteed. Also, even if the server does respond, it does not guarantee that the request has been or will be completed. **/
    httpDelete(uri: String, options?: Object): String;

    /** Sends the http POST request to the server. **/
    httpPost(uri: String, options?: Object, data?: Node): String;

    /** Sends an HTTP PUT request to an HTTP server. The HTTP server should return a response, which will differ depending on the action the HTTP server takes for the PUT. **/
    httpPut(uri: String, options?: Object, data?: Node): String;

    /** Converts plaintext into base64-encoded string. **/
    base64Encode(plaintext: String): String;

    /** Converts base64-encoded string to plaintext. **/
    base64Decode(encoded: String): String;

    /** Returns a binary node made up of a subset of the given binary node. **/
    subbinary(source: Node, startingLocation: Number, length?: Number): Node;

    /** Returns an external binary node. **/
    externalBinary(path: String, startingLocation?: Number, length?: Number): Node;

    /** Returns the size of the data, in bytes, represented by a binary node. **/
    binarySize(source?: Node): String;

    /** Test whether or not a binary node represents an external binary. **/
    binaryIsExternal(source: Node): Object;

    /** Check whether a binary node is a small binary. **/
    binaryIsSmall(source: Node): Object;

    /** Check whether a binary node is a large binary. **/
    binaryIsLarge(source: Node): Object;

    /** Return the path to the external file associated with an external binary document. **/
    externalBinaryPath(source: Node): String;

    /** Signal a trace event. If trace events are activated and the event is enabled, the trace event is logged. **/
    trace(name: String, value: String): void;

    /** Returns the ID of the host named in the parameter. Returns the ID of the current host if no parameter is specified. **/
    host(name?: String): String;

    /** Returns the name of the host ID specified as the parameter. Returns the current host if no name is specified. **/
    hostName(ID?: String): String;

    /** Returns a sequence of the IDs of all the hosts in the system. **/
    hosts(): String;

    /** Returns the ID of the cluster named in the parameter. Returns the ID of the current cluster if no parameter is specified. **/
    cluster(name?: String): String;

    /** Returns the name of the cluster with the specified ID. Returns the name of the current cluster if no ID is specified. **/
    clusterName(id?: String): String;

    /** Returns the IDs of the foreign clusters. **/
    foreignClusters(): String;

    /** Returns the ID(s) of the App Server specified in the parameter. Returns the ID of the current App Server if no parameter is specified. **/
    server(name?: String, group?: String): String;

    /** Returns a sequence of the IDs of all the App Servers in the system. **/
    servers(): String;

    /** Returns a sequence of the IDs of all the groups in the system. **/
    groups(): String;

    /** Returns the ID of the group specified in the parameter. Returns the ID of the current group if no parameter is specified. **/
    group(name?: String): String;

    /** Returns the name of the group with the given ID. Returns the name of the current group if no parameter is specified. **/
    groupName(groupID?: String): String;

    /** Returns the IDs of all hosts belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
    groupHosts(groupID?: String): String;

    /** Returns the IDs of all App Servers belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
    groupServers(groupID?: String): String;

    /** Returns the unique key of the current request. **/
    request(): String;

    /** Returns the current root path for modules. **/
    modulesRoot(): String;

    /** Returns the specified string, converting all of the characters with diacritics to characters without diacritics. **/
    diacriticLess(string: String): String;

    /** Returns the canonical URI for the given URI, if it represents a valid collation. A canonical URI is the unique string MarkLogic Server uses to identify a given collation. The canonical URI string places any attributes that occur in the URI in a predefined order, and it removes any attributes that are redundant due to locale defaults. **/
    collationCanonicalUri(collationUri: String): String;

    /** Returns the array values as a ValueIterator. **/
    arrayValues(Array: Array, flatten?: Object): Object;

    /** Delays for a specific amount of time. **/
    sleep(msec: Number): void;

    /** Returns the schema-defined content-type of an element ("empty", "simple", "element-only", or "mixed"). **/
    elementContentType(element: Node): String;

    /** Returns a well-formatted XQuery module. **/
    prettyPrint(xquery: String): String;

    /** Construct a context-independent string from a QName. This string is of the form "{namespaceURI}localname" and is suitable for use as a map key. **/
    keyFromQName(name: Object): String;

    /** Construct a QName from a string of the form "{namespaceURI}localname". This function is useful for constructing Clark notation parameters for the xdmp:xslt-eval and xdmp:xslt-invoke functions. **/
    QNameFromKey(key: String): Object;

    /** Create a multipart encoding of the specified node. The returned binary node can be passed to xdmp:http-post. The manifest is modeled after the manifest that is passed to zip:create, with the headers element being the same as is described for xdmp:http-get allowing users to add arbitrary headers to each part. If a content-type header is not specified for a part, it will be determined if possible from the content. There should be one part element for each node in the content sequence. Each part also has an optional options node to control how xml or text will be serialized. The two options are the same as for xdmp:save. <parts> <part> <headers> <Content-Type>image/jpeg</Content-Type> <headers> <options> <output-encoding>...</output-encoding> <output-sgml-character-entities>...</output-sgml-character-entities> </options> </part> </parts> **/
    multipartEncode(separator: String, manifest: Node, content: Node): Node;

    /** Extract the parts from a multipart encoding. The first item in the sequence is a manifest, and the remaining items are the decoded parts. An attempt will be made to determine the type of content based on headers such as the part's content-type. If possible, an element will be returned, falling back to an xs:string, and finally binary(). The options control how the parts are unpacked, and are similar to xdmp:zip-get - default-namespace, repair, format, default-language, and encoding. The options apply to all parts, so specifying a format of binary will cause all parts to be returned as binary, and specifying text will cause all parts to be returned as xs:string if possible, falling back to binary() if necessary. This is useful if different parts need different options, in which case the resulting strings can each be passed to xdmp:unquote() with appropriate options. **/
    multipartDecode(separator: String, data: Node, options?: Node): Node;

    /** Analyzes binary, text, or XML data and suggests possible pairs of encoding and language, with a confidence score for each pair. Scores of 10 and above are high confidence recommendations. The results are given in order of decreasing score. Accuracy may be poor for short documents. **/
    encodingLanguageDetect(document: Node): Object;

    /** Converts an encoded byte sequence, passed in as a binary node, from the specified encoding to a unicode string. **/
    binaryDecode(encoded: Node, encodingName: String): String;

    /** Returns a sequence of forest IDs in the specified host. **/
    hostForests(ID: String): String;

    /** Returns an element containing a summary of validation errors in a node. **/
    validate(node: Node, mode?: String, typeName?: Object): Node;

    /** Converts a 64 bit timestamp value to an xs:dateTime. **/
    timestampToWallclock(timestamp: String): Date;

    /** Converts an xs:dateTime to a 64 bit timestamp value. **/
    wallclockToTimestamp(timestamp: Date): String;

    /** Returns timestamp of last configuration changed **/
    configurationTimestamp(name?: String): String;

    /** Returns ldap search result. The function returns a ValueIterator containing objects, where each object is an ldap attribute with its value. **/
    ldapSearch(query: String, options?: Object): Object;

    /** Returns an ldap entry. **/
    ldapLookup(DN: String, options?: Object): Object;


  }
  interface cts {

    /** Returns true if any fragment is selected by the search, false if no fragments are selected. This can be used as a fast existence check. **/
    exists(query: Object, options?: String, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns the number of fragments selected by a search. This can be used as a fast estimate of the number results. **/
    estimate(query: Object, options?: String, qualityWeight?: Number, forestIds?: String, maximum?: Number): Number;

    /** Returns an XML element recording information about how the given search will be processed by the index. The information is a structured representation of the information provided in the error log when query trace is enabled. The query will be processed up to the point of getting an estimate of the number of fragments returned by the index. **/
    plan(query: Object, options?: String, qualityWeight?: Number, forestIds?: String, maximum?: Number): Object;


  }
  interface map {


  }
  interface sem {

    /** Creates a sem:binding object, which is a sub-type of json:object (and map:map). **/
    binding(map?: Node): Object;


  }
  interface json {


  }
}
