// Type definitions for KML
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/kml.xml

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
    point(point: element()):  cts:point ;

    /** Create a cts:box value from a KML LatLongBox element. **/
    box(envelope: element(kml:LatLongBox)):  cts:box ;

    /** Create a cts:circle value from a radius and KML Point or Location element. **/
    circle(radius: xs:double, center: element()):  cts:circle ;

    /** Create a cts:linestring value from a KML LineString element. **/
    linestring(linestring: element(kml:LineString)):  cts:linestring ;

    /** Create a cts:polygon value from a KML polygon or a sequence of KML Point or Location elements. **/
    polygon(polygonOrPoints: element()):  cts:polygon ;

    /** Create a sequence of cts:polygon values from a KML Polygon element. The returned polygons represent the interior polygons, if any. **/
    interiorPolygon(points: element(kml:Polygon)):  cts:polygon ;

    /** Create a cts:complex-polygon value from a KML Polygon element. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
    complexPolygon(complexPolygon: node()):  cts:complex-polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: cts:region, options?: xs:string, weight?: xs:double):  cts:query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: element(), options?: xs:string, weight?: xs:double):  cts:query ;


  }
}
