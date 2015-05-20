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

declare module KML {

  interface kml {

    /** Create a cts:point value from a KML Point or Location element. **/
    point(point: Node): Point ;

    /** Create a cts:box value from a KML LatLongBox element. **/
    box(envelope: LatLongBox)): Box ;

    /** Create a cts:circle value from a radius and KML Point or Location element. **/
    circle(radius: Number, center: Node): Circle ;

    /** Create a cts:linestring value from a KML LineString element. **/
    linestring(linestring: LineString)): Linestring ;

    /** Create a cts:polygon value from a KML polygon or a sequence of KML Point or Location elements. **/
    polygon(polygonOrPoints: Node): Polygon ;

    /** Create a sequence of cts:polygon values from a KML Polygon element. The returned polygons represent the interior polygons, if any. **/
    interiorPolygon(points: Polygon)): Polygon* ;

    /** Create a cts:complex-polygon value from a KML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
    complexPolygon(complexPolygon: Node): Complex-polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: Region, options?: String, weight?: Number): Query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: Node, options?: String, weight?: Number): Query ;


  }
}
