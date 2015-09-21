// Type definitions for ViewsModule
// Definitions: 

/**
    The views module is used to create and manage SQL schemas and views.

    A schema defines a logical scoping for views.  A schema has a unique id, a 
    name (which must also be unique), and a collection of views.  During SQL execution, the schema
    provides the naming context for its views, which enables you have have multiple views of the same
    name in different schemas. The default schema is called "main". Even though it is 
    a default, you must create the "main" schema before it can be used.
    
    A view is an abstraction of a SQL "table."  However, unlike in a relational database, a view
    in MarkLogic server is implemented on top of element range indexes.  A view consists of a 
    unique id, a name (which must 
    be unique in the context of a particular schema), a view scope, and a sequence of column 
    specifications.  Each column has a name and a range index reference.  The range index for each
    column must be created before creating the view. The view scope is used to constrain the 
    subset of the database to which the
    view applies. The view scope can either limit rows in the view to documents with a specific 
    element (localname + namespace) or to documents in a particular collection. 

    The views function module is installed as the following file:
    install_dir/Modules/MarkLogic/views.xqy
    where install_dir is the directory in which 
    MarkLogic Server is installed.

    To use the views.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

    import module namespace view="http://marklogic.com/xdmp/view" 
		    at "/MarkLogic/views.xqy";
   
    You must have the view-admin role to execute the functions in the View library.
    

  **/

interface viewFunctions {

    /** This function creates a new relational schema in the Schema database. The schema id is returned. Every SQL deployment must include a default schema, called "main," as shown in the example below. **/
  schemaCreate(schemaName: string, permissions: string): string;

    /** This function removes the specified schema. Removing a schema removes all the views that are part of that schema. **/
  schemaRemove(schemaName: string): void;

    /** This function returns the named schema specification document. **/
  schemaGet(schemaName: string): Node;

    /** This function sets permissions on the specified schema specification. Any existing permissions for the schema and removed. **/
  schemaSetPermissions(schemaName: string, permissions: string): void;

    /** This function adds permissions to the specified schema specification. **/
  schemaAddPermissions(schemaName: string, permissions: string): void;

    /** This function removes permissions from the specified schema specification. **/
  schemaRemovePermissions(schemaName: string, permissions: string): void;

    /** This function creates a new view in the specified schema specification. The id of the view is returned. The view is checked for validity. Prior to executing this function, you must create a range index for each column in your view. For details on element range indexes, see Range Indexes and Lexicons in the Administrator's Guide. **/
  create(schemaName: string, name: string, scope: Node, columns: Node, fields: Node, permissions: string): string;

    /** This function returns the named view from the named schema specification. **/
  get(schemaName: string, viewName: string): Node;

    /** This function returns the view with the specified id. **/
  getById(viewId: string): Node;

    /** This function removes the named view from the named schema specification. **/
  remove(schemaName: string, viewName: string): void;

    /** This function renames the named view in the named schema specification. **/
  setName(schemaName: string, viewName: string, newName: string): void;

    /** This function sets the ordered flag on the view. The ordered flag can only be used if all the range indexes referenced as columns have positions. **/
  setOrdered(schemaName: string, viewName: string, ordered: Object): void;

    /** This function returns the ordered flag setting from the named view in the named schema specification. **/
  getOrdered(schemaName: string, viewName: string): Object;

    /** This function sets the scope of the named view in the named schema specification. **/
  setViewScope(schemaName: string, viewName: string, scope: Node): void;

    /** This function sets the permissions for the named view in the named schema specification. Any existing permissions for the view and removed. **/
  setPermissions(schemaName: string, viewName: string, permissions: string): void;

    /** This function adds permissions to those already set for the named view in the named schema specification. **/
  addPermissions(schemaName: string, viewName: string, permissions: string): void;

    /** This function removes permissions from those set for the named view in the named schema specification. **/
  removePermissions(schemaName: string, viewName: string, permissions: string): void;

    /** This function replaces the current set of column specifications on the named view in the named schema with a new set of columns. **/
  setColumns(schemaName: string, viewName: string, columns: Node): void;

    /** This function adds column specifications to the current set of column specifications on the named view in the named schema. **/
  addColumn(schemaName: string, viewName: string, column: Node): void;

    /** This function removes a column specification from the named view in the named schema. **/
  removeColumn(schemaName: string, viewName: string, columnName: string): void;

    /** This function returns the sequence of column specifications set in the named view in the named schema. **/
  columns(schemaName: string, viewName: string): Node;

    /** This function returns the named column specification set in the named view in the named schema. **/
  getColumn(schemaName: string, viewName: string, columnName: string): Node;

    /** This function returns all of the schema specifications. **/
  schemas(): Node;

    /** This function returns all of the view specifications in the named schema. **/
  views(schemaName: string): Node;

    /** This function constructs a new element-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
  elementViewScope(localname: Object): Node;

    /** This function constructs a new collection-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
  collectionViewScope(collection: string): Node;

    /** This function constructs a new column specification. **/
  column(name: string, rangeIndex: Object): Node;

    /** This function return the URI of the protected collection holding all the views. **/
  collection(): string;

    /** This function returns the scope of the named view in the named schema. **/
  getViewScope(schemaName: string, viewName: string): Node;

    /** This function removes the view with the specified id. **/
  removeById(viewId: string): void;

    /** This function returns the permissions set on the specified schema. **/
  schemaGetPermissions(schemaName: string): Node;

    /** This function returns the permissions set on the specified view. **/
  getPermissions(schemaName: string, viewName: string): Node;

    /** This function sets the specified fields on the specified view. Any existing fields are replaced or removed. **/
  setFields(schemaName: string, viewName: string, fields: Node): void;

    /** This function adds a field to the named view. **/
  addField(schemaName: string, viewName: string, field: Node): void;

    /** This function removes a field from the named view. **/
  removeField(schemaName: string, viewName: string, fieldName: string): void;

    /** This function returns the fields set on the named view. **/
  fields(schemaName: string, viewName: string): Node;

    /** This function returns the element specification for the named field. **/
  getField(schemaName: string, viewName: string, fieldName: string): Node;

    /** This function generates a binding map suitable for use with cts:parse from the named view. **/
  getBindings(schemaName: string, viewName: string): Object;

    /** This function constructs a new element-style field specification for the named field. **/
  field(name: string): Node;

}
declare var view:viewFunctions
