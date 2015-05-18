// Type definitions for ProfileBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Profile.xml

/**
Implements a library of functions which allow developers to profile
evaluation of XQuery programs. An XQuery program is defined as an XQuery
main module, fully expanded with any XQuery library modules needed for its
evaluation.
To profile an XQuery program, set the profile allow option
to true in the App Server or task server in which
the request is serviced.  If you request a profile report for an XQuery
program whose App Server does not have profiling enabled (and if
prof:enable is not called before generating the profile
report), then the profile APIs do not profile the request, and the APIs
that generate the report return the empty sequence.
The profile functions use the prof: namespace prefix, which is
predefined in the server.
**/

declare module ProfileBuiltins {

  interface prof {

    /** Enable profiling for this request. Profiling may be enabled or disabled as often as you like. Enabling while a request is enabled has no effect. If profiling is not allowed for the App Server, this function does nothing. Note that profiling does not cross eval/invoke boundaries. If the request being profiled calls xdmp:eval or xdmp:invoke, the individual expressions in that code will not be profiled. The overall time taken by the called code will appear as a single call in the caller's profiling report. **/
    enable(requestId: xs:unsignedLong): void;

    /** Disable profiling for this request. Profiling may be enabled or disabled as often as you like. Disabling does not clear accumulated profiling statistics. Disabling while disabled has no effect. If profiling is not allowed for the App Server, this function does nothing. **/
    disable(requestId: xs:unsignedLong): void;

    /** Clear any accumulated profiling statistics for the requests. If profiling has never been started for the request, nothing is done. If profiling is not allowed for the App Server, this function does nothing. **/
    reset(requestId: xs:unsignedLong): void;

    /** Return a prof:report node containing the current state of profiling statistics for the given request. If profiling has never been enabled for the request, the empty sequence is returned. If profiling is not allowed for the App Server, this function returns an empty sequence. **/
    report(requestId: xs:unsignedLong): element(prof:report);

    /** Returns the value of the Profile Allow setting for the App Server or Task Server upon which the target request is running. This function is useful to determine if subsequent calls to profiling functions will be effective. **/
    allowed(requestId: xs:unsignedLong): xs:boolean;

    /** Evaluate a string as an XQuery for profiling. A prof:report node will be prepended to any output produced by evaluating the string. If profiling is not allowed for the App Server, this function will throw a PROF-PROFILEALLOW exception. Note that profiling does not cross eval/invoke boundaries. If the request being profiled calls xdmp:eval or xdmp:invoke, the individual expressions in that code will not be profiled. The overall time taken by the called code will appear as a single call in the caller's profiling report. **/
    eval(xquery: xs:string, vars?: item(), options?: (element()|map:map)): item();

    /** Profiles and returns the result of evaluating a module at the given path. Any result produced by the evaluation will be prepended with a prof:report node containing timing and count information about the evaluation. If profiling is not allowed for the App Server, this function will throw a PROF-PROFILEALLOW exception. Note that profiling does not cross eval/invoke boundaries. If the request being profiled calls xdmp:eval or xdmp:invoke, the individual expressions in that code will not be profiled. The overall time taken by the called code will appear as a single call in the caller's profiling report. **/
    invoke(path: xs:string, vars?: item(), options?: (element()|map:map)): item();

    /** Evaluate an expression in the context of the current evaluating statement and return the profiling report for its evaluation. This differs from prof:eval in that prof:value preserves all of the context from the calling query, so you do not need to re-define namespaces, variables, and so on. Although the expression retains the context from the calling query, it is evaluated in its own transaction. **/
    value(expr: xs:string): item();

    /** Evaluate a string as an XSLT stylesheet for profiling. A prof:report node will be prepended to any output produced by evaluating the string. If profiling is not allowed for the App Server, this function will throw a PROF-PROFILEALLOW exception. Note that profiling does not cross eval/invoke boundaries. If the request being profiled calls xdmp:eval or xdmp:invoke, the individual expressions in that code will not be profiled. The overall time taken by the called code will appear as a single call in the caller's profiling report. **/
    xsltEval(stylesheet: node(), input?: node(), params?: map:map, options?: (element()|map:map)): item();

    /** Profiles and returns the result of evaluating an XSLT stylesheet at the given path. Any result produced by the evaluation will be prepended with a prof:report node containing timing and count information about the evaluation. If profiling is not allowed for the App Server, this function will throw a PROF-PROFILEALLOW exception. Note that profiling does not cross eval/invoke boundaries. If the request being profiled calls xdmp:eval or xdmp:invoke, the individual expressions in that code will not be profiled. The overall time taken by the called code will appear as a single call in the caller's profiling report. **/
    xsltInvoke(path: xs:string, input?: node(), params?: map:map, options?: (element()|map:map)): item();


  }
}
