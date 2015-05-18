// Type definitions for Eval
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Eval.xml

/****/

declare module Eval {

  interface xdmp {

    /** Returns the result of evaluating a string as a Javascript program. **/
    eval(xquery: xs:string, javascript: xs:string, vars?: item(), vars?: Object, options?: (element()|map:map)): item();

    /** Returns the result of evaluating a string as an XQuery module. For details, see the XQuery function xdmp:eval. **/
    xqueryEval(xquery: xs:string, vars?: Object, options?: (element()|map:map)): item();

    /** Returns the result of evaluating a string as a JavaScript module. **/
    javascriptEval(javascript: xs:string, vars?: item(), options?: node()): item();

    /** [DEPRECATED: use xdmp:eval with the database option instead] Returns the result of evaluating a string as an XQuery module in a given database. **/
    evalIn(xquery: xs:string, ID: xs:unsignedLong, vars?: item(), modules?: xs:unsignedLong, root?: xs:string): item();

    /** Returns the result of evaluating a module at the given path. **/
    invoke(path: xs:string, vars?: item(), vars?: Object, options?: (element()|map:map)): item();

    /** Returns the result of evaluating a function value. **/
    invokeFunction(path: function() as item(), options?: (element()|map:map)): item();

    /** Returns the result of evaluating a function value. **/
    invokeFunction(jsFunc: function(), options?: (element()|map:map)): item();

    /** [DEPRECATED: use xdmp:invoke with the database option instead] Returns the result of evaluating a module at the given path. **/
    invokeIn(uri: xs:string, ID: xs:unsignedLong, vars?: item(), modules?: xs:unsignedLong, root?: xs:string): item();

    /** Evaluate an expression in the context of the current evaluating statement. This differs from xdmp:eval in that xdmp:value preserves all of the context from the calling query, so you do not need to re-define namespaces, variables, and so on. Although the expression retains the context from the calling query, it is evaluated in its own transaction with same-statement isolation. **/
    value(expr: xs:string, map?: map:map): item();

    /** Evaluate a string as an XPath and return the corresponding node(s). Any value that is the result of xdmp:path is a valid input to xdmp:unpath. Any invalid inputs throw an XDMP-UNPATH exception. To evaluate non-XPath expressions, use xdmp:value. **/
    unpath(expr: xs:string, map?: map:map): item();

    /** Executes an XSLT stylesheet against a node. **/
    xsltInvoke(path: xs:string, input?: node(), params?: map:map, options?: (element()|map:map)): document-node();

    /** Executes an XSLT stylesheet against a node. **/
    xsltEval(stylesheet: node(), input?: node(), params?: map:map, options?: (element()|map:map)): document-node();

    /** Place the specified module on the task queue for evaluation. **/
    spawn(path: xs:string, vars?: item(), vars?: Object, options?: (element()|map:map)): item();

    /** Place the specified function value on the task queue for evaluation. **/
    spawnFunction(function: function() as item(), options?: (element()|map:map)): item();

    /** [DEPRECATED: use xdmp:spawn with the database option instead] Place the specified module on the task queue for evaluation. It will be evaluated in the given database. **/
    spawnIn(path: xs:string, ID: xs:unsignedLong, vars?: item(), modules?: xs:unsignedLong, root?: xs:string): void;


  }
}
