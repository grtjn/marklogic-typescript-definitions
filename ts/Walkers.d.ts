// Type definitions for Walkers
// Definitions: 

/****/

interface ctsFunctions {

    /** Walks a node, evaluating a callback function for any text matching a query. It returns the empty-sequence(). This is similar to cts.highlight in how it evaluates its expression, but it is different in what it returns. **/
  walk(node: MLNode<any>, query: cts.Query, callback: (p1:string,p2:Text,p3:cts.Query,p4:number)=>string): void;

    /** Returns a copy of the node, replacing any text matching the query with the specified expression. You can use this function to easily highlight any text found in a query. Unlike fn.replace and other string functions that match literal text, cts.highlight matches every term that matches the search, including stemmed matches or matches with different capitalization. **/
  highlight(node: MLNode<any>, query: cts.Query, callback: (p1:NodeBuilder,p2:string,p3:Text,p4:cts.Query,p5:number)=>string, builder: NodeBuilder): void;

    /** Returns a copy of the node, replacing any elements found with the specified expression. **/
  elementWalk(node: MLNode<any>, element: xs.QName, callback: (p1:NodeBuilder,p2:MLNode<any>)=>string, builder: NodeBuilder): void;

}
declare var cts:ctsFunctions
