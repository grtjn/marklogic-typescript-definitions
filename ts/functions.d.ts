///<reference path="./types.d.ts" />
// Type definitions for AlertModule CustomeDictionaryModule CustomLanguageModule ConfigurationManagementModule CPFModule ClassifierBuiltins ClustererBuiltins Entity PeriodBuiltins SearchBuiltins SearchBuiltins Walkers DLSModule EnityEnrichModule entity-services AccessorBuiltins AnyURIBuiltins BooleanBuiltins ContextBuiltins DurationDateTimeBuiltins ErrorBuiltins FormatBuiltins NodeBuiltins NumericBuiltins QNameBuiltins StringBuiltins SequenceBuiltins StringBuiltins TraceBuiltins XSLTBuiltins GeospatialBuiltins Geo GML GeoJSON KML GeoRSS JSON MathBuiltins Extensions ProfileBuiltins Extensions redaction SchemaBuiltins Extensions Extensions semantics SpellingModule SQLBuiltins SSL ExtractionTemplatesBuiltins TDEModule TemporalModule ThesaurusModule TieredStorageModule ViewsModule AdminBuiltins OfficeConvert AppServerBuiltins Crypt Eval Extensions FunctionBuiltins DocumentFilter PDFConvert JavaScriptBuiltins Extensions LastLogin SearchBuiltins SMTPClient Extensions SecurityBuiltins Extensions SearchBuiltins StatusBuiltins Tidy TransactionBuiltins Extensions UpdateBuiltins Zip
// Definitions:


/**
The Alerting API function module is used to create alerting
			applications.  The Alerting API abstracts the security
			considerations and the reverse search functionality
			from the developer.  The Alerting API is installed as
			the following file:install_dir/Modules/MarkLogic/alert.xqywhere install_dir is the directory in which
	      MarkLogic Server is installed.To use the alert module in your own Server-Side JavaScript
         modules, include the following line in your JavaScript program:var alert = require("/MarkLogic/alert"); The Alerting API requires a valid alerting license key.  Without a
	      valid license key, the functions in the Alerting API will throw an
	      exception.  Additionally, a valid alerting license key is
	     required to use the reverse index.

**/

declare module alert {

    /** This function returns the description of a given action. **/
  function actionGetDescription(action: Object): string;

    /** This function returns the module of a given action. **/
  function actionGetModule(action: Object): string;

    /** This function returns the module database of a given action. **/
  function actionGetModuleDb(action: Object): number;

    /** This function returns the module root of a given action. **/
  function actionGetModuleRoot(action: Object): string;

    /** This function returns the name of a given action. **/
  function actionGetName(action: Object): string;

    /** This function returns the options of a given action. **/
  function actionGetOptions(action: Object): Object;

    /** This function inserts the specified action into the collection. The caller must have the alert-admin privilege to call this function. **/
  function actionInsert(configUri: string, action: Object): null;

    /** This function removes the named action from the database or throws an exception if the action does not exist. The caller must have the alert-admin privilege to call this function. **/
  function actionRemove(configUri: string, name: string): null;

    /** This function returns the action with the description of the action updated. **/
  function actionSetDescription(action: Object, description: string): Object;

    /** This function returns the action with the module of the action updated. **/
  function actionSetModule(action: Object, module: string): Object;

    /** This function sets the module database of a given action. **/
  function actionSetModuleDb(action: Object, moduleDb: number): Object;

    /** This function sets the module root of a given action. **/
  function actionSetModuleRoot(action: Object, moduleRoot: string): Object;

    /** This function returns the action with the name of the action updated. **/
  function actionSetName(action: Object, name: string): Object;

    /** This function returns the action with the options of the action updated. **/
  function actionSetOptions(action: Object, options: Object): Object;

    /** Remove an alerting configuration identified by the specified URI. If the config does not exist, an exception will be thrown. Any triggers associated with the alerting configuration will be automatically removed. Any actions and/or rules associated by the config will also be removed as well as the protected collection. The caller must have the alert-admin privilege to call this function. **/
  function configDelete(uri: string): null;

    /** Gets the config associated with the specified URI. The user must have the alert-user privilege to call this function. **/
  function configGet(uri: string): Object;

    /** This function returns the CPF domain IDs set in the specified alerting configuration. **/
  function configGetCpfDomainIds(config: Object): Sequence<number>;

    /** This function returns the CPF domain names set in the specified alerting configuration. **/
  function configGetCpfDomainNames(config: Object): Array<any>;

    /** This function provides returns the description set in the specified alerting configuration. **/
  function configGetDescription(config: Object): string;

    /** This function returns the ID of the specified alerting configuration. **/
  function configGetId(config: Object): number;

    /** This function returns the name set in the specified an alerting configuration. **/
  function configGetName(config: Object): string;

    /** This function returns the options set in specified alerting configuration. **/
  function configGetOptions(config: Object): Object;

    /** This function returns the trigger IDs set in the specified alerting configuration. **/
  function configGetTriggerIds(config: Object): Array<any>;

    /** This function returns the URI set in the specified alerting configuration. **/
  function configGetUri(config: Object): string;

    /** Inserts a config into the database. If this is the first time the config has been inserted, a protected collection will be created for the config's URI. A user must have the alert-admin privilege to call this function. **/
  function configInsert(config: Object): null;

    /** This function sets the CPF domain IDs in the specified alerting configuration. **/
  function configSetCpfDomainIds(config: Object, ids: MLArray<number>): Object;

    /** This function sets the CPF domain names in the specified alerting configuration. **/
  function configSetCpfDomainNames(config: Object, names: MLArray<string>): Object;

    /** This function sets the description within the specified alerting configuration. **/
  function configSetDescription(config: Object, description: string): Object;

    /** This function sets the name in the specified alerting configuration. **/
  function configSetName(config: Object, name: string): Object;

    /** This function sets the options in the specified alerting configuration. **/
  function configSetOptions(config: Object, options: Object): Object;

    /** This function sets the trigger IDs in the specified alerting configuration. **/
  function configSetTriggerIds(config: Object, ids: MLArray<number>): Object;

    /** This function sets the URI in the specified alerting configuration. **/
  function configSetUri(config: Object, uri: string): Object;

    /** Create triggers that invoke the standard alerting trigger module. The caller must have the alert-admin privilege. The returned trigger IDs must be associated with the config using alert.configSetTriggerIds and then saving the updated config with alert.configInsert. **/
  function createTriggers(uri: string, events: MLArray<MLNodeOrObject<any>>): Array<any>;

    /** Returns a list of all rules associated with the specified config that match the specified document. You must have the alert-admin privilege to call this function. **/
  function findMatchingRules(configUri: string, doc: MLNodeOrObject<any>): Array<any>;

    /** This function retrieves all the named actions in the specified config URI. Returns a list of actions. **/
  function getActions(configUri: string, names: MLArray<string>): Array<any>;

    /** This function returns all rules visible to the current user. **/
  function getAllRules(configUri: string, query: cts.Query): Array<any>;

    /** This function returns all rules associated with the current user. **/
  function getMyRules(configUri: string, query: cts.Query): Array<any>;

    /** Finds the rules that match the specified document and invokes their associated actions. The actions will be invoked as the user who owns each rule in a different transaction. **/
  function invokeMatchingActions(configUri: string, doc: MLNodeOrObject<any>, options: Object): null;

    /** This function creates the specified action. When a rule associated with the action matches a document, the action's module will be invoked with the following external variables set: var configUri; var doc; var rule; var action; All actions must accept these external variables. **/
  function makeAction(name: string, description: string, moduleDb: number, moduleRoot: string, module: string, options: Object): Object;

    /** Create an alerting configuration associated with a particular URI. The URI will be used to create a protected collection when the config is inserted into the database with alert.configInsert. This URI will also be used as a directory for all documents (config, actions, and rules) associated with the config. **/
  function makeConfig(uri: string, name: string, description: string, options: Object): Object;

    /** Create a standard logging action named "log". Rules that reference this action must provide an directory property that specifies where the log file should be created. The inserted document will have a random long integer ID and its filename will be ID.json within the specified directory. Rules that reference this action may also provide options with an permission property containing a series of permission properties and/or an collections object containing collection properties that specify the permissions and collections for the log document. This information is simply passed through to xdmp.documentInsert. An example of the rule's options is as follows: {"directory":"/some/directory", "permissions":[{"capability":"read","role-id":"129382323"}], "collections":["http://acme.com/alert-log"]} The log document insertion will be performed as the user who created the rule, and the user must have permission to create documents in any collections they specify. The log-id is a random number chosen by the action. **/
  function makeLogAction(): Object;

    /** This function creates the specified rule. If the caller does not have the alert-admin privilege then $user-id must be the ID of the current user from the security database. If $user-id is 0, it will be automatically replaced with the current user's ID. **/
  function makeRule(name: string, description: string, userId: number, query: cts.Query, action: string, options: Object): Object;

    /** Remove triggers whose IDs are listed in the config. The caller must have the alert-admin privilege. This function writes the updated configuration to the database, so if you need to delete the configuration as well (using alert.configDelete, for example), you should do so in another transaction. **/
  function removeTriggers(uri: string): null;

    /** This function creates a query to find rules with any of the specified actions. Returns a query be passed to alert.getMyRules or alert.getAllRules. **/
  function ruleActionQuery(actions: MLArray<string>): cts.Query;

    /** This function returns the action of a given rule. **/
  function ruleGetAction(rule: Object): string;

    /** This function returns the description of a given rule. **/
  function ruleGetDescription(rule: Object): string;

    /** This function returns the ID of a given rule. **/
  function ruleGetId(rule: Object): number;

    /** This function returns the name of a given rule. **/
  function ruleGetName(rule: Object): string;

    /** This function returns the options of a given rule. **/
  function ruleGetOptions(rule: Object): Object;

    /** Get the cts.query corresponding to the rule's query expression. **/
  function ruleGetQuery(rule: Object): cts.Query;

    /** This function returns the user ID of a given rule. **/
  function ruleGetUserId(rule: Object): number;

    /** This function creates a query to find rules with any of the specified IDs. Returns a query to be passed to alert.getMyRules or alert.getAllRules. **/
  function ruleIdQuery(ids: MLArray<number>): cts.Query;

    /** This function inserts rule into the database associated with the specified alerting configuration. A user must have the alert-user privilege to call this function. **/
  function ruleInsert(configUri: string, rule: Object): null;

    /** This function creates a query to find rules with any of the specified names. Returns a query to be passed to alert.getMyRules or alert.getAllRules. **/
  function ruleNameQuery(names: MLArray<string>): cts.Query;

    /** This function removes the specified rule from the collection. A user must have the alert-user privilege to call this function. An exception is thrown if the rule does not exist. A user must have the alert-admin privilege to delete other users' rules. **/
  function ruleRemove(configUri: string, id: number): null;

    /** This function returns the rule with the action updated. **/
  function ruleSetAction(rule: Object, action: string): Object;

    /** This function returns the rule with the description of the rule updated. **/
  function ruleSetDescription(rule: Object, description: string): Object;

    /** This function returns the rule with the name of the rule updated. **/
  function ruleSetName(rule: Object, name: string): Object;

    /** This function returns the rule with the options of the rule updated. **/
  function ruleSetOptions(rule: Object, options: Object): Object;

    /** Set the cts:query corresponding to the rule's query expression. **/
  function ruleSetQuery(rule: Object, query: cts.Query): Object;

    /** This function returns the rule with the user ID updated. If the caller does not have the alert-config privilege, an exception will be thrown if the caller attempts to save a rule for a user other than himself. **/
  function ruleSetUserId(rule: Object, userId: number): Object;

    /** This function creates a query to find rules with any of the specified user IDs. Returns a query to be passed to alert.getMyRules or alert.getAllRules. **/
  function ruleUserIdQuery(userIds: MLArray<number>): cts.Query;

    /** Finds the rules that match the specified document and spawns their associated actions. The spawned tasks will run as the user that owns the rule. **/
  function spawnMatchingActions(configUri: string, doc: MLNodeOrObject<any>, options: {[key:string]:any}): null;

}

/**
The custom dictionary functions are designed to help you manage dictionaries
  that customize the stemming and tokenization in MarkLogic Server.
  The custom dictionary function module is installed as the following file:install_dir/Modules/MarkLogic/custom-dictionary.xqywhere install_dir is the directory in which
  MarkLogic Server is installed.To use the custom dictionary library in your own code, use a
    requires statement similar to the following:const cdict = require('/MarkLogic/custom-dictionary.xqy');For more details, see
 Custom Dictionaries for Tokenizing and Stemming in the Search Developer's Guide
**/

interface cdictFunctions {

    /** Delete a custom dictionary. **/
  dictionaryDelete(lang: string, tokenization?: boolean|null|undefined): null;

    /** Retrieve the custom dictionary for a language. **/
  dictionaryRead(lang: string, tokenization?: boolean|null|undefined): MLNode<any>;

    /** Insert or update a custom dictionary for language. **/
  dictionaryWrite(lang: string, dict: MLNodeOrObject<any>, tokenization?: boolean|null|undefined): null;

    /** Return the ISO language codes for all licensed languages. **/
  getLanguages(): Sequence<string>;

}
declare var cdict:cdictFunctions

/**
Use the custom language management functions to configure plugin
   stemmers and tokenizers for specific languages in MarkLogic Server.
   The custom language module is installed as the following file:install_dir/Modules/MarkLogic/custom-language.xqywhere install_dir is the directory in which
  MarkLogic Server is installed.Many of these functions provide new configuration information. You must
   explictly update the configuration by calling
   clang.languageConfigWrite
   in the same statement that you use the functions in order for them to take
   effect.
   To use this module in your own code, use a require
   statement similar to the following:const clang = require('/MarkLogic/custom-language.xqy');Calling clang.languageConfigWrite restarts the server so that your changes can take effect.For more details, see
 Configuring Tokenization and Stemming Plugins in the Search Developer's Guide.
**/

interface clangFunctions {

    /** This function returns user languages configuration with any existing configuration item for a given language removed. **/
  deleteUserLanguage(config: MLNodeOrObject<any>, lang: string): MLNode<any>;

    /** This function removes all custom language configuration from the cluster configuration files. Calling this function restarts MarkLogic Server. **/
  languageConfigDelete(): null;

    /** This function reads the custom language configuration specification from the cluster configuration files. **/
  languageConfigRead(): MLNode<any>;

    /** This function saves a custom language configuration specification to the cluster configuration files. Calling this function restarts MarkLogic Server. **/
  languageConfigWrite(config: MLNodeOrObject<any>): null;

    /** This function constructs a custom lexer configuration item, suitable for use with clang.userLanguagePlugin. **/
  lexer(variant: string, normalization?: string|null|undefined, args?: MLArray<any>|null|undefined, library?: string|null|undefined): MLNode<any>;

    /** This function constructs a custom stemmer configuration item, suitable for use with clang.userLanguagePlugin. **/
  stemmer(variant: string, normalization?: string|null|undefined, args?: MLArray<any>|null|undefined, library?: string|null|undefined): MLNode<any>;

    /** Add or replace a configuration item for a language in the given language configuration item, and return the new configuration. **/
  updateUserLanguage(config: MLNodeOrObject<any>, userLang: MLNodeOrObject<any>): MLNode<any>;

    /** This function constructs a user language configuration item, suitable for use with clang.languageConfigUpdate. **/
  userLanguage(lang: string, plugin: MLNodeOrObject<any>, tokenType?: string|null|undefined): MLNode<any>;

    /** This function constructs a user language plugin configuration item, suitable for use with clang.userLanguage. **/
  userLanguagePlugin(library: string, lexer: MLNodeOrObject<any>, stemmer: MLNodeOrObject<any>, delegate?: boolean|null|undefined): MLNode<any>;

}
declare var clang:clangFunctions

/**
The configuration management functions are used to to retrieve a configuration of an
      individual resource, a set of resources, or a full cluster, to generate a configuration from
      scenarios, and to apply a configuration.The configuration management function module is installed at the following file:install_dir/Modules/MarkLogic/cma.sjswhere install_dir is the directory in which MarkLogic Server is
      installed.To use this module in your JavaScript code, include a require statement
        similar to the following in your code:const cma = require('/MarkLogic/cma.sjs');
**/

interface cmaFunctions {

    /** Apply a named configuration, overriding parameters and setting options. **/
  applyConfig(config: MLArray<any>|MLArray<any>, configOptions?: {[key:string]:any}|null|undefined, params?: {[key:string]:any}|null|undefined, format?: string|null|undefined): null|MLNode<any>;

    /** Retrieve an individual resource, set of resources, or full cluster configuration; generate a configuration from scenarios. **/
  generateConfig(config?: MLNode<any>|MLNodeOrObject<any>|null|undefined, configOptions?: {[key:string]:any}|null|undefined, defaultParams?: {[key:string]:any}|null|undefined, format?: string|null|undefined, scenario?: string|null|undefined): MLNode<any>|MLNode<any>;

}
declare var cma:cmaFunctions

/**

The Content Processing Framework supports content-processing applications
that require multi-step processsing. For more details, see the
Content Processing Framework Guide.
 The CPF module is installed as part of the Content Processing Framework.
These functions are used by content processing actions to manage the state of
the document as it is being processed.
To use the CPF module as part of your own XQuery module, include the
following line in your XQuery prolog:
import module namespace cpf = "http://marklogic.com/cpf"
         at "/MarkLogic/cpf/cpf.xqy";The library namespace prefix cpf is not predefined in
the server.
**/

interface cpfFunctions {

    /** Verify that the current transition is the correct one for the document. If a document is touched from multiple threads certain race conditions may apply that will cause the lookup of the transition to end up out of sync with the transition action when it is actually executed. In this case the action should do nothing; not even call cpf:success or cpf:failure. Some other CPF thread has already done the work on this document. **/
  checkTransition(docid: string, transition: MLNodeOrObject<any>): boolean;

    /** Fetch a trace of the error that caused the document's processing to fail, if any. **/
  documentGetError(doc: string): MLNode<any>;

    /** Determine the date and time of the last update to the document's content, if any. **/
  documentGetLastUpdated(doc: string): Date;

    /** Determine the document's current processing status, if any. The status will be one of "created", "updated", "deleted", "active", or "done". **/
  documentGetProcessingStatus(doc: string): string;

    /** Determine the document's current state, if any. **/
  documentGetState(doc: string): string;

    /** Set the document's error trace to the given value. **/
  documentSetError(doc: string, error: MLNodeOrObject<any>): null;

    /** Set the date and time of the document's last update. **/
  documentSetLastUpdated(doc: string, lastUpdated: Date): null;

    /** Set the document's processing status to the given value. **/
  documentSetProcessingStatus(doc: string, processingStatus: string): null;

    /** Set the document's state to the given state. **/
  documentSetState(doc: string, state: string): null;

    /** Concludes the state action in failure, advancing the state as defined by the state transition. The state action must call this method to indicate failure, passing the external variables $cpf:document-uri, $cpf:transition, and $cpf:exception as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-failure state, if any, and marks the document as processed in the current state. **/
  failure(docid: string, transition: MLNodeOrObject<any>, exception: MLNodeOrObject<any>, overrideState: string): null;

    /** Concludes the action successfully, advancing the state as defined by the transition. The action must call this method to indicate completion of successful processing, passing the external variables $cpf:document-uri and $cpf:transition as parameters. If the document does not exist, do nothing. Side effects: Advances the document state to the transition's on-success state, if any, and marks the document as processed in the current state. **/
  success(docid: string, transition: MLNodeOrObject<any>, overrideState: string): null;

}
declare var cpf:cpfFunctions

/**
The classifier built-in functions perform automatic classification of
documents using training data. The classifiers that result from
training are represented in XML. The classifier APIs and the XML output
from cts:train conform to the
classifier.xsd schema, located in the Config directory
under the directory in which MarkLogic Server is installed. The clusterer built-in functions perform dynamic clustering of nodes.
The result clusters are represented in XML. The clusterer APIs and the XML output
from cts:cluster conform to the
clusterer.xsd schema, located in the Config directory
under the directory in which MarkLogic Server is installed.
The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
 Use the search built-in functions to search XML, JSON, and text documents,
and document properties, and to browse word and value lexicons.Though you can use these functions from both XQuery
and Server-Side JavaScript, JavaScript developers should consider using
the fluent native JavaScript Search (jsearch) API instead. For details, see
 Creating JavaScript Search Applications in the Search Developer's Guide.For more details, see the Search Developer's Guide and the following
Search function sub-categories:cts:query Constructorscts:order ConstructorsGeospatial ConstructorsGeospatial LexiconGeospatial OperationsLexiconMath LexiconSearchSearch ClusteringTemporalFor a fluent and natural JavaScript interface to the same capabilities,
see the JavaScript Search (jsearch) API. The search built-in functions are XQuery functions used to perform text
searches. The search functions are designed for use with XML and JSON
structured text. Searches that use these functions use the indexes and
are designed to return results quickly.Though you can use these functions from both XQuery
and Server-Side JavaScript, JavaScript developers should consider using
the fluent native JavaScript Search (jsearch) API instead. For details, see
 Creating JavaScript Search Applications in the Search Developer's Guide.There are built-in functions to search through documents
(cts.search,
cts.contains
 and cts.highlight);
there is a function to tokenize text into different types
(cts.tokenize),
and there are functions to retrieve result characteristics (for example
cts.quality
and )cts.score.
There are also built-in functions to browse word and value lexicons
(cts.words,
cts.elementValues,
and so on.) The lexicon built-in functions require the appropriate lexicons
to be enabled in the Admin interface.There are also functions to compose a cts:query,
as well as accessor functions to retrieve the parameter values
from a cts query.  These functions enable you to build arbitrarily complex cts queries. Each
constructor function has corresponding accessor functions, which you can use
to retrieve the parts of a constructed query.Included in these functions is the
cts.registeredQuery
function, which provides a mechanism to precompute and store in the cache
unfiltered cts query result primitives. MarkLogic Server allows you to create lexicons, which are lists
of unique words or values, either throughout an entire database (words only)
or within named elements or attributes (words or values). Also, you can
define lexicons that allow quick access to the document and collection
URIs in the database, and you can create word lexicons on named
fields. A word lexicon stores all of the unique, case-sensitive,
diacritic-sensitive words, either in a database, in an element
defined by a QName, or in an attribute defined by a QName. A
value lexicon stores all of the unique values for an element
or an attribute defined by a QName (that is, the entire and exact contents
of the specified element or attribute).  Value lexicons use range indexes,
which store all of the pairs of values that appear in the same fragment. A
geospatial lexicon returns geospatial values from the geospatial
index. You can also use the value lexicon functions to calculate buckets
of values that occur within a specified range of values.
A URI lexicon stores the URIs of the documents in a database, and a
collection lexicon stores the URIs of all collections
in a database.This section describes the lexicon APIs. MarkLogic Server allows you to create geospatial lexicons, which
are lists of unique values of geospatial data.  A geospatial lexicon returns geospatial values from the geospatial
index. The geospatial index is required for using the geospatial lexicon
functions.This section describes the geospatial lexicon APIs. MarkLogic Server provides aggregate math functions that make use of value lexicons
to calculate results. The math lexicon functions differ from the math functions in the
math: namespace in that math lexicon functions take frequency into
consideration.This section describes the math lexicon APIs. MarkLogic Server provides functions that check the validity of an XPath
within the context of several features.This section describes the XPath validation APIs.
The geospatial built-in functions are XQuery functions defined to operate on
geospatial values.
 Use the geospatial constructor functions to create geospatial
  primitive types such as points, boxes, circles, and polygons from raw
  data. You can use the resulting constructs in geospatial queries,
  geospatial lexicon analysis, and geospatial operations such as
  tests for containment or interesection. Use the following geospatial built-in functions to perform operations
  on geospatial values, such as region containment or intersection, and
  conversion between MarkLogic geospatial primitive values and standard
  formats such as WKT. The following functions are deprecated. You should use the
  corresponding functions in the geo namespace instead.
  For example, use geo:distance instead of
  cts:distance in XQuery; use geo.distance
  instead of cts.distance in Server-Side JavaScript.
The math built-in functions.
 The extension built-in functions are miscellaneous extensions to the
   XQuery core library, including functions for evaluating
   strings as XQuery expressions and functions to get information about
   documents in the database. The function values functions allow you to pass a function value
   as a parameter to another function.  You can also pass in the location
   of the implementation of a function, allowing the caller to
   specify a different version of a function to use in the context of
   making that function. The MarkLogic Server extension functions are XQuery extensions that
 return MarkLogic Server-specific information, such as the version of
 MarkLogic Server, the IDs of the hosts in the cluster, and so on.  The extension functions provide miscellaneous extensions to
 JavaScript. The HTTP functions allow you to make various HTTP calls from
 within your XQuery program. The search extension functions complement the Search Built-in functions. The XML extension functions provide XML functionality such as
 parsing a string as XML. The XQuery Context functions are XQuery extensions that allow
 you to start a new query context, manipulate the current context, or
 get information about the current context. The Documents, Directories, Properties, and Locks functions are XQuery built-in
 extension functions that get information from documents, directories,
 properties, and locks from MarkLogic Server.  All of these are stored
 as fragments in a database.
  The JavaScript Global Object functions are MarkLogic-specific JavaScript
  functions that extend the Global Object.  These functions are available
  in the Global space, without any prefixing.

 Methods and properties on the Error Object.

 Methods and properties on the xs.yearMonthDuration Object.

 Methods and properties on the xs.dayTimeDuration Object.

 Methods and properties on the xs.dateTime Object.

 Methods and properties on the xs.date Object.

 Methods and properties on the xs.time Object.

 Methods and properties on the xs.gYearMonth Object.

 Methods and properties on the xs.gYear Object.

 Methods and properties on the xs.gMonthDay Object.

 Methods and properties on the xs.gMonth Object.

 Methods and properties on the TypeInfo Object.

 Methods and properties on the NodeBuilder Object.

 Methods and properties on the Value Object.

 [DEPRECATED: Only available for type checking; use
Sequence instead. For more details,
 on transitioning your code, see
 ValueIterator in the JavaScript Reference Guide. ]
 Methods and properties on the ValueIterator Object.

 Methods and properties on the Node Object.

 Methods and properties on the NodeList Object.

 Methods and properties on the NamedNodeMap Object.

 Methods and properties on the XMLDocument Object.

 Methods and properties on the Element Object (for XML Elements).

 Methods and properties on the Attr Object (for XML attributes).

 Methods and properties on the CharacterData Object.

 Methods and properties on the TypeInfo Object.

**/

interface ctsFunctions {

    /** Executes a user-defined extension aggregate function against a value lexicon or n-way co-occurence of multiple value lexicons. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function. If a specified range index does not exist an error is raised. If the "ordered" or "proximity=" option is specified, the range index must have range value positions set to true, otherwise an error is raised. **/
  aggregate(nativePlugin: string, aggregateName: string, rangeIndexes: MLArray<cts.Reference>, argument?: MLArray<any>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a query specifying the set difference of the matches specified by two sub-queries. **/
  andNotQuery(positiveQuery: cts.Query, negativeQuery: cts.Query): cts.AndNotQuery;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
  andNotQueryNegativeQuery(query: cts.AndNotQuery): cts.Query;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
  andNotQueryPositiveQuery(query: cts.AndNotQuery): cts.Query;

    /** Returns a query specifying the intersection of the matches specified by the sub-queries. **/
  andQuery(queries: MLArray<cts.Query>, options?: MLArray<string>|null|undefined): cts.AndQuery;

    /** Returns the options for the specified query. **/
  andQueryOptions(query: cts.AndQuery): Sequence<string>;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
  andQueryQueries(query: cts.AndQuery): Sequence<cts.Query>;

    /** Returns the average of the values given a value lexicon. This function works like cts:avg except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:avg, especially on large clusters. **/
  avgAggregate(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): any;

    /** Returns a query specifying that matches to $matching-query should have their search relevance scores boosted if they also match $boosting-query. **/
  boostQuery(matchingQuery: cts.Query, boostingQuery: cts.Query): cts.BoostQuery;

    /** Returns the boosting (second parameter) query used to construct the specified boost query. **/
  boostQueryBoostingQuery(query: cts.BoostQuery): cts.Query;

    /** Returns the matching (first parameter) query used to construct the specified boost query. **/
  boostQueryMatchingQuery(query: cts.BoostQuery): cts.Query;

    /** Returns a geospatial box value. **/
  box(south: number, west: number, north: number, east: number): cts.Box;

    /** Returns a box's eastern boundary. **/
  boxEast(box: cts.Box): number;

    /** Returns a box's northern boundary. **/
  boxNorth(box: cts.Box): number;

    /** Returns a box's southern boundary. **/
  boxSouth(box: cts.Box): number;

    /** Returns a box's western boundary. **/
  boxWest(box: cts.Box): number;

    /** Returns a geospatial circle value. **/
  circle(radius: number, center: cts.Point): cts.Circle;

    /** Returns a circle's center point. **/
  circleCenter(circle: cts.Circle): cts.Point;

    /** Returns a circle's radius. **/
  circleRadius(circle: cts.Circle): number;

    /** Classifies an array of nodes based on training data. The training data is in the form of a classifier specification, which is generated from the output of cts.train. Returns labels for each of the input documents in the same order as the input document. **/
  classify(dataNodes: Array<any>, classifier: Object, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined, trainingNodes?: Array<any>|null|undefined): Array<any>;

    /** Produces a set of clusters from an array of nodes. The nodes can be any set of nodes, and are typically the result of a cts.search operation. **/
  cluster(nodes: Array<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Object;

    /** Returns values from the collection lexicon that match the specified wildcard pattern. This function requires the collection-lexicon database configuration parameter to be enabled. If the collection lexicon database configuration parameter is not enabled, an exception is thrown. **/
  collectionMatch(pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching documents in the collections with the given URIs. It will match both documents and properties documents in the collections with the given URIs. **/
  collectionQuery(uris: MLArray<string>): cts.CollectionQuery;

    /** Returns the URIs used to construct the specified query. **/
  collectionQueryUris(query: cts.CollectionQuery): Sequence<string>;

    /** Creates a reference to the collection lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  collectionReference(options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns values from the collection lexicon. This function requires the collection-lexicon database configuration parameter to be enabled. If the collection-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  collections(start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a geospatial complex polygon value. **/
  complexPolygon(outer: cts.Polygon, inner: MLArray<cts.Polygon>): cts.ComplexPolygon;

    /** Returns a complex polygon's inner polygons. **/
  complexPolygonInner(complexPolygon: cts.ComplexPolygon): Sequence<cts.Polygon>;

    /** Returns a complex polygon's outer polygon. **/
  complexPolygonOuter(complexPolygon: cts.ComplexPolygon): cts.Polygon;

    /** Returns the confidence of a node, or of the context node if no node is provided. **/
  confidence(node?: MLNodeOrObject<any>|null|undefined): number;

    /** Creates a confidence-based ordering clause, for use as an option to cts.search. **/
  confidenceOrder(options?: MLArray<string>|null|undefined): cts.Order;

    /** Returns true if any of a sequence of values matches a query. **/
  contains(nodes: MLArray<any>, query: cts.Query): boolean;

    /** Returns the frequency-weighted correlation given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:correlation except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  correlation(value1: cts.Reference, value2: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns the count of a value lexicon. This function works like cts:count except it performs the counting in parallel in all data nodes then aggregates the values. It generally performs better than cts:count, especially on large clusters. **/
  countAggregate(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns the frequency-weighted sample covariance given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math.covariance except each pair in the co-occurrence is counted cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  covariance(value1: cts.Reference, value2: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns the frequency-weighted covariance of the population given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math.covarianceP except each pair in the co-occurrence is counted cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  covarianceP(value1: cts.Reference, value2: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Deregister a registered query, explicitly releasing the associated resources. **/
  deregister(id: number): null;

    /** Returns a query matching documents in the directories with the given URIs. **/
  directoryQuery(uris: MLArray<string>, depth?: string|null|undefined): cts.DirectoryQuery;

    /** Returns the depth used to construct the specified query. **/
  directoryQueryDepth(query: cts.DirectoryQuery): string;

    /** Returns the URIs used to construct the specified query. **/
  directoryQueryUris(query: cts.DirectoryQuery): Sequence<string>;

    /** Return the most "relevant" terms in the model nodes (that is, the terms with the highest scores). **/
  distinctiveTerms(nodes: MLArray<any>, options?: MLNodeOrObject<any>|null|undefined): Object;

    /** Returns the document stored in the database at the specified URI.To retrieve multiple documents stored at multiple URIs, use fn.doc instead. **/
  doc(uri: string): DocumentNode<any>;

    /** Returns a query that matches all documents where $query matches any document fragment. When searching documents, document-properties, or document-locks, this function provides a convenient way to additionally constrain the search against any document fragment. **/
  documentFragmentQuery(query: cts.Query): cts.DocumentFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  documentFragmentQueryQuery(query: cts.DocumentFragmentQuery): cts.Query;

    /** Creates a document-based ordering clause, for use as an option to cts.search. **/
  documentOrder(options?: MLArray<string>|null|undefined): cts.Order;

    /** Returns a query matching documents with the given URIs. It will match both documents and properties documents with the given URIs. **/
  documentQuery(uris: MLArray<string>): cts.DocumentQuery;

    /** Returns the URIs used to construct the specified query. **/
  documentQueryUris(query: cts.DocumentQuery): Sequence<string>;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element attribute pair index for each prarent element and attribute pair specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown.The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on.For each non-empty bucket, a cts.box value is returned. By default, the cts.box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts.box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementAttributePairGeospatialBoxes(parentElementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, latitudeBounds?: MLArray<number>|null|undefined, longitudeBounds?: MLArray<number>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Box>;

    /** Returns a query matching elements by name which has specific attributes representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementAttributePairGeospatialQuery(elementName: MLArray<xs.QName>, latitudeAttributeNames: MLArray<xs.QName>, longitudeAttributeNames: MLArray<xs.QName>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementAttributePairGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryElementName(query: cts.ElementAttributePairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryLatitudeName(query: cts.ElementAttributePairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryLongitudeName(query: cts.ElementAttributePairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementAttributePairGeospatialQueryOptions(query: cts.ElementAttributePairGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementAttributePairGeospatialQueryRegion(query: cts.ElementAttributePairGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributePairGeospatialQueryWeight(query: cts.ElementAttributePairGeospatialQuery): number;

    /** Returns values from the specified element attribute pair geospatial value lexicon(s) that match the specified wildcard pattern. Element attribute pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element attribute pair geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementAttributePairGeospatialValueMatch(elementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns values from the specified element-attribute-pair geospatial value lexicon(s). element-attribute-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-attribute-pair geospatial index for each of the combinations specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementAttributePairGeospatialValues(elementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, start?: cts.Point|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns a cts:query matching element-attributes by name with a range-index entry equal to a given value. Searches with the cts:element-attribute-range-query constructor require an attribute range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
  elementAttributeRangeQuery(elementName: MLArray<xs.QName>, attributeName: MLArray<xs.QName>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementAttributeRangeQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributeRangeQueryAttributeName(query: cts.ElementAttributeRangeQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributeRangeQueryElementName(query: cts.ElementAttributeRangeQuery): Sequence<xs.QName>;

    /** Returns the operator used to construct the specified query. **/
  elementAttributeRangeQueryOperator(query: cts.ElementAttributeRangeQuery): string;

    /** Returns the options for the specified query. **/
  elementAttributeRangeQueryOptions(query: cts.ElementAttributeRangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  elementAttributeRangeQueryValue(query: cts.ElementAttributeRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeRangeQueryWeight(query: cts.ElementAttributeRangeQuery): number;

    /** Creates a reference to an element attribute value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  elementAttributeReference(element: xs.QName, attribute: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns value co-occurrences from the specified element or element-attribute value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element or element/attribute pairs, then an exception is thrown. **/
  elementAttributeValueCoOccurrences(elementName1: xs.QName, attributeName1: xs.QName, elementName2: xs.QName, attributeName2: xs.QName, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns value co-occurrences from the specified element-attribute value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element and attribute pair specified in the function. If there is not a range index configured for the specified element and attribute pair, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  elementAttributeValueGeospatialCoOccurrences(elementName1: xs.QName, attributeName1: xs.QName, geoElementName: xs.QName, coordChildName1?: xs.QName|null|undefined, coordChildName2?: xs.QName|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified element-attribute value lexicon(s) that match the specified pattern. Element-attribute value lexicons are implemented using range indexes; consequently this function requires an attribute range index for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeValueMatch(elementNames: MLArray<xs.QName>, attributeNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a query matching elements by name with attributes by name with text content equal a given phrase. **/
  elementAttributeValueQuery(elementName: MLArray<xs.QName>, attributeName: MLArray<xs.QName>, text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementAttributeValueQuery;

    /** Returns the attribute QNames used to construct the specified query. **/
  elementAttributeValueQueryAttributeName(query: cts.ElementAttributeValueQuery): Sequence<xs.QName>;

    /** Returns the element QNames used to construct the specified query. **/
  elementAttributeValueQueryElementName(query: cts.ElementAttributeValueQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementAttributeValueQueryOptions(query: cts.ElementAttributeValueQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  elementAttributeValueQueryText(query: cts.ElementAttributeValueQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeValueQueryWeight(query: cts.ElementAttributeValueQuery): number;

    /** Returns value ranges from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown.The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on.If you have string values and you pass a $bounds parameter as in the following call:cts.elementValueRanges(xs.QName("myElement"), ["f", "m"])The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m.For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  elementAttributeValueRanges(elementNames: MLArray<xs.QName>, attributeNames: MLArray<xs.QName>, bounds?: MLArray<any>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeValues(elementNames: MLArray<xs.QName>, attributeNames: MLArray<xs.QName>, start?: any|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns words from the specified element-attribute word lexicon(s) that match a wildcard pattern. This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element-attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeWordMatch(elementNames: MLArray<xs.QName>, attributeNames: MLArray<xs.QName>, pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching elements by name with attributes by name with text content containing a given phrase. **/
  elementAttributeWordQuery(elementName: MLArray<xs.QName>, attributeName: MLArray<xs.QName>, text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementAttributeWordQuery;

    /** Returns the attribute QNames used to construct the specified query. **/
  elementAttributeWordQueryAttributeName(query: cts.ElementAttributeWordQuery): Sequence<xs.QName>;

    /** Returns the element QNames used to construct the specified query. **/
  elementAttributeWordQueryElementName(query: cts.ElementAttributeWordQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementAttributeWordQueryOptions(query: cts.ElementAttributeWordQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  elementAttributeWordQueryText(query: cts.ElementAttributeWordQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeWordQueryWeight(query: cts.ElementAttributeWordQuery): number;

    /** Returns words from the specified element-attribute word lexicon(s). This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element/attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. The words are returned in collation order. **/
  elementAttributeWords(elementNames: MLArray<xs.QName>, attributeNames: MLArray<xs.QName>, start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified element/child combinations, an exception is thrown.The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on.For each non-empty bucket, a cts.box value is returned. By default, the box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts.box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementChildGeospatialBoxes(parentElementNames: MLArray<xs.QName>, childElementNames: MLArray<xs.QName>, latitudeBounds?: MLArray<number>|null|undefined, longitudeBounds?: MLArray<number>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Box>;

    /** Returns a query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementChildGeospatialQuery(parentElementName: MLArray<xs.QName>, childElementNames: MLArray<xs.QName>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementChildGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementChildGeospatialQueryChildName(query: cts.ElementChildGeospatialQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementChildGeospatialQueryElementName(query: cts.ElementChildGeospatialQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementChildGeospatialQueryOptions(query: cts.ElementChildGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementChildGeospatialQueryRegion(query: cts.ElementChildGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  elementChildGeospatialQueryWeight(query: cts.ElementChildGeospatialQuery): number;

    /** Returns values from the specified element child geospatial value lexicon(s) that match the specified wildcard pattern. Element child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element and child specified in the function. If there is not a geospatial index configured for each of the specified elements/child combinations, then an exception is thrown. **/
  elementChildGeospatialValueMatch(elementNames: MLArray<xs.QName>, childNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns values from the specified element-child geospatial value lexicon(s). Element-child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-child geospatial index of for each of the element/child pairs specified in the function. If there is not a range index configured for each of the specified element/child pairs, then an exception is thrown. **/
  elementChildGeospatialValues(elementNames: MLArray<xs.QName>, childNames: MLArray<xs.QName>, start?: cts.Point|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown.The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on.For each non-empty bucket, a cts.box value is returned. By default, the box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts.box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementGeospatialBoxes(elementNames: MLArray<xs.QName>, latitudeBounds?: MLArray<number>|null|undefined, longitudeBounds?: MLArray<number>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Box>;

    /** Returns a query matching elements by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementGeospatialQuery(elementName: MLArray<xs.QName>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementGeospatialQueryElementName(query: cts.ElementGeospatialQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementGeospatialQueryOptions(query: cts.ElementGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementGeospatialQueryRegion(query: cts.ElementGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  elementGeospatialQueryWeight(query: cts.ElementGeospatialQuery): number;

    /** Returns values from the specified element geospatial value lexicon(s) that match the specified wildcard pattern. Element geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, then an exception is thrown. **/
  elementGeospatialValueMatch(elementNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns values from the specified element geospatial value lexicon(s). Geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. **/
  elementGeospatialValues(elementNames: MLArray<xs.QName>, start?: cts.Point|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element pair index for each parent and pair of child elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown.The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on.For each non-empty bucket, a cts.box value is returned. By default, the box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts.box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementPairGeospatialBoxes(parentElementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, latitudeBounds?: MLArray<number>|null|undefined, longitudeBounds?: MLArray<number>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Box>;

    /** Returns a query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementPairGeospatialQuery(elementName: MLArray<xs.QName>, latitudeElementNames: MLArray<xs.QName>, longitudeElementNames: MLArray<xs.QName>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementPairGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryElementName(query: cts.ElementPairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryLatitudeName(query: cts.ElementPairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryLongitudeName(query: cts.ElementPairGeospatialQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementPairGeospatialQueryOptions(query: cts.ElementPairGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementPairGeospatialQueryRegion(query: cts.ElementPairGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  elementPairGeospatialQueryWeight(query: cts.ElementPairGeospatialQuery): number;

    /** Returns values from the specified element pair geospatial value lexicon(s) that match the specified wildcard pattern. Element pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element pair geospatial index for each combination of elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementPairGeospatialValueMatch(elementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns values from the specified element-pair geospatial value lexicon(s). Element-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-pair geospatial index for each of the element combinations specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementPairGeospatialValues(elementNames: MLArray<xs.QName>, latitudeNames: MLArray<xs.QName>, longitudeNames: MLArray<xs.QName>, start?: cts.Point|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Point>;

    /** Returns a cts:query matching elements by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified element and all of its descendants. If the specified query in the second parameter has any cts:element-attribute-*-query constructors, it will search attributes directly on the specified element and attributes on any descendant elements (see the second example below). **/
  elementQuery(elementName: MLArray<xs.QName>, query: cts.Query): cts.ElementQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementQueryElementName(query: cts.ElementQuery): Sequence<xs.QName>;

    /** Returns the query used to construct the element query. **/
  elementQueryQuery(query: cts.ElementQuery): cts.Query;

    /** Returns a cts:query matching elements by name with a range-index entry equal to a given value. Searches with the cts:element-range-query constructor require an element range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
  elementRangeQuery(elementName: MLArray<xs.QName>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementRangeQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementRangeQueryElementName(query: cts.ElementRangeQuery): Sequence<xs.QName>;

    /** Returns the operator used to construct the specified query. **/
  elementRangeQueryOperator(query: cts.ElementRangeQuery): string;

    /** Returns the options for the specified query. **/
  elementRangeQueryOptions(query: cts.ElementRangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  elementRangeQueryValue(query: cts.ElementRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  elementRangeQueryWeight(query: cts.ElementRangeQuery): number;

    /** Creates a reference to an element value lexicon, for use as a parameter to cts.valueTuples, temporal.axisCreate, or any other function that takes an index reference. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  elementReference(element: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified element value lexicon(s). The values are returned as an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  elementValueCoOccurrences(elementName1: xs.QName, elementName2: xs.QName, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns value co-occurrences from the specified element value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element specified in the function. If there is not a range index configured for the specified element, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  elementValueGeospatialCoOccurrences(elementName1: xs.QName, geoElementName: xs.QName, coordChildName1?: xs.QName|null|undefined, coordChildName2?: xs.QName|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified element value lexicon(s) that match the specified wildcard pattern. Element value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, then an exception is thrown. **/
  elementValueMatch(elementNames: MLArray<xs.QName>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a query matching elements by name with text content equal a given phrase. cts:element-value-query only matches against simple elements (that is, elements that contain only text and have no element children). **/
  elementValueQuery(elementName: MLArray<xs.QName>, text?: MLArray<string>|null|undefined, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementValueQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementValueQueryElementName(query: cts.ElementValueQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementValueQueryOptions(query: cts.ElementValueQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  elementValueQueryText(query: cts.ElementValueQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  elementValueQueryWeight(query: cts.ElementValueQuery): number;

    /** Returns value ranges from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown.The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on.If you have string values and you pass a $bounds parameter as in the following call:cts.elementValueRanges(xs.QName("myElement"), ["f", "m"])The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m.For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  elementValueRanges(elementNames: MLArray<xs.QName>, bounds?: MLArray<any>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  elementValues(elementNames: MLArray<xs.QName>, start?: any|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a copy of the node, replacing any elements found with the specified expression. **/
  elementWalk(node: MLNodeOrObject<any>, element: MLArray<xs.QName>, callback: (p1:NodeBuilder,p2:MLNodeOrObject<any>)=>string, builder: NodeBuilder): null;

    /** Returns words from the specified element word lexicon(s) that match a wildcard pattern. This function requires an element word lexicon configured for each of the specified elements in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. **/
  elementWordMatch(elementNames: MLArray<xs.QName>, pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching elements by name with text content containing a given phrase. Searches only through immediate text node children of the specified element as well as any text node children of child elements defined in the Admin Interface as element-word-query-throughs or phrase-throughs; does not search through any other children of the specified element. **/
  elementWordQuery(elementName: MLArray<xs.QName>, text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.ElementWordQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementWordQueryElementName(query: cts.ElementWordQuery): Sequence<xs.QName>;

    /** Returns the options for the specified query. **/
  elementWordQueryOptions(query: cts.ElementWordQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  elementWordQueryText(query: cts.ElementWordQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  elementWordQueryWeight(query: cts.ElementWordQuery): number;

    /** Returns words from the specified element word lexicon. This function requires an element word lexicon for each of the element specified in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. The words are returned in collation order. **/
  elementWords(elementNames: MLArray<xs.QName>, start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a cts:entity object. This is an opaque object you can use to build an entity dictionary. **/
  entity(id: string, normalizedText: string, text: string, type: string): cts.Entity;

    /** Returns a cts:entity-dictionary object. **/
  entityDictionary(entities: MLArray<cts.Entity>, options?: MLArray<string>|null|undefined): cts.EntityDictionary;

    /** Retrieve an entity dictionary previously cached in the database. **/
  entityDictionaryGet(uri: string): cts.EntityDictionary;

    /** Construct a cts:entity-dictionary object by parsing it from a formatted string. **/
  entityDictionaryParse(contents: MLArray<string>, options?: MLArray<string>|null|undefined): cts.EntityDictionary;

    /** Find entities in a node and replace each matched entity with the result returned by a callback function. **/
  entityHighlight(node: MLNodeOrObject<any>, callback: () => any, builder: NodeBuilder, dict?: cts.EntityDictionary|null|undefined): null;

    /** Walk an XML document or element node, evaluating a callback function against any matching entities. This function is similar to cts.entityHighligh in how it processes matched entities, but it differs in what it returns. **/
  entityWalk(node: MLNodeOrObject<any>, callback: () => any, dict?: cts.EntityDictionary|null|undefined): null;

    /** Returns the number of fragments selected by a search. This can be used as a fast estimate of the number results. **/
  estimate(query: cts.Query, options?: MLArray<cts.Order>|MLArray<string>|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined, maximum?: number|null|undefined): number;

    /** Returns true if any fragment is selected by the search, false if no fragments are selected. This can be used as a fast existence check. **/
  exists(query: cts.Query, options?: MLArray<cts.Order>|MLArray<string>|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Boolean;

    /** Returns a query that matches no fragments. **/
  falseQuery(): cts.OrQuery;

    /** Returns a cts:query matching fields by name with a range-index entry equal to a given value. Searches with the cts:field-range-query constructor require a field range index on the specified field name(s); if there is no range index configured, then an exception is thrown. **/
  fieldRangeQuery(fieldName: MLArray<string>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.FieldRangeQuery;

    /** Returns the fieldname used to construct the specified query. **/
  fieldRangeQueryFieldName(query: cts.FieldRangeQuery): Sequence<string>;

    /** Returns the operator used to construct the specified query. **/
  fieldRangeQueryOperator(query: cts.FieldRangeQuery): string;

    /** Returns the options for the specified query. **/
  fieldRangeQueryOptions(query: cts.FieldRangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  fieldRangeQueryValue(query: cts.FieldRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  fieldRangeQueryWeight(query: cts.FieldRangeQuery): number;

    /** Creates a reference to a field value lexicon, for use as a parameter to cts.valueTuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  fieldReference(field: string, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified field value lexicon(s). The values are returned as an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
  fieldValueCoOccurrences(fieldName1: string, fieldName2: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified field value lexicon(s) that match the specified wildcard pattern. Field value lexicons are implemented using range indexes; consequently this function requires a field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, then an exception is thrown. **/
  fieldValueMatch(fieldNames: MLArray<string>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a query matching text content containing a given value in the specified field. If the specified field does not exist, cts:field-value-query throws an exception. If the specified field does not have the index setting field value searches enabled, either for the database or for the specified field, then a cts:search with a cts:field-value-query throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
  fieldValueQuery(fieldName: MLArray<string>, text: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.FieldValueQuery;

    /** Returns the names used to construct the specified cts:field-value-query. **/
  fieldValueQueryFieldName(query: cts.FieldValueQuery): Sequence<string>;

    /** Returns the options for the specified cts:field-value-query. **/
  fieldValueQueryOptions(query: cts.FieldValueQuery): Sequence<string>;

    /** Returns the values used to construct the specified cts:field-value-query. **/
  fieldValueQueryText(query: cts.FieldValueQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  fieldValueQueryWeight(query: cts.FieldValueQuery): number;

    /** Returns value ranges from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a field range index for each element specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown.The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on.If you have string values and you pass a $bounds parameter as in the following call:cts.fieldValueRanges("myField", ["f", "m"])The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m.For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  fieldValueRanges(fieldNames: MLArray<string>, bounds?: MLArray<any>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
  fieldValues(fieldNames: MLArray<string>, start?: any|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns words from the specified field word lexicon(s) that match a wildcard pattern. This function requires an field word lexicon configured for each of the specified fields in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. **/
  fieldWordMatch(fieldNames: MLArray<string>, pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching fields whose content contains the given phrase. If the specified field does not exist, this function throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
  fieldWordQuery(fieldName: MLArray<string>, text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.FieldWordQuery;

    /** Returns the names used to construct the specified cts:field-word-query. **/
  fieldWordQueryFieldName(query: cts.FieldWordQuery): Sequence<string>;

    /** Returns the options for the specified cts:field-word-query. **/
  fieldWordQueryOptions(query: cts.FieldWordQuery): Sequence<string>;

    /** Returns the text used to construct the specified cts:field-word-query. **/
  fieldWordQueryText(query: cts.FieldWordQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  fieldWordQueryWeight(query: cts.FieldWordQuery): number;

    /** Returns words from the specified field word lexicon. This function requires an field lexicon for each of the field specified in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. The words are returned in collation order. **/
  fieldWords(fieldNames: MLArray<string>, start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns the fitness of a node, or of the context node if no node is provided. Fitness is a normalized measure of relevance that is based on how well a node matches the query issued, not taking into account the number of documents in which the query term(s) occur. **/
  fitness(node?: MLNodeOrObject<any>|null|undefined): number;

    /** Creates a fitness-based ordering clause, for use as an option to cts.search. **/
  fitnessOrder(options?: MLArray<string>|null|undefined): cts.Order;

    /** Returns an integer representing the number of times in which a particular value occurs in a value lexicon lookup (for example, cts:element-values). When using the fragment-frequency lexicon option, cts:frequency returns the number of fragments in which the lexicon value occurs. When using the item-frequency lexicon option, cts:frequency returns the total number of times in which the lexicon value occurs in each item. **/
  frequency(value: any): number;

    /** Creates a reference to a geospatial attribute pair range index, for use as a parameter to cts.valueTuples This function will throw an exception if the specified range index does not exist. **/
  geospatialAttributePairReference(element: xs.QName, lat: xs.QName, long: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns boxes derived from the specified point lexicon(s). Point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each $geo-indexes specified in the function. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on.For each non-empty bucket, a cts.box is returned. By default, the box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts.box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  geospatialBoxes(geoIndexes: MLArray<cts.Reference>, latitudeBounds?: MLArray<number>|null|undefined, longitudeBounds?: MLArray<number>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<cts.Box>;

    /** Find value co-occurrences from two geospatial lexicons. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each combination of elements and attributes or JSON properties specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  geospatialCoOccurrences(geoElementName1: xs.QName, child1Name1: xs.QName, child1Name2: xs.QName, geoElementName2: xs.QName, child2Name1?: xs.QName|null|undefined, child2Name2?: xs.QName|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Creates a reference to a geospatial element child range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementChildReference(element: xs.QName, child: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial element pair range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementPairReference(element: xs.QName, lat: xs.QName, long: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial element range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementReference(element: xs.QName, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial json property child range index, for use as a parameter to cts:value-tuples cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyChildReference(property: string, child: string, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial JSON property pair range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyPairReference(property: string, lat: string, long: string, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial json property range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyReference(property: string, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Creates a reference to a geospatial path range index, for use as a parameter to cts.valueTuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialPathReference(pathExpression: string, options?: MLArray<string>|null|undefined, map?: {[key:string]:any}|null|undefined): cts.Reference;

    /** Create a reference to a geospatial region path index, for use as a parameter to cts.geospatialRegionQuery and other query operations on geospatial region indexes. This function throws an exception if the specified region path index does not exist. **/
  geospatialRegionPathReference(pathExpression: string, options?: MLArray<string>|null|undefined, namespaces?: {[key:string]:any}|null|undefined): cts.Reference;

    /** Construct a query to match regions in documents that satisfy a specified relationship relative to other regions. For example, regions in documents that intersect with regions specified in the search criteria. **/
  geospatialRegionQuery(geospatialRegionReference: MLArray<cts.Reference>, operation: string, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.GeospatialRegionQuery;

    /** Returns the comparison operation specified when constructing the input query. **/
  geospatialRegionQueryOperation(query: cts.GeospatialRegionQuery): string;

    /** Returns the options specified when constructing the input query. **/
  geospatialRegionQueryOptions(query: cts.GeospatialRegionQuery): Sequence<string>;

    /** Returns the geospatial region path index reference(s) specified when constructing the input query. **/
  geospatialRegionQueryReference(query: cts.GeospatialRegionQuery): Sequence<cts.Reference>;

    /** Returns the region criteria specified when constructing the input query. **/
  geospatialRegionQueryRegion(query: cts.GeospatialRegionQuery): Sequence<cts.Region>;

    /** Returns the weight specified when constructing the input query. **/
  geospatialRegionQueryWeight(query: cts.GeospatialRegionQuery): number;

    /** Returns a copy of the node, replacing any text matching the query with the specified expression. You can use this function to easily highlight any text found in a query. Unlike fn.replace and other string functions that match literal text, cts.highlight matches every term that matches the search, including stemmed matches or matches with different capitalization. **/
  highlight(node: MLNodeOrObject<any>, query: cts.Query, callback: (p1:NodeBuilder,p2:string,p3:Text,p4:MLArray<cts.Query>,p5:number)=>string, builder: NodeBuilder): null;

    /** Creates a index-based ordering clause, for use as an option to cts.search. **/
  indexOrder(index: cts.Reference, options?: MLArray<string>|null|undefined): cts.Order;

    /** Returns a query matching json properties by name which has specific children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyChildGeospatialQuery(parentPropertyName: MLArray<string>, childPropertyNames: MLArray<string>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyChildGeospatialQuery;

    /** Returns the names used to construct the specified query. **/
  jsonPropertyChildGeospatialQueryChildName(query: cts.JsonPropertyChildGeospatialQuery): Sequence<string>;

    /** Returns the options for the specified query. **/
  jsonPropertyChildGeospatialQueryOptions(query: cts.JsonPropertyChildGeospatialQuery): Sequence<string>;

    /** Returns the names used to construct the specified query. **/
  jsonPropertyChildGeospatialQueryPropertyName(query: cts.JsonPropertyChildGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyChildGeospatialQueryRegion(query: cts.JsonPropertyChildGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyChildGeospatialQueryWeight(query: cts.JsonPropertyChildGeospatialQuery): number;

    /** Returns a query matching json properties by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyGeospatialQuery(propertyName: MLArray<string>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyGeospatialQuery;

    /** Returns the options for the specified query. **/
  jsonPropertyGeospatialQueryOptions(query: cts.JsonPropertyGeospatialQuery): Sequence<string>;

    /** Returns the json property names used to construct the specified query. **/
  jsonPropertyGeospatialQueryPropertyName(query: cts.JsonPropertyGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyGeospatialQueryRegion(query: cts.JsonPropertyGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyGeospatialQueryWeight(query: cts.JsonPropertyGeospatialQuery): number;

    /** Returns a query matching json properties by name which has specific property children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyPairGeospatialQuery(propertyName: MLArray<string>, latitudePropertyNames: MLArray<string>, longitudePropertyNames: MLArray<string>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyPairGeospatialQuery;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryLatitudeName(query: cts.JsonPropertyPairGeospatialQuery): Sequence<string>;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryLongitudeName(query: cts.JsonPropertyPairGeospatialQuery): Sequence<string>;

    /** Returns the options for the specified query. **/
  jsonPropertyPairGeospatialQueryOptions(query: cts.JsonPropertyPairGeospatialQuery): Sequence<string>;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryPropertyName(query: cts.JsonPropertyPairGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyPairGeospatialQueryRegion(query: cts.JsonPropertyPairGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyPairGeospatialQueryWeight(query: cts.JsonPropertyPairGeospatialQuery): number;

    /** Returns a cts:query matching JSON properties by name with a range-index entry equal to a given value. Searches with the cts:json-property-range-query constructor require a property range index on the specified names; if there is no range index configured, then an exception is thrown. **/
  jsonPropertyRangeQuery(propertyName: MLArray<string>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyRangeQuery;

    /** Returns the operator used to construct the specified query. **/
  jsonPropertyRangeQueryOperator(query: cts.JsonPropertyRangeQuery): string;

    /** Returns the options for the specified query. **/
  jsonPropertyRangeQueryOptions(query: cts.JsonPropertyRangeQuery): Sequence<string>;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyRangeQueryPropertyName(query: cts.JsonPropertyRangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  jsonPropertyRangeQueryValue(query: cts.JsonPropertyRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyRangeQueryWeight(query: cts.JsonPropertyRangeQuery): number;

    /** Creates a reference to a JSON property value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  jsonPropertyReference(property: string, options?: MLArray<string>|null|undefined): cts.Reference;

    /** Returns a cts:query matching JSON properties by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified property and all of its descendants. **/
  jsonPropertyScopeQuery(propertyName: MLArray<string>, query: cts.Query): cts.JsonPropertyScopeQuery;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyScopeQueryPropertyName(query: cts.JsonPropertyScopeQuery): Sequence<string>;

    /** Returns the query used to construct the property scope query. **/
  jsonPropertyScopeQueryQuery(query: cts.JsonPropertyScopeQuery): cts.Query;

    /** Returns a query matching JSON properties by name with value equal the given value. For arrays, the query matches if the value of any elements in the array matches the given value. **/
  jsonPropertyValueQuery(propertyName: MLArray<string>, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyValueQuery;

    /** Returns the options for the specified query. **/
  jsonPropertyValueQueryOptions(query: cts.JsonPropertyValueQuery): Sequence<string>;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyValueQueryPropertyName(query: cts.JsonPropertyValueQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  jsonPropertyValueQueryText(query: cts.JsonPropertyValueQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  jsonPropertyValueQueryValue(query: cts.JsonPropertyValueQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyValueQueryWeight(query: cts.JsonPropertyValueQuery): number;

    /** Returns words from the specified JSON property word lexicon(s) that match a wildcard pattern. This function requires a property word lexicon configured for each of the specified properties in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. **/
  jsonPropertyWordMatch(propertyNames: MLArray<string>, pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching JSON properties by name with text content containing a given phrase. Searches only through immediate text node children of the specified property. **/
  jsonPropertyWordQuery(propertyName: MLArray<string>, text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.JsonPropertyWordQuery;

    /** Returns the options for the specified query. **/
  jsonPropertyWordQueryOptions(query: cts.JsonPropertyWordQuery): Sequence<string>;

    /** Returns the name used to construct the specified query. **/
  jsonPropertyWordQueryPropertyName(query: cts.JsonPropertyWordQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  jsonPropertyWordQueryText(query: cts.JsonPropertyWordQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyWordQueryWeight(query: cts.JsonPropertyWordQuery): number;

    /** Returns words from the specified JSON property word lexicon. This function requires a property word lexicon for each of the property specified in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. The words are returned in collation order. **/
  jsonPropertyWords(propertyNames: MLArray<string>, start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a linear model that fits the frequency-weighted data set. The input data is a co-occurrence, formed from the specified value lexicons. The length of the input lexicon sequence should be 2, as currently only simple linear regression model is supported. The first lexicon should be the value of the dependent variable while the other lexicon should be the value of the independent variable. This function works like math:linear-model except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  linearModel(values: MLArray<cts.Reference>, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): math.LinearModel;

    /** Returns a geospatial linestring value. **/
  linestring(vertices: MLArray<cts.Point>): cts.Linestring;

    /** Returns a linestring's vertices. **/
  linestringVertices(linestring: cts.Linestring): Sequence<cts.Point>;

    /** Returns a query that matches all documents where $query matches document-locks. When searching documents or document-properties, cts:locks-fragment-query provides a convenient way to additionally constrain the search against document-locks fragments. **/
  locksFragmentQuery(query: cts.Query): cts.LocksFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  locksFragmentQueryQuery(query: cts.LocksFragmentQuery): cts.Query;

    /** Returns only documents before LSQT or a timestamp before LSQT for stable query results. **/
  lsqtQuery(temporalCollection: string, timestamp?: Date|null|undefined, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.LsqtQuery;

    /** Returns the options for the specified query. **/
  lsqtQueryOptions(query: cts.LsqtQuery): Sequence<string>;

    /** Returns the name of the temporal collection used to construct specified query. **/
  lsqtQueryTemporalCollection(query: cts.LsqtQuery): string;

    /** Returns timestamp used to construct the specified query. **/
  lsqtQueryTimestamp(query: cts.LsqtQuery): Date;

    /** Returns the weight with which the specified query was constructed. **/
  lsqtQueryWeight(query: cts.LsqtQuery): number;

    /** Find regions in documents that have a spatial relationship to one or more caller-supplied regions. **/
  matchRegions(rangeIndexes: MLArray<cts.Reference>, operation: string, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns the maximal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:max, especially on large clusters. **/
  max(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): any;

    /** Returns a frequency-weighted median of a sequence. This function works like math:median except each item in the sequence is repeated cts:frequency times before calculating the median. If $arg is the empty sequence, the function returns the empty sequence. **/
  median(arg: MLArray<number>): number;

    /** Returns the minimal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:min, especially on large clusters. **/
  min(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): any;

    /** Returns a query matching all of the specified queries, where the matches occur within the specified distance from each other. **/
  nearQuery(queries: MLArray<cts.Query>, distance?: number|null|undefined, options?: MLArray<string>|null|undefined, distanceWeight?: number|null|undefined): cts.NearQuery;

    /** Returns the distance used to construct the near query. **/
  nearQueryDistance(query: cts.NearQuery): number;

    /** Returns the options for the specified query. **/
  nearQueryOptions(query: cts.NearQuery): Sequence<string>;

    /** Returns the query sequence used to construct the near query. **/
  nearQueryQueries(query: cts.NearQuery): Sequence<cts.Query>;

    /** Returns the weight with which the specified query was constructed. **/
  nearQueryWeight(query: cts.NearQuery): number;

    /** Returns a query matching the first subquery, where those matches do not occur within 0 distance of the other query. **/
  notInQuery(positiveQuery: cts.Query, negativeQuery: cts.Query): cts.NotInQuery;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
  notInQueryNegativeQuery(query: cts.NotInQuery): cts.Query;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
  notInQueryPositiveQuery(query: cts.NotInQuery): cts.Query;

    /** Returns a query specifying the matches not specified by its sub-query. **/
  notQuery(query: cts.Query): cts.NotQuery;

    /** Returns the query used to construct the specified query. **/
  notQueryQuery(query: cts.NotQuery): cts.Query;

    /** Returns the weight with which the specified query was constructed. **/
  notQueryWeight(query: cts.NotQuery): number;

    /** Returns a query specifying the union of the matches specified by the sub-queries. **/
  orQuery(queries: MLArray<cts.Query>, options?: MLArray<string>|null|undefined): cts.OrQuery;

    /** Returns the options for the specified query. **/
  orQueryOptions(query: cts.OrQuery): Sequence<string>;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
  orQueryQueries(query: cts.OrQuery): Sequence<cts.Query>;

    /** Parses a query string **/
  parse(query: string, bindings?: {[key:string]:any}|null|undefined): cts.Query;

    /** Returns the part of speech for a cts:token, if any. **/
  partOfSpeech(token: cts.Token): string;

    /** Returns a query matching path expressions whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  pathGeospatialQuery(pathExpression: MLArray<string>, regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.PathGeospatialQuery;

    /** Returns the options for the specified query. **/
  pathGeospatialQueryOptions(query: cts.PathGeospatialQuery): Sequence<string>;

    /** Returns the path expressions used to construct the specified query. **/
  pathGeospatialQueryPathExpression(query: cts.PathGeospatialQuery): Sequence<string>;

    /** Returns the geographical regions with which the specified query was constructed. **/
  pathGeospatialQueryRegion(query: cts.PathGeospatialQuery): Sequence<cts.Region>;

    /** Returns the weight with which the specified query was constructed. **/
  pathGeospatialQueryWeight(query: cts.PathGeospatialQuery): number;

    /** Returns a cts:query matching documents where the content addressed by an XPath expression satisfies the specified relationship (=, <, >, etc.) with respect to the input criteria values. A path range index must exist for each path when you perform a search. **/
  pathRangeQuery(pathExpression: MLArray<string>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.PathRangeQuery;

    /** Returns the operator used to construct the specified query. **/
  pathRangeQueryOperator(query: cts.PathRangeQuery): string;

    /** Returns the options for the specified query. **/
  pathRangeQueryOptions(query: cts.PathRangeQuery): Sequence<string>;

    /** Returns the path expression used to construct the specified query. **/
  pathRangeQueryPathName(query: cts.PathRangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  pathRangeQueryValue(query: cts.PathRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  pathRangeQueryWeight(query: cts.PathRangeQuery): number;

    /** Creates a reference to a path value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  pathReference(pathExpression: string, options?: MLArray<string>|null|undefined, map?: {[key:string]:any}|null|undefined): cts.Reference;

    /** Returns the rank of a value in a data set as a percentage of the data set. This function works like math:percent-rank except each item in the sequence is repeated cts:frequency times before calculating the rank. **/
  percentRank(arg: MLArray<any>, value: any, options?: MLArray<string>|null|undefined): number;

    /** Returns a sequence of percentile(s) given a sequence of percentage(s). This function works like math:percentile except each item in the sequence is repeated cts:frequency times before calculating the percentiles(s). The function returns the empty sequence if either $arg or $p is the empty sequence. **/
  percentile(arg: MLArray<number>, p: MLArray<number>): Sequence<number>;

    /** Creates a period value, for use as a parameter to cts:period-range-query or cts:period-compare-query. **/
  period(start: Date, end: Date): cts.Period;

    /** Compares two periods using the specified comparision operator. Returns true if the two periods meet the operator conditions or false if they do not meet the conditions. **/
  periodCompare(period1: cts.Period, operator: string, period2: cts.Period): boolean;

    /** Returns a cts:query matching documents that have relevant pair of period values. Searches with the cts:period-compare-query constructor require two valid names of period, if the either of the specified period does not exist, then an exception is thrown. **/
  periodCompareQuery(axis1: string, operator: string, axis2: string, options?: MLArray<string>|null|undefined): cts.PeriodCompareQuery;

    /** Returns the name of the first axis used to construct the specified query. **/
  periodCompareQueryAxis1(query: cts.PeriodCompareQuery): string;

    /** Returns the name of the second axis used to construct the specified query. **/
  periodCompareQueryAxis2(query: cts.PeriodCompareQuery): string;

    /** Returns the operator used to construct the specified query. **/
  periodCompareQueryOperator(query: cts.PeriodCompareQuery): string;

    /** Returns the options for the specified query. **/
  periodCompareQueryOptions(query: cts.PeriodCompareQuery): Sequence<string>;

    /** Returns a cts:query matching axis by name with a period value with an operator. Searches with the cts:period-range-query constructor require a axis definition on the axis name; if there is no axis configured, then an exception is thrown. **/
  periodRangeQuery(axisName: MLArray<string>, operator: string, period?: MLArray<cts.Period>|null|undefined, options?: MLArray<string>|null|undefined): cts.PeriodRangeQuery;

    /** Returns the axis name used to construct the specified query. **/
  periodRangeQueryAxis(query: cts.PeriodRangeQuery): Sequence<string>;

    /** Returns the operator used to construct the specified query. **/
  periodRangeQueryOperator(query: cts.PeriodRangeQuery): string;

    /** Returns the options for the specified query. **/
  periodRangeQueryOptions(query: cts.PeriodRangeQuery): Sequence<string>;

    /** Returns the period used to construct the specified query. **/
  periodRangeQueryPeriod(query: cts.PeriodRangeQuery): Sequence<any>;

    /** Returns an array of JavaScript objects recording information about how the given search will be processed by the index. The information is a structured representation of the information provided in the error log when query trace is enabled. The query will be processed up to the point of getting an estimate of the number of fragments returned by the index. **/
  plan(query: cts.Query, options?: MLArray<cts.Order>|MLArray<string>|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined, maximum?: number|null|undefined): Array<any>;

    /** Returns a point value. **/
  point(latitude: number, longitude: number): cts.Point;

    /** Returns a point's latitude value. **/
  pointLatitude(point: cts.Point): number;

    /** Returns a point's longitude value. **/
  pointLongitude(point: cts.Point): number;

    /** Returns a geospatial polygon value. **/
  polygon(vertices: MLArray<cts.Point>): cts.Polygon;

    /** Returns a polygon's vertices. The first vertex and last vertex will always be the same. **/
  polygonVertices(polygon: cts.Polygon): Sequence<cts.Point>;

    /** Returns a query that matches all documents where $query matches document-properties. When searching documents or document-locks, this query type provides a convenient way to additionally constrain the search against document-properties fragments. **/
  propertiesFragmentQuery(query: cts.Query): cts.PropertiesFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  propertiesFragmentQueryQuery(query: cts.PropertiesFragmentQuery): cts.Query;

    /** Returns the quality of a node, or of the context node if no node is provided. **/
  quality(node?: MLNodeOrObject<any>|null|undefined): number;

    /** Creates a quality-based ordering clause, for use as an option to cts.search. **/
  qualityOrder(options?: MLArray<string>|null|undefined): cts.Order;

    /** Creates a query. **/
  query(query: MLNodeOrObject<any>): cts.Query;

    /** Returns a cts:query matching specified nodes with a range-index entry compared to a given value. Searches with the cts:range-query constructor require a range index; if there is no range index configured, then an exception is thrown. **/
  rangeQuery(index: MLArray<cts.Reference>, operator: string, value: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.RangeQuery;

    /** Returns the range index used to construct the specified query. **/
  rangeQueryIndex(query: cts.RangeQuery): Sequence<xs.QName>;

    /** Returns the operator used to construct the specified query. **/
  rangeQueryOperator(query: cts.RangeQuery): string;

    /** Returns the options for the specified query. **/
  rangeQueryOptions(query: cts.RangeQuery): Sequence<string>;

    /** Returns the value used to construct the specified query. **/
  rangeQueryValue(query: cts.RangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  rangeQueryWeight(query: cts.RangeQuery): number;

    /** Returns the rank of a value in a data set. This function works like math:rank except each item in the sequence is repeated cts:frequency times before calculating the rank. **/
  rank(arg: MLArray<any>, value: any, options?: MLArray<string>|null|undefined): number;

    /** Accessor for the collation of a reference to a string value lexicon. **/
  referenceCollation(index: cts.Reference): string;

    /** Accessor for the coordinate-system of a reference to a geospatial lexicon. **/
  referenceCoordinateSystem(index: cts.Reference): string;

    /** Returns true() if the reference is nullable, false() otherwise. **/
  referenceNullable(reference: cts.Reference): boolean;

    /** Creates a reference to a value lexicon by parsing its XML or JSON representation, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  referenceParse(reference: MLNodeOrObject<any>): cts.Reference;

    /** Accessor for the scalar type of a reference to a value lexicon. **/
  referenceScalarType(index: cts.Reference): string;

    /** Register a query for later use. **/
  register(query: cts.Query): number;

    /** Returns a query matching fragments specified by previously registered queries (see cts:register). If the database is not empty and a registered query with the specified ID(s) is not found, then a cts:search operation with an invalid cts:registered-query throws an XDMP-UNREGISTERED exception. **/
  registeredQuery(ids: MLArray<number>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.RegisteredQuery;

    /** Returns the registered query identifiers used to construct the specified query. **/
  registeredQueryIds(query: cts.RegisteredQuery): Sequence<number>;

    /** Returns the options for the specified query. **/
  registeredQueryOptions(query: cts.RegisteredQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  registeredQueryWeight(query: cts.RegisteredQuery): number;

    /** Return the relevance score computation report for a node. **/
  relevanceInfo(node?: MLNodeOrObject<any>|null|undefined, outputKind?: string|null|undefined): Object;

    /** Returns an estimated search result size for a node, or of the context node if no node is provided. The search result size for a node is the number of fragments remaining (including the current node) in the result sequence containing the node. This is useful to quickly estimate the size of a search result sequence, without using fn:count() or xdmp:estimate(). **/
  remainder(node?: MLNodeOrObject<any>|null|undefined): number;

    /** Construct a query that matches serialized cts queries, based on a set of model input nodes. A serialized query matches if it would match the model nodes. Use with a cts.search or cts.contains over serialized cts.query nodes. **/
  reverseQuery(nodes: MLArray<any>, weight?: number|null|undefined): cts.ReverseQuery;

    /** Returns the nodes used to construct the specified query. **/
  reverseQueryNodes(query: cts.ReverseQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  reverseQueryWeight(query: cts.ReverseQuery): number;

    /** Returns the score of a node, or of the context node if no node is provided. **/
  score(node?: MLNodeOrObject<any>|null|undefined): number;

    /** Creates a score-based ordering clause, for use as an option to cts.search. **/
  scoreOrder(options?: MLArray<string>|null|undefined): cts.Order;

    /** Returns a relevance-ordered sequence of nodes specified by a given query. **/
  search(query: cts.Query, options?: MLArray<cts.Order>|MLArray<string>|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a query matching nodes similar to the model nodes. It uses an algorithm which finds the most "relevant" terms in the model nodes (that is, the terms with the highest scores), and then creates a query equivalent to a cts:or-query of those terms. By default 16 terms are used. **/
  similarQuery(nodes: MLArray<any>, weight?: number|null|undefined, options?: MLNodeOrObject<any>|null|undefined): cts.SimilarQuery;

    /** Returns the nodes used to construct the specified query. **/
  similarQueryNodes(query: cts.SimilarQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  similarQueryWeight(query: cts.SimilarQuery): number;

    /** Returns a frequency-weighted sample standard deviation given a value lexicon. This function works like math:stddev except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  stddev(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns a frequency-weighted standard deviation of the population given a value lexicon. This function works like math:stddev-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  stddevP(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns the stem(s) for a word. **/
  stem(text: string, language?: string|null|undefined, partOfSpeech?: string|null|undefined): Sequence<string>;

    /** Returns the sum of the values given a value lexicon. This function works like cts:sum except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:sum, especially on large clusters. **/
  sumAggregate(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): any;

    /** Compute precision, recall, the F measure, and thresholds for the classes computed by the classifier, by comparing with the labels for the same set. **/
  thresholds(computedLabels: Array<any>, knownLabels: Array<any>, recallWeight?: number|null|undefined): Array<any>;

    /** Tokenizes text into words, punctuation, and spaces. Returns output in the type cts:token, which has subtypes cts:word, cts:punctuation, and cts:space, all of which are subtypes of xs:string. **/
  tokenize(text: string, language?: string|null|undefined, field?: string|null|undefined): Sequence<cts.Token>;

    /** Produces a set of classifiers from a list of labeled training documents. **/
  train(trainingNodes: Array<any>, labels: Array<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Object;

    /** Returns a cts:query matching triples with a triple index entry equal to the given values. Searches with the cts:triple-range-query constructor require the triple index; if the triple index is not configured, then an exception is thrown. **/
  tripleRangeQuery(subject: MLArray<any>, predicate: MLArray<any>, object: MLArray<any>, operator?: MLArray<string>|null|undefined, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.TripleRangeQuery;

    /** Returns the object value used to construct the specified query. **/
  tripleRangeQueryObject(query: cts.TripleRangeQuery): Sequence<any>;

    /** Returns the operators used to construct the specified query. **/
  tripleRangeQueryOperator(query: cts.TripleRangeQuery): Sequence<string>;

    /** Returns the options for the specified query. **/
  tripleRangeQueryOptions(query: cts.TripleRangeQuery): Sequence<string>;

    /** Returns the predicate value used to construct the specified query. **/
  tripleRangeQueryPredicate(query: cts.TripleRangeQuery): Sequence<any>;

    /** Returns the subject value used to construct the specified query. **/
  tripleRangeQuerySubject(query: cts.TripleRangeQuery): Sequence<any>;

    /** Returns the weight with which the specified query was constructed. **/
  tripleRangeQueryWeight(query: cts.TripleRangeQuery): number;

    /** Returns statistics from the triple index for the values given. **/
  tripleValueStatistics(values?: MLArray<any>|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns values from the triple index. If subject, predicate, and object are given, then only triples with those given component values are returned. Triples can be returned in any of the sort orders present in the triple index. **/
  triples(subject?: MLArray<any>|null|undefined, predicate?: MLArray<any>|null|undefined, object?: MLArray<any>|null|undefined, operator?: MLArray<string>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<sem.Triple>;

    /** Returns a query that matches all fragments. **/
  trueQuery(): cts.AndQuery;

    /** Specifies that results should be unordered, for use with cts.search. **/
  unordered(): cts.Order;

    /** Returns values from the URI lexicon that match the specified wildcard pattern. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  uriMatch(pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Creates a reference to the URI lexicon, for use as a parameter to cts:value-tuples. This function requires the URI lexicon to be enabled, otherwise it throws an exception. **/
  uriReference(): cts.Reference;

    /** Returns values from the URI lexicon. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  uris(start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Parses path expressions and resolves namespaces using the $map parameter. Returns true if the argument is permissible as a path for document PATCH. **/
  validDocumentPatchPath(string: string, map?: {[key:string]:any}|null|undefined): boolean;

    /** Parses path expressions and resolves namespaces using the $map parameter. Returns true if the argument is permissible as a path for extract-path option in extract-document-data **/
  validExtractPath(string: string, map?: {[key:string]:any}|null|undefined): boolean;

    /** Parses path expressions and resolves namespaces based on the server run-time environment. Returns true if the argument is permissible as a path for indexing. **/
  validIndexPath(string: string, ignorens: boolean): boolean;

    /** Parses path expressions and resolves namespaces using the $map parameter. Returns true if the argument is permissible as a path for Optic op:xpath **/
  validOpticPath(string: string, map?: {[key:string]:any}|null|undefined): boolean;

    /** Parses path expressions and resolves namespaces using the $map parameter. Returns true if the argument is permissible as a context element in a TDE template. **/
  validTdeContext(string: string, map?: {[key:string]:any}|null|undefined): boolean;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified value lexicon(s). The values are returned as an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires a range index for each input index reference. If an index or lexicon is not configured for any of the input references, an exception is thrown. **/
  valueCoOccurrences(rangeIndex1: cts.Reference, rangeIndex2: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns values from the specified value lexicon(s) that match the specified wildcard pattern. Value lexicons are implemented using range indexes; consequently this function requires a range index for each index reference specified in the function. If there is not a range index configured for each of the specified references, then an exception is thrown. **/
  valueMatch(rangeIndexes: MLArray<cts.Reference>, pattern: any, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns value ranges from the specified value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each element specified in the function. If there is not an index or lexicon configured for one of the specified references, an exception is thrown.The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on.If you have string values and you pass a $bounds parameter as in the following call:cts.valueRanges(cts.pathReference("/name/fname"), ["f", "m"])The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m.For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  valueRanges(rangeIndexes: MLArray<cts.Reference>, bounds?: MLArray<any>|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<MLNode<any>>;

    /** Returns value co-occurrence tuples (that is, tuples of values, each of which appear in the same fragment) from the specified value lexicons. The values are returned as array nodes, where each slot contains one of the co-occurring values. You can use cts:frequency on each item returned to find how many times the tuple occurs. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function, and the range index must have range value positions set to true. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  valueTuples(rangeIndexes: MLArray<cts.Reference>, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<Array<any>>;

    /** Returns values from the specified value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each of the $range-indexes specified in the function. If there is not a range index configured for each of the specified range indexes, an exception is thrown. **/
  values(rangeIndexes: MLArray<cts.Reference>, start?: any|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns a frequency-weighted sample variance given a value lexicon. This function works like math:variance except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  variance(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns a frequency-weighted variance of the population given a value lexicon. This function works like math:variance-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  varianceP(rangeIndex: cts.Reference, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, forestIds?: MLArray<number>|null|undefined): number;

    /** Walks a node, evaluating a callback function for any text matching a query. It returns the empty-sequence(). This is similar to cts.highlight in how it evaluates its expression, but it is different in what it returns. **/
  walk(node: MLNodeOrObject<any>, query: cts.Query, callback: (p1:string,p2:Text,p3:MLArray<cts.Query>,p4:number)=>string): null;

    /** Returns words from the word lexicon that match the wildcard pattern. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. **/
  wordMatch(pattern: string, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Returns a query matching text content containing a given phrase. **/
  wordQuery(text: MLArray<string>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.WordQuery;

    /** Returns the options for the specified query. **/
  wordQueryOptions(query: cts.WordQuery): Sequence<string>;

    /** Returns the text used to construct the specified query. **/
  wordQueryText(query: cts.WordQuery): Sequence<string>;

    /** Returns the weight with which the specified query was constructed. **/
  wordQueryWeight(query: cts.WordQuery): number;

    /** Returns words from the word lexicon. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. The words are returned in collation order. **/
  words(start?: string|null|undefined, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined, qualityWeight?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

}
declare var cts:ctsFunctions

/**
The Library Services API module is
			used to place documents under library service control,
			and allows you to perform functions such as checking
			in a document, checking out a document, and so on. The Library Services API is installed as the following file:install_dir/Modules/MarkLogic/dls.xqywhere install_dir is the directory in which
	      MarkLogic Server is installed. To use the dls.xqy module in your own XQuery modules,
	      include the following line in your XQuery prolog:
import module namespace dls = "http://marklogic.com/xdmp/dls"
  at "/MarkLogic/dls.xqy";The library uses the dls: namespace, which is
	      not predefined in the server.MarkLogic recommends enabling the URI Lexicon when using
	       Library Services; the URI lexicon will
	      improve performance, especially when the database grows to
	      a large number of documents.
	   Document Management functions.

	   Document Update functions.

	   Functions to return cts:query constructors.

	   Retention policy functions.

	   XInclude functions.

**/

interface dlsFunctions {

    /** This function returns a query that matches the most recent numbered version of documents that were created before the specified date and time. **/
  asOfQuery(when: Date): cts.PropertiesFragmentQuery;

    /** This function returns a query that matches documents authored by the specified user. **/
  authorQuery(author: number): cts.PropertiesFragmentQuery;

    /** This function breaks (unlocks) a checked-out document **/
  breakCheckout(uri: string, deep: boolean): null;

    /** This function adds the named document to the specified collections. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentAddCollections(uri: string, collections: MLArray<string>): null;

    /** This function adds the specified permissions for the named document. Any permissions that were previously set for the document are retained. **/
  documentAddPermissions(uri: string, permissions: MLArray<any>): null;

    /** This function adds the specified properties to any existing properties associated with the named document. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentAddProperties(uri: string, properties: MLArray<any>): null;

    /** This function checks in (unlocks) the document at the specified URI to allow other users to modify the document. This function does not create a new version of the document. You must explicitly use dls.documentUpdate to create new versions of a document. This function must be called in a separate transaction from the dls.documentCheckout and dls.documentUpdate functions. **/
  documentCheckin(uri: string, deep: boolean): null;

    /** This function checks out (locks) the document at the specified URI to prevent other users from modifying the document. An exception is thrown if the document does not yet exist or does exist but is not managed. This function must be called in a separate transaction from the dls.documentUpdate and dls.documentCheckin functions. **/
  documentCheckout(uri: string, deep: boolean, annotation?: any|null|undefined, timeout?: number|null|undefined): null;

    /** This function returns a checkout element containing the checkout status of the specified document. **/
  documentCheckoutStatus(uri: string): MLNode<any>;

    /** This function allows you to checkout, update, and checkin a managed document in a single transaction. **/
  documentCheckoutUpdateCheckin(uri: string, doc: MLNodeOrObject<any>, annotation: MLArray<any>, retainHistory: boolean, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function removes the specified managed document. You must have update permissions on the document to delete it. If you set $retain-history to true, you can use xdmp.documentProperties to view the deleted document's properties fragment in the database. **/
  documentDelete(uri: string, keepOldVersions: boolean, retainHistory: boolean): null;

    /** This function extracts an element from an existing document and creates a new document from the extracted element. The extracted element is removed from the root node document and replaced by an XInclude to the new document. A new version of the root node document is created. You must have already performed a dls.documentCheckout of the document that contains the element to be extracted. The $new-uri must be an absolute path and is initially not checked out. This will create a new version of both the original document and the newly included document, with $annotation being used to create a dls:annotation property on each of them. **/
  documentExtractPart(newUri: string, element: MLNodeOrObject<any>, annotation: MLArray<any>, retainHistory: boolean, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function gets the permissions for the specified document from the point of view of the Library Services API. **/
  documentGetPermissions(uri: string): Sequence<MLNode<any>>;

    /** Returns the version history of the document located at the specified URI. **/
  documentHistory(uri: string): MLNode<any>;

    /** This function returns a query that matches any managed document that has an XInclude link that exactly matches the specified URI. **/
  documentIncludeQuery(uri: string): cts.Query;

    /** This function inserts a document into the database and places the document under management. **/
  documentInsertAndManage(uri: string, deep: boolean, doc: MLNodeOrObject<any>, annotation?: MLArray<any>|null|undefined, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function determines whether or not the document at the specified URI is managed. This function returns true if the document at the URI is either a managed document or a numbered version of a managed document. Otherwise false is returned. **/
  documentIsManaged(uri: string): boolean;

    /** This function places a document under management. A document must first be managed before it can be checked out. The document at the specified URI will become version 1 of this managed document. **/
  documentManage(uri: string, deep: boolean, annotation?: MLArray<any>|null|undefined): null;

    /** This function deletes all numbered versions of the specified managed document and its referenced documents, as specified by the rention policies set by dls:retention-rule. The document versions are deleted if they have no retention rule causing them to be kept and if they are not included by documents that cannot yet be deleted. If $delete is false, the document's versions are not actually deleted and instead a list of the documents that would have been deleted is returned. If you set $retain-history to true, you can use xdmp:document-properties to view the deleted document's properties fragment in the database. **/
  documentPurge(uri: string, delete_: boolean, retainHistory: boolean): Sequence<string>;

    /** This function removes the named document from the specified collection. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentRemoveCollections(uri: string, collections: MLArray<string>): null;

    /** This function removes the specified permissions from the named document. **/
  documentRemovePermissions(uri: string, permissions: MLArray<any>): null;

    /** This function removes the specified properties from the named document. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentRemoveProperties(uri: string, propertyNames: MLArray<xs.QName>): null;

    /** This function a sequence of dls:retentionRule element nodes. This allows users to determine why a version of a document is being retained. **/
  documentRetentionRules(uri: string): Sequence<MLNode<any>>;

    /** This function sets the named document to the specified collections. Any previously set collections for the document that are not specified are removed. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentSetCollections(uri: string, collections: MLArray<string>): null;

    /** This function sets the specified permissions for the named document. Any unspecified permissions that were previously set for the document are removed. **/
  documentSetPermissions(uri: string, permissions: MLArray<any>): null;

    /** This function sets the properties of a document to the given sequence of elements. With the exception of the Library Services properties, any properties that already exist on the document are replaced. To preserve existing document properties, use dls:document-add-properties. Each element QName is the property name and the element value is the property value. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentSetProperties(uri: string, properties: MLArray<any>): null;

    /** This function sets a property on a document. If any properties with the same property QName exist, they are replaced with the new property. If no properties exist with the same QName, the new property is added. **/
  documentSetProperty(uri: string, property: MLNodeOrObject<any>): null;

    /** This function sets the quality of the document with the given URI. If the quality of the document is positive, the relevance score of the document is increased in text search functions. The converse is true for "negative" quality. **/
  documentSetQuality(uri: string, quality: number): null;

    /** Removes the specified document from management. You must have update permissions on the document to unmanage the document. **/
  documentUnmanage(uri: string, deep: boolean, removeVersions: boolean): null;

    /** This function updates the managed document at the specified URI with the specified contents. This function does an implicit dls:document-purge and returns the URI of any version of the document purged as the result of the established retention policy. This function must be called in a separate transaction from the dls.documentCheckout and dls.documentCheckin functions. You must first check out the document with dls:document-checkout before you can update, otherwise an exception is thrown. If the document does not exist, then an exception is thrown. **/
  documentUpdate(uri: string, doc: MLNodeOrObject<any>, annotation: MLArray<any>, retainHistory: boolean, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function returns a particular version of a managed document. An error is thrown if there is no such version. **/
  documentVersion(uri: string, versionNumber: number): DocumentNode<any>;

    /** This function returns the most recent version of a document as of a point in time. **/
  documentVersionAsOf(uri: string, asOf: Date): DocumentNode<any>;

    /** This function removes the specified version of the managed document at the specified URI. This overrides any configured retention policies and should be used with care. You must have update permissions on the document version in order to delete it. If you set $retain-history to true, you can use xdmp.documentProperties to view the deleted document's properties fragment in the database. For example, if you had deleted version 1 of /foo/bar/baz.xml, you can view its properties by calling: xdmp.documentProperties("/foo/bar/baz.xml_versions/1-baz.xml") **/
  documentVersionDelete(uri: string, version: number, retainHistory: boolean): null;

    /** This function returns a query that matches the specified version of the managed documents. **/
  documentVersionQuery(version: number): cts.PropertiesFragmentQuery;

    /** This function returns the URI of the specified version of the document located at the specified URI. The specified version of the document may, or may not, actually exist. **/
  documentVersionUri(documentUri: string, version: number): string;

    /** This function returns the URIs of all versions of a managed document. This includes URIs to the document properties of versions of documents that have been deleted but with history retained. See dls:document-version-delete for details on the retain-history argument. **/
  documentVersionUris(uri: string): Sequence<string>;

    /** This function returns a query that matches any version of the specified URI. If the URI contains either of the wildcard characters '?' or '*', then the search is wildcarded. Specifying '*' matches any numbered version of any managed document. **/
  documentVersionsQuery(uri: string): cts.PropertiesFragmentQuery;

    /** This function returns a query that matches the latest versions of the managed documents in the database. **/
  documentsQuery(): cts.Query;

    /** Returns a report describing the status of an upgrade from a pre-MarkLogic 8 DLS repository. **/
  latestValidationResults(): MLNode<any>;

    /** This function performs a single level expansion of a single XInclude reference. Any XInclude references in the referenced node are not expanded. **/
  linkExpand(context: MLNodeOrObject<any>, ref: MLNodeOrObject<any>, restriction: cts.Query): Sequence<any>;

    /** This function returns a list of all the distinct URIs of documents referenced (either directly or indirectly) in the expansion of the node. The URIs are mapped according to the specified restrictions. **/
  linkReferences(node: MLNodeOrObject<any>, restriction: cts.Query): Sequence<string>;

    /** This function recursively examines the node for XInclude references and expands them, following the rules of the XInclude specification. The result is a node in which all the XInclude references have been resolved, or an error if there were unresolvable references with no fallback specifications. The URIs are mapped according to the specified restrictions. **/
  nodeExpand(node: MLNodeOrObject<any>, restriction: cts.Query): MLNode<any>;

    /** This function deletes all numbered versions of managed documents and its referenced documents (such as /foo/bar.xml_versions/1-bar.xml), as specified by the rention policy set by one or more dls.retentionRule functions. Documents are deleted if they have no retention rule causing them to be kept and if they are not included by some document that cannot yet be deleted. If $delete is false, the document versions are not actually deleted and instead a list of the documents that would have been deleted is returned. This function returns a list of URIs that it would/did delete. If you set $retain-history to true, you can use xdmp.documentProperties to view the deleted document's properties fragment in the database. **/
  purge(delete_: boolean, retainHistory: boolean): Sequence<string>;

    /** This function creates and returns a retention rule element. Use dls:insert-retention-rule to insert the retention rule into the database. Specifying multiple constraints implies AND between them. For example, specifying both $num-versions and $duration retains a numbered version only if it is both one of the N most recent versions and it was created more recently than "now - duration." If neither $num-versions or $duration is specified, then any numbered version matching the document query is kept forever. The $document-query-text parameter is intended to be used for the human readable form of a query that was used to produce the corresponding cts:query. This may be the text that a user typed into a search text field in the UI. This parameter does NOT affect the retention policy. **/
  retentionRule(name: string, comment: MLArray<any>, numVersions: number, duration: string, documentQueryText: string, documentQuery: cts.Query): MLNode<any>;

    /** This function inserts retention rules into the database. They will be readable by the dls-user role and modifiable/deletable by the dls-admin role. **/
  retentionRuleInsert(rules: MLArray<MLNodeOrObject<any>>): null;

    /** This function removes the specified retention rules from the database. **/
  retentionRuleRemove(names: MLArray<string>): null;

    /** This function returns the specified retention rules from the database. **/
  retentionRules(names: MLArray<string>): Sequence<MLNode<any>>;

    /** Sets DLS the upgrade status to current or compatibility-mode. Only use this when upgrading a pre-MarkLogic 8 DLS repository. **/
  setUpgradeStatus(promote: boolean): MLNode<any>;

    /** Upgrades a previous version DLS Database to the current format. After upgrading MarkLogic to a new major version, if the DLS database is incompatible with the current version you need to either enable compatibly mode by calling dls:set-upgrade-status(fn:false()) or by upgrading your database with dls:start-upgrade. **/
  startUpgrade(): null;

    /** This function.... **/
  updateValidationResults(results: MLNodeOrObject<any>): null;

    /** Returns a report of the status of the DLS upgrade process. **/
  validateAllDocuments(verbose: boolean): MLNode<any>;

}
declare var dls:dlsFunctions

/**
Use the entity enrichment library to manage entity dictionaries
     and perform dictionary-based entity extraction and enrichment.
     For details, see
 Entity Extraction and Enrichment in the Search Developer's Guide.
    The entity enrichment library module is installed as the following
		  file:install_dir/Modules/MarkLogic/entity.xqywhere install_dir is the directory in which
	    MarkLogic Server is installed.To use this module in your
     JavaScript code, include a require statement similar to
     the following in your code:const entity = require('/MarkLogic/entity');
**/

interface entityFunctions {

    /** Put an entity dictionary into the database in the appropriate format. **/
  dictionaryInsert(uri: string, dictionary: cts.EntityDictionary): null;

    /** Load an entity dictionary from the filesystem into the database in the appropriate format. **/
  dictionaryLoad(path: string, uri: string, options?: MLArray<string>|null|undefined): null;

    /** Returns the entity-enriched XML for the given XML node using the provided dictionary. If a text node that is being enriched has a parent element with a schema definition that does not allow element children, then that text node is not enriched. Entity markup is not added within other entities. **/
  enrich(node: MLNodeOrObject<any>, dictionaries?: MLArray<cts.EntityDictionary>|null|undefined, options?: MLArray<string>|null|undefined, map?: {[key:string]:any}|null|undefined): MLNode<any>;

    /** Extract entities from a document using the provided entity dictionary. The matching entities are returned. **/
  extract(node: MLNodeOrObject<any>, dictionaries?: MLArray<cts.EntityDictionary>|null|undefined, options?: MLArray<string>|null|undefined, map?: {[key:string]:any}|null|undefined): Sequence<any>;

    /** Construct an entity dictionary from a SKOS ontology loaded into the database as triples. The mapping from a SKOS ontology is as follows: **/
  skosDictionary(graph: string, lang?: string|null|undefined, options?: MLArray<string>|null|undefined): cts.EntityDictionary;

}
declare var entity:entityFunctions

/**

   This module contains the Entity Services API, which enables you to
   define logical entity-relationship models and instantiate them for use
   in your applications. For details, see the
   Entity Services Developer's Guide.
  To use the es module in your JavaScript code, include a
   require statement similar to the following in your code: const es = require('/MarkLogic/entity-services/entity-services');The library namespace prefix es is not predefined
   in the server.
   The Entity Services API is a set of functions that enable you to
   define logical entity-relationship models and instantiate them for
   use in your application. Use these functions to create Entity
   Services models, generate supporting code and configuration artifacts,
   and manage entity instances. For details, see the
   Entity Services Developer's Guide.
  To use the es module in your JavaScript code, include a
   require statement similar to the following in your code: const es = require('/MarkLogic/entity-services/entity-services');The library namespace prefix es is not predefined
   in the server.
   The following functions are helper functions used in code generated
   by the Entity Services API. You will not usually call them in any other
   context. These functions are documented to help you understand and
   customize the generated code. The best usage examples can be found in
   the code generated from your Entity Services model.

**/

interface esFunctions {

    /** Generate a database configuration artifact from a basic model. This data facilitates creating range indexes and lexicons required for searching instance data. **/
  databasePropertiesGenerate(model: {[key:string]:any}): ObjectNode;

    /** Generate a Template Driven Extraction (TDE) template you can use to render entity instance data into rows for querying with the Optic API or SQL. **/
  extractionTemplateGenerate(model: {[key:string]:any}): MLNode<any>;

    /** Generate an XQuery library module containing stub code for converting source data to entity instances. **/
  instanceConverterGenerate(model: {[key:string]:any}): DocumentNode<any>;

    /** Extract an in-memory entity instance from its envelope document as a JavaScript object. **/
  instanceFromDocument(entityDocument: DocumentNode<any>): Sequence<{[key:string]:any}>;

    /** Extract attachments from an entity service document. **/
  instanceGetAttachments(entityDocument: DocumentNode<any>): Sequence<any>;

    /** Extract an entity instance from its envelope document, as JSON. **/
  instanceJsonFromDocument(entityDocument: DocumentNode<any>): ObjectNode;

    /** Extract a canonical entity instance from its envelope document, as XML. **/
  instanceXmlFromDocument(entityDocument: DocumentNode<any>): Sequence<any>;

    /** Create a basic model from an XML model descriptor, without validating the input descriptor for correctness. **/
  modelFromXml(model: MLNodeOrObject<any>): {[key:string]:any};

    /** Generate entity instances of each entity type in a basic model. **/
  modelGetTestInstances(model: {[key:string]:any}): Sequence<any>;

    /** Serialize a basic model as an XML element. **/
  modelToXml(model: {[key:string]:any}): MLNode<any>;

    /** Validates an entity services model descriptor. If the descriptor is valid, returns an in-memory version of the basic model; otherwise, an exception is raised. **/
  modelValidate(modelDescriptor: MLNodeOrObject<any>): {[key:string]:any};

    /** Generate an XSD schema that can be used to validate instance data. **/
  schemaGenerate(model: {[key:string]:any}): Sequence<MLNode<any>>;

    /** Generate a set of query options that can be used to query your entity instances using several MarkLogic server-side and client APIs. **/
  searchOptionsGenerate(model: {[key:string]:any}): MLNode<any>;

    /** Generate a module that can be used to translate instances conforming to one version of a model into instances conforming to another version **/
  versionTranslatorGenerate(sourceModel: {[key:string]:any}, targetModel: {[key:string]:any}): string;

}
declare var es:esFunctions

/**

The accessor built-in functions are XQuery functions to access node properties.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

  The anyURI built-in function is the XQuery function that applies
  to xs:anyURI instances.  It is defined in
  XQuery 1.0
  and XPath 2.0 Functions and Operators.

The boolean built-in functions are XQuery functions to manipulate xs:boolean
values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The context built-in functions are XQuery functions defined to obtain information from the dynamic context.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The duration, date, and time built-in functions are XQuery functions
that operate on duration-, date-, and time-related values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
 The error built-in functions are XQuery functions defined for reporting
errors.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
The error built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
They are defined in
XPATH 2.0
Functions and Operators.

The node built-in functions are XQuery functions defined to operate on nodes.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The numeric built-in functions are XQuery functions defined to operate on
numeric values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

These built-in functions are XQuery functions defined to operate on
qualified name (xs:QName) values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

These built-in functions are XQuery functions defined to operate on
sequences. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
 The string built-in functions are XQuery functions defined to operate on
string values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
The string built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified. The error and trace built-in functions are XQuery functions defined for
throwing errors from XQuery programs and debug tracing.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
The error and trace built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
The XSLT functions.  These functions are available in XSLT only.
They are defined in
XSL Transformations (XSLT) Version 2.0.

  The Higher-Order built-in functions are XQuery functions to support
  higher-order functions, and are part of the XQuery 3.0 working draft.
  They are defined in
  XPath and
  XQuery Functions and Operators 3.0.

**/

interface fnFunctions {

    /** Returns the absolute value of $arg. If $arg is negative returns -$arg otherwise returns $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive zero (+0) or negative zero (-0), then positive zero (+0) is returned. If the argument is positive or negative infinity, positive infinity is returned. For detailed type semantics, see Section 7.2.1 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions of [XQuery 1.0 and XPath 2.0 Formal Semantics]. **/
  abs(arg: number): number;

    /** Adjusts an xs:date value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:date without a timezone. Otherwise, returns an xs:date with a timezone. For purposes of timezone adjustment, an xs:date is treated as an xs:dateTime with time 00:00:00. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with 00:00:00 for the time component and date and timezone components that are the same as the date and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a date value that has date and timezone components that are the same as the date and timezone components of $r. **/
  adjustDateToTimezone(arg: Date, timezone?: string|null|undefined): Date;

    /** Adjusts an xs:dateTime value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:dateTime without a timezone. Otherwise, returns an xs:dateTime with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then the result is an xs:dateTime value with a timezone component of $timezone that is equal to $arg. **/
  adjustDateTimeToTimezone(arg: Date, timezone?: string|null|undefined): Date;

    /** Adjusts an xs:time value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:time without a timezone. Otherwise, returns an xs:time with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with an arbitrary date for the date component and time and timezone components that are the same as the time and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a time value that has time and timezone components that are the same as the time and timezone components of $r. **/
  adjustTimeToTimezone(arg: string, timezone?: string|null|undefined): string;

    /** The result of the function is a new element node whose string value is the original string, but which contains markup to show which parts of the input match the regular expression. **/
  analyzeString(input: string, regex: string, flags?: string|null|undefined): MLNode<any>;

    /** Returns the average of the values in the input sequence $arg, that is, the sum of the values divided by the number of values. If $arg is the empty sequence, the empty sequence is returned. If $arg contains values of type xs:untypedAtomic they are cast to xs:double. Duration values must either all be xs:yearMonthDuration values or must all be xs:dayTimeDuration values. For numeric values, the numeric promotion rules defined in 6.2 Operators on Numeric Values are used to promote all values to a single common type. After these operations, $arg must contain items of a single type, which must be one of the four numeric types,xs:yearMonthDuration or xs:dayTimeDuration or one if its subtypes. If the above conditions are not met, then a type error is raised [err:FORG0006]. Otherwise, returns the average of the values computed as sum($arg) div count($arg). For detailed type semantics, see Section 7.2.10 The fn:min, fn:max, fn:avg, and fn:sum functions[FS]. **/
  avg(arg: Sequence<any>|Array<any>): any;

    /** Returns the value of the base-uri property for the specified node. If the node is part of a document and does not have a base-uri attribute explicitly set, fn:base-uri typically returns the URI of the document in which the node resides. **/
  baseUri(arg?: MLNodeOrObject<any>|null|undefined): string;

    /** Computes the effective boolean value of the sequence $arg. See Section 2.4.3 Effective Boolean Value[XP]. **/
  boolean(arg: Sequence<any>|Array<any>, collation?: string|null|undefined): boolean;

    /** Returns the smallest (closest to negative infinity) number with no fractional part that is not less than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero and greater than -1, negative zero is returned. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
  ceiling(arg: number): number;

    /** Returns true if the specified parameters are the same Unicode code point, otherwise returns false. The codepoints are compared according to the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint). If either argument is the empty sequence, the result is the empty sequence. **/
  codepointEqual(comparand1: string, comparand2: string): boolean;

    /** Creates an xs:string from a sequence of Unicode code points. Returns the zero-length string if $arg is the empty sequence. If any of the code points in $arg is not a legal XML character, an error is raised. **/
  codepointsToString(arg: MLArray<number>): string;

    /** Returns all of the documents that belong to the specified collection(s). **/
  collection(uri?: MLArray<string>|null|undefined): Sequence<any>;

    /** Returns -1, 0, or 1, depending on whether the value of the $comparand1 is respectively less than, equal to, or greater than the value of $comparand2, according to the rules of the collation that is used. **/
  compare(comparand1: string, comparand2: string, collation?: string|null|undefined): number;

    /** Returns the xs:string that is the concatenation of the values of the specified parameters. Accepts two or more xs:anyAtomicType arguments and casts them to xs:string. If any of the parameters is the empty sequence, the parameter is treated as the zero-length string. **/
  concat(parameter1: any, ...parameterN: any[]): string;

    /** Returns true if the first parameter contains the string from the second parameter, otherwise returns false. **/
  contains(parameter1: string, parameter2: string, collation?: string|null|undefined): boolean;

    /** Returns the number of items in the value of $arg. Returns 0 if $arg is the empty sequence. **/
  count(arg: MLArray<any>, maximum?: number|null|undefined): number;

    /** Returns xs:date(fn:current-dateTime()). This is an xs:date (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-date() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-date() is *implementation dependent*. **/
  currentDate(): xs.Date;

    /** Returns the current dateTime value (with timezone) from the dynamic context. (See Section C.2 Dynamic Context Components[XP].) This is an xs:dateTime that is current at some time during the evaluation of a query or transformation in which fn:current-dateTime() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-dateTime() is *implementation dependent*. **/
  currentDateTime(): xs.DateTime;

    /** Returns xs:time(fn:current-dateTime()). This is an xs:time (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-time() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-time() is *implementation dependent*. **/
  currentTime(): string;

    /** Takes a sequence of items and returns a sequence of atomic values. The fn:data function returns the sequence of atomic values produced by applying the following rules to each item in $arg: If the item is an atomic value, it is returned.If the item is a node: If the node does not have a typed value an error is raised [err:FOTY0012].Otherwise, fn:data returns the typed value of the node as defined by the accessor function dm:typed-value in Section 5.15 typed-value Accessor[DM]. **/
  data(arg: MLArray<any>): Sequence<any>;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  dayFromDate(arg: Date): number;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  dayFromDateTime(arg: Date): number;

    /** Returns an xs:integer representing the days component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  daysFromDuration(arg: string): number;

    /** This function assesses whether two sequences are deep-equal to each other. To be deep-equal, they must contain items that are pairwise deep-equal; and for two items to be deep-equal, they must either be atomic values that compare equal, or nodes of the same kind, with the same name, whose children are deep-equal. This is defined in more detail below. The $collation argument identifies a collation which is used at all levels of recursion when strings are compared (but not when names are compared), according to the rules in 7.3.1 Collations. If the two sequences are both empty, the function returns true. If the two sequences are of different lengths, the function returns false. If the two sequences are of the same length, the function returns true if and only if every item in the sequence $parameter1 is deep-equal to the item at the same position in the sequence $parameter2. The rules for deciding whether two items are deep-equal follow. Call the two items $i1 and $i2 respectively. If $i1 and $i2 are both atomic values, they are deep-equal if and only if ($i1 eq $i2) is true. Or if both values are NaN. If the eq operator is not defined for $i1 and $i2, the function returns false. If one of the pair $i1 or $i2 is an atomic value and the other is a node, the function returns false. If $i1 and $i2 are both nodes, they are compared as described below: If the two nodes are of different kinds, the result is false. If the two nodes are both document nodes then they are deep-equal if and only if the sequence $i1/(*|text()) is deep-equal to the sequence $i2/(*|text()). If the two nodes are both element nodes then they are deep-equal if and only if all of the following conditions are satisfied: the two nodes have the same name, that is (node-name($i1) eq node-name($i2)).the two nodes are both annotated as having simple content or both nodes are annotated as having complex content.the two nodes have the same number of attributes, and for every attribute $a1 in $i1/@* there exists an attribute $a2 in $i2/@* such that $a1 and $a2 are deep-equal. One of the following conditions holds: Both element nodes have a type annotation that is simple content, and the typed value of $i1 is deep-equal to the typed value of $i2. Both element nodes have a type annotation that is complex content with elementOnly content, and each child element of $i1 is deep-equal to the corresponding child element of $i2. Both element nodes have a type annotation that is complex content with mixed content, and the sequence $i1/(*|text()) is deep-equal to the sequence $i2/(*|text()). Both element nodes have a type annotation that is complex content with empty content. If the two nodes are both attribute nodes then they are deep-equal if and only if both the following conditions are satisfied: the two nodes have the same name, that is (node-name($i1) eq node-name($i2)).the typed value of $i1 is deep-equal to the typed value of $i2. If the two nodes are both processing instruction nodes or namespace bindings, then they are deep-equal if and only if both the following conditions are satisfied: the two nodes have the same name, that is (node-name($i1) eq node-name($i2)). the string value of $i1 is equal to the string value of $i2. If the two nodes are both text nodes and their parent nodes are not object nodes, then they are deep-equal if and only if their string-values are both equal. If the two nodes are both text nodes and their parent nodes are both object nodes, then they are deep-equal if and only if their keys and string-values are both equal. If the two nodes are both comment nodes, then they are deep-equal if and only if their string-values are equal. If the two nodes are both object nodes, then they are deep-equal if and only if all of the following conditions are satisfied: the two nodes have the same number of children, and the children have the same set of keys.two children of the two nodes with the same key are deep-equal.the order of children does not matter. If the two nodes are both boolean nodes, then they are deep-equal if and only if their keys and boolean values are equal. If the two nodes are both number nodes, then they are deep-equal if and only if their keys and values are equal. If the two nodes are both null nodes, they are deep-equal. Notes: The two nodes are not required to have the same type annotation, and they are not required to have the same in-scope namespaces. They may also differ in their parent, their base URI, and the values returned by the is-id and is-idrefs accesors (see Section 5.5 is-id Accessor[DM] and Section 5.6 is-idrefs Accessor[DM]). The order of children is significant, but the order of attributes is insignificant. The following note applies to the Jan 2007 XQuery specification, but not to the May 2003 XQuery specification: The contents of comments and processing instructions are significant only if these nodes appear directly as items in the two sequences being compared. The content of a comment or processing instruction that appears as a descendant of an item in one of the sequences being compared does not affect the result. However, the presence of a comment or processing instruction, if it causes a text node to be split into two text nodes, may affect the result. The result of fn:deep-equal(1, current-dateTime()) is false; it does not raise an error. **/
  deepEqual(parameter1: MLArray<any>, parameter2: MLArray<any>, collation?: string|null|undefined): boolean;

    /** Returns the value of the default collation property from the static context. Components of the static context are discussed in Section C.1 Static Context Components[XP]. The default collation property can never be undefined. If it is not explicitly defined, a system defined default codepoint is used. In the 1.0 XQuery dialect, if this is not provided, the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint) is used. In the 1.0-ml and 0.9-ml XQuery dialects, the MarkLogic-defined codepoint URI is used (http://marklogic.com/collation/codepoint). **/
  defaultCollation(): string;

    /** Returns the sequence that results from removing from $arg all but one of a set of values that are eq to one other. Values that cannot be compared, i.e. the eq operator is not defined for their types, are considered to be distinct. Values of type xs:untypedAtomic are compared as if they were of type xs:string. The order in which the sequence of values is returned is implementation dependent. The static type of the result is a sequence of prime types as defined in Section 7.2.7 The fn:distinct-values function[FS]. The collation used by the invocation of this function is determined according to the rules in 7.3.1 Collations. The collation is used when string comparison is required. If $arg is the empty sequence, the empty sequence is returned. For xs:float and xs:double values, positive zero is equal to negative zero and, although NaN does not equal itself, if $arg contains multiple NaN values a single NaN is returned. If xs:dateTime, xs:date or xs:time values do not have a timezone, they are considered to have the implicit timezone provided by the dynamic context for the purpose of comparison. Note that xs:dateTime, xs:date or xs:time values can compare equal even if their timezones are different. Which value of a set of values that compare equal is returned is implementation dependent. **/
  distinctValues(arg: Sequence<any>, collation?: string|null|undefined): Sequence<any>;

    /** Returns the document(s) stored in the database at the specified URI(s).If you are only getting a single document (specifying a single URI), you can use cts.doc instead (so you do not need to iterate through the Sequence to get to the document). **/
  doc(uri?: string|string|Sequence<any>|null|undefined): Sequence<any>;

    /** If fn:doc($uri) returns a document node, this function returns true. If $uri is not a valid xs:anyURI, an error is raised [err:FODC0005]. Otherwise, this function returns false. If this function returns true, then calling fn:doc($uri) within the same execution scope must return a document node. **/
  docAvailable(uri: string): boolean;

    /** Returns the document(s) stored in the database at the specified URI(s). The URI(s) are resolved according to the base-uri of the calling stylesheet or XQuery main module. This is an XSLT function, and it is available in both XSLT and in XQuery 1.0-ml. **/
  document(uris: string|string|Sequence<any>, baseNode?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Returns the value of the document-uri property for the specified node. If the node is a document node, then the value returned is the URI of the document. If the node is not a document node, then fn:document-uri returns the empty sequence. **/
  documentUri(arg: MLNodeOrObject<any>): string;

    /** If the value of $arg is the empty sequence, the function returns true; otherwise, the function returns false. **/
  empty(arg: MLArray<any>): boolean;

    /** Invertible function that escapes characters required to be escaped inside path segments of URIs. **/
  encodeForUri(uriPart: string): string;

    /** Returns true if the first parameter ends with the string from the second parameter, otherwise returns false. **/
  endsWith(parameter1: string, parameter2: string, collation?: string|null|undefined): boolean;

    /** [1.0 and 1.0-ml only, 0.9-ml has a different signature] Throw the given error. When an error is thrown, the XQuery program execution is stopped. For detailed semantics, see http://www.w3.org/TR/xpath-functions/#func-error. **/
  error(error?: xs.QName|null|undefined, description?: string|null|undefined, data?: MLArray<any>|null|undefined): null;

    /** %-escapes everything except printable ASCII characters. **/
  escapeHtmlUri(uriPart: string): string;

    /** Returns $arg if it contains exactly one item. Otherwise, raises an error [err:FORG0005]. For detailed type semantics, see Section 7.2.16 The fn:zero-or-one, fn:one-or-more, and fn:exactly-one functions[FS]. **/
  exactlyOne(arg: MLArray<any>): any;

    /** If the value of $arg is not the empty sequence, the function returns true; otherwise, the function returns false. **/
  exists(arg: MLArray<any>): boolean;

    /** Returns the xs:boolean value false. Equivalent to xs:boolean("0"). **/
  false(): boolean;

    /** Returns the largest (closest to positive infinity) number with no fractional part that is not greater than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For float and double arguments, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
  floor(arg: number): number;

    /** Returns a formatted date value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
  formatDate(value: Date, picture: string, language?: string|null|undefined, calendar?: string|null|undefined, country?: string|null|undefined): string;

    /** Returns a formatted dateTime value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
  formatDateTime(value: Date, picture: string, language?: string|null|undefined, calendar?: string|null|undefined, country?: string|null|undefined): string;

    /** Returns a formatted string representation of value argument based on the supplied picture. An optional decimal format name may also be supplied for interpretation of the picture string. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
  formatNumber(value: number, picture: string, decimalFormatName?: string|null|undefined): string;

    /** Returns a formatted time value based on the picture argument. This is an XSLT function, and it is available in XSLT, XQuery 1.0-ml, and Server-Side JavaScript. **/
  formatTime(value: string, picture: string, language?: string|null|undefined, calendar?: string|null|undefined, country?: string|null|undefined): string;

    /** Returns true if and only if there is an XQuery or XSLT function whose name and optionally arity matches the value of the $function-name and the optional $arity arguments. This is an XSLT function, and it is available in both XSLT and XQuery 1.0-ml. **/
  functionAvailable(functionName: string, arity?: number|null|undefined): boolean;

    /** Returns a string that uniquely identifies a given node. If $node is the empty sequence, the zero-length string is returned. If the function is called without an argument, the context item is used as the default argument. The behavior of the function when the argument is omitted is the same as if the context item is passed as an argument.If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. **/
  generateId(node?: MLNodeOrObject<any>|null|undefined): string;

    /** Returns the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
  head(seq: Sequence<any>): any;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  hoursFromDateTime(arg: Date): number;

    /** Returns an xs:integer representing the hours component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  hoursFromDuration(arg: string): number;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the value of the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  hoursFromTime(arg: string): number;

    /** Returns the sequence of element nodes that have an ID value matching the value of one or more of the IDREF values supplied in $arg. **/
  id(arg: MLArray<string>, node?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Returns the sequence of element or attribute nodes that have an IDREF value matching the value of one or more of the ID values supplied in $arg. **/
  idref(arg: MLArray<string>, node?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Returns the value of the implicit timezone property from the dynamic context. Components of the dynamic context are discussed in Section C.2 Dynamic Context Components[XP]. **/
  implicitTimezone(): string;

    /** Returns the prefixes of the in-scope namespaces for $element. For namespaces that have a prefix, it returns the prefix as an xs:NCName. For the default namespace, which has no prefix, it returns the zero-length string. **/
  inScopePrefixes(element: MLNodeOrObject<any>): Sequence<string>;

    /** Returns a sequence of positive integers giving the positions within the sequence $seqParam of items that are equal to $srchParam. The collation used by the invocation of this function is determined according to the rules in 7.3.1 Collations. The collation is used when string comparison is required. The items in the sequence $seqParam are compared with $srchParam under the rules for the eq operator. Values that cannot be compared, i.e. the eq operator is not defined for their types, are considered to be distinct. If an item compares equal, then the position of that item in the sequence $srchParam is included in the result. If the value of $seqParam is the empty sequence, or if no item in $seqParam matches $srchParam, then the empty sequence is returned. The first item in a sequence is at position 1, not position 0. The result sequence is in ascending numeric order. **/
  indexOf(seqParam: MLArray<any>, srchParam: any, collationLiteral?: string|null|undefined): Sequence<number>;

    /** Returns a new sequence constructed from the value of $target with the value of $inserts inserted at the position specified by the value of $position. (The value of $target is not affected by the sequence construction.) If $target is the empty sequence, $inserts is returned. If $inserts is the empty sequence, $target is returned. The value returned by the function consists of all items of $target whose index is less than $position, followed by all items of $inserts, followed by the remaining elements of $target, in that sequence. If $position is less than one (1), the first position, the effective value of $position is one (1). If $position is greater than the number of items in $target, then the effective value of $position is equal to the number of items in $target plus 1. For detailed semantics see, Section 7.2.15 The fn:insert-before function[FS]. **/
  insertBefore(target: MLArray<any>, position: number, inserts: MLArray<any>): Sequence<any>;

    /** Idempotent function that escapes non-URI characters. **/
  iriToUri(uriPart: string): string;

    /** This function tests whether the language of $node, or the context node if the second argument is omitted, as specified by xml:lang attributes is the same as, or is a sublanguage of, the language specified by $testlang. The language of the argument node, or the context node if the second argument is omitted, is determined by the value of the xml:lang attribute on the node, or, if the node has no such attribute, by the value of the xml:lang attribute on the nearest ancestor of the node that has an xml:lang attribute. If there is no such ancestor, then the function returns false If the second argument is omitted and the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised [err:XPTY0004]. If $testlang is the empty sequence it is interpreted as the zero-length string. The relevant xml:lang attribute is determined by the value of the XPath expression: (ancestor-or-self::* /@xml:lang)[last()] If this expression returns an empty sequence, the function returns false. Otherwise, the function returns true if and only if the string-value of the relevant xml:lang attribute is equal to $testlang based on a caseless default match as specified in section 3.13 of [The Unicode Standard], or if the string-value of the relevant testlang attribute contains a hyphen, "-" (The character "-" is HYPHEN-MINUS, #x002D) such that the part of the string-value preceding that hyphen is equal to $testlang, using caseless matching. **/
  lang(testlang: string, node?: MLNodeOrObject<any>|null|undefined): boolean;

    /** Returns the local part of the name of $arg as an xs:string that will either be the zero-length string or will have the lexical form of an xs:NCName. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. If the argument is supplied and is the empty sequence, the function returns the zero-length string. If the target node has no name (that is, if it is a document node, a comment, a text node, or a namespace node having no name), the function returns the zero-length string. Otherwise, the value returned will be the local part of the expanded-QName of the target node (as determined by the dm:node-name accessor in Section 5.11 node-name Accessor[DM]. This will be an xs:string whose lexical form is an xs:NCName. **/
  localName(arg?: MLNodeOrObject<any>|null|undefined): string;

    /** Returns an xs:NCName representing the local part of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  localNameFromQName(arg: xs.QName): string;

    /** Returns the specified string converting all of the characters to lower-case characters. If a character does not have a corresponding lower-case character, then the original character is returned. The lower-case characters are determined using the Unicode Case Mappings. **/
  lowerCase(string: string): string;

    /** Returns true if the specified $input matches the specified $pattern, otherwise returns false. **/
  matches(input: string, pattern: string, flags?: string|null|undefined): boolean;

    /** Selects an item from the input sequence $arg whose value is greater than or equal to the value of every other item in the input sequence. If there are two or more such items, then the specific item whose value is returned is implementation dependent. The following rules are applied to the input sequence: Values of type xs:untypedAtomic in $arg are cast to xs:double.For numeric values, the numeric promotion rules defined in 6.2 Operators on Numeric Values are used to promote all values to a single common type. The items in the resulting sequence may be reordered in an arbitrary order. The resulting sequence is referred to below as the converted sequence.This function returns an item from the converted sequence rather than the input sequence. If the converted sequence is empty, the empty sequence is returned. All items in $arg must be numeric or derived from a single base type for which the ge operator is defined. In addition, the values in the sequence must have a total order. If date/time values do not have a timezone, they are considered to have the implicit timezone provided by the dynamic context for purposes of comparison. Duration values must either all be xs:yearMonthDuration values or must all be xs:dayTimeDuration values. If any of these conditions is not met, then a type error is raised [err:FORG0006]. If the converted sequence contains the value NaN, the value NaN is returned. If the items in the value of $arg are of type xs:string or types derived by restriction from xs:string, then the determination of the item with the largest value is made according to the collation that is used. If the type of the items in $arg is not xs:string and $collation is specified, the collation is ignored. The collation used by the invocation of this function is determined according to the rules in 7.3.1 Collations. Otherwise, the result of the function is the result of the expression: if (every $v in $c satisfies $c[1] ge $v) then $c[1] else fn:max(fn:subsequence($c, 2)) evaluated with $collation as the default collation if specified, and with $c as the converted sequence. For detailed type semantics, see Section 7.2.10 The fn:min, fn:max, fn:avg, and fn:sum functions[FS]. Notes: If the converted sequence contains exactly one value then that value is returned. The default type when the fn:max function is applied to xs:untypedAtomic values is xs:double. This differs from the default type for operators such as gt, and for sorting in XQuery and XSLT, which is xs:string. **/
  max(arg: Sequence<any>|Array<any>, collation?: string|null|undefined): any;

    /** Selects an item from the input sequence $arg whose value is less than or equal to the value of every other item in the input sequence. If there are two or more such items, then the specific item whose value is returned is implementation dependent. The following rules are applied to the input sequence: Values of type xs:untypedAtomic in $arg are cast to xs:double.For numeric values, the numeric promotion rules defined in 6.2 Operators on Numeric Values are used to promote all values to a single common type. The items in the resulting sequence may be reordered in an arbitrary order. The resulting sequence is referred to below as the converted sequence.This function returns an item from the converted sequence rather than the input sequence. If the converted sequence is empty, the empty sequence is returned. All items in $arg must be numeric or derived from a single base type for which the le operator is defined. In addition, the values in the sequence must have a total order. If date/time values do not have a timezone, they are considered to have the implicit timezone provided by the dynamic context for purposes of comparison. Duration values must either all be xs:yearMonthDuration values or must all be xs:dayTimeDuration values. If any of these conditions is not met, then a type error is raised [err:FORG0006]. If the converted sequence contains the value NaN, the value NaN is returned. If the items in the value of $arg are of type xs:string or types derived by restriction from xs:string, then the determination of the item with the largest value is made according to the collation that is used. If the type of the items in $arg is not xs:string and $collation is specified, the collation is ignored. The collation used by the invocation of this function is determined according to the rules in 7.3.1 Collations. Otherwise, the result of the function is the result of the expression: if (every $v in $c satisfies $c[1] le $v) then $c[1] else fn:min(fn:subsequence($c, 2)) evaluated with $collation as the default collation if specified, and with $c as the converted sequence. For detailed type semantics, see Section 7.2.10 The fn:min, fn:max, fn:avg, and fn:sum functions[FS]. Notes: If the converted sequence contains exactly one value then that value is returned. The default type when the fn:min function is applied to xs:untypedAtomic values is xs:double. This differs from the default type for operators such as gt, and for sorting in XQuery and XSLT, which is xs:string. **/
  min(arg: Sequence<any>|Array<any>, collation?: string|null|undefined): any;

    /** Returns an xs:integer value between 0 and 59, both inclusive, representing the minute component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  minutesFromDateTime(arg: Date): number;

    /** Returns an xs:integer representing the minutes component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  minutesFromDuration(arg: string): number;

    /** Returns an xs:integer value between 0 to 59, both inclusive, representing the value of the minutes component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  minutesFromTime(arg: string): number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  monthFromDate(arg: Date): number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  monthFromDateTime(arg: Date): number;

    /** Returns an xs:integer representing the months component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  monthsFromDuration(arg: string): number;

    /** Returns the name of a node, as an xs:string that is either the zero-length string, or has the lexical form of an xs:QName. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY002]. If the context item is not a node an error is raised: [err:XPTY0004]. If the argument is supplied and is the empty sequence, the function returns the zero-length string. If the target node has no name (that is, if it is a document node, a comment, a text node, or a namespace node having no name), the function returns the zero-length string. If the specified node was created with a namespace prefix, that namespace prefix is returned with the element localname (for example, a:hello). Note that the namespace prefix is not always the same prefix that would be returned if you serialized the QName of the node, as the serialized QName will use the namespace from the XQuery context in which it was serialized. **/
  name(arg?: MLNodeOrObject<any>|null|undefined): string;

    /** Returns the namespace URI of the xs:QName of the node specified by $arg. If the argument is omitted, it defaults to the context node. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. If $arg is the empty sequence, the xs:anyURI corresponding to the zero-length string is returned. If $arg is neither an element nor an attribute node, or if it is an element or attribute node whose expanded-QName (as determined by the dm:node-name accessor in the Section 5.11 node-name Accessor[DM]) is in no namespace, then the function returns the xs:anyURI corresponding to the zero-length string. **/
  namespaceUri(arg?: MLNodeOrObject<any>|null|undefined): string;

    /** Returns the namespace URI of one of the in-scope namespaces for $element, identified by its namespace prefix. If $element has an in-scope namespace whose namespace prefix is equal to $prefix, it returns the namespace URI of that namespace. If $prefix is the zero-length string or the empty sequence, it returns the namespace URI of the default (unnamed) namespace. Otherwise, it returns the empty sequence. Prefixes are equal only if their Unicode code points match exactly. **/
  namespaceUriForPrefix(prefix: string, element: MLNodeOrObject<any>): string;

    /** Returns the namespace URI for $arg as an xs:string. If $arg is the empty sequence, the empty sequence is returned. If $arg is in no namespace, the zero-length string is returned. **/
  namespaceUriFromQName(arg: xs.QName): string;

    /** Summary: Returns an xs:boolean indicating whether the argument node is "nilled". If the argument is not an element node, returns the empty sequence. If the argument is the empty sequence, returns the empty sequence. For element nodes, true() is returned if the element is nilled, otherwise false(). Elements may be defined in a schema as nillable, which allows an empty instance of an element to a appear in a document even though its type requires that it always have some content. Nilled elements should always be empty but an element is not considered nilled just because it's empty. It must also have the type annotation attribute xsi:nil="true". **/
  nilled(arg: MLNodeOrObject<any>): boolean;

    /** Returns an expanded-QName for node kinds that can have names. For other kinds of nodes it returns the empty sequence. If $arg is the empty sequence, the empty sequence is returned. **/
  nodeName(arg: MLNodeOrObject<any>): xs.QName;

    /** Returns the specified string with normalized whitespace, which strips off any leading or trailing whitespace and replaces any other sequences of more than one whitespace characters with a single space character (#x20). **/
  normalizeSpace(input?: string|null|undefined): string;

    /** Return the argument normalized according to the normalization criteria for a normalization form identified by the value of $normalizationForm. The effective value of the $normalizationForm is computed by removing leading and trailing blanks, if present, and converting to upper case. **/
  normalizeUnicode(arg: string, normalizationForm?: string|null|undefined): string;

    /** Returns true if the effective boolean value is false, and false if the effective boolean value is true. The $arg parameter is first reduced to an effective boolean value by applying the fn:boolean function. **/
  not(arg: MLArray<any>): boolean;

    /** Returns the value indicated by $arg or, if $arg is not specified, the context item after atomization, converted to an xs:double. If $arg is the empty sequence or if $arg or the context item cannot be converted to an xs:double, the xs:double value NaN is returned. If the context item is undefined an error is raised: [err:XPDY0002]. Calling the zero-argument version of the function is defined to give the same result as calling the single-argument version with an argument of ".". That is, fn:number() is equivalent to fn:number(.). If $arg is the empty sequence, NaN is returned. Otherwise, $arg, or the context item after atomization, is converted to an xs:double following the rules of 17.1.3.2 Casting to xs:double. If the conversion to xs:double fails, the xs:double value NaN is returned. **/
  number(arg?: any|null|undefined): number;

    /** Returns $arg if it contains one or more items. Otherwise, raises an error [err:FORG0004]. For detailed type semantics, see Section 7.2.16 The fn:zero-or-one, fn:one-or-more, and fn:exactly-one functions[FS]. **/
  oneOrMore(arg: MLArray<any>): Sequence<any>;

    /** Returns an xs:NCName representing the prefix of $arg. The empty sequence is returned if $arg is the empty sequence or if the value of $arg contains no prefix. **/
  prefixFromQName(arg: xs.QName): string;

    /** Returns an xs:QName with the namespace URI given in $paramURI. If $paramURI is the zero-length string or the empty sequence, it represents "no namespace"; in this case, if the value of $paramQName contains a colon (:), an error is raised [err:FOCA0002]. The prefix (or absence of a prefix) in $paramQName is retained in the returned xs:QName value. The local name in the result is taken from the local part of $paramQName. **/
  QName(paramURI: string, paramQName: string): xs.QName;

    /** Returns a new sequence constructed from the value of $target with the item at the position specified by the value of $position removed. If $position is less than 1 or greater than the number of items in $target, $target is returned. Otherwise, the value returned by the function consists of all items of $target whose index is less than $position, followed by all items of $target whose index is greater than $position. If $target is the empty sequence, the empty sequence is returned. For detailed type semantics, see Section 7.2.11 The fn:remove function[FS]. **/
  remove(target: MLArray<any>, position: number): Sequence<any>;

    /** Returns a string constructed by replacing the specified $pattern on the $input string with the specified $replacement string. **/
  replace(input: string, pattern: string, replacement: string, flags?: string|null|undefined): string;

    /** Returns an xs:QName value (that is, an expanded QName) by taking an xs:string that has the lexical form of an xs:QName (a string in the form "prefix:local-name" or "local-name") and resolving it using the in-scope namespaces for a given element. **/
  resolveQName(qname: string, element: MLNodeOrObject<any>): xs.QName;

    /** Resolves a relative URI against an absolute URI. If $base is specified, the URI is resolved relative to that base. If $base is not specified, the base is set to the base-uri property from the static context, if the property exists; if it does not exist, an error is thrown. **/
  resolveUri(relative: string, base?: string|null|undefined): string;

    /** Reverses the order of items in a sequence. If $arg is the empty sequence, the empty sequence is returned. For detailed type semantics, see Section 7.2.12 The fn:reverse function[FS]. **/
  reverse(target: MLArray<any>): Sequence<any>;

    /** Returns the root of the tree to which $arg belongs. This will usually, but not necessarily, be a document node. If $arg is the empty sequence, the empty sequence is returned. If $arg is a document node, $arg is returned. If the function is called without an argument, the context item is used as the default argument. If the context item is undefined an error is raised: [err:XPDY0002]. If the context item is not a node an error is raised: [err:XPTY0004]. **/
  root(arg?: MLNodeOrObject<any>|null|undefined): MLNode<any>;

    /** Returns the number with no fractional part that is closest to the argument. If there are two such numbers, then the one that is closest to positive infinity is returned. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive infinity, then positive infinity is returned. If the argument is negative infinity, then negative infinity is returned. If the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero, but greater than or equal to -0.5, then negative zero is returned. In the cases where positive zero or negative zero is returned, negative zero or positive zero may be returned as [XML Schema Part 2: Datatypes Second Edition] does not distinguish between the values positive zero and negative zero. For the last two cases, note that the result is not the same as fn:floor(x+0.5). For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
  round(arg: number): number;

    /** The value returned is the nearest (that is, numerically closest) numeric to $arg that is a multiple of ten to the power of minus $precision. If two such values are equally near (e.g. if the fractional part in $arg is exactly .500...), returns the one whose least significant digit is even. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. If no precision is specified, the result produces is the same as with $precision=0. For arguments of type xs:float and xs:double, if the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. If the argument is less than zero, but greater than or equal o -0.5, then negative zero is returned. If $arg is of type xs:float or xs:double, rounding occurs on the value of the mantissa computed with exponent = 0. For detailed type semantics, see Section 7.2.3 The fn:abs, fn:ceiling, fn:floor, fn:round, and fn:round-half-to-even functions[FS]. **/
  roundHalfToEven(arg: number, precision?: number|null|undefined): number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
  secondsFromDateTime(arg: Date): number;

    /** Returns an xs:decimal representing the seconds component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  secondsFromDuration(arg: string): number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive, representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
  secondsFromTime(arg: string): number;

    /** Returns true if the first parameter starts with the string from the second parameter, otherwise returns false. **/
  startsWith(parameter1: string, parameter2: string, collation?: string|null|undefined): boolean;

    /** Returns the value of the base-uri property from the static context. If the base-uri property is undefined, the empty sequence is returned. Components of the static context are discussed in Section C.1 Static Context Components[XP]. **/
  staticBaseUri(): string;

    /** Returns the value of $arg represented as an xs:string. If no argument is supplied, this function returns the string value of the context item (.). **/
  string(arg?: any|null|undefined): string;

    /** Returns an xs:string created by concatenating the members of the $parameter1 sequence using $parameter2 as a separator. If the value of $arg2 is the zero-length string, then the members of $parameter1 are concatenated without a separator. If the value of $parameter1 is the empty sequence, the zero-length string is returned. **/
  stringJoin(parameter1: MLArray<string>, parameter2: string): string;

    /** Returns an integer representing the length of the specified string. The length is 1-based, so a string that is one character long returns a value of 1. **/
  stringLength(sourceString?: string|null|undefined): number;

    /** Returns the sequence of Unicode code points that constitute an xs:string. If $arg is a zero-length string or the empty sequence, the empty sequence is returned. **/
  stringToCodepoints(arg: string): Sequence<number>;

    /** Returns the contiguous sequence of items in the value of $sourceSeq beginning at the position indicated by the value of $startingLoc and continuing for the number of items indicated by the value of $length. In the two-argument case, returns: $sourceSeq[fn:round($startingLoc) le $p] In the three-argument case, returns: $sourceSeq[fn:round($startingLoc) le $p and $p lt fn:round($startingLoc) + fn:round($length)] Notes: If $sourceSeq is the empty sequence, the empty sequence is returned. If $startingLoc is zero or negative, the subsequence includes items from the beginning of the $sourceSeq. If $length is not specified, the subsequence includes items to the end of $sourceSeq. If $length is greater than the number of items in the value of $sourceSeq following $startingLoc, the subsequence includes items to the end of $sourceSeq. The first item of a sequence is located at position 1, not position 0. For detailed type semantics, see Section 7.2.13 The fn:subsequence functionFS. The reason the function accepts arguments of type xs:double is that many computations on untyped data return an xs:double result; and the reason for the rounding rules is to compensate for any imprecision in these floating-point computations. **/
  subsequence(sourceSeq: Sequence<any>, startingLoc: number, length?: number|null|undefined): Sequence<any>;

    /** Returns a substring starting from the $startingLoc and continuing for $length characters. **/
  substring(sourceString: string, startingLoc: number, length?: number|null|undefined): string;

    /** Returns the substring created by taking all of the input characters that occur after the specified $after characters. **/
  substringAfter(input: string, after: string, collation?: string|null|undefined): string;

    /** Returns the substring created by taking all of the input characters that occur before the specified $before characters. **/
  substringBefore(input: string, before: string, collation?: string|null|undefined): string;

    /** Returns a value obtained by adding together the values in $arg. If $zero is not specified, then the value returned for an empty sequence is the xs:integer value 0. If $zero is specified, then the value returned for an empty sequence is $zero. Any values of type xs:untypedAtomic in $arg are cast to xs:double. The items in the resulting sequence may be reordered in an arbitrary order. The resulting sequence is referred to below as the converted sequence. If the converted sequence is empty, then the single-argument form of the function returns the xs:integer value 0; the two-argument form returns the value of the argument $zero. If the converted sequence contains the value NaN, NaN is returned. All items in $arg must be numeric or derived from a single base type. In addition, the type must support addition. Duration values must either all be xs:yearMonthDuration values or must all be xs:dayTimeDuration values. For numeric values, the numeric promotion rules defined in 6.2 Operators on Numeric Values are used to promote all values to a single common type. The sum of a sequence of integers will therefore be an integer, while the sum of a numeric sequence that includes at least one xs:double will be an xs:double. If the above conditions are not met, a type error is raised [err:FORG0006]. Otherwise, the result of the function, using the second signature, is the result of the expression: if (fn:count($c) eq 0) then $zero else if (fn:count($c) eq 1) then $c[1] else $c[1] + fn:sum(subsequence($c, 2)) where $c is the converted sequence. The result of the function, using the first signature, is the result of the expression:fn:sum($arg, 0). For detailed type semantics, see Section 7.2.10 The fn:min, fn:max, fn:avg, and fn:sum functions[FS]. Notes: The second argument allows an appropriate value to be defined to represent the sum of an empty sequence. For example, when summing a sequence of durations it would be appropriate to return a zero-length duration of the appropriate type. This argument is necessary because a system that does dynamic typing cannot distinguish "an empty sequence of integers", for example, from "an empty sequence of durations". If the converted sequence contains exactly one value then that value is returned. **/
  sum(arg: Sequence<any>|Array<any>, zero?: any|null|undefined): any;

    /** Returns all but the first item in a sequence. For more details, see XPath 3.0 Functions and Operators. **/
  tail(seq: MLArray<any>): Sequence<any>;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
  timezoneFromDate(arg: Date): string;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
  timezoneFromDateTime(arg: Date): string;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
  timezoneFromTime(arg: string): string;

    /** Returns a sequence of strings contructed by breaking the specified input into substrings separated by the specified $pattern. The specified $pattern is not returned as part of the returned items. **/
  tokenize(input: string, pattern: string, flags?: string|null|undefined): Sequence<string>;

    /** Return the input $value unchanged and, if $label is the name of an enabled server event, log event to the App Server log file <install_dir>/Logs/<port>_ErrorLog.txt; where <install_dir> is the MarkLogic install directory, and <port> is the port number of the current App Server or "TaskServer" if the current request is running on the Task Server. **/
  trace(value: MLArray<any>, label: string): Sequence<any>;

    /** Returns a string where every character in $src that occurs in some position in the $mapString is translated into the $transString character in the corresponding location of the $mapString character. **/
  translate(src: string, mapString: string, transString: string): string;

    /** Returns the xs:boolean value true. Equivalent to xs:boolean("1"). **/
  true(): boolean;

    /** Returns true if and only if there is a type whose name matches the value of the $type-name argument is present in the static context. This is an XSLT function, and it is available in both XSLT and in XQuery 1.0-ml. **/
  typeAvailable(typeName: string): boolean;

    /** Returns the items of $sourceSeq in an implementation dependent order. Note: Query optimizers may be able to do a better job if the order of the output sequence is not specified. For example, when retrieving prices from a purchase order, if an index exists on prices, it may be more efficient to return the prices in index order rather than in document order. **/
  unordered(sourceSeq: MLArray<any>): Sequence<any>;

    /** Reads a file stored in the database as either text or binary file and returns its contents as a string. **/
  unparsedText(href: string, encoding?: string|null|undefined): string;

    /** Returns true if a call to unparsed-text would succeed with identical arguments. **/
  unparsedTextAvailable(href: string, encoding?: string|null|undefined): boolean;

    /** Returns the specified string converting all of the characters to upper-case characters. If a character does not have a corresponding upper-case character, then the original character is returned. The upper-case characters are determined using the Unicode Case Mappings. **/
  upperCase(string: string): string;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  yearFromDate(arg: Date): number;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  yearFromDateTime(arg: Date): number;

    /** Returns an xs:integer representing the years component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  yearsFromDuration(arg: string): number;

    /** Returns $arg if it contains zero or one items. Otherwise, raises an error [err:FORG0003]. For detailed type semantics, see Section 7.2.16 The fn:zero-or-one, fn:one-or-more, and fn:exactly-one functions[FS]. **/
  zeroOrOne(arg: MLArray<any>): any;

}
declare var fn:fnFunctions

/**

The geospatial built-in functions are XQuery functions defined to operate on
geospatial values.
 Use the geospatial constructor functions to create geospatial
  primitive types such as points, boxes, circles, and polygons from raw
  data. You can use the resulting constructs in geospatial queries,
  geospatial lexicon analysis, and geospatial operations such as
  tests for containment or interesection. Use the following geospatial built-in functions to perform operations
  on geospatial values, such as region containment or intersection, and
  conversion between MarkLogic geospatial primitive values and standard
  formats such as WKT. The following functions are deprecated. You should use the
  corresponding functions in the geo namespace instead.
  For example, use geo:distance instead of
  cts:distance in XQuery; use geo.distance
  instead of cts.distance in Server-Side JavaScript. The geospatial support functions provide utilities for geospatial queries
 using GML, KML, GeoRSS/Simple, MetaCarta and GeoJSON Geospatial markup. The
 functions in the "Geo" subcategory attempt to detect the type of markup and
 adapt accordingly. You can also use one of the markup-specific subcategories
 if you know the type of data you're working with and wish to skip the
 auto-detection of format.

 For more details, see
 Geospatial Search Applications in the Search Developer's Guide
 in the Search Developer's Guide and the following function
 subcategories:
GeoGeoJSONGeoRSSGMLKML The Geo module provides support for geospatial queries using GML, KML,
GeoRSS/Simple, Metacarta or GeoJSON Geospatial markup.
To use this module in your Server-Side JavaScript code, include a
   require statement similar to following line in your code:
  var geo = require('/MarkLogic/geospatial/geospatial');The library namespace prefix geo is not predefined
  in the server.

**/

interface geoFunctions {

    /** Return a point approximating the center of the given region. For a point, this is the point itself. For a circle, it is the center point. For a box, it is the point whose latitude is half-way between the northern and southern limits and whose longitude is half-way between the western and eastern limits. For polygons, complex polygons, and linestrings, an approximate centroid is returned. This approximation is rough, and useful for quick comparisons. **/
  approxCenter(region: cts.Region, options?: MLArray<string>|null|undefined): cts.Point;

    /** Returns the point at the intersection of two arcs. If the arcs do not intersect, or lie on the same great circle, or if either arc covers more than 180 degrees, an error is raised. **/
  arcIntersection(p1: cts.Point, p2: cts.Point, q1: cts.Point, q2: cts.Point, options?: MLArray<string>|null|undefined): cts.Point;

    /** Returns the true bearing in radians of the path from the first point to the second. An error is raised if the two points are the same. **/
  bearing(p1: cts.Point, p2: cts.Point, options?: MLArray<string>|null|undefined): number;

    /** Returns a sequence of boxes that bound the given region. **/
  boundingBoxes(region: cts.Region, options?: MLArray<string>|null|undefined): Sequence<cts.Box>;

    /** Create a cts.box value from a node representing a box in one of the supported markup vocabularies, such as KML, GML, or GeoJSON. **/
  box(box: MLNodeOrObject<any>): cts.Box;

    /** Returns true if the box intersects with a region. **/
  boxIntersects(box: cts.Box, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Create a cts.box value from a radius and a node representing a point in one of the supported markup vocabularies, such as KML, GML, or GeoJSON. **/
  circle(radius: number, center: MLNodeOrObject<any>): cts.Circle;

    /** Returns true if the circle intersects with a region. **/
  circleIntersects(circle: cts.Circle, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Construct a polygon approximating a circle. **/
  circlePolygon(circle: cts.Circle, arcTolerance: number, options?: MLArray<string>|null|undefined): cts.Region;

    /** Create a cts.complexPolygon value from a node representing a complex polygon in one of the supported markup vocabularies, such as KML, GML, or GeoJSON. The complex polygon represents the combination of the exterior polygon and interior polygons in their representation. **/
  complexPolygon(complexPolygon: MLNodeOrObject<any>): cts.ComplexPolygon;

    /** Returns true if the complex-polygon contains a region. **/
  complexPolygonContains(complexPolygon: cts.ComplexPolygon, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Returns true if the complex-polygon intersects with a region. **/
  complexPolygonIntersects(complexPolygon: cts.ComplexPolygon, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Get the canonical name for the coordinate system. An exception is thrown if no such coordinate system exists. **/
  coordinateSystemCanonical(name: string, precision?: string|null|undefined): string;

    /** Return a count of the distinct number of vertices in a region, taking tolerance into account. **/
  countDistinctVertices(region: cts.Region, options?: MLArray<string>|null|undefined): number;

    /** This function returns a count of the number of vertices in a region. **/
  countVertices(region: cts.Region): number;

    /** Get the canonical name for the coordinate system currently in effect. **/
  defaultCoordinateSystem(): string;

    /** Returns the point at the given distance (in units) along the given bearing (in radians) from the starting point. **/
  destination(p: cts.Point, bearing: number, distance: number, options?: MLArray<string>|null|undefined): cts.Point;

    /** Returns the distance (in units) between two points. **/
  distance(p1: cts.Point, p2: cts.Point, options?: MLArray<string>|null|undefined): number;

    /** This function converts a distance from one unit of measure to another. The supported units are "miles", "feet", "km", and "meters". This is a proper superset of the units supported as options to various geospatial functions ("miles","km"). **/
  distanceConvert(distance: number, unit1: string, unit2: string): number;

    /** Construct a polygon approximating an ellipse. **/
  ellipsePolygon(center: cts.Point, semiMajorAxis: number, semiMinorAxis: number, azimuth: number, arcTolerance: number, options?: MLArray<string>|null|undefined): cts.Region;

    /** Given a geohash string, return the bounding box for that hash. **/
  geohashDecode(hash: string): cts.Box;

    /** Given a geohash string, return the point for that hash. **/
  geohashDecodePoint(hash: string): cts.Point;

    /** Compute a set of covering geohashes for the given region, to the given level of precision. **/
  geohashEncode(region: cts.Region, geohashPrecision?: number|null|undefined, options?: MLArray<string>|null|undefined): string;

    /** Given a geohash string, return hashes for the neighbors. The result is a map with the keys "N", "NE", "E", "SE", "S", "SW", "W", "NW" for the neighbors in those directions. **/
  geohashNeighbors(hash: string): {[key:string]:any};

    /** Given a geohash string, return the height and width for the given precision. The result is a pair of double: the height (latitude span) followed by the width (longitude span). **/
  geohashPrecisionDimensions(precision: number): Sequence<number>;

    /** Given a geohash string, return the 32 subhashes. **/
  geohashSubhashes(hash: string, which: string): Sequence<string>;

    /** Returns a query matching points within given regions. **/
  geospatialQuery(regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Returns a query matching points within given regions. **/
  geospatialQueryFromElements(regions: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Returns a query matching points within given regions. **/
  geospatialQueryFromNodes(regions: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** This function returns a point that is guaranteed to be inside the bounds of the given region. For a given region and set of options, the point returned should be stable from one call to the next. **/
  interiorPoint(region: cts.Region, options?: MLArray<string>|null|undefined): cts.Point;

    /** Create a sequence of cts.polygon values from a polygon node in one of the supported markup vocabularies, such as KML or GML. These polygons represent the interior polygons, if any. **/
  interiorPolygon(polygon: MLNodeOrObject<any>): Sequence<cts.Polygon>;

    /** Create a cts.linestring value from a node representing a linestring in one of the supported markup vocabularies, such as GML or KML. **/
  linestring(linestring: MLNodeOrObject<any>): cts.Linestring;

    /** Construct a linestring by concatenating the vertices of the input linestrings, in order. **/
  linestringConcat(linestrings: MLArray<cts.Linestring>): cts.Linestring;

    /** Construct a linestring with the vertices in reverse order. **/
  linestringReverse(linestring: cts.Linestring): cts.Linestring;

    /** Convert nodes in one or more of the supported geospatial representations into cts.region values. **/
  parse(data: MLArray<any>): Sequence<cts.Region>;

    /** Returns a sequence of geospatial regions parsed from Well-Known Binary format. **/
  parseWkb(wkb: MLNode<any>): Sequence<cts.Region>;

    /** Returns a sequence of geospatial regions parsed from Well-Known Text format. **/
  parseWkt(wkt: MLArray<string>): Sequence<cts.Region>;

    /** Create a cts.point value from a node representing a point in one of the supported markup vocabularies, such as KML or GML. **/
  point(point: MLNodeOrObject<any>): cts.Point;

    /** Create a cts.polygon value from a sequence of point nodes in one of the supported markup vocabularies, such as KML or GML. **/
  polygon(polygonOrPoints: MLArray<any>): cts.Polygon;

    /** Returns true if the polygon contains a region. **/
  polygonContains(polygon: cts.Polygon, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Returns true if the polygon intersects with a region. **/
  polygonIntersects(polygon: cts.Polygon, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Construct a linestring from the vertices of a polygon, or construct a sequence of linestrings from the outer and inner polygons of a complex polygon. **/
  polygonToLinestring(region: cts.Region): Sequence<cts.Linestring>;

    /** Perform an affine transformation on a geospatial region. The transformation is always applied in the raw coordinate system (Cartesian). **/
  regionAffineTransform(region: cts.Region, transform: MLArray<{[key:string]:any}>, options?: MLArray<string>|null|undefined): cts.Region;

    /** This function returns a simplified approximation of the region, using the Douglas-Peucker algorithm. **/
  regionApproximate(region: cts.Region, threshold: number, options?: MLArray<string>|null|undefined): cts.Region;

    /** This function fixes various problems with the region or raises an error if it is not repairable. The only relevant fix for MarkLogic is to remove duplicate adjacent vertices in polygons (including inner and outer polygons of complex polygons). The only relevant options are options controlling the coordinate system and the tolerance option. **/
  regionClean(region: cts.Region, options?: MLArray<string>|null|undefined): cts.Region;

    /** Returns true if one region contains the other region. **/
  regionContains(region: cts.Region, region2: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Calculates the Dimensionally Extended nine-Intersection Matrix (DE-9IM) of two geospatial regions. **/
  regionDe9im(region1: cts.Region, region2: cts.Region, options?: MLArray<string>|null|undefined): string;

    /** Returns true if the target region intersects with a region. **/
  regionIntersects(target: cts.Region, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): boolean;

    /** Compares geospatial regions based on a specified relationship. For example, determine if two regions overlap. **/
  regionRelate(region1: cts.Region, operation: string, region2: cts.Region, options?: MLArray<string>|null|undefined): boolean;

    /** Remove duplicate (adjacent) vertices. **/
  removeDuplicateVertices(region: cts.Region, options?: MLArray<string>|null|undefined): cts.Region;

    /** Returns the great circle distance (in units) between a point and a region. The region is defined by a cts.region. **/
  shortestDistance(p1: cts.Point, region: MLArray<cts.Region>, options?: MLArray<string>|null|undefined): number;

    /** Returns a binary node in Well-Known Binary format. **/
  toWkb(wkb: MLArray<cts.Region>): Sequence<string>;

    /** Returns a sequence of strings in Well-Known Text format. **/
  toWkt(wkt: MLArray<cts.Region>): Sequence<string>;

    /** Returns true if the binary data can be parsed as WKB into a supported region type. **/
  validateWkb(wkb: MLNode<any>): boolean;

    /** Returns true if the string is valid Well-Known Text for a supported region type. **/
  validateWkt(wkt: string): boolean;

}
declare var geo:geoFunctions

/**
The GML module provides support for geospatial queries using GML
markup.
To use the GML module in your Server-Side JavaScript code, include a
require statement similar to following line in your code:
var geogml = require('/MarkLogic/geospatial/gml.xqy');The library namespace prefix geogml is not predefined
in the server.
**/

interface geogmlFunctions {

    /** Create a cts:box value from a GML Envelope element. **/
  box(box: MLNodeOrObject<any>): cts.Box;

    /** Create a cts:circle value from a radius and GML Point element. **/
  circle(radius: number, center: MLNodeOrObject<any>): cts.Circle;

    /** Create a cts:complex-polygon value from a GML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
  complexPolygon(complexPolygon: MLNodeOrObject<any>): cts.ComplexPolygon;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined, namespace?: string|null|undefined): cts.Query;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromElements(regions: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Create a sequence of cts:polygon values from a GML Polygon element. The polygons returned represent the interior polygons, if any. **/
  interiorPolygon(polygon: MLNodeOrObject<any>): Sequence<cts.Polygon>;

    /** Create a cts:linestring value from a GML LineString element. **/
  linestring(linestring: MLNodeOrObject<any>): cts.Linestring;

    /** Construct regions from GML elements. **/
  parseGml(gml: MLArray<any>): Sequence<cts.Region>;

    /** Create a cts:point value from a GML Point element. **/
  point(point: MLNodeOrObject<any>): cts.Point;

    /** Create a cts:polygon value from a sequence of GML Point elements or a GML Polygon element. **/
  polygon(polygonOrPoints: MLArray<any>): cts.Polygon;

    /** Construct GML elements from cts:region values. **/
  toGml(region: MLArray<cts.Region>, gmlNamespace?: string|null|undefined): Sequence<any>;

}
declare var geogml:geogmlFunctions

/**
The GeoJSON module provides support for geospatial queries using GeoJSON.To use the GeoJSON in your JavaScript code, include a require
  statement similar to the following in your code:
var geojson = require('/MarkLogic/geospatial/geojson.xqy');The library namespace prefix geojson is not
  predefined in the server.
**/

interface geojsonFunctions {

    /** Create a cts:box value from GeoJSON bbox property. **/
  box(box: ObjectNode): cts.Box;

    /** Create a cts:circle value from a radius and a GeoJSON "Point" type geometry object. **/
  circle(radius: number, center: ObjectNode): cts.Circle;

    /** Create a cts:complex-polygon value from a GeoJSON "Polygon" type geometry object. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
  complexPolygon(complexPolygon: MLNodeOrObject<any>): cts.ComplexPolygon;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromNodes(regions: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Create a sequence of cts:polygon values from a GeoJSON "Polygon" type geometry object. The returned polygons represent the interior polygons, if any. **/
  interiorPolygon(polygon: ObjectNode): Sequence<cts.Polygon>;

    /** Create a cts:linestring value from a GeoJSON "LineString" type geometry object. **/
  linestring(linestring: ObjectNode): cts.Linestring;

    /** Create a set of cts:linestring values from a GeoJSON "MultiLineString" type geometry object. **/
  multiLinestring(multiLinestring: ObjectNode): Sequence<cts.Linestring>;

    /** Create a set of cts:point values from a GeoJSON "MultiPoint" type geometry object. **/
  multiPoint(multiPoint: ObjectNode): Sequence<cts.Point>;

    /** Convert GeoJSON object nodes into cts:region values. **/
  parseGeojson(geojson: MLArray<ObjectNode>): Sequence<cts.Region>;

    /** Create a cts:point value from a GeoJSON "Point" type geometry object. **/
  point(point: ObjectNode): cts.Point;

    /** Create a cts:polygon value from a GeoJSON "Polygon" type geometry object or a sequence of GeoJSON "Point" type geometry objects. **/
  polygon(polygonOrPoints: MLArray<ObjectNode>): cts.Polygon;

    /** Convert cts:region values into GeoJSON object nodes. **/
  toGeojson(regions: MLArray<cts.Region>): Sequence<ObjectNode>;

}
declare var geojson:geojsonFunctions

/**
The KML module provides support for geospatial queries using KML
markup.
To use the KML module in your Server-Side JavaScript code, include a
require statement similar to the following in your code:
var kml = require('/MarkLogic/geospatial/kml.xqy');The library namespace prefix kml is not predefined
in the server.
**/

interface geokmlFunctions {

    /** Create a cts:box value from a KML LatLongBox element. **/
  box(envelope: MLNodeOrObject<any>): cts.Box;

    /** Create a cts:circle value from a radius and KML Point or Location element. **/
  circle(radius: number, center: MLNodeOrObject<any>): cts.Circle;

    /** Create a cts:complex-polygon value from a KML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
  complexPolygon(complexPolygon: MLNodeOrObject<any>): cts.ComplexPolygon;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined, namespace?: string|null|undefined): cts.Query;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromElements(regions: MLArray<any>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Create a sequence of cts:polygon values from a KML Polygon element. The returned polygons represent the interior polygons, if any. **/
  interiorPolygon(points: MLNodeOrObject<any>): Sequence<cts.Polygon>;

    /** Create a cts:linestring value from a KML LineString element. **/
  linestring(linestring: MLNodeOrObject<any>): cts.Linestring;

    /** Construct regions from KML elements. **/
  parseKml(kml: MLArray<any>): Sequence<cts.Region>;

    /** Create a cts:point value from a KML Point or Location element. **/
  point(point: MLNodeOrObject<any>): cts.Point;

    /** Create a cts:polygon value from a KML polygon or a sequence of KML Point or Location elements. **/
  polygon(polygonOrPoints: MLArray<any>): cts.Polygon;

    /** Construct KML elements from cts:region values. **/
  toKml(region: MLArray<cts.Region>, namespace?: string|null|undefined): Sequence<any>;

}
declare var geokml:geokmlFunctions

/**
The GeoRSS module provides support for geospatial queries using
GeoRSS/Simple XML markup.
To use the GeoRSS module in your Server-Side JavaScript code, include a
require statement similar to following line in your code:
var gml = require('/MarkLogic/geospatial/georss.xqy');The library namespace prefix georss is not predefined
in the server.
**/

interface georssFunctions {

    /** Create a cts:circle value from a radius and GeoRSS point element. **/
  circle(radius: number, center: MLNodeOrObject<any>): cts.Circle;

    /** Create a cts:complex-polygon value from a GeoRSS "Polygon" element. Given that GeoRSS doesn't have interior polygons, the complex-polygon returned is equivalent to the polygon returned by polygon as far as queries are concerned. **/
  complexPolygon(complexPolygon: MLNodeOrObject<any>): cts.ComplexPolygon;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: MLArray<cts.Region>, options?: MLArray<string>|null|undefined, weight?: number|null|undefined): cts.Query;

    /** Create a cts:linestring value from a GeoRSS line element. **/
  linestring(linestring: MLNodeOrObject<any>): cts.Linestring;

    /** Construct zero or more cts:region values from GeoRSS XML elements. **/
  parseGeorss(georss: MLArray<any>): Sequence<cts.Region>;

    /** Create a cts:point value from a GeoRSS point element. **/
  point(point: MLNodeOrObject<any>): cts.Point;

    /** Create a cts:polygon value from a sequence of GeoRSS point elements or a GeoRSS polygon element. **/
  polygon(polygonOrPoints: MLArray<any>): cts.Polygon;

    /** Convert cts:region values to GeoRSS XML elements. **/
  toGeorss(regions: MLArray<cts.Region>): Sequence<any>;

}
declare var georss:georssFunctions

/**

  The JavaScript Global Object functions are MarkLogic-specific JavaScript
  functions that extend the Global Object.  These functions are available
  in the Global space, without any prefixing.

 Methods and properties on the Error Object.

 Methods and properties on the xs.yearMonthDuration Object.

 Methods and properties on the xs.dayTimeDuration Object.

 Methods and properties on the xs.dateTime Object.

 Methods and properties on the xs.date Object.

 Methods and properties on the xs.time Object.

 Methods and properties on the xs.gYearMonth Object.

 Methods and properties on the xs.gYear Object.

 Methods and properties on the xs.gMonthDay Object.

 Methods and properties on the xs.gMonth Object.

 Methods and properties on the TypeInfo Object.

 Methods and properties on the NodeBuilder Object.

 Methods and properties on the Value Object.

 [DEPRECATED: Only available for type checking; use
Sequence instead. For more details,
 on transitioning your code, see
 ValueIterator in the JavaScript Reference Guide. ]
 Methods and properties on the ValueIterator Object.

 Methods and properties on the Node Object.

 Methods and properties on the NodeList Object.

 Methods and properties on the NamedNodeMap Object.

 Methods and properties on the XMLDocument Object.

 Methods and properties on the Element Object (for XML Elements).

 Methods and properties on the Attr Object (for XML attributes).

 Methods and properties on the CharacterData Object.

 Methods and properties on the TypeInfo Object.

**/

    /** Declares the statement to be an update. A JavaScript statement is executed as a query unless declareUpdate() is called at the beginning of the statement. Calling declareUpdate with an options argument where explicitCommit property is set to true starts a multi-statement transaction and requires an explicit commit or rollback to complete the transaction. If the options argument is omitted, or the property explicitCommit property is set to false, an update is automatically committed. XDMP-OWNTXN is thrown if the request is in an open transaction. **/
  declare function declareUpdate(options?: Object|null|undefined): null;

    /** Imports a module at the specified location, and returns a JavaScript object. **/
  declare function require(location: string): Object;


/**
This is the JSON module used for customized tranformation
			from XML to and from JSON.To use the JSON module as part of your own XQuery
			module, include the following line in your
			XQuery prolog: import module namespace json = "http://marklogic.com/xdmp/json"
         at "/MarkLogic/json/json.xqy";The JSON module employs a concept of 'strategies'.  Strategies
		    are different methods of transforming XML to JSON or JSON
		    to XML.  Different strategies tackle different use
		    cases.The basic strategy is used by the REST API and
		    handles the use case of transforming arbitrary JSON into a
		    fixed XML structure which is designed to be efficiently
		    stored and indexed in MarkLogic.
		    The basic strategy is semantically
		    roundtrippable from JSON to XML back to JSON.  The
		    basic strategy is
		    used when no configuration object is specified.The full strategy targets the opposite use case
		    as the default (basic) strategy.
		    The full strategy
		    takes arbitrary XML and produces a fixed JSON structure
		    which preserves most of the semantics of the XML
		    document.The custom strategy allows customization of the
		    JSON and XML transformation and produces more reasonable
		    looking XML or JSON at the expense of supporting a
		    smaller subset of XML document structures.
**/

interface jsonFunctions {

    /** This function checks a json configuration object and returns a report. **/
  checkConfig(config: {[key:string]:any}): Sequence<MLNode<any>>;

    /** This function creates a configuration object for a specified strategy. **/
  config(strategy: string): {[key:string]:any};

    /** This function transforms a JSON document to XML using the default ("basic") strategy. **/
  transformFromJson(json: any, config?: {[key:string]:any}|null|undefined): Sequence<any>;

    /** This function transforms an XML document to JSON using the default ("basic") strategy if none is supplied. **/
  transformToJson(node: MLNodeOrObject<any>, config?: {[key:string]:any}|null|undefined): DocumentNode<any>;

    /** This function transforms an XML document to JSON and returns an object. **/
  transformToJsonObject(node: MLNodeOrObject<any>, config: {[key:string]:any}): Sequence<any>;

    /** This function transforms an XML document to JSON and returns an xml element. **/
  transformToJsonXml(node: MLNodeOrObject<any>, config?: {[key:string]:any}|null|undefined): MLNode<any>;

}
declare var json:jsonFunctions

/**

The math built-in functions.

**/

interface mathFunctions {

    /** Returns the arc cosine of x, in radians, in the range from 0 to pi (inclusive). **/
  acos(x: number): number;

    /** Returns the arc sine of x, in radians, in the range from -pi/2 to +pi/2 (inclusive). **/
  asin(x: number): number;

    /** Returns the arc tangent of x, in radians. in the range from -pi/2 to +pi/2 (inclusive). **/
  atan(x: number): number;

    /** Returns the arc tangent of y/x, in radians, in the range from -pi/2 to +pi/2 (inclusive), using the signs of y and x to determine the apropriate quadrant. **/
  atan2(y: number, x: number): number;

    /** Returns the smallest integer greater than or equal to x. **/
  ceil(x: number): number;

    /** Returns the Pearson correlation coefficient of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. After the elimination, if the standard deviation of the first column or the standard deviation of the second column is 0, the function returns the empty sequence. **/
  correlation(arg: MLArray<Array<any>>): number;

    /** Returns the cosine of x, in the range from -1 to +1 (inclusive). **/
  cos(x: number): number;

    /** Returns the hyperbolic cosine of x. **/
  cosh(x: number): number;

    /** Returns the cotangent of x. **/
  cot(x: number): number;

    /** Returns the sample covariance of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. For the version of this that uses range indexes, see cts.covariance. **/
  covariance(arg: MLArray<Array<any>>): number;

    /** Returns the population covariance of a data set. The size of the input array should be 2. The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is 0, the function returns the empty sequence. For the version of this that uses range indexes, see cts.covarianceP. **/
  covarianceP(arg: MLArray<Array<any>>): number;

    /** Returns numeric expression converted from radians to degrees. **/
  degrees(x: number): number;

    /** Returns e (approximately 2.71828182845905) to the xth power. **/
  exp(x: number): number;

    /** Returns the absolute value of x. **/
  fabs(x: number): number;

    /** Returns the largest integer less than or equal to x. **/
  floor(x: number): number;

    /** Returns the remainder of x/y. **/
  fmod(x: number, y: number): number;

    /** Returns x broken up into mantissa and exponent, where x = mantissa*2^exponent. **/
  frexp(x: number): Sequence<any>;

    /** Returns x*2^i. **/
  ldexp(y: number, i: number): number;

    /** Returns a linear model that fits the given data set. The size of the input array should be 2, as currently only simple linear regression model is supported. The first element of the array should be the value of the dependent variable while the other element should be the value of the independent variable.The function eliminates all pairs for which either the first element or the second element is empty. After the elimination, if the length of the input is less than 2, the function returns the empty sequence. After the elimination, if the standard deviation of the independent variable is 0, the function returns a linear model with intercept = the mean of the dependent variable, coefficients = NaN and r-squared = NaN. After the elimination, if the standard deviation of the dependent variable is 0, the function returns a linear model with r-squared = NaN.For the version of this function that uses Range Indexes, see cts:linear-model. **/
  linearModel(arg: MLArray<Array<any>>): math.LinearModel;

    /** Returns the coefficients of the linear model. Currently only simple linear regression model is supported so the return should contain only one coefficient (also called "slope"). **/
  linearModelCoeff(linearModel: math.LinearModel): Sequence<number>;

    /** Returns the intercept of the linear model. **/
  linearModelIntercept(linearModel: math.LinearModel): number;

    /** Returns the R^2 value of the linear model. **/
  linearModelRsquared(linearModel: math.LinearModel): number;

    /** Returns the base-e logarithm of x. **/
  log(x: number): number;

    /** Returns the base-10 logarithm of x. **/
  log10(x: number): number;

    /** Returns the median of a sequence of values. The function returns the empty sequence if the input is the empty sequence. **/
  median(arg: MLArray<number>): number;

    /** Returns the mode of a sequence. The mode is the value that occurs most frequently in a data set. If no value occurs more than once in the data set, the function returns the empty sequence. If the input is the empty sequence, the function returns the empty sequence. Note that a data set can have multiple “modes”. The order of multiple modes in the returned sequence is undefined. Also note that values from a lexicon lookup are repeated cts:frequency times before calculating the mode. The function can be used on numeric values, xs:yearMonthDuration, xs:dayTimeDuration, xs:string, xs:anyURI, xs:date, xs:dateTime, xs:time, and cts:point. **/
  mode(arg: MLArray<any>, options?: MLArray<string>|null|undefined): Sequence<any>;

    /** Returns x broken up into fraction and integer. x = fraction+integer. **/
  modf(x: number): Sequence<any>;

    /** Returns the rank of a value in a data set as a percentage of the data set. If the given value is not equal to any item in the sequence, the function returns the empty sequence. See math:rank. **/
  percentRank(arg: MLArray<any>, value: any, options?: MLArray<string>|null|undefined): number;

    /** Returns a sequence of percentile(s) given a sequence of percentage(s). The function returns the empty sequence if either $arg or $p is the empty sequence. **/
  percentile(arg: MLArray<number>, p: MLArray<number>): Sequence<number>;

    /** Returns the value of pi. **/
  pi(): number;

    /** Returns x^y. **/
  pow(x: number, y: number): number;

    /** Returns numeric expression converted from degrees to radians. **/
  radians(x: number): number;

    /** Returns the rank of a value in a data set. Ranks are skipped in the event of ties. If the given value is not equal to any item in the sequence, the function returns the empty sequence. The function can be used on numeric values, xs:yearMonthDuration, xs:dayTimeDuration, xs:string, xs:anyURI, xs:date, xs:dateTime, xs:time, and cts:point. **/
  rank(arg1: MLArray<any>, arg2: any, options?: MLArray<string>|null|undefined): number;

    /** Returns the sine of x, in the range from -1 to +1 (inclusive). **/
  sin(x: number): number;

    /** Returns the hyperbolic sine of x. **/
  sinh(x: number): number;

    /** Returns the square root of x. **/
  sqrt(x: number): number;

    /** Returns the sample standard deviation of a sequence of values. The function returns the empty sequence if the length of the input sequence is less than 2. **/
  stddev(arg: MLArray<number>): number;

    /** Returns the standard deviation of a population. The function returns the empty sequence if the input is the empty sequence. **/
  stddevP(arg: MLArray<number>): number;

    /** Returns the tangent of x. **/
  tan(x: number): number;

    /** Returns the hyperbolic tangent of x, in the range from -1 to +1 (inclusive). **/
  tanh(x: number): number;

    /** Returns the number truncated to a certain number of decimal places. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type. For xs:float and xs:double arguments, if the argument is positive infinity, then positive infinity is returned. If the argument is negative infinity, then negative infinity is returned. If the argument is positive zero, then positive zero is returned. If the argument is negative zero, then negative zero is returned. **/
  trunc(arg: number, n?: number|null|undefined): number;

    /** Returns the sample variance of a sequence of values. The function returns the empty sequence if the length of the input sequence is less than 2. **/
  variance(arg: MLArray<number>): number;

    /** Returns the population variance of a sequence of values. The function returns the empty sequence if the input is the empty sequence. **/
  varianceP(arg: MLArray<number>): number;

}
declare var math:mathFunctions

/**
Implements the prof.eval built-in
function, which allow developers to profile evaluation of
Server-Side JavaScript programs. To profile a JavaScript program, set the profile allow option
to true in the App Server or task server in which
the request is serviced.  If you request a profile report for a JavaScript
program whose App Server does not have profiling enabled, then the profile API
does not profile the request.
**/

interface profFunctions {

    /** Evaluate a string as JavaScript for profiling. An ObjectNode will be prepended to any output produced by evaluating the string. If profiling is not enabled for the App Server, this function will throw a PROF-PROFILEALLOW exception. **/
  eval(javascript: string, vars?: Object|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

}
declare var prof:profFunctions

/**

   This category contains built-in and library functions for working
   with semantic data.

   For more details, see the [xref name="semantics/intro#chapter"]
  Semantics Developer's Guide.
    The rdf functions are built-in functions to construct and use
   rdf:langString types. The rdf namespace prefix is built into
   the server.
**/

interface rdfFunctions {

    /** Returns an rdf:langString value with the given value and language tag. The rdf:langString type extends xs:string, and represents a language tagged string in RDF. This function is a built-in. **/
  langString(string: string, lang: string): rdf.LangString;

    /** Returns the language of an rdf:langString value. This function is a built-in. **/
  langStringLanguage(val: rdf.LangString): string;

}
declare var rdf:rdfFunctions

/**

 This module contains functions redacting content in documents when reading
 them from the database.
To use this module in your Server-Side JavaScript code, include a
require statement similar to following line in your code:
var rdt = require('/MarkLogic/redaction');The library namespace prefix rdt is not predefined
in the server.
**/

interface rdtFunctions {

    /** Apply redaction rules to a set of XML and/or JSON documents, returning the resulting documents. **/
  redact(doc: MLArray<any>, ruleCollection: MLArray<string>): Sequence<any>;

    /** Validate the redaction rules in one or more redaction rule collections and return the URIs of the rule documents validated. **/
  ruleValidate(ruleCollection: MLArray<string>): Sequence<string>;

}
declare var rdt:rdtFunctions

/**

The schema component built-in functions.

**/

interface scFunctions {

    /** Returns the schema annotations of the component, if any. The context item is used if no argument is given.Annotations will only be returned for schemas that have preservation of them enabled with the "xdmp-annotations" processing instruction. The annotations returned will only include the appinfo children of the annotations unless the schema has the "all" parameter set in the "xdmp-annotations" processing instruction. **/
  annotations(arg?: SchemaComponent|null|undefined): Sequence<any>;

    /** Returns the attribute declaration of item, as a schema component, if any. If the item has no attribute declaration, the empty sequence is returned. The context item is used if no argument is given.If the item is an attribute node, the result is of its attribute declaration.In other cases, the result is the empty sequence. **/
  attributeDecl(arg?: any|null|undefined): AttributeDecl;

    /** Returns the attribute declarations of the schema component, if any. The context item is used if no argument is given. **/
  attributes(arg?: SchemaComponent|null|undefined): Sequence<AttributeDecl>;

    /** Returns the canonical schema component path of the component. See http://www.w3.org/TR/xmlschema-ref/ for the definition of this path. The context item is used if no argument is given. **/
  canonicalPath(arg?: SchemaComponent|null|undefined): string;

    /** Returns the complex type of item, as a schema component, if any. If the item has a simple type rather than a complex type, the empty sequence is returned. The context item is used if no argument is given.If the item is a document node, the result is the complex type of its root element.If the item is an element node, the result is the complex type of its element declaration.If the item is a schema component, the result is the associated complex type schema component.In other cases, the result is the empty sequence. **/
  complexType(arg?: any|null|undefined): ComplexType;

    /** Returns the named property of the schema component. The context item is used for the second argument if it is not given.Properties include:nameSame as sc:nametypeSame as sc:typecomplex-typeSame as sc:complex-typesimple-typeSame as sc:simple-typeelement-declSame as sc:element-declattribute-declSame as sc:attribute-declschemaSame as sc:schemaannotationsSame as sc:annotationsfacetsSame as sc:facetsattributesSame as sc:attributesparticlesSame as sc:particlesattribute-groupsThe attribute groups of the schemamodel-groupsThe model groups of the schemanotationsThe notations of the schematypesThe types of the schemaelementsThe element declarations of the schemaattribute-wildcardThe attribute wildcard on the type or in the attribute groupidentity-constraintsThe identity constraints on the element declaration or schemascopeThe scope of the element or attribute declarationfixedThe fixed value of the element or attribute declaration or whether a facet is fixeddefaultThe default value of the element or attribute declarationsubstitution-groupThe element declaration serving as the substitution group head of the element declarationnillableWhether the element declaration is declared as nillableabstractWhether the element declaration or type is declared as abstractblock-extensionWhether the element declaration or complex type is declared as blocking extensionsblock-restrictionWhether the element declaration or complex type is declared as blocking restrictionsblock-substitutionWhether the element declaration is declared as blocking substitutionsfinal-extensionWhether the element declaration or complex type is declared as final for extensionsfinal-restrictionWhether the element declaration or complex type is declared as final for restrictionsvarietyThe variety of the simple type (atomic, list, or union)baseThe base type of the typeprimitiveThe primitive type of the simple typeitem-typeThe item type of the list simple typemember-typesThe member types of the union simple typeorderedThe ordering of the simple typenumericWhether the simple type is numericfiniteWhether the simple type is finiteboundedWhether the simple type is boundedfinal-listWhether the simple type is declared as final for listsfinal-unionWhether the simple type is declared as final for unionsfinal-restrictionWhether the simple type is declared as final for restrictionsderivation-methodThe derivation method of the complex type (extension, restriction)content-typeThe kind of content type of the complex type (empty, simple, element-only, mixed)min-occursThe declared minimum occurrences of the particlemax-occursThe declared maximum occurrences of the particleprocess-contentsWhat processing is declared for the wildcard (strict, lax, skip)namespacesWhat namespaces the wildcard referencesvalueThe value of the facetcategoryThe kind of identity constraint (key, unique, keyref)referenced-keyThe key referenced by the keyrefselectorThe selector path in the identity constraintfieldsThe field paths in the identity constraintsystemThe notation's system identifierpublicThe notation's public identifierversionThe schema's versionschema-locationThe schema's location **/
  componentProperty(propname: string, arg?: SchemaComponent|null|undefined): Sequence<any>;

    /** Returns the element declaration of item, as a schema component, if any. If the item has no element declaration, the empty sequence is returned. The context item is used if no argument is given.If the item is a document node, the result is the element declaration of its root element.If the item is an element node, the result is of its element declaration.In other cases, the result is the empty sequence. **/
  elementDecl(arg?: any|null|undefined): ElementDecl;

    /** Returns the facets of the component, if any. Only simple types have facets. The context item is used if no argument is given. **/
  facets(arg?: SchemaComponent|null|undefined): Sequence<SchemaFacet>;

    /** Returns the declared parameter type of a specific parameter of the function item as a schema component. **/
  functionParameterType(arg?: () => any|null|undefined, param?: number|null|undefined): SchemaType;

    /** Returns the return type of a function item as a schema component. The context item is used if no argument is given. **/
  functionReturnType(arg?: () => any|null|undefined): SchemaType;

    /** Returns the name of the schema component, if any. The context item is used if no argument is given. **/
  name(arg?: SchemaComponent|null|undefined): xs.QName;

    /** Returns the particles of the schema component, if any. The context item is used if no argument is given. **/
  particles(arg?: SchemaComponent|null|undefined): Sequence<SchemaParticle>;

    /** Returns the root schema of the item. The context item is used if no argument is given.If the item is a document node, the result is the schema of its root element.If the item is an element node, the result is the schema of its element declaration.If the item is an attribute node, the result is the schema of its attribute declaration.If the item is a schema component, the result is the containing schema.If the item is an atomic value, the result is the schema containing the type of that atomic value.In other cases, the result is the empty sequence. **/
  schema(arg?: any|null|undefined): SchemaRoot;

    /** Get a schema object as a value based on its namespace and schema location hint. **/
  schemaFromPath(namespace: string, location?: string|null|undefined): SchemaRoot;

    /** Returns the simple type of item, as a schema component, if any. If the item has a complex type rather than a simple type, the empty sequence is returned. The context item is used if no argument is given.If the item is a document node, the result is the simple type of its root element.If the item is an element node, the result is the simple type of its element declaration.If the item is an attribute node, the result is the simple type of its attribute declaration.If the item is a schema component, the result is the associated simple type schema component.If the item is an atomic value, the result is the simple type of that atomic value.In other cases, the result is the empty sequence. **/
  simpleType(arg?: any|null|undefined): SimpleType;

    /** Returns the type of item, as a schema component, if any. If the item has no type, the empty sequence is returned. The context item is used if no argument is given.If the item is a document node, the result is the type of its root element.If the item is an element node, the result is the type of its element declaration.If the item is an attribute node, the result is the type of its attribute declaration.If the item is a schema component, the result is the associated type schema component.If the item is an atomic value, the result is the type of that atomic value.In other cases, the result is the empty sequence. **/
  type(arg?: any|null|undefined): SchemaType;

    /** Apply a type to an item to construct a typed instance of that type. If the type is a simple type this amounts to casting. If the type is a complex type this amounts to validating as that type. **/
  typeApply(type: SchemaType, arg: any): Sequence<any>;

    /** Returns the type with the given name, if any, as a schema component. If there is no such type, an undefined type error is raised. **/
  typeNamed(arg: xs.QName): SchemaType;

}
declare var sc:scFunctions

/**

  The anyURI built-in function is the XQuery function that applies
  to xs:anyURI instances.  It is defined in
  XQuery 1.0
  and XPath 2.0 Functions and Operators.

   This category contains built-in and library functions for working
   with semantic data.

   For more details, see the [xref name="semantics/intro#chapter"]
  Semantics Developer's Guide.
    The rdf functions are built-in functions to construct and use
   rdf:langString types. The rdf namespace prefix is built into
   the server. The semantic functions include functions that are built into MarkLogic
Server as well as functions that are implemented in an XQuery library.
To use semantics library module functions in your JavaScript code,
   include a require statement similar to the following in
   your code:var sem = require("/MarkLogic/semantics.xqy"); The extension built-in functions are miscellaneous extensions to the
   XQuery core library, including functions for evaluating
   strings as XQuery expressions and functions to get information about
   documents in the database. The function values functions allow you to pass a function value
   as a parameter to another function.  You can also pass in the location
   of the implementation of a function, allowing the caller to
   specify a different version of a function to use in the context of
   making that function. The MarkLogic Server extension functions are XQuery extensions that
 return MarkLogic Server-specific information, such as the version of
 MarkLogic Server, the IDs of the hosts in the cluster, and so on.  The extension functions provide miscellaneous extensions to
 JavaScript. The HTTP functions allow you to make various HTTP calls from
 within your XQuery program. The search extension functions complement the Search Built-in functions. The XML extension functions provide XML functionality such as
 parsing a string as XML. The XQuery Context functions are XQuery extensions that allow
 you to start a new query context, manipulate the current context, or
 get information about the current context. The Documents, Directories, Properties, and Locks functions are XQuery built-in
 extension functions that get information from documents, directories,
 properties, and locks from MarkLogic Server.  All of these are stored
 as fragments in a database.
**/

interface semFunctions {

    /** Creates a sem:binding object, which is a sub-type of json:object (and map:map). This function is a built-in. **/
  binding(map?: MLNodeOrObject<any>|null|undefined): sem.Binding;

    /** This function returns an identifier for a blank node, allowing the construction of a triple that refers to a blank node. This XQuery function backs up the SPARQL BNODE() function. This function is a built-in. **/
  bnode(value?: any|null|undefined): sem.Blank;

    /** Returns the value of the first argument that evaluates without error. This XQuery function backs up the SPARQL COALESCE() functional form. This function is a built-in. **/
  coalesce(parameter1: MLArray<any>, ...parameterN: MLArray<any>[]): Sequence<any>;

    /** This function expands a CURIE (Compact URI) into a sem:iri object. This raises SEM-UNKNOWNPREFIX if no mapping is available. For more information about the default prefixes, see sem:prefixes. **/
  curieExpand(curie: string, mapping?: {[key:string]:any}|null|undefined): sem.Iri;

    /** This function shortens an IRI into a CURIE (Compact URI) into a sem:iri object. Returns the IRI string unchanged if no mapping is available. **/
  curieShorten(iri: sem.Iri, mapping?: {[key:string]:any}|null|undefined): string;

    /** This function returns database nodes backing given triples. Any given cts:triple may be backed by zero, one, or multiple database nodes. **/
  databaseNodes(triples: MLArray<sem.Triple>, options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined): Sequence<any>;

    /** Returns the name of the simple type of the atomic value argument as a SPARQL style IRI. If the value is derived from sem:unknown or sem:invalid, the datatype IRI part of those values is returned. This XQuery function backs up the SPARQL datatype() function. This function is a built-in. **/
  datatype(value: any): sem.Iri;

    /** Returns the iri of the default graph. This function is a built-in. **/
  defaultGraphIri(): sem.Iri;

    /** This function implements the Concise Bounded Description (CBD) specification to describe one or more nodes in the graph. This implementation does not provide any reified statements, and will return a maximum of 9,999 triples. **/
  describe(iris: MLArray<sem.Iri>): Sequence<sem.Triple>;

    /** This function returns all triples from a named graph in the database. **/
  graph(graphname: sem.Iri): Sequence<sem.Triple>;

    /** Add permissions to the graph specified. The user must have update or insert permissions on the graph. This function is a built-in. **/
  graphAddPermissions(graph: sem.Iri, permissions: MLArray<Object>): null;

    /** This function deletes a named graph, and its graph document containing metadata, from the database. This is an update function that deletes documents with a root element of sem:triples. All other documents are not affected. **/
  graphDelete(graphname: sem.Iri): null;

    /** Get permissions to the graph specified. The user must have read permissions on the graph. This function is a built-in. **/
  graphGetPermissions(graph: sem.Iri, format?: string|null|undefined): Sequence<Object>;

    /** This function inserts triples into a named graph, creating the graph if necessary. It also creates the graph metadata for the graph specified by the "graphname" option. This is an update function that returns document IDs. **/
  graphInsert(graphname: sem.Iri, triples: MLArray<sem.Triple>, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** Remove permissions from the graph specified. The user must have update permissions on the graph. This function is a built-in. **/
  graphRemovePermissions(graph: sem.Iri, permissions: MLArray<Object>): null;

    /** Set permissions to the graph specified. The user must have update permissions on the graph. This function is a built-in. **/
  graphSetPermissions(graph: sem.Iri, permissions: MLArray<Object>): null;

    /** The IF function form evaluates the first argument, interprets it as a effective boolean value, then returns the value of expression2 if the EBV is true, otherwise it returns the value of expression3. Only one of expression2 and expression3 is evaluated. If evaluating the first argument raises an error, then an error is raised for the evaluation of the IF expression. This XQuery function backs up the SPARQL IF() functional form. This function is a built-in. **/
  if(condition: boolean, then: MLArray<any>, else_: MLArray<any>): Sequence<any>;

    /** Returns a sem:invalid value with the given literal value and datatype IRI. The sem:invalid type extends xs:untypedAtomic, and represents an RDF value whose literal string is invalid according to the schema for it's datatype. This function is a built-in. **/
  invalid(string: string, datatype: sem.Iri): sem.Invalid;

    /** Returns the datatype IRI of a sem:invalid value. This function is a built-in. **/
  invalidDatatype(val: sem.Invalid): sem.Iri;

    /** This is a constructor function that takes a string and constructs an item of type sem.iri from it. **/
  iri(stringIri: string): sem.Iri;

    /** Returns true if the argument is an RDF blank node - that is, derived from type sem:blank. This XQuery function backs up the SPARQL isBlank() function. This function is a built-in. **/
  isBlank(value: any): boolean;

    /** Returns true if the argument is an RDF IRI - that is, derived from type sem:iri, but not derived from type sem:blank. This XQuery function backs up the SPARQL isIRI() and isURI() functions. This function is a built-in. **/
  isIRI(value: any): boolean;

    /** Returns true if the argument is an RDF literal - that is, derived from type xs:anyAtomicType, but not derived from type sem:iri. This XQuery function backs up the SPARQL isLiteral() function. This function is a built-in. **/
  isLiteral(value: any): boolean;

    /** Returns true if the argument is a valid numeric RDF literal. This XQuery function backs up the SPARQL isNumeric() function. This function is a built-in. **/
  isNumeric(value: any): boolean;

    /** Returns the language of the value passed in, or the empty string if the value has no language. Only values derived from rdf:langString have a language. This XQuery function backs up the SPARQL lang() function. This function is a built-in. **/
  lang(value: any): string;

    /** Returns true if $lang-tag matches $lang-range according to the basic filtering scheme defined in RFC4647. This XQuery function backs up the SPARQL langMatches() function. This function is a built-in. **/
  langMatches(langTag: string, langRange: string): boolean;

    /** This function returns a set of prefix mappings for use with CURIE processing. Calling this function returns the internal set of default prefixes. The default mappings include prefixes that are widely used and agreed upon, including "cc" (Creative Commons), "dc" (Dublin Core), "dcterms" (Dublin Core Terms), "dbpedia" (dbpedia resources), "dbpedia-owl" (dbpedia ontology), "geonames" (geonames ontology), "foaf" (FOAF), "media" (MediaRSS), "owl" (OWL), " rdf" (RDF), "product" (productV2), "rdfs" (RDF Schema), "skos" (SKOS), "vcard" (VCard vocab), "void" (Vocabulary of Interlinked Datasets), "wikidata" (wikidata entities), "xhtml" (XHTML), and "xs" (XML Schema). **/
  prefixes(prefixdef: string, includeCommon?: boolean|null|undefined): {[key:string]:any};

    /** This function implements the W3C SPARQL Query Results format. Any value sequence returned by sem:sparql can be passed into this function. The result will be the W3C SPARQL Results format, in either XML or JSON format. **/
  queryResultsSerialize(results: Sequence<any>, options?: MLArray<string>|null|undefined): MLNode<any>;

    /** Returns a random double between 0 and 1. This XQuery function backs up the SPARQL RAND() function. This function is a built-in. **/
  random(): number;

    /** This function returns a function that builds triples from CURIE and blank node syntax. The resulting function takes three string arguments, representing subject, predicate, and object respectively, which returns a sem:triple object using the graph and prefix mappings passed in to the call to sem:rdf-builder. Blank nodes specified with a leading underscore (_) will be assigned blank node identifiers, and will maintain that identity across multiple invocations; for example, "_:person1" will refer to the same node as a later invocation that also mentions "_:person1". In the predicate position, the special value of "a" will be interpreted as the same as "rdf:type". **/
  rdfBuilder(prefixes?: {[key:string]:any}|null|undefined, graph?: sem.Iri|null|undefined): (p1:any,p2:any,p3:any)=>sem.Triple;

    /** This function returns sem:triples from a specified location. **/
  rdfGet(location: string, options?: MLArray<string>|null|undefined, httpOpts?: MLNodeOrObject<any>|null|undefined): Sequence<sem.Triple>;

    /** This function inserts triples into a specified database as one or more sem:triples documents. It also creates graph metadata for the graph specified by the "graph" or "override-graph=URI" option. This is an update function that returns the document URIs of inserted documents. **/
  rdfInsert(triples: sem.Triple|Sequence<any>|Array<any>, options?: MLArray<string>|null|undefined, permissions?: MLArray<Object>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function inserts an RDF document from a specified location into the designated database. It also creates the graph metadata for the graph specified by the "graph=URI" or "override-graph=URI" option. This is an update function that returns the document URIs of inserted documents. **/
  rdfLoad(location: string, options?: MLArray<string>|null|undefined, httpOpts?: MLNodeOrObject<any>|null|undefined, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): Sequence<string>;

    /** This function returns parsed sem:triple objects from a text format or XML. **/
  rdfParse(input: any, options?: MLArray<string>|null|undefined): Sequence<sem.Triple>;

    /** This function returns a string or json or XML serialization of the provided triples. **/
  rdfSerialize(triples: MLArray<sem.Triple>, options?: MLArray<string>|null|undefined): any;

    /** Resolves a relative URI against an absolute URI. If $base is specified, the URI is resolved relative to that base. If $base is not specified, the base is set to the base-uri property from the static context, if the property exists; if it does not exist, an error is thrown. This XQuery function backs up the SPARQL IRI() function. **/
  resolveIri(relative: string, base?: string|null|undefined): sem.Iri;

    /** The sem:ruleset-store function returns a set of triples derived by applying the ruleset to the triples in the sem:store constructor provided in $store ("the triples that can be inferred from these rules"). If graph URIs are included with a sem:sparql query that includes sem:ruleset-store, the query will include "triples in the $store that are also in these graphs".This function is a built-in. **/
  rulesetStore(locations: MLArray<string>, store?: MLArray<sem.Store>|null|undefined, options?: MLArray<string>|null|undefined): sem.Store;

    /** Returns true if the arguments are the same RDF term as defined by the RDF concepts specification. This XQuery function backs up the SPARQL sameTerm() function. This function is a built-in. **/
  sameTerm(a: any, b: any): boolean;

    /** Executes a SPARQL query against the database. SPARQL "SELECT" queries return a solution as a sequence of map objects in the form of a table, where each map represents a set of bindings that satisfies the query.SPARQL "CONSTRUCT" queries return triples as a sequence of sem:triple values in an RDF graph.SPARQL "DESCRIBE" queries return a sequence of sem:triple values as an RDF graph that describes the resources found by the query.SPARQL "ASK" queries return a single xs:boolean value (true or false) indicating whether a query pattern matches in the dataset.This function is a built-in. **/
  sparql(sparql: string, bindings?: {[key:string]:any}|null|undefined, options?: MLArray<string>|null|undefined, store?: MLArray<sem.Store>|null|undefined): Sequence<any>;

    /** Return a node representing the query plan of the given SPARQL query. **/
  sparqlPlan(sparql: string, bindingNames?: MLArray<string>|null|undefined, options?: MLArray<string>|null|undefined): ObjectNode;

    /** Executes a SPARQL Update operation against the database. Graph Update - addition and removal of triples from some graphs within the Graph Store.Graph Management - creating and deletion of graphs within the Graph Store, as well as convenient shortcuts for graph update operations often used during graph management (to add, move, and copy graphs).This function is a built-in. **/
  sparqlUpdate(sparql: string, bindings?: {[key:string]:any}|null|undefined, options?: MLArray<string>|null|undefined, store?: MLArray<sem.Store>|null|undefined, defaultPermissions?: MLArray<Object>|null|undefined): null;

    /** This function executes a SPARQL SELECT query using passed-in bindings participating as a starting point for the query. **/
  sparqlValues(sparql: string, values: MLArray<{[key:string]:any}>, options?: MLArray<string>|null|undefined, store?: MLArray<any>|null|undefined): Sequence<{[key:string]:any}>;

    /** The sem:store function defines a set of criteria, that when evaluated, selects a set of triples to be passed in to sem:sparql(), sem:sparql-update(), or sem:sparql-values() as part of the options argument. The sem:store constructor queries from the current database's triple index, restricted by the options and the cts:query argument (for instance, "triples in documents matching this query"). This function is a built-in. **/
  store(options?: MLArray<string>|null|undefined, query?: cts.Query|null|undefined): sem.Store;

    /** Returns the timezone of an xs:dateTime value as a string. This XQuery function backs up the SPARQL TZ() function. This function is a built-in. **/
  timezoneString(value: Date): string;

    /** From a starting set of seeds, follow a given set of predicates, to a given depth, and return all unique node IRIs. **/
  transitiveClosure(seeds: MLArray<sem.Iri>, predicates: MLArray<sem.Iri>, limit: number): Sequence<sem.Iri>;

    /** Creates a triple object, which represents an RDF triple containing atomic values representing the subject, predicate, object, and optionally graph identifier (graph IRI). This function is a built-in. **/
  triple(subject_or_node: any, predicate?: any|null|undefined, object?: any|null|undefined, graph?: sem.Iri|null|undefined): sem.Triple;

    /** Returns the graph identifier (graph IRI) from a sem:triple value. This function is a built-in. **/
  tripleGraph(triple: sem.Triple): sem.Iri;

    /** Returns the object from a sem:triple value. This function is a built-in. **/
  tripleObject(triple: sem.Triple): any;

    /** Returns the predicate from a sem:triple value. This function is a built-in. **/
  triplePredicate(triple: sem.Triple): any;

    /** Returns the subject from a sem:triple value. This function is a built-in. **/
  tripleSubject(triple: sem.Triple): any;

    /** Returns a value to represent the RDF typed literal with lexical value $value and datatype IRI $datatype. Returns a value of type sem:unknown for datatype IRIs for which there is no schema, and a value of type sem:invalid for lexical values which are invalid according to the schema for the given datatype. This XQuery function backs up the SPARQL STRDT() function. This function is a built-in. **/
  typedLiteral(value: string, datatype: sem.Iri): any;

    /** Returns a sem:unknown value with the given literal value and datatype IRI. The sem:unknown type extends xs:untypedAtomic, and represents an RDF value with a datatype IRI for which no schema is available. This function is a built-in. **/
  unknown(string: string, datatype: sem.Iri): sem.Unknown;

    /** Returns the datatype IRI of a sem:unknown value. This function is a built-in. **/
  unknownDatatype(val: sem.Unknown): sem.Iri;

    /** Return a UUID URN (RFC4122) as a sem:iri value. This XQuery function backs up the SPARQL UUID() function. This function is a built-in. **/
  uuid(): sem.Iri;

    /** Return a string that is the scheme specific part of random UUID URN (RFC4122). This XQuery function backs up the SPARQL STRUUID() function. This function is a built-in. **/
  uuidString(): string;

}
declare var sem:semFunctions

/**
The spelling functions are designed to help you manage dictionary
  documents in  MarkLogic Server.  You can create dictionary documents in
  both JSON and XML formats.  The spelling function
  module is installed as the following file:install_dir/Modules/MarkLogic/spell.xqywhere install_dir is the directory in which
	  MarkLogic Server is installed.To use the spell module in your own Server-Side JavaScript
  modules, include the following line in your JavaScript program:var spell = require("/MarkLogic/spell"); The spelling correction functions (spell.isCorrect and
  spell.suggest) are built-in functions and do not require the
  require statement in your JavaScript code.
  There are also Spell Built-In functions, which you use to check if
	  words are spelled correctly according to the dictionaries and to
	  suggest alternate spellings.
   The spelling correction built-in functions are used with dictionary documents
to compare words with words in the dictionary.  These functions use the
double metaphone algorithm, which uses the way words sound to try and
suggest spelling alternatives for incorrectly-spelled words.There is also a Spelling Dictionary Management XQuery module, which
is used to load and manage dictionary documents, and is complimentary
to the spelling built-in functions.
**/

interface spellFunctions {

    /** Add the word $word to the dictionary at $uri. **/
  addWord(uri: string, word: string): null;

    /** Given a word returns the two metaphone keys. The primary and secondary metaphone keys which represent the phonetic encoding of two words are returned as a sequence of two strings. Double metaphone is an algorithm based on phonetic sounds useful in providing data to spelling correction suggestions. **/
  doubleMetaphone(word: string): Sequence<string>;

    /** Load the words in $dict into the dictionary at $uri. If there is no document at $uri a new one will be created. If there is a document at $uri it will be overwritten. **/
  insert(uri: string, dict: MLNodeOrObject<any>|Object|ObjectNode): null;

    /** Returns true() if the specified word is spelled correctly, otherwise returns false(). A word is considered to be spelled correctly if it is in the specified dictionary. **/
  isCorrect(uri: MLArray<string>, word: string): boolean;

    /** Given two strings, returns the Levenshtein distance between those strings. The Levenshtein distance is a measure of how many operations it takes to transform a string into another string, and it is useful in determining if a word is spelled correctly, or in simply comparing how "different" two words are. **/
  levenshteinDistance(str1: string, str2: string): number;

    /** Add the words from the file specified in $path to the dictionary at $uri. If a document exists with the specified URI, it is replaced with this one. Note that words that are 64 characters or greater will never be returned as suggestions from spell.suggest or spell.suggestDetailed. **/
  load(path: string, uri: string): null;

    /** Creates a dictionary node from a sequence of words. **/
  makeDictionary(words: MLArray<string>, outputKind?: string|null|undefined): any;

    /** Remove the word $word from the dictionary at $uri. **/
  removeWord(uri: string, word: string): null;

    /** Returns the romanization of the string, substituting basic Latin letters for the letters in the string, according to their sound. Unsupported characters will be mapped to '?' for compatibility with the double metaphone algorithm. We support romanization of the scripts of the languages with advanced support in MarkLogic except for Chinese characters and Hangul. **/
  romanize(string: string): string;

    /** Suggests a list of spellings for a word. Returns a Sequence containing the most likely spellings for the specified word. **/
  suggest(uri: MLArray<string>, word: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Suggests a list of spellings for a word. Returns an array of objects describing each suggestion, including the suggested word, the distance, the key distance, the word distance, and the levenshtein distance. You can use this extra information to make your own decisions about which suggestions to use. If you do not want to use this information, use the spell.suggest function instead. **/
  suggestDetailed(dictionary_uris: MLArray<string>, word: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Array<any>;

}
declare var spell:spellFunctions

/**

The duration, date, and time built-in functions are XQuery functions
that operate on duration-, date-, and time-related values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
They are defined in
XPATH 2.0
Functions and Operators.

   This category contains built-in and library functions for working
   with semantic data.

   For more details, see the [xref name="semantics/intro#chapter"]
  Semantics Developer's Guide.
    The rdf functions are built-in functions to construct and use
   rdf:langString types. The rdf namespace prefix is built into
   the server.
The SQL built-in functions.

**/

interface sqlFunctions {

    /** Returns the length of the string "str" in bits. **/
  bitLength(str: string): number;

    /** Returns an rdf.collatedString value with the given value and collation tag. The rdf.collatedString type extends String, and represents a collation tagged string in RDF. This function is a built-in. **/
  collatedString(string: string, collationURI: string): sql.CollatedString;

    /** Returns the collation of an sql.collatedString value. This function is a built-in. **/
  collatedStringCollation(val: sql.CollatedString): string;

    /** Returns the column ID from a schema name, a view name and a column name. **/
  columnID(schema: string, view: string, column: string): sql.ColumnID;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  day(arg: xs.GenericDateTimeArg): number;

    /** Returns an xs:string representing the dayname value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  dayname(arg: xs.GenericDateTimeArg): string;

    /** Returns an integer value that indicates the difference between the SOUNDEX values of two character expressions. **/
  difference(arg: string): string;

    /** Returns true if the specified $input glob the specified $pattern, otherwise returns false. **/
  glob(input: string, pattern: string): boolean;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the value of the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  hours(arg: xs.GenericDateTimeArg): number;

    /** If the first expression is NULL, then the value of the second expression is returned. If not null, the first expression is returned. **/
  ifnull(expr1: MLArray<any>, expr2: MLArray<any>): Sequence<any>;

    /** Returns a string that that is the first argument with length characters removed starting at start and the second string has been inserted beginning at start. **/
  insert(str: string, start: number, length: number, str2: string): string;

    /** Find the starting location of a pattern in a string. **/
  instr(str: string, n: string): number;

    /** Returns a string that is the leftmost characters of the target string. The number of characters to return is specified by the second argument. **/
  left(str: any, n: number): string;

    /** Returns true if the specified $input like the specified $pattern, otherwise returns false. **/
  like(input: string, pattern: string, escape: string): boolean;

    /** Return a string that removes leading empty spaces in the input string. **/
  ltrim(str: string): string;

    /** Returns an xs:integer value between 0 to 59, both inclusive, representing the value of the minutes component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  minutes(arg: xs.GenericDateTimeArg): number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  month(arg: xs.GenericDateTimeArg): number;

    /** Returns month name, calculated from the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  monthname(arg: xs.GenericDateTimeArg): string;

    /** Returns a NULL value if the two specified values are equal. Returns the first value if they are not equal **/
  nullif(expr1: MLArray<any>, expr2: MLArray<any>): Sequence<any>;

    /** Returns the length of the string "str" in bits. **/
  octetLength(x: string): number;

    /** Returns an xs:integer between 1 and 4, both inclusive, calculating the quarter component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  quarter(arg: xs.GenericDateTimeArg): number;

    /** Return a random number. This differs from xdmp:random in that the argument is a seed. **/
  rand(n: number): number;

    /** Returns a string that concatenates the first argument as many times as specified by the second argument. **/
  repeat(str: any, n: number): string;

    /** Returns a string that is the rightmost characters of the target string. The number of characters to return is specified by the second argument. **/
  right(str: any, n: number): string;

    /** Return a string that removes trailing empty spaces in the input string. **/
  rtrim(str: string): string;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive, representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
  seconds(arg: xs.GenericDateTimeArg): number;

    /** Returns the sign of number x. **/
  sign(x: number): number;

    /** Returns a four-character (SOUNDEX) code to evaluate the similarity of two strings. **/
  soundex(arg: string): string;

    /** Returns a string that is the given number of spaces. **/
  space(n: number): string;

    /** Returns an integer value representing the starting position of a string within the search string. Note, the string starting position is 1. If the first parameter is empty, the result is the empty sequence. **/
  strpos(target: string, test: string, collation?: string|null|undefined): number;

    /** Returns a xs:string? timestamp created by adding a number to the given dateTimeType field of a given timestamp. **/
  timestampadd(dateTimeType: xs.ID, value: number, timestamp: string): number;

    /** Returns the difference in dateTimeType field of two given timestamps. **/
  timestampdiff(dateTimeType: xs.ID, timestamp1: xs.GenericDateTimeArg, timestamp2: xs.GenericDateTimeArg): number;

    /** Return a string that removes leading empty spaces in the input string. **/
  trim(str: string): string;

    /** Returns an xs:integer between 1 and 53, both inclusive, representing the week value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  week(arg: Date|Date|string): number;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
  year(arg: xs.GenericDateTimeArg): number;

    /** Returns an xs:integer between 1 and 366, both inclusive, representing the yearday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  yearday(arg: xs.GenericDateTimeArg): number;

}
declare var sql:sqlFunctions

/**
The tde functions are built-in functions for Extraction Templates.
   The tde namespace prefix is built into the server. The tde (Template-driven Data Extraction) function module is installed
    as the following file:install_dir/Modules/MarkLogic/tde.xqywhere install_dir is the directory in which
    MarkLogic Server is installed. To use the tde.xqy module in your own XQuery modules, include the
    following line in your XQuery prolog:import module "http://marklogic.com/xdmp/tde" at
             "/MarkLogic/tde.xqy"The library uses the tde: namespace, predefined in the
    server.
**/

interface tdeFunctions {

    /** This function returns a view's description using a schema and a view name. **/
  getView(schema: string, view: string): {[key:string]:any};

    /** Extracts row or triple data from a list of specified documents by applying extraction templates that are either stored in the schema database or provided as a second argument. **/
  nodeDataExtract(documents: MLArray<any>, templates?: MLArray<Node>|null|undefined): {[key:string]:any};

    /** This function validates the template, inserts the template as a document into the tde collection of the schema database (if executed on the content database) with the default permissions, and reindexes the database. Note that, when a template is inserted, only those document fragments affected by the template are re-indexed. For more information, see Validating and Inserting a Template in the Application Developer's Guide. **/
  templateInsert(uri: string, root: MLNodeOrObject<any>, permissions?: MLArray<any>|null|undefined, collections?: MLArray<string>|null|undefined): null;

    /** In addition to xdmp.validate that can be used for validating against the extraction template schema. The recommended workflow for users is to validate an extraction template before inserting it into the schema database. Unless you use the tde.templateInsert function, Ill-formed templates are not validated or rejected at document insertion time. For more information on extraction templates, see Template Driven Extraction (TDE) in the Application Developer's Guide. **/
  validate(templates: MLArray<Node>, excludeTemplateURIs?: MLArray<string>|null|undefined): {[key:string]:any};

}
declare var tde:tdeFunctions

/**

The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.

    This module contains the functions used to insert, delete and manage temporal documents.

     To understand the temporal functions, you need to understand the meaning of the following terms:
    Instant: an instant of time, such as "now", "12/31/2012, 01:00:00 am".Period: an anchored duration of time (e.g. December 01, 1999 through December 31, 2000, the fall semester)Axis: a named pair of range indexes that is the container for periods.Valid time: when a fact was true in modeled reality.System time: when a fact was stored in the database.User-defined time: a time value that user provides in replacement of system start time.      LSQT (Last Stable Query Time): a document with a system start time before this point
      can be queried and a document with a system start time after this point can be updated
      and ingested.
      The Tiered Storage function module is installed as the following file:install_dir/Modules/MarkLogic/temporal.xqywhere install_dir is the directory in which
	    MarkLogic Server is installed.To use the temporal.xqy module in your own XQuery modules,
     include the following line in your XQuery prolog:
import module namespace temporal="http://marklogic.com/xdmp/temporal"
          at "/MarkLogic/temporal.xqy";
The update built-in functions are XQuery functions to perform update-related
tasks such as loading documents, inserting nodes into documents, and so on.

**/

interface temporalFunctions {

    /** This function enables Last Stable Query Time (LSQT) on the named collection and advances the LSQT for the collection to the maximum system start time. When LSQT is enabled on the temporal collection, you can use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  advanceLsqt(temporalCollection: string, lag?: Number|null|undefined): Date;

    /** This function returns all the axis names defined in the schema databases. **/
  axes(): Sequence<string>;

    /** This function constructs an axis definition based on the existing range indexes that can be added to a temporal collection in subsequent API calls. The axis definition is stored in the schema database. For details on how to create an axis, see Create System and Valid Axes in the Temporal Developer's Guide A TEMPORAL-NONDATETIME exception is thrown if range index scalar type is not dateTime. A TEMPORAL-DUPAXIS exception is thrown if the axis already exists. **/
  axisCreate(axisName: string, startRangeIndex: cts.Reference, endRangeIndex: cts.Reference): number;

    /** This function returns the range index used to define the end of the period by the named axis. A TEMPORAL-AXISNOTFOUND exception is thrown if the axis does not exist. **/
  axisGetEnd(axisName: string): cts.Reference;

    /** This function returns the range index used to define the start of the period by the named axis. A TEMPORAL-AXISNOTFOUND exception is thrown if the axis does not exist. **/
  axisGetStart(axisName: string): cts.Reference;

    /** This function removes an axis definition from the schema database. A TEMPORAL-AXISINUSE exception is thrown if the named axis is referred to by a collection. **/
  axisRemove(axisName: string): null;

    /** This function constructs a named and protected temporal collection in the schema database with the specified system and optional valid axes. This function assumes that the axes already exist. The temporal collection is stored in the Security database. A TEMPORAL-DUPCOLLECTION exception is thrown if the collection already exists. For details on how to create a collection, see Create a Temporal Collection in the Temporal Developer's Guide **/
  collectionCreate(collectionName: string, systemAxis: string, validAxis?: string|null|undefined, options?: MLArray<string>|null|undefined): number;

    /** This function returns the name of either the system or valid axis in the named temporal collection. A TEMPORAL-COLLECTIONNOTFOUND exception is thrown if the collection does not exist. A TEMPORAL-INVALIDAXIS if axis is not "system" or "valid." **/
  collectionGetAxis(temporalCollection: string, axis: string): Sequence<string>;

    /** This function returns the options set on the temporal collection. **/
  collectionGetOptions(temporalCollection: string): Sequence<string>;

    /** This function removes the named temporal collection from the Security database. **/
  collectionRemove(collectionName: string): null;

    /** This function sets the options on the temporal collection. **/
  collectionSetOptions(temporalCollection: string, options: MLArray<string>): null;

    /** This function returns all of the temporal collection names in the schema database. **/
  collections(): Sequence<string>;

    /** This function deletes the temporal document identified by the given URI. Note that temporal documents are not actually deleted, but are rather "logically deleted" and remain in the database with system end times set to the time of the deletion. **/
  documentDelete(temporalCollection: string, uri: string): null;

    /** This function inserts a document into the database and stores it as a temporal document. The document will belong to the specified temporal collection to ensure that it can only be updated or deleted using the temporal functions. If a temporal document already exists at the specified URI, this function performs an update instead of an insert. (Note that updates on temporal documents mean that a new document is created in the temporal collection with a different time period.) An exception is thrown if $temporal-collection is not temporal or $collection includes temporal collection(s). **/
  documentInsert(temporalCollection: string, uri: string, root: MLNodeOrObject<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** This function inserts a document into the database and stores it as a temporal document. The document will belong to the specified temporal collection to ensure that it can only be updated or deleted using the temporal functions. If a temporal document already exists at the specified URI, this function performs an update instead of an insert. (Note that updates on temporal documents mean that a new document is created in the temporal collection with a different time period.) An exception is thrown if $temporal-collection is not temporal or $collection includes temporal collection(s). **/
  documentLoad(temporalCollection: string, location: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** This function returns the period (as a dateTime pair) for the named axis in the document identified by its root node in the named collection. An TEMPORAL-NOAXISINFO exception is thrown if no information is found in root for the axis. **/
  documentPeriod(temporalCollection: string, axis: string, root: MLNodeOrObject<any>): Sequence<Date>;

    /** Protects a temporal document from certain temporal operations, such as update, delete or wipe for a specific period of time. Subsequent update operations on that document against which this operation is protected will get a TEMPORAL-PROTECTED exception. If an archive path is specified optionally save a serialized copy of the document ot the specified location and record the file path and copy time in the document's metadata. **/
  documentProtect(temporalCollection: string, uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** Deletes all versions of a temporal document. **/
  documentWipe(temporalCollection: string, uri: string): null;

    /** This function returns the Last Stable Query Time (LSQT) for the collection at current moment. Should read lock if it is in update. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqt(temporalCollection: string): Date;

    /** This function returns whether Last Stable Query Time (LSQT) management is automatically managed (true) or not automatically managed (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomation(temporalCollection: string): boolean;

    /** When the LSQT is advanced automatically, this function returns how far behind (in milliseconds) the Last Stable Query Time (LSQT) is from latest system time. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomationLag(temporalCollection: string): number;

    /** This function returns how often Last Stable Query Time (LSQT) is automatically advanced, in milliseconds. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getLsqtAutomationPeriod(temporalCollection: string): number;

    /** This function specifies whether the named temporal collection has LSQT (Last Stable Query Time) enabled (true) or disabled (false). For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  getUseLsqt(temporalCollection: string): boolean;

    /** Deletes a node from the database. On-the-fly constructed nodes cannot be deleted. **/
  nodeDelete(temporalCollection: string, old: MLNodeOrObject<any>): null;

    /** Adds an immediately following sibling to a node in a temporal document. **/
  nodeInsertAfter(temporalCollection: string, sibling: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Adds an immediately preceding sibling to a node in a temporal document. **/
  nodeInsertBefore(temporalCollection: string, sibling: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Adds a new last child to a node in a temporal document. For XML documents, only element nodes and document nodes can have children. For JSON documents, object nodes and array nodes can have children. Element nodes, object nodes, and array nodes cannot have document node children. Document nodes cannot have multiple roots. On-the-fly constructed nodes cannot be updated. The parameters must specify individual nodes and not node sets. **/
  nodeInsertChild(temporalCollection: string, parent: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Replaces a node in a temporal document. **/
  nodeReplace(temporalCollection: string, old: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** This function sets whether Last Stable Query Time (LSQT) management is automatic. And, if enabled, how often LSQT is to be advanced. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  setLsqtAutomation(temporalCollection: string, on: boolean, period?: number|null|undefined, lag?: number|null|undefined): null;

    /** This function enables or disables the use of LSQT (Last Stable Query Time) on the named collection. When enabled (true), a document is created in the database to hold the LSQT. This document is identified by the collection name with an .lsqt suffix. You must have LSQT enabled on the temporal collection in order to use the temporal:statement-set-system-time function to manually set the system start time when inserting a document into that collection. For details on how to use LSQT, see Last Stable Query Time (LSQT) and Application-controlled System Time in the Temporal Developer's Guide **/
  setUseLsqt(temporalCollection: string, on: boolean): null;

    /** This function gets the system start time on temporal documents that are inserted or deleted in the same statement as this function. If this function is not called along with a temporal document insert or delete, nothing will be affected. **/
  statementGetSystemTime(): null;

    /** This function sets document URI for a temporal document to be used for the new version of temporal document to be generated in the current statement. Throw exception if the version URI is the same as the temporal document URI or if a fragment with the specified version URI exists in the database. **/
  statementSetDocumentVersionUri(documentUri: string, versionUri: string): null;

    /** This function sets the system start time on temporal documents that are inserted or deleted in the same statement as this function. If this function is not called along with a temporal document insert or delete, nothing will be affected. **/
  statementSetSystemTime(systemTime: Date): null;

}
declare var temporal:temporalFunctions

/**
The thesaurus functions are designed to help you manage thesaurus
  documents and then use those thesaurus documents to lookup synonyms
  for words used in queries. Thesaurus documents are XML documents.
  The JavaScript API allows you to update
  existing thesaurus documents with a JSON representation of the thesaurus
  entries, so you do not have to specify XML. The load and insert functions
  do require XML, however.
  The thesaurus function module is installed as the following file:install_dir/Modules/MarkLogic/thesaurus.xqywhere install_dir is the directory in which
	  MarkLogic Server is installed.To use the thesaurus module in your own Server-Side
  JavaScript modules, include the following line in your Javascript
  program:var thsr = require("/MarkLogic/thesaurus");
**/

interface thsrFunctions {

    /** Adds a synonym to the specified thesaurus entry. **/
  addSynonym(entry: MLNodeOrObject<any>, synonym: MLNodeOrObject<any>|Object): null;

    /** Returns a query that searches for all the query strings specified in $query and their synonyms as found in $entries. **/
  expand(query: cts.Query, entries: MLArray<any>, entries2: MLArray<any>|MLArray<Object>, newWeight: number, minWeight: number, filter: MLArray<any>): cts.Query;

    /** Load the entries in $thsr into the thesaurus at $uri. If there is no document at $uri a new one will be created. If there is a document at $uri it will be overwritten. **/
  insert(uri: string, thsr: MLNodeOrObject<any>): null;

    /** Load the file specified in $path to the thesaurus at $uri. Exisiting documents at $uri are overwritten. **/
  load(path: string, uri: string): null;

    /** Returns all entries for term $term in the thesaurus document(s) at $uri. **/
  lookup(uri: MLArray<string>, term: string, outputKind?: string|null|undefined): Sequence<any>;

    /** Returns a Sequence of all entries that are found by looking up terms in the query and/or subqueries of $query in the thesaurus document(s) at $uri. **/
  queryLookup(uri: MLArray<string>, query: cts.Query, outputKind?: string|null|undefined): Sequence<any>;

    /** Removes all entries that exactly match $entry from the thesaurus documents(s) at $uri. **/
  removeEntry(uri: MLArray<string>, entry: MLNodeOrObject<any>|Object): null;

    /** Removes synonym $synonym from thesaurus entry $entry. **/
  removeSynonym(entry: MLNodeOrObject<any>, synonym: MLNodeOrObject<any>|Object): null;

    /** Removes all entries with term $term from the thesaurus document(s) at $uri. **/
  removeTerm(uri: MLArray<string>, term: string): null;

    /** Adds the entry $entry to the thesaurus at $uri. **/
  setEntry(uri: string, entry: MLNodeOrObject<any>|Object): null;

}
declare var thsr:thsrFunctions

/**
This module provides functions for managing forests and partitions
     in storage tiers and for managing super-databases and sub-databases.
 For details, see Tiered Storage in the Administrator's Guide.
    The Tiered Storage function module is installed as the following file:install_dir/Modules/MarkLogic/tieredstorage.xqywhere install_dir is the directory in which
	    MarkLogic Server is installed.To use the tieredstorage.xqy module in your own XQuery modules,
     include the following line in your XQuery prolog:
import module namespace ts="http://marklogic.com/xdmp/tieredstorage"
          at "/MarkLogic/tieredstorage.xqy";
**/

interface tieredstorageFunctions {

    /** This function creates a database with the name $database-name and make the created database the sub database of the database designated by $database-id. The newly created database inherits the configuration of the original database. For details, see Creating a Super-database in the Administrator's Guide. **/
  databaseCreateSubDatabase(dbid: number, databaseName: string, kind?: string|null|undefined): null;

    /** This function creates a database with the name $database-name and make the created database the super database of the database designated by $database-id. The newly created database inherits the configuration of the original database. For details, see Creating a Super-database in the Administrator's Guide. **/
  databaseCreateSuperDatabase(databaseId: number, databaseName: string): null;

    /** This function disassociates the sub database designated by $delete-dbid with the super-database designated by $database-id and deletes the sub database. An error is thrown if the database designated by $delete-dbid is not a sub database of the one designated by $database-id or contains other super-databases than the one designated by $database-id. For details, see Tiered Storage in the Administrator's Guide. **/
  databaseDeleteSubDatabase(databaseId: number, deleteDbid: number): null;

    /** This function disassociates the super database designated by $delete-dbid with the sub-database designated by $database-id and deletes the super database. An error is thrown if the database designated by $delete-dbid is not a super database of the one designated by $database-id or contains other sub-databases than the one designated by $database-id. For details, see Tiered Storage in the Administrator's Guide. **/
  databaseDeleteSuperDatabase(databaseId: number, deleteDbid: number): null;

    /** This function returns the partition numbers of the forests in the database **/
  databasePartitionNumbers(databaseId: number): Sequence<number>;

    /** This function returns the names of the partitions in the named database. For details, see Tiered Storage in the Administrator's Guide. **/
  databasePartitions(databaseId: number): Sequence<string>;

    /** This function combines data in multiple forests into one new forest. If no data directory is specified, the default data directory is used. The source forests are required to be either all in "open" or "open-replica" state or all in "sync replicating" state. If a forest's state changes during the combine operation, an error may be thrown. If all source forests are in "open" or "open replica" state and are all attached to a database, the combined forest will be attached to the database and the source forests (or their masters) detached to the database. For details, see Combining Forests in the Administrator's Guide. **/
  forestCombine(forestIds: MLArray<number>, forestName: string, hostId: number, dataDirectory?: string|null|undefined, largeDataDirectory?: string|null|undefined, fastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

    /** This function moves data in a forest to new data directories and optionally sets new host for the forest. If no data directory is specified, the default data directory will be used. For details, see Migrating Forests and Partitions in the Administrator's Guide. **/
  forestMigrate(forestIds: MLArray<number>, newHostId?: number|null|undefined, newDataDirectory?: string|null|undefined, newLargeDataDirectory?: string|null|undefined, newFastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

    /** This function deletes all forests in the specified partition. For details, see Deleting Partitions in the Administrator's Guide. **/
  partitionDelete(databaseId: number, partitionName: string, deleteData: boolean, options?: MLArray<string>|null|undefined): null;

    /** This function deletes the query from the specified partition. It will not throw any error if query is not found. **/
  partitionDeleteQuery(schemaDatabaseId: number, partitionNumber: number): null;

    /** This function returns a sequence of ids for the forests in the named partition. If the $include-replicas parameter is not specified or is set to false, replica forests are not included. For details, see Tiered Storage in the Administrator's Guide. **/
  partitionForests(databaseId: number, partitionName: string, includeReplicas?: boolean|null|undefined): Sequence<number>;

    /** This function returns the safe-to-exclude setting for the database. For details, see Isolating a Query Partition in the Administrator's Guide **/
  partitionGetExclusionEnabled(schemaDatabaseId: number, partitionNumber: number): boolean;

    /** This function returns the query of a partition specified by the partition number. **/
  partitionGetQuery(schemaDatabaseId: number, partitionNumber: number): cts.Query;

    /** This function migrates all forests in a partition to the specified data directory and hosts. For details, see Migrating Forests and Partitions in the Administrator's Guide. **/
  partitionMigrate(databaseId: number, partitionName: string, hostIds: MLArray<number>, dataDirectory?: string|null|undefined, largeDataDirectory?: string|null|undefined, fastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

    /** This function returns the IDs of the forests with the specified partition-number in the named database. **/
  partitionNumberForests(databaseId: number, partitionNumber: number): Sequence<number>;

    /** This function returns all the queries in this schema database. **/
  partitionQueries(schemaDatabaseId: number): {[key:string]:any};

    /** This function either creates or combines forests in a partition. For details, see Resizing Partitions in the Administrator's Guide. **/
  partitionResize(databaseId: number, partitionName: string, forestsPerHost: number, hostIds: MLArray<number>, dataDirectory?: string|null|undefined, largeDataDirectory?: string|null|undefined, fastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

    /** This function sets the availability of the partition to either online or offline. An online partition is fully accessable through queries when its forests are attached to a database. The forests in an offline partition, as well as any replica forests, cannot be accessed. **/
  partitionSetAvailability(databaseId: number, partitionName: string, value: string): null;

    /** By default, when a search query is given to MarkLogic, all query partitions are searched, regardless of the query assignment policy set on the partition. This function enables you to avoid this overhead, so that the query partition will not be searched if the search query does not match the query assignment policy set for that partition. For details, see Isolating a Query Partition in the Administrator's Guide **/
  partitionSetExclusionEnabled(schemaDatabaseId: number, partitionNumber: number, safeToExclude: boolean): null;

    /** This function sets the query for a partition specified by the partition number. **/
  partitionSetQuery(schemaDatabaseId: number, partitionNumber: number, query: cts.Query): null;

    /** This function sets update-allowed state for the forests in the specified partition. For details, see Tiered Storage in the Administrator's Guide. **/
  partitionSetUpdatesAllowed(databaseId: number, partitionName: string, value: string): null;

    /** This function detaches forests in a partition from one database and attaches them to another. For details, see Transferring Partitions between Databases in the Administrator's Guide. **/
  partitionTransfer(partitionDbId: number, partitionName: string, dstDbId: number, options?: MLArray<string>|null|undefined): null;

    /** This function creates forests on specified hosts and forms a partition with the specified partition number. All of the forests will share the partition name as their prefix and the same partition number. The query for the partition is set separately by the tieredstorage:partition-set-query function. **/
  queryPartitionCreate(databaseId: number, partitionName: string, partitionNumber: number, forestsPerHost: number, hostIds: MLArray<number>, dataDirectory?: string|null|undefined, largeDataDirectory?: string|null|undefined, fastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

    /** This function creates forests on the specified hosts and forms a range partition with the specified partition range. All of the forests will share the partition name as their prefix, as well as the range policy settings. The names of the created forests will either be in the form of partition- name-[fixed-digit-number] or partition-name-[fixed-digit-number]-[M,Rn], if local disk failover is configured. For details, see Creating Range Partitions in the Administrator's Guide. **/
  rangePartitionCreate(databaseId: number, partitionName: string, lower: any, upper: any, forestsPerHost: number, hostIds: MLArray<number>, dataDirectory?: string|null|undefined, largeDataDirectory?: string|null|undefined, fastDataDirectory?: string|null|undefined, options?: MLArray<string>|null|undefined): null;

}
declare var tieredstorage:tieredstorageFunctions

/**
The views module is used to create and manage SQL schemas and views.
       This API only creates and manages Range Views, as described in
 Creating Range Views in the SQL Data Modeling Guide.  The
       functions in this API will not work on Template Views, as described in
 Creating Template Views in the SQL Data Modeling Guide.
    A schema defines a logical scoping for views.  A schema has a unique ID,
	    a name (which must also be unique), and a collection of views.
	    During SQL execution, the schema provides the naming context for
	    its views, which enables you have have multiple views of the same
	    name in different schemas. The default schema is called "main".
	    Even though it is a default, you must create the "main" schema
	    before it can be used.A view is an abstraction of a SQL "table."  However, unlike in a
	    relational database, a view in MarkLogic server is implemented
	    on top of element range indexes.  A view consists of a unique ID,
	    a name (which must be unique in the context of a particular
	    schema), a view scope, and a sequence of column specifications.
	    Each column has a name and a range index reference.  The range
	    index for each column must be created before creating the view.
	    The view scope is used to constrain the subset of the database
	    to which the view applies. The view scope can either limit rows
	    in the view to documents with a specific element (localname +
	    namespace) or to documents in a particular collection. The views function module is installed as the following file:install_dir/Modules/MarkLogic/views.xqywhere install_dir is the directory in which
    MarkLogic Server is installed.To use the views.xqy module in your own XQuery modules,
    include the following line in your XQuery prolog:import module namespace view="http://marklogic.com/xdmp/view"
		    at "/MarkLogic/views.xqy";You must have the view-admin role to execute the
	    functions in the View library.
**/

interface viewFunctions {

    /** This function adds column specifications to the current set of column specifications on the named view in the named schema. **/
  addColumn(schemaName: string, viewName: string, column: MLNodeOrObject<any>): null;

    /** This function adds a field to the named view. **/
  addField(schemaName: string, viewName: string, field: MLNodeOrObject<any>): null;

    /** This function adds permissions to those already set for the named view in the named schema specification. **/
  addPermissions(schemaName: string, viewName: string, permissions: MLArray<any>): null;

    /** This function return the URI of the protected collection holding all the views. **/
  collection(): string;

    /** This function constructs a new collection-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
  collectionViewScope(collection: string): MLNode<any>;

    /** This function constructs a new column specification. **/
  column(name: string, rangeIndex: cts.Reference): MLNode<any>;

    /** This function returns the sequence of column specifications set in the named view in the named schema. **/
  columns(schemaName: string, viewName: string): Sequence<MLNode<any>>;

    /** This function creates a new view in the specified schema specification. The id of the view is returned. The view is checked for validity. Prior to executing this function, you must create a range index for each column in your view. For details on element range indexes, see Range Indexes and Lexicons in the Administrator's Guide. **/
  create(schemaName: string, name: string, scope: MLNodeOrObject<any>, columns: MLArray<MLNodeOrObject<any>>, fields: MLArray<MLNodeOrObject<any>>, permissions: MLArray<any>): number;

    /** This function constructs a new element-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
  elementViewScope(localname: xs.QName): MLNode<any>;

    /** This function constructs a new element-style field specification for the named field. **/
  field(name: string): MLNode<any>;

    /** This function returns the fields set on the named view. **/
  fields(schemaName: string, viewName: string): Sequence<MLNode<any>>;

    /** This function returns the named view from the named schema specification. **/
  get(schemaName: string, viewName: string): MLNode<any>;

    /** This function generates a binding map suitable for use with cts:parse from the named view. **/
  getBindings(schemaName: string, viewName: string): {[key:string]:any};

    /** This function returns the view with the specified id. **/
  getById(viewId: number): MLNode<any>;

    /** This function returns the named column specification set in the named view in the named schema. **/
  getColumn(schemaName: string, viewName: string, columnName: string): MLNode<any>;

    /** This function returns the element specification for the named field. **/
  getField(schemaName: string, viewName: string, fieldName: string): MLNode<any>;

    /** This function returns the ordered flag setting from the named view in the named schema specification. **/
  getOrdered(schemaName: string, viewName: string): boolean;

    /** This function returns the permissions set on the specified view. **/
  getPermissions(schemaName: string, viewName: string): Sequence<MLNode<any>>;

    /** This function returns the scope of the named view in the named schema. **/
  getViewScope(schemaName: string, viewName: string): MLNode<any>;

    /** This function removes the named view from the named schema specification. **/
  remove(schemaName: string, viewName: string): null;

    /** This function removes the view with the specified id. **/
  removeById(viewId: number): null;

    /** This function removes a column specification from the named view in the named schema. **/
  removeColumn(schemaName: string, viewName: string, columnName: string): null;

    /** This function removes a field from the named view. **/
  removeField(schemaName: string, viewName: string, fieldName: string): null;

    /** This function removes permissions from those set for the named view in the named schema specification. **/
  removePermissions(schemaName: string, viewName: string, permissions: MLArray<any>): null;

    /** This function adds permissions to the specified schema specification. **/
  schemaAddPermissions(schemaName: string, permissions: MLArray<any>): null;

    /** This function creates a new relational schema in the Schema database. The schema id is returned. Every SQL deployment must include a default schema, called "main," as shown in the example below. This schema is typically created for Range Views. However, such a schema can also contain Template Views. Note that Range Views cannot be created in a schema created by a Template View. **/
  schemaCreate(schemaName: string, permissions: MLArray<any>): number;

    /** This function returns the named schema specification document. **/
  schemaGet(schemaName: string): MLNode<any>;

    /** This function returns the permissions set on the specified schema. **/
  schemaGetPermissions(schemaName: string): Sequence<MLNode<any>>;

    /** This function removes the specified schema. Removing a schema removes all the views that are part of that schema. **/
  schemaRemove(schemaName: string): null;

    /** This function removes permissions from the specified schema specification. **/
  schemaRemovePermissions(schemaName: string, permissions: MLArray<any>): null;

    /** This function sets permissions on the specified schema specification. Any existing permissions for the schema and removed. **/
  schemaSetPermissions(schemaName: string, permissions: MLArray<any>): null;

    /** This function returns all of the schema specifications. **/
  schemas(): Sequence<MLNode<any>>;

    /** This function replaces the current set of column specifications on the named view in the named schema with a new set of columns. **/
  setColumns(schemaName: string, viewName: string, columns: MLArray<MLNodeOrObject<any>>): null;

    /** This function sets the specified fields on the specified view. Any existing fields are replaced or removed. **/
  setFields(schemaName: string, viewName: string, fields: MLArray<MLNodeOrObject<any>>): null;

    /** This function renames the named view in the named schema specification. **/
  setName(schemaName: string, viewName: string, newName: string): null;

    /** This function sets the ordered flag on the view. The ordered flag can only be used if all the range indexes referenced as columns have positions. **/
  setOrdered(schemaName: string, viewName: string, ordered: boolean): null;

    /** This function sets the permissions for the named view in the named schema specification. Any existing permissions for the view and removed. **/
  setPermissions(schemaName: string, viewName: string, permissions: MLArray<any>): null;

    /** This function sets the scope of the named view in the named schema specification. **/
  setViewScope(schemaName: string, viewName: string, scope: MLNodeOrObject<any>): null;

    /** This function returns all of the view specifications in the named schema. **/
  views(schemaName: string): Sequence<MLNode<any>>;

}
declare var view:viewFunctions

/**

The accessor built-in functions are XQuery functions to access node properties.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

  The anyURI built-in function is the XQuery function that applies
  to xs:anyURI instances.  It is defined in
  XQuery 1.0
  and XPath 2.0 Functions and Operators.

The duration, date, and time built-in functions are XQuery functions
that operate on duration-, date-, and time-related values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.

The format-date, format-time, format-dateTime and format-number built-in functions are XSLT functions that operate on date-, time-, dateTime-, number-related values.
They are defined in
XPATH 2.0
Functions and Operators.
 The string built-in functions are XQuery functions defined to operate on
string values. They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
The string built-in functions use the fn namespace
prefix, which is predefined in the server.  Also, the fn
prefix is the default prefix for function calls if none is specified.
   This category contains built-in and library functions for working
   with semantic data.

   For more details, see the [xref name="semantics/intro#chapter"]
  Semantics Developer's Guide.
    The rdf functions are built-in functions to construct and use
   rdf:langString types. The rdf namespace prefix is built into
   the server. The SSL built-in functions are miscellaneous extensions to the
   XQuery core library that expose SSL functionality. Includes the Microsoft Office convert functions using the AntennaHouse
  technology.
  The application server built-in functions are XQuery functions for many
  HTTP application server functions.  Many of the application server
  functions (for example, xdmp:get-request-field,
  xdmp:login, etc.) are
  executable only on HTTP servers; those functions all have
  no effect and return the empty sequence when run from an XDBC server.

Builtin functions relating to cryptography.
 The extension built-in functions are miscellaneous extensions to the
   XQuery core library, including functions for evaluating
   strings as XQuery expressions and functions to get information about
   documents in the database. The function values functions allow you to pass a function value
   as a parameter to another function.  You can also pass in the location
   of the implementation of a function, allowing the caller to
   specify a different version of a function to use in the context of
   making that function. The MarkLogic Server extension functions are XQuery extensions that
 return MarkLogic Server-specific information, such as the version of
 MarkLogic Server, the IDs of the hosts in the cluster, and so on.  The extension functions provide miscellaneous extensions to
 JavaScript. The HTTP functions allow you to make various HTTP calls from
 within your XQuery program. The search extension functions complement the Search Built-in functions. The XML extension functions provide XML functionality such as
 parsing a string as XML. The XQuery Context functions are XQuery extensions that allow
 you to start a new query context, manipulate the current context, or
 get information about the current context. The Documents, Directories, Properties, and Locks functions are XQuery built-in
 extension functions that get information from documents, directories,
 properties, and locks from MarkLogic Server.  All of these are stored
 as fragments in a database.
  The Higher-Order built-in functions are XQuery functions to support
  higher-order functions, and are part of the XQuery 3.0 working draft.
  They are defined in
  XPath and
  XQuery Functions and Operators 3.0.
   Includes the document filtering functions using the ISYS
  technology. Includes the PDF convert functions using the Iceni technology. The JSON built-in functions serialize XQuery items to JSON and
 read a JSON string and create XQuery items from it.  JSON (JavaScript
 Object Notation) is a data-interchange format popular mechanism for passing
 data from JavaScript to other programming environments.
Implements the send function.

The security built-in functions are XQuery functions to perform many
security-related tasks in MarkLogic Server.

  The Server Monitoring built-in functions include functions that provide
  monitoring information about internal conditions of MarkLogic Server and
  includes the xdmp:request-cancel function which is used to
  cancel a running request.

   The conversion functions are built-in to the server and support
   the ability to convert various document formats to XML.
   There are functions to convert HTML, PDF, Microsoft Word, Microsoft Excel,
   and Microsoft Powerpoint documents.  The output of each of these functions
   is standards-compliant XHTML with cascading style sheets (CSS).
   Additionally, there are functions to zip and unzip documents, which can
   be used to support document formats that are zip archives (for example,
   Microsoft Office 2007 docx format).
 Use these XQuery functions for manipulating transactions. You will
     usually only need these functions if you develop or administer
     applications using multi-statement transactions. For a detailed
     discussion of multi-statement transactions, see "Understanding
     Transactions in MarkLogic Server" in the Application Developer's
     Guide
The update built-in functions are XQuery functions to perform update-related
tasks such as loading documents, inserting nodes into documents, and so on.

  Zip function allow the server to handle .zip files.

**/

interface xdmpFunctions {

    /** Returns whether a given action on the specified document URI would succeed. **/
  access(uri: string, action: string): boolean;

    /** Adds an HTTP response header field. **/
  addResponseHeader(name: string, value: string): null;

    /** Add two 64-bit integer values, discarding overflow. **/
  add64(x: number, y: number): number;

    /** Returns the amp ID for the specified amp. Unlike the security library module function sec:uid-for-name, this function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the amp ID from the security database configured for the database in which the App Server evaluates against. **/
  amp(namespace: string, localname: string, moduleUri: string, database: number): number;

    /** Returns the set of all roles assigned to an amp, including roles directly assigned to the amp and roles inherited by other roles. **/
  ampRoles(namespaceUri: string, localname: string, documentUri: string, databaseId: number): Sequence<number>;

    /** AND two 64-bit integer values. **/
  and64(x: number, y: number): number;

    /** Applies an xdmp:function with the given parameters. **/
  apply(functionArg: () => any, params1ToN?: MLArray<any>|null|undefined): Sequence<any>;

    /** Returns the hardware architecture upon which MarkLogic Server is running. If xdmp:platform() returns "linux", it will return "x86_64" or "i686. If xdmp:platform() returns "solaris", it will return "amd64" or "sparcv9". If xdmp:platform() returns "winnt", it will return "amd64" or "i686". If xdmp:platform() returns "macosx", it will return "x86_64". **/
  architecture(): string;

    /** Returns the array values as a Sequence. **/
  arrayValues(Array: Array<any>, flatten?: Boolean|null|undefined): Sequence<any>;

    /** Returns true if a value could be atomized without error. If no argument is supplied, this function checks whether the context item can be atomized without error. **/
  atomizable(item?: any|null|undefined): boolean;

    /** Returns the current Amazon Web Services region. If MarkLogic is not running on Amazon web Services, returns null. **/
  awsRegion(): string;

    /** Returns the current Amazon Web Services services domain. If MarkLogic is not running on Amazon Web Services, returns null. **/
  awsServicesDomain(): string;

    /** Returns the current Amazon Web Services services partition. If MarkLogic is not running on Amazon Web Services, returns null. **/
  awsServicesPartition(): string;

    /** Converts base64-encoded string to plaintext. **/
  base64Decode(encoded: string): string;

    /** Converts plaintext into base64-encoded string. **/
  base64Encode(plaintext: string): string;

    /** Converts an encoded byte sequence, passed in as a binary node, from the specified encoding to a unicode string. **/
  binaryDecode(encoded: MLNodeOrObject<any>, encodingName: string): string;

    /** Test whether or not a binary node represents an external binary. **/
  binaryIsExternal(source: MLNode<any>): boolean;

    /** Check whether a binary node is a large binary. **/
  binaryIsLarge(source: MLNode<any>): boolean;

    /** Check whether a binary node is a small binary. **/
  binaryIsSmall(source: MLNode<any>): boolean;

    /** Returns the size of the data, in bytes, represented by a binary node. **/
  binarySize(source?: MLNode<any>|null|undefined): number;

    /** Parses a binary string, returning an integer. **/
  binaryToInteger(binary: string): number;

    /** Returns a sequence of the IDs of all the bootstrap hosts in the cluster. **/
  bootstrapHosts(): Sequence<number>;

    /** Returns the status of the caches as a Sequence of ObjectNodes. **/
  cacheStatus(hostId?: MLArray<number>|null|undefined): Sequence<any>;

    /** Returns the dialect (e.g., "javascript", "1.0-ml", etc) of the caller or the empty sequence if no dialect information is available. Note that the return is not the language the function that calls this built-in is written in; it is the dialect the function is called from. For example, if a JavaScript program calls function "foo", which uses xdmp:caller-dialect, then the return from xdmp:caller-dialect will be “javascript” even if "foo" is implemented in XQuery. **/
  callerDialect(): string;

    /** Tests whether a user can grant or revoke a set of roles. Raises an error if the session user can not. **/
  canGrantRoles(roles: MLArray<string>): null;

    /** Returns true if a value is castable. This is similar to the "castable as" XQuery predicate, except that the type is determined at runtime. **/
  castableAs(namespaceUri: string, localName: string, item: any): boolean;

    /** Returns the ID of the cluster named in the parameter. Returns the ID of the current cluster if no parameter is specified. **/
  cluster(name?: string|null|undefined): number;

    /** Returns the current MarkLogic Server effective version. **/
  clusterEffectiveVersion(): number;

    /** Returns the name of the cluster with the specified ID. Returns the name of the current cluster if no ID is specified. **/
  clusterName(id?: number|null|undefined): string;

    /** Returns true current MarkLogic Server effective version is equal or greater that the version **/
  clusterVersionAtLeast(version: number): boolean;

    /** Returns the canonical URI for the given URI, if it represents a valid collation. A canonical URI is the unique string MarkLogic Server uses to identify a given collation. The canonical URI string places any attributes that occur in the URI in a predefined order, and it removes any attributes that are redundant due to locale defaults. **/
  collationCanonicalUri(collationUri: string): string;

    /** Deletes from the database every document in a collection. If there are no documents in the specified collection, then nothing is deleted, and xdmp:collection-delete still returns the empty sequence. **/
  collectionDelete(uri: string): null;

    /** Returns locks of documents in a collection. **/
  collectionLocks(uri?: MLArray<string>|null|undefined): Sequence<any>;

    /** Returns a sequence of properties documents, one for each document in the specified collection(s) that has a corresponding properties document. **/
  collectionProperties(uri?: MLArray<string>|null|undefined): Sequence<any>;

    /** Commit the current transaction to the database. **/
  commit(): null;

    /** Returns timestamp of last configuration changed **/
  configurationTimestamp(name?: string|null|undefined): number;

    /** Returns the credential **/
  credential(id: number): MLNode<any>;

    /** Returns the id of a named credential. **/
  credentialId(credentialName: string): number;

    /** Returns the credentials that the current user is allowed to use. **/
  credentials(uri: string): Sequence<MLNode<any>>;

    /** Calculates the password hash for the given password and salt. **/
  crypt(password: string, salt: string): string;

    /** Calculates the password hash for the given plain-text password. **/
  crypt2(password: string): string;

    /** Returns the ID of the database named in the parameter. Returns the ID of the current database if no parameter is specified. Throws XDMP-NOSUCHDB if no database exists for the specified name. **/
  database(name?: string|null|undefined): number;

    /** This function returns the assignment policy for the specified database. **/
  databaseAssignmentPolicy(databaseId: string): Object;

    /** Starts an asynchronous backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
  databaseBackup(forestIDs: MLArray<number>, pathname: string, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, lagLimit?: number|null|undefined, backupKekId?: string|null|undefined, backupPassphrase?: string|null|undefined): number;

    /** Cancels an outstanding backup job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. The xdmp:database-backup-cancel function must be run on the host in which the backup was initiated. **/
  databaseBackupCancel(jobid: number): boolean;

    /** Purge old backups from a directory. **/
  databaseBackupPurge(dir: string, keepNumBackups: number, incrementalDir?: string|null|undefined): null;

    /** Checks the status of the outstanding backup job with the specified job ID. Returns a database backup status as a JSON node. If you don't specify a job ID for the first parameter, status for all currently running backup jobs will be returned. **/
  databaseBackupStatus(jobid: MLArray<number>, hostid?: MLArray<number>|null|undefined): Sequence<ObjectNode>;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
  databaseBackupValidate(forestIDs: MLArray<number>, pathname: string, includeReplicas?: boolean|null|undefined, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, lagLimit?: number|null|undefined): Object;

    /** This function returns the directory creation setting for the specified database. **/
  databaseDirectoryCreation(databaseId: string): string;

    /** Returns the encryption at rest setting for the database identified by database-id **/
  databaseEncryptionAtRest(databaseId: number): string;

    /** Returns the encryption key ID for the database identified by database-id **/
  databaseEncryptionKeyId(databaseId: number): string;

    /** Returns a sequence of forest IDs in the specified database. **/
  databaseForests(databaseId: number, includeReplicas?: boolean|null|undefined): Sequence<number>;

    /** Returns the most recent commit timestamp for which a query on the database including its foreign database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
  databaseGlobalNonblockingTimestamp(databaseId: number): number;

    /** Starts an asynchronous incremental backup of the specified list of forests to the backup data directory. Optionally starts journal archiving of the specified list of forests to the specified journal archive directory. Returns a job ID that uniquely identifies the backup task. **/
  databaseIncrementalBackup(forestIDs: MLArray<number>, pathname: string, incrementalDir?: string|null|undefined, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, lagLimit?: number|null|undefined, backupKekId?: string|null|undefined, backupPassphrase?: string|null|undefined): number;

    /** Validates that the specified list of forests can be backed up to the backup data directory. Optionally verifies that the list of forests can enable journal archiving to the journal archive directory with the specified lag limit. Returns a database backup set node. **/
  databaseIncrementalBackupValidate(forestIDs: MLArray<number>, pathname: string, includeReplicas?: boolean|null|undefined, incrementalDir?: string|null|undefined, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, lagLimit?: number|null|undefined): Object;

    /** This function returns true if the specificed forest is retired and false the specificed forest is not retired. **/
  databaseIsForestRetired(databaseId: string, forestId: string): Boolean;

    /** This function returns the rebalancer enable setting for the specified database. **/
  databaseIsRebalancerEnable(databaseId: string): Boolean;

    /** Tests if a database is a replica of a foreign database. **/
  databaseIsReplica(databaseId: number): boolean;

    /** Purge journal archive before last incremental backup from a directory. **/
  databaseJournalArchivePurge(dir: string, incrementalDir?: string|null|undefined, journalArchivePath?: string|null|undefined): null;

    /** Return the name of the database with the given ID. **/
  databaseName(databaseId: number): string;

    /** Return a sequence of query-rolesets that are required for proper querying of the given database nodes with Element Level Security. **/
  databaseNodeQueryRolesets(nodes: Sequence<any>, options?: MLArray<string>|null|undefined): Sequence<MLNode<any>>;

    /** Returns the most recent commit timestamp for which a query on the database will not block waiting for transactions to commit or journal frames to arrive from a foreign master. **/
  databaseNonblockingTimestamp(databaseId: number): number;

    /** Returns the list of path namespaces for the given database id. **/
  databasePathNamespaces(dbid?: number|null|undefined): Array<any>;

    /** Starts an asynchronous restore of the specified list of forests from the backup data directory. Returns a job ID that uniquely identifies the restore task. **/
  databaseRestore(forestIDs: MLArray<number>, pathname: string, restoreToTime?: Date|null|undefined, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, incrementalBackup?: boolean|null|undefined, incrementalBackupPath?: string|null|undefined, backupPassphrase?: string|null|undefined, forestMap?: {[key:string]:any}|null|undefined): number;

    /** Cancels an outstanding restore job with the specified job ID, returning true if the cancel operation is successful, false if the cancel operation is not successful. **/
  databaseRestoreCancel(jobid: number): boolean;

    /** Checks the status of the outstanding restore job with the specified job ID. Returns a database restore status Object. **/
  databaseRestoreStatus(jobid: number): Object;

    /** Validates that the specified list of forests can be restored from the backup data directory. Returns a database restore set node. **/
  databaseRestoreValidate(forestIDs: MLArray<number>, pathname: string, restoreToTime?: Date|null|undefined, includeReplicas?: boolean|null|undefined, journalArchiving?: boolean|null|undefined, journalArchivePath?: string|null|undefined, incrementalBackup?: boolean|null|undefined, incrementalBackupPath?: string|null|undefined, backupPassphrase?: string|null|undefined, forestMap?: {[key:string]:any}|null|undefined): Object;

    /** Returns a sequence of the IDs of all the databases in the system. **/
  databases(): Sequence<number>;

    /** Returns an xs:string representing the dayname value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  daynameFromDate(arg: Date): string;

    /** Invertible function that decodes characters an NCName produced by xdmp:encode-for-NCName. Given the NCName produced by xdmp:encode-for-NCName this function returns the original string. **/
  decodeFromNCName(name: string): string;

    /** Returns the collections any new document would get if the current user were to insert a document without specifying the collections. **/
  defaultCollections(uri?: string|null|undefined): Sequence<string>;

    /** Returns the permissions any new document would get if the current user were to insert a document without specifying the default permissions. **/
  defaultPermissions(uri?: string|null|undefined, outputKind?: string|null|undefined): Sequence<Object>;

    /** Returns a string representing the description of a given item sequence. If you take the output of this function and evaluate it as an XQuery program, it returns the item(s) input to the function. **/
  describe(item: MLArray<any>, maxSequenceLength?: number|null|undefined, maxItemLength?: number|null|undefined): string;

    /** Returns the specified string, converting all of the characters with diacritics to characters without diacritics. **/
  diacriticLess(string: string): string;

    /** Returns the documents from the database in a directory. Note that these are database documents, not from the filesystem; if you want documents from a filesystem directory, use xdmp.filesystemDirectory instead. **/
  directory(uri: MLArray<string>, depth?: string|null|undefined): Sequence<any>;

    /** Creates a directory. If security is enabled, the document permissions and collections are set to the given parameters, if supplied. Otherwise, the current user's default permissions and/or collections are applied. If the beginning of the document URI is protected, the user must have access to that URI privilege. If the directory URI does not end with a '/' one is added. If the directory already exists, then an XDMP-DIREXISTS exception is thrown. **/
  directoryCreate(uri: string, permissions?: MLArray<Object>|null|undefined, collections?: MLArray<string>|null|undefined, quality?: number|null|undefined, forestIds?: MLArray<number>|null|undefined): null;

    /** Deletes a directory and all of its child and descendant documents and directories from the database. **/
  directoryDelete(uri: string): null;

    /** Returns locks of documents in a directory. **/
  directoryLocks(uri: MLArray<string>, depth?: string|null|undefined): Sequence<any>;

    /** Returns a sequence of properties documents, one for each document in the specified directory that has a corresponding properties document. **/
  directoryProperties(uri: MLArray<string>, depth?: string|null|undefined): Sequence<any>;

    /** Adds the named document to the given collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentAddCollections(uri: string, collections: MLArray<string>): null;

    /** Adds the given permissions to the given document or directory. The user must have update or insert permissions on the document. **/
  documentAddPermissions(uri: string, permissions: MLArray<Object>): null;

    /** Adds a sequence of properties to the properties of a document. **/
  documentAddProperties(uri: string, props: MLArray<any>): null;

    /** Assign a document URI to a forest index, using the same algorithm as xdmp:document-insert. The return value will be a positive integer from 1 to $forest-count. This function does not insert or update the document; instead, it returns the index of the forest to which the document URI would be assigned if it were inserted as a new document. In order to match the document to the correct forest, use the list of forest-IDs as returned by xdmp:database-forests. If the document already exists, this function may not return the correct forest for the document. In this case, xdmp:document-forest will return the correct forest. If "assignment-policy" is specified, this function uses the specified policy to calculate the assignment. Otherwise, it uses the assignment policy of the context database to calculate the assignment. This function works only with the bucket assignment policy and the legacy assignment policy. It reports an error if the statistical policy or the range policy is set. Note that, if there are read-only or delete-only forests in a database that uses the bucket policy, the application may need to call this function twice to get the right assignment. The first call should pass in the total number of forests, including the read-only or delete-only ones. If the returned value happens to be a read-only or delete-only forest, the second call should pass in the number of forests that excludes the read-only or delete-only ones and pass in "legacy" as the third parameter. **/
  documentAssign(uri: string, forestCount: number, assignmentPolicy?: string|null|undefined): number;

    /** Deletes a document from the database. **/
  documentDelete(uri: string): null;

    /** Filters a wide variety of document formats, extracting metadata and text, and returning XHTML. The extracted text has very little formatting, and is typically used for search, classification, or other text processing. **/
  documentFilter(doc: MLNodeOrObject<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): MLNode<any>;

    /** Returns the forest ID of the forest in which a document (or a lock or a property) with the specified URI is stored. Otherwise, returns the empty sequence. **/
  documentForest(uri: string, forestIds?: MLArray<number>|null|undefined): number;

    /** Returns the document in the file specified by $location. **/
  documentGet(location: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns the collections to which a given document belongs. **/
  documentGetCollections(uri: string): Sequence<string>;

    /** Returns the metadata value of a given document. **/
  documentGetMetadata(uri: string): Object;

    /** Returns the metadata value of a given document. **/
  documentGetMetadataValue(uri: string, keyName: string): string;

    /** Returns the permissions to a given document. **/
  documentGetPermissions(uri: string, outputKind?: string|null|undefined): Sequence<Object>;

    /** Returns the property values for a document's property. Throws XDMP-DOCNOTFOUND if there is no document at the specifed URI. **/
  documentGetProperties(uri: string, property: xs.QName): Sequence<any>;

    /** Returns the quality of the specified document if the document exists. Otherwise, returns the empty sequence. **/
  documentGetQuality(uri: string): number;

    /** Inserts a new document into the database if a document with the specified URI does not already exist. If a document already exists at the specified URI, the function replaces the content of the existing document with the specified content (the $root parameter) as an update operation. In addition to replacing the content, xdmp:document-insert replaces any permissions, collections, and quality with the ones specified (or with the default values for these parameters, if not explicitly specified). Also, if a properties document exists at the same URI, that properties document (including any content it contains) is preserved. **/
  documentInsert(uri: string, root: MLNodeOrObject<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** Inserts a new document with the specified URI. If a document already exists at the URI, the function replaces the content in the existing document as an update operation. **/
  documentLoad(location: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** Returns the locks for one or more documents or directories. Returns the locks for all documents and directories in the database if no parameter is given. **/
  documentLocks(uri?: MLArray<string>|null|undefined): Sequence<any>;

    /** Assign a document to a partition number, using the partition queries in the database or in the second argument. The return value is the partition number where the document should be inserted. **/
  documentPartitionAssign(root: MLNodeOrObject<any>, partitionQueries?: {[key:string]:any}|null|undefined): number;

    /** Returns a sequence of properties documents, one for each of the specified documents that has a corresponding properties document. If no documents are specified, returns a sequence of properties documents for all documents in the database that have a corresponding properties document. **/
  documentProperties(uri?: MLArray<string>|null|undefined): Sequence<any>;

    /** Adds metadata to the document. If any key already exists in the document metadata, the new specified value replaces the old one. The string value of a non-string metadata value is used for persistence. **/
  documentPutMetadata(uri: string, metadata: {[key:string]:any}): null;

    /** Removes the named document from the given collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentRemoveCollections(uri: string, collections: MLArray<string>): null;

    /** Removes metadata with certain keys from a document. **/
  documentRemoveMetadata(uri: string, metadata: MLArray<string>): null;

    /** Removes the given permissions from the named document or directory. The user must have update permissions on the document or directory. **/
  documentRemovePermissions(uri: string, permissions: MLArray<Object>): null;

    /** Removes a sequence of properties from the properties of a document. If properties with the QNames given do not exist, nothing is done. **/
  documentRemoveProperties(uri: string, propertyNames: MLArray<xs.QName>): null;

    /** Sets the named document to belong to the given collections, replacing any previously set collections on the named document. To preserve existing collections, use xdmp:document-add-collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentSetCollections(uri: string, collections: MLArray<string>): null;

    /** Sets metadata to the document. All existing metadata in the document will be replaced with the newly specified ones. The string value of a non-string value is used for persistence. **/
  documentSetMetadata(uri: string, metadata: {[key:string]:any}): null;

    /** Sets the permissions on the named document (or directory) to the given permissions, replacing any permissions previously set on the document (or directory). To preserve any existing permissions, use . xdmp.documentAddPermissions. The user must have update permissions on the document or directory. **/
  documentSetPermissions(uri: string, permissions: MLArray<Object>): null;

    /** Sets the properties of a document to the given sequence of elements, replacing any properties that already exist on the document. To preserve existing document properties, use xdmp:document-add-properties. Each element QName is the property name and the element value is the property value. Modifying properties requires update permissions on a document. **/
  documentSetProperties(uri: string, props: MLArray<any>): null;

    /** Sets a property on a document. If any properties with the same property QName exist, they are replaced with the new property. If no properties exist with the same QName, the new property is added. **/
  documentSetProperty(uri: string, prop: MLNodeOrObject<any>): null;

    /** Sets the quality of the document with the given URI. If the quality of the document is positive, the relevance score of the document is increased in text search functions. The converse is true for "negative" quality. **/
  documentSetQuality(uri: string, quality: number): null;

    /** Returns timestamp of the most recent visible update to a document, lock, or property. Returns the empty sequence if no document, lock, or property exists. **/
  documentTimestamp(uri: string): number;

    /** Returns the effective version of this host **/
  effectiveVersion(): number;

    /** Returns the elapsed time since the start of processing of this query. Gives the same information as the elapsed-time element of the xdmp:query-meters output, but has less overhead than calling xdmp:query-meters. **/
  elapsedTime(): string;

    /** Returns the schema-defined content-type of an element ("empty", "simple", "element-only", or "mixed"). **/
  elementContentType(element: MLNodeOrObject<any>): string;

    /** Send an email in a JavasCript program. A valid SMTP Relay must be configured in the Groups page of the Admin Interface for the email to be sent. The format of the email message can be a JavaScript object that follows the format as below, or it can be an XML file that complies with the schema files for email (see xdmp:email). **/
  email(message: Object): null;

    /** Invertible function that escapes characters required to be part of an NCName. This is useful when translating names from other representations such as JSON to XML. Given any string, the result is always a valid NCName. Providing all names are passed through this function the result is distinct NCNames so the results can be used for searching as well as name generation. The inverse function is xdmp:decode-for-NCName. **/
  encodeForNCName(name: string): string;

    /** Analyzes binary, text, or XML data and suggests possible pairs of encoding and language, with a confidence score for each pair. Scores of 10 and above are high confidence recommendations. The results are given in order of decreasing score. Accuracy may be poor for short documents. **/
  encodingLanguageDetect(document: MLNodeOrObject<any>): Array<any>;

    /** Returns the result of evaluating a string as a Javascript program. To evaluate XQuery, see xdmp.xqueryEval. **/
  eval(javascript: string, vars?: Object|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Converts a Microsoft Excel document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manifest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  excelConvert(doc: MLNodeOrObject<any>, filename: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns an external binary node. **/
  externalBinary(path: string, startingLocation?: number|null|undefined, length?: number|null|undefined): MLNode<any>;

    /** Return the path to the external file associated with an external binary document. **/
  externalBinaryPath(source: MLNode<any>): string;

    /** Returns the external security ID for the specified external security name. Unlike the security library module function sec:uid-for-name, this function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the external security ID from the security database configured for the database in which the App Server evaluates against. **/
  externalSecurity(externalSecurity: string): number;

    /** Performs a directory listing of the given file pathname. **/
  filesystemDirectory(pathname: string): Array<any>;

    /** Creates the directory specified by pathname. Returns the empty sequence upon success. **/
  filesystemDirectoryCreate(pathname: string, options?: Object|null|undefined): null;

    /** Deletes the directory specified by pathname. Returns the empty sequence upon success. **/
  filesystemDirectoryDelete(pathname: string): null;

    /** Reads a file from the filesystem. The file at the specified path must be UTF-8 encoded. This function is typically used for text files; for binary files, consider using the xdmp:external-binary function. **/
  filesystemFile(pathname: string): string;

    /** Return the encryption status of a file. Returns empty sequence if there is no file. **/
  filesystemFileEncryptionStatus(pathname: string): ObjectNode;

    /** Return true if a file exists on a host; otherwise false. **/
  filesystemFileExists(pathname: string, host?: number|null|undefined): boolean;

    /** Returns access and modification time for a file. **/
  filesystemFileGetTime(pathname: string): Date;

    /** Reads the length of a file from the filesystem. It returns empty sequence if the object named by the pathname does not exist or is not a file. **/
  filesystemFileLength(pathname: string): number;

    /** Sets access and modification time for a file. **/
  filesystemFileSetTime(pathname: string, actime: string, modtime: string): null;

    /** Returns the canonicalized file path of the input path. The file at the specified path must be UTF-8 encoded. **/
  filesystemFilepath(pathname: string): string;

    /** Returns the status of a foreign cluster from a host's point of view as a JSON node. **/
  foreignClusterStatus(hostId: number, foreignClusterId: number): ObjectNode;

    /** Returns the IDs of the foreign clusters. **/
  foreignClusters(): Sequence<number>;

    /** Returns the ID of the forest specified as the parameter. Throws XDMP-NOSUCHFOREST if no forest exists for the specified name. **/
  forest(name: string): number;

    /** Backs up forest data files. **/
  forestBackup(forestID: number, pathname: string): null;

    /** Checks the status of the specified forests for any outstanding backup jobs. Returns the specified forests portion a database backup status as a JSON node. **/
  forestBackupStatus(forestid: MLArray<number>): Sequence<ObjectNode>;

    /** Clears forest data files, including all stands and journals. If any of the forests being cleared are attached to the context database, then xdmp:forest-clear is run asynchronously, returning immediately but doing the clear in a background thread. If the forest being cleared is not attached to the context database, it is run synchronously and will block until it returns. The xdmp:forest-clear function is not transactional, and the best practice is to not call it in a transaction that is also doing updates. **/
  forestClear(forestIDs: MLArray<number>): null;

    /** Returns detailed forest statistics for a given forest as a Sequence of ObjectNodes. This built-in may require significantly more processing time than xdmp:forest-status. **/
  forestCounts(forestId: MLArray<number>, showElements?: MLArray<string>|null|undefined, options?: MLArray<string>|null|undefined): Sequence<any>;

    /** Resume database replication with the specified forest IDs. **/
  forestDatabaseReplicationResume(forestID: MLArray<number>, forceBulkReplication: boolean): null;

    /** Suspend database replication with the specified forest IDs. **/
  forestDatabaseReplicationSuspend(forestID: MLArray<number>): null;

    /** Returns the database ID corresponding to the database to which the specified forest belongs, or empty sequence if the forest belongs to no database. **/
  forestDatabases(forest: number): number;

    /** Return a sequence of pair of the forest IDs and host IDs for the failover forests and hosts of the given forest. **/
  forestFailoverInfo(id: number): number;

    /** Return the host of the forest with the given id. **/
  forestHost(id: number): number;

    /** Return the name of the forest with the given ID. **/
  forestName(forestId: number): string;

    /** Returns true if the specified forest is online with a state of open, open replica or sync replicating if isReplica is true, or syncing replica if syncingOk is true, otherwise returns false. For a remote forest, returns false if the cached forest online status is older than the specified timestamp. **/
  forestOnline(forestID: number, timestamp?: number|null|undefined, isReplica?: boolean|null|undefined, syncingOk?: boolean|null|undefined): boolean;

    /** Returns the forest ID for each specified forest or for each forest's replica if the forest is currently experiencing a local disk failover. **/
  forestOpenReplica(forestIDs: MLArray<number>): Sequence<number>;

    /** Restarts a forest. If multiple forest IDs are specified, the restarts occur in parallel. **/
  forestRestart(forestIDs: MLArray<number>): null;

    /** Restores forest data files. Restarts the forest to complete the restoration. **/
  forestRestore(forestID: number, pathname: string): null;

    /** Rolls forests back to a previous point in time, marking any fragment newer than the specified timestamp as deleted. Also, any fragments that were created before the specified timestamp and deleted after will be rolled back (un-deleted). **/
  forestRollback(forestIDs: MLArray<number>, timestamp: number): null;

    /** Returns state of the forests **/
  forestState(forestID: number): Sequence<string>;

    /** Returns the status of a forest as a Sequence of ObjectNodes. **/
  forestStatus(forestId: MLArray<number>): Sequence<any>;

    /** Return updates allowed state of the forest with the given ID. **/
  forestUpdatesAllowed(forestId: number): string;

    /** Returns a sequence of the IDs of all the forests in the system. **/
  forests(): Sequence<number>;

    /** Returns a formatted number value based on the picture argument. The difference between this function and the W3C standards fn:format-number function is that this function imitates the XSLT xsl:number instruction, which has richer formatting options than the fn:format-number function. This function can be used for spelled-out and ordinal numbering in many languages. This function is available in XSLT as well as in all dialects of XQuery and Server-Side JavaScript. **/
  formatNumber(value: MLArray<number>, picture?: string|null|undefined, language?: string|null|undefined, letterValue?: string|null|undefined, ordchar?: string|null|undefined, zeroPadding?: string|null|undefined, groupingSeparator?: string|null|undefined, groupingSize?: number|null|undefined): string;

    /** Parses a string as JSON, returning an item sequence. **/
  fromJsonString(arg: string): Sequence<any>;

    /** Atomizes a JSON node, returning a JSON value. **/
  fromJSON(arg: MLNodeOrObject<any>): Sequence<any>;

    /** Returns a function value as an xdmp.function type. You can return an xdmp.function from an expression or a function. You can execute the function referred to by an xdmp.function by passing the xdmp.function value to xdmp.apply. If the module-path ends with a file extension matching the ones configured for application/vnd.marklogic-javascript in your MarkLogic Mimetypes configuration, and the function's namespace URI is empty, the module is considered to be JavaScript. In this case, the function parameter can be empty. **/
  functionArg(functionArg: xs.QName, modulePath?: string|null|undefined): () => any;

    /** Returns the module location (if any) that the xdmp:function value refers to. **/
  functionModule(functionArg: () => any): string;

    /** Returns the QName of the function(s) that the xdmp:function refers to. **/
  functionName(functionArg: () => any): xs.QName;

    /** Returns the name of the parameter at the designated (1-based) position from the given function's signature. **/
  functionParameterName(functionArg: () => any, position: number): xs.QName;

    /** Returns the type of the parameter at the designated (1-based) position from the given function's signature. **/
  functionParameterType(functionArg: () => any, position: number): string;

    /** Returns the return type from the given function's signature. **/
  functionReturnType(functionArg: () => any): string;

    /** Returns the signature of the function that the argument refers to. **/
  functionSignature(functionArg: () => any): string;

    /** Returns all the current roles, both assigned and inherited by the current user and any received from amps. **/
  getCurrentRoles(): Sequence<number>;

    /** Returns the name of the current user. **/
  getCurrentUser(): string;

    /** Returns the ID of the current user. **/
  getCurrentUserid(): number;

    /** Returns the path of the module that is being invoked. Note that this is different from xdmp:get-request-path when the module is invoked because an invoke or eval does not create a new request. **/
  getInvokedPath(): string;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the URL before rewriting occurs. To get the URL after rewriting occurs, use xdmp:get-request-url. **/
  getOriginalUrl(): string;

    /** Returns a sequence of the IDs of all orphaned large binaries in a given forest. **/
  getOrphanedBinaries(id: number): Sequence<number>;

    /** For PUT requests, returns the body of the request. For POST requests, returns the body of the request if it is not of content-type application/x-www-form-urlencoded. Returns the empty sequence if it is not called from an application server. **/
  getRequestBody(format?: string|null|undefined): Object;

    /** Returns as a string the internet address of the client from which the HTTP server request is issued. Returns the empty sequence if it is not called from an HTTP server. **/
  getRequestClientAddress(): string;

    /** Returns the PEM encoded client certificate if one was presented. Returns the empty sequence if it is not called from an HTTP server, if SSL is not enabled for the HTTP server, or if no certificate is available. A clients will not send its certificate unless the server requests it. **/
  getRequestClientCertificate(): string;

    /** Returns the current error format for the request. The error format's default value is configured in the App Server. It may be overwritten in the rewriter. The return value is one "xml" , "html" , "json" or "compatible". **/
  getRequestErrorFormat(): string;

    /** Returns the value of a named request field. If the request field is a multipart/form-data type in a POST form, you can use xdmp:get-request-field for file upload applications (see the second example below). **/
  getRequestField(name: string, defaultVal?: string|null|undefined): Object;

    /** This function is used to extract the content type from the request field. It returns a sequence of content types, one for each filename, in the same order as the filenames returned from xdmp:get-request-field-filename. **/
  getRequestFieldContentType(fieldName: string): Sequence<string>;

    /** Returns a list of filenames from a multipart request for the field name specified. Returns an empty sequence for a field that does not exist. **/
  getRequestFieldFilename(fieldName: string): Sequence<string>;

    /** Returns a sequence of the request field names. **/
  getRequestFieldNames(): Sequence<string>;

    /** Returns the value of a named request header. **/
  getRequestHeader(name: string, defaultVal?: string|null|undefined): Sequence<string>;

    /** Returns a sequence of request header names. **/
  getRequestHeaderNames(): Sequence<string>;

    /** Returns the HTTP request method. **/
  getRequestMethod(): string;

    /** Returns the HTTP request path. **/
  getRequestPath(): string;

    /** Returns the port of the request. **/
  getRequestPort(): number;

    /** Returns as a string the request protocol (either "http" or "https") Returns the empty sequence if it is not called from an HTTP server. **/
  getRequestProtocol(): string;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the rewritten URL. To get the URL before rewriting occurs, use xdmp:get-original-url. **/
  getRequestUrl(): string;

    /** If this App Server is using application-level authentication, returns the ID of the user in the last successful call to xdmp:login. Otherwise, returns the ID of the user from the Authorization header of this App Server request. If you want to get the ID of the current user, use the xdmp:get-current-userid function. **/
  getRequestUser(): number;

    /** If this App Server is using application-level authentication, returns the username in the last successful call to xdmp:login. Otherwise, returns the username from the Authorization header of this App Server request. **/
  getRequestUsername(): string;

    /** Returns two nodes, the first containing the HTTP response code and the second containing the HTTP response message. **/
  getResponseCode(): Sequence<any>;

    /** Returns the encoding that the response from this server is in. **/
  getResponseEncoding(): string;

    /** Returns the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. Server fields are commonly used with the system Plugin Framework. **/
  getServerField(name: string, defaultVal?: MLArray<any>|null|undefined): Sequence<any>;

    /** Returns a sequence of the server field names. **/
  getServerFieldNames(): Sequence<string>;

    /** Returns the value of a named session field from the session created by the xdmp:login function. **/
  getSessionField(name: string, defaultVal?: MLArray<any>|null|undefined): Sequence<any>;

    /** Returns a sequence of the HTTP session field names from the session created by the xdmp:login function. **/
  getSessionFieldNames(): Sequence<string>;

    /** Retrieve the transaction mode for the current session. Returns one of "auto", "query", "update", "update-auto-commit", "query-single-statement", or "multi-auto". **/
  getTransactionMode(): string;

    /** Returns the URL of the URL rewriter handler for this application server. An empty string is returned if there is no rewrite handler. **/
  getUrlRewriterPath(): string;

    /** Returns the ID of the group specified in the parameter. Returns the ID of the current group if no parameter is specified. **/
  group(name?: string|null|undefined): number;

    /** This function returns the audit event type's enabled setting for the audit configuration. A value of true is returned if both audit has been enabled for group setting and the audit event type has been enabled, Otherwise false is returned. **/
  groupGetAuditEventTypeEnabled(groupId: string, eventType: string): Boolean;

    /** Returns the IDs of all hosts belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
  groupHosts(groupID?: number|null|undefined): Sequence<number>;

    /** Returns the name of the group with the given ID. Returns the name of the current group if no parameter is specified. **/
  groupName(groupID?: number|null|undefined): string;

    /** Returns the IDs of all port App Servers belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
  groupPortServers(groupID?: number|null|undefined): Sequence<number>;

    /** Returns the IDs of all App Servers belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
  groupServers(groupID?: number|null|undefined): Sequence<number>;

    /** Returns the ID of the Task Server belonging to the group with the given ID. If no parameter is specified, it uses the group of the current host. **/
  groupTaskServer(groupID?: number|null|undefined): Sequence<number>;

    /** Returns a sequence of the IDs of all the groups in the system. **/
  groups(): Sequence<number>;

    /** This function is used for kerberos GSS authentication in application level authentication. **/
  gssServerNegotiate(inputToken: string): Object;

    /** Get a node from a gzip node. Gunzips and returns the file in memory as a document node (for XML and JSON formats), a text node (for text formats), or a binary node (for binary formats). The format is determined by the format option. **/
  gunzip(gzipnode: MLNode<any>, options: MLNodeOrObject<any>|{[key:string]:any}): Sequence<any>;

    /** Create a gzip node from a node. **/
  gzip(node: MLNodeOrObject<any>): MLNode<any>;

    /** Tests whether the current user has at least one of a given set of privileges. Returns true if they do, false otherwise. **/
  hasPrivilege(privileges: MLArray<string>, kind: string): boolean;

    /** Returns the 32-bit hash of a string. **/
  hash32(string: string): number;

    /** Returns the 64-bit hash of a string. **/
  hash64(string: string): number;

    /** Parses a hexadecimal string, returning an integer. **/
  hexToInteger(hex: string): number;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the md5 hash function of the given secret key and message arguments. **/
  hmacMd5(secretkey: any, message: any, encoding?: string|null|undefined): string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA1 hash function of the given secret key and message arguments. **/
  hmacSha1(secretkey: any, message: any, encoding?: string|null|undefined): string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA256 hash function of the given secret key and message arguments. **/
  hmacSha256(secretkey: any, message: any, encoding?: string|null|undefined): string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA512 hash function of the given secret key and message arguments. **/
  hmacSha512(secretkey: any, message: any, encoding?: string|null|undefined): string;

    /** Returns the ID of the host named in the parameter. Returns the ID of the current host if no parameter is specified. **/
  host(name?: string|null|undefined): number;

    /** Returns a sequence of forest IDs in the specified host. **/
  hostForests(ID: number): Sequence<number>;

    /** Returns whether fips mode is enabled. **/
  hostGetSslFipsEnabled(hostId: MLArray<number>): Sequence<boolean>;

    /** Returns the ID of the group that the specified host belongs to. **/
  hostGroup(ID?: number|null|undefined): number;

    /** Returns this host mode **/
  hostMode(): boolean;

    /** Return the description string for this host mode setting **/
  hostModeDescription(ID?: number|null|undefined): boolean;

    /** Returns the name of the specified host. **/
  hostName(ID?: number|null|undefined): string;

    /** Returns the status of a host as a JSON node. **/
  hostStatus(hostId: MLArray<number>): Sequence<any>;

    /** Returns a sequence of the IDs of all the hosts in the cluster. **/
  hosts(): Sequence<number>;

    /** Sends an http DELETE request to the http server specified in the URI to delete the specified resource. The server should respond if the request is to be completed, but a response is not guaranteed. Also, even if the server does respond, it does not guarantee that the request has been or will be completed. **/
  httpDelete(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Sends the http GET method to the specified URI. Returns the http response as well as whatever information is identified by the specified URI (for example, an html document). **/
  httpGet(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Sends the http HEAD method to the specified URI. Returns the http response header for the specified URI. **/
  httpHead(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Sends the http OPTIONS method to the specified URI. Returns the http response for the specified URI. **/
  httpOptions(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Sends an http POST request to the server. **/
  httpPost(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined, data?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Sends an HTTP PUT request to an HTTP server. The HTTP server should return a response, which will differ depending on the action the HTTP server takes for the PUT. **/
  httpPut(uri: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined, data?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Returns the string where the first letter of each token has been uppercased. **/
  initcap(string: string): string;

    /** Returns a binary representation of an integer. **/
  integerToBinary(val: number): string;

    /** Returns a hexadecimal representation of an integer. **/
  integerToHex(val: number): string;

    /** Returns an octal representation of an integer. **/
  integerToOctal(val: number): string;

    /** Returns the result of evaluating an XQuery or Server-Side JavaScript module at the given path. **/
  invoke(path: string, vars?: Object|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns the result of evaluating a JavaScript function value. **/
  invokeFunction(func: () => any, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns true if the node is a text node containing only whitespace. **/
  isWhitespaceNode(text?: MLNodeOrObject<any>|null|undefined): boolean;

    /** Construct a context-independent string from a QName. This string is of the form "{namespaceURI}localname" and is suitable for use as a map key. **/
  keyFromQName(name: xs.QName): string;

    /** Exports all encryption keys stored in the MarkLogic embedded KMS. **/
  keystoreExport(passphrase: string, filepath: string): boolean;

    /** Import encryption keys into the MarkLogic embedded KMS from an exported encrypted file (see keystore-export). The import process will reject duplicate keys and log a warning indicating the id of the rejected keys. Imported keys can only be use for decryption. **/
  keystoreImport(passphrase: string, filepath: string): boolean;

    /** Validates the content of an exported keystore file, see keystore-export and keystore-import **/
  keystoreValidateExported(passphrase: string, filepath: string): Sequence<any>;

    /** Returns an ldap entry. **/
  ldapLookup(DN: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns ldap search result. The function returns a Sequence containing objects, where each object is an ldap attribute with its value. **/
  ldapSearch(query: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Acquire a lock on a document or directory for an extended amount of time. Locks restrict updates to a document or directory to the user who acquires the lock. **/
  lockAcquire(uri: string, scope?: string|null|undefined, depth?: string|null|undefined, owner?: MLArray<any>|null|undefined, timeout?: number|null|undefined): null;

    /** Acquires an intent exclusive transaction lock on a URI. If a shared transaction lock on the URI is already held by the current transaction it is promoted to an exclusive lock. If a shared or exclusive transaction lock on the URI is already held by some other transaction, this function blocks until that lock is released. **/
  lockForUpdate(uri: string): null;

    /** Unlock a document or directory. Releases the lock created with xdmp:lock-acquire. **/
  lockRelease(uri: string): null;

    /** Logs a message into a specific app server error log file. System and Application logs are split and logged separately. If the function is executed on an app server at port 8888, the message will appear in <install_dir>/Logs/8888_ErrorLog.txt and not in <install_dir>/Logs/ErrorLog.txt. The <install_dir> is the location of the MarkLogic install directory. The port number is the port number of the current App Server or "TaskServer" if the current request is running on the Task Server. The log message is sent as soon as this function is called, even if the program from which it is called has not completed. **/
  log(msg: Sequence<any>|Object|string|Array<any>|null|Number|Boolean, level?: string|null|undefined): null;

    /** Retrieves the current server log level. **/
  logLevel(): string;

    /** Logs in a user on an application server that is using application-level authentication and sends a session cookie containing the session ID to the user's browser. Returns true on success, false on failure. If the user calling this function has the xdmp:login privilege, this function can be called without a password or with the empty sequence as the password. In this case, login will succeed if the specified user exists. Therefore, use the xdmp:login privilege carefully, as any user with that privilege will be able to execute code that uses the xdmp:login function to log in as any user.Note that only HTTP App Servers allow application-level authentication, and therefore this function only works on an HTTP App Server; it always returns false against an XDBC server. **/
  login(name: string, password?: string|null|undefined, setSession?: boolean|null|undefined, roleNames?: MLArray<string>|null|undefined): boolean;

    /** Logs the current user out of the session on the server. The result is that the current user is set to the default user defined in application-level authentication. The session remains on the server until it expires. **/
  logout(): null;

    /** Left-shift a 64-bit integer value. **/
  lshift64(x: number, y: number): number;

    /** Calculates the md5 hash of the given argument. **/
  md5(data: any, encoding?: string|null|undefined): string;

    /** Starts merging the forests of the database, subject to specified options. **/
  merge(options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** Cancel the merge with the specified merge ID on a forest with the specified forest ID. **/
  mergeCancel(forestID: number, mergeID: number): null;

    /** Returns the forest IDs of any currently merging database forests. **/
  merging(): Sequence<number>;

    /** This function returns all the mimetypes specifications of the cluster. **/
  mimetypes(): Array<any>;

    /** Returns the database ID of the modules database. Returns 0 if the current App Server uses the file system for its modules. **/
  modulesDatabase(): number;

    /** Returns the current root path for modules. **/
  modulesRoot(): string;

    /** Returns month name, calculated from the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  monthNameFromDate(arg: Date): string;

    /** Muliply two 64-bit integer values, discarding overflow. **/
  mul64(x: number, y: number): number;

    /** Extract the parts from a multipart encoding. The first item in the sequence is a manifest, and the remaining items are the decoded parts.An attempt will be made to determine the type of content based on headers such as the part's content-type. If possible, an element will be returned, falling back to an xs:string, and finally binary().The options control how the parts are unpacked, and are similar to xdmp:zip-get - default-namespace, repair, format, default-language, and encoding. The options apply to all parts, so specifying a format of binary will cause all parts to be returned as binary, and specifying text will cause all parts to be returned as xs:string if possible, falling back to binary() if necessary. This is useful if different parts need different options, in which case the resulting strings can each be passed to xdmp:unquote() with appropriate options. **/
  multipartDecode(separator: string, data: MLNode<any>, options?: MLNodeOrObject<any>|null|undefined): Sequence<any>;

    /** Create a multipart encoding of the specified node. The returned binary node can be passed to xdmp:http-post. The manifest is modeled after the manifest that is passed to zip:create, with the headers element being the same as is described for xdmp:http-get allowing users to add arbitrary headers to each part. If a content-type header is not specified for a part, it will be determined if possible from the content.There should be one part element for each node in the content sequence.Each part also has an optional options node to control how xml or text will be serialized. The two options are the same as for xdmp:save.<part> <headers> <Content-Type>image/jpeg</Content-Type> <headers> <options> <output-encoding>...</output-encoding> <output-sgml-character-entities>...</output-sgml-character-entities> </options> </part>The manifest can also be defined as a JSON array.[ { "headers": { "Content-Type":"image/jpeg" }, "options": { "outputEncoding": ..., "outputSgmlCharacterEntities" : ... } }, { "headers": { "Content-Type":"text/html" } } ] **/
  multipartEncode(separator: string, manifest: Array<any>|Node, content: Array<any>|Sequence<any>): MLNode<any>;

    /** Returns any collections for the node's document in the database. If the specified node does not come from a document in a database, then xdmp:node-collections returns an empty sequence. **/
  nodeCollections(node: MLNodeOrObject<any>): Sequence<string>;

    /** Returns the database id where the parameter is stored. If the specified node does not come from a document in a database, then xdmp:node-database returns an empty list. **/
  nodeDatabase(node: MLNodeOrObject<any>): number;

    /** Deletes a node from the database. On-the-fly constructed nodes cannot be deleted. **/
  nodeDelete(old: MLNodeOrObject<any>): null;

    /** Adds an immediately following sibling to a node. **/
  nodeInsertAfter(sibling: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Adds an immediately preceding sibling to a node. **/
  nodeInsertBefore(sibling: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Adds a new last child to a node. For XML documents, only element nodes and document nodes can have children. For JSON documents, object nodes and array nodes can have children. Element nodes, object nodes, and array nodes cannot have document node children. Document nodes cannot have multiple roots. On-the-fly constructed nodes cannot be updated. The parameters must specify individual nodes and not node sets. **/
  nodeInsertChild(parent: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Returns an xs:string representing the node's kind: either "document", "element", "attribute", "text", "namespace", "processing-instruction", "binary", or "comment". The fn:node-kind builtin was dropped from the final XQuery 1.0 spec. This is the equivalent function in the xdmp: namespace carried over for MarkLogic 1.0 dialects. **/
  nodeKind(node: MLNodeOrObject<any>): string;

    /** Returns the metadata value of a given node. **/
  nodeMetadata(node: string): Object;

    /** Returns the metadata value of a node for a particular key. **/
  nodeMetadataValue(uri: string, keyName: string): string;

    /** Returns the permissions to a node's document. **/
  nodePermissions(node: MLNodeOrObject<any>, outputKind?: string|null|undefined): Sequence<Object>;

    /** Return a sequence of query-rolesets that are required for proper querying with Element Level Security if the node is inserted into the database with the given document-insert options. A typical workflow calls this function and adds each query-rolesets through the sec:add-query-rolesets function before inserting the document into the database so that the document can be correctly queried with Element Level Security as soon as it is inserted. **/
  nodeQueryRolesets(uri: string, root: MLNodeOrObject<any>, insertOptions?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined, options?: MLArray<string>|null|undefined): Sequence<MLNode<any>>;

    /** Replaces a node. **/
  nodeReplace(old: MLNodeOrObject<any>, new_: MLNodeOrObject<any>): null;

    /** Returns the document-uri property of the parameter or its ancestor. **/
  nodeUri(node: MLNodeOrObject<any>): string;

    /** NOT a 64-bit integer value. **/
  not64(x: number): number;

    /** Parses an octal string, returning an integer. **/
  octalToInteger(octal: string): number;

    /** OR two 64-bit integer values. **/
  or64(x: number, y: number): number;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
  parseDateTime(picture: string, value: string, language?: string|null|undefined, calendar?: string|null|undefined, country?: string|null|undefined): Date;

    /** Parses a string containing date, time or dateTime using the supplied picture argument and returns a dateTime value. While this function is closely related to other XSLT functions, it is available in XSLT as well as in all XQuery dialects and in Server-Side JavaScript. **/
  parseYymmdd(picture: string, value: string, language?: string|null|undefined, calendar?: string|null|undefined, country?: string|null|undefined): Date;

    /** Returns a seequence of forest IDs with the specified partition number **/
  partitionForests(partitionNumber: number): Sequence<number>;

    /** Tests whether the current user has at least one of a given set of privileges. Returns true if they do, false otherwise. Ignore undefined privileges. **/
  passiveHasPrivilege(privileges: MLArray<string>, kind: string): boolean;

    /** Tests whether the current user has at least one of a given set of privileges. Raises an error if the user does not have any of the privileges. Ignore undefined privileges. **/
  passiveSecurityAssert(privileges: MLArray<string>, kind: string): null;

    /** Returns a string whose value corresponds to the path of the node. **/
  path(node: MLNodeOrObject<any>, includeDocument?: boolean|null|undefined): string;

    /** Converts a PDF file to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. **/
  pdfConvert(doc: MLNodeOrObject<any>, filename: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns a permission object corresponding to the named role and capability given. **/
  permission(role: string, capability: string, outputKind?: string|null|undefined): Object|Element;

    /** Returns the operating-system platform upon which MarkLogic Server is running ("solaris", "winnt", "linux", or "macosx"). **/
  platform(): string;

    /** Returns an integer value representing the starting position of a string within the search string. Note, the string starting position is 1. If the first parameter is empty, the result is the empty sequence. **/
  position(test: string, target: string, collation?: string|null|undefined): number;

    /** Converts a Microsoft Powerpoint document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manifest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  powerpointConvert(doc: MLNodeOrObject<any>, filename: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns a well-formatted XQuery module. **/
  prettyPrint(xquery: string): string;

    /** Returns the privilege ID for the specified privilege name. Unlike the security library module function sec:uid-for-name, this function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the privilege ID from the security database configured for the database in which the App Server evaluates against. **/
  privilege(action: string, kind: string): number;

    /** Returns the set of all roles that have a given privilege. **/
  privilegeRoles(action: string, kind: string): Sequence<number>;

    /** Returns the current MarkLogic product edition. **/
  productEdition(): string;

    /** Returns the current MarkLogic product environment. **/
  productEnvironment(): string;

    /** Construct a QName from a string of the form "{namespaceURI}localname". This function is useful for constructing Clark notation parameters for the xdmp:xslt-eval and xdmp:xslt-invoke functions. **/
  QNameFromKey(key: string): xs.QName;

    /** Returns an xs:integer between 1 and 4, both inclusive, calculating the quarter component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  quarterFromDate(arg: Date): number;

    /** Returns the current value of the resource meters for this query sequence as a JSON node. **/
  queryMeters(): Object;

    /** This function returns the partition numbers of the partitions that the specified query will be searched on. **/
  queryPartitions(query: cts.Query): Sequence<number>;

    /** Enables or disables tracing of this query. When query tracing is enabled, "info" level messages are logged detailing the search optimizations performed. **/
  queryTrace(enabled: boolean): null;

    /** Returns the unevaluated serialized representation of the input parameter as a string. **/
  quote(arg: MLArray<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): string;

    /** Returns a random unsigned integer between 0 and a number up to 64 bits long. **/
  random(max?: number|null|undefined): number;

    /** Given a value, the function returns a list of forests that have ranges the value falls into. This function reports an error if the context database doesn't have the range assignment policy configured. **/
  rangePartitionForests(value: any): Sequence<number>;

    /** Redirects the App Server response to a given location. **/
  redirectResponse(name: string): null;

    /** Remove an orphaned large binary **/
  removeOrphanedBinary(forestID: number, binaryID: number): null;

    /** Returns the unique key of the current request. **/
  request(): number;

    /** Cancel the request with the given host, server, and request IDs. **/
  requestCancel(hostID: number, serverID: number, requestID: number): null;

    /** Returns the status of a running request as a Sequence of ObjectNodes. If the request ID is that of the calling request, then no special permission is required. If the ID is for another request, then the calling request needs http://marklogic.com/xdmp/privileges/status permission. The result of this builtin is exactly equivalent to xdmp:server-status(xdmp:host(), xdmp:server())//*:request-status[*:request-id = $req], where $req is the ID of the request you are interested in. In the 3.2 release this builtin is not cluster-aware, the first argument (host ID) must be the same as the value returned by xdmp:host(). If you wish to obtain the status of a request running on a remote host, use the code snippet above to obtain the request status using xdmp:server-status(). **/
  requestStatus(hostId: number, serverId: number, requestId: MLArray<number>): Sequence<any>;

    /** Returns the system timestamp for this request if the request is a query statement. Returns the empty sequence if the current request is an update statement. **/
  requestTimestamp(): number;

    /** Resolves a relative URI against an absolute URI. If $base is specified, the URI is resolved relative to that base. If $base is not specified, the base is set to the base-uri property from the static context, if the property exists; if it does not exist, an error is thrown. **/
  resolveUri(relative: string, base?: string|null|undefined): string;

    /** Restart servers on hosts. **/
  restart(hostIDs: MLArray<number>, reason: string): null;

    /** Within the catch section of a try-catch expression, re-throw the currently caught error. **/
  rethrow(): null;

    /** Returns the role ID for the specified role name. Unlike the security library module function sec:uid-for-name, this function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the role ID from the security database configured for the database in which the App Server evaluates against. **/
  role(role: string): number;

    /** Returns the role name for the specified role id. This function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the role name from the security database configured for the database in which the App Server evaluates against. **/
  roleName(roleId: number): string;

    /** Returns the set of all roles inherited by a given role, including roles directly assigned to the role and roles inherited from other roles. **/
  roleRoles(name: string): Sequence<number>;

    /** Roll back the current transaction. **/
  rollback(): null;

    /** Generate a new RSA public/private key pair. Returns a list of two PEM encoded strings. The first is the private key, the second is the public key. **/
  rsaGenerate(options: MLNodeOrObject<any>|{[key:string]:any}): Sequence<string>;

    /** Right-shift a 64-bit integer value. **/
  rshift64(x: number, y: number): number;

    /** Serializes a node as text and saves it to a file. The node can be any node, including a document node, an element node, a text node, or a binary node. **/
  save(path: string, node: MLNodeOrObject<any>, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): null;

    /** Returns the database ID of the schema database associated with the current database. **/
  schemaDatabase(databaseId?: number|null|undefined): number;

    /** Tests whether the current user has at least one of a given set of privileges. Raises an error if the user does not have any of the privileges. **/
  securityAssert(privileges: MLArray<string>, kind: string): null;

    /** Returns the database ID of the security database associated with the current database. **/
  securityDatabase(databaseId?: number|null|undefined): number;

    /** Return the ID(s) of the App Servers, XDBC Servers, ODBC Servers, or Task Servers with the given name. Returns the ID of the current server if no parameter is specified. **/
  server(name?: string|null|undefined, group?: number|null|undefined): Sequence<number>;

    /** Return the default collation of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverCollation(id: number): string;

    /** Return the default coordinate system of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverCoordinateSystem(id: number): string;

    /** Return the database ID of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverDatabase(id: number): number;

    /** Return the default xquery version of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverDefaultXqueryVersion(id: number): string;

    /** Return the ID of the group for an App Server, XDBC Server, ODBC Server, or Task Server. **/
  serverGroup(id: number): number;

    /** Return the kind of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. **/
  serverKind(id: number): string;

    /** Return the modules database ID of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverModulesDatabase(id: number): number;

    /** Return the name of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. **/
  serverName(id: number): string;

    /** Return the port of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverPort(id: number): number;

    /** Return the root of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. For a Task Server, return the empty sequence. **/
  serverRoot(id: number): string;

    /** Return the SSL certificate template ID of the App Server, XDBC Server, ODBC Server, or Task Server with the given ID. If none, return 0. For a Task Server, return the empty sequence. **/
  serverSslCertificateTemplate(id: number): number;

    /** Returns the status of an app-server on a host as a Sequence of ObjectNodes. **/
  serverStatus(hostId: number, serverId: MLArray<number>): Sequence<any>;

    /** Returns a sequence of the IDs of all the App Servers (HTTP, XDBC, ODBC, and TaskServer) in the system. **/
  servers(): Sequence<number>;

    /** Changes the time limit for an actively running request to the specified value. If you do not supply values for the last three parameters, the function sets the time limit for the current request. **/
  setRequestTimeLimit(timeLimit: number, hostID?: number|null|undefined, serverID?: number|null|undefined, requestID?: number|null|undefined): null;

    /** Sets the response code and message. **/
  setResponseCode(code: number, message: string): null;

    /** Sets the response content-type. **/
  setResponseContentType(name: string): null;

    /** Sets the response encoding. **/
  setResponseEncoding(encoding: string): null;

    /** Sets the serialization method. **/
  setResponseOutputMethod(method: string): null;

    /** Sets the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. **/
  setServerField(name: string, value: MLArray<any>): Sequence<any>;

    /** Sets the privilege of a named server field. **/
  setServerFieldPrivilege(name: string, privilege: string): null;

    /** Sets the value of a named session field for the session created by the xdmp:login function. **/
  setSessionField(name: string, value: MLArray<any>): Sequence<any>;

    /** Set the transaction mode for the current session. Calling this function has no effect on existing transactions. **/
  setTransactionMode(value: string): null;

    /** Set the name of a local or remote transaction. **/
  setTransactionName(name: string, hostId?: number|null|undefined, txnId?: number|null|undefined): null;

    /** Set the transaction time limit for a local or remote transaction. Defaults to the configured request timeout. **/
  setTransactionTimeLimit(timeLimit: number, hostId?: number|null|undefined, txnId?: number|null|undefined): null;

    /** Calculates the SHA1 hash of the given argument. **/
  sha1(data: any, encoding?: string|null|undefined): string;

    /** Calculates the SHA256 hash of the given argument. **/
  sha256(data: any, encoding?: string|null|undefined): string;

    /** Calculates the SHA384 hash of the given argument. **/
  sha384(data: any, encoding?: string|null|undefined): string;

    /** Calculates the SHA512 hash of the given argument. **/
  sha512(data: any, encoding?: string|null|undefined): string;

    /** Shutdown servers on hosts. **/
  shutdown(hostIDs: MLArray<number>, reason: string, failover?: boolean|null|undefined): null;

    /** Delays for a specific amount of time. **/
  sleep(msec: number): null;

    /** Returns this host's software version **/
  softwareVersion(): number;

    /** Place the specified module on the task queue for evaluation. **/
  spawn(path: string, vars?: Object|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Executes an ad hoc SQL query. This function is for testing your SQL views when data modeling; it is not intended to be used directly in applications. **/
  sql(sql: string, options?: MLArray<string>|null|undefined, bindings?: Object|null|undefined, query?: cts.Query|null|undefined): Sequence<any>;

    /** Returns a node representing the query plan of the given SQL SELECT query. Raises an error if the SQL query is not a SELECT query. **/
  sqlPlan(sql: string, options?: MLArray<string>|null|undefined): ObjectNode;

    /** Starts journal archiving to the specified list of forests. **/
  startJournalArchiving(forestIDs: MLArray<number>, journalArchivePath: string, lagLimit?: number|null|undefined): null;

    /** Combines an initial hash with a subsequent hash. **/
  step64(initial: number, step: number): number;

    /** Stops journal archiving to the specified list of forests. **/
  stopJournalArchiving(forestIDs: MLArray<number>): null;

    /** Formats a dateTime value using POSIX strftime. This function uses the POSIX strftime system call in the way it is implemented on each platform. For other XQuery functions that have more functionality (for example, for things like timezones), use one or more if the various XQuery or XSLT standard functions such as fn:format-dateTime. **/
  strftime(format: string, value: Date): string;

    /** Returns a binary node made up of a subset of the given binary node. **/
  subbinary(source: MLNode<any>, startingLocation: number, length?: number|null|undefined): MLNode<any>;

    /** Run tidy on the specified html document to convert the document to well-formed and clean XHTML. Returns two nodes: the first is a status node indicating any errors or warning from tidy, and the second is an html node containing the cleaned xhtml. **/
  tidy(doc: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Converts a 64 bit timestamp value to an xs:dateTime. **/
  timestampToWallclock(timestamp: number): Date;

    /** Constructs a JSON document. **/
  toJson(item: MLArray<any>): DocumentNode<any>;

    /** Returns a string representing a JSON serialization of a given item sequence. **/
  toJsonString(item: MLArray<any>): string;

    /** Signal a trace event. If trace events are activated and the event is enabled, the trace event is logged. **/
  trace(name: string, value: MLArray<any>): null;

    /** Returns whether or not a trace event is enabled. **/
  traceEnabled(name: string): boolean;

    /** Returns the transaction ID for the current transaction, or transaction IDs for all transactions with the given name. **/
  transaction(txnName?: string|null|undefined, hostId?: number|null|undefined): Sequence<number>;

    /** Explicitly commit a transaction running on a named host. **/
  transactionCommit(hostId: number, txnId: number): null;

    /** Returns all URIs currently locked for read or write by a transaction. If the transaction is waiting to lock a URI, that URI is returned too. **/
  transactionLocks(hostId?: number|null|undefined, txnId?: number|null|undefined): Object;

    /** Explicitly roll back a transaction running on a named host. **/
  transactionRollback(hostId: number, txnId: number): null;

    /** Returns the database ID of the triggers database associated with the current database. **/
  triggersDatabase(databaseId?: number|null|undefined): number;

    /** Returns the name of the simple type of the atomic value argument as an xs:QName. This function is a built-in. **/
  type(value: any): xs.QName;

    /** Parses a string as XML, returning one or more document nodes. **/
  unquote(arg: string, defaultNamespace?: string|null|undefined, options?: MLArray<string>|null|undefined): Sequence<any>;

    /** Returns the content type of the given URI as matched in the mimetypes configuration. xdmp:content-type continues to work too. **/
  uriContentType(uri: string): string;

    /** Returns the format of the given URI as matched in the mimetypes configuration. **/
  uriFormat(uri: string): string;

    /** Returns true if a given URI refers to a file which exists on the current application server. Only returns true if the modules on the App Server is set to file system; always returns false if you are using a database for your modules. false Returns false if the file does not exist. Returns the empty sequence if the URI is the empty sequence. **/
  uriIsFile(uri: string): boolean;

    /** Converts URL-encoded string to plaintext. This decodes the string created with xdmp.urlEncode. **/
  urlDecode(encoded: string): string;

    /** Converts plaintext into URL-encoded string. To decode the string, use xdmp.urlDecode.There is also a W3C function that does a slightly different url encoding: fn:encode-for-uri. **/
  urlEncode(plaintext: string, noSpacePlus?: boolean|null|undefined): string;

    /** Returns the user ID for the specified user name. Unlike the security library module function sec:uid-for-name, this function can be evaluated against any database and does not need to be evaluated directly against the security database. It returns the user ID either from the security database or from the specified external security, depending on the parameter values. **/
  user(user: string, extSecId?: number|null|undefined, secDbFirst?: boolean|null|undefined): number;

    /** Returns external security id and user name for an external user. **/
  userExternalSecurity(userId: number): Object;

    /** Returns the last-login node for the current user. If no last-login database is specified in the App Server configuration, then the empty sequence is returned. **/
  userLastLogin(): Object;

    /** Returns all roles assigned to a user, including roles directly assigned to the user and roles inherited by other roles. Returns roles for users from the security database or from the specified external security, depending on the parameter values. **/
  userRoles(name: string, extSecId?: number|null|undefined, secDbFirst?: boolean|null|undefined): Sequence<number>;

    /** Returns all roles assigned to a user, including roles directly assigned to the user and roles inherited by other roles. Returns role IDs for users from the security database or from the specified external security, depending on the parameter values. **/
  useridRoles(userId: number, extSecId?: number|null|undefined, secDbFirst?: boolean|null|undefined): Sequence<number>;

    /** Returns an element containing a summary of validation errors in a node. **/
  validate(node: MLNodeOrObject<any>, mode?: string|null|undefined, typeName?: xs.QName|null|undefined): MLNode<any>;

    /** Returns the current MarkLogic Server version. **/
  version(): string;

    /** Converts an xs:dateTime to a 64 bit timestamp value. **/
  wallclockToTimestamp(timestamp: Date): number;

    /** Returns an xs:integer between 1 and 53, both inclusive, representing the week value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  weekFromDate(arg: Date): number;

    /** Returns an xs:integer in the range 1 to 7, inclusive, representing the weekday value in the localized value of $arg. Monday is the first weekday value (value of 1), and Sunday is the last (value of 7). If $arg is the empty sequence, returns the empty sequence. **/
  weekdayFromDate(arg: Date): number;

    /** Converts a Microsoft Word document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manifest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  wordConvert(doc: MLNodeOrObject<any>, filename: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns the XML representation of the specified X.509 certificate. **/
  x509CertificateExtract(cert: string): Object;

    /** Generate a new PEM-encoded X.509 certificate. **/
  x509CertificateGenerate(cert: Object, privateKey?: String|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): String;

    /** Returns the issuer distinguished name for the specified X.509 certificate. **/
  x509CertificateIssuerName(cert: string): Object;

    /** Returns the subject distinguished name for the specified X.509 certificate. **/
  x509CertificateSubjectName(cert: string): Object;

    /** Completes (commits or rolls back) a prepared XA transaction. **/
  xaComplete(forestID: number, txnId: number, commit: boolean, remember: boolean): null;

    /** Forgets a remembered completed XA transaction. **/
  xaForget(forestID: number, txnId: number): null;

    /** XOR two 64-bit integer values. **/
  xor64(x: number, y: number): number;

    /** Returns the result of evaluating a string as an XQuery module. Options are as per the XQuery function xdmp:eval. **/
  xqueryEval(xquery: string, vars?: Object|null|undefined, options?: Object|null|undefined): Sequence<any>;

    /** Executes an XSLT stylesheet against a node. **/
  xsltEval(stylesheet: MLNodeOrObject<any>, input?: MLNodeOrObject<any>|null|undefined, params?: {[key:string]:any}|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Executes an XSLT stylesheet against a node. **/
  xsltInvoke(path: string, input?: MLNodeOrObject<any>|null|undefined, params?: {[key:string]:any}|null|undefined, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Returns an xs:integer between 1 and 366, both inclusive, representing the yearday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
  yeardayFromDate(arg: Date): number;

    /** Create a zip file from a list of nodes. **/
  zipCreate(manifest: Array<any>|Node, nodes: Array<any>|Sequence<any>): MLNode<any>;

    /** Get a named file from a zip document. Unzips and returns the file in memory as a document node (for XML and JSON formats), a text node (for text formats), or a binary node (for binary). The format is determined either by the mimetype from the file name or by the format option. **/
  zipGet(zipfile: MLNode<any>, name: string, options?: MLNodeOrObject<any>|{[key:string]:any}|null|undefined): Sequence<any>;

    /** Return a manifest for this zip file. The manifest contains information about what is in the zip file. The form of the manifest is: Each part is a file within the zip. The attributes specify the uncompressed size for the file, the compressed size for that file, whether or not the file is encrypted, and the last-modified timestamp. Note that MarkLogic cannot extract encrypted files, attempting to do so will cause an error. Also note that due to a limitation in the zip file format, the last-modified time has a granularity of two seconds (e.g. 10:22:33 becomes 10:22:32). **/
  zipManifest(zipfile: MLNode<any>): Array<any>;

}
declare var xdmp:xdmpFunctions
