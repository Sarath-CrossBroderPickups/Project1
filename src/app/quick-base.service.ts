import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class QuickBase {
    url = "https://api.quickbase.com/v1/records/query";

    httpOptions = {
        headers: new HttpHeaders({
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': 'QB-USER-TOKEN b5vdax_bmq8_dhfuevhbiscd9hbxudteycqwpv8x',
            'Content-Type': 'application/json',
            'Host': 'api.quickbase.com',
            'Origin': 'https://developer.quickbase.com',
            'QB-Realm-Hostname': 'cbms.quickbase.com'
        }),

    };

    constructor(private http: HttpClient) {

    }
    getOrders(): Observable<{}> {
        return this.http.post<object>(this.url, {
            "from": "bjdtynbts",
            "where": "{54.EQ.'32150'}",
            "sortBy": [
                {
                    "fieldId": 1,
                    "order": "DESC"
                }]
        }, this.httpOptions);
    }
}