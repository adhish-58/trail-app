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
    }

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
        this.yourMessageLocationList.push(new Message("Earlham Hall", "Well done, go to the next location"));
        this.yourMessageLocationList.push(new Message("OA", "You are halfway there! Now go to the next location, grab the big bag in the kitchen"));
        this.yourMessageLocationList.push(new Message("Mills", "Go to third floor Vitalii's room for your drugs. You can use the bag to contain the drugs."));
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
            this.locationSelectMessage = "Location selected: " + this.yourMessageLocationList[this.indexOfLocation].loc;

            this.messageAtLocation = "The message at location " + this.yourMessageLocationList[this.indexOfLocation].loc + " is: " + this.yourMessageLocationList[this.indexOfLocation].mes;

        }
}
