import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AccessService } from "../access.service";


@Component({
    selector: "tl-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    constructor(public RouterExtensions: RouterExtensions, private AccessService: AccessService) { }

    ngOnInit() {}

    authenticator() {
    //         this.RouterExtensions.navigate(['/register'], {
    //             transition: {
    //                 duration: 500,
    //                 name: 'slideLeft',
    //             },
    //             clearHistory: true
    //         });
      this.AccessService.authenticate(this.username, this.password);
    }
}
