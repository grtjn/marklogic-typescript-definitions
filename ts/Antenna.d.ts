// Type definitions for OfficeConvert
// Definitions: 

/**
  Includes the Microsoft Office convert functions using the AntennaHouse
  technology.
**/

interface xdmpFunctions {

    /** Converts a Microsoft Word document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  wordConvert(doc: Node, filename: string, options?: Object): Node;

    /** Converts a Microsoft Excel document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  excelConvert(doc: Node, filename: string, options?: Object): Node;

    /** Converts a Microsoft Powerpoint document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  powerpointConvert(doc: Node, filename: string, options?: Object): Node;

}
declare var xdmp:xdmpFunctions
