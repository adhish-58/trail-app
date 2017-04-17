import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { GameService, UserService } from "../../services";
import dialogs = require("ui/dialogs");
import scrollViewModule = require("ui/scroll-view");

@Component({
    selector: "tl-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {

    // TODO: Change gameList from Array string to Array object, with tag completed, game name, who invites, game time, date finished ...
    public gameList: Array<string>= [];

    // TODO: Change locationList to array object with info, tag visited/checked, tag message.
    // TODO: Make connection of gameList and locationList (locationList is depended upon gameList)

    public completedGameList: Array<string>;

    public YourGameList: Array<string>;

    public gameCompletedSelectMessage : string;
    public indexOfYourGame = 0
    public indexOfGame = 0;
    public indexOfGameCompleted = 0;
    public gameInfo = ""
    public activeGame = this.gameList[0]
    public gameCreators: string;


    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService, private UserService:UserService) {
        this.GameService.get_all_created_games(this.UserService.username).subscribe(
          gamesCreated => this.YourGameList = gamesCreated['games']
        )

        this.GameService.get_invited_games(this.UserService.username).subscribe(
          gamesInvited => this.gamesInvitedParser(gamesInvited)
        )

        this.GameService.get_completed_games(this.UserService.username).subscribe(
          completedGames => this.completedGamesFunc(completedGames),
        )
    }

    ngOnInit(): void {
    }

    public gamesInvitedParser(gamesInvited){
      this.gameList = gamesInvited['games'][0];
      this.gameCreators = gamesInvited['games'][1];
    }

    public completedGamesFunc(completedGames){
      this.completedGameList = completedGames['games'];
      if (this.completedGameList[0] == "")
        this.gameCompletedSelectMessage = "No game founded. You're a newbie huh?";
    }

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
          console.log("\nGameTapped: " + args.index);
          this.indexOfGame = args.index;
          this.beginGameSelected()
      }

      public beginGameSelected(){
          console.log("\nBegin game " + this.gameList[this.indexOfGame])
          dialogs.confirm({
              title: "Begin " + this.gameList[this.indexOfGame],
              message: "Are you sure you want to begin the game?",
              cancelButtonText: "Cancel",
              okButtonText: "Yes"
          }).then(result => {
              // result argument is boolean
                  this.GameService.CurrentGame = this.gameList[this.indexOfGame];
                  this.GameService.GameCreator = this.gameCreators[this.indexOfGame];
                  if (result == true) {
                      this.RouterExtensions.navigate(['/gameView'], {
                          transition: {
                              duration: 500,
                              name: 'fade',
                          },
                          clearHistory: true
                      });
                  }
              });


      }

      public onCompletedGameTap(args) {
            console.log("\nGameCompletedTapped: " + args.index);
            this.indexOfGameCompleted = args.index;
            this.gameCompletedSelectMessage = "Game selected: " + this.completedGameList[this.indexOfGameCompleted];
            // this.gameInfo = "You completed this game on 4/1/2017. Takes 4 hours 24 minutes."
        }

        public onYourGameTap(args) {
              console.log("\nGameCompletedTapped: " + args.index);
              this.indexOfYourGame = args.index;
              this.GameService.CurrentGame = this.YourGameList[args.index];
              this.RouterExtensions.navigate(['/seeInvites'], {
                  transition: {
                      duration: 500,
                      name: 'slideLeft',
                  },
                  clearHistory: true
              });
          }


}
