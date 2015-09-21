// Type definitions for UpdateBuiltins
// Definitions: 

/**
The update built-in functions are XQuery functions to perform update-related
tasks such as loading documents, inserting nodes into documents, and so on.
**/

interface xdmpFunctions {

    /** Acquires an intent exclusive transaction lock on a URI. If a shared transaction lock on the URI is already held by the current transaction it is promoted to an exclusive lock. If a shared or exclusive transaction lock on the URI is already held by some other transaction, this function blocks until that lock is released. **/
  lockForUpdate(uri: string): void;

    /** Serializes a node as text and saves it to a file. The node can be any node, including a document node, an element node, a text node, or a binary node. **/
  save(path: string, node: Node, options?: Object): void;

    /** Inserts a new document with the specified URI. If a document already exists at the URI, the function replaces the content in the existing document as an update operation. **/
  documentLoad(location: string, options?: Object): void;

    /** [DEPRECATED: use xdmp:document-load instead] Inserts a new document from the XML file at $path if a document with the specified URI does not already exist. Otherwise, the function replaces the content in the existing document as an update operation. **/
  load(path: string, uri?: string, permissions?: Object, collections?: string, quality?: Object, defaultNamespace?: string, options?: string, forestIds?: string): void;

    /** Inserts a new document into the database if a document with the specified URI does not already exist. If a document already exists at the specified URI, the function replaces the content of the existing document with the specified content (the $root parameter) as an update operation. In addition to replacing the content, xdmp:document-insert replaces any permissions, collections, and quality with the ones specified (or with the default values for these parameters, if not explicitly specified). Also, if a properties document exists at the same URI, that properties document (including any content it contains) is preserved. **/
  documentInsert(uri: string, root: Node, permissions?: Object, collections?: string, quality?: Object, forestIds?: string): void;

    /** Creates a directory. If security is enabled, the document permissions and collections are set to the given parameters, if supplied. Otherwise, the current user's default permissions and/or collections are applied. If the beginning of the document URI is protected, the user must have access to that URI privilege. If the directory URI does not end with a '/' one is added. If the directory already exists, then an XDMP-DIREXISTS exception is thrown. **/
  directoryCreate(uri: string, permissions?: Object, collections?: string, quality?: Object, forestIds?: string): void;

    /** Deletes a document from the database. **/
  documentDelete(uri: string): void;

    /** Deletes a directory and all of its child and descendant documents and directories from the database. **/
  directoryDelete(uri: string): void;

    /** Deletes from the database every document in a collection. If there are no documents in the specified collection, then nothing is deleted, and xdmp:collection-delete still returns the empty sequence. **/
  collectionDelete(uri: string): void;

    /** Replaces a node. **/
  nodeReplace(old: Node, new_: Node): void;

    /** Deletes a node from the database. On-the-fly constructed nodes cannot be deleted. **/
  nodeDelete(old: Node): void;

    /** Adds an immediately preceding sibling to a node. **/
  nodeInsertBefore(sibling: Node, new_: Node): void;

    /** Adds an immediately following sibling to a node. **/
  nodeInsertAfter(sibling: Node, new_: Node): void;

    /** Adds a new last child to a node. Only element nodes and document nodes can have children. Element nodes cannot have document node children. Document nodes cannot have multiple roots. On-the-fly constructed nodes cannot be updated. The parameters must specify individual nodes and not node sets. **/
  nodeInsertChild(parent: Node, new_: Node): void;

    /** Adds the named document to the given collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentAddCollections(uri: string, collections: string): void;

    /** Removes the named document from the given collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentRemoveCollections(uri: string, collections: string): void;

    /** Sets the named document to belong to the given collections, replacing any previously set collections on the named document. To preserve existing collections, use xdmp:document-add-collections. For each collection that is protected, the user must have permissions to update that collection or have the any-collection privilege. For each unprotected collection, the user must have the unprotected-collections privilege. **/
  documentSetCollections(uri: string, collections: string): void;

    /** Adds the given permissions to the given document or directory. The user must have update or insert permissions on the document. **/
  documentAddPermissions(uri: string, permissions: Object): void;

    /** Removes the given permissions from the named document or directory. The user must have update permissions on the document or directory. **/
  documentRemovePermissions(uri: string, permissions: Object): void;

    /** Sets the permissions on the named document (or directory) to the given permissions, replacing any permissions previously set on the document (or directory). To preserve any existing permissions, use xdmp:document-add-permissions. xdmp.documentAddPermissions. The user must have update permissions on the document or directory. **/
  documentSetPermissions(uri: string, permissions: Object): void;

    /** Sets the quality of the document with the given URI. If the quality of the document is positive, the relevance score of the document is increased in text search functions. The converse is true for "negative" quality. **/
  documentSetQuality(uri: string, quality: number): void;

    /** Starts merging the forests of the database, subject to specified options. For any options that are not specified, their default values are used, not the values that are in the configuration files. **/
  merge(options?: Object): void;

    /** Returns the forest IDs of any currently merging database forests. **/
  merging(): string;

    /** Acquire a lock on a document or directory for an extended amount of time. Locks restrict updates to a document or directory to the user who acquires the lock. **/
  lockAcquire(uri: string, scope?: string, depth?: string, owner?: string, timeout?: string): void;

    /** Unlock a document or directory. Releases the lock created with xdmp:lock-acquire. **/
  lockRelease(uri: string): void;

    /** Sets the properties of a document to the given sequence of elements, replacing any properties that already exist on the document. To preserve existing document properties, use xdmp:document-add-properties. Each element QName is the property name and the element value is the property value. Modifying properties requires update permissions on a document. **/
  documentSetProperties(uri: string, props: Node): void;

    /** Adds a sequence of properties to the properties of a document. **/
  documentAddProperties(uri: string, props: Node): void;

    /** Removes a sequence of properties from the properties of a document. If properties with the QNames given do not exist, nothing is done. **/
  documentRemoveProperties(uri: string, propertyNames: Object): void;

    /** Sets a property on a document. If any properties with the same property QName exist, they are replaced with the new property. If no properties exist with the same QName, the new property is added. **/
  documentSetProperty(uri: string, prop: Node): void;

    /** Assign a document URI to a forest index, using the same algorithm as xdmp:document-insert. The return value will be a positive integer from 1 to $forest-count. This function does not insert or update the document; instead, it returns the index of the forest to which the document URI would be assigned if it were inserted as a new document. In order to match the document to the correct forest, use the list of forest-IDs as returned by xdmp:database-forests. If the document already exists, this function may not return the correct forest for the document. In this case, xdmp:document-forest will return the correct forest. If "assignment-policy" is specified, this function uses the specified policy to calculate the assignment. Otherwise, it uses the assignment policy of the context database to calculate the assignment. This function works only with the bucket assignment policy and the legacy assignment policy. It reports an error if the statistical policy or the range policy is set. Note that, if there are read-only or delete-only forests in a database that uses the bucket policy, the application may need to call this function twice to get the right assignment. The first call should pass in the total number of forests, including the read-only or delete-only ones. If the returned value happens to be a read-only or delete-only forest, the second call should pass in the number of forests that excludes the read-only or delete-only ones and pass in "legacy" as the third parameter. **/
  documentAssign(uri: string, forestCount: number, assignmentPolicy?: string): number;

    /** Given a value, the function returns a list of forests that have ranges the value falls into. This function reports an error if the context database doesn't have the range assignment policy configured. **/
  databasePartitionForests(value: Object): string;

}
declare var xdmp:xdmpFunctions
interface temporalFunctions {

    /** This function inserts a document into the database and stores it as a temporal document. The document will belong to the specified temporal collection to ensure that it can only be updated or deleted using the temporal functions. If a temporal document already exists at the specified URI, this function performs an update instead of an insert. (Note that updates on temporal documents mean that a new document is created in the temporal collection with a different time period.) An exception is thrown if $temporal-collection is not temporal or $collection includes temporal collection(s). **/
  documentLoad(temporalCollection: string, location: string, options?: Object): void;

    /** This function sets the system start time on temporal documents that are inserted or deleted in the same statement as this function. If this function is not called along with a temporal document insert or delete, nothing will be affected. **/
  statementSetSystemTime(systemTime: Date): void;

    /** This function gets the system start time on temporal documents that are inserted or deleted in the same statement as this function. If this function is not called along with a temporal document insert or delete, nothing will be affected. **/
  statementGetSystemTime(): void;

    /** This function inserts a document into the database and stores it as a temporal document. The document will belong to the specified temporal collection to ensure that it can only be updated or deleted using the temporal functions. If a temporal document already exists at the specified URI, this function performs an update instead of an insert. (Note that updates on temporal documents mean that a new document is created in the temporal collection with a different time period.) An exception is thrown if $temporal-collection is not temporal or $collection includes temporal collection(s). **/
  documentInsert(temporalCollection: string, uri: string, root: Node, permissions?: Object, collections?: string, quality?: Object, forestIds?: string): void;

    /** This function deletes the temporal document identified by the given URI. Note that temporal documents are not actually deleted, but are rather "logically deleted" and remain in the database with system end times set to the time of the deletion. A TEMPORAL-DOCNOTFOUND exception is thrown if the document does not exist in the named collection. **/
  documentDelete(temporalCollection: string, uri: string): void;

}
declare var temporal:temporalFunctions
