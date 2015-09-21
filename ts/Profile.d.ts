// Type definitions for ProfileBuiltins
// Definitions: 

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

interface profFunctions {

}
declare var prof:profFunctions
