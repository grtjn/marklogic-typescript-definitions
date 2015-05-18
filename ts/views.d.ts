// Type definitions for ViewsModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/views.xml

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
    schemaCreate(schemaName: xs:string, permissions: item()): xs:unsignedLong;

    /** This function removes the specified schema. Removing a schema removes all the views that are part of that schema. **/
    schemaRemove(schemaName: xs:string): void;

    /** This function returns the named schema specification document. **/
    schemaGet(schemaName: xs:string): element(view:schema);

    /** This function sets permissions on the specified schema specification. Any existing permissions for the schema and removed. **/
    schemaSetPermissions(schemaName: xs:string, permissions: item()): void;

    /** This function adds permissions to the specified schema specification. **/
    schemaAddPermissions(schemaName: xs:string, permissions: item()): void;

    /** This function removes permissions from the specified schema specification. **/
    schemaRemovePermissions(schemaName: xs:string, permissions: item()): void;

    /** This function creates a new view in the specified schema specification. The id of the view is returned. The view is checked for validity. Prior to executing this function, you must create a range index for each column in your view. For details on element range indexes, see Range Indexes and Lexicons in the Administrator's Guide. **/
    create(schemaName: xs:string, name: xs:string, scope: element(,view:view-scope), columns: element(view:column), fields: element(view:field), permissions: item()): xs:unsignedLong;

    /** This function returns the named view from the named schema specification. **/
    get(schemaName: xs:string, viewName: xs:string): element(view:view);

    /** This function returns the view with the specified id. **/
    getById(viewId: xs:unsignedLong): element(view:view);

    /** This function removes the named view from the named schema specification. **/
    remove(schemaName: xs:string, viewName: xs:string): void;

    /** This function renames the named view in the named schema specification. **/
    setName(schemaName: xs:string, viewName: xs:string, newName: xs:string): void;

    /** This function sets the ordered flag on the view. The ordered flag can only be used if all the range indexes referenced as columns have positions. **/
    setOrdered(schemaName: xs:string, viewName: xs:string, ordered: xs:boolean): void;

    /** This function returns the ordered flag setting from the named view in the named schema specification. **/
    getOrdered(schemaName: xs:string, viewName: xs:string): xs:boolean;

    /** This function sets the scope of the named view in the named schema specification. **/
    setViewScope(schemaName: xs:string, viewName: xs:string, scope: element(,view:view-scope)): void;

    /** This function sets the permissions for the named view in the named schema specification. Any existing permissions for the view and removed. **/
    setPermissions(schemaName: xs:string, viewName: xs:string, permissions: item()): void;

    /** This function adds permissions to those already set for the named view in the named schema specification. **/
    addPermissions(schemaName: xs:string, viewName: xs:string, permissions: item()): void;

    /** This function removes permissions from those set for the named view in the named schema specification. **/
    removePermissions(schemaName: xs:string, viewName: xs:string, permissions: item()): void;

    /** This function replaces the current set of column specifications on the named view in the named schema with a new set of columns. **/
    setColumns(schemaName: xs:string, viewName: xs:string, columns: element(view:column)): void;

    /** This function adds column specifications to the current set of column specifications on the named view in the named schema. **/
    addColumn(schemaName: xs:string, viewName: xs:string, column: element(view:column)): void;

    /** This function removes a column specification from the named view in the named schema. **/
    removeColumn(schemaName: xs:string, viewName: xs:string, columnName: xs:string): void;

    /** This function returns the sequence of column specifications set in the named view in the named schema. **/
    columns(schemaName: xs:string, viewName: xs:string): element(view:column);

    /** This function returns the named column specification set in the named view in the named schema. **/
    getColumn(schemaName: xs:string, viewName: xs:string, columnName: xs:string): element(view:column);

    /** This function returns all of the schema specifications. **/
    schemas(): element(view:schema);

    /** This function returns all of the view specifications in the named schema. **/
    views(schemaName: xs:string): element(view:view);

    /** This function constructs a new element-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
    elementViewScope(localname: xs:QName): element(, view:view-scope);

    /** This function constructs a new collection-style view scope specification. For details on view scoping, see Defining View Scope in the SQL Data Modeling Guide. **/
    collectionViewScope(collection: xs:string): element(, view:view-scope);

    /** This function constructs a new column specification. **/
    column(name: xs:string, rangeIndex: cts:reference): element(view:column);

    /** This function return the URI of the protected collection holding all the views. **/
    collection(): xs:string;

    /** This function returns the scope of the named view in the named schema. **/
    getViewScope(schemaName: xs:string, viewName: xs:string): element(, view:view-scope);

    /** This function removes the view with the specified id. **/
    removeById(viewId: xs:unsignedLong): void;

    /** This function returns the permissions set on the specified schema. **/
    schemaGetPermissions(schemaName: xs:string): element(sec:permission);

    /** This function returns the permissions set on the specified view. **/
    getPermissions(schemaName: xs:string, viewName: xs:string): element(sec:permission);

    /** This function sets the specified fields on the specified view. Any existing fields are replaced or removed. **/
    setFields(schemaName: xs:string, viewName: xs:string, fields: element(view:field)): void;

    /** This function adds a field to the named view. **/
    addField(schemaName: xs:string, viewName: xs:string, field: element(view:field)): void;

    /** This function removes a field from the named view. **/
    removeField(schemaName: xs:string, viewName: xs:string, fieldName: xs:string): void;

    /** This function returns the fields set on the named view. **/
    fields(schemaName: xs:string, viewName: xs:string): element(view:field);

    /** This function returns the element specification for the named field. **/
    getField(schemaName: xs:string, viewName: xs:string, fieldName: xs:string): element(view:field);

    /** This function generates a binding map suitable for use with cts:parse from the named view. **/
    getBindings(schemaName: xs:string, viewName: xs:string): map:map;

    /** This function constructs a new element-style field specification for the named field. **/
    field(name: xs:string): element(view:field);


  }
}
