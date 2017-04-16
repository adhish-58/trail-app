import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService } from "../../../services";
import scrollViewModule = require("ui/scroll-view");
import dialogs = require("ui/dialogs");


class Message {
    constructor(public loc: string, public mes: string) { }
}


@Component({
    selector: "tl-seeInvites",
    moduleId: module.id,
    templateUrl: "./seeInvites.component.html",
})
export class SeeInvitesComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService, private UserService:UserService) {
      this.GameService.get_game_attributes(this.GameService.CurrentGame, this.UserService.username).subscribe(
        locationList => this.yourMessageLocationList = locationList['attributes'],
        () => console.log("TEST MONEY")
      )

    //   this.GameService.get_all_locations().
    //           subscribe(locationList => this.yourMessageLocationList = locationList['locations']);
    }

    public Game_title: string = this.GameService.CurrentGame;
    public message: string = "";
    public invitesList: Array<string> = [];
    public indexOfInvites = 0
    public userInfo = "";

    public locationInfo: string = "";
    public yourMessageLocationList = []
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: ";
    public messageAtLocation = "";


    ngOnInit() {
        if (this.invitesList.length == 0) {
            this.userInfo = "Oops, you have not invited anyone to the game yet.";
        }

    }

    addInvites() {
        this.userInfo = "";
        dialogs.prompt({
            title: "Invite people",
            okButtonText: "Invite",
            cancelButtonText: "Cancel",
        }).then(r => {
            console.log("Dialog result: " + r.result + ", user: " + r.text);
            if (r.result){
                this.invitesList.push(r.text)
            }
        });
    }

    public onInvitesTap(args) {
          console.log("\nLocationTapped: " + args.index);
          this.indexOfInvites = args.index;

      }

      public onLocationTap(args) {
            console.log("\nLocationTapped: " + args.index);
            this.indexOfLocation = args.index;
            this.locationSelectMessage = "Location selected: " + this.yourMessageLocationList[this.indexOfLocation][1];

            this.messageAtLocation = "The message at location " + this.yourMessageLocationList[this.indexOfLocation][1] + " is: " + this.yourMessageLocationList[this.indexOfLocation][2];

        }
}
