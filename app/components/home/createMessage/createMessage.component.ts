import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService, GameAttributes } from "../../../services";
import scrollViewModule = require("ui/scroll-view");
import dialogs = require("ui/dialogs");


@Component({
    selector: "tl-createMessage",
    moduleId: module.id,
    templateUrl: "./createMessage.component.html",
})
export class CreateMessageComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions, private GameService:GameService,
                private UserService:UserService) {
      this.GameService.get_all_locations().
              subscribe(locationList => this.locationList = locationList['locations'],
                        () => console.log(this.locationList));
    }

    public message: string = "";
    public message_num: string = "Message 1";
    public locationList: Array<string>=[];
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: ";
    public currentLocation:string="";
    public messageObj= new GameAttributes;
    public lastLocation:string="";

    ngOnInit() {
    }

    addLocation() {
       this.messageObj.message =  this.message;
       this.messageObj.location = this.currentLocation;
       this.messageObj.rank = this.GameService.NewGameObj.max_rank + 1;
       this.GameService.NewGameObj.max_rank += 1;

       this.GameService.NewGameObj['GameAttrs'].push(this.messageObj);

       this.messageObj = new GameAttributes;
       this.message_num = "Message " + (this.GameService.NewGameObj.max_rank + 1);
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
                    //this.createNewGame();
                    this.GameService.CurrentGame = this.GameService.NewGameObj.GameName;
                    this.RouterExtensions.navigate(['/messageView'], {
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
      }
      else if (this.currentLocation == this.lastLocation) {
        dialogs.alert({
            title: "Error",
            message: "Can't choose the same location for two consecutive messages.",
            okButtonText: "Continue"
        })
      }
      else {
        this.lastLocation = this.currentLocation
        this.addLocation()
        this.message = ""
        dialogs.alert({
            title: "Success",
            message: "Your message has been added.",
            okButtonText: "Continue"
        })
      }
    }

    public onLocationTap(args) {
          console.log("\nLocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.locationList[this.indexOfLocation];
          this.currentLocation = this.locationList[this.indexOfLocation];
      }
}
