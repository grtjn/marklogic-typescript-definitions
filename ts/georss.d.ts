// Type definitions for GeoRSS
// Definitions: 

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

interface georssFunctions {

    /** Create a cts:point value from a GeoRSS point element. **/
  point(point: Node): Object;

    /** Create a cts:circle value from a radius and GeoRSS point element. **/
  circle(radius: number, center: Node): Object;

    /** Create a cts:linestring value from a GeoRSS line element. **/
  linestring(linestring: Node): Object;

    /** Create a cts:polygon value from a sequence of GeoRSS point elements or a GeoRSS polygon element. **/
  polygon(polygonOrPoints: Node): Object;

    /** Create a cts:complex-polygon value from a GeoRSS "Polygon" element. Given that GeoRSS doesn't have interior polygons, the complex-polygon returned is equivalent to the polygon returned by polygon as far as queries are concerned. **/
  complexPolygon(complexPolygon: Node): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: Object, options?: string, weight?: number): Object;

}
declare var georss:georssFunctions
