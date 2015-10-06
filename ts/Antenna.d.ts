// Type definitions for OfficeConvert
// Definitions: 

/**
  Includes the Microsoft Office convert functions using the AntennaHouse
  technology.
**/

interface xdmpFunctions {

    /** Converts a Microsoft Word document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  wordConvert(doc: MLNode<any>, filename: string, options?: MLNode<any>|{[key:string]:any}): MLNode<any>;

    /** Converts a Microsoft Excel document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  excelConvert(doc: MLNode<any>, filename: string, options?: MLNode<any>|{[key:string]:any}): MLNode<any>;

    /** Converts a Microsoft Powerpoint document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
  powerpointConvert(doc: MLNode<any>, filename: string, options?: MLNode<any>|{[key:string]:any}): MLNode<any>;

}
declare var xdmp:xdmpFunctions
