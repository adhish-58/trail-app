import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "tl-list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./login-common.css", "./list.component.css"]
})
export class ListComponent implements OnInit {

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
