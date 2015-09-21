// Type definitions for JSON
// Definitions: 

/**
		This is the JSON module used for customized tranformation 
			from XML to and from JSON.
		To use the JSON module as part of your own XQuery 
			module, include the following line in your 
			XQuery prolog: 
import module namespace json = "http://marklogic.com/xdmp/json"
         at "/MarkLogic/json/json.xqy";
	    The JSON module employs a concept of 'strategies'.  Strategies 
		    are different methods of transforming XML to JSON or JSON 
		    to XML.  Different strategies tackle different use 
		    cases.
	    The basic strategy is used by the REST API and 
		    handles the use case of transforming arbitrary JSON into a 
		    fixed XML structure which is designed to be efficiently 
		    stored and indexed in MarkLogic.  
		    The basic strategy is semantically 
		    roundtrippable from JSON to XML back to JSON.  The 
		    basic strategy is 
		    used when no configuration object is specified.
	    The full strategy targets the opposite use case 
		    as the default (basic) strategy.  
		    The full strategy
		    takes arbitrary XML and produces a fixed JSON structure 
		    which preserves most of the semantics of the XML 
		    document.
	    The custom strategy allows customization of the 
		    JSON and XML transformation and produces more reasonable 
		    looking XML or JSON at the expense of supporting a 
		    smaller subset of XML document structures.
	**/

interface jsonFunctions {

    /** This function creates a configuration object for a specified strategy. **/
  config(strategy: string): Object;

    /** This function checks a json configuration object and returns a report. **/
  checkConfig(config?: Object): Node;

    /** This function transforms an XML document to JSON using the default ("basic") strategy if none is supplied. **/
  transformToJson(node: Node, config?: Object): string;

    /** This function transforms an XML document to JSON and returns an object. **/
  transformToJsonObject(node: Node, config?: Object): string;

    /** This function transforms an XML document to JSON and returns an xml element. **/
  transformToJsonXml(node: Node, config?: Object): Node;

    /** This function transforms a JSON document to XML using the default ("basic") strategy. **/
  transformFromJson(json: string, config?: Object): string;

}
declare var json:jsonFunctions
