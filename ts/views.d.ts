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

declare module ViewsModule {

  interface view {

    /** This function creates a new relational schema in the Schema database. The schema id is returned. Every SQL deployment must include a default schema, called "main," as shown in the example below. **/
    schemaCreate(schemaName: String, permissions: String): String;

    /** This function removes the specified schema. Removing a schema removes all the views that are part of that schema. **/
    schemaRemove(schemaName: String): void;

    /** This function returns the named schema specification document. **/
    schemaGet(schemaName: String): Schema);

    /** This function sets permissions on the specified schema specification. Any existing permissions for the schema and removed. **/
    schemaSetPermissions(schemaName: String, permissions: String): void;

    /** This function adds permissions to the specified schema specification. **/
    schemaAddPermissions(schemaName: String, permissions: String): void;

    /** This function removes permissions from the specified schema specification. **/
    schemaRemovePermissions(schemaName: String, permissions: String): void;

    /** This function creates a new view in the specified schema specification. The id of the view is returned. The view is checked for validity. Prior to executing this function, you must create a range index for each column in your view. For details on element range indexes, see Range Indexes and Lexicons in the Administrator's Guide. **/
    create(schemaName: String, name: String, scope: View-scope), columns: Column), fields: Field), permissions: String): String;

    /** This function returns the named view from the named schema specification. **/
    get(schemaName: String, viewName: String): View);

    /** This function returns the view with the specified id. **/
    getById(viewId: String): View);

    /** This function removes the named view from the named schema specification. **/
    remove(schemaName: String, viewName: String): void;

    /** This function renames the named view in the named schema specification. **/
    setName(schemaName: String, viewName: String, newName: String): void;

    /** This function sets the ordered flag on the view. The ordered flag can only be used if all the range indexes referenced as columns have positions. **/
    setOrdered(schemaName: String, viewName: String, ordered: Boolean): void;

    /** This function returns the ordered flag setting from the named view in the named schema specification. **/
    getOrdered(schemaName: String, viewName: String): Boolean;

    /** This function sets the scope of the named view in the named schema specification. **/
    setViewScope(schemaName: String, viewName: String, scope: View-scope)): void;

    /** This function sets the permissions for the named view in the named schema specification. Any existing permissions for the view and removed. **/
    setPermissions(schemaName: String, viewName: String, permissions: String): void;

    /** This function adds permissions to those already set for the named view in the named schema specification. **/
    addPermissions(schemaName: String, viewName: String, permissions: String): void;

    /** This function removes permissions from those set for the named view in the named schema specification. **/
    removePermissions(schemaName: String, viewName: String, permissions: String): void;

    /** This function replaces the current set of column specifications on the named view in the named schema with a new set of columns. **/
    setColumns(schemaName: String, viewName: String, columns: Column)): void;

    /** This function adds column specifications to the current set of column specifications on the named view in the named schema. **/
    addColumn(schemaName: String, viewName: String, column: Column)): void;

    /** This function removes a column specification from the named view in the named schema. **/
    removeColumn(schemaName: String, viewName: String, columnName: String): void;

    /** This function returns the sequence of column specifications set in the named view in the named schema. **/
    columns(schemaName: String, viewName: String): Column);

    /** This function returns the named column specification set in the named view in the named schema. **/
    getColumn(schemaName: String, viewName: String, columnName: String): Column);

    /** This function returns all of the schema specifications. **/
    schemas(): Schema);

    /** This function returns all of the view specifications in the named schema. **/
    views(schemaName: String): View);

    /** This function constructs a new element-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
    elementViewScope(localname: QName): View-scope);

    /** This function constructs a new collection-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
    collectionViewScope(collection: String): View-scope);

    /** This function constructs a new column specification. **/
    column(name: String, rangeIndex: Reference): Column);

    /** This function return the URI of the protected collection holding all the views. **/
    collection(): String;

    /** This function returns the scope of the named view in the named schema. **/
    getViewScope(schemaName: String, viewName: String): View-scope);

    /** This function removes the view with the specified id. **/
    removeById(viewId: String): void;

    /** This function returns the permissions set on the specified schema. **/
    schemaGetPermissions(schemaName: String): Permission);

    /** This function returns the permissions set on the specified view. **/
    getPermissions(schemaName: String, viewName: String): Permission);

    /** This function sets the specified fields on the specified view. Any existing fields are replaced or removed. **/
    setFields(schemaName: String, viewName: String, fields: Field)): void;

    /** This function adds a field to the named view. **/
    addField(schemaName: String, viewName: String, field: Field)): void;

    /** This function removes a field from the named view. **/
    removeField(schemaName: String, viewName: String, fieldName: String): void;

    /** This function returns the fields set on the named view. **/
    fields(schemaName: String, viewName: String): Field);

    /** This function returns the element specification for the named field. **/
    getField(schemaName: String, viewName: String, fieldName: String): Field);

    /** This function generates a binding map suitable for use with cts:parse from the named view. **/
    getBindings(schemaName: String, viewName: String): Object;

    /** This function constructs a new element-style field specification for the named field. **/
    field(name: String): Field);


  }
}
