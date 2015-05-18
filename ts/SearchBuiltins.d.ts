// Type definitions for SearchBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SearchBuiltins.xml

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

declare module SearchBuiltins {

  interface cts {

    /** Returns a cts:query matching period by name with a period value with an operator. Searches with the cts:period-range-query constructor require a period definition on the period name; if there is no period configured, then an exception is thrown. **/
    periodRangeQuery(axisName: string, operator: string, period?: period, options?: string): period-range-query;

    /** Returns the axis name used to construct the specified query. **/
    periodRangeQueryAxis(query: period-range-query): string;

    /** Returns the operator used to construct the specified query. **/
    periodRangeQueryOperator(query: period-range-query): string;

    /** Returns the period used to construct the specified query. **/
    periodRangeQueryPeriod(query: period-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    periodRangeQueryOptions(query: period-range-query): string;

    /** Returns only documents before LSQT or a timestamp before LSQT for stable query results. **/
    lsqtQuery(temporalCollection: string, timestamp?: dateTime, options?: string, weight?: double): lsqt-query;

    /** Returns the name of the temporal collection used to construct specified query. **/
    lsqtQueryTemporalCollection(query: lsqt-query): string;

    /** Returns timestamp used to construct the specified query. **/
    lsqtQueryTimestamp(query: lsqt-query): dateTime;

    /** Returns the options for the specified query. **/
    lsqtQueryOptions(query: lsqt-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    lsqtQueryWeight(query: lsqt-query): double;

    /** Returns a cts:query matching documents that have relevant pair of period values. Searches with the cts:period-compare-query constructor require two valid names of period, if the either of the specified period does not exist, then an exception is thrown. **/
    periodCompareQuery(axis-1: string, operator: string, axis-2: string, options?: string): period-compare-query;

    /** Returns the name of the first axis used to construct the specified query. **/
    periodCompareQueryAxis-1(query: period-compare-query): string;

    /** Returns the name of the second axis used to construct the specified query. **/
    periodCompareQueryAxis-2(query: period-compare-query): string;

    /** Returns the operator used to construct the specified query. **/
    periodCompareQueryOperator(query: period-compare-query): string;

    /** Returns the options for the specified query. **/
    periodCompareQueryOptions(query: period-compare-query): string;

    /** Returns a query specifying the intersection of the matches specified by the sub-queries. **/
    andQuery(queries: query, options?: string): and-query;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
    andQueryQueries(query: and-query): query;

    /** Returns the options for the specified query. **/
    andQueryOptions(query: and-query): string;

    /** Returns a query specifying that matches to $matching-query should have their search relevance scores boosted if they also match $boosting-query. **/
    boostQuery(matchingQuery: query, boostingQuery: query): boost-query;

    /** Returns the matching (first parameter) query used to construct the specified boost query. **/
    boostQueryMatchingQuery(query: boost-query): query;

    /** Returns the boosting (second parameter) query used to construct the specified boost query. **/
    boostQueryBoostingQuery(query: boost-query): query;

    /** Returns a query specifying the union of the matches specified by the sub-queries. **/
    orQuery(queries: query, options?: string): or-query;

    /** Returns a sequence of the queries that were used to construct the specified query. **/
    orQueryQueries(query: or-query): query;

    /** Returns the options for the specified query. **/
    orQueryOptions(query: or-query): string;

    /** Returns a query specifying the set difference of the matches specified by two sub-queries. **/
    andNotQuery(positiveQuery: query, negativeQuery: query): and-not-query;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
    andNotQueryPositiveQuery(query: and-not-query): query;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
    andNotQueryNegativeQuery(query: and-not-query): query;

    /** Returns a query specifying the matches not specified by its sub-query. **/
    notQuery(query: query): not-query;

    /** Returns the query used to construct the specified query. **/
    notQueryQuery(query: not-query): query;

    /** Returns the weight with which the specified query was constructed. **/
    notQueryWeight(query: not-query): double;

    /** Returns a query matching text content containing a given phrase. **/
    wordQuery(text: string, options?: string, weight?: double): word-query;

    /** Returns the text used to construct the specified query. **/
    wordQueryText(query: word-query): string;

    /** Returns the options for the specified query. **/
    wordQueryOptions(query: word-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    wordQueryWeight(query: word-query): double;

    /** Returns a cts:query matching elements by name with a range-index entry equal to a given value. Searches with the cts:element-range-query constructor require an element range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
    elementRangeQuery(elementName: QName, operator: string, value: anyAtomicType, options?: string, weight?: double): element-range-query;

    /** Returns the QNames used to construct the specified query. **/
    elementRangeQueryElementName(query: element-range-query): QName;

    /** Returns the operator used to construct the specified query. **/
    elementRangeQueryOperator(query: element-range-query): string;

    /** Returns the value used to construct the specified query. **/
    elementRangeQueryValue(query: element-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    elementRangeQueryOptions(query: element-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementRangeQueryWeight(query: element-range-query): double;

    /** Returns a cts:query matching JSON properties by name with a range-index entry equal to a given value. Searches with the cts:json-property-range-query constructor require a property range index on the specified names; if there is no range index configured, then an exception is thrown. **/
    jsonPropertyRangeQuery(propertyName: string, operator: string, value: anyAtomicType, options?: string, weight?: double): json-property-range-query;

    /** Returns the JSON property name used to construct the specified query. **/
    jsonPropertyRangeQueryPropertyName(query: json-property-range-query): string;

    /** Returns the operator used to construct the specified query. **/
    jsonPropertyRangeQueryOperator(query: json-property-range-query): string;

    /** Returns the value used to construct the specified query. **/
    jsonPropertyRangeQueryValue(query: json-property-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    jsonPropertyRangeQueryOptions(query: json-property-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyRangeQueryWeight(query: json-property-range-query): double;

    /** Returns a cts:query matching triples with a triple index entry equal to the given values. Searches with the cts:triple-range-query constructor require the triple index; if the triple index is not configured, then an exception is thrown. **/
    tripleRangeQuery(subject: anyAtomicType, predicate: anyAtomicType, object: anyAtomicType, operator?: string, options?: string, weight?: double): triple-range-query;

    /** Returns the subject value used to construct the specified query. **/
    tripleRangeQuerySubject(query: triple-range-query): anyAtomicType;

    /** Returns the predicate value used to construct the specified query. **/
    tripleRangeQueryPredicate(query: triple-range-query): anyAtomicType;

    /** Returns the object value used to construct the specified query. **/
    tripleRangeQueryObject(query: triple-range-query): anyAtomicType;

    /** Returns the operators used to construct the specified query. **/
    tripleRangeQueryOperator(query: triple-range-query): string;

    /** Returns the options for the specified query. **/
    tripleRangeQueryOptions(query: triple-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    tripleRangeQueryWeight(query: triple-range-query): double;

    /** Returns a cts:query matching fields by name with a range-index entry equal to a given value. Searches with the cts:field-range-query constructor require a field range index on the specified field name(s); if there is no range index configured, then an exception is thrown. **/
    fieldRangeQuery(fieldName: string, operator: string, value: anyAtomicType, options?: string, weight?: double): field-range-query;

    /** Returns the fieldname used to construct the specified query. **/
    fieldRangeQueryFieldName(query: field-range-query): string;

    /** Returns the operator used to construct the specified query. **/
    fieldRangeQueryOperator(query: field-range-query): string;

    /** Returns the value used to construct the specified query. **/
    fieldRangeQueryValue(query: field-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    fieldRangeQueryOptions(query: field-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    fieldRangeQueryWeight(query: field-range-query): double;

    /** Parses path expressions and resolves namespaces based on the server run-time environment. Returns true if the argument is permissible as a path for indexing. **/
    validIndexPath(string: string, ignorens: boolean): boolean;

    /** Returns a cts:query matching paths with a range-index entry equal a given value. Searches with the cts:path-range-query constructor require a path range index on the specified path name(s); if there is no range index configured, then an exception is thrown. **/
    pathRangeQuery(pathExpression: string, operator: string, value: anyAtomicType, options?: string, weight?: double): path-range-query;

    /** Returns the path expression used to construct the specified query. **/
    pathRangeQueryPathName(query: path-range-query): string;

    /** Returns the operator used to construct the specified query. **/
    pathRangeQueryOperator(query: path-range-query): string;

    /** Returns the value used to construct the specified query. **/
    pathRangeQueryValue(query: path-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    pathRangeQueryOptions(query: path-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    pathRangeQueryWeight(query: path-range-query): double;

    /** Returns a query matching elements by name with text content equal a given phrase. cts:element-value-query only matches against simple elements (that is, elements that contain only text and have no element children). **/
    elementValueQuery(elementName: QName, text: string, options?: string, weight?: double): element-value-query;

    /** Returns the QNames used to construct the specified query. **/
    elementValueQueryElementName(query: element-value-query): QName;

    /** Returns the text used to construct the specified query. **/
    elementValueQueryText(query: element-value-query): string;

    /** Returns the options for the specified query. **/
    elementValueQueryOptions(query: element-value-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementValueQueryWeight(query: element-value-query): double;

    /** Returns a query matching JSON properties by name with value equal the given value. For arrays, the query matches if the value of any elements in the array matches the given value. **/
    jsonPropertyValueQuery(propertyName: string, value: anyAtomicType, options?: string, weight?: double): json-property-value-query;

    /** Returns the JSON property name used to construct the specified query. **/
    jsonPropertyValueQueryPropertyName(query: json-property-value-query): string;

    /** Returns the value used to construct the specified query. **/
    jsonPropertyValueQueryValue(query: json-property-value-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    jsonPropertyValueQueryOptions(query: json-property-value-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyValueQueryWeight(query: json-property-value-query): double;

    /** Returns a query matching elements by name with text content containing a given phrase. Searches only through immediate text node children of the specified element as well as any text node children of child elements defined in the Admin Interface as element-word-query-throughs or phrase-throughs; does not search through any other children of the specified element. **/
    elementWordQuery(elementName: QName, text: string, options?: string, weight?: double): element-word-query;

    /** Returns the text used to construct the specified query. **/
    elementWordQueryText(query: element-word-query): string;

    /** Returns the QNames used to construct the specified query. **/
    elementWordQueryElementName(query: element-word-query): QName;

    /** Returns the options for the specified query. **/
    elementWordQueryOptions(query: element-word-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementWordQueryWeight(query: element-word-query): double;

    /** Returns a query matching JSON properties by name with text content containing a given phrase. Searches only through immediate text node children of the specified property. **/
    jsonPropertyWordQuery(propertyName: string, text: string, options?: string, weight?: double): json-property-word-query;

    /** Returns the text used to construct the specified query. **/
    jsonPropertyWordQueryText(query: json-property-word-query): string;

    /** Returns the name used to construct the specified query. **/
    jsonPropertyWordQueryPropertyName(query: json-property-word-query): string;

    /** Returns the options for the specified query. **/
    jsonPropertyWordQueryOptions(query: json-property-word-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyWordQueryWeight(query: json-property-word-query): double;

    /** Returns a query matching text content containing a given phrase in the specified field. If the specified field does not exist, cts:field-word-query throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
    fieldWordQuery(fieldName: string, text: string, options?: string, weight?: double): field-word-query;

    /** Returns the text used to construct the specified cts:field-word-query. **/
    fieldWordQueryText(query: field-word-query): string;

    /** Returns the names used to construct the specified cts:field-word-query. **/
    fieldWordQueryFieldName(query: field-word-query): string;

    /** Returns the options for the specified cts:field-word-query. **/
    fieldWordQueryOptions(query: field-word-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    fieldWordQueryWeight(query: field-word-query): double;

    /** Returns a query matching text content containing a given value in the specified field. If the specified field does not exist, cts:field-value-query throws an exception. If the specified field does not have the index setting field value searches enabled, either for the database or for the specified field, then a cts:search with a cts:field-value-query throws an exception. A field is a named object that specified elements to include and exclude from a search, and can include score weights for any included elements. You create fields at the database level using the Admin Interface. For details on fields, see the chapter on "Fields Database Settings" in the Administrator's Guide. **/
    fieldValueQuery(fieldName: string, text: anyAtomicType, options?: string, weight?: double): field-value-query;

    /** Returns the values used to construct the specified cts:field-value-query. **/
    fieldValueQueryText(query: field-value-query): anyAtomicType;

    /** Returns the names used to construct the specified cts:field-value-query. **/
    fieldValueQueryFieldName(query: field-value-query): string;

    /** Returns the options for the specified cts:field-value-query. **/
    fieldValueQueryOptions(query: field-value-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    fieldValueQueryWeight(query: field-value-query): double;

    /** Returns a cts:query matching element-attributes by name with a range-index entry equal to a given value. Searches with the cts:element-attribute-range-query constructor require an attribute range index on the specified QName(s); if there is no range index configured, then an exception is thrown. **/
    elementAttributeRangeQuery(elementName: QName, attributeName: QName, operator: string, value: anyAtomicType, options?: string, weight?: double): element-attribute-range-query;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributeRangeQueryElementName(query: element-attribute-range-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributeRangeQueryAttributeName(query: element-attribute-range-query): QName;

    /** Returns the operator used to construct the specified query. **/
    elementAttributeRangeQueryOperator(query: element-attribute-range-query): string;

    /** Returns the value used to construct the specified query. **/
    elementAttributeRangeQueryValue(query: element-attribute-range-query): anyAtomicType;

    /** Returns the options for the specified query. **/
    elementAttributeRangeQueryOptions(query: element-attribute-range-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementAttributeRangeQueryWeight(query: element-attribute-range-query): double;

    /** Returns a query matching elements by name with attributes by name with text content equal a given phrase. **/
    elementAttributeValueQuery(elementName: QName, attributeName: QName, text: string, options?: string, weight?: double): element-attribute-value-query;

    /** Returns the text used to construct the specified query. **/
    elementAttributeValueQueryText(query: element-attribute-value-query): string;

    /** Returns the element QNames used to construct the specified query. **/
    elementAttributeValueQueryElementName(query: element-attribute-value-query): QName;

    /** Returns the attribute QNames used to construct the specified query. **/
    elementAttributeValueQueryAttributeName(query: element-attribute-value-query): QName;

    /** Returns the options for the specified query. **/
    elementAttributeValueQueryOptions(query: element-attribute-value-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementAttributeValueQueryWeight(query: element-attribute-value-query): double;

    /** Returns a query matching elements by name with attributes by name with text content containing a given phrase. **/
    elementAttributeWordQuery(elementName: QName, attributeName: QName, text: string, options?: string, weight?: double): element-attribute-word-query;

    /** Returns the text used to construct the specified query. **/
    elementAttributeWordQueryText(query: element-attribute-word-query): string;

    /** Returns the element QNames used to construct the specified query. **/
    elementAttributeWordQueryElementName(query: element-attribute-word-query): QName;

    /** Returns the attribute QNames used to construct the specified query. **/
    elementAttributeWordQueryAttributeName(query: element-attribute-word-query): QName;

    /** Returns the options for the specified query. **/
    elementAttributeWordQueryOptions(query: element-attribute-word-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementAttributeWordQueryWeight(query: element-attribute-word-query): double;

    /** Returns a query matching nodes similar to the model nodes. It uses an algorithm which finds the most "relevant" terms in the model nodes (that is, the terms with the highest scores), and then creates a query equivalent to a cts:or-query of those terms. By default 16 terms are used. **/
    similarQuery(nodes: node(), weight?: double, options?: element()): similar-query;

    /** Returns the nodes used to construct the specified query. **/
    similarQueryNodes(query: similar-query): node();

    /** Returns the weight with which the specified query was constructed. **/
    similarQueryWeight(query: similar-query): double;

    /** Returns true if any of a sequence of values matches a query. **/
    contains(nodes: item(), query: query): boolean;

    /** Returns a relevance-ordered sequence of nodes specified by a given query. **/
    search(expression: node(), query: query, options?: order|xs:string), qualityWeight?: double, forestIds?: number): node();

    /** Returns the quality of a node, or of the context node if no node is provided. **/
    quality(node?: node()): number;

    /** Returns the score of a node, or of the context node if no node is provided. **/
    score(node?: node()): number;

    /** Return the relevance score computation report for a node. **/
    relevanceInfo(node?: node()): Object;

    /** Returns the confidence of a node, or of the context node if no node is provided. **/
    confidence(node?: node()): float;

    /** Returns the fitness of a node, or of the context node if no node is provided. Fitness is a normalized measure of relevance that is based on how well a node matches the query issued, not taking into account the number of documents in which the query term(s) occur. **/
    fitness(node?: node()): float;

    /** Returns an estimated search result size for a node, or of the context node if no node is provided. The search result size for a node is the number of fragments remaining (including the current node) in the result sequence containing the node. This is useful to quickly estimate the size of a search result sequence, without using fn:count() or xdmp:estimate(). **/
    remainder(node?: node()): number;

    /** Tokenizes text into words, punctuation, and spaces. Returns output in the type cts:token, which has subtypes cts:word, cts:punctuation, and cts:space, all of which are subtypes of xs:string. **/
    tokenize(text: string, language?: string, field?: string): token;

    /** Returns the stem(s) for a word. **/
    stem(text: string, language?: string): string;

    /** Returns a query matching all of the specified queries, where the matches occur within the specified distance from each other. **/
    nearQuery(queries: query, distance?: double, options?: string, distanceWeight?: double): near-query;

    /** Returns the query sequence used to construct the near query. **/
    nearQueryQueries(query: near-query): query;

    /** Returns the distance used to construct the near query. **/
    nearQueryDistance(query: near-query): number;

    /** Returns the options for the specified query. **/
    nearQueryOptions(query: near-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    nearQueryWeight(query: near-query): double;

    /** Returns a query matching the first subquery, where those matches do not occur within 0 distance of the other query. **/
    notInQuery(positiveQuery: query, negativeQuery: query): not-in-query;

    /** Returns the positive (first parameter) query used to construct the specified query. **/
    notInQueryPositiveQuery(query: not-in-query): query;

    /** Returns the negative (second parameter) query used to construct the specified query. **/
    notInQueryNegativeQuery(query: not-in-query): query;

    /** Returns a cts:query matching elements by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified element and all of its descendants. If the specified query in the second parameter has any cts:element-attribute-*-query constructors, it will search attributes directly on the specified element and attributes on any descendant elements (see the second example second example below). **/
    elementQuery(elementName: QName, query: query): element-query;

    /** Returns the QNames used to construct the specified query. **/
    elementQueryElementName(query: element-query): QName;

    /** Returns the query used to construct the element query. **/
    elementQueryQuery(query: element-query): query;

    /** Returns a cts:query matching JSON properties by name with the content constrained by the given cts:query in the second parameter. Searches for matches in the specified property and all of its descendants. **/
    jsonPropertyScopeQuery(propertyName: string, query: query): json-property-scope-query;

    /** Returns the JSON property name used to construct the specified query. **/
    jsonPropertyScopeQueryPropertyName(query: json-property-scope-query): string;

    /** Returns the query used to construct the property scope query. **/
    jsonPropertyScopeQueryQuery(query: json-property-scope-query): query;

    /** Returns a query matching documents with the given URIs. It will match both documents and properties documents with the given URIs. **/
    documentQuery(uris: string): document-query;

    /** Returns the URIs used to construct the specified query. **/
    documentQueryUris(query: document-query): string;

    /** Returns a query matching documents in the collections with the given URIs. It will match both documents and properties documents in the collections with the given URIs. **/
    collectionQuery(uris: string): collection-query;

    /** Returns the URIs used to construct the specified query. **/
    collectionQueryUris(query: collection-query): string;

    /** Returns a query matching documents in the directories with the given URIs. **/
    directoryQuery(uris: string, depth?: string): directory-query;

    /** Returns the URIs used to construct the specified query. **/
    directoryQueryUris(query: directory-query): string;

    /** Returns the depth used to construct the specified query. **/
    directoryQueryDepth(query: directory-query): string;

    /** Register a query for later use. **/
    register(query: query): number;

    /** Deregister a registered query, explicitly releasing the associated resources. **/
    deregister(id: number): void;

    /** Returns a query matching fragments specified by previously registered queries (see cts:register). If a registered query with the specified ID(s) is not found, then a cts:search operation with an invalid cts:registered-query throws an XDMP-UNREGISTERED exception. **/
    registeredQuery(ids: number, options?: string, weight?: double): registered-query;

    /** Returns the registered query identifiers used to construct the specified query. **/
    registeredQueryIds(query: registered-query): number;

    /** Returns the options for the specified query. **/
    registeredQueryOptions(query: registered-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    registeredQueryWeight(query: registered-query): double;

    /** Returns words from the word lexicon. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. The words are returned in collation order. **/
    words(start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the word lexicon that match the wildcard pattern. This function requires the word lexicon to be enabled. If the word lexicon is not enabled, an exception is thrown. **/
    wordMatch(pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified element word lexicon. This function requires an element word lexicon for each of the element specified in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. The words are returned in collation order. **/
    elementWords(elementNames: QName, start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified JSON property word lexicon. This function requires a property word lexicon for each of the property specified in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. The words are returned in collation order. **/
    jsonPropertyWords(propertyNames: string, start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified element word lexicon(s) that match a wildcard pattern. This function requires an element word lexicon configured for each of the specified elements in the function. If there is not an element word lexicon configured for any of the specified elements, an exception is thrown. **/
    elementWordMatch(elementNames: QName, pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified JSON property word lexicon(s) that match a wildcard pattern. This function requires a property word lexicon configured for each of the specified properties in the function. If there is not a property word lexicon configured for any of the specified properties, an exception is thrown. **/
    jsonPropertyWordMatch(propertyNames: string, pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns values from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
    elementValues(elementNames: QName, start?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns values from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
    fieldValues(fieldNames: string, start?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns values from the specified value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each of the $range-indexes specified in the function. If there is not a range index configured for each of the specified range indexes, an exception is thrown. **/
    values(rangeIndexes: reference, start?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns values from the triple index. If subject, predicate, and object are given, then only triples with those given component values are returned. Triples can be returned in any of the sort orders present in the triple index. **/
    triples(subject?: anyAtomicType, predicate?: anyAtomicType, object?: anyAtomicType, operator?: string, options?: string, query?: query, forestIds?: number): triple;

    /** Returns values from the specified element value lexicon(s) that match the specified wildcard pattern. Element value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, then an exception is thrown. **/
    elementValueMatch(elementNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified element value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
    elementValueCoOccurrences(elementName-1: QName, elementName-2: QName, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns value co-occurrences from the specified element or element-attribute value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a range index for each element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element or element/attribute pairs, then an exception is thrown. **/
    elementAttributeValueCoOccurrences(elementName-1: QName, attributeName-1: QName, elementName-2: QName, attributeName-2: QName, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns values from the specified path value lexicon(s) that match the specified wildcard pattern. Path value lexicons are implemented using range indexes; consequently this function requires a path range index for each path specified in the function. If there is not a range index configured for each of the specified paths, then an exception is thrown. **/
    valueMatch(rangeIndexes: reference, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified path value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an path range index for each path specified in the function. If there is not a range index configured for each of the specified paths, an exception is thrown. **/
    valueCoOccurrences(rangeIndex-1: reference, rangeIndex-2: reference, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns value ranges from the specified path value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a path range index for each element specified in the function. If there is not a range index configured for each of the specified paths, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:value-ranges(cts:path-reference("/name/fname"), ("f", "m")) cts.valueRanges(cts.pathReference("/name/fname"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
    valueRanges(rangeIndexes: reference, bounds?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): range);

    /** Accessor for the scalar type of a reference to a value lexicon. **/
    referenceScalarType(index: reference): string;

    /** Creates a reference to the URI lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    uriReference(): reference;

    /** Creates a reference to the collection lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    collectionReference(options?: string): reference;

    /** Creates a reference to an element value lexicon, for use as a parameter to cts:value-tuplescts.valueTuples, temporal:axis-createtemporal.axisCreate, or any other function that takes an index reference. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    elementReference(element: QName, options?: string): reference;

    /** Creates a reference to a JSON property value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    jsonPropertyReference(property: string, options?: string): reference;

    /** Creates a reference to an element attribute value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    elementAttributeReference(element: QName, attribute: QName, options?: string): reference;

    /** Creates a reference to a field value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    fieldReference(field: string, options?: string): reference;

    /** Creates a reference to a path value lexicon, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    pathReference(pathExpression: string, options?: string, map?: map): reference;

    /** Returns value co-occurrence tuples (that is, tuples of values, each of which appear in the same fragment) from the specified value lexicons. The values are returned as json:array values array nodes, where each slot contains one of the co-occurring values. You can use cts:frequency on each item returned to find how many times the tuple occurs. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function, and the range index must have range value positions set to true. If there is not a range index configured for each of the specified elements, an exception is thrown. **/
    valueTuples(rangeIndexes: reference, options?: string, query?: query, qualityWeight?: double, forestIds?: number): array;

    /** Executes a user-defined extension aggregate function against a value lexicon or n-way co-occurence of multiple value lexicons. Value lexicons are implemented using range indexes; consequently this function requires a range index for each lexicon specified in the function. If a specified range index does not exist an error is raised. If the "ordered" or "proximity=" option is specified, the range index must have range value positions set to true, otherwise an error is raised. **/
    aggregate(nativePlugin: string, aggregateName: string, rangeIndexes: reference, argument?: item(), options?: string, query?: query, forestIds?: number): item();

    /** Returns the count of a value lexicon. This function works like cts:count except it performs the counting in parallel in all data nodes then aggregates the values. It generally performs better than cts:count, especially on large clusters. **/
    countAggregate(rangeIndex: reference, options?: string, query?: query, forestIds?: number): number;

    /** Returns the minimal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:min, especially on large clusters. **/
    min(rangeIndex: reference, options?: string, query?: query, forestIds?: number): anyAtomicType;

    /** Returns the maximal value given a value lexicon. This function performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than fn:max, especially on large clusters. **/
    max(rangeIndex: reference, options?: string, query?: query, forestIds?: number): anyAtomicType;

    /** Returns the sum of the values given a value lexicon. This function works like cts:sum except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:sum, especially on large clusters. **/
    sumAggregate(rangeIndex: reference, options?: string, query?: query, forestIds?: number): anyAtomicType;

    /** Returns the average of the values given a value lexicon. This function works like cts:avg except it performs the calculation in parallel in all data nodes then aggregates the values. It generally performs better than cts:avg, especially on large clusters. **/
    avgAggregate(rangeIndex: reference, options?: string, query?: query, forestIds?: number): anyAtomicType;

    /** Returns a frequency-weighted variance of the population given a value lexicon. This function works like math:variance-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
    varianceP(rangeIndex: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns a frequency-weighted sample variance given a value lexicon. This function works like math:variance except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
    variance(rangeIndex: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns a frequency-weighted standard deviation of the population given a value lexicon. This function works like math:stddev-p except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
    stddevP(rangeIndex: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns a frequency-weighted sample standard deviation given a value lexicon. This function works like math:stddev except each item in the lexicon is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. The function returns the empty sequence if the lexicon contains no value. **/
    stddev(rangeIndex: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns the frequency-weighted covariance of the population given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:covariance-p math.covarianceP except each pair in the co-occurrence is counted cts:frequency cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
    covarianceP(value1: reference, value2: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns the frequency-weighted sample covariance given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:covariance math.covariance except each pair in the co-occurrence is counted cts:frequency cts.frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
    covariance(value1: reference, value2: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns the frequency-weighted correlation given a 2-way co-occurrence. The co-occurence is formed from the specified value lexicons. This function works like math:correlation except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
    correlation(value1: reference, value2: reference, options?: string, query?: query, forestIds?: number): double;

    /** Returns a linear model that fits the frequency-weighted data set. The input data is a co-occurrence, formed from the specified value lexicons. The length of the input lexicon sequence should be 2, as currently only simple linear regression model is supported. The first lexicon should be the value of the dependent variable while the other lexicon should be the value of the independent variable. This function works like math:linear-model except each pair in the input lexicons is counted cts:frequency times. This function performs the calculation in parallel in all data nodes then aggregates the values. **/
    linearModel(values: reference, options?: string, query?: query, forestIds?: number): linear-model;

    /** Returns value ranges from the specified element value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires an element range index for each element specified in the function. If there is not a range index configured for each of the specified elements, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:element-value-ranges(xs:QName("myElement"), ("f", "m")) cts.elementValueRanges(xs.QName("myElement"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
    elementValueRanges(elementNames: QName, bounds?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): range);

    /** Returns values from the specified field value lexicon(s) that match the specified wildcard pattern. Field value lexicons are implemented using range indexes; consequently this function requires a field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, then an exception is thrown. **/
    fieldValueMatch(fieldNames: string, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns value co-occurrences (that is, pairs of values, both of which appear in the same fragment) from the specified field value lexicon(s). The values are returned as an XML element an ArrayNode with two children, each child containing one of the co-occurring values. You can use cts:frequencycts.frequency on each item returned to find how many times the pair occurs. Value lexicons are implemented using range indexes; consequently this function requires an field range index for each field specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. **/
    fieldValueCoOccurrences(fieldName-1: string, fieldName-2: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns value ranges from the specified field value lexicon(s). Value lexicons are implemented using range indexes; consequently this function requires a field range index for each element specified in the function. If there is not a range index configured for each of the specified fields, an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:field-value-ranges("myField", ("f", "m")) cts.fieldValueRanges("myField", ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
    fieldValueRanges(fieldNames: string, bounds?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): range);

    /** Returns an integer representing the number of times in which a particular value occurs in a value lexicon lookup (for example, cts:element-values). When using the fragment-frequency lexicon option, cts:frequency returns the number of fragments in which the lexicon value occurs. When using the item-frequency lexicon option, cts:frequency returns the total number of times in which the lexicon value occurs in each item. **/
    frequency(value: any): number;

    /** [DEPRECATED: use cts:sum-aggregate] Returns a frequency-weighted sum of a sequence. This function works like fn:sum except each item in the sequence is multiplied by cts:frequency before summing. **/
    sum(arg: anyAtomicType, zero?: anyAtomicType): anyAtomicType;

    /** [DEPRECATED: use cts:count-aggregate] Returns a frequency-weighted count of a sequence. This function works like fn:count except the count of each item is multiplied by cts:frequency. **/
    count(arg: item(), maximum?: double): number;

    /** [DEPRECATED: use cts:avg-aggregate] Returns a frequency-weighted average of a sequence. This function works like fn:avg except each item in the sequence is multiplied by cts:frequency before summing. **/
    avg(arg: anyAtomicType): anyAtomicType;

    /** Returns values from the URI lexicon. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
    uris(start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns values from the URI lexicon that match the specified wildcard pattern. This function requires the uri-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
    uriMatch(pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns values from the collection lexicon. This function requires the collection-lexicon database configuration parameter to be enabled. If the collection-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
    collections(start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns values from the collection lexicon that match the specified wildcard pattern. This function requires the collection-lexicon database configuration parameter to be enabled. If the uri-lexicon database-configuration parameter is not enabled, an exception is thrown. **/
    collectionMatch(pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified element-attribute word lexicon(s). This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element/attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. The words are returned in collation order. **/
    elementAttributeWords(elementNames: QName, attributeNames: QName, start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified element-attribute word lexicon(s) that match a wildcard pattern. This function requires an element-attribute word lexicon for each of the element/attribute pairs specified in the function. If there is not an element-attribute word lexicon configured for any of the specified element/attribute pairs, then an exception is thrown. **/
    elementAttributeWordMatch(elementNames: QName, attributeNames: QName, pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns values from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
    elementAttributeValues(elementNames: QName, attributeNames: QName, start?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns values from the specified element-attribute value lexicon(s) that match the specified pattern. Element-attribute value lexicons are implemented using range indexes; consequently this function requires an attribute range index for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. **/
    elementAttributeValueMatch(elementNames: QName, attributeNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): anyAtomicType;

    /** Returns value ranges from the specified element-attribute value lexicon(s). Element-attribute value lexicons are implemented using indexes; consequently this function requires an attribute range index of for each of the element/attribute pairs specified in the function. If there is not a range index configured for each of the specified element/attribute pairs, then an exception is thrown. The values are divided into buckets. The $bounds parameter specifies the number of buckets and the size of each bucket. All included values are bucketed, even those less than the lowest bound or greater than the highest bound. An empty sequence for $bounds specifies one bucket, a single value specifies two buckets, two values specify three buckets, and so on. If you have string values and you pass a $bounds parameter as in the following call: cts:element-value-ranges(xs:QName("myElement"), ("f", "m")) cts.elementValueRanges(xs.QName("myElement"), ["f", "m"]) The first bucket contains string values that are less than the string f, the second bucket contains string values greater than or equal to f but less than m, and the third bucket contains string values that are greater than or equal to m. For each non-empty bucket, a cts:range element is returned. Each cts:range element has a cts:minimum child and a cts:maximum child. If a bucket is bounded, its cts:range element will also have a cts:lower-bound child if it is bounded from below, and a cts:upper-bound element if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. For each non-empty bucket, an ObjectNode is returned. Each ObjectNode has a minimum property and a maximum property. If a bucket is bounded, its ObjectNode will also have a lowerBound property if it is bounded from below, and a upperBound property if it is bounded from above. Empty buckets return nothing unless the "empties" option is specified. **/
    elementAttributeValueRanges(elementNames: QName, attributeNames: QName, bounds?: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): range);

    /** Returns words from the specified field word lexicon. This function requires an field lexicon for each of the field specified in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. The words are returned in collation order. **/
    fieldWords(fieldNames: string, start?: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns words from the specified field word lexicon(s) that match a wildcard pattern. This function requires an field word lexicon configured for each of the specified fields in the function. If there is not an field word lexicon configured for any of the specified fields, an exception is thrown. **/
    fieldWordMatch(fieldNames: string, pattern: string, options?: string, query?: query, qualityWeight?: double, forestIds?: number): string;

    /** Returns a query matching the model nodes. Use with a cts:search or a cts:contains over serialized cts:query nodes. The serialized cts:query nodes can be either stored in the database or passed in as XML. **/
    reverseQuery(nodes: node(), weight?: double): reverse-query;

    /** Returns the nodes used to construct the specified query. **/
    reverseQueryNodes(query: reverse-query): node();

    /** Returns the weight with which the specified query was constructed. **/
    reverseQueryWeight(query: reverse-query): double;

    /** Returns a query that matches all documents where $query matches any document fragment. When searching documents, document-properties, or document-locks, cts:document-fragment-query provides a convenient way to additionally constrain the search against any document fragment. **/
    documentFragmentQuery(query: query): document-fragment-query;

    /** Returns the query used to construct the specified query. **/
    documentFragmentQueryQuery(query: document-fragment-query): query;

    /** Returns a query that matches all documents where $query matches document-properties. When searching documents or document-locks, cts:properties-fragment-query provides a convenient way to additionally constrain the search against document-properties fragments. **/
    propertiesFragmentQuery(query: query): properties-fragment-query;

    /** Returns the query used to construct the specified query. **/
    propertiesFragmentQueryQuery(query: properties-fragment-query): query;

    /** Returns a query that matches all documents where $query matches document-locks. When searching documents or document-properties, cts:locks-fragment-query provides a convenient way to additionally constrain the search against document-locks fragments. **/
    locksFragmentQuery(query: query): locks-fragment-query;

    /** Returns the query used to construct the specified query. **/
    locksFragmentQueryQuery(query: locks-fragment-query): query;

    /** Creates a query. **/
    query(query: node()): query;

    /** Return the most "relevant" terms in the model nodes (that is, the terms with the highest scores). **/
    distinctiveTerms(nodes: node(), options?: element()): Object;

    /** Creates a period value, for use as a parameter to cts:period-range-query or cts:period-compare-query. **/
    period(start: dateTime, end: dateTime): period;

    /** Creates a reference to a value lexicon by parsing its XML or JSON representation, for use as a parameter to cts:value-tuples. Since lexicons are implemented with range indexes, this function will throw an exception if the specified range index does not exist. **/
    referenceParse(reference: node()): reference;


  }
}
