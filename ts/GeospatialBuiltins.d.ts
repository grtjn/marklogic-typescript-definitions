// Type definitions for GeospatialBuiltins
// Definitions: 

/**
The geospatial built-in functions are XQuery functions defined to operate on
geospatial values.
**/

interface ctsFunctions {

    /** Returns a point value. **/
  point(latitude: number, longitude: number): cts.Point;

    /** Returns a point's latitude value. **/
  pointLatitude(point: cts.Point): number;

    /** Returns a point's longitude value. **/
  pointLongitude(point: cts.Point): number;

    /** Returns a geospatial box value. **/
  box(south: number, west: number, north: number, east: number): cts.Box;

    /** Returns a box's southern boundary. **/
  boxSouth(box: cts.Box): number;

    /** Returns a box's western boundary. **/
  boxWest(box: cts.Box): number;

    /** Returns a box's northern boundary. **/
  boxNorth(box: cts.Box): number;

    /** Returns a box's eastern boundary. **/
  boxEast(box: cts.Box): number;

    /** Returns a geospatial circle value. **/
  circle(radius: number, center: cts.Point): cts.Circle;

    /** Returns a circle's radius. **/
  circleRadius(circle: cts.Circle): number;

    /** Returns a circle's center point. **/
  circleCenter(circle: cts.Circle): cts.Point;

    /** Returns a geospatial polygon value. **/
  polygon(vertices: cts.Point): cts.Polygon;

    /** Returns a polygon's vertices. The first vertex and last vertex will always be the same. **/
  polygonVertices(polygon: cts.Polygon): cts.Point;

    /** Returns a geospatial linestring value. **/
  linestring(vertices: cts.Point): cts.Linestring;

    /** Returns a linestring's vertices. **/
  linestringVertices(linestring: cts.Linestring): cts.Point;

    /** Returns a geospatial complex polygon value. **/
  complexPolygon(outer: cts.Polygon, inner: cts.Polygon): cts.ComplexPolygon;

    /** Returns a complex polygon's outer polygon. **/
  complexPolygonOuter(complexPolygon: cts.ComplexPolygon): cts.Polygon;

    /** Returns a complex polygon's inner polygons. **/
  complexPolygonInner(complexPolygon: cts.ComplexPolygon): cts.Polygon;

    /** Returns a cts:query matching elements by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementGeospatialQuery(elementName: xs.QName, regions: cts.Region, options?: string, weight?: number): cts.ElementGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementGeospatialQueryElementName(query: cts.ElementGeospatialQuery): xs.QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementGeospatialQueryRegion(query: cts.ElementGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  elementGeospatialQueryOptions(query: cts.ElementGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementGeospatialQueryWeight(query: cts.ElementGeospatialQuery): number;

    /** Returns a cts:query matching json properties by name whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyGeospatialQuery(propertyName: string, regions: cts.Region, options?: string, weight?: number): cts.JsonPropertyGeospatialQuery;

    /** Returns the json property names used to construct the specified query. **/
  jsonPropertyGeospatialQueryPropertyName(query: cts.JsonPropertyGeospatialQuery): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyGeospatialQueryRegion(query: cts.JsonPropertyGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  jsonPropertyGeospatialQueryOptions(query: cts.JsonPropertyGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyGeospatialQueryWeight(query: cts.JsonPropertyGeospatialQuery): number;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementChildGeospatialQuery(parentElementName: xs.QName, childElementNames: xs.QName, regions: cts.Region, options?: string, weight?: number): cts.ElementChildGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementChildGeospatialQueryElementName(query: cts.ElementChildGeospatialQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementChildGeospatialQueryChildName(query: cts.ElementChildGeospatialQuery): xs.QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementChildGeospatialQueryRegion(query: cts.ElementChildGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  elementChildGeospatialQueryOptions(query: cts.ElementChildGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementChildGeospatialQueryWeight(query: cts.ElementChildGeospatialQuery): number;

    /** Returns a cts:query matching json properties by name which has specific children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyChildGeospatialQuery(parentPropertyName: string, childPropertyNames: string, regions: cts.Region, options?: string, weight?: number): cts.JsonPropertyChildGeospatialQuery;

    /** Returns the names used to construct the specified query. **/
  jsonPropertyChildGeospatialQueryPropertyName(query: cts.JsonPropertyChildGeospatialQuery): string;

    /** Returns the names used to construct the specified query. **/
  jsonPropertyChildGeospatialQueryChildName(query: cts.JsonPropertyChildGeospatialQuery): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyChildGeospatialQueryRegion(query: cts.JsonPropertyChildGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  jsonPropertyChildGeospatialQueryOptions(query: cts.JsonPropertyChildGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyChildGeospatialQueryWeight(query: cts.JsonPropertyChildGeospatialQuery): number;

    /** Returns a cts:query matching elements by name which has specific element children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementPairGeospatialQuery(elementName: xs.QName, latitudeElementNames: xs.QName, longitudeElementNames: xs.QName, regions: cts.Region, options?: string, weight?: number): cts.ElementPairGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryElementName(query: cts.ElementPairGeospatialQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryLatitudeName(query: cts.ElementPairGeospatialQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementPairGeospatialQueryLongitudeName(query: cts.ElementPairGeospatialQuery): xs.QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementPairGeospatialQueryRegion(query: cts.ElementPairGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  elementPairGeospatialQueryOptions(query: cts.ElementPairGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementPairGeospatialQueryWeight(query: cts.ElementPairGeospatialQuery): number;

    /** Returns a cts:query matching json properties by name which has specific property children representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  jsonPropertyPairGeospatialQuery(propertyName: string, latitudePropertyNames: string, longitudePropertyNames: string, regions: cts.Region, options?: string, weight?: number): cts.JsonPropertyPairGeospatialQuery;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryPropertyName(query: cts.JsonPropertyPairGeospatialQuery): string;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryLatitudeName(query: cts.JsonPropertyPairGeospatialQuery): string;

    /** Returns the property names used to construct the specified query. **/
  jsonPropertyPairGeospatialQueryLongitudeName(query: cts.JsonPropertyPairGeospatialQuery): string;

    /** Returns the geographical regions with which the specified query was constructed. **/
  jsonPropertyPairGeospatialQueryRegion(query: cts.JsonPropertyPairGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  jsonPropertyPairGeospatialQueryOptions(query: cts.JsonPropertyPairGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  jsonPropertyPairGeospatialQueryWeight(query: cts.JsonPropertyPairGeospatialQuery): number;

    /** Returns a cts:query matching elements by name which has specific attributes representing latitude and longitude values for a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  elementAttributePairGeospatialQuery(elementName: xs.QName, latitudeAttributeNames: xs.QName, longitudeAttributeNames: xs.QName, regions: cts.Region, options?: string, weight?: number): cts.ElementAttributePairGeospatialQuery;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryElementName(query: cts.ElementAttributePairGeospatialQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryLatitudeName(query: cts.ElementAttributePairGeospatialQuery): xs.QName;

    /** Returns the QNames used to construct the specified query. **/
  elementAttributePairGeospatialQueryLongitudeName(query: cts.ElementAttributePairGeospatialQuery): xs.QName;

    /** Returns the geographical regions with which the specified query was constructed. **/
  elementAttributePairGeospatialQueryRegion(query: cts.ElementAttributePairGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  elementAttributePairGeospatialQueryOptions(query: cts.ElementAttributePairGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  elementAttributePairGeospatialQueryWeight(query: cts.ElementAttributePairGeospatialQuery): number;

    /** Returns a cts:query matching path expressions whose content represents a point contained within the given geographic box, circle, or polygon, or equal to the given point. Points that lie between the southern boundary and the northern boundary of a box, travelling northwards, and between the western boundary and the eastern boundary of the box, travelling eastwards, will match. Points contained within the given radius of the center point of a circle will match, using the curved distance on the surface of the Earth. Points contained within the given polygon will match, using great circle arcs over a spherical model of the Earth as edges. An error may result if the polygon is malformed in some way. Points equal to the a given point will match, taking into account the fact that longitudes converge at the poles. Using the geospatial query constructors requires a valid geospatial license key; without a valid license key, searches that include geospatial queries will throw an exception. **/
  pathGeospatialQuery(pathExpression: string, regions: cts.Region, options?: string, weight?: number): cts.PathGeospatialQuery;

    /** Returns the geographical regions with which the specified query was constructed. **/
  pathGeospatialQueryRegion(query: cts.PathGeospatialQuery): cts.Region;

    /** Returns the options for the specified query. **/
  pathGeospatialQueryOptions(query: cts.PathGeospatialQuery): string;

    /** Returns the weight with which the specified query was constructed. **/
  pathGeospatialQueryWeight(query: cts.PathGeospatialQuery): number;

    /** Returns the path expressions used to construct the specified query. **/
  pathGeospatialQueryPathExpression(query: cts.PathGeospatialQuery): string;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementGeospatialBoxes(elementNames: xs.QName, latitudeBounds?: number, longitudeBounds?: number, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified element/child combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementChildGeospatialBoxes(parentElementNames: xs.QName, childElementNames: xs.QName, latitudeBounds?: number, longitudeBounds?: number, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element pair index for each parent and pair of child elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementPairGeospatialBoxes(parentElementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, latitudeBounds?: number, longitudeBounds?: number, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Box;

    /** Returns boxes derived from the specified element point lexicon(s). Element point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial element attribute pair index for each prarent element and attribute pair specified in the function. If there is not a geospatial index configured for each of the specified combinations, an exception is thrown. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  elementAttributePairGeospatialBoxes(parentElementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, latitudeBounds?: number, longitudeBounds?: number, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Box;

    /** Returns boxes derived from the specified point lexicon(s). Point lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each $geo-indexes specified in the function. The points are divided into box-shaped buckets. The $latitude-bounds and $longitude-bounds parameters specify the number and the size of each box-shaped bucket. All included points are bucketed, even those outside the bounds. An empty sequence for both $latitude-bounds and $longitude-bounds specifies one bucket, a single value for both specifies four buckets, two values for both specify nine buckets, and so on. For each non-empty bucket, a cts:box value is returned. By default, the cts:box value is the minimum bounding box of all the points in the bucket. If the "gridded" option is specified, then if a bucket is bounded on a side, its corresponding cts:box side is the bound. Empty buckets return nothing unless the "empties" option is specified. **/
  geospatialBoxes(geoIndexes: cts.Reference, latitudeBounds?: number, longitudeBounds?: number, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Box;

    /** Returns values from the specified element geospatial value lexicon(s). Geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, an exception is thrown. **/
  elementGeospatialValues(elementNames: xs.QName, start?: cts.Point, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element-child geospatial value lexicon(s). Element-child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-child geospatial index of for each of the element/child pairs specified in the function. If there is not a range index configured for each of the specified element/child pairs, then an exception is thrown. **/
  elementChildGeospatialValues(elementNames: xs.QName, childNames: xs.QName, start?: cts.Point, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element-pair geospatial value lexicon(s). element-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementPairGeospatialValues(elementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, start?: cts.Point, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element-attribute-pair geospatial value lexicon(s). element-attribute-pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element-attribute-pair geospatial index of for each of the combinatation specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementAttributePairGeospatialValues(elementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, start?: cts.Point, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element geospatial value lexicon(s) that match the specified wildcard pattern. Element geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element geospatial index for each element specified in the function. If there is not a geospatial index configured for each of the specified elements, then an exception is thrown. **/
  elementGeospatialValueMatch(elementNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element child geospatial value lexicon(s) that match the specified wildcard pattern. Element child geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element child geospatial index for each element and child specified in the function. If there is not a geospatial index configured for each of the specified elements/child combinations, then an exception is thrown. **/
  elementChildGeospatialValueMatch(elementNames: xs.QName, childNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element pair geospatial value lexicon(s) that match the specified wildcard pattern. Element pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element pair geospatial index for each combination of elements specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementPairGeospatialValueMatch(elementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns values from the specified element attribute pair geospatial value lexicon(s) that match the specified wildcard pattern. Element attribute pair geospatial value lexicons are implemented using geospatial indexes; consequently this function requires an element attribute pair geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for each of the specified combinations, then an exception is thrown. **/
  elementAttributePairGeospatialValueMatch(elementNames: xs.QName, latitudeNames: xs.QName, longitudeNames: xs.QName, pattern: any, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): cts.Point;

    /** Returns value co-occurrences from the specified element value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element specified in the function. If there is not a range index configured for the specified element, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  elementValueGeospatialCoOccurrences(elementName1: xs.QName, geoElementName: xs.QName, childName1?: xs.QName, childName2?: xs.QName, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns value co-occurrences from the specified element-attribute value lexicon with the specified geospatial lexicon. Value lexicons are implemented using range indexes; consequently this function requires a range index for the element and attribute pair specified in the function. If there is not a range index configured for the specified element and attribute pair, then an exception is thrown. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for the element/attribute combination specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  elementAttributeValueGeospatialCoOccurrences(elementName1: xs.QName, attributeName1: xs.QName, geoElementName: xs.QName, childName1?: xs.QName, childName2?: xs.QName, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns value co-occurrences from the geospatial lexicons. Geospatial lexicons are implemented using geospatial indexes; consequently this function requires a geospatial index for each combination of elements and attributes specified in the function. If there is not a geospatial index configured for the specified element/attribute combination, then an exception is thrown. **/
  geospatialCoOccurrences(geoElementName1: xs.QName, child1Name1: xs.QName, child1Name2: xs.QName, geoElementName2: xs.QName, child2Name1?: xs.QName, child2Name2?: xs.QName, options?: string, query?: cts.Query, qualityWeight?: number, forestIds?: string): MLNode<any>;

    /** Returns the distance (in miles) between two points. **/
  distance(p1: cts.Point, p2: cts.Point, options?: string): number;

    /** Returns the great circle distance (in miles) between a point and an region. The region is defined by a cts:region. **/
  shortestDistance(p1: cts.Point, region: cts.Region, options?: string): number;

    /** Returns the true bearing in radians of the path from the first point to the second. An error is raised if the two points are the same. **/
  bearing(p1: cts.Point, p2: cts.Point, options?: string): number;

    /** Returns the point at the given distance (in miles) along the given bearing (in radians) from the starting point. **/
  destination(p: cts.Point, bearing: number, distance: number, options?: string): cts.Point;

    /** Returns the point at the intersection of two arcs. If the arcs do not intersect, or lie on the same great circle, or if either arc covers more than 180 degrees, an error is raised. **/
  arcIntersection(p1: cts.Point, p2: cts.Point, q1: cts.Point, q2: cts.Point, options?: string): cts.Point;

    /** Returns true if the box intersects with a region. **/
  boxIntersects(box: cts.Box, region: cts.Region, options?: string): boolean;

    /** Returns true if the circle intersects with a region. **/
  circleIntersects(circle: cts.Circle, region: cts.Region, options?: string): boolean;

    /** Returns true if the polygon intersects with a region. **/
  polygonIntersects(polygon: cts.Polygon, region: cts.Region, options?: string): boolean;

    /** Returns true if the polygon contains a region. **/
  polygonContains(polygon: cts.Polygon, region: cts.Region, options?: string): boolean;

    /** Returns true if the complex-polygon intersects with a region. **/
  complexPolygonIntersects(complexPolygon: cts.ComplexPolygon, region: cts.Region, options?: string): boolean;

    /** Returns true if the complex-polygon contains a region. **/
  complexPolygonContains(complexPolygon: cts.ComplexPolygon, region: cts.Region, options?: string): boolean;

    /** Returns true if the target region intersects with a region. **/
  regionIntersects(target: cts.Region, region: cts.Region, options?: string): boolean;

    /** Returns true if one region contains the other region. **/
  regionContains(region: cts.Region, region2: cts.Region, options?: string): boolean;

    /** Returns a sequence of boxes that bound the given region. **/
  boundingBoxes(region: cts.Region, options?: string): cts.Box;

    /** Returns a sequence of geospatial regions parsed from Well-Known Text format. **/
  parseWkt(wtk: string): cts.Region;

    /** Returns a sequence of strings in Well-Known Text format. **/
  toWkt(wtk: cts.Region): string;

    /** Creates a reference to a geospatial element range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementReference(element: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a geospatial json property range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyReference(property: string, options?: string): cts.Reference;

    /** Creates a reference to a geospatial element child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementChildReference(element: xs.QName, child: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a geospatial json property child range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyChildReference(property: string, child: string, options?: string): cts.Reference;

    /** Creates a reference to a geospatial element pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialElementPairReference(element: xs.QName, lat: xs.QName, long: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a geospatial JSON property pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialJsonPropertyPairReference(property: string, lat: string, long: string, options?: string): cts.Reference;

    /** Creates a reference to a geospatial attribute pair range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialAttributePairReference(element: xs.QName, lat: xs.QName, long: xs.QName, options?: string): cts.Reference;

    /** Creates a reference to a geospatial path range index, for use as a parameter to cts:value-tuples. This function will throw an exception if the specified range index does not exist. **/
  geospatialPathReference(pathExpression: string, options?: string, map?: {[key:string]:any}): cts.Reference;

    /** Return a point approximating the center of the given region. For a point, this is the point itself. For a circle, it is the center point. For a box, it is the point whose latitude is half-way between the northern and southern limits and whose longitude is half-way between the western and eastern limits. For polygons, complex polygons, and linestrings, an approximate centroid is returned. This approximation is rough, and useful for quick comparisons. **/
  approxCenter(region: cts.Region, options?: string): cts.Point;

}
declare var cts:ctsFunctions
