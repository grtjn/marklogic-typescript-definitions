// Type definitions for OfficeConvert
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Antenna.xml

/**
  Includes the Microsoft Office convert functions using the AntennaHouse
  technology.
**/

declare module OfficeConvert {

  interface xdmp {

    /** Converts a Microsoft Word document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
    wordConvert(doc: node(), filename: xs:string, options?: (element()|map:map)): node();

    /** Converts a Microsoft Excel document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
    excelConvert(doc: node(), filename: xs:string, options?: (element()|map:map)): node();

    /** Converts a Microsoft Powerpoint document to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. Does not convert Microsoft Office 2007 and later documents. **/
    powerpointConvert(doc: node(), filename: xs:string, options?: (element()|map:map)): node();


  }
}
