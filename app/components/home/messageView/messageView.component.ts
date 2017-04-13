import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GameService, UserService } from "../../../services";

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

    public message: string = "";
    public locationInfo: string = "";
    public yourMessageLocationList = []
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: ";
    public messageAtLocation = "";

    ngOnInit() {
        // Push some sample data to the list
        this.yourMessageLocationList.push(new Message("Earlham Hall", "Well done, go to the next location"));
        this.yourMessageLocationList.push(new Message("OA", "You are halfway there! Now go to the next location, grab the big bag in the kitchen"));
        this.yourMessageLocationList.push(new Message("Mills", "Go to third floor Vitalii's room for your drugs. You can use the bag to contain the drugs."));
    }

    createGame() {
      // Try this in the {N} app
      // {N} can use these animation options


  }

    done() {
      this.createGame;
      alert('Game Created');
      this.RouterExtensions.navigate(['/home'], {
        transition: {
          duration: 500,
          name: 'slideRight',
        }
      });

    }

    public onLocationTap(args) {
          console.log("\nLocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.yourMessageLocationList[this.indexOfLocation].loc;

          this.messageAtLocation = "The message at location " + this.yourMessageLocationList[this.indexOfLocation].loc + " is: " + this.yourMessageLocationList[this.indexOfLocation].mes;

      }

      public addNewMessage() {
          this.RouterExtensions.navigate(['/createMessage'], {
            transition: {
              duration: 500,
              name: 'slideLeft',
            }
          });
      }
}
