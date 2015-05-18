// Type definitions for Extensions
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Extension.xml

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
    strftime(format: string, value: dateTime): string;

    /** Returns true if any fragment is selected by an expression, false if no fragments are selected. This can be used as a fast existence check. **/
    exists(expression: item()): boolean;

    /** Returns true if any fragment is selected by the search, false if no fragments are selected. This can be used as a fast existence check. **/
    exists(query: query, options?: order|xs:string), qualityWeight?: double, forestIds?: number): Boolean;

    /** Returns the number of fragments selected by an expression. This can be used as a fast estimate of the number of items in a sequence. **/
    estimate(expression: item(), maximum?: double): number;

    /** Returns the number of fragments selected by a search. This can be used as a fast estimate of the number results. **/
    estimate(query: query, options?: order|xs:string), qualityWeight?: double, forestIds?: number, maximum?: double): number;

    /** Returns an XML element recording information about how the given expression will be processed by the index. The information is a structured representation of the information provided in the error log when query trace is enabled. The query will be processed up to the point of getting an estimate of the number of fragments returned by the index. **/
    plan(expression: item(), maximum?: double): element();

    /** Returns an XML element recording information about how the given search will be processed by the index. The information is a structured representation of the information provided in the error log when query trace is enabled. The query will be processed up to the point of getting an estimate of the number of fragments returned by the index. **/
    plan(query: query, options?: order|xs:string), qualityWeight?: double, forestIds?: number, maximum?: double): array;

    /** Returns a boolean showing whether the given expression is suitable to use with xdmp:plan. Expressions that are fully searchable are "plannable"; that is, they will return query plan output when used with xdmp:plan. **/
    plannable(expression: item()): boolean;

    /** Returns the current MarkLogic Server version. **/
    version(): string;

    /** Returns the XQuery language version of the calling module. Currently supported XQuery versions are: "0.9-ml": The legacy MarkLogic XQuery version. This was the only XQuery version available on MarkLogic Server 3.2 and earlier. It is based on the May 2003 XQuery Draft Recommendation, with MarkLogic extensions "1.0-ml": XQuery version 1.0, with MarkLogic extensions. This is the preferred version of XQuery beginning with release 4.0. "1.0": Strict XQuery version 1.0. This XQuery version complies as closely as possible with the published XQuery 1.0 specification. **/
    xqueryVersion(): string;

    /** Returns the operating-system platform upon which MarkLogic Server is running ("solaris", "winnt", "linux", or "macosx"). **/
    platform(): string;

    /** Returns the hardware architecture upon which MarkLogic Server is running. If xdmp:platform() returns "linux", it will return "x86_64" or "i686. If xdmp:platform() returns "solaris", it will return "amd64" or "sparcv9". If xdmp:platform() returns "winnt", it will return "amd64" or "i686". If xdmp:platform() returns "macosx", it will return "x86_64". **/
    architecture(): string;

    /** Returns a string whose value corresponds to the path of the node. **/
    path(node: node(), includeDocument?: boolean): string;

    /** Returns a string representing the description of a given item sequence. If you take the output of the xdmp:describe function and evaluate it as an XQuery program, it returns the item(s) input to the function. **/
    describe(item: item(), maxSequenceLength?: number, maxItemLength?: number): string;

    /** Returns the 32-bit hash of a string. **/
    hash32(string: string): number;

    /** Returns the 64-bit hash of a string. **/
    hash64(string: string): number;

    /** Combines an initial hash with a subsequent hash. **/
    step64(initial: number, step: number): number;

    /** Add two 64-bit integer values, discarding overflow. **/
    add64(x: number, y: number): number;

    /** AND two 64-bit integer values. **/
    and64(x: number, y: number): number;

    /** Muliply two 64-bit integer values, discarding overflow. **/
    mul64(x: number, y: number): number;

    /** NOT a 64-bit integer value. **/
    not64(x: number): number;

    /** OR two 64-bit integer values. **/
    or64(x: number, y: number): number;

    /** XOR two 64-bit integer values. **/
    xor64(x: number, y: number): number;

    /** Left-shift a 64-bit integer value. **/
    lshift64(x: number, y: number): number;

    /** Right-shift a 64-bit integer value. **/
    rshift64(x: number, y: number): number;

    /** Returns a random unsigned integer between 0 and a number up to 64 bits long. **/
    random(max?: number): number;

    /** Parses a hexadecimal string, returning an integer. **/
    hexToInteger(hex: string): number;

    /** Returns a hexadecimal representation of an integer. **/
    integerToHex(val: number): string;

    /** Parses an octal string, returning an integer. **/
    octalToInteger(octal: string): number;

    /** Returns an octal representation of an integer. **/
    integerToOctal(val: number): string;

    /** Returns the system timestamp for this request if the request is a query statement. Returns the empty sequence if the current request is an update statement. **/
    requestTimestamp(): number;

    /** Returns the database ID of the security database associated with the current database. **/
    securityDatabase(databaseId?: number): number;

    /** Returns the database ID of the schema database associated with the current database. **/
    schemaDatabase(databaseId?: number): number;

    /** Returns the database ID of the modules database. Returns 0 if the current App Server uses the file system for its modules. **/
    modulesDatabase(): number;

    /** Returns the database ID of the triggers database associated with the current database. **/
    triggersDatabase(databaseId?: number): number;

    /** Returns the unevaluated serialized representation of the input parameter as a string. **/
    quote(arg: item(), options?: map)): string;

    /** Parses a string as XML, returning one or more document nodes. **/
    unquote(arg: string, defaultNamespace?: string, options?: string): document-node();

    /** Logs a message to the log file <install_dir>/Logs/ErrorLog.txt. The log message is sent as soon as this function is called, even if the program from which it is called has not completed. **/
    log(msg: item(), level?: string): void;

    /** Retrieves the current server log level. **/
    logLevel(): string;

    /** Returns the current value of the resource meters for this query sequence as a JSON node. **/
    queryMeters(): Object;

    /** Returns the elapsed time since the start of processing of this query. Gives the same information as the elapsed-time element of the xdmp:query-meters output, but has less overhead than calling xdmp:query-meters. **/
    elapsedTime(): dayTimeDuration;

    /** Enables or disables tracing of this query. When query tracing is enabled, "info" level messages are logged detailing the search optimizations performed. **/
    queryTrace(enabled: boolean): void;

    /** Returns the list of path namespaces for the given database id. **/
    databasePathNamespaces(dbid?: number): ValueIterator;

    /** Returns the document-uri property of the parameter or its ancestor. **/
    nodeUri(node: node()): string;

    /** Returns the database id where the parameter is stored. If the specified node does not come from a document in a database, then xdmp:node-database returns an empty list. **/
    nodeDatabase(node: node()): number;

    /** Returns the current MarkLogic product edition. **/
    productEdition(): string;

    /** Returns the current MarkLogic product environment. **/
    productEnvironment(): string;

    /** Returns the locks for one or more documents or directories. Returns the locks for all documents and directories in the database if no parameter is given. **/
    documentLocks(uri?: string): document-node();

    /** Returns a sequence of properties documents, one for each of the specified documents that has a corresponding properties document. If no documents are specified, returns a sequence of properties documents for all documents in the database that have a corresponding properties document. **/
    documentProperties(uri?: string): document-node();

    /** Returns the quality of the specified document if the document exists. Otherwise, returns the empty sequence. **/
    documentGetQuality(uri: string): number;

    /** Returns timestamp of the most recent visible update to a document, lock, or property. Returns the empty sequence if no document, lock, or property exists. **/
    documentTimestamp(uri: string): number;

    /** Returns the forest ID of the forest in which a document (or a lock or a property) with the specified URI is stored. Otherwise, returns the empty sequence. **/
    documentForest(uri: string, forestIds?: number): number;

    /** Returns the ID of the forest specified as the parameter. Throws XDMP-NOSUCHFOREST if no forest exists at the specified ID. **/
    forest(name: string): number;

    /** Returns the ID of the database named in the parameter. Returns the ID of the current database if no parameter is specified. Throws XDMP-NOSUCHDB if no database exists for the specified name. **/
    database(name?: string): number;

    /** Returns a sequence of forest IDs in the specified database. **/
    databaseForests(databaseId: number, includeReplicas?: boolean): number;

    /** Returns the forest ID for each specified forest or for each forest's replica if the forest is currently experiencing a local disk failover. **/
    forestOpenReplica(forestIDs: number): number;

    /** Return updates allowed state of the forest with the given ID. **/
    forestUpdatesAllowed(forestId: number): string;

    /** Return the name of the database with the given ID. **/
    databaseName(databaseId: number): string;

    /** Tests if a database is a replica of a foreign database. **/
    databaseIsReplica(databaseId: number): boolean;

    /** Returns the most recent commit timestamp for which a query on the database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
    databaseNonblockingTimestamp(databaseId: number): number;

    /** Returns the most recent commit timestamp for which a query on the database including its foreign database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
    databaseGlobalNonblockingTimestamp(databaseId: number): number;

    /** Return the name of the App Server with the given ID. **/
    serverName(id: number): string;

    /** Return the name of the forest with the given ID. **/
    forestName(forestId: number): string;

    /** Return the host of the forest with the given id. **/
    forestHost(id: number): number;

    /** Returns a sequence of the IDs of all the databases in the system. **/
    databases(): number;

    /** Returns a sequence of the IDs of all the forests in the system. **/
    forests(): number;

    /** Returns the database ID corresponding to the database to which the specified forest belongs. **/
    forestDatabases(forest: number): number;

    /** Returns the document in the file specified by $location. **/
    documentGet(location: string, options?: map)): node();

    /** [DEPRECATED: use xdmp:document-get instead] Returns the document in the XML file specified by $path. This function is deprecated and will be removed from a future release. Use xdmp:document-get instead. **/
    get(path: string, defaultNamespace?: string, options?: string): node();

    /** Returns the documents from the database in a directory. Note that these are database documents, not from the filesystem; if you want documents from a filesystem directory, use xdmp:filesystem-directoryxdmp.filesystemDirectory instead. **/
    directory(uri: string, depth?: string): document-node();

    /** Returns a sequence of properties documents, one for each document in the specified directory that has a corresponding properties document. **/
    directoryProperties(uri: string, depth?: string): document-node();

    /** Returns a sequence of properties documents, one for each document in the specified collection(s) that has a corresponding properties document. **/
    collectionProperties(uri?: string): document-node();

    /** Returns locks of documents in a directory. **/
    directoryLocks(uri: string, depth?: string): document-node();

    /** Returns locks of documents in a collection. **/
    collectionLocks(uri?: string): document-node();

    /** Returns the content type of the given URI as matched in the mimetypes configuration. xdmp:content-type continues to work too. **/
    uriContentType(uri: string): string;

    /** Returns the format of the given URI as matched in the mimetypes configuration. **/
    uriFormat(uri: string): string;

    /** Returns the property values for a document's property. Throws XDMP-DOCNOTFOUND if there is no document at the specifed URI. **/
    documentGetProperties(uri: string, property: QName): element();

    /** Returns whether a given action on the specified document URI would succeed. **/
    access(uri: string, action: string): boolean;

    /** Sends the http GET method to the specified URI. Returns the http response as well as whatever information is identified by the specified URI (for example, an html document). **/
    httpGet(uri: string, options?: map)): item();

    /** Sends the http HEAD method to the specified URI. Returns the http response header for the specified URI. **/
    httpHead(uri: string, options?: map)): item();

    /** Sends the http OPTIONS method to the specified URI. Returns the http response for the specified URI. **/
    httpOptions(uri: string, options?: map)): item();

    /** Sends an http DELETE request to the http server specified in the URI to delete the specified resource. The server should respond if the request is to be completed, but a response is not guaranteed. Also, even if the server does respond, it does not guarantee that the request has been or will be completed. **/
    httpDelete(uri: string, options?: map)): item();

    /** Sends the http POST request to the server. **/
    httpPost(uri: string, options?: map), data?: node()): item();

    /** Sends an HTTP PUT request to an HTTP server. The HTTP server should return a response, which will differ depending on the action the HTTP server takes for the PUT. **/
    httpPut(uri: string, options?: map), data?: node()): item();

    /** Converts plaintext into base64-encoded string. **/
    base64Encode(plaintext: string): string;

    /** Converts base64-encoded string to plaintext. **/
    base64Decode(encoded: string): string;

    /** Returns a binary node made up of a subset of the given binary node. **/
    subbinary(source: binary(), startingLocation: double, length?: double): binary();

    /** Returns an external binary node. **/
    externalBinary(path: string, startingLocation?: double, length?: double): binary();

    /** Returns the size of the data, in bytes, represented by a binary node. **/
    binarySize(source?: binary()): number;

    /** Test whether or not a binary node represents an external binary. **/
    binaryIsExternal(source: binary()): boolean;

    /** Check whether a binary node is a small binary. **/
    binaryIsSmall(source: binary()): boolean;

    /** Check whether a binary node is a large binary. **/
    binaryIsLarge(source: binary()): boolean;

    /** Return the path to the external file associated with an external binary document. **/
    externalBinaryPath(source: binary()): string;

    /** Signal a trace event. If trace events are activated and the event is enabled, the trace event is logged. **/
    trace(name: string, value: item()): void;

    /** Set the value of a variable to the specified expression. The xdmp:set command allows you to introduce changes to the state (side effects) of a query by changing the value of a variable to something other than what it is bound to. **/
    set(variable: item(), expr: item()): void;

    /** Returns the ID of the host named in the parameter. Returns the ID of the current host if no parameter is specified. **/
    host(name?: string): number;

    /** Returns the name of the host ID specified as the parameter. Returns the current host if no name is specified. **/
    hostName(ID?: number): string;

    /** Returns a sequence of the IDs of all the hosts in the system. **/
    hosts(): number;

    /** Returns the ID of the cluster named in the parameter. Returns the ID of the current cluster if no parameter is specified. **/
    cluster(name?: string): number;

    /** Returns the name of the cluster with the specified ID. Returns the name of the current cluster if no ID is specified. **/
    clusterName(id?: number): string;

    /** Returns the IDs of the foreign clusters. **/
    foreignClusters(): number;

    /** Returns the ID(s) of the App Server specified in the parameter. Returns the ID of the current App Server if no parameter is specified. **/
    server(name?: string, group?: number): number;

    /** Returns a sequence of the IDs of all the App Servers in the system. **/
    servers(): number;

    /** Returns a sequence of the IDs of all the groups in the system. **/
    groups(): number;

    /** Returns the ID of the group specified in the parameter. Returns the ID of the current group if no parameter is specified. **/
    group(name?: string): number;

    /** Returns the name of the group with the given ID. Returns the name of the current group if no parameter is specified. **/
    groupName(groupID?: number): string;

    /** Returns the IDs of all hosts belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
    groupHosts(groupID?: number): number;

    /** Returns the IDs of all App Servers belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
    groupServers(groupID?: number): number;

    /** Returns the unique key of the current request. **/
    request(): number;

    /** Returns the current root path for modules. **/
    modulesRoot(): string;

    /** Returns the specified string, converting all of the characters with diacritics to characters without diacritics. **/
    diacriticLess(string: string): string;

    /** Returns the canonical URI for the given URI, if it represents a valid collation. A canonical URI is the unique string MarkLogic Server uses to identify a given collation. The canonical URI string places any attributes that occur in the URI in a predefined order, and it removes any attributes that are redundant due to locale defaults. **/
    collationCanonicalUri(collationUri: string): string;

    /** Creates a map. **/
    map(map?: map)): map;

    /** Constructs a new map by combining the keys from the maps given as an argument. If a given key exists in more than one argument map, the value from the last such map is used. **/
    new(maps?: map): map;

    /** Constructs a new map with a single entry consisting of the key and value specified as arguments. This is particularly helpful when constructing used as part of an argument to map:new(). **/
    entry(key: string, value: item()): map;

    /** Put a value into a map at the given key. **/
    put(map: map, key: string, value: item()): void;

    /** Get a value from a map. **/
    get(map: map, key: string): item();

    /** Returns true if the key exists in the map. **/
    contains(map: map, key: string): boolean;

    /** Get the keys used in the map. **/
    keys(map: map): string;

    /** Clear a map. **/
    clear(map: map): void;

    /** Returns the number of keys used in the map. **/
    count(map: map): number;

    /** Delete a value from a map. **/
    delete(map: map, key: string): void;

    /** Creates a sem:binding object, which is a sub-type of json:object (and map:map). **/
    binding(map?: object)): binding;

    /** Creates a JSON object, which is a kind of map with a fixed and ordered set of keys. **/
    object(map?: object)): map;

    /** Creates a JSON object. **/
    objectDefine(keys?: string): object;

    /** Creates a (JSON) array, which is like a sequence of values, but allows for nesting. **/
    array(array?: array)): array;

    /** Constructs an array from a sequence of items. **/
    toArray(items?: item(), limit?: double, zero?: item()): array;

    /** Returns the array values as an XQuery sequence. **/
    arrayValues(array: array, flatten?: boolean): item();

    /** Returns the array values as a ValueIterator. **/
    arrayValues(Array: array, flatten?: Boolean): ValueIterator;

    /** Returns the size of the array. **/
    arraySize(array: array): number;

    /** Sets a value in an array at a specified position. **/
    setItemAt(array: array, pos: double, value: item()): void;

    /** Resize the array to the new size. If the new size is greater than the old size, the new entries will be null. If the new size if smaller than the old size, the extra entries will be removed. **/
    arrayResize(array: array, newSize: number, zero?: item()): void;

    /** Push a value to the end of the array, increasing the size of the array by one. **/
    arrayPush(array: array, item: item()): void;

    /** Pop a value from the end of the array. **/
    arrayPop(array: array): item();

    /** Extract a subarray from an array, producing a new array. The second and third arguments to this function operate similarly to those of fn:subsequence for XQuery sequences. **/
    subarray(array: array, startingLoc: double, length?: double): array;

    /** Returns the JSON null value, which is an empty sequence to XQuery, but not a ValueIterator when passed to JavaScript. **/
    null(): void;

    /** Delays for a specific amount of time. **/
    sleep(msec: number): void;

    /** Evaluates the expression in the context of a specific set of namespace bindings. **/
    withNamespaces(nsbindings: string|map:map), expr: item()): item();

    /** Returns the schema-defined content-type of an element ("empty", "simple", "element-only", or "mixed"). **/
    elementContentType(element: element()): string;

    /** Returns a well-formatted XQuery module. **/
    prettyPrint(xquery: string): string;

    /** Construct a context-independent string from a QName. This string is of the form "{namespaceURI}localname" and is suitable for use as a map key. **/
    keyFromQName(name: QName): string;

    /** Construct a QName from a string of the form "{namespaceURI}localname". This function is useful for constructing Clark notation parameters for the xdmp:xslt-eval and xdmp:xslt-invoke functions. **/
    QNameFromKey(key: string): QName;

    /** Create a multipart encoding of the specified node. The returned binary node can be passed to xdmp:http-post. The manifest is modeled after the manifest that is passed to zip:create, with the headers element being the same as is described for xdmp:http-get allowing users to add arbitrary headers to each part. If a content-type header is not specified for a part, it will be determined if possible from the content. There should be one part element for each node in the content sequence. Each part also has an optional options node to control how xml or text will be serialized. The two options are the same as for xdmp:save. <parts> <part> <headers> <Content-Type>image/jpeg</Content-Type> <headers> <options> <output-encoding>...</output-encoding> <output-sgml-character-entities>...</output-sgml-character-entities> </options> </part> </parts> **/
    multipartEncode(separator: string, manifest: element(), content: node()): binary();

    /** Extract the parts from a multipart encoding. The first item in the sequence is a manifest, and the remaining items are the decoded parts. An attempt will be made to determine the type of content based on headers such as the part's content-type. If possible, an element will be returned, falling back to an xs:string, and finally binary(). The options control how the parts are unpacked, and are similar to xdmp:zip-get - default-namespace, repair, format, default-language, and encoding. The options apply to all parts, so specifying a format of binary will cause all parts to be returned as binary, and specifying text will cause all parts to be returned as xs:string if possible, falling back to binary() if necessary. This is useful if different parts need different options, in which case the resulting strings can each be passed to xdmp:unquote() with appropriate options. **/
    multipartDecode(separator: string, data: binary(), options?: element()): node();

    /** Analyzes binary, text, or XML data and suggests possible pairs of encoding and language, with a confidence score for each pair. Scores of 10 and above are high confidence recommendations. The results are given in order of decreasing score. Accuracy may be poor for short documents. **/
    encodingLanguageDetect(document: node()): ValueIterator;

    /** Converts an encoded byte sequence, passed in as a binary node, from the specified encoding to a unicode string. **/
    binaryDecode(encoded: node(), encodingName: string): string;

    /** Returns a sequence of forest IDs in the specified host. **/
    hostForests(ID: number): number;

    /** Returns an element containing a summary of validation errors in a node. **/
    validate(node: node(), mode?: string, typeName?: QName): validation-errors);

    /** Converts a 64 bit timestamp value to an xs:dateTime. **/
    timestampToWallclock(timestamp: number): dateTime;

    /** Converts an xs:dateTime to a 64 bit timestamp value. **/
    wallclockToTimestamp(timestamp: dateTime): number;

    /** Returns timestamp of last configuration changed **/
    configurationTimestamp(name?: string): number;

    /** Returns the value of its argument, evaluated eagerly. **/
    eager(arg: item()): item();

    /** Returns the value of its argument, evaluated lazily. **/
    lazy(arg: item()): item();

    /** Returns ldap search result. The function returns a ValueIterator containing objects, where each object is an ldap attribute with its value. **/
    ldapSearch(query: string, options?: map)): ValueIterator;

    /** Returns an ldap entry. **/
    ldapLookup(DN: string, options?: map)): ValueIterator;


  }
}
