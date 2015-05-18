// Type definitions for Geo
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/geospatial.xml

/**
The Geo module provides support for geospatial queries using GML, KML,
GeoRSS/Simple, Metacarta or GeoJSON Geospatial markup. 

To use the Geo module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace geo = "http://marklogic.com/geospatial"
         at "/MarkLogic/geospatial/geospatial.xqy";
The library namespace prefix geo is not predefined
in the server.
**/

declare module Geo {

  interface geo {

    /** Create a cts:point value from a node representing a point in one of the supported markup vocabularies. **/
    point(point: node()): number;

    /** Create a cts:box value from a node representing a box in one of the supported markup vocabularies. **/
    box(box: node()): box ;

    /** Create a cts:circle value from a radius and a node representing a point in one of the supported markup vocabularies. **/
    circle(radius: double, center: node()): circle ;

    /** Create a cts:linestring value from a node representing a linestring in one of the supported markup vocabularies. **/
    linestring(linestring: node()): linestring ;

    /** Create a cts:polygon value from a sequence of point nodes in one of the supported markup vocabularies. **/
    polygon(polygonOrPoints: node()): polygon ;

    /** Create a sequence of cts:polygon values from a polygon node in one of the supported markup vocabularies. These polygons represent the interior polygons, if any. **/
    interiorPolygon(polygon: node()): polygon ;

    /** Create a cts:complex-polygon value from a node representing a complex polygon in one of the supported markup vocabularies. The complex polygon represents the combination of the exterior polygon and interior polygons in their representation. **/
    complexPolygon(complexPolygon: node()): complex-polygon ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQuery(regions: region, options?: string, weight?: double): query ;

    /** Returns a cts:query matching points within given regions. **/
    geospatialQueryFromElements(regions: element(), options?: string, weight?: double): query ;

    /** Returns a cts:query matching points within given regions. This function simply redirects the call to geospatial-query-from-elements if the input region is an XML element or to geojson:geospatial-query-from-nodes if the input region is a JSON object node. Please see the API docs of those two functions for more details. **/
    geospatialQueryFromNodes(): ;


  }
}
