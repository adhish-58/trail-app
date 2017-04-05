import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "tl-register",
    moduleId: module.id,
    templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions) { }

    ngOnInit(): void {}

    register() {
    //        this.RouterExtensions.navigate(['/home'], {
    //            transition: {
    //                duration: 500,
    //                name: 'slideLeft',
    //            },
    //            clearHistory: true
    //        });
      //this.SignInService.registerThisUser(this.userName, this.fullname);
    }
}
