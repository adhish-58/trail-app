"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var services_1 = require("../../../services");
var access_model_1 = require("../access.model");
var LoginComponent = (function () {
    function LoginComponent(router, RestService, fb) {
        this.router = router;
        this.RestService = RestService;
        this.fb = fb;
        this.subtitleMessage = "Please sign in with your Earlham credentials.";
        this.user = new access_model_1.UserModel();
        this.user.username = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(40)]],
            password: ['']
        });
        this.usernameControl = this.loginForm.controls['username'];
        this.passwordControl = this.loginForm.controls['password'];
    };
    LoginComponent.prototype.onLogIn = function () {
        this.user.username = this.usernameControl.value;
        this.user.password = this.passwordControl.value;
        this.checkValidity();
    };
    LoginComponent.prototype.checkValidity = function () {
        if (!this.loginForm.valid)
            this.inputInvalid();
        else
            this.makeLoginRequest();
    };
    LoginComponent.prototype.makeLoginRequest = function () {
        var _this = this;
        this.RestService
            .post({ username: this.user.username, password: this.user.password }, "log-in")
            .subscribe(function (res) {
            _this.validateMembership(res);
        });
    };
    LoginComponent.prototype.validateMembership = function (res) {
        if (res.isEcUser) {
            if (res.isTrailUser) {
                this.goToHome();
            }
            else {
                this.goToRegister();
            }
        }
        else {
            this.invalidCredentials();
        }
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['register', this.user.username], {
            transition: {
                duration: 500,
                name: 'slideTop',
            },
        });
    };
    LoginComponent.prototype.goToHome = function () {
        this.router.navigate(['/home'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    };
    LoginComponent.prototype.invalidCredentials = function () {
        alert("Error: Username & password do not match. Please try again.");
        this.subtitleMessage = "Error: Username & password do not match. Please try again.";
    };
    ;
    LoginComponent.prototype.inputInvalid = function () {
        alert("Error: Invalid username. Please try again");
        this.subtitleMessage = "Error: Username or password is invalid. Please try again";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.component.html",
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLDhDQUFnRDtBQUNoRCxnREFBNEM7QUFRNUMsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUF3QixFQUFVLFdBQXdCLEVBQVUsRUFBYztRQUFsRixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUYvRixvQkFBZSxHQUFXLCtDQUErQyxDQUFDO1FBRzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUs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b20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vYWNjZXNzLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xuICAgIHVzZXI6IFVzZXJNb2RlbDtcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICB1c2VybmFtZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgICBwYXNzd29yZENvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHB1YmxpYyBzdWJ0aXRsZU1lc3NhZ2U6IHN0cmluZyA9IFwiUGxlYXNlIHNpZ24gaW4gd2l0aCB5b3VyIEVhcmxoYW0gY3JlZGVudGlhbHMuXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2RlbCgpO1xuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0MCldXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJyddXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddO1xuICAgICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25Mb2dJbigpIHtcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWU7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGl0eSgpe1xuICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZClcbiAgICAgICAgdGhpcy5pbnB1dEludmFsaWQoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5tYWtlTG9naW5SZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWtlTG9naW5SZXF1ZXN0KCkge1xuICAgICAgICB0aGlzLlJlc3RTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnBvc3QoeyB1c2VybmFtZTogdGhpcy51c2VyLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkIH0sIFwibG9nLWluXCIpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlTWVtYmVyc2hpcChyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlTWVtYmVyc2hpcChyZXMpIHtcbiAgICAgICAgaWYocmVzLmlzRWNVc2VyKSB7XG4gICAgICAgICAgICBpZihyZXMuaXNUcmFpbFVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib21lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1JlZ2lzdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRDcmVkZW50aWFscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3JlZ2lzdGVyJywgdGhpcy51c2VyLnVzZXJuYW1lXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZhbGlkQ3JlZGVudGlhbHMoKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3I6IFVzZXJuYW1lICYgcGFzc3dvcmQgZG8gbm90IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgdGhpcy5zdWJ0aXRsZU1lc3NhZ2UgPSBcIkVycm9yOiBVc2VybmFtZSAmIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICB9O1xuXG4gICAgaW5wdXRJbnZhbGlkKCl7XG4gICAgICBhbGVydChcIkVycm9yOiBJbnZhbGlkIHVzZXJuYW1lLiBQbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgICAgdGhpcy5zdWJ0aXRsZU1lc3NhZ2UgPSBcIkVycm9yOiBVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbnZhbGlkLiBQbGVhc2UgdHJ5IGFnYWluXCI7XG4gICAgfVxufVxuIl19