import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import dialogs = require("ui/dialogs");
import geolocation = require("nativescript-geolocation");
import scrollViewModule = require("ui/scroll-view");

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    selector: "tl-home",
    moduleId: module.id,
    templateUrl: "./gameView.component.html",
})

export class GameViewComponent implements OnInit {
    public locationList: Array<string> = ["Earlham Hall","OA","Mills", "Hoener", "Wellness Center", "Joseph Moore Museum"];
    public indexOfLocation = 0;
    public locationInfo = ""
    public activeGame = "Lam's game"


    constructor(public RouterExtensions: RouterExtensions){}

    ngOnInit(){
        geolocation.enableLocationRequest();
    }

    public checkCurrentLocation(){
        var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, timeout: 5000}).
          then(
            (loc) => {
              if (loc) {
                  // Do something with the location
                console.log("The latitude is " + loc.latitude)
                console.log("The longitude is " + loc.longitude)
              }
            },
            (e) => {
              //failed to get location
              alert(e.message);
            }
        );
        console.log(location)
        // Alert when the latitude and logitude shows no message:
        alert({
            title: "Not found",
            message: "No message found here!",
            okButtonText: "Keep looking"
        })
    }

    public onLocationTap(args) {
          console.log("-------------------- LocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationInfo = this.locationList[this.indexOfLocation] + " is a place inside Earlham College"
      }

      public forfeit() {
          dialogs.alert({
              title: "Forfeit",
              message: "You loser!",
              okButtonText: "I agree"
          }).then(() => {
              this.RouterExtensions.navigate(['/home'], {
                  transition: {
                      duration: 500,
                      name: 'fade',
                  },
                  clearHistory: true
              });
        });
      }
}
