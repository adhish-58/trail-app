import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import * as platform from "platform";


@Injectable()
export class RestService {
    private prodApiUrl = "http://159.28.23.1:7225/";
    private localApiUrl: String;
    // private localApiUrl = "http://localhost:7225/";

    constructor(private http: Http) {
        if(platform.isIOS) {
            this.localApiUrl= "http://127.0.0.1:7225/";
        } else if (platform.isAndroid) {
            this.localApiUrl= "http://10.0.2.2:7225/";
        }
    }

    public post(data: any, path: string) {
        let finalURL = this.prodApiUrl + path;
        return this.http.post(finalURL, data, this.headerRequestOptions())
            .map(res => res.json());
    }

    public get(path: string) {
        let finalURL = this.prodApiUrl + path;
        return this.http.get(finalURL).map(res => res.json())
    }
    //
    // public request() {
    //
    // }
    //
    // public put() {
    //
    // }
    //
    // public delete() {
    //
    // }
    //
    // public patch() {
    //
    // }
    //
    // public head() {
    //
    // }

    private headerRequestOptions() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}
