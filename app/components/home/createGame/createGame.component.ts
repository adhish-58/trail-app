import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService } from "../../../services";
import scrollViewModule = require("ui/scroll-view");

@Component({
    selector: "tl-createGame",
    moduleId: module.id,
    templateUrl: "./createGame.component.html",
})
export class CreateGameComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService) { }

    public name: string = "";
    public description: string = "";

    ngOnInit() {
    }

    createGame() {
      // Try this in the {N} app
      // {N} can use these animation options
      if (this.name == "" || this.description == ""){
          alert("Need a name and description!");
      } else {
          this.GameService.game_name = this.name;
          this.RouterExtensions.navigate(['/createMessage'], {
            transition: {
              duration: 500,
              name: 'slideLeft',
            }
          });
      }

    }
}
