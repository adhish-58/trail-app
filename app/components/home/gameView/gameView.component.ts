import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import dialogs = require("ui/dialogs");
import geolocation = require("nativescript-geolocation");
import scrollViewModule = require("ui/scroll-view");
import { GameService, UserService } from "../../../services";


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
    public locationInfo = "Earlham Hall is one of the buildings that Earlham College owns. It is located right next to TheHeart, which is the big circular grass field. Go to Earlham Hall and press the button, a message awaits.";
    public activeGame = this.GameService.CurrentGame;


    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService,
                  private UserService:UserService){}

    ngOnInit(){
        geolocation.enableLocationRequest();
    }

    public checkCurrentLocation(){
        var location = geolocation.getCurrentLocation({timeout: 5000}).
          then(
            (loc) => {
              if (loc) {
                  // Do something with the location
                console.log("\nThe latitude is " + loc.latitude)
                console.log("\nThe longitude is " + loc.longitude)
              }
            },
            (e) => {
              //failed to get location
              alert(e.message);
            }
        );
        // Alert when the latitude and logitude shows no message:
        alert({
            title: "Not found",
            message: "There are no message here. Are you there yet?",
            okButtonText: "I'll keep looking"
        })
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
