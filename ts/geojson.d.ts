// Type definitions for GeoJSON
// Definitions: 

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
    point(point: Object): Object;

    /** Create a set of cts:point values from a GeoJSON "MultiPoint" type geometry object. **/
    multiPoint(multiPoint: Object): Object;

    /** Create a cts:box value from GeoJSON bbox property. **/
    box(box: Object): Object;

    /** Create a cts:circle value from a radius and a GeoJSON "Point" type geometry object. **/
    circle(radius: Number, center: Object): Object;

    /** Create a cts:linestring value from a GeoJSON "LineString" type geometry object. **/
    linestring(linestring: Object): Object;

    /** Create a set of cts:linestring values from a GeoJSON "MultiLineString" type geometry object. **/
    multiLinestring(multiLinestring: Object): Object;

    /** Create a cts:polygon value from a GeoJSON "Polygon" type geometry object or a sequence of GeoJSON "Point" type geometry objects. **/
    polygon(polygonOrPoints: Object): Object;

    /** Create a sequence of cts:polygon values from a GeoJSON "Polygon" type geometry object. The returned polygons represent the interior polygons, if any. **/
    interiorPolygon(polygon: Object): Object;

    /** Create a cts:complex-polygon value from a GeoJSON "Polygon" type geometry object. The polygon returned represents the combination of the exterior polygon and the interior polygons. **/
    complexPolygon(complexPolygon: Node): Object;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: Object, options?: String, weight?: Number): Object;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromNodes(regions: Node, options?: String, weight?: Number): Object;


  }
}
