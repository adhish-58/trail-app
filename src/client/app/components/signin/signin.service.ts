import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {cons} from "../../../components.module";
var platform = require("platform");

@Injectable()
export class SignInService {
  constructor(private http: Http) {}

  signin(username, pwd){
    var nativePlatformLocalhost;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if(platform.device.os === platform.platformNames.ios){
      nativePlatformLocalhost= 'http://127.0.0.1:5000/sign-in';
    } else if(platform.device.os === platform.platformNames.android){
      nativePlatformLocalhost= 'http://10.0.2.2:5000/sign-in';
    }

    console.log("I AM BEING CALLED.");
    return this.http.post(nativePlatformLocalhost, {'username': username, 'password': pwd}, options)
    .map(response => response.json())
    .subscribe(
      response  => { console.log("Success Response " + JSON.stringify(response))},
      error     => { console.log("Error happened" + error); },
      ()        => console.log("the subscription is completed")
    );
  }


}
