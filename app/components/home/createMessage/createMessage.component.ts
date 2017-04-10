import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService } from "../../../services";
import scrollViewModule = require("ui/scroll-view");

@Component({
    selector: "tl-createMessage",
    moduleId: module.id,
    templateUrl: "./createMessage.component.html",
})
export class CreateMessageComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService, private UserService:UserService) {
      this.GameService.get_all_locations().
              subscribe(locationList => this.locationList = locationList['locations'], () => console.log(this.locationList));
    }

    public message: string = "";
    public locationInfo: string = "";
    public locationList: Array<string>;
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: ";

    ngOnInit() {
    }

    addMessage() {
      // Try this in the {N} app
      // {N} can use these animation options
      if (this.message == "" || this.locationInfo == ""){
          alert("Need a message and location info!");
      } else {
          this.RouterExtensions.navigate(['/home'], {
            transition: {
              duration: 500,
              name: 'slideRight',
            }
          });
      }
    }

    createGame() {
      // Try this in the {N} app
      // {N} can use these animation options

      this.GameService.create_new_game(this.UserService.username, this.GameService.game_name).subscribe();
      this.RouterExtensions.navigate(['/home'], {
        transition: {
          duration: 500,
          name: 'slideRight',
        }
      });
  }
    public onLocationTap(args) {
          console.log("-------------------- LocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.locationList[this.indexOfLocation];
      }
}
