import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "tl-createMessage",
    moduleId: module.id,
    templateUrl: "./createMessage.component.html",
})
export class CreateMessageComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions) { }

    public message: string = "";
    public locationInfo: string = "";
    public locationList: Array<string> = ["Earlham Hall","OA","Mills", "Hoener", "Wellness Center", "Joseph Moore Museum", "Marsh"];
    public indexOfLocation = 0
    public locationSelectMessage = "Location selected: " + this.locationList[0]

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

    public onLocationTap(args) {
          console.log("-------------------- LocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationSelectMessage = "Location selected: " + this.locationList[this.indexOfLocation];
      }
}
