// Type definitions for MCGM
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/mcgm.xml

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
    point(point: element(Dot)): number;

    /** Create a cts:circle value from a radius and MCGM Dot element. **/
    circle(radius: double, center: element(Dot)): circle ;

    /** Construct a cts:polygon value from a sequence of MCGM Dot elements. **/
    polygon(vertices: element(Dot)): polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: region, options?: string, weight?: double): query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: element(Dot), options?: string, weight?: double): query ;


  }
}
