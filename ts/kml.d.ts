// Type definitions for KML
// Definitions: 

/**
The KML module provides support for geospatial queries using KML
markup. 

To use the KML module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace kml = "http://earth.google.com/kml/2.0"
         at "/MarkLogic/geospatial/kml.xqy";
The library namespace prefix kml is not predefined
in the server.
**/

interface kmlFunctions {

    /** Create a cts:point value from a KML Point or Location element. **/
  point(point: Node): Object;

    /** Create a cts:box value from a KML LatLongBox element. **/
  box(envelope: Node): Object;

    /** Create a cts:circle value from a radius and KML Point or Location element. **/
  circle(radius: number, center: Node): Object;

    /** Create a cts:linestring value from a KML LineString element. **/
  linestring(linestring: Node): Object;

    /** Create a cts:polygon value from a KML polygon or a sequence of KML Point or Location elements. **/
  polygon(polygonOrPoints: Node): Object;

    /** Create a sequence of cts:polygon values from a KML Polygon element. The returned polygons represent the interior polygons, if any. **/
  interiorPolygon(points: Node): Object;

    /** Create a cts:complex-polygon value from a KML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
  complexPolygon(complexPolygon: Node): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: Object, options?: string, weight?: number): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromElements(regions: Node, options?: string, weight?: number): Object;

}
declare var kml:kmlFunctions
