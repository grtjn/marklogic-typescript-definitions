// Type definitions for Eval
// Definitions: 

/****/

declare module Eval {

  interface xdmp {

    /** Returns the result of evaluating a string as a Javascript program. **/
    eval(javascript: String, vars?: Object, options?: Object): String;

    /** Returns the result of evaluating a string as an XQuery module. For details, see the XQuery function xdmp:eval. **/
    xqueryEval(xquery: String, vars?: Object, options?: Object): String;

    /** Returns the result of evaluating a module at the given path. **/
    invoke(path: String, vars?: Object, options?: Object): String;

    /** Returns the result of evaluating a function value. **/
    invokeFunction(jsFunc: () => any, options?: Object): String;

    /** Executes an XSLT stylesheet against a node. **/
    xsltInvoke(path: String, input?: Node, params?: Object, options?: Object): Node;

    /** Executes an XSLT stylesheet against a node. **/
    xsltEval(stylesheet: Node, input?: Node, params?: Object, options?: Object): Node;

    /** Place the specified module on the task queue for evaluation. **/
    spawn(path: String, vars?: Object, options?: Object): String;


  }
}
