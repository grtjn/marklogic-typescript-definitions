// Type definitions for GML
// Definitions: 

/**
The GML module provides support for geospatial queries using GML
markup. 

To use the GML module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace gml = "http://www.opengis.net/gml"
         at "/MarkLogic/geospatial/gml.xqy";
The library namespace prefix gml is not predefined
in the server.
**/

interface gmlFunctions {

    /** Create a cts:point value from a GML Point element. **/
  point(point: Node): Object;

    /** Create a cts:box value from a GML Envelope element. **/
  box(box: Node): Object;

    /** Create a cts:circle value from a radius and GML Point element. **/
  circle(radius: number, center: Node): Object;

    /** Create a cts:linestring value from a GML LineString element. **/
  linestring(linestring: Node): Object;

    /** Create a cts:polygon value from a sequence of GML Point elements or a GML Polygon element. **/
  polygon(polygonOrPoints: Node): Object;

    /** Create a sequence of cts:polygon values from a GML Polygon element. The polygons returned represent the interior polygons, if any. **/
  interiorPolygon(polygon: Node): Object;

    /** Create a cts:complex-polygon value from a GML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
  complexPolygon(complexPolygon: Node): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQuery(regions: Object, options?: string, weight?: number): Object;

    /** Returns a cts:query matching points within given regions. **/
  geospatialQueryFromElements(regions: Node, options?: string, weight?: number): Object;

}
declare var gml:gmlFunctions
