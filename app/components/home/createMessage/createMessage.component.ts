import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService } from "../../../services";
import scrollViewModule = require("ui/scroll-view");
import dialogs = require("ui/dialogs");


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
    public locationList: Array<string>;
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: ";
    public currentLocation:string;
    public currentMessage:string;


    ngOnInit() {
    }

    addLocation() {
      this.GameService.new_game_messages[this.currentLocation] = this.currentMessage;
    }

    done(){
        //this.addLocation()
        dialogs.confirm({
            title: "Confirm finish",
            message: "Are you sure you are done adding messages?",
            cancelButtonText: "Cancel",
            okButtonText: "Yes"
        }).then(result => {
            // result argument is boolean
                if (result == true) {
                    this.RouterExtensions.navigate(['/seeInvites'], {
                        transition: {
                            duration: 500,
                            name: 'fade',
                        },
                        clearHistory: true
                    });
                }
            });
    }

    addMessage() {

      if (this.message == ""){
          alert("Need a message!");
      } else {
        this.addLocation()
          this.RouterExtensions.navigate(['/createMessage'], {
            transition: {
              duration: 500,
              name: 'slideRight',
          },
          clearHistory: true
          });
      }
    }

    public onLocationTap(args) {
          console.log("\nLocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.locationList[this.indexOfLocation];
          this.currentLocation = this.locationList[this.indexOfLocation];
      }
}
