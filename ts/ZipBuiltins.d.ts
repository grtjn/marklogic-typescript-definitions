// Type definitions for Zip
// Definitions: 

/**
  Zip function allow the server to handle .zip files.
**/

interface xdmpFunctions {

    /** Return a manifest for this zip file. The manifest contains information about what is in the zip file. The form of the manifest is: <parts xmlns="xdmp:zip"> <part uncompressed-size="[size]" compressed-size="[size]" encrypted="[true/false]">path1</part> <part uncompressed-size="[size]" compressed-size="[size]" encrypted="[true/false]">path2</part> ...more parts </parts> Each <part> part is a file within the zip. The attributes specify the uncompressed size for the file, the compressed size for that file, whether or not the file is encrypted, and the last-modified timestamp. Note that MarkLogic cannot extract encrypted files, attempting to do so will cause an error. Also note that due to a limitation in the zip file format, the last-modified time has a granularity of two seconds (e.g. 10:22:33 becomes 10:22:32). **/
  zipManifest(zipfile: MLNode<any>): Array<any>;

    /** Get a named file from a zip document. Unzips and returns the file in memory as a document node (for XML and JSON formats), a text node (for text formats), or a binary node (for binary). The format is determined either by the mimetype from the file name or by the format option. **/
  zipGet(zipfile: MLNode<any>, name: string, options?: MLNode<any>|{[key:string]:any}): MLNode<any>;

    /** Create a zip file from a list of nodes. **/
  zipCreate(manifest: Array<any>|Node, nodes: Array<any>|ValueIterator<any>): MLNode<any>;

    /** Create a gzip node from a node. **/
  gzip(node: MLNode<any>): MLNode<any>;

    /** Get a node from a gzip node. Gunzips and returns the file in memory as a document node (for XML and JSON formats), a text node (for text formats), or a binary node (for binary formats). The format is determined by the format option. **/
  gunzip(gzipnode: MLNode<any>, options: MLNode<any>|{[key:string]:any}): MLNode<any>;

}
declare var xdmp:xdmpFunctions
