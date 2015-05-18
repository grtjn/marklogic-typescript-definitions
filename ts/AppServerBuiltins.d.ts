// Type definitions for AppServerBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/AppServerBuiltins.xml

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
    urlEncode(plaintext: string, noSpacePlus?: boolean): string;

    /** Converts URL-encoded string to plaintext. **/
    urlDecode(encoded: string): string;

    /** Logs in a user on an application server that is using application-level authentication and sends a session cookie containing the session ID to the user's browser. Returns true on success, false on failure. If the user calling this function has the xdmp:login privilege, this function can be called without a password or with the empty sequence as the password. In this case, login will succeed if the specified user exists. Therefore, use the xdmp:login privilege carefully, as any user with that privilege will be able to execute code that uses the xdmp:login function to log in as any user. Note that only HTTP App Servers allow application-level authentication, and therefore this function only works on an HTTP App Server; it always returns false against an XDBC server. **/
    login(name: string, password?: string, setSession?: boolean, roleNames?: string): boolean;

    /** This function is used for kerberos GSS authentication in application level authentication. **/
    gssServerNegotiate(inputToken: string): element();

    /** Logs the current user out of the session on the server. The result is that the current user is set to the default user defined in application-level authentication. The session remains on the server until it expires. **/
    logout(): void;

    /** Returns a sequence of the request field names. **/
    getRequestFieldNames(): string;

    /** Returns the value of a named request field. If the request field is a multipart/form-data type in a POST form, you can use xdmp:get-request-field for file upload applications (see the second examplesecond example below). **/
    getRequestField(name: string, default?: string): Object;

    /** Returns a list of filenames from a multipart request for the field name specified. Returns an empty sequence for a field that does not exist. **/
    getRequestFieldFilename(fieldName: string): string;

    /** This function is used to extract the content type from the request field. It returns a sequence of content types, one for each filename, in the same order as the filenames returned from xdmp:get-request-field-filename. **/
    getRequestFieldContentType(fieldName: string): string;

    /** Returns a sequence of request header names. **/
    getRequestHeaderNames(): string;

    /** Returns the value of a named request header. **/
    getRequestHeader(name: string, default?: string): string;

    /** If this App Server is using application-level authentication, returns the username in the last successful call to xdmp:login. Otherwise, returns the username from the Authorization header of this App Server request. **/
    getRequestUsername(): string;

    /** Returns the HTTP request method. **/
    getRequestMethod(): string;

    /** Returns the HTTP request path. **/
    getRequestPath(): string;

    /** Returns the path of the module that is being invoked. Note that this is different from xdmp:get-request-path when the module is invoked because an invoke or eval does not create a new request. **/
    getInvokedPath(): string;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the rewritten URL. To get the URL before rewriting occurs, use xdmp:get-original-url. **/
    getRequestUrl(): string;

    /** Returns the portion of the URL following the host_name:port_number. The output does not include any fragment identifier supplied with the URL (that is, it does not include the # sign or anything following the # sign). Note that when a URL rewriter is used, this function returns the URL before rewriting occurs. To get the URL after rewriting occurs, use xdmp:get-request-url. **/
    getOriginalUrl(): string;

    /** Returns the current error format for the request. The error format's default value is configured in the App Server. It may be overwritten in the rewriter. The return value is one "xml" , "html" , "json" or "compatible". **/
    getRequestErrorFormat(): string;

    /** Returns the port of the request. **/
    getRequestPort(): number;

    /** Returns a sequence of the HTTP session field names from the session created by the xdmp:login function. **/
    getSessionFieldNames(): string;

    /** Returns the value of a named session field from the session created by the xdmp:login function. **/
    getSessionField(name: string, default?: item()): item();

    /** Sets the value of a named session field for the session created by the xdmp:login function. **/
    setSessionField(name: string, value: item()): item();

    /** Returns a sequence of the server field names. **/
    getServerFieldNames(): string;

    /** Returns the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. Server fields are commonly used with the system Plugin Framework. **/
    getServerField(name: string, default?: item()): item();

    /** Sets the value of a named server field. A server field is created with xdmp:set-server-field and stores a name/value pair in memory. The server field is available on the App Server in which it is set on the host in which the App Server runs, via xdmp:get-server-field; a server field that is set on one App Server is not available on other App Servers on that host or on the same App Server running on another host. **/
    setServerField(name: string, value: item()): item();

    /** Sets the privilege of a named server field. **/
    setServerFieldPrivilege(name: string, privilege: string): void;

    /** Redirects the App Server response to a given location. **/
    redirectResponse(name: string): void;

    /** Sets the response code and message. **/
    setResponseCode(code: number, message: string): void;

    /** Returns two nodes, the first containing the HTTP response code and the second containing the HTTP response message. **/
    getResponseCode(): item();

    /** Sets the response content-type. **/
    setResponseContentType(name: string): void;

    /** Sets the response encoding. **/
    setResponseEncoding(encoding: string): void;

    /** Returns the encoding that the response from this server is in. **/
    getResponseEncoding(): string;

    /** Changes the time limit for an actively running request to the specified value. If you do not supply values for the last three parameters, the function sets the time limit for the current request. **/
    setRequestTimeLimit(timeLimit: number, hostID?: number, serverID?: number, requestID?: number): void;

    /** Adds an HTTP response header field. **/
    addResponseHeader(name: string, value: string): void;

    /** Returns true if a given URI refers to a file which exists on the current application server. Only returns true if the modules on the App Server is set to file system; always returns false if you are using a database for your modules. false Returns false if the file does not exist. Returns the empty sequence if the URI is the empty sequence. **/
    uriIsFile(uri: string): boolean;

    /** Returns as a string the internet address of the client from which the HTTP server request is issued. Returns the empty sequence if it is not called from an HTTP server. **/
    getRequestClientAddress(): string;

    /** Returns as a string the request protocol (either "http" or "https") Returns the empty sequence if it is not called from an HTTP server. **/
    getRequestProtocol(): string;

    /** Returns the PEM encoded client certificate if one was presented. Returns the empty sequence if it is not called from an HTTP server, if SSL is not enabled for the HTTP server, or if no certificate is available. A clients will not send its certificate unless the server requests it. **/
    getRequestClientCertificate(): string;

    /** For PUT requests, returns the body of the request. For POST requests, returns the body of the request if it is not of content-type application/x-www-form-urlencoded. Returns the empty sequence if it is not called from an application server. **/
    getRequestBody(format?: string): Object;

    /** Returns the URL of the URL rewriter handler for this application server. An empty string is returned if there is no rewrite handler. **/
    getUrlRewriterPath(): string;


  }
}
