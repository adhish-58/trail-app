import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    loginForm: FormGroup;
    usernameControl: AbstractControl;
    passwordControl: AbstractControl;

    public subtitleMessage: string = "Please sign in with your Earlham credentials.";

    constructor(private router: RouterExtensions, private RestService: RestService, private fb:FormBuilder) {
        this.user = new UserModel();
        this.user.username = "";
        this.user.password = "";
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
            password: ['']
        });
        this.usernameControl = this.loginForm.controls['username'];
        this.passwordControl = this.loginForm.controls['password']
    }


    public onLogIn() {
        this.user.username = this.usernameControl.value;
        this.user.password = this.passwordControl.value;
        this.checkValidity()
    }

    private checkValidity(){
      if (!this.loginForm.valid)
        this.inputInvalid();
      else
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
            if(!(res.trailUserName == "false")) {
                this.goToHome();
            } else {
                this.goToRegister();
            }
        } else {
            this.invalidCredentials();
        }
    }

    goToRegister() {
        this.router.navigate(['register', this.user.username], {
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
    };

    inputInvalid(){
      alert("Error: Invalid username. Please try again");
      this.subtitleMessage = "Error: Username or password is invalid. Please try again";
    }
}
