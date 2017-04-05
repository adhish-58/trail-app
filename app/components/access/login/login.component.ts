import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RestService } from "../../../services";
import { UserModel } from "../access.model";

@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers: [RestService]
})

export class LoginComponent{
    user: UserModel;
    public subtitleMessage: string = "Please sign in with your Earlham credentials.";


    constructor(private router: RouterExtensions, private RestService: RestService) {
        this.user = new UserModel();
        this.user.username = "";
        this.user.password = "";
    }

    public onLogIn() {
        this.makeLoginRequest();
    }

    private makeLoginRequest() {
        this.RestService
                .post({ username: this.user.username, password: this.user.password }, "log-in")
                .subscribe(res => {
                    this.validateMembership(res);
                });
    }

    validateMembership(res) {
        if(res.isEcUser) {
            if(res.isTrailUser) {
                this.goToHome();
            } else {
                this.goToRegister();
            }
        } else {
            this.invalidCredentials();
        }
    }

    goToRegister() {
        this.router.navigate(['/access/register'], {
            transition: {
                duration: 500,
                name: 'slideTop',
            },
        });
    }

    goToHome() {
        this.router.navigate(['/home'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    }

    invalidCredentials() {
        alert("Error: Username & password do not match. Please try again.");
        this.subtitleMessage = "Error: Username & password do not match. Please try again.";
    }

}
