import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService, NewGame } from "../../../services";
import scrollViewModule = require("ui/scroll-view");

@Component({
    selector: "tl-createGame",
    moduleId: module.id,
    templateUrl: "./createGame.component.html",
})
export class CreateGameComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService,
                private UserService:UserService) { }

    public name: string = "";

    ngOnInit() {
      this.GameService.NewGameObj = new NewGame;
      this.GameService.NewGameObj.username = this.UserService.username;
    }

    createGame() {
      // Create game then go to Home
      if (this.name == ""){
          alert("Need a name and description!");
      } else {
          this.GameService.NewGameObj.GameName = this.name;
          this.RouterExtensions.navigate(['/createMessage'], {
            transition: {
              duration: 500,
              name: 'slideLeft',
          }
          });
      }

    }
}
