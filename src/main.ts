/// <reference path="./query-overpass.d.ts" />


import qo = require('query-overpass');
import fs = require('fs');

//-80.5560328513,43.4729362081,-80.548641488,43.4770853195
function getArea(west: number, south: number, east: number, north: number): Promise<GeoJSON.FeatureCollection<any>> {
    return new Promise<GeoJSON.FeatureCollection<any>>((resovle, reject) => {
        qo(`[out:json];(node(${south},${west},${north},${east});rel(bn)->.x;way(bn);rel(bw););(._;node(w););(._;rel(br);rel(br););out;`, (err, data) => {
            if (!err) {
                resovle(data);
            } else {
                reject(err);
            }
        });
    });
}


getArea(-80.5560328513, 43.4729362081, -80.548641488, 43.4770853195).then(data => {
    fs.writeFileSync('tst.txt', JSON.stringify(data));
    console.log(data);
});