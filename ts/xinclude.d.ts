// Type definitions for XIncludeModule
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/xinclude.xml

/**
		This is the XInclude module, which is used with the 
			modular documents CPF application.
		To use the XInclude module as part of your own XQuery 
			module, include the following line in your 
			XQuery prolog: 
import module namespace xinc = "http://marklogic.com/xinclude"
         at "/MarkLogic/xinclude/xinclude.xqy";
The library namespace prefix xinc is not predefined
in the server.

	**/

declare module XIncludeModule {

  interface xinc {

    /** This function performs a single level expansion of a single XInclude reference. XInclude references in the referenced node will not be expanded. **/
    linkExpand(context: node(), ref: include)): node();

    /** This function recursively examines the node for XInclude references and expands them, following the rules of the XInclude specification. The result is a node in which all the XInclude references have been resolved, or an error if there were unresolvable references with no fallback specifications. **/
    nodeExpand(node: node()): node();

    /** This function returns a list of all the distinct URIs of documents referenced (either directly or indirectly) in the expansion of the node. **/
    linkReferences(node: node()): string;


  }
}
