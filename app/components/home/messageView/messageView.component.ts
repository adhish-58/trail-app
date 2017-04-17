import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService } from "../../../services";
import dialogs = require("ui/dialogs");


class Message {
    constructor(public loc: string, public mes: string) { }
}

@Component({
    selector: "tl-messageView",
    moduleId: module.id,
    templateUrl: "./messageView.component.html",
})
export class MessageViewComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService,
                  private UserService:UserService) { }

    public gameName: string = this.GameService.NewGameObj.GameName;
    public message: string = "";
    public locationInfo: string = "";
    public yourMessageLocationList = [];
    public indexOfLocation = 0;
    public locationSelectMessage = "Location selected: ";
    public messageAtLocation = "";

    ngOnInit() {
        // Push some sample data to the list
        this.yourMessageLocationList = this.GameService.NewGameObj.GameAttrs;
    }

    createNewGame(){
      this.GameService.new_game(this.GameService.NewGameObj).subscribe();
    }


    done() {
      dialogs.alert({
          title: "Game Created",
          message: "Game is successfully created",
          okButtonText: "Cool!"
      }).then(() => {
          this.createNewGame();
          this.RouterExtensions.navigate(['/seeInvites'], {
              transition: {
                  duration: 500,
                  name: 'fade',
              },
              clearHistory: true
          });
    });
    }

    public onLocationTap(args) {
          console.log("\nLocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.yourMessageLocationList[this.indexOfLocation].loc;

          this.messageAtLocation = "The message at location " + this.yourMessageLocationList[this.indexOfLocation].location + " is: " + this.yourMessageLocationList[this.indexOfLocation].message;

      }

}
