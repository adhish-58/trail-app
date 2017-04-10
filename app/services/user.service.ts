import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";


@Injectable()
export class UserService {
    public username: String;
    public fullname: String;

    constructor() {}
}
