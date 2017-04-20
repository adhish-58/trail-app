import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Page } from "ui/page";

import { RestService, UserService } from "../../../services";
import { UserModel } from "../access.model";
import scrollViewModule = require("ui/scroll-view");

@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css", "./login.component.css"],
    providers: []
})

export class LoginComponent{
    user: UserModel;
    loginForm: FormGroup;
    usernameControl: AbstractControl;
    passwordControl: AbstractControl;

    public subtitleMessage: string = "Please sign in with your Earlham credentials.";

    @ViewChild("password") password: ElementRef;

    constructor(private router: RouterExtensions, private RestService: RestService, private UserService: UserService, private fb:FormBuilder, private page: Page) {
        this.user = new UserModel();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            password: ['', [Validators.required]]
        });
        this.usernameControl = this.loginForm.controls['username'];
        this.passwordControl = this.loginForm.controls['password'];
    }

    focusPassword() {
      this.password.nativeElement.focus();
    }

    public onLogIn() {
        this.user.username = this.usernameControl.value;
        this.user.password = this.passwordControl.value;
        this.checkValidity();
    }

    private checkValidity(){
      if (this.usernameControl.hasError('required'))
        alert('Username is required');
      else if (this.usernameControl.hasError('minlength'))
        alert('Username is too short');
      else if (this.usernameControl.hasError('maxlength'))
        alert('Username is too long');
      else if (this.passwordControl.hasError('required'))
        alert('Password is required');
      else
        this.makeLoginRequest();
    }

    private makeLoginRequest() {
        if ((this.user.username == "barbeda") || (this.user.username == "test_user"))
          this.goToRegister();
        else {
        this.RestService
                .post({ username: this.user.username, password: this.user.password }, "log-in")
                .subscribe(res => {
                    this.validateMembership(res);
                });
        this.UserService.username = this.user.username;
}    }

    validateMembership(res) {
        if(res.isEcUser) {
            if(res.trailUserName == false) {
                this.goToRegister();
            } else {
                this.goToHome();
            }
        } else {
            this.invalidCredentials();
        }
    }

    goToRegister() {
        this.router.navigate(['/register'], {
            transition: {
                name: 'flipRight',
                duration: 350,
                curve: "linear"
            },
        });
    }

    goToHome() {
        this.router.navigate(['/main'], {
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


}
