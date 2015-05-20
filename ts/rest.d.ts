// Type definitions for restModule
// Definitions: 

/**

The REST library enables you to create RESTful functions that are independent 
of the language used in applications. 
	

The REST library consists of a set of XQuery functions that support URL rewriting and 
endpoint validation and a MarkLogic REST vocabulary that simplifies the task of 
describing web service endpoints. The REST vocabulary is used to write declarative 
descriptions of the endpoints. These descriptions include the mapping of URL parts
to parameters and conditions that must be met in order for the incoming request to 
be mapped to an endpoint.

The REST library is installed as the following file:
   install_dir/Modules/MarkLogic/appservices/utils/rest.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the rest.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

  
  import module namespace rest = "http://marklogic.com/appservices/rest"  
      at "/MarkLogic/appservices/utils/rest.xqy";
  
The library uses the rest: namespace, which is 
   not predefined in the server.
 
**/

declare module restModule {

  interface rest {

    /** This function is used in the URL rewriter to map the incoming request to an endpoint. By default, if you supply only options, all aspects of the request environment are used for rewriting. If you supply specific criteria, the filter is less strict, allowing the same options block to be used for simple url-based rewriting as well as request processing. **/
    rewrite(options: Options), matchCriteria: String): String;

    /** This function formats the specified error structure. **/
    reportError(error: Node): Node;

    /** This function validates the specified options node. Validation includes both schema validation and some additional rule-based validation. An empty sequence indicates valid options and any problems are reported via rest:report elements. **/
    checkOptions(options: Options)): Report);

    /** This function extracts all of the query parameters and returns them in a map. This does not include the parameters that would be derived from matching the URI string. No error checking or type conversion is performed by this function. The parameters returned by this function are all strings, as they are not type checked. **/
    getRawQueryParams(): Object;

    /** This function returns the request element in the options node that matches the specified URI. If you only specify options parameter, all criteria in the request environment are considered. If you supply specific criteria, the filter is less strict, allowing the same options block to be used for simple url-based rewriting as well as request processing. **/
    matchingRequest(options: Options), matchCriteria: String): Request);

    /** This function is used in the endpoint main module to parse the incoming request against the options. It returns a map that contains all of the parameters as typed values. Processing the request also checks all of the associated conditions and will raise an error if any condition is not met. If the request is processed successfully, then all of the conditions have been met and the returned map contains all of the parameters. If not, an error occurs. **/
    processRequest(request: Request)): Object;

    /** This function takes a request element and returns a report of the problems found. If this function does not return an empty sequence, you have made a mistake and the library will not perform reliably. **/
    checkRequest(options: Request)): Report);


  }
}
