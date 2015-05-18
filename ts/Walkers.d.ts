// Type definitions for Walkers
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Walkers.xml

/****/

declare module Walkers {

  interface cts {

    /** Walks a node, evaluating an expression with any text matching a query. It returns a sequence of all the values returned by the expression evaluations. This is similar to cts:highlight in how it evaluates its expression, but it is different in what it returns. **/
    walk(node: node(), query: query, expr: item()): item();

    /** Walks a node, evaluating a callback function for any text matching a query. It returns the empty-sequence(). This is similar to cts.highlight in how it evaluates its expression, but it is different in what it returns. **/
    walk(node: node(), query: query, callback: number): void;

    /** Returns a copy of the node, replacing any text matching the query with the specified expression. You can use this function to easily highlight any text found in a query. Unlike fn:replace and other XQuery string functions that match literal text, cts:highlight matches every term that matches the search, including stemmed matches or matches with different capitalization. **/
    highlight(node: node(), query: query, expr: item()): node();

    /** Returns a copy of the node, replacing any text matching the query with the specified expression. You can use this function to easily highlight any text found in a query. Unlike fn.replace and other string functions that match literal text, cts.highlight matches every term that matches the search, including stemmed matches or matches with different capitalization. **/
    highlight(node: node(), query: query, callback: number, builder: NodeBuilder): void;

    /** Returns a copy of the node, replacing any elements found with the specified expression. **/
    elementWalk(node: node(), element: QName, expr: item()): node();

    /** Returns a copy of the node, replacing any elements found with the specified expression. **/
    elementWalk(node: node(), element: QName, callback: string, builder: NodeBuilder): void;


  }
}
