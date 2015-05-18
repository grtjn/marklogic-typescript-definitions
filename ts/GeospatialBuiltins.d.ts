// Type definitions for GeospatialBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/GeospatialBuiltins.xml

/**
The geospatial built-in functions are XQuery functions defined to operate on
geospatial values.
**/

declare module GeospatialBuiltins {

  interface cts {

    /** Returns a point value. **/
    point(latitude: float, longitude: float): number;

    /** Returns a point's latitude value. **/
    pointLatitude(point: number): float;

    /** Returns a point's longitude value. **/
    pointLongitude(point: number): float;

    /** Returns a geospatial box value. **/
    box(south: float, west: float, north: float, east: float): box;

    /** Returns a box's southern boundary. **/
    boxSouth(box: box): float;

    /** Returns a box's western boundary. **/
    boxWest(box: box): float;

    /** Returns a box's northern boundary. **/
    boxNorth(box: box): float;

    /** Returns a box's eastern boundary. **/
    boxEast(box: box): float;

    /** Returns a geospatial circle value. **/
    circle(radius: double, center: number): circle;

    /** Returns a circle's radius. **/
    circleRadius(circle: circle): float;

    /** Returns a circle's center point. **/
    circleCenter(circle: circle): number;

    /** Returns a geospatial polygon value. **/
    polygon(vertices: number): polygon;

    /** Returns a polygon's vertices. The first vertex and last vertex will always be the same. **/
    polygonVertices(polygon: polygon): number;

    /** Returns a geospatial linestring value. **/
    linestring(vertices: number): linestring;

    /** Returns a linestring's vertices. **/
    linestringVertices(linestring: linestring): number;

    /** Returns a geospatial complex polygon value. **/
    complexPolygon(outer: polygon, inner: polygon): complex-polygon;

    /** Returns a complex polygon's outer polygon. **/
    complexPolygonOuter(complexPolygon: complex-polygon): polygon;

    /** Returns a complex polygon's inner polygons. **/
    complexPolygonInner(complexPolygon: complex-polygon): polygon;

    /** Returns a cts:query matching elements by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementGeospatialQuery(elementName: QName, regions: region, options?: string, weight?: double): element-geospatial-query;

    /** Returns the QNames used to construct the specified query. **/
    elementGeospatialQueryElementName(query: element-geospatial-query): QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementGeospatialQueryRegion(query: element-geospatial-query): region;

    /** Returns the options for the specified query. **/
    elementGeospatialQueryOptions(query: element-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementGeospatialQueryWeight(query: element-geospatial-query): double;

    /** Returns a cts:query matching json properties by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyGeospatialQuery(propertyName: string, regions: region, options?: string, weight?: double): json-property-geospatial-query;

    /** Returns the json property names used to construct the specified query. **/
    jsonPropertyGeospatialQueryPropertyName(query: json-property-geospatial-query): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyGeospatialQueryRegion(query: json-property-geospatial-query): region;

    /** Returns the options for the specified query. **/
    jsonPropertyGeospatialQueryOptions(query: json-property-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyGeospatialQueryWeight(query: json-property-geospatial-query): double;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementChildGeospatialQuery(parentElementName: QName, childElementNames: QName, regions: region, options?: string, weight?: double): element-child-geospatial-query;

    /** Returns the QNames used to construct the specified query. **/
    elementChildGeospatialQueryElementName(query: element-child-geospatial-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementChildGeospatialQueryChildName(query: element-child-geospatial-query): QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementChildGeospatialQueryRegion(query: element-child-geospatial-query): region;

    /** Returns the options for the specified query. **/
    elementChildGeospatialQueryOptions(query: element-child-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementChildGeospatialQueryWeight(query: element-child-geospatial-query): double;

    /** Returns a cts:query matching json properties by name which has specific children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyChildGeospatialQuery(parentPropertyName: string, childPropertyNames: string, regions: region, options?: string, weight?: double): json-property-child-geospatial-query;

    /** Returns the names used to construct the specified query. **/
    jsonPropertyChildGeospatialQueryPropertyName(query: json-property-child-geospatial-query): string;

    /** Returns the names used to construct the specified query. **/
    jsonPropertyChildGeospatialQueryChildName(query: json-property-child-geospatial-query): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyChildGeospatialQueryRegion(query: json-property-child-geospatial-query): region;

    /** Returns the options for the specified query. **/
    jsonPropertyChildGeospatialQueryOptions(query: json-property-child-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyChildGeospatialQueryWeight(query: json-property-child-geospatial-query): double;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementPairGeospatialQuery(elementName: QName, latitudeElementNames: QName, longitudeElementNames: QName, regions: region, options?: string, weight?: double): element-pair-geospatial-query;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryElementName(query: element-pair-geospatial-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryLatitudeName(query: element-pair-geospatial-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryLongitudeName(query: element-pair-geospatial-query): QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementPairGeospatialQueryRegion(query: element-pair-geospatial-query): region;

    /** Returns the options for the specified query. **/
    elementPairGeospatialQueryOptions(query: element-pair-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementPairGeospatialQueryWeight(query: element-pair-geospatial-query): double;

    /** Returns a cts:query matching json properties by name which has specific property children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyPairGeospatialQuery(propertyName: string, latitudePropertyNames: string, longitudePropertyNames: string, regions: region, options?: string, weight?: double): json-property-pair-geospatial-query;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryPropertyName(query: json-property-pair-geospatial-query): string;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryLatitudeName(query: json-property-pair-geospatial-query): string;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryLongitudeName(query: json-property-pair-geospatial-query): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyPairGeospatialQueryRegion(query: json-property-pair-geospatial-query): region;

    /** Returns the options for the specified query. **/
    jsonPropertyPairGeospatialQueryOptions(query: json-property-pair-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyPairGeospatialQueryWeight(query: json-property-pair-geospatial-query): double;

    /** Returns a cts:query matching elements by name which has specific attributes representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementAttributePairGeospatialQuery(elementName: QName, latitudeAttributeNames: QName, longitudeAttributeNames: QName, regions: region, options?: string, weight?: double): element-attribute-pair-geospatial-query;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryElementName(query: element-attribute-pair-geospatial-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryLatitudeName(query: element-attribute-pair-geospatial-query): QName;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryLongitudeName(query: element-attribute-pair-geospatial-query): QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementAttributePairGeospatialQueryRegion(query: element-attribute-pair-geospatial-query): region;

    /** Returns the options for the specified query. **/
    elementAttributePairGeospatialQueryOptions(query: element-attribute-pair-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    elementAttributePairGeospatialQueryWeight(query: element-attribute-pair-geospatial-query): double;

    /** Returns a cts:query matching path expressions whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    pathGeospatialQuery(pathExpression: string, regions: region, options?: string, weight?: double): path-geospatial-query;

    /** Returns the geographical regions with which the specified query was constructed. **/
    pathGeospatialQueryRegion(query: path-geospatial-query): region;

    /** Returns the options for the specified query. **/
    pathGeospatialQueryOptions(query: path-geospatial-query): string;

    /** Returns the weight with which the specified query was constructed. **/
    pathGeospatialQueryWeight(query: path-geospatial-query): double;

    /** Returns the path expressions used to construct the specified query. **/
    pathGeospatialQueryPathExpression(query: path-geospatial-query): string;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementGeospatialBoxes(elementNames: QName, latitudeBounds?: double, longitudeBounds?: double, options?: string, query?: query, qualityWeight?: double, forestIds?: number): box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified element/child combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementChildGeospatialBoxes(parentElementNames: QName, childElementNames: QName, latitudeBounds?: double, longitudeBounds?: double, options?: string, query?: query, qualityWeight?: double, forestIds?: number): box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element pair index for each parent and pair of child elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementPairGeospatialBoxes(parentElementNames: QName, latitudeNames: QName, longitudeNames: QName, latitudeBounds?: double, longitudeBounds?: double, options?: string, query?: query, qualityWeight?: double, forestIds?: number): box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element attribute pair index for each prarent element and attribute pair specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementAttributePairGeospatialBoxes(parentElementNames: QName, latitudeNames: QName, longitudeNames: QName, latitudeBounds?: double, longitudeBounds?: double, options?: string, query?: query, qualityWeight?: double, forestIds?: number): box;

    /** Returns boxes derived from the specified point lexicon(s). Point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each $geo-indexes specified in the function. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    geospatialBoxes(geoIndexes: reference, latitudeBounds?: double, longitudeBounds?: double, options?: string, query?: query, qualityWeight?: double, forestIds?: number): box;

    /** Returns values from the specified element geospatial value lexicon(s). Geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. **/
    elementGeospatialValues(elementNames: QName, start?: number, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element-child geospatial value lexicon(s). Element-child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-child geospatial index of for each of the element/child pairs specified in the function. If there is not a range index configured for each of the specified element/child pairs, then an exception is thrown. **/
    elementChildGeospatialValues(elementNames: QName, childNames: QName, start?: number, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element-pair geospatial value lexicon(s). element-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementPairGeospatialValues(elementNames: QName, latitudeNames: QName, longitudeNames: QName, start?: number, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element-attribute-pair geospatial value lexicon(s). element-attribute-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-attribute-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementAttributePairGeospatialValues(elementNames: QName, latitudeNames: QName, longitudeNames: QName, start?: number, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element geospatial value lexicon(s) that match the specified wildcard pattern. Element geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, then an exception is thrown. **/
    elementGeospatialValueMatch(elementNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element child geospatial value lexicon(s) that match the specified wildcard pattern. Element child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element and child specified in the function. If there is not a geospatial index configured for each of the specified elements/child combinations, then an exception is thrown. **/
    elementChildGeospatialValueMatch(elementNames: QName, childNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element pair geospatial value lexicon(s) that match the specified wildcard pattern. Element pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element pair geospatial index for each combination of elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementPairGeospatialValueMatch(elementNames: QName, latitudeNames: QName, longitudeNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns values from the specified element attribute pair geospatial value lexicon(s) that match the specified wildcard pattern. Element attribute pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element attribute pair geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementAttributePairGeospatialValueMatch(elementNames: QName, latitudeNames: QName, longitudeNames: QName, pattern: anyAtomicType, options?: string, query?: query, qualityWeight?: double, forestIds?: number): number;

    /** Returns value co-occurrences from the specified element value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element specified in the function. If there is not a range index configured for the specified element, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    elementValueGeospatialCoOccurrences(elementName-1: QName, geoElementName: QName, childName-1?: QName, childName-2?: QName, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns value co-occurrences from the specified element-attribute value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element and attribute pair specified in the function. If there is not a range index configured for the specified element and attribute pair, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    elementAttributeValueGeospatialCoOccurrences(elementName-1: QName, attributeName-1: QName, geoElementName: QName, childName-1?: QName, childName-2?: QName, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns value co-occurrences from the geospatial lexicons. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    geospatialCoOccurrences(geoElementName-1: QName, child-1Name-1: QName, child-1Name-2: QName, geoElementName-2: QName, child-2Name-1?: QName, child-2Name-2?: QName, options?: string, query?: query, qualityWeight?: double, forestIds?: number): co-occurrence);

    /** Returns the distance (in miles) between two points. **/
    distance(p1: number, p2: number, options?: string): double;

    /** Returns the great circle distance (in miles) between a point and an region. The region is defined by a cts:region. **/
    shortestDistance(p1: number, region: region, options?: string): double;

    /** Returns the true bearing in radians of the path from the first point to the second. An error is raised if the two points are the same. **/
    bearing(p1: number, p2: number, options?: string): double;

    /** Returns the point at the given distance (in miles) along the given bearing (in radians) from the starting point. **/
    destination(p: number, bearing: double, distance: double, options?: string): number;

    /** Returns the point at the intersection of two arcs. If the arcs do not intersect, or lie on the same great circle, or if either arc covers more than 180 degrees, an error is raised. **/
    arcIntersection(p1: number, p2: number, q1: number, q2: number, options?: string): number;

    /** Returns true if the box intersects with a region. **/
    boxIntersects(box: box, region: region, options?: string): boolean;

    /** Returns true if the circle intersects with a region. **/
    circleIntersects(circle: circle, region: region, options?: string): boolean;

    /** Returns true if the polygon intersects with a region. **/
    polygonIntersects(polygon: polygon, region: region, options?: string): boolean;

    /** Returns true if the polygon contains a region. **/
    polygonContains(polygon: polygon, region: region, options?: string): boolean;

    /** Returns true if the complex-polygon intersects with a region. **/
    complexPolygonIntersects(complexPolygon: complex-polygon, region: region, options?: string): boolean;

    /** Returns true if the complex-polygon contains a region. **/
    complexPolygonContains(complexPolygon: complex-polygon, region: region, options?: string): boolean;

    /** Returns true if the target region intersects with a region. **/
    regionIntersects(target: region, region: region, options?: string): boolean;

    /** Returns true if one region contains the other region. **/
    regionContains(region: region, region: region, options?: string): boolean;

    /** Returns a sequence of boxes that bound the given region. **/
    boundingBoxes(region: region, options?: string): box;

    /** Returns a sequence of geospatial regions parsed from Well-Known Text format. **/
    parseWkt(wtk: string): region;

    /** Returns a sequence of strings in Well-Known Text format. **/
    toWkt(wtk: region): string;

    /** Creates a reference to a geospatial element range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementReference(element: QName, options?: string): reference;

    /** Creates a reference to a geospatial json property range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyReference(property: string, options?: string): reference;

    /** Creates a reference to a geospatial element child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementChildReference(element: QName, child: QName, options?: string): reference;

    /** Creates a reference to a geospatial json property child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyChildReference(property: string, child: string, options?: string): reference;

    /** Creates a reference to a geospatial element pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementPairReference(element: QName, lat: QName, long: QName, options?: string): reference;

    /** Creates a reference to a geospatial JSON property pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyPairReference(property: string, lat: string, long: string, options?: string): reference;

    /** Creates a reference to a geospatial attribute pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialAttributePairReference(element: QName, lat: QName, long: QName, options?: string): reference;

    /** Creates a reference to a geospatial path range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialPathReference(pathExpression: string, options?: string, map?: map): reference;

    /** Return a point approximating the center of the given region. For a point, this is the point itself. For a circle, it is the center point. For a box, it is the point whose latitude is half-way between the northern and southern limits and whose longitude is half-way between the western and eastern limits. For polygons, complex polygons, and linestrings, an approximate centroid is returned. This approximation is rough, and useful for quick comparisons. **/
    approxCenter(region: region, options?: string): number;


  }
}
