// Type definitions for MCGM
// Definitions: 

/**
The MCGM module provides support for geospatial queries using MetaCarta
geospatial markup. 

To use the MCGM module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace mcgm = "http://marklogic.com/geospatial/mcgm"
         at "/MarkLogic/geospatial/mcgm.xqy";
The library namespace prefix mcgm is not predefined
in the server.
**/

interface mcgmFunctions {

    /** Create a cts:point value from a MCGM Dot element. **/
  point(point: Node): Object;

    /** Create a cts:circle value from a radius and MCGM Dot element. **/
  circle(radius: number, center: Node): Object;

    /** Construct a cts:polygon value from a sequence of MCGM Dot elements. **/
  polygon(vertices: Node): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: Object, options?: string, weight?: number): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromElements(regions: Node, options?: string, weight?: number): Object;

}
declare var mcgm:mcgmFunctions
