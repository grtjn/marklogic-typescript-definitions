// Type definitions for OOXML
// Definitions: 

/**
      The WordProcessingML function module is installed as the following 
		  file:
    install_dir/Modules/MarkLogic/openxml/word-processing-ml.xqy
    where install_dir is the directory in which 
	    MarkLogic Server is installed.
    To use the word-processing-ml.xqy module in your own 
    XQuery modules, 
    include the following line in your XQuery prolog:
    
import module namespace ooxml="http://marklogic.com/openxml" 
	    at "/MarkLogic/openxml/word-processing-ml.xqy";
    The WordProcessingML functions are used with the Word 2007 documents.
  **/

interface ooxmlFunctions {

    /** This function updates document or paragraph node(s) (from a Word 2007 document) so that all similar runs are merged, retaining formatting, and removing text split across elements. **/
  runsMerge(nodes: Node): Node;

}
declare var ooxml:ooxmlFunctions
