// Type definitions for SearchBuiltins
// Definitions: 

/**
The search built-in functions are XQuery functions used to perform text
searches. The search functions are designed for use with XML structured text.
Searches that use these functions use the indexes and are designed
to return fast.
There are built-in functions to search through documents
(cts:search, cts:contains
 and cts:highlight);
there is a function to tokenize text into different types
(cts:tokenize), and there are functions
to retrieve result characteristics (for example
cts:quality and cts:score).
There are also built-in functions to browse word and value lexicons
(cts:words,
cts:element-values, and so on.) The lexicon
built-in functions require the appropriate lexicons to be enabled in the
Admin interface.
There are also functions to compose a cts:query,
as well as accessor functions to retrieve the parameter values
from a cts:query. These functions are documented in the
cts:query
Constructors section.


 
The cts:query constructor functions allow you to build
arbitrarily complex cts:query specifications. Each
cts:query constructor function has corresponding accessor
functions, which are used to get the values of parameters in a
cts:query.
Included in the cts:query functions is the
cts:registered-query function, which
provides a mechanism to precompute and store in the cache unfiltered
cts:query result primitives.

 
MarkLogic Server allows you to create lexicons, which are lists
of unique words or values, either throughout an entire database (words only)
or within named elements or attributes (words or values). Also, you can
define lexicons that allow quick access to the document and collection
URIs in the database, and you can create word lexicons on named
fields. 
A word lexicon stores all of the unique, case-sensitive,
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
in a database.
This section describes the lexicon APIs.
 
MarkLogic Server allows you to create geospatial lexicons, which
are lists of unique values of geospatial data. 
 A geospatial lexicon returns geospatial values from the geospatial
index. The geospatial index is required for using the geospatial lexicon
functions.
This section describes the geospatial lexicon APIs.
 
MarkLogic Server provides aggregate math functions that make use of value lexicons
to calculate results. The math lexicon functions differ from the math functions in the
math: namespace in that math lexicon functions take frequency into
consideration.
This section describes the math lexicon APIs.
**/

interface ctsFunctions {

    /** Returns a cts:query matching period by name with a period value with an operator. Searches with the cts:period-range-query constructor require a period definition on the period name; if there is no period configured, then an exception is thrown. **/
  periodRangeQuery(axisName: string, operator: string, period?: cts.Period, options?: string): cts.PeriodRangeQuery;

    /** Returns the axis name used to construct the specified query. **/
  periodRangeQueryAxis(query: cts.PeriodRangeQuery): string;

    /** Returns the operator used to construct the specified query. **/
  periodRangeQueryOperator(query: cts.PeriodRangeQuery): string;

    /** Returns the period used to construct the specified query. **/
  periodRangeQueryPeriod(query: cts.PeriodRangeQuery): any;

    /** Returns the options for the specified query. **/
  periodRangeQueryOptions(query: cts.PeriodRangeQuery): string;

    /** Returns only documents before LSQT or a timestamp before LSQT for stable query results. **/
  lsqtQuery(temporalCollection: string, timestamp?: Date, options?: string, weight?: number): cts.LsqtQuery;

    /** Returns the name of the temporal collection used to construct specified query. **/
  lsqtQueryTemporalCollection(query: cts.LsqtQuery): string;

    /** Returns timestamp used to construct the specified query. **/
  lsqtQueryTimestamp(query: cts.LsqtQuery): Date;

    /** Returns the options for the specified query. **/
  lsqtQueryOptions(query: cts.LsqtQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  lsqtQueryWeight(query: cts.LsqtQuery): number;

    /** Returns a cts:query matching documents that have relevant pair of period values. Searches with the cts:period-compare-query constructor require two valid names of period, if the either of the specified period does not exist, then an exception is thrown. **/
  periodCompareQuery(axis1: string, operator: string, axis2: string, options?: string): cts.PeriodCompareQuery;

    /** Returns the name of the first axis used to construct the specified query. **/
  periodCompareQueryAxis1(query: cts.PeriodCompareQuery): string;

    /** Returns the name of the second axis used to construct the specified query. **/
  periodCompareQueryAxis2(query: cts.PeriodCompareQuery): string;

    /** Returns the operator used to construct the specified query. **/
  periodCompareQueryOperator(query: cts.PeriodCompareQuery): string;

    /** Returns the options for the specified query. **/
  periodCompareQueryOptions(query: cts.PeriodCompareQuery): string;

    /** Returns a query specifying the intersection of the matches specified by the sub-queries. **/
  andQuery(queries: cts.Query, options?: string): cts.AndQuery;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
  andQueryQueries(query: cts.AndQuery): cts.Query;

    /** Returns the options for the specified query. **/
  andQueryOptions(query: cts.AndQuery): string;

    /** Returns a query specifying that matches to $matching-query should have their search relevance scores boosted if they also match $boosting-query. **/
  boostQuery(matchingQuery: cts.Query, boostingQuery: cts.Query): cts.BoostQuery;

    /** Returns the matching (first parameter) query used to construct the specified boost query. **/
  boostQueryMatchingQuery(query: cts.BoostQuery): cts.Query;

    /** Returns the boosting (second parameter) query used to construct the specified boost query. **/
  boostQueryBoostingQuery(query: cts.BoostQuery): cts.Query;

    /** Returns a query specifying the union of the matches specified by the sub-queries. **/
  orQuery(queries: cts.Query, options?: string): cts.OrQuery;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
  orQueryQueries(query: cts.OrQuery): cts.Query;

    /** Returns the options for the specified query. **/
  orQueryOptions(query: cts.OrQuery): string;

    /** Returns a query specifying the set difference of the matches specified by two sub-queries. **/
  andNotQuery(positiveQuery: cts.Query, negativeQuery: cts.Query): cts.AndNotQuery;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
  andNotQueryPositiveQuery(query: cts.AndNotQuery): cts.Query;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
  andNotQueryNegativeQuery(query: cts.AndNotQuery): cts.Query;

    /** Returns a query specifying the matches not specified by its sub-query. **/
  notQuery(query: cts.Query): cts.NotQuery;

    /** Returns the query used to construct the specified query. **/
  notQueryQuery(query: cts.NotQuery): cts.Query;

    /** Returns the weight with which the specified query was constructed. **/
  notQueryWeight(query: cts.NotQuery): number;

    /** Returns a query matching text content containing a given phrase. **/
  wordQuery(text: string, options?: string, weight?: number): cts.WordQuery;

    /** Returns the text used to construct the specified query. **/
  wordQueryText(query: cts.WordQuery): string;

    /** Returns the options for the specified query. **/
  wordQueryOptions(query: cts.WordQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  wordQueryWeight(query: cts.WordQuery): number;

    /** Returns a cts:query matching elements by name with a range-index entry equal to a given value. Searches with the cts:element-range-query constructor require an element range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
  elementRangeQuery(elementName: xs.QName, operator: string, value: any, options?: string, weight?: number): cts.ElementRangeQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementRangeQueryElementName(query: cts.ElementRangeQuery): xs.QName;

    /** Returns the operator used to construct the specified query. **/
  elementRangeQueryOperator(query: cts.ElementRangeQuery): string;

    /** Returns the value used to construct the specified query. **/
  elementRangeQueryValue(query: cts.ElementRangeQuery): any;

    /** Returns the options for the specified query. **/
  elementRangeQueryOptions(query: cts.ElementRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementRangeQueryWeight(query: cts.ElementRangeQuery): number;

    /** Returns a cts:query matching JSON properties by name with a range-index entry equal to a given value. Searches with the cts:json-property-range-query constructor require a property range index on the specified names; if there is no range index configured, then an exception is thrown. **/
  jsonPropertyRangeQuery(propertyName: string, operator: string, value: any, options?: string, weight?: number): cts.JsonPropertyRangeQuery;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyRangeQueryPropertyName(query: cts.JsonPropertyRangeQuery): string;

    /** Returns the operator used to construct the specified query. **/
  jsonPropertyRangeQueryOperator(query: cts.JsonPropertyRangeQuery): string;

    /** Returns the value used to construct the specified query. **/
  jsonPropertyRangeQueryValue(query: cts.JsonPropertyRangeQuery): any;

    /** Returns the options for the specified query. **/
  jsonPropertyRangeQueryOptions(query: cts.JsonPropertyRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyRangeQueryWeight(query: cts.JsonPropertyRangeQuery): number;

    /** Returns a cts:query matching triples with a triple index entry equal to the given values. Searches with the cts:triple-range-query constructor require the triple index; if the triple index is not configured, then an exception is thrown. **/
  tripleRangeQuery(subject: any, predicate: any, object: any, operator?: string, options?: string, weight?: number): cts.TripleRangeQuery;

    /** Returns the subject value used to construct the specified query. **/
  tripleRangeQuerySubject(query: cts.TripleRangeQuery): any;

    /** Returns the predicate value used to construct the specified query. **/
  tripleRangeQueryPredicate(query: cts.TripleRangeQuery): any;

    /** Returns the object value used to construct the specified query. **/
  tripleRangeQueryObject(query: cts.TripleRangeQuery): any;

    /** Returns the operators used to construct the specified query. **/
  tripleRangeQueryOperator(query: cts.TripleRangeQuery): string;

    /** Returns the options for the specified query. **/
  tripleRangeQueryOptions(query: cts.TripleRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  tripleRangeQueryWeight(query: cts.TripleRangeQuery): number;

    /** Returns a cts:query matching fields by name with a range-index entry equal to a given value. Searches with the cts:field-range-query constructor require a field range index on the specified field name(s); if there is no range index configured, then an exception is thrown. **/
  fieldRangeQuery(fieldName: string, operator: string, value: any, options?: string, weight?: number): cts.FieldRangeQuery;

    /** Returns the fieldname used to construct the specified query. **/
  fieldRangeQueryFieldName(query: cts.FieldRangeQuery): string;

    /** Returns the operator used to construct the specified query. **/
  fieldRangeQueryOperator(query: cts.FieldRangeQuery): string;

    /** Returns the value used to construct the specified query. **/
  fieldRangeQueryValue(query: cts.FieldRangeQuery): any;

    /** Returns the options for the specified query. **/
  fieldRangeQueryOptions(query: cts.FieldRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  fieldRangeQueryWeight(query: cts.FieldRangeQuery): number;

    /** Parses path expressions and resolves namespaces based on the server run-time environment. Returns true if the argument is permissible as a path for indexing. **/
  validIndexPath(string: string, ignorens: boolean): boolean;

    /** Returns a cts:query matching paths with a range-index entry equal a given value. Searches with the cts:path-range-query constructor require a path range index on the specified path name(s); if there is no range index configured, then an exception is thrown. **/
  pathRangeQuery(pathExpression: string, operator: string, value: any, options?: string, weight?: number): cts.PathRangeQuery;

    /** Returns the path expression used to construct the specified query. **/
  pathRangeQueryPathName(query: cts.PathRangeQuery): string;

    /** Returns the operator used to construct the specified query. **/
  pathRangeQueryOperator(query: cts.PathRangeQuery): string;

    /** Returns the value used to construct the specified query. **/
  pathRangeQueryValue(query: cts.PathRangeQuery): any;

    /** Returns the options for the specified query. **/
  pathRangeQueryOptions(query: cts.PathRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  pathRangeQueryWeight(query: cts.PathRangeQuery): number;

    /** Returns a query matching elements by name with text content equal a given phrase. cts:element-value-query only matches against simple elements (that is, elements that contain only text and have no element children). **/
  elementValueQuery(elementName: xs.QName, text: string, options?: string, weight?: number): cts.ElementValueQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementValueQueryElementName(query: cts.ElementValueQuery): xs.QName;

    /** Returns the text used to construct the specified query. **/
  elementValueQueryText(query: cts.ElementValueQuery): string;

    /** Returns the options for the specified query. **/
  elementValueQueryOptions(query: cts.ElementValueQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementValueQueryWeight(query: cts.ElementValueQuery): number;

    /** Returns a query matching JSON properties by name with value equal the given value. For arrays, the query matches if the value of any elements in the array matches the given value. **/
  jsonPropertyValueQuery(propertyName: string, value: any, options?: string, weight?: number): cts.JsonPropertyValueQuery;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyValueQueryPropertyName(query: cts.JsonPropertyValueQuery): string;

    /** Returns the value used to construct the specified query. **/
  jsonPropertyValueQueryValue(query: cts.JsonPropertyValueQuery): any;

    /** Returns the options for the specified query. **/
  jsonPropertyValueQueryOptions(query: cts.JsonPropertyValueQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyValueQueryWeight(query: cts.JsonPropertyValueQuery): number;

    /** Returns a query matching elements by name with text content containing a given phrase. Searches only through immediate text node children of the specified element as well as any text node children of child elements defined in the Admin Interface as element-word-query-throughs or phrase-throughs; does not search through any other children of the specified element. **/
  elementWordQuery(elementName: xs.QName, text: string, options?: string, weight?: number): cts.ElementWordQuery;

    /** Returns the text used to construct the specified query. **/
  elementWordQueryText(query: cts.ElementWordQuery): string;

    /** Returns the QNames used to construct the specified query. **/
  elementWordQueryElementName(query: cts.ElementWordQuery): xs.QName;

    /** Returns the options for the specified query. **/
  elementWordQueryOptions(query: cts.ElementWordQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementWordQueryWeight(query: cts.ElementWordQuery): number;

    /** Returns a query matching JSON properties by name with text content containing a given phrase. Searches only through immediate text node children of the specified property. **/
  jsonPropertyWordQuery(propertyName: string, text: string, options?: string, weight?: number): cts.JsonPropertyWordQuery;

    /** Returns the text used to construct the specified query. **/
  jsonPropertyWordQueryText(query: cts.JsonPropertyWordQuery): string;

    /** Returns the name used to construct the specified query. **/
  jsonPropertyWordQueryPropertyName(query: cts.JsonPropertyWordQuery): string;

    /** Returns the options for the specified query. **/
  jsonPropertyWordQueryOptions(query: cts.JsonPropertyWordQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyWordQueryWeight(query: cts.JsonPropertyWordQuery): number;

    /** Returns a query matching text content containing a given phrase in the specified field. If the specified field does not exist, cts:field-word-query throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
  fieldWordQuery(fieldName: string, text: string, options?: string, weight?: number): cts.FieldWordQuery;

    /** Returns the text used to construct the specified cts:field-word-query. **/
  fieldWordQueryText(query: cts.FieldWordQuery): string;

    /** Returns the names used to construct the specified cts:field-word-query. **/
  fieldWordQueryFieldName(query: cts.FieldWordQuery): string;

    /** Returns the options for the specified cts:field-word-query. **/
  fieldWordQueryOptions(query: cts.FieldWordQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  fieldWordQueryWeight(query: cts.FieldWordQuery): number;

    /** Returns a query matching text content containing a given value in the specified field. If the specified field does not exist, cts:field-value-query throws an exception. If the specified field does not have the index setting field value searches enabled, either for the database or for the specified field, then a cts:search with a cts:field-value-query throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
  fieldValueQuery(fieldName: string, text: any, options?: string, weight?: number): cts.FieldValueQuery;

    /** Returns the values used to construct the specified cts:field-value-query. **/
  fieldValueQueryText(query: cts.FieldValueQuery): any;

    /** Returns the names used to construct the specified cts:field-value-query. **/
  fieldValueQueryFieldName(query: cts.FieldValueQuery): string;

    /** Returns the options for the specified cts:field-value-query. **/
  fieldValueQueryOptions(query: cts.FieldValueQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  fieldValueQueryWeight(query: cts.FieldValueQuery): number;

    /** Returns a cts:query matching element-attributes by name with a range-index entry equal to a given value. Searches with the cts:element-attribute-range-query constructor require an attribute range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
  elementAttributeRangeQuery(elementName: xs.QName, attributeName: xs.QName, operator: string, value: any, options?: string, weight?: number): cts.ElementAttributeRangeQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributeRangeQueryElementName(query: cts.ElementAttributeRangeQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributeRangeQueryAttributeName(query: cts.ElementAttributeRangeQuery): xs.QName;

    /** Returns the operator used to construct the specified query. **/
  elementAttributeRangeQueryOperator(query: cts.ElementAttributeRangeQuery): string;

    /** Returns the value used to construct the specified query. **/
  elementAttributeRangeQueryValue(query: cts.ElementAttributeRangeQuery): any;

    /** Returns the options for the specified query. **/
  elementAttributeRangeQueryOptions(query: cts.ElementAttributeRangeQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeRangeQueryWeight(query: cts.ElementAttributeRangeQuery): number;

    /** Returns a query matching elements by name with attributes by name with text content equal a given phrase. **/
  elementAttributeValueQuery(elementName: xs.QName, attributeName: xs.QName, text: string, options?: string, weight?: number): cts.ElementAttributeValueQuery;

    /** Returns the text used to construct the specified query. **/
  elementAttributeValueQueryText(query: cts.ElementAttributeValueQuery): string;

    /** Returns the element QNames used to construct the specified query. **/
  elementAttributeValueQueryElementName(query: cts.ElementAttributeValueQuery): xs.QName;

    /** Returns the attribute QNames used to construct the specified query. **/
  elementAttributeValueQueryAttributeName(query: cts.ElementAttributeValueQuery): xs.QName;

    /** Returns the options for the specified query. **/
  elementAttributeValueQueryOptions(query: cts.ElementAttributeValueQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeValueQueryWeight(query: cts.ElementAttributeValueQuery): number;

    /** Returns a query matching elements by name with attributes by name with text content containing a given phrase. **/
  elementAttributeWordQuery(elementName: xs.QName, attributeName: xs.QName, text: string, options?: string, weight?: number): cts.ElementAttributeWordQuery;

    /** Returns the text used to construct the specified query. **/
  elementAttributeWordQueryText(query: cts.ElementAttributeWordQuery): string;

    /** Returns the element QNames used to construct the specified query. **/
  elementAttributeWordQueryElementName(query: cts.ElementAttributeWordQuery): xs.QName;

    /** Returns the attribute QNames used to construct the specified query. **/
  elementAttributeWordQueryAttributeName(query: cts.ElementAttributeWordQuery): xs.QName;

    /** Returns the options for the specified query. **/
  elementAttributeWordQueryOptions(query: cts.ElementAttributeWordQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributeWordQueryWeight(query: cts.ElementAttributeWordQuery): number;

    /** Returns a query matching nodes similar to the model nodes. It uses an algorithm which finds the most "relevant" terms in the model nodes (that is, the terms with the highest scores), and then creates a query equivalent to a cts:or-query of those terms. By default 16 terms are used. **/
  similarQuery(nodes: MLNode<any>, weight?: number, options?: MLNode<any>): cts.SimilarQuery;

    /** Returns the nodes used to construct the specified query. **/
  similarQueryNodes(query: cts.SimilarQuery): MLNode<any>;

    /** Returns the weight with which the specified query was constructed. **/
  similarQueryWeight(query: cts.SimilarQuery): number;

    /** Returns true if any of a sequence of values matches a query. **/
  contains(nodes: string, query: cts.Query): boolean;

    /** Returns a relevance-ordered sequence of nodes specified by a given query. **/
  search(query: cts.Query, options?: cts.Order|string, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns the quality of a node, or of the context node if no node is provided. **/
  quality(node?: MLNode<any>): number;

    /** Returns the score of a node, or of the context node if no node is provided. **/
  score(node?: MLNode<any>): number;

    /** Return the relevance score computation report for a node. **/
  relevanceInfo(node?: MLNode<any>): Object;

    /** Returns the confidence of a node, or of the context node if no node is provided. **/
  confidence(node?: MLNode<any>): number;

    /** Returns the fitness of a node, or of the context node if no node is provided. Fitness is a normalized measure of relevance that is based on how well a node matches the query issued, not taking into account the number of documents in which the query term(s) occur. **/
  fitness(node?: MLNode<any>): number;

    /** Returns an estimated search result size for a node, or of the context node if no node is provided. The search result size for a node is the number of fragments remaining (including the current node) in the result sequence containing the node. This is useful to quickly estimate the size of a search result sequence, without using fn:count() or xdmp:estimate(). **/
  remainder(node?: MLNode<any>): number;

    /** Tokenizes text into words, punctuation, and spaces. Returns output in the type cts:token, which has subtypes cts:word, cts:punctuation, and cts:space, all of which are subtypes of xs:string. **/
  tokenize(text: string, language?: string, field?: string): cts.Token;

    /** Returns the stem(s) for a word. **/
  stem(text: string, language?: string): string;

    /** Returns a query matching all of the specified queries, where the matches occur within the specified distance from each other. **/
  nearQuery(queries: cts.Query, distance?: number, options?: string, distanceWeight?: number): cts.NearQuery;

    /** Returns the query sequence used to construct the near query. **/
  nearQueryQueries(query: cts.NearQuery): cts.Query;

    /** Returns the distance used to construct the near query. **/
  nearQueryDistance(query: cts.NearQuery): number;

    /** Returns the options for the specified query. **/
  nearQueryOptions(query: cts.NearQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  nearQueryWeight(query: cts.NearQuery): number;

    /** Returns a query matching the first subquery, where those matches do not occur within 0 distance of the other query. **/
  notInQuery(positiveQuery: cts.Query, negativeQuery: cts.Query): cts.NotInQuery;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
  notInQueryPositiveQuery(query: cts.NotInQuery): cts.Query;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
  notInQueryNegativeQuery(query: cts.NotInQuery): cts.Query;

    /** Returns a cts:query matching elements by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified element and all of its descendants. If the specified query in the second parameter has any cts:element-attribute-*-query constructors, it will search attributes directly on the specified element and attributes on any descendant elements (see the second example second example below). **/
  elementQuery(elementName: xs.QName, query: cts.Query): cts.ElementQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementQueryElementName(query: cts.ElementQuery): xs.QName;

    /** Returns the query used to construct the element query. **/
  elementQueryQuery(query: cts.ElementQuery): cts.Query;

    /** Returns a cts:query matching JSON properties by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified property and all of its descendants. **/
  jsonPropertyScopeQuery(propertyName: string, query: cts.Query): cts.JsonPropertyScopeQuery;

    /** Returns the JSON property name used to construct the specified query. **/
  jsonPropertyScopeQueryPropertyName(query: cts.JsonPropertyScopeQuery): string;

    /** Returns the query used to construct the property scope query. **/
  jsonPropertyScopeQueryQuery(query: cts.JsonPropertyScopeQuery): cts.Query;

    /** Returns a query matching documents with the given URIs. It will match both documents and properties documents with the given URIs. **/
  documentQuery(uris: string): cts.DocumentQuery;

    /** Returns the URIs used to construct the specified query. **/
  documentQueryUris(query: cts.DocumentQuery): string;

    /** Returns a query matching documents in the collections with the given URIs. It will match both documents and properties documents in the collections with the given URIs. **/
  collectionQuery(uris: string): cts.CollectionQuery;

    /** Returns the URIs used to construct the specified query. **/
  collectionQueryUris(query: cts.CollectionQuery): string;

    /** Returns a query matching documents in the directories with the given URIs. **/
  directoryQuery(uris: string, depth?: string): cts.DirectoryQuery;

    /** Returns the URIs used to construct the specified query. **/
  directoryQueryUris(query: cts.DirectoryQuery): string;

    /** Returns the depth used to construct the specified query. **/
  directoryQueryDepth(query: cts.DirectoryQuery): string;

    /** Register a query for later use. **/
  register(query: cts.Query): string;

    /** Deregister a registered query, explicitly releasing the associated resources. **/
  deregister(id: string): void;

    /** Returns a query matching fragments specified by previously registered queries (see cts:register). If a registered query with the specified ID(s) is not found, then a cts:search operation with an invalid cts:registered-query throws an XDMP-UNREGISTERED exception. **/
  registeredQuery(ids: string, options?: string, weight?: number): cts.RegisteredQuery;

    /** Returns the registered query identifiers used to construct the specified query. **/
  registeredQueryIds(query: cts.RegisteredQuery): string;

    /** Returns the options for the specified query. **/
  registeredQueryOptions(query: cts.RegisteredQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  registeredQueryWeight(query: cts.RegisteredQuery): number;

    /** Returns words from the word lexicon. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. The words are returned in collation order. **/
  words(start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the word lexicon that match the wildcard pattern. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. **/
  wordMatch(pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified element word lexicon. This function requires an element word lexicon for each of the element specified in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. The words are returned in collation order. **/
  elementWords(elementNames: xs.QName, start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified JSON property word lexicon. This function requires a property word lexicon for each of the property specified in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. The words are returned in collation order. **/
  jsonPropertyWords(propertyNames: string, start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified element word lexicon(s) that match a wildcard pattern. This function requires an element word lexicon configured for each of the specified elements in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. **/
  elementWordMatch(elementNames: xs.QName, pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified JSON property word lexicon(s) that match a wildcard pattern. This function requires a property word lexicon configured for each of the specified properties in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. **/
  jsonPropertyWordMatch(propertyNames: string, pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns values from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  elementValues(elementNames: xs.QName, start?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns values from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
  fieldValues(fieldNames: string, start?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns values from the specified value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each of the $range-indexes specified in the function. If there is not a range index configured for each of the specified range indexes, an exception is thrown. **/
  values(rangeIndexes: cts.Reference, start?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns values from the triple index. If subject, predicate, and object are given, then only triples with those given component values are returned. Triples can be returned in any of the sort orders present in the triple index. **/
  triples(subject?: any, predicate?: any, object?: any, operator?: string, options?: string, query?: cts.Query, forestIds?: string): sem.Triple;

    /** Returns values from the specified element value lexicon(s) that match the specified wildcard pattern. Element value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, then an exception is thrown. **/
  elementValueMatch(elementNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified element value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  elementValueCoOccurrences(elementName1: xs.QName, elementName2: xs.QName, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns value co-occurrences from the specified element or element-attribute value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element or element/attribute pairs, then an exception is thrown. **/
  elementAttributeValueCoOccurrences(elementName1: xs.QName, attributeName1: xs.QName, elementName2: xs.QName, attributeName2: xs.QName, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns values from the specified path value lexicon(s) that match the specified wildcard pattern. Path value lexicons are implemented using range indexes; consequently this function requires a path range index for each path specified in the function. If there is not a range index configured for each of the specified paths, then an exception is thrown. **/
  valueMatch(rangeIndexes: cts.Reference, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified path value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an path range index for each path specified in the function. If there is not a range index configured for each of the specified paths, an exception is thrown. **/
  valueCoOccurrences(rangeIndex1: cts.Reference, rangeIndex2: cts.Reference, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns value ranges from the specified path value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a path range index for each element specified in the function. If there is not a range index configured for each of the specified paths, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:value-ranges(cts:path-reference("/name/fname"), ("f", "m")) cts.valueRanges(cts.pathReference("/name/fname"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  valueRanges(rangeIndexes: cts.Reference, bounds?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Accessor for the scalar type of a reference to a value lexicon. **/
  referenceScalarType(index: cts.Reference): string;

    /** Creates a reference to the URI lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  uriReference(): cts.Reference;

    /** Creates a reference to the collection lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  collectionReference(options?: string): cts.Reference;

    /** Creates a reference to an element value lexicon, for use as a parameter to cts:value-tuplescts.valueTuples, temporal:axis-createtemporal.axisCreate, or any other function that takes an index reference. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  elementReference(element: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a JSON property value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  jsonPropertyReference(property: string, options?: string): cts.Reference;

    /** Creates a reference to an element attribute value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  elementAttributeReference(element: xs.QName, attribute: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a field value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  fieldReference(field: string, options?: string): cts.Reference;

    /** Creates a reference to a path value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  pathReference(pathExpression: string, options?: string, map?: {[key:string]:any}): cts.Reference;

    /** Returns value co-occurrence tuples (that is, tuples of values, each of which appear in the same fragment) from the specified value lexicons. The values are returned as json:array values array nodes, where each slot contains one of the co-occurring values. You can use cts:frequency on each item returned to find how many times the tuple occurs. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function, and the range index must have range value positions set to true. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
  valueTuples(rangeIndexes: cts.Reference, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): Array<any>;

    /** Executes a user-defined extension aggregate function against a value lexicon or n-way co-occurence of multiple value lexicons. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function. If a specified range index does not exist an error is raised. If the "ordered" or "proximity=" option is specified, the range index must have range value positions set to true, otherwise an error is raised. **/
  aggregate(nativePlugin: string, aggregateName: string, rangeIndexes: cts.Reference, argument?: string, options?: string, query?: cts.Query, forestIds?: string): string;

    /** Returns the count of a value lexicon. This function works like cts:count except it performs the counting in parallel in all data nodes then aggregates the values. It generally performs better than cts:count, especially on large clusters. **/
  countAggregate(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns the minimal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:min, especially on large clusters. **/
  min(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): any;

    /** Returns the maximal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:max, especially on large clusters. **/
  max(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): any;

    /** Returns the sum of the values given a value lexicon. This function works like cts:sum except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:sum, especially on large clusters. **/
  sumAggregate(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): any;

    /** Returns the average of the values given a value lexicon. This function works like cts:avg except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:avg, especially on large clusters. **/
  avgAggregate(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): any;

    /** Returns a frequency-weighted variance of the population given a value lexicon. This function works like math:variance-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  varianceP(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns a frequency-weighted sample variance given a value lexicon. This function works like math:variance except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  variance(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns a frequency-weighted standard deviation of the population given a value lexicon. This function works like math:stddev-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  stddevP(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns a frequency-weighted sample standard deviation given a value lexicon. This function works like math:stddev except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
  stddev(rangeIndex: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns the frequency-weighted covariance of the population given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:covariance-p math.covarianceP except each pair in the co-occurrence is counted cts:frequency cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  covarianceP(value1: cts.Reference, value2: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns the frequency-weighted sample covariance given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:covariance math.covariance except each pair in the co-occurrence is counted cts:frequency cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  covariance(value1: cts.Reference, value2: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns the frequency-weighted correlation given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:correlation except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  correlation(value1: cts.Reference, value2: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): number;

    /** Returns a linear model that fits the frequency-weighted data set. The input data is a co-occurrence, formed from the specified value lexicons. The length of the input lexicon sequence should be 2, as currently only simple linear regression model is supported. The first lexicon should be the value of the dependent variable while the other lexicon should be the value of the independent variable. This function works like math:linear-model except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
  linearModel(values: cts.Reference, options?: string, query?: cts.Query, forestIds?: string): math.LinearModel;

    /** Returns value ranges from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:element-value-ranges(xs:QName("myElement"), ("f", "m")) cts.elementValueRanges(xs.QName("myElement"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  elementValueRanges(elementNames: xs.QName, bounds?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns values from the specified field value lexicon(s) that match the specified wildcard pattern. Field value lexicons are implemented using range indexes; consequently this function requires a field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, then an exception is thrown. **/
  fieldValueMatch(fieldNames: string, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified field value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
  fieldValueCoOccurrences(fieldName1: string, fieldName2: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns value ranges from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a field range index for each element specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:field-value-ranges("myField", ("f", "m")) cts.fieldValueRanges("myField", ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  fieldValueRanges(fieldNames: string, bounds?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns an integer representing the number of times in which a particular value occurs in a value lexicon lookup (for example, cts:element-values). When using the fragment-frequency lexicon option, cts:frequency returns the number of fragments in which the lexicon value occurs. When using the item-frequency lexicon option, cts:frequency returns the total number of times in which the lexicon value occurs in each item. **/
  frequency(value: string): number;

    /** Returns values from the URI lexicon. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  uris(start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns values from the URI lexicon that match the specified wildcard pattern. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  uriMatch(pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns values from the collection lexicon. This function requires the collection-lexicon database configuration parameter to be enabled. If the collection-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  collections(start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns values from the collection lexicon that match the specified wildcard pattern. This function requires the collection-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
  collectionMatch(pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified element-attribute word lexicon(s). This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element/attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. The words are returned in collation order. **/
  elementAttributeWords(elementNames: xs.QName, attributeNames: xs.QName, start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified element-attribute word lexicon(s) that match a wildcard pattern. This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element-attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeWordMatch(elementNames: xs.QName, attributeNames: xs.QName, pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns values from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeValues(elementNames: xs.QName, attributeNames: xs.QName, start?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns values from the specified element-attribute value lexicon(s) that match the specified pattern. Element-attribute value lexicons are implemented using range indexes; consequently this function requires an attribute range index for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
  elementAttributeValueMatch(elementNames: xs.QName, attributeNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): any;

    /** Returns value ranges from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:element-value-ranges(xs:QName("myElement"), ("f", "m")) cts.elementValueRanges(xs.QName("myElement"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
  elementAttributeValueRanges(elementNames: xs.QName, attributeNames: xs.QName, bounds?: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns words from the specified field word lexicon. This function requires an field lexicon for each of the field specified in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. The words are returned in collation order. **/
  fieldWords(fieldNames: string, start?: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns words from the specified field word lexicon(s) that match a wildcard pattern. This function requires an field word lexicon configured for each of the specified fields in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. **/
  fieldWordMatch(fieldNames: string, pattern: string, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): string;

    /** Returns a query matching the model nodes. Use with a cts:search or a cts:contains over serialized cts:query nodes. The serialized cts:query nodes can be either stored in the database or passed in as XML. **/
  reverseQuery(nodes: MLNode<any>, weight?: number): cts.ReverseQuery;

    /** Returns the nodes used to construct the specified query. **/
  reverseQueryNodes(query: cts.ReverseQuery): MLNode<any>;

    /** Returns the weight with which the specified query was constructed. **/
  reverseQueryWeight(query: cts.ReverseQuery): number;

    /** Returns a query that matches all documents where $query matches any document fragment. When searching documents, document-properties, or document-locks, cts:document-fragment-query provides a convenient way to additionally constrain the search against any document fragment. **/
  documentFragmentQuery(query: cts.Query): cts.DocumentFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  documentFragmentQueryQuery(query: cts.DocumentFragmentQuery): cts.Query;

    /** Returns a query that matches all documents where $query matches document-properties. When searching documents or document-locks, cts:properties-fragment-query provides a convenient way to additionally constrain the search against document-properties fragments. **/
  propertiesFragmentQuery(query: cts.Query): cts.PropertiesFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  propertiesFragmentQueryQuery(query: cts.PropertiesFragmentQuery): cts.Query;

    /** Returns a query that matches all documents where $query matches document-locks. When searching documents or document-properties, cts:locks-fragment-query provides a convenient way to additionally constrain the search against document-locks fragments. **/
  locksFragmentQuery(query: cts.Query): cts.LocksFragmentQuery;

    /** Returns the query used to construct the specified query. **/
  locksFragmentQueryQuery(query: cts.LocksFragmentQuery): cts.Query;

    /** Creates a query. **/
  query(query: MLNode<any>): cts.Query;

    /** Return the most "relevant" terms in the model nodes (that is, the terms with the highest scores). **/
  distinctiveTerms(nodes: MLNode<any>, options?: MLNode<any>): Object;

    /** Creates a period value, for use as a parameter to cts:period-range-query or cts:period-compare-query. **/
  period(start: Date, end: Date): cts.Period;

    /** Creates a reference to a value lexicon by parsing its XML or JSON representation, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
  referenceParse(reference: MLNode<any>): cts.Reference;

}
declare var cts:ctsFunctions
