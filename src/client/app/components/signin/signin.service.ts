import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var platform = require("platform");

@Injectable()
export class SignInService {
  constructor(private http: Http) {}

  signin() {
    var nativePlatformLocalhost;

    /*in some function or globally*/
    if(platform.device.os === platform.platformNames.ios){
      /*localhost for ios*/
      nativePlatformLocalhost= '127.0.0.1:5000/sign-in';
    }
    else if(platform.device.os === platform.platformNames.android){
      /*localhost for android*/
      nativePlatformLocalhost= '10.0.2.2:5000/sign-in';
    }
    this.http.get(nativePlatformLocalhost).map(response => response.text()).subscribe();
  }
}
