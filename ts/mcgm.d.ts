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
    point(point: element(Dot)):  cts:point ;

    /** Create a cts:circle value from a radius and MCGM Dot element. **/
    circle(radius: xs:double, center: element(Dot)):  cts:circle ;

    /** Construct a cts:polygon value from a sequence of MCGM Dot elements. **/
    polygon(vertices: element(Dot)):  cts:polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: cts:region, options?: xs:string, weight?: xs:double):  cts:query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: element(Dot), options?: xs:string, weight?: xs:double):  cts:query ;


  }
}
