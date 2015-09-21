// Type definitions for OOXML Zip
// Definitions: 

/**
      The ZIP Package function module is installed as the following 
		  file:
    install_dir/Modules/MarkLogic/openxml/package.xqy
    where install_dir is the directory in which 
	    MarkLogic Server is installed.
    To use the package.xqy module in your own 
    XQuery modules, 
    include the following line in your XQuery prolog:
    
import module namespace ooxml="http://marklogic.com/openxml" 
	    at "/MarkLogic/openxml/package.xqy";
    The ZIP Package functions are used to unpack Microsoft Office
	    Open XML documents from their compressed ZIP format into an
	    expanded package with a directory structure, and then to 
	    insert each of those documents in a database.  You can use
	    these functions with any document that is a ZIP package,
	    including Office 2007 documents.
    
  **/

interface ooxmlFunctions {

    /** This function returns the list of files in the zip package. **/
  packageUris(package: Node): string;

    /** This function returns the documents within the zip package. Typically, the parts are returned as document nodes. They are returned in the order the package uris are returned, which is the manifest order. **/
  packageParts(package: Node): Node;

    /** This function inserts one document in the database for each part at the specified URI. If a directory is given, then all parts are inserted into documents in that directory, with the rest of the URI determined by the $uris specified (typically from the manifest of a zip file or Office document). **/
  packagePartsInsert(directory: string, packageUris: string, packageParts: Node, permissions?: string, collections?: string, quality?: Object, forestIds?: string): void;

}
declare var ooxml:ooxmlFunctions
