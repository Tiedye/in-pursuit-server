/**
 * query option object
 */
interface queryOptions {
    /**
     * url of the Overpass API
     * @default 'http://overpass-api.de/api/interpreter'
     */
    overpassUrl?: string,

    /**
     * @default false
     */
    flatProperties?: boolean

}

declare module 'query-overpass' {

    /**
     * query-overpass query function
     * @param query overpass API query
     * @param callback callback that is called with query result
     * @param options the query options
     */
    function query(query:string, callback:(error:string, data:GeoJSON.FeatureCollection<any>)=>void, options?: queryOptions) : void;

    export = query;
}