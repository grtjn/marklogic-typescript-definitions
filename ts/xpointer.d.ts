// Type definitions for XPointerModule
// Definitions: 

/**
		This is the XPointer module, which is used with the 
			modular documents CPF application.
		To use the XPointer module as part of your own XQuery 
			module, include the following line in your 
			XQuery prolog: 
import module namespace xp = "http://marklogic.com/xinclude/xpointer"
         at "/MarkLogic/xinclude/xpointer.xqy";
The library namespace prefix xp is not predefined
in the server.
	**/

declare module XPointerModule {

  interface xp {

    /** This function.... **/
    parseXpointer(xpointer: String): Part);

    /** This function.... **/
    pathFromElementScheme(part: String): String;

    /** This function.... **/
    altPathFromElementScheme(part: String): String;

    /** This function.... **/
    doDereference(context: Node, path: String, nsBindings: String): Node;

    /** This function resolves an XPointer in the context of a particular node. **/
    dereference(context: Node, xpointer: String): Node;


  }
}
