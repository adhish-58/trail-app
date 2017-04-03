import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "tl-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

    constructor(public RouterExtensions: RouterExtensions) { }

    ngOnInit() {}

    authenticator() {
            this.RouterExtensions.navigate(['/register'], {
                transition: {
                    duration: 500,
                    name: 'slideLeft',
                },
                clearHistory: true
            });
      //this.SignInService.authenticate(this.email, this.password);
    }
}
