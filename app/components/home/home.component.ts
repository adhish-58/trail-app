import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    selector: "tl-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {

    // TODO: Change gameList from Array string to Array object, with tag completed, game name, who invites, game time, date finished ...
    public gameList: Array<string> = ["Lam's game", "James' game", "Vitalii's game", "Niraj's game", "Sidd's game", "Adhish's game"];

    // TODO: Change locationList to array object with info, tag visited/checked, tag message.
    // TODO: Make connection of gameList and locationList (locationList is depended upon gameList)
    public locationList: Array<string> = ["Earlham Hall","OA","Mills", "Hoener", "Wellness Center", "Joseph Moore Museum"];

    public completedGameList: Array<string> = ["Lam's game", "James' game"];

    public gameSelectMessage : string = "Game selected: " + this.gameList[0]
    public gameCompletedSelectMessage : string = "Game selected: " + this.gameList[0]
    public indexOfLocation = 0;
    public indexOfGame = 0;
    public indexOfGameCompleted = 0;
    public locationInfo = ""
    public gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes."
    public activeGame = this.gameList[0]
    public items: Array<DataItem>;
    constructor(public RouterExtensions: RouterExtensions) {
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }

    }

    ngOnInit(): void {}

    public logout() {
        console.log("LOGOUT run")
        this.RouterExtensions.navigate(['/login'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    }

    public onGameTap(args) {
          console.log("------------------------ GameTapped: " + args.index);
          this.indexOfGame = args.index;
          this.gameSelectMessage = "Game selected: " + this.gameList[this.indexOfGame]
      }

      public onLocationTap(args) {
            console.log("-------------------- LocationTapped: " + args.index);
            this.indexOfLocation = args.index;
            this.locationInfo = this.locationList[this.indexOfLocation] + " is a place inside Earlham College"
        }

      public beginGameSelected(){
          console.log("Begin game " + this.gameList[this.indexOfGame])
          this.activeGame = this.gameList[this.indexOfGame]
          // Load location List from game
      }

      public onCompletedGameTap(args) {
            console.log("------------------- GameCompletedTapped: " + args.index);
            this.indexOfGameCompleted = args.index;
            this.gameCompletedSelectMessage = "Game selected: " + this.completedGameList[this.indexOfGameCompleted]
            this.gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes."
        }

      public checkCurrentLocation(){
          alert({
              title: "Not found",
              message: "No message found here!",
              okButtonText: "Keep looking"
          })
      }

}
