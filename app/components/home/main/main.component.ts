import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "tl-list",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main-common.css", "./main.component.css"]
})
export class MainComponent implements OnInit {

    constructor(private page: Page, public RouterExtensions: RouterExtensions,) { }

    ngOnInit() {
      this.page.actionBarHidden = true;
    }

    logout() {
        this.RouterExtensions.navigate(['/login'], {
            transition: {
                duration: 350,
                name: 'flipLeft',
                curve: "linear"
            },
            clearHistory: true
        });
    }
}
