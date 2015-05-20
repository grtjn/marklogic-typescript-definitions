// Type definitions for AppServerBuiltins
// Definitions: 

/**
  The application server built-in functions are XQuery functions for many
  HTTP application server functions.  Many of the application server
  functions (for example, xdmp:get-request-field,
  xdmp:login, etc.) are
  executable only on HTTP servers; those functions all have
  no effect and return the empty sequence when run from an XDBC server.
**/

declare module AppServerBuiltins {

  interface xdmp {

    /** Converts plaintext into URL-encoded string. **/
    urlEncode(plaintext: String, noSpacePlus?: Object): String;

    /** Converts URL-encoded string to plaintext. **/
    urlDecode(encoded: String): String;

    /** Logs in a user on an application server that is using application-level authentication and sends a session cookie containing the session ID to the user's browser. Returns true on success, false on failure. If the user calling this function has the xdmp:login privilege, this function can be called without a password or with the empty sequence as the password. In this case, login will succeed if the specified user exists. Therefore, use the xdmp:login privilege carefully, as any user with that privilege will be able to execute code that uses the xdmp:login function to log in as any user. Note that only HTTP App Servers allow application-level authentication, and therefore this function only works on an HTTP App Server; it always returns false against an XDBC server. **/
    login(name: String, password?: String, setSession?: Object, roleNames?: String): Object;

    /** This function is used for kerberos GSS authentication in application level authentication. **/
    gssServerNegotiate(inputToken: String): Node;

    /** Logs the current user out of the session on the server. The result is that the current user is set to the default user defined in application-level authentication. The session remains on the server until it expires. **/
    logout(): void;

    /** Returns a sequence of the request field names. **/
    getRequestFieldNames(): String;

    /** Returns the value of a named request field. If the request field is a multipart/form-data type in a POST form, you can use xdmp:get-request-field for file upload applications (see the second examplesecond example below). **/
    getRequestField(name: String, defaultVal?: String): Object;

    /** Returns a list of filenames from a multipart request for the field name specified. Returns an empty sequence for a field that does not exist. **/
    getRequestFieldFilename(fieldName: String): String;

    /** This function is used to extract the content type from the request field. It returns a sequence of content types, one for each filename, in the same order as the filenames returned from xdmp:get-request-field-filename. **/
    getRequestFieldContentType(fieldName: String): String;

    /** Returns a sequence of request header names. **/
    getRequestHeaderNames(): String;

    /** Returns the value of a named request header. **/
    getRequestHeader(name: String, defaultVal?: String): String;

    /** If this App Server is using application-level authentication, returns the username in the last successful call to xdmp:login. Otherwise, returns the username from the Authorization header of this App Server request. **/
    getRequestUsername(): String;

    /** Returns the HTTP request method. **/
    getRequestMethod(): String;

    /** Returns the HTTP request path. **/
    getRequestPath(): String;

    /** Returns the path of the module that is being invoked. Note that this is different from xdmp:get-request-path when the module is invoked because an invoke or eval does not create a new request. **/
    getInvokedPath(): String;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the rewritten URL. To get the URL before rewriting occurs, use xdmp:get-original-url. **/
    getRequestUrl(): String;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the URL before rewriting occurs. To get the URL after rewriting occurs, use xdmp:get-request-url. **/
    getOriginalUrl(): String;

    /** Returns the current error format for the request. The error format's default value is configured in the App Server. It may be overwritten in the rewriter. The return value is one "xml" , "html" , "json" or "compatible". **/
    getRequestErrorFormat(): String;

    /** Returns the port of the request. **/
    getRequestPort(): Number;

    /** Returns a sequence of the HTTP session field names from the session created by the xdmp:login function. **/
    getSessionFieldNames(): String;

    /** Returns the value of a named session field from the session created by the xdmp:login function. **/
    getSessionField(name: String, defaultVal?: String): String;

    /** Sets the value of a named session field for the session created by the xdmp:login function. **/
    setSessionField(name: String, value: String): String;

    /** Returns a sequence of the server field names. **/
    getServerFieldNames(): String;

    /** Returns the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. Server fields are commonly used with the system Plugin Framework. **/
    getServerField(name: String, defaultVal?: String): String;

    /** Sets the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. **/
    setServerField(name: String, value: String): String;

    /** Sets the privilege of a named server field. **/
    setServerFieldPrivilege(name: String, privilege: String): void;

    /** Redirects the App Server response to a given location. **/
    redirectResponse(name: String): void;

    /** Sets the response code and message. **/
    setResponseCode(code: Number, message: String): void;

    /** Returns two nodes, the first containing the HTTP response code and the second containing the HTTP response message. **/
    getResponseCode(): String;

    /** Sets the response content-type. **/
    setResponseContentType(name: String): void;

    /** Sets the response encoding. **/
    setResponseEncoding(encoding: String): void;

    /** Returns the encoding that the response from this server is in. **/
    getResponseEncoding(): String;

    /** Changes the time limit for an actively running request to the specified value. If you do not supply values for the last three parameters, the function sets the time limit for the current request. **/
    setRequestTimeLimit(timeLimit: Number, hostID?: String, serverID?: String, requestID?: String): void;

    /** Adds an HTTP response header field. **/
    addResponseHeader(name: String, value: String): void;

    /** Returns true if a given URI refers to a file which exists on the current application server. Only returns true if the modules on the App Server is set to file system; always returns false if you are using a database for your modules. false Returns false if the file does not exist. Returns the empty sequence if the URI is the empty sequence. **/
    uriIsFile(uri: String): Object;

    /** Returns as a string the internet address of the client from which the HTTP server request is issued. Returns the empty sequence if it is not called from an HTTP server. **/
    getRequestClientAddress(): String;

    /** Returns as a string the request protocol (either "http" or "https") Returns the empty sequence if it is not called from an HTTP server. **/
    getRequestProtocol(): String;

    /** Returns the PEM encoded client certificate if one was presented. Returns the empty sequence if it is not called from an HTTP server, if SSL is not enabled for the HTTP server, or if no certificate is available. A clients will not send its certificate unless the server requests it. **/
    getRequestClientCertificate(): String;

    /** For PUT requests, returns the body of the request. For POST requests, returns the body of the request if it is not of content-type application/x-www-form-urlencoded. Returns the empty sequence if it is not called from an application server. **/
    getRequestBody(format?: String): Object;

    /** Returns the URL of the URL rewriter handler for this application server. An empty string is returned if there is no rewrite handler. **/
    getUrlRewriterPath(): String;


  }
}
