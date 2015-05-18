// Type definitions for DebugBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Debug.xml

/**
Implements a library of functions which allow developers to build an IDE
which will allow runtime debugging of query requests against MarkLogic Server.
The debug functions allow you to build an application that does things
like attach to a running server, set breakpoints in a query, examine the
value of variables at a point in query execution, and so on.  Note that the
debug function library is not a debugger, but provides server-side support
to build an application that can debug queries against MarkLogic Server.
**/

declare module DebugBuiltins {

  interface dbg {

    /** Invoke a module for debugging. Module evaluation will be stopped at the start of the first expression. Returns the request-id after creating the request. **/
    invoke(uri: string, vars?: item(), options?: map)): number;

    /** Evaluate a string as an XQuery for debugging. Module evaluation will be stopped at the start of the first expression. Returns the request ID after creating the request. Requests evaluated for debugging with dbg:eval are evaluated on the task server, not on the App Server in which they are initiated. **/
    eval(xquery: string, vars?: item(), options?: map)): number;

    /** Attach to a request and stop it for debugging. **/
    attach(requestId: number): void;

    /** Detach from a stopped request. All breakpoints set will be cancelled and the request will continue evaluating. **/
    detach(requestId: number): void;

    /** Connect to a Server (http, xdbc, or task) for debugging. Any running requests will be stopped and new requests will stop at the first expression. **/
    connect(server: number): void;

    /** Return the ID's of servers that are connected by the debugger. **/
    connected(): number;

    /** End the debugging of a server. Already stopped requests will remain stopped. New requests will evaluate without stopping at first expression. **/
    disconnect(server: number): void;

    /** Return the debugging status of given requests. **/
    status(requestId: number): requests);

    /** Return the request ID's of stopped requests in a given server. If server isn't supplied, returns a list of all stopped requests on host. **/
    stopped(server?: number): number;

    /** Return the request ID's of attached requests in a given server. If server isn't supplied, returns a list of all attached requests on host. **/
    attached(server?: number): number;

    /** Return the stack trace for a given request. **/
    stack(request: number): stack);

    /** Continue evaluation of the request until the end of the current expression. **/
    out(request: number): void;

    /** Continue evaluation of the request until the end of the current function. If evaluation is not inside of a function, this request is equivalent to continue(). **/
    finish(request: number): void;

    /** Continue evaluation of the request until the beginning or end of an expression. **/
    step(request: number): void;

    /** Continue evaluation of the request until the beginning or end of an expression that is not a descendant of the current expression. **/
    next(request: number): void;

    /** Continue evaluation of the request. **/
    continue(request: number): void;

    /** Wait until at least one of the given requests stops or all complete evaluating. Wait will return the empty sequence after a requested timeout if none of the requests have stopped. Otherwise, it returns the request-id of a stopped (or finished) request. **/
    wait(requestId: number, timeout: number): number;

    /** Set a breakpoint at the given expression ID. If no expression ID is given, then the identified request is stopped. **/
    break(request: number, expression?: number): void;

    /** Clear a breakpoint at the given expression ID. **/
    clear(request: number, expression: number): void;

    /** Returns a sequence of expression ID's representing existing breakpoints for the given request. **/
    breakpoints(request: number): number;

    /** Placing this call in XQuery will instruct the evaluator to stop a request for debugging. **/
    stop(): void;

    /** Evaluate an expression in the context of the identified stopped request. If no expression is given and the request is stopped at the end of an expression, then the expression's value is returned. **/
    value(request: number, expr?: string): item();

    /** Returns a sequence of expression ID's found on a given line of a stopped request. **/
    line(request: number, uri: string, line: number): number;

    /** Returns the expression ID representing the function defined in a module with a given name. **/
    function(request: number, uri: string, function: QName): number;

    /** Returns a description/representation of a given expression. **/
    expr(request: number, expression: number): expression);


  }
}
