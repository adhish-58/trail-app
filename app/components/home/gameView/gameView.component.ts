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
    public locationName:string;
    public indexOfLocation = 0;
    public locations = [];
    public allLocations: Array<any>;
    public activeGame = this.GameService.CurrentGame;


    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService,
                  private UserService:UserService){

                    this.GameService.get_game_attributes(this.GameService.CurrentGame, this.GameService.GameCreator).subscribe(
                      locationList => this.createLocationList(locationList)
                    )

                    this.GameService.get_all_locations().
                            subscribe(locationList => this.allLocations = locationList['locations']);

                  }

    ngOnInit(){
        geolocation.enableLocationRequest();
    }

    public createLocationList(locationList){
      this.locations = locationList['attributes'];
      this.locationName = this.locations[this.indexOfLocation][1]
    }

    public getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1);
      var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c; // Distance in km
      return d;
    }

    public deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    public compareLocations (lat1, lon1, lat2, lon2){
        var dist = this.getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
        if (dist*1000 < 20)
              return true;
        else
              return false;
    }

    public checkCurrentLocation(){
        var location = geolocation.getCurrentLocation({timeout: 5000}).
          then(
            (loc) => {
              if (loc) {
                for (var locationIndex=0; locationIndex < this.allLocations.length; locationIndex++){
                  if (this.locationName == this.allLocations[locationIndex][0]){
                      if (this.compareLocations(loc.latitude,loc.longitude,this.allLocations[locationIndex][1],this.allLocations[locationIndex][2])){
                        dialogs.alert({
                          title: "Found",
                          message: this.locations[this.indexOfLocation][2],
                          okButtonText: "Hell Yeah!"
                        }).then(() => {
                          if (this.indexOfLocation == this.locations.length - 1) {
                            this.GameService.update_game_status(this.UserService.username, this.GameService.GameCreator, this.GameService.CurrentGame, 1).subscribe();
                            this.RouterExtensions.navigate(['/seeInvites'], {
                                transition: {
                                    duration: 500,
                                    name: 'fade',
                                }
                            });
                          }
                          else {
                            this.indexOfLocation += 1;
                            this.locationName = this.locations[this.indexOfLocation][1];
                          }
                      });
                      break;
                    }
                     else {
                        alert({
                            title: "Not found",
                            message: "There are no message here. Are you sure you're there?",
                            okButtonText: "Sorry, I'll keep looking"
                        })
                      }
                  }
                }
              }
            },
            (e) => {
              //failed to get location
              alert(e.message);
            }
        );
    }


      public forfeit() {
          dialogs.alert({
              title: "Forfeit",
              message: "You loser!",
              okButtonText: "I agree"
          }).then(() => {
              this.RouterExtensions.navigate(['/main'], {
                  transition: {
                      duration: 500,
                      name: 'fade',
                  },
                  clearHistory: true
              });
        });
      }
}
