import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import dialogs = require("ui/dialogs");

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

    public completedGameList: Array<string> = ["Lam's game", "James' game"];

    public YourGameList: Array<string> = ["Find the treasure", "Find the drugs", "Find the weeds"]

    public gameSelectMessage : string = "Game selected: " + this.gameList[0]
    public gameCompletedSelectMessage : string = "Game selected: " + this.gameList[0]
    public indexOfYourGame = 0
    public indexOfGame = 0;
    public indexOfGameCompleted = 0;
    public YourGameSelectMessage = "Game selected: Game1"
    public gameDescription = "Description for game " + this.YourGameList[this.indexOfYourGame]
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

      public beginGameSelected(){
          console.log("Begin game " + this.gameList[this.indexOfGame])
          dialogs.alert({
              title: "Begin " + this.gameList[this.indexOfGame],
              message: "The game will start in a second.",
              okButtonText: "Continue"
          }).then(() => {
              this.RouterExtensions.navigate(['/gameView'], {
                  transition: {
                      duration: 500,
                      name: 'fade',
                  },
                  clearHistory: true
              });
        });
          // Load location List from game
      }

      public onCompletedGameTap(args) {
            console.log("------------------- GameCompletedTapped: " + args.index);
            this.indexOfGameCompleted = args.index;
            this.gameCompletedSelectMessage = "Game selected: " + this.completedGameList[this.indexOfGameCompleted]
            this.gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes."
        }

        public onYourGameTap(args) {
              console.log("------------------- GameCompletedTapped: " + args.index);
              this.indexOfYourGame = args.index;
              this.YourGameSelectMessage = "Game selected: " + this.YourGameList[this.indexOfYourGame]
              this.gameDescription = "Description for game " + this.YourGameList[this.indexOfYourGame]
          }


}
