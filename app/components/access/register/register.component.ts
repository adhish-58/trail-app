import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";

import { RestService } from "../../../services";
import { RegModel } from "../access.model";
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: "tl-register",
    moduleId: module.id,
    templateUrl: "./register.component.html",
    providers: [RestService]
})
export class RegisterComponent implements OnInit {
    //Input username from login view

    username: String;
    fullname:String;
    loginForm: FormGroup;
    usernameControl: AbstractControl;

    private sub: any;
    constructor(private route: ActivatedRoute, private router: RouterExtensions, private RestService: RestService, private fb:FormBuilder)  {
    }

    ngOnInit() {
            this.loginForm = this.fb.group({
                fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            });
            this.usernameControl = this.loginForm.controls['fullname'];
    }

    public checkValidity(){
            this.fullname = this.usernameControl.value;
            if (!this.loginForm.valid)
              this.invalidName()
            else this.register()
    }

    public register() {
            this.sub = this.route.params.subscribe(params => {
             this.username = params['username'];
             this.registerThisUser(this.username, this.fullname)
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

    registerThisUser(user_id, user_fullname){
            this.RestService
                    .post({ username: user_id, fullname: user_fullname }, "register-user")
                    .subscribe(res => {
                        this.validateRegistered(res);
                    });
    }

    validateRegistered(res){
           if (!(res.trailUserName == "false")) {
                this.goToHome();
            } else {
                this.invalidName();
            }
    }

    invalidName(){
      alert("Error: The name entered is invalid");
    }
}
