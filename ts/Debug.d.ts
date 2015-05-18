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
    invoke(uri: xs:string, vars?: item(), options?: (element()|map:map)): xs:unsignedLong;

    /** Evaluate a string as an XQuery for debugging. Module evaluation will be stopped at the start of the first expression. Returns the request ID after creating the request. Requests evaluated for debugging with dbg:eval are evaluated on the task server, not on the App Server in which they are initiated. **/
    eval(xquery: xs:string, vars?: item(), options?: (element()|map:map)): xs:unsignedLong;

    /** Attach to a request and stop it for debugging. **/
    attach(requestId: xs:unsignedLong): void;

    /** Detach from a stopped request. All breakpoints set will be cancelled and the request will continue evaluating. **/
    detach(requestId: xs:unsignedLong): void;

    /** Connect to a Server (http, xdbc, or task) for debugging. Any running requests will be stopped and new requests will stop at the first expression. **/
    connect(server: xs:unsignedLong): void;

    /** Return the ID's of servers that are connected by the debugger. **/
    connected(): xs:unsignedLong;

    /** End the debugging of a server. Already stopped requests will remain stopped. New requests will evaluate without stopping at first expression. **/
    disconnect(server: xs:unsignedLong): void;

    /** Return the debugging status of given requests. **/
    status(requestId: xs:unsignedLong): element(dbg:requests);

    /** Return the request ID's of stopped requests in a given server. If server isn't supplied, returns a list of all stopped requests on host. **/
    stopped(server?: xs:unsignedLong): xs:unsignedLong;

    /** Return the request ID's of attached requests in a given server. If server isn't supplied, returns a list of all attached requests on host. **/
    attached(server?: xs:unsignedLong): xs:unsignedLong;

    /** Return the stack trace for a given request. **/
    stack(request: xs:unsignedLong): element(dbg:stack);

    /** Continue evaluation of the request until the end of the current expression. **/
    out(request: xs:unsignedLong): void;

    /** Continue evaluation of the request until the end of the current function. If evaluation is not inside of a function, this request is equivalent to continue(). **/
    finish(request: xs:unsignedLong): void;

    /** Continue evaluation of the request until the beginning or end of an expression. **/
    step(request: xs:unsignedLong): void;

    /** Continue evaluation of the request until the beginning or end of an expression that is not a descendant of the current expression. **/
    next(request: xs:unsignedLong): void;

    /** Continue evaluation of the request. **/
    continue(request: xs:unsignedLong): void;

    /** Wait until at least one of the given requests stops or all complete evaluating. Wait will return the empty sequence after a requested timeout if none of the requests have stopped. Otherwise, it returns the request-id of a stopped (or finished) request. **/
    wait(requestId: xs:unsignedLong, timeout: xs:unsignedLong): xs:unsignedLong;

    /** Set a breakpoint at the given expression ID. If no expression ID is given, then the identified request is stopped. **/
    break(request: xs:unsignedLong, expression?: xs:unsignedLong): void;

    /** Clear a breakpoint at the given expression ID. **/
    clear(request: xs:unsignedLong, expression: xs:unsignedLong): void;

    /** Returns a sequence of expression ID's representing existing breakpoints for the given request. **/
    breakpoints(request: xs:unsignedLong): xs:unsignedLong;

    /** Placing this call in XQuery will instruct the evaluator to stop a request for debugging. **/
    stop(): void;

    /** Evaluate an expression in the context of the identified stopped request. If no expression is given and the request is stopped at the end of an expression, then the expression's value is returned. **/
    value(request: xs:unsignedLong, expr?: xs:string): item();

    /** Returns a sequence of expression ID's found on a given line of a stopped request. **/
    line(request: xs:unsignedLong, uri: xs:string, line: xs:unsignedInt): xs:unsignedLong;

    /** Returns the expression ID representing the function defined in a module with a given name. **/
    function(request: xs:unsignedLong, uri: xs:string, function: xs:QName): xs:unsignedLong;

    /** Returns a description/representation of a given expression. **/
    expr(request: xs:unsignedLong, expression: xs:unsignedLong): element(dbg:expression);


  }
}
