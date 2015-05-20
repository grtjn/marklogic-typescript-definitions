// Type definitions for GeospatialBuiltins
// Definitions: 

/**
The geospatial built-in functions are XQuery functions defined to operate on
geospatial values.
**/

declare module GeospatialBuiltins {

  interface cts {

    /** Returns a point value. **/
    point(latitude: Number, longitude: Number): Object;

    /** Returns a point's latitude value. **/
    pointLatitude(point: Object): Number;

    /** Returns a point's longitude value. **/
    pointLongitude(point: Object): Number;

    /** Returns a geospatial box value. **/
    box(south: Number, west: Number, north: Number, east: Number): Object;

    /** Returns a box's southern boundary. **/
    boxSouth(box: Object): Number;

    /** Returns a box's western boundary. **/
    boxWest(box: Object): Number;

    /** Returns a box's northern boundary. **/
    boxNorth(box: Object): Number;

    /** Returns a box's eastern boundary. **/
    boxEast(box: Object): Number;

    /** Returns a geospatial circle value. **/
    circle(radius: Number, center: Object): Object;

    /** Returns a circle's radius. **/
    circleRadius(circle: Object): Number;

    /** Returns a circle's center point. **/
    circleCenter(circle: Object): Object;

    /** Returns a geospatial polygon value. **/
    polygon(vertices: Object): Object;

    /** Returns a polygon's vertices. The first vertex and last vertex will always be the same. **/
    polygonVertices(polygon: Object): Object;

    /** Returns a geospatial linestring value. **/
    linestring(vertices: Object): Object;

    /** Returns a linestring's vertices. **/
    linestringVertices(linestring: Object): Object;

    /** Returns a geospatial complex polygon value. **/
    complexPolygon(outer: Object, inner: Object): Object;

    /** Returns a complex polygon's outer polygon. **/
    complexPolygonOuter(complexPolygon: Object): Object;

    /** Returns a complex polygon's inner polygons. **/
    complexPolygonInner(complexPolygon: Object): Object;

    /** Returns a cts:query matching elements by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementGeospatialQuery(elementName: Object, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementGeospatialQueryElementName(query: Object): Object;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    elementGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    elementGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching json properties by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyGeospatialQuery(propertyName: String, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the json property names used to construct the specified query. **/
    jsonPropertyGeospatialQueryPropertyName(query: Object): String;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    jsonPropertyGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementChildGeospatialQuery(parentElementName: Object, childElementNames: Object, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementChildGeospatialQueryElementName(query: Object): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementChildGeospatialQueryChildName(query: Object): Object;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementChildGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    elementChildGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    elementChildGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching json properties by name which has specific children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyChildGeospatialQuery(parentPropertyName: String, childPropertyNames: String, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the names used to construct the specified query. **/
    jsonPropertyChildGeospatialQueryPropertyName(query: Object): String;

    /** Returns the names used to construct the specified query. **/
    jsonPropertyChildGeospatialQueryChildName(query: Object): String;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyChildGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    jsonPropertyChildGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyChildGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementPairGeospatialQuery(elementName: Object, latitudeElementNames: Object, longitudeElementNames: Object, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryElementName(query: Object): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryLatitudeName(query: Object): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementPairGeospatialQueryLongitudeName(query: Object): Object;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementPairGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    elementPairGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    elementPairGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching json properties by name which has specific property children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    jsonPropertyPairGeospatialQuery(propertyName: String, latitudePropertyNames: String, longitudePropertyNames: String, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryPropertyName(query: Object): String;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryLatitudeName(query: Object): String;

    /** Returns the property names used to construct the specified query. **/
    jsonPropertyPairGeospatialQueryLongitudeName(query: Object): String;

    /** Returns the geographical regions with which the specified query was constructed. **/
    jsonPropertyPairGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    jsonPropertyPairGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    jsonPropertyPairGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching elements by name which has specific attributes representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    elementAttributePairGeospatialQuery(elementName: Object, latitudeAttributeNames: Object, longitudeAttributeNames: Object, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryElementName(query: Object): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryLatitudeName(query: Object): Object;

    /** Returns the QNames used to construct the specified query. **/
    elementAttributePairGeospatialQueryLongitudeName(query: Object): Object;

    /** Returns the geographical regions with which the specified query was constructed. **/
    elementAttributePairGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    elementAttributePairGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    elementAttributePairGeospatialQueryWeight(query: Object): Number;

    /** Returns a cts:query matching path expressions whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
    pathGeospatialQuery(pathExpression: String, regions: Object, options?: String, weight?: Number): Object;

    /** Returns the geographical regions with which the specified query was constructed. **/
    pathGeospatialQueryRegion(query: Object): Object;

    /** Returns the options for the specified query. **/
    pathGeospatialQueryOptions(query: Object): String;

    /** Returns the weight with which the specified query was constructed. **/
    pathGeospatialQueryWeight(query: Object): Number;

    /** Returns the path expressions used to construct the specified query. **/
    pathGeospatialQueryPathExpression(query: Object): String;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementGeospatialBoxes(elementNames: Object, latitudeBounds?: Number, longitudeBounds?: Number, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified element/child combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementChildGeospatialBoxes(parentElementNames: Object, childElementNames: Object, latitudeBounds?: Number, longitudeBounds?: Number, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element pair index for each parent and pair of child elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementPairGeospatialBoxes(parentElementNames: Object, latitudeNames: Object, longitudeNames: Object, latitudeBounds?: Number, longitudeBounds?: Number, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element attribute pair index for each prarent element and attribute pair specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    elementAttributePairGeospatialBoxes(parentElementNames: Object, latitudeNames: Object, longitudeNames: Object, latitudeBounds?: Number, longitudeBounds?: Number, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns boxes derived from the specified point lexicon(s). Point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each $geo-indexes specified in the function. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
    geospatialBoxes(geoIndexes: Object, latitudeBounds?: Number, longitudeBounds?: Number, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element geospatial value lexicon(s). Geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. **/
    elementGeospatialValues(elementNames: Object, start?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element-child geospatial value lexicon(s). Element-child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-child geospatial index of for each of the element/child pairs specified in the function. If there is not a range index configured for each of the specified element/child pairs, then an exception is thrown. **/
    elementChildGeospatialValues(elementNames: Object, childNames: Object, start?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element-pair geospatial value lexicon(s). element-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementPairGeospatialValues(elementNames: Object, latitudeNames: Object, longitudeNames: Object, start?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element-attribute-pair geospatial value lexicon(s). element-attribute-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-attribute-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementAttributePairGeospatialValues(elementNames: Object, latitudeNames: Object, longitudeNames: Object, start?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element geospatial value lexicon(s) that match the specified wildcard pattern. Element geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, then an exception is thrown. **/
    elementGeospatialValueMatch(elementNames: Object, pattern: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element child geospatial value lexicon(s) that match the specified wildcard pattern. Element child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element and child specified in the function. If there is not a geospatial index configured for each of the specified elements/child combinations, then an exception is thrown. **/
    elementChildGeospatialValueMatch(elementNames: Object, childNames: Object, pattern: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element pair geospatial value lexicon(s) that match the specified wildcard pattern. Element pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element pair geospatial index for each combination of elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementPairGeospatialValueMatch(elementNames: Object, latitudeNames: Object, longitudeNames: Object, pattern: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns values from the specified element attribute pair geospatial value lexicon(s) that match the specified wildcard pattern. Element attribute pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element attribute pair geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
    elementAttributePairGeospatialValueMatch(elementNames: Object, latitudeNames: Object, longitudeNames: Object, pattern: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Object;

    /** Returns value co-occurrences from the specified element value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element specified in the function. If there is not a range index configured for the specified element, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    elementValueGeospatialCoOccurrences(elementName1: Object, geoElementName: Object, childName1?: Object, childName2?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Node;

    /** Returns value co-occurrences from the specified element-attribute value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element and attribute pair specified in the function. If there is not a range index configured for the specified element and attribute pair, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    elementAttributeValueGeospatialCoOccurrences(elementName1: Object, attributeName1: Object, geoElementName: Object, childName1?: Object, childName2?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Node;

    /** Returns value co-occurrences from the geospatial lexicons. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
    geospatialCoOccurrences(geoElementName1: Object, child1Name1: Object, child1Name2: Object, geoElementName2: Object, child2Name1?: Object, child2Name2?: Object, options?: String, query?: Object, qualityWeight?: Number, forestIds?: String): Node;

    /** Returns the distance (in miles) between two points. **/
    distance(p1: Object, p2: Object, options?: String): Number;

    /** Returns the great circle distance (in miles) between a point and an region. The region is defined by a cts:region. **/
    shortestDistance(p1: Object, region: Object, options?: String): Number;

    /** Returns the true bearing in radians of the path from the first point to the second. An error is raised if the two points are the same. **/
    bearing(p1: Object, p2: Object, options?: String): Number;

    /** Returns the point at the given distance (in miles) along the given bearing (in radians) from the starting point. **/
    destination(p: Object, bearing: Number, distance: Number, options?: String): Object;

    /** Returns the point at the intersection of two arcs. If the arcs do not intersect, or lie on the same great circle, or if either arc covers more than 180 degrees, an error is raised. **/
    arcIntersection(p1: Object, p2: Object, q1: Object, q2: Object, options?: String): Object;

    /** Returns true if the box intersects with a region. **/
    boxIntersects(box: Object, region: Object, options?: String): Object;

    /** Returns true if the circle intersects with a region. **/
    circleIntersects(circle: Object, region: Object, options?: String): Object;

    /** Returns true if the polygon intersects with a region. **/
    polygonIntersects(polygon: Object, region: Object, options?: String): Object;

    /** Returns true if the polygon contains a region. **/
    polygonContains(polygon: Object, region: Object, options?: String): Object;

    /** Returns true if the complex-polygon intersects with a region. **/
    complexPolygonIntersects(complexPolygon: Object, region: Object, options?: String): Object;

    /** Returns true if the complex-polygon contains a region. **/
    complexPolygonContains(complexPolygon: Object, region: Object, options?: String): Object;

    /** Returns true if the target region intersects with a region. **/
    regionIntersects(target: Object, region: Object, options?: String): Object;

    /** Returns true if one region contains the other region. **/
    regionContains(region: Object, region: Object, options?: String): Object;

    /** Returns a sequence of boxes that bound the given region. **/
    boundingBoxes(region: Object, options?: String): Object;

    /** Returns a sequence of geospatial regions parsed from Well-Known Text format. **/
    parseWkt(wtk: String): Object;

    /** Returns a sequence of strings in Well-Known Text format. **/
    toWkt(wtk: Object): String;

    /** Creates a reference to a geospatial element range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementReference(element: Object, options?: String): Object;

    /** Creates a reference to a geospatial json property range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyReference(property: String, options?: String): Object;

    /** Creates a reference to a geospatial element child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementChildReference(element: Object, child: Object, options?: String): Object;

    /** Creates a reference to a geospatial json property child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyChildReference(property: String, child: String, options?: String): Object;

    /** Creates a reference to a geospatial element pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialElementPairReference(element: Object, lat: Object, long: Object, options?: String): Object;

    /** Creates a reference to a geospatial JSON property pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialJsonPropertyPairReference(property: String, lat: String, long: String, options?: String): Object;

    /** Creates a reference to a geospatial attribute pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialAttributePairReference(element: Object, lat: Object, long: Object, options?: String): Object;

    /** Creates a reference to a geospatial path range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
    geospatialPathReference(pathExpression: String, options?: String, map?: Object): Object;

    /** Return a point approximating the center of the given region. For a point, this is the point itself. For a circle, it is the center point. For a box, it is the point whose latitude is half-way between the northern and southern limits and whose longitude is half-way between the western and eastern limits. For polygons, complex polygons, and linestrings, an approximate centroid is returned. This approximation is rough, and useful for quick comparisons. **/
    approxCenter(region: Object, options?: String): Object;


  }
}
