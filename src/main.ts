/// <reference path="./query-overpass.d.ts" />


import http = require('http');
import qs = require('querystring');


function oapiQuery(q:string):Promise<any> {
    return new Promise<any>(resolve => {
        http.get(`http://overpass-api.de/api/interpreter?data=${qs.escape(q)}`, res => {
            let body = '';
            res.on('data', (d:string) => body += d);
            res.on('end', () => resolve(JSON.parse(body)));
        });
    });
}