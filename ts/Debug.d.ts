// Type definitions for DebugBuiltins
// Definitions: 

/**
Implements a library of functions which allow developers to build an IDE
which will allow runtime debugging of query requests against MarkLogic Server.
The debug functions allow you to build an application that does things
like attach to a running server, set breakpoints in a query, examine the
value of variables at a point in query execution, and so on.  Note that the
debug function library is not a debugger, but provides server-side support
to build an application that can debug queries against MarkLogic Server.
**/

interface dbgFunctions {

}
declare var dbg:dbgFunctions
