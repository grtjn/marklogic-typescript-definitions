// Type definitions for SchemaBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SchemaValue.xml

/**
The schema component built-in functions.
**/

declare module SchemaBuiltins {

  interface sc {

    /** Returns the type of item, as a schema component, if any. If the item has no type, the empty sequence is returned. The context item is used if no argument is given. If the item is a document node, the result is the type of its root element.If the item is an element node, the result is the type of its element declaration.If the item is an attribute node, the result is the type of its attribute declaration.If the item is a schema component, the result is the associated type schema component.If the item is an atomic value, the result is the type of that atomic value.In other cases, the result is the empty sequence. **/
    type(arg?: any): schema-type();

    /** Returns the simple type of item, as a schema component, if any. If the item has a complex type rather than a simple type, the empty sequence is returned. The context item is used if no argument is given. If the item is a document node, the result is the simple type of its root element.If the item is an element node, the result is the simple type of its element declaration.If the item is an attribute node, the result is the simple type of its attribute declaration.If the item is a schema component, the result is the associated simple type schema component.If the item is an atomic value, the result is the simple type of that atomic value.In other cases, the result is the empty sequence. **/
    simpleType(arg?: any): simple-type();

    /** Returns the complex type of item, as a schema component, if any. If the item has a simple type rather than a complex type, the empty sequence is returned. The context item is used if no argument is given. If the item is a document node, the result is the complex type of its root element.If the item is an element node, the result is the complex type of its element declaration.If the item is a schema component, the result is the associated complex type schema component.In other cases, the result is the empty sequence. **/
    complexType(arg?: any): complex-type();

    /** Apply a type to an item to construct a typed instance of that type. If the type is a simple type this amounts to casting. If the type is a complex type this amounts to validating as that type. **/
    typeApply(type: schema-type(), arg: any): item();

    /** Returns the element declaration of item, as a schema component, if any. If the item has no element declaration, the empty sequence is returned. The context item is used if no argument is given. If the item is a document node, the result is the element declaration of its root element.If the item is an element node, the result is of its element declaration.In other cases, the result is the empty sequence. **/
    elementDecl(arg?: any): element-decl();

    /** Returns the attribute declaration of item, as a schema component, if any. If the item has no attribute declaration, the empty sequence is returned. The context item is used if no argument is given. If the item is an attribute node, the result is of its attribute declaration.In other cases, the result is the empty sequence. **/
    attributeDecl(arg?: any): attribute-decl();

    /** Returns the schema annotations of the component, if any. The context item is used if no argument is given. Annotations will only be returned for schemas that have preservation of them enabled with the "xdmp-annotations" processing instruction. The annotations returned will only include the appinfo children of the annotations unless the schema has the "all" parameter set in the "xdmp-annotations" processing instruction. **/
    annotations(arg?: schema-component()): element();

    /** Returns the name of the schema component, if any. The context item is used if no argument is given. **/
    name(arg?: schema-component()): QName;

    /** Returns the particles of the schema component, if any. The context item is used if no argument is given. **/
    particles(arg?: schema-component()): schema-particle();

    /** Returns the attribute declarations of the schema component, if any. The context item is used if no argument is given. **/
    attributes(arg?: schema-component()): attribute-decl();

    /** Returns the return type of a function item as a schema component. The context item is used if no argument is given. **/
    functionReturnType(arg?: function()): schema-type();

    /** Returns the declared parameter type of a specific parameter of the function item as a schema component. **/
    functionParameterType(arg?: function(), param?: number): schema-type();

    /** Returns the type with the given name, if any, as a schema component. If there is no such type, an undefined type error is raised. **/
    typeNamed(arg: QName): schema-type();

    /** Returns the facets of the component, if any. Only simple types have facets. The context item is used if no argument is given. **/
    facets(arg?: schema-component()): schema-facet();

    /** Returns the root schema of the item. The context item is used if no argument is given. If the item is a document node, the result is the schema of its root element.If the item is an element node, the result is the schema of its element declaration.If the item is an attribute node, the result is the schema of its attribute declaration.If the item is a schema component, the result is the containing schema.If the item is an atomic value, the result is the schema containing the type of that atomic value.In other cases, the result is the empty sequence. **/
    schema(arg?: any): schema-root();

    /** Returns the named property of the schema component. The context item is used for the second argument if it is not given. Properties include: nameSame as sc:name typeSame as sc:type complex-typeSame as sc:complex-type simple-typeSame as sc:simple-type element-declSame as sc:element-decl attribute-declSame as sc:attribute-decl schemaSame as sc:schema annotationsSame as sc:annotations facetsSame as sc:facets attributesSame as sc:attributes particlesSame as sc:particles attribute-groupsThe attribute groups of the schema model-groupsThe model groups of the schema notationsThe notations of the schema typesThe types of the schema elementsThe element declarations of the schema attribute-wildcardThe attribute wildcard on the type or in the attribute group identity-constraintsThe identity constraints on the element declaration or schema scopeThe scope of the element or attribute declaration fixedThe fixed value of the element or attribute declaration or whether a facet is fixed defaultThe default value of the element or attribute declaration substitution-groupThe element declaration serving as the substitution group head of the element declaration nillableWhether the element declaration is declared as nillable abstractWhether the element declaration or type is declared as abstract block-extensionWhether the element declaration or complex type is declared as blocking extensions block-restrictionWhether the element declaration or complex type is declared as blocking restrictions block-substitutionWhether the element declaration is declared as blocking substitutions final-extensionWhether the element declaration or complex type is declared as final for extensions final-restrictionWhether the element declaration or complex type is declared as final for restrictions varietyThe variety of the simple type (atomic, list, or union) baseThe base type of the type primitiveThe primitive type of the simple type item-typeThe item type of the list simple type member-typesThe member types of the union simple type orderedThe ordering of the simple type numericWhether the simple type is numeric finiteWhether the simple type is finite boundedWhether the simple type is bounded final-listWhether the simple type is declared as final for lists final-unionWhether the simple type is declared as final for unions final-restrictionWhether the simple type is declared as final for restrictions derivation-methodThe derivation method of the complex type (extension, restriction) content-typeThe kind of content type of the complex type (empty, simple, element-only, mixed) min-occursThe declared minimum occurrences of the particle max-occursThe declared maximum occurrences of the particle process-contentsWhat processing is declared for the wildcard (strict, lax, skip) namespacesWhat namespaces the wildcard references valueThe value of the facet categoryThe kind of identity constraint (key, unique, keyref) referenced-keyThe key referenced by the keyref selectorThe selector path in the identity constraint fieldsThe field paths in the identity constraint systemThe notation's system identifier publicThe notation's public identifier versionThe schema's version schema-locationThe schema's location **/
    componentProperty(propname: string, arg?: schema-component()): item();

    /** Get a schema object as a value based on its namespace and schema location hint. **/
    schemaFromPath(namespace: string, location?: string): schema-root();

    /** Returns the canonical schema component path of the component. See http://www.w3.org/TR/xmlschema-ref/ for the definition of this path. The context item is used if no argument is given. **/
    canonicalPath(arg?: schema-component()): string;


  }
}
