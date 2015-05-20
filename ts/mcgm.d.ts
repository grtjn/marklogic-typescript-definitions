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

declare module MCGM {

  interface mcgm {

    /** Create a cts:point value from a MCGM Dot element. **/
    point(point: Element(Dot)): Point ;

    /** Create a cts:circle value from a radius and MCGM Dot element. **/
    circle(radius: Number, center: Element(Dot)): Circle ;

    /** Construct a cts:polygon value from a sequence of MCGM Dot elements. **/
    polygon(vertices: Element(Dot)): Polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: Region, options?: String, weight?: Number): Query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: Element(Dot), options?: String, weight?: Number): Query ;


  }
}
