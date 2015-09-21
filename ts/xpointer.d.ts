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

interface xpFunctions {

    /** This function.... **/
  parseXpointer(xpointer: string): Node;

    /** This function.... **/
  pathFromElementScheme(part: string): string;

    /** This function.... **/
  altPathFromElementScheme(part: string): string;

    /** This function.... **/
  doDereference(context: Node, path: string, nsBindings: string): Node;

    /** This function resolves an XPointer in the context of a particular node. **/
  dereference(context: Node, xpointer: string): Node;

}
declare var xp:xpFunctions
