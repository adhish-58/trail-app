import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    selector: "tl-home",
    moduleId: module.id,
    templateUrl: "./gameView.component.html",
})

export class GameViewComponent implements OnInit {
    public locationList: Array<string> = ["Earlham Hall","OA","Mills", "Hoener", "Wellness Center", "Joseph Moore Museum"];
    public indexOfLocation = 0;
    public locationInfo = ""
    public activeGame = "Lam's game"


    constructor(public RouterExtensions: RouterExtensions){}

    ngOnInit(){}

    public checkCurrentLocation(){
        alert({
            title: "Not found",
            message: "No message found here!",
            okButtonText: "Keep looking"
        })
    }

    public onLocationTap(args) {
          console.log("-------------------- LocationTapped: " + args.index);
          this.indexOfLocation = args.index;
          this.locationInfo = this.locationList[this.indexOfLocation] + " is a place inside Earlham College"
      }
}
