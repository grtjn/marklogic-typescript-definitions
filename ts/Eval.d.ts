// Type definitions for Eval
// Definitions: 

/****/

interface xdmpFunctions {

    /** Returns the result of evaluating a string as a Javascript program. **/
  eval(javascript: string, vars?: Object, options?: MLNode<any>|{[key:string]:any}): string;

    /** Returns the result of evaluating a string as an XQuery module. For details, see the XQuery function xdmp:eval. **/
  xqueryEval(xquery: string, vars?: Object, options?: MLNode<any>|{[key:string]:any}): string;

    /** Returns the result of evaluating a module at the given path. **/
  invoke(path: string, vars?: Object, options?: MLNode<any>|{[key:string]:any}): string;

    /** Returns the result of evaluating a function value. **/
  invokeFunction(jsFunc: () => any, options?: MLNode<any>|{[key:string]:any}): string;

    /** Executes an XSLT stylesheet against a node. **/
  xsltInvoke(path: string, input?: MLNode<any>, params?: {[key:string]:any}, options?: MLNode<any>|{[key:string]:any}): DocumentNode<any>;

    /** Executes an XSLT stylesheet against a node. **/
  xsltEval(stylesheet: MLNode<any>, input?: MLNode<any>, params?: {[key:string]:any}, options?: MLNode<any>|{[key:string]:any}): DocumentNode<any>;

    /** Place the specified module on the task queue for evaluation. **/
  spawn(path: string, vars?: Object, options?: MLNode<any>|{[key:string]:any}): string;

}
declare var xdmp:xdmpFunctions
