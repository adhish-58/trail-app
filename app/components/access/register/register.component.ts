import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";

import { RestService } from "../../../services";
import { RegModel } from "../access.model";

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
    private sub: any;
    constructor(private route: ActivatedRoute, private router: RouterExtensions, private RestService: RestService)  {
    }

    ngOnInit(): void {}

    public register() {
            this.sub = this.route.params.subscribe(params => {
             this.username = params['username'];
             this.registerThisUser(this.username, this.fullname)
            });
    }

    goToRegister(){
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
            this.goToRegister;
    }
}
