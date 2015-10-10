declare class DocumentNode<T> extends MLNode<T> {
  /**
   * The root node of the document.
   */
  root: T & MLNode<T>
  /**
   * A string representing the format of the document node. The following are the possible values of documentFormat:
   * "BINARY"
   * "JSON"
   * "TEXT"
   * "XML"
   */
  documentFormat: string
}

declare class ObjectNode extends MLNode<Object> {
}

declare class NodeBuilder {
  /**
   * Add a new attribute to the current element being created. You cannot create duplicate attributes; if an attribute with that name already is present in the element, XDMP-DUPATTR is thrown.
   */
  addAttribute(name:string, value:string, uri?:string):void
  /**
   * Add a comment node to the current parent node being created.
   */
  addComment(text:string):void
  /**
   * Add a document with the given URI and the specified text content. This results in a document of format text (that is, document node with a text node root).
   */
  addDocument(text:string, uri?:string):void
  /**
   * Add a document with the given URI. The function will be given the builder as its argument and evaluated to produce the content. For example:
   *   var x = new NodeBuilder();
   *   var b = x.addDocument(
   *     function(builder){
   *       builder.addElement("foo", "some stuff")});
   *   b.toNode().root;
   * =>
   * <foo>some stuff</foo>
   */
  addDocument(content:(NodeBuilder)=>void, uri?:string):void
  /**
   * Add an element to the current parent node with the specified name, text content, and namespace URI. The function will be given the builder as its argument and evaluated to produce the content. The element creation is completed after calling addElement, and consequently subsequent calls to addAttribute would not apply to this element.
   */
  addElement(name:string, text:string, uri?:string):void
  /**
   * Add an element to the current parent node with the specified name and namespace URI. The element creation is completed after calling addElement, and consequently subsequent calls to addAttribute would not apply to this element. The function in the second argument will be given the builder as its argument and evaluated to produce the content. For example:
   *   var x = new NodeBuilder();
   *   var b = x.addElement("foo",
   *     function(builder){
   *      builder.addText("some stuff")});
   *   b.toNode();
   * =>
   * <foo>some stuff</foo>
   */
  addElement(name:string, content:(NodeBuilder)=>void, uri?:string):void
  /**
   * Add a copy of the specified node to the current parent node.
   */
  addNode(node:Node):void
  /**
   * Add a processing instruction node to the current parent node with the specified target and text.
   */
  addProcessingInstruction(target:string, text:string):void
  /**
   * Add a text node to the current parent node being created.
   */
  addText(value:string):void
  /**
   * Add a binary node to the current parent node being created. The argument is a hex encoded string.
   */
  addBinary(hex:string):void
  /**
   * Add a number node to the current parent node being created.
   */
  addNumber(value:number):void
  /**
   * Add a boolean node to the current parent node being created.
   */
  addBoolean(value:boolean):void
  /**
   * Add a null node to the current parent node being created.
   */
  addNull():void
  /**
   * Complete creation of the document.
   */
  endDocument():void
  /**
   * Complete creation of the element.
   */
  endElement():void
  /**
   * Start creating a document with the specified URI.
   */
  startDocument(uri?:string):void
  /**
   * Start creating an element as a child of the current document or element with the specified name and (optionally) namespace URI.
   */
  startElement(name:string, uri?:string):void
  /**
   * Returns the constructed node.
   */
  toNode():Node
}

declare enum NodeType {
  ELEMENT_NODE = 1,
  ATTRIBUTE_NODE = 2,
  TEXT_NODE = 3,
  PROCESSING_INSTRUCTION_NODE = 7,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  BINARY_NODE = 13,
  NULL_NODE = 14,
  BOOLEAN_NODE = 15,
  NUMBER_NODE = 16,
  ARRAY_NODE = 17,
  OBJECT_NODE = 18
}

declare type MLNodeOrObject<T> = MLNode<T> | {[property:string]:any}
declare type MLNodeAndObject<T> = MLNode<T> & T
declare type MLArray<T> = T|Array<T>|ValueIterator<T>

declare abstract class MLNode<T> {
  /**
   * A String representing the base URI of the node.
   */
  baseURI: string
  /**
   * The atomic value of the node.
   */
  valueOf(): any
  /**
   * JavaScript object if the node is type Array, Boolean, Number, Object or Text; otherwise it is Undefined.
   */
  toObject(): T
  /**
   * A number representing the type of the Node object.
   */
  nodeType: NodeType
  /**
   * Evaluate the XPath expression. The first argument is a string representing the XPath expression, and the second argument is an Object where each key is a namespace prefix used in the first argument, and each value is the namespace in which to bind the prefix. For the XPath expression, if you want the expression evaluated relative to the current node, start the path with a dot (.); for example, "./my-node".
   */
  xpath(xpathExpression: string, namespaceBindings: { [nsPrefix: string]: string }): any
}

declare interface Node {
  /**
   * The atomic value of the node.
   */
  valueOf(): any
  /**
   * JavaScript object if the node is type Array, Boolean, Number, Object or Text; otherwise it is Undefined.
   */
  toObject(): any
  /**
   * Evaluate the XPath expression. The first argument is a string representing the XPath expression, and the second argument is an Object where each key is a namespace prefix used in the first argument, and each value is the namespace in which to bind the prefix. For the XPath expression, if you want the expression evaluated relative to the current node, start the path with a dot (.); for example, "./my-node".
   */
  xpath(xpathExpression: string, namespaceBindings: { [nsPrefix: string]: string }): any
}

declare class ValueIterator<T> {
  /**
   * Returns the number of remaining values in the iterator.
   */
  count: number
  /**
   * Returns a clone of the iterator. This is useful if you need to make a copy of a node so that it does not hold onto a reference to a document in the database.
   */
  clone(): ValueIterator<T>
  /**
   * Returns an array of value items from the remaining values in the iterator. If there are no more values, it returns an empty array.
   */
  toArray(): T[]
  /**
   * Returns the next item in the iterator. This function has two properties: value and done.
   */
  next(): IteratorResult<T>
  // /**
  //  * Conforms to ES6 spec to make editors happy. Not actually available server-side.
  //  */
  // return(value?: any): IteratorResult<T>
  // /**
  //  * Conforms to ES6 spec to make editors happy. Not actually available server-side.
  //  */
  // throw(e?: any): IteratorResult<T>
}

interface IteratorResult<T> {
  done: boolean
  value?: T
}

declare namespace cts {
  interface Reference {
    __$cts_Reference
  }
  interface Query {
    __$cts_Query
  }
  interface Point {
    __$cts_Point
  }
  interface Box {
    __$cts_Box
  }
  interface Circle {
    __$cts_Circle
  }
  interface Polygon {
    __$cts_Polygon
  }
  interface Linestring {
    __$cts_Linestring
  }
  interface ComplexPolygon {
    __$cts_ComplexPolygon
  }
  interface Region {
    __$cts_Region
  }
  interface ElementGeospatialQuery extends Query {
    __$cts_ElementGeospatialQuery
  }
  interface JsonPropertyGeospatialQuery extends Query {
    __$cts_JsonPropertyGeospatialQuery
  }
  interface JsonPropertyChildGeospatialQuery extends Query {
    __$cts_JsonPropertyChildGeospatialQuery
  }
  interface JsonPropertyPairGeospatialQuery extends Query {
    __$cts_JsonPropertyPairGeospatialQuery
  }
  interface ElementChildGeospatialQuery extends Query {
    __$cts_ElementChildGeospatialQuery
  }
  interface ElementPairGeospatialQuery extends Query {
    __$cts_ElementPairGeospatialQuery
  }
  interface ElementAttributePairGeospatialQuery extends Query {
    __$cts_ElementAttributePairGeospatialQuery
  }
  interface PathGeospatialQuery extends Query {
    __$cts_PathGeospatialQuery
  }
  interface Order {
    __$cts_Order
  }
  interface Period {
    __$cts_Period
  }
  interface PeriodRangeQuery extends Query {
    __$cts_PeriodRangeQuery
  }
  interface LsqtQuery extends Query {
    __$cts_LsqtQuery
  }
  interface PeriodCompareQuery extends Query {
    __$cts_PeriodCompareQuery
  }
  interface AndQuery extends Query {
    __$cts_AndQuery
  }
  interface BoostQuery extends Query {
    __$cts_BoostQuery
  }
  interface OrQuery extends Query {
    __$cts_OrQuery
  }
  interface AndNotQuery extends Query {
    __$cts_AndNotQuery
  }
  interface NotQuery {
    __$cts_NotQuery
  }
  interface WordQuery extends Query {
    __$cts_WordQuery
  }
  interface ElementRangeQuery extends Query {
    __$cts_ElementRangeQuery
  }
  interface JsonPropertyRangeQuery extends Query {
    __$cts_JsonPropertyRangeQuery
  }
  interface TripleRangeQuery extends Query {
    __$cts_TripleRangeQuery
  }
  interface FieldRangeQuery extends Query {
    __$cts_FieldRangeQuery
  }
  interface PathRangeQuery extends Query {
    __$cts_PathRangeQuery
  }
  interface ElementValueQuery extends Query {
    __$cts_ElementValueQuery
  }
  interface JsonPropertyValueQuery extends Query {
    __$cts_JsonPropertyValueQuery
  }
  interface ElementWordQuery extends Query {
    __$cts_ElementWordQuery
  }
  interface JsonPropertyWordQuery extends Query {
    __$cts_JsonPropertyWordQuery
  }
  interface FieldWordQuery extends Query {
    __$cts_FieldWordQuery
  }
  interface FieldValueQuery extends Query {
    __$cts_FieldValueQuery
  }
  interface ElementAttributeRangeQuery extends Query {
    __$cts_ElementAttributeRangeQuery
  }
  interface ElementAttributeValueQuery extends Query {
    __$cts_ElementAttributeValueQuery
  }
  interface ElementAttributeWordQuery extends Query {
    __$cts_ElementAttributeWordQuery
  }
  interface SimilarQuery extends Query {
    __$cts_SimilarQuery
  }
  interface NearQuery extends Query {
    __$cts_
  }
  interface NotInQuery extends Query {
    __$cts_NotInQuery
  }
  interface ElementQuery extends Query {
    __$cts_ElementQuery
  }
  interface DocumentQuery extends Query {
    __$cts_DocumentQuery
  }
  interface JsonPropertyScopeQuery extends Query {
    __$cts_JsonPropertyScopeQuery
  }
  interface CollectionQuery extends Query {
    __$cts_CollectionQuery
  }
  interface DirectoryQuery extends Query {
    __$cts_DirectoryQuery
  }
  interface RegisteredQuery extends Query {
    __$cts_RegisteredQuery
  }
  interface ReverseQuery extends Query {
    __$cts_ReverseQuery
  }
  interface DocumentFragmentQuery extends Query {
    __$cts_DocumentFragmentQuery
  }
  interface PropertiesFragmentQuery extends Query {
    __$cts_PropertiesFragmentQuery
  }
  interface LocksFragmentQuery extends Query {
    __$cts_LocksFragmentQuery
  }
  interface Token{
    __$cts_Token
  }
}

declare namespace math{
  interface LinearModel {
    __$math_LinearModel
  }
}

declare namespace sem {
  interface Iri {
    __$sem_Iri
  }
  interface Binding {
    __$sem_Binding
  }
  interface Blank {
    __$sem_Blank
  }
  interface Triple {
    __$sem_Triple
  }
  interface Unknown {
    __$sem_Unknown
  }
  interface Invalid {
    __$sem_Invalid
  }
  interface Store {
    __$cts_Store
  }
}

interface SchemaComponent {
  __$SchemaComponent
}
interface SchemaType extends SchemaComponent {
  __$SchemaType
}
interface SimpleType extends SchemaType {
  __$SimpleType
}
interface ComplexType extends SchemaType {
  __$ComplexType
}
interface ElementDecl extends SchemaComponent {
  __$ElementDecl
}
interface AttributeDecl extends SchemaComponent {
  __$AttributeDecl
}
interface SchemaParticle extends SchemaComponent {
  __$SchemaParticle
}
interface SchemaFacet extends SchemaComponent {
  __$SchemaFacet
}
interface SchemaRoot extends SchemaComponent {
  __$SchemaRoot
}

declare namespace rdf {
  interface LangString {
    __$rdf_LangString
  }
}

declare namespace xs {
  interface QName{
    __$xs_QName
  }
}
