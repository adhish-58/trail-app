import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as utils from "utils/utils";

import { GameService, UserService } from "../../../services";
import dialogs = require("ui/dialogs");

declare var UIColor: any;

@Component({
    selector: "tl-about",
    moduleId: module.id,
    templateUrl: "./about.component.html",
    styleUrls: ["./about-common.css", "./about.component.css"]
})

export class AboutComponent implements OnInit {
    constructor(public RouterExtensions: RouterExtensions, private page: Page) {}

    ngOnInit() {
      this.page.actionBarHidden = true;
    }


    goToHome() {
        this.RouterExtensions.navigate(['/main'], {
            transition: {
                duration: 350,
                name: 'flipLeft',
                curve: "linear"
            },
            clearHistory: true
        });
    }

}
