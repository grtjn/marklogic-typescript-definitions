// Type definitions for GeoRSS
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/georss.xml

/**
The GeoRSS module provides support for geospatial queries using
GeoRSS/Simple markup. 

To use the GeoRSS module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace georss = "http://www.georss.org/georss"
         at "/MarkLogic/geospatial/georss.xqy";
The library namespace prefix georss is not predefined
in the server.
**/

declare module GeoRSS {

  interface georss {

    /** Create a cts:point value from a GeoRSS point element. **/
    point(point: element(georss:point)):  cts:point ;

    /** Create a cts:circle value from a radius and GeoRSS point element. **/
    circle(radius: xs:double, center: element(georss:point)):  cts:circle ;

    /** Create a cts:linestring value from a GeoRSS line element. **/
    linestring(linestring: element(georss:line)):  cts:linestring ;

    /** Create a cts:polygon value from a sequence of GeoRSS point elements or a GeoRSS polygon element. **/
    polygon(polygonOrPoints: element()): cts:polygon;

    /** Create a cts:complex-polygon value from a GeoRSS "Polygon" element. Given that GeoRSS doesn't have interior polygons, the complex-polygon returned is equivalent to the polygon returned by polygon as far as queries are concerned. **/
    complexPolygon(complexPolygon: node()):  cts:complex-polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: cts:region, options?: xs:string, weight?: xs:double):  cts:query ;


  }
}
