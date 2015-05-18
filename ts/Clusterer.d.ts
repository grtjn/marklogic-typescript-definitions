// Type definitions for ClustererBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Clusterer.xml

/**
The clusterer built-in functions perform dynamic clustering of nodes.
The result clusters are represented in XML. The clusterer APIs and the XML output
from cts:cluster conform to the
clusterer.xsd schema, located in the Config directory
under the directory in which MarkLogic Server is installed.

**/

declare module ClustererBuiltins {

  interface cts {

    /** Produces a set of clusters from a sequence an array of nodes. The nodes can be any set of nodes, and are typically the result of a cts:search cts.search operation. **/
    cluster(nodes: node(), nodes: Array, options?: map)): Object;


  }
}
