// Type definitions for Extensions
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SPARQL.xml

/**
  The rdf functions are built-in functions to construct and use
  rdf:langString types. The rdf namespace prefix is built into
  the server.
  **/

declare module Extensions {

  interface rdf {

    /** Returns the name of the simple type of the atomic value argument as a SPARQL style IRI. If the value is derived from sem:unknown or sem:invalid, the datatype IRI part of those values is returned. This XQuery function backs up the SPARQL datatype() function. **/
    datatype(value: anyAtomicType): iri;

    /** This function returns an identifier for a blank node, allowing the construction of a triple that refers to a blank node. This XQuery function backs up the SPARQL BNODE() function. **/
    bnode(value?: anyAtomicType): blank;

    /** Returns the name of the simple type of the atomic value argument as an xs:QName. **/
    type(value: anyAtomicType): QName;

    /** Returns true if the argument is an RDF IRI - that is, derived from type sem:iri, but not derived from type sem:blank. This XQuery function backs up the SPARQL isIRI() and isURI() functions. **/
    isIRI(value: anyAtomicType): boolean;

    /** Returns true if the argument is an RDF blank node - that is, derived from type sem:blank. This XQuery function backs up the SPARQL isBlank() function. **/
    isBlank(value: anyAtomicType): boolean;

    /** Returns true if the argument is an RDF literal - that is, derived from type xs:anyAtomicType, but not derived from type sem:iri. This XQuery function backs up the SPARQL isLiteral() function. **/
    isLiteral(value: anyAtomicType): boolean;

    /** Returns true if the argument is a valid numeric RDF literal. This XQuery function backs up the SPARQL isNumeric() function. **/
    isNumeric(value: anyAtomicType): boolean;

    /** Returns true if the arguments are the same RDF term as defined by the RDF concepts specification. This XQuery function backs up the SPARQL sameTerm() function. **/
    sameTerm(a: anyAtomicType, b: anyAtomicType): boolean;

    /** Returns the language of the value passed in, or the empty string if the value has no language. Only values derived from rdf:langString have a language. This XQuery function backs up the SPARQL lang() function. **/
    lang(value: anyAtomicType): string;

    /** Returns true if $lang-tag matches $lang-range according to the basic filtering scheme defined in RFC4647. This XQuery function backs up the SPARQL langMatches() function. **/
    langMatches(langTag: string, langRange: string): boolean;

    /** Returns a random double between 0 and 1. This XQuery function backs up the SPARQL RAND() function. **/
    random(): double;

    /** Returns the iri of the default graph. **/
    defaultGraphIri(): iri;

    /** Add permissions to the graph specified. The user must have update or insert permissions on the graph. **/
    graphAddPermissions(graph: iri, permissions: permission), permissions: Object[]): void;

    /** Set permissions to the graph specified. The user must have update permissions on the graph. **/
    graphSetPermissions(graph: iri, permissions: permission), permissions: Object[]): void;

    /** Remove permissions from the graph specified. The user must have update permissions on the graph. **/
    graphRemovePermissions(graph: iri, permissions: permission), permissions: Object[]): void;

    /** Get permissions to the graph specified. The user must have read permissions on the graph. **/
    graphGetPermissions(graph: iri, format?: string, format?: string): Object[];

    /** The IF function form evaluates the first argument, interprets it as a effective boolean value, then returns the value of expression2 if the EBV is true, otherwise it returns the value of expression3. Only one of expression2 and expression3 is evaluated. If evaluating the first argument raises an error, then an error is raised for the evaluation of the IF expression. This XQuery function backs up the SPARQL IF() functional form. **/
    if(condition: boolean, then: item(), else: item()): item();

    /** Returns the value of the first argument that evaluates without error. This XQuery function backs up the SPARQL COALESCE() functional form. **/
    coalesce(parameter1: item(), parameterN?: item(),...): item();

    /** Returns the timezone of an xs:dateTime value as a string. This XQuery function backs up the SPARQL TZ() function. **/
    timezoneString(value: dateTime): string;

    /** Return a string that is the scheme specific part of random UUID URN (RFC4122). This XQuery function backs up the SPARQL STRUUID() function. **/
    uuidString(): string;

    /** Return a UUID URN (RFC4122) as a sem:iri value. This XQuery function backs up the SPARQL UUID() function. **/
    uuid(): iri;

    /** Creates a triple object, which represents an RDF triple containing atomic values representing the subject, predicate, object, and optionally graph identifier (graph IRI). **/
    triple(subject_or_node: any, predicate?: anyAtomicType, object?: anyAtomicType, graph?: iri): triple;

    /** Returns the subject from a sem:triple value. **/
    tripleSubject(triple: triple): anyAtomicType;

    /** Returns the predicate from a sem:triple value. **/
    triplePredicate(triple: triple): anyAtomicType;

    /** Returns the object from a sem:triple value. **/
    tripleObject(triple: triple): anyAtomicType;

    /** Returns the graph identifier (graph IRI) from a sem:triple value. **/
    tripleGraph(triple: triple): iri;

    /** Returns a sem:unknown value with the given literal value and datatype IRI. The sem:unknown type extends xs:untypedAtomic, and represents an RDF value with a datatype IRI for which no schema is available. **/
    unknown(string: string, datatype: iri): unknown;

    /** Returns the datatype IRI of a sem:unknown value. **/
    unknownDatatype(val: unknown): iri;

    /** Returns a sem:invalid value with the given literal value and datatype IRI. The sem:invalid type extends xs:untypedAtomic, and represents an RDF value whose literal string is invalid according to the schema for it's datatype. **/
    invalid(string: string, datatype: iri): invalid;

    /** Returns the datatype IRI of a sem:invalid value. **/
    invalidDatatype(val: invalid): iri;

    /** Returns an rdf:langString value with the given value and language tag. The rdf:langString type extends xs:string, and represents a language tagged string in RDF. **/
    langString(string: string, lang: string): langString;

    /** Returns the language of an rdf:langString value. **/
    langStringLanguage(val: langString): string;

    /** Returns a value to represent the RDF typed literal with lexical value $value and datatype IRI $datatype. Returns a value of type sem:unknown for datatype IRIs for which there is no schema, and a value of type sem:invalid for lexical values which are invalid according to the schema for the given datatype. This XQuery function backs up the SPARQL STRDT() function. **/
    typedLiteral(value: string, datatype: iri): anyAtomicType;


  }
}
