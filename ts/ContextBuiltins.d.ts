// Type definitions for ContextBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/ContextBuiltins.xml

/**
The context built-in functions are XQuery functions defined to obtain information from the dynamic context.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module ContextBuiltins {

  interface fn {

    /** Returns the context position from the dynamic context. (See Section C.2 Dynamic Context Components[XP].) If the context item is undefined, an error is raised [err:FONC0001]. **/
    position(): number;

    /** Returns the context size from the dynamic context. (See Section C.2 Dynamic Context Components[XP].) If the context item is undefined, an error is raised [err:FONC0001]. **/
    last(): number;

    /** Returns the current dateTime value (with timezone) from the dynamic context. (See Section C.2 Dynamic Context Components[XP].) This is an xs:dateTime that is current at some time during the evaluation of a query or transformation in which fn:current-dateTime() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-dateTime() is *implementation dependent*. **/
    currentDateTime(): dateTime;

    /** Returns xs:date(fn:current-dateTime()). This is an xs:date (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-date() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-date() is *implementation dependent*. **/
    currentDate(): date;

    /** Returns xs:time(fn:current-dateTime()). This is an xs:time (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-time() is executed. This function is *stable*. The precise instant during the query or transformation represented by the value of fn:current-time() is *implementation dependent*. **/
    currentTime(): time;

    /** Returns the value of the implicit timezone property from the dynamic context. Components of the dynamic context are discussed in Section C.2 Dynamic Context Components[XP]. **/
    implicitTimezone(): dayTimeDuration;

    /** Returns the value of the default collation property from the static context. Components of the static context are discussed in Section C.1 Static Context Components[XP]. The default collation property can never be undefined. If it is not explicitly defined, a system defined default codepoint is used. In the 1.0 XQuery dialect, if this is not provided, the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint) is used. In the 1.0-ml and 0.9-ml XQuery dialects, the MarkLogic-defined codepoint URI is used (http://marklogic.com/collation/codepoint). **/
    defaultCollation(): string;

    /** Returns the value of the base-uri property from the static context. If the base-uri property is undefined, the empty sequence is returned. Components of the static context are discussed in Section C.1 Static Context Components[XP]. **/
    staticBaseUri(): anyURI;


  }
}
