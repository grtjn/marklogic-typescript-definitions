// Type definitions for Eval
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Eval.xml

/****/

declare module Eval {

  interface xdmp {

    /** Returns the result of evaluating a string as a Javascript program. **/
    eval(xquery: string, javascript: string, vars?: item(), vars?: Object, options?: map)): item();

    /** Returns the result of evaluating a string as an XQuery module. For details, see the XQuery function xdmp:eval. **/
    xqueryEval(xquery: string, vars?: Object, options?: map)): item();

    /** Returns the result of evaluating a string as a JavaScript module. **/
    javascriptEval(javascript: string, vars?: item(), options?: node()): item();

    /** [DEPRECATED: use xdmp:eval with the database option instead] Returns the result of evaluating a string as an XQuery module in a given database. **/
    evalIn(xquery: string, ID: number, vars?: item(), modules?: number, root?: string): item();

    /** Returns the result of evaluating a module at the given path. **/
    invoke(path: string, vars?: item(), vars?: Object, options?: map)): item();

    /** Returns the result of evaluating a function value. **/
    invokeFunction(path: function() as item(), options?: map)): item();

    /** Returns the result of evaluating a function value. **/
    invokeFunction(jsFunc: function(), options?: map)): item();

    /** [DEPRECATED: use xdmp:invoke with the database option instead] Returns the result of evaluating a module at the given path. **/
    invokeIn(uri: string, ID: number, vars?: item(), modules?: number, root?: string): item();

    /** Evaluate an expression in the context of the current evaluating statement. This differs from xdmp:eval in that xdmp:value preserves all of the context from the calling query, so you do not need to re-define namespaces, variables, and so on. Although the expression retains the context from the calling query, it is evaluated in its own transaction with same-statement isolation. **/
    value(expr: string, map?: map): item();

    /** Evaluate a string as an XPath and return the corresponding node(s). Any value that is the result of xdmp:path is a valid input to xdmp:unpath. Any invalid inputs throw an XDMP-UNPATH exception. To evaluate non-XPath expressions, use xdmp:value. **/
    unpath(expr: string, map?: map): item();

    /** Executes an XSLT stylesheet against a node. **/
    xsltInvoke(path: string, input?: node(), params?: map, options?: map)): document-node();

    /** Executes an XSLT stylesheet against a node. **/
    xsltEval(stylesheet: node(), input?: node(), params?: map, options?: map)): document-node();

    /** Place the specified module on the task queue for evaluation. **/
    spawn(path: string, vars?: item(), vars?: Object, options?: map)): item();

    /** Place the specified function value on the task queue for evaluation. **/
    spawnFunction(function: function() as item(), options?: map)): item();

    /** [DEPRECATED: use xdmp:spawn with the database option instead] Place the specified module on the task queue for evaluation. It will be evaluated in the given database. **/
    spawnIn(path: string, ID: number, vars?: item(), modules?: number, root?: string): void;


  }
}
