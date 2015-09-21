// Type definitions for DLSModule
// Definitions: 

/**
		The Library Services API module is 
			used to place documents under library service control,
			and allows you to perform functions such as checking
			in a document, checking out a document, and so on. 	
		The Library Services API is installed as the following file:
         install_dir/Modules/MarkLogic/dls.xqy 
 
      where install_dir is the directory in which 
	      MarkLogic Server is installed.
       To use the dls.xqy module in your own XQuery modules, 
	      include the following line in your XQuery prolog:
      
	      import module namespace dls = "http://marklogic.com/xdmp/dls" 
		  at "/MarkLogic/dls.xqy";
      The library uses the dls: namespace, which is 
	      not predefined in the server.
      MarkLogic recommends enabling the URI Lexicon when using 
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

    /** Returns the version history of the document located at the specified URI. **/
  documentHistory(uri: string): Object;

    /** This function places a document under management. A document must first be managed before it can be checked out. The document at the specified URI will become version 1 of this managed document. **/
  documentManage(uri: string, deep: Object, annotation?: string): void;

    /** Removes the specified document from management. You must have update permissions on the document to unmanage the document. **/
  documentUnmanage(uri: string, deep: Object, removeVersions: Object): void;

    /** This function checks out (locks) the document at the specified URI to prevent other users from modifying the document. An exception is thrown if the document does not yet exist or does exist but is not managed. This function must be called in a separate transaction from the dls:document-update and dls:document-checkin functions. **/
  documentCheckout(uri: string, deep: Object, annotation?: string, timeout?: string): void;

    /** This function checks in (unlocks) the document at the specified URI to allow other users to modify the document. This function does not create a new version of the document. You must explicitly use dls:document-update to create new versions of a document. This function must be called in a separate transaction from the dls:document-checkout and dls:document-update functions. **/
  documentCheckin(uri: string, deep: Object): void;

    /** This function returns the most recent version of a document as of a point in time. **/
  documentVersionAsOf(uri: string, asOf: Date): Node;

    /** This function returns a particular version of a managed document. An error is thrown if there is no such version. **/
  documentVersion(uri: string, versionNumber: number): Node;

    /** This function returns the URIs of all versions of a managed document. This includes URIs to the document properties of versions of documents that have been deleted but with history retained. See dls:document-version-delete for details on the retain-history argument. **/
  documentVersionUris(uri: string): string;

    /** This function removes the specified version of the managed document at the specified URI. This overrides any configured retention policies and should be used with care. You must have update permissions on the document version in order to delete it. If you set $retain-history to true, you can use xdmp:document-properties to view the deleted document's properties fragment in the database. For example, if you had deleted version 1 of /foo/bar/baz.xml, you can view its properties by calling: xdmp:document-properties("/foo/bar/baz.xml_versions/1-baz.xml") **/
  documentVersionDelete(uri: string, version: number, retainHistory: Object): void;

    /** This function returns a query that matches any version of the specified URI. If the URI contains either of the wildcard characters '?' or '*', then the search is wildcarded. Specifying '*' matches any numbered version of any managed document. **/
  documentVersionsQuery(uri: string): Object;

    /** This function returns the URI of the specified version of the document located at the specified URI. The specified version of the document may, or may not, actually exist. **/
  documentVersionUri(documentUri: string, version: number): string;

    /** This function removes the specified managed document. You must have update permissions on the document to delete it. If you set $retain-history to true, you can use xdmp:document-properties to view the deleted document's properties fragment in the database. **/
  documentDelete(uri: string, keepOldVersions: Object, retainHistory: Object): void;

    /** This function determines whether or not the document at the specified URI is managed. This function returns true if the document at the URI is either a managed document or a numbered version of a managed document. Otherwise false is returned. **/
  documentIsManaged(uri: string): Object;

    /** This function creates and returns a retention rule element. Use dls:insert-retention-rule to insert the retention rule into the database. Specifying multiple constraints implies AND between them. For example, specifying both $num-versions and $duration retains a numbered version only if it is both one of the N most recent versions and it was created more recently than "now - duration." If neither $num-versions or $duration is specified, then any numbered version matching the document query is kept forever. The $document-query-text parameter is intended to be used for the human readable form of a query that was used to produce the corresponding cts:query. This may be the text that a user typed into a search text field in the UI. This parameter does NOT affect the retention policy. **/
  retentionRule(name: string, comment: string, numVersions: number, duration: Object, documentQueryText: string, documentQuery: Object): Node;

    /** This function inserts retention rules into the database. They will be readable by the dls-user role and modifiable/deletable by the dls-admin role. **/
  retentionRuleInsert(rules: Node): void;

    /** This function returns the specified retention rules from the database. **/
  retentionRules(names: string): Node;

    /** This function removes the specified retention rules from the database. **/
  retentionRuleRemove(names: string): void;

    /** This function returns the retention rules that apply to the document at the specified URI. This allows users to determine why a version of a document is being retained. **/
  documentRetentionRules(uri: string): Node;

    /** This function deletes all numbered versions of managed documents and its referenced documents (such as /foo/bar.xml_versions/1-bar.xml), as specified by the rention policy set by one or more dls:retention-rule functions. Documents are deleted if they have no retention rule causing them to be kept and if they are not included by some document that cannot yet be deleted. If $delete is false, the document versions are not actually deleted and instead a list of the documents that would have been deleted is returned. This function returns a list of URIs that it would/did delete. If you set $retain-history to true, you can use xdmp:document-properties to view the deleted document's properties fragment in the database. **/
  purge(delete_: Object, retainHistory: Object): string;

    /** This function deletes all numbered versions of the specified managed document and its referenced documents, as specified by the rention policies set by dls:retention-rule. The document versions are deleted if they have no retention rule causing them to be kept and if they are not included by documents that cannot yet be deleted. If $delete is false, the document's versions are not actually deleted and instead a list of the documents that would have been deleted is returned. If you set $retain-history to true, you can use xdmp:document-properties to view the deleted document's properties fragment in the database. **/
  documentPurge(uri: string, delete_: Object, retainHistory: Object): string;

    /** This function returns a query that matches the most recent numbered version of documents that were created before the specified date and time. **/
  asOfQuery(when: Date): Object;

    /** This function returns a query that matches documents authored by the specified user. **/
  authorQuery(author: string): Object;

    /** This function returns a query that matches the specified version of the managed documents. **/
  documentVersionQuery(version: string): Object;

    /** This function returns a query that matches the latest versions of the managed documents in the database. **/
  documentsQuery(): Object;

    /** This function performs a single level expansion of a single XInclude reference. Any XInclude references in the referenced node are not expanded. **/
  linkExpand(context: Node, ref: Node, restriction: Object): Node;

    /** This function returns a list of all the distinct URIs of documents referenced (either directly or indirectly) in the expansion of the node. The URIs are mapped according to the specified restrictions. **/
  linkReferences(node: Node, restriction: Object): string;

    /** This function recursively examines the node for XInclude references and expands them, following the rules of the XInclude specification. The result is a node in which all the XInclude references have been resolved, or an error if there were unresolvable references with no fallback specifications. The URIs are mapped according to the specified restrictions. **/
  nodeExpand(node: Node, restriction: Object): Node;

    /** This function adds the named document to the specified collections. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentAddCollections(uri: string, collections: string): void;

    /** This function adds the specified permissions for the named document. Any permissions that were previously set for the document are retained. **/
  documentAddPermissions(uri: string, permissions: string): void;

    /** This function gets the permissions for the specified document from the point of view of the Library Services API. **/
  documentGetPermissions(uri: string): Node;

    /** This function adds the specified properties to any existing properties associated with the named document. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentAddProperties(uri: string, properties: Node): void;

    /** This function sets the named document to the specified collections. Any previously set collections for the document that are not specified are removed. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentSetCollections(uri: string, collections: string): void;

    /** This function sets the specified permissions for the named document. Any unspecified permissions that were previously set for the document are removed. **/
  documentSetPermissions(uri: string, permissions: string): void;

    /** This function sets the properties of a document to the given sequence of elements. With the exception of the Library Services properties, any properties that already exist on the document are replaced. To preserve existing document properties, use dls:document-add-properties. Each element QName is the property name and the element value is the property value. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentSetProperties(uri: string, properties: Node): void;

    /** This function sets a property on a document. If any properties with the same property QName exist, they are replaced with the new property. If no properties exist with the same QName, the new property is added. **/
  documentSetProperty(uri: string, property: Node): void;

    /** This function sets the quality of the document with the given URI. If the quality of the document is positive, the relevance score of the document is increased in text search functions. The converse is true for "negative" quality. **/
  documentSetQuality(uri: string, quality: Object): void;

    /** This function removes the named document from the specified collection. Note that collections are not maintained in version history unless changes are also made to the content of the document. **/
  documentRemoveCollections(uri: string, collections: string): void;

    /** This function removes the specified permissions from the named document. **/
  documentRemovePermissions(uri: string, permissions: string): void;

    /** This function removes the specified properties from the named document. Note that properties are not maintained in version history unless changes are also made to the content of the document. **/
  documentRemoveProperties(uri: string, propertyNames: Object): void;

    /** This function updates the managed document at the specified URI with the specified contents. This function does an implicit dls:document-purge and returns the URI of any version of the document purged as the result of the established retention policy. This function must be called in a separate transaction from the dls:document-checkout and dls:document-checkin functions. You must first check out the document with dls:document-checkout before you can update, otherwise an exception is thrown. If the document does not exist, then an exception is thrown. **/
  documentUpdate(uri: string, doc: Node, annotation: string, retainHistory: Object, permissions?: string, collections?: string, quality?: number, forestIds?: string): string;

    /** This function breaks (unlocks) a checked-out document **/
  breakCheckout(uri: string, deep: Object): void;

    /** This function extracts an element from an existing document and creates a new document from the extracted element. The extracted element is removed from the root node document and replaced by an XInclude to the new document. A new version of the root node document is created. You must have already performed a dls:document-checkout of the document that contains the element to be extracted. The $new-uri must be an absolute path and is initially not checked out. This will create a new version of both the original document and the newly included document, with $annotation being used to create a dls:annotation property on each of them. **/
  documentExtractPart(newUri: string, element: Node, annotation: string, retainHistory: Object, permissions?: string, collections?: string, quality?: number, forestIds?: string): string;

    /** This function returns a checkout element containing the checkout status of the specified document. **/
  documentCheckoutStatus(uri: string): Node;

    /** This function returns a query that matches any managed document that has an XInclude link that exactly matches the specified URI. **/
  documentIncludeQuery(uri: string): Object;

    /** This function inserts a document into the database and places the document under management. **/
  documentInsertAndManage(uri: string, deep: Object, doc: Node, annotation?: string, permissions?: string, collections?: string, quality?: number, forestIds?: string): string;

    /** This function allows you to checkout, update, and checkin a managed document in a single transaction. **/
  documentCheckoutUpdateCheckin(uri: string, doc: Node, annotation: string, retainHistory: Object, permissions?: string, collections?: string, quality?: number, forestIds?: string): string;

    /** Upgrades a previous version DLS Database to the current format. After upgrading MarkLogic to a new major version, if the DLS database is incompatible with the current version you need to either enable compatibly mode by calling dls:set-upgrade-status(fn:false()) or by upgrading your database with dls:start-upgrade. **/
  startUpgrade(): void;

    /** Returns a report of the status of the DLS upgrade process. **/
  validateAllDocuments(verbose: Object): Object;

    /** Returns a report describing the status of an upgrade from a pre-MarkLogic 8 DLS repository. **/
  latestValidationResults(): Node;

    /** Sets DLS the upgrade status to current or compatibility-mode. Only use this when upgrading a pre-MarkLogic 8 DLS repository. **/
  setUpgradeStatus(promote: Object): Node;

    /** This function.... **/
  updateValidationResults(results: Node): void;

}
declare var dls:dlsFunctions
