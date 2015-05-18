// Type definitions for GML
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/gml.xml

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

declare module GML {

  interface gml {

    /** Create a cts:point value from a GML Point element. **/
    point(point: number): number;

    /** Create a cts:box value from a GML Envelope element. **/
    box(box: Envelope)): box;

    /** Create a cts:circle value from a radius and GML Point element. **/
    circle(radius: double, center: number): circle;

    /** Create a cts:linestring value from a GML LineString element. **/
    linestring(linestring: LineString)): linestring;

    /** Create a cts:polygon value from a sequence of GML Point elements or a GML Polygon element. **/
    polygon(polygonOrPoints: element()): polygon;

    /** Create a sequence of cts:polygon values from a GML Polygon element. The polygons returned represent the interior polygons, if any. **/
    interiorPolygon(polygon: Polygon)): polygon;

    /** Create a cts:complex-polygon value from a GML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
    complexPolygon(complexPolygon: node()): complex-polygon;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: region, options?: string, weight?: double): query;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: element(), options?: string, weight?: double): query;


  }
}
