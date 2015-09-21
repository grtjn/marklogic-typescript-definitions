// Type definitions for ClustererBuiltins
// Definitions: 

/**
The clusterer built-in functions perform dynamic clustering of nodes.
The result clusters are represented in XML. The clusterer APIs and the XML output
from cts:cluster conform to the
clusterer.xsd schema, located in the Config directory
under the directory in which MarkLogic Server is installed.

**/

interface ctsFunctions {

    /** Produces a set of clusters from a sequence an array of nodes. The nodes can be any set of nodes, and are typically the result of a cts:search cts.search operation. **/
  cluster(nodes: Object, options?: Object): Object;

}
declare var cts:ctsFunctions
