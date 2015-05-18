// Type definitions for GeoJSON
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/geojson.xml

/**
The GeoJSON module provides support for geospatial queries using GeoJSON. 

To use the GeoJSON module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace geojson = "http://marklogic.com/geospatial/geojson"
         at "/MarkLogic/geospatial/geojson.xqy";
The library namespace prefix geojson is not predefined
in the server.
**/

declare module GeoJSON {

  interface geojson {

    /** Create a cts:point value from a GeoJSON "Point" type geometry object. **/
    point(point: object-node()):  cts:point ;

    /** Create a set of cts:point values from a GeoJSON "MultiPoint" type geometry object. **/
    multiPoint(multiPoint: object-node()):  cts:point ;

    /** Create a cts:box value from GeoJSON bbox property. **/
    box(box: object-node()):  cts:box ;

    /** Create a cts:circle value from a radius and a GeoJSON "Point" type geometry object. **/
    circle(radius: xs:double, center: object-node()):  cts:circle ;

    /** Create a cts:linestring value from a GeoJSON "LineString" type geometry object. **/
    linestring(linestring: object-node()):  cts:linestring ;

    /** Create a set of cts:linestring values from a GeoJSON "MultiLineString" type geometry object. **/
    multiLinestring(multiLinestring: object-node()):  cts:linestring ;

    /** Create a cts:polygon value from a GeoJSON "Polygon" type geometry object or a sequence of GeoJSON "Point" type geometry objects. **/
    polygon(polygonOrPoints: object-node()):  cts:polygon ;

    /** Create a sequence of cts:polygon values from a GeoJSON "Polygon" type geometry object. The returned polygons represent the interior polygons, if any. **/
    interiorPolygon(polygon: object-node()):  cts:polygon ;

    /** Create a cts:complex-polygon value from a GeoJSON "Polygon" type geometry object. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
    complexPolygon(complexPolygon: node()):  cts:complex-polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: cts:region, options?: xs:string, weight?: xs:double): cts:query;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromNodes(regions: node(), options?: xs:string, weight?: xs:double):  cts:query ;


  }
}
