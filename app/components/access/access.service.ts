import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import platform = require("platform");

@Injectable()
export class AccessService {
  public ecUsername: String;
  constructor(private http: Http, public RouterExtensions: RouterExtensions) {}

  signIn(username, pwd){
    var nativePlatformLocalhost;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if(platform.device.os === platform.platformNames.ios){
      nativePlatformLocalhost= 'http://127.0.0.1:7225/sign-in';
    } else if(platform.device.os === platform.platformNames.android){
      nativePlatformLocalhost= 'http://10.0.2.2:7225/sign-in';
    }

    return this.http.post(nativePlatformLocalhost, {'username': username, 'password': pwd}, options)
    .map(response => response.json());
  }

  goToRegister(username){
    this.RouterExtensions.navigate(['/register'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
    this.ecUsername = username;
    console.log("THis is in REgistration View: " + this.ecUsername);
  }

  registerThisUser(username, fullname) {
    console.log("I Have to the User: " + username + " with the fullname: " + fullname);
    var nativePlatformLocalhost;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if(platform.device.os === platform.platformNames.ios){
      nativePlatformLocalhost= 'http://127.0.0.1:7225/register-user';
    } else if(platform.device.os === platform.platformNames.android){
      nativePlatformLocalhost= 'http://10.0.2.2:7225/register-user';
    }

    let auth = this.http.post(nativePlatformLocalhost, {'username': username, 'fullname': fullname}, options)
    .map(response => response.json());

    auth.subscribe(response  => {
      let user = response['user'];
      let userInfo = response['userInfo'];
      let isTrailUser = response['isTrailUser'];

      var trailMembership = this.checkMembership(isTrailUser);
      console.log("====>>> user: " + user + " userInfo: " + userInfo + " isTrailUser: " + trailMembership);

      if(!trailMembership) {
        console.log("Something went wrong! Sorry!");
      } else if (trailMembership) {
        console.log("Welcome New User!");
        this.ecUsername = user.toString();
        this.RouterExtensions.navigate(['/home'], {
          transition: {
            duration: 1000,
            name: 'slideTop',
          }
        })
      }
    },
      error => { console.log("Error happened" + error); },
    );

    this.RouterExtensions.navigate(['/home'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

  checkMembership(status) {
    if(status.localeCompare('False') == 0){
      return false
    } else {
      return true
    }
  }

  authenticate(username, pwd) {
    let auth = this.signIn(username, pwd);
    auth.subscribe(response  => {
      let user = response['user'];
      let isEcUser = response['isEcUser'];
      let isTrailUser = response['isTrailUser'];

      var ecMembership = this.checkMembership(isEcUser);
      var trailMembership = this.checkMembership(isTrailUser);
      console.log("user: " + user + " isEcUser: " + ecMembership + " isTrailUser: " + trailMembership);

      if(!ecMembership) {
        console.log("Username or Password is incorrect. Please Try Again.");
      } else if (ecMembership && !trailMembership) {
        console.log("Is EC Member but Not Trail Member");
        this.goToRegister(user);
      } else if (ecMembership && trailMembership) {
        console.log("Welcome Back User!");
        this.ecUsername = user.toString();
        this.RouterExtensions.navigate(['/home'], {
          transition: {
            duration: 1000,
            name: 'slideTop',
          }
        })
      }
    },
      error => { console.log("Error happened" + error); },
    );

  }//authenticate()

}
