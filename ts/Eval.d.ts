// Type definitions for Eval
// Definitions: 

/****/

interface xdmpFunctions {

    /** Returns the result of evaluating a string as a Javascript program. **/
  eval(javascript: string, vars?: Object, options?: Object): string;

    /** Returns the result of evaluating a string as an XQuery module. For details, see the XQuery function xdmp:eval. **/
  xqueryEval(xquery: string, vars?: Object, options?: Object): string;

    /** Returns the result of evaluating a module at the given path. **/
  invoke(path: string, vars?: Object, options?: Object): string;

    /** Returns the result of evaluating a function value. **/
  invokeFunction(jsFunc: () => any, options?: Object): string;

    /** Executes an XSLT stylesheet against a node. **/
  xsltInvoke(path: string, input?: Node, params?: Object, options?: Object): Node;

    /** Executes an XSLT stylesheet against a node. **/
  xsltEval(stylesheet: Node, input?: Node, params?: Object, options?: Object): Node;

    /** Place the specified module on the task queue for evaluation. **/
  spawn(path: string, vars?: Object, options?: Object): string;

}
declare var xdmp:xdmpFunctions
