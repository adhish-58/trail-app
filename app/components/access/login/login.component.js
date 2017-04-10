"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var services_1 = require("../../../services");
var access_model_1 = require("../access.model");
var LoginComponent = (function () {
    function LoginComponent(router, RestService, UserService, fb) {
        this.router = router;
        this.RestService = RestService;
        this.UserService = UserService;
        this.fb = fb;
        this.subtitleMessage = "Please sign in with your Earlham credentials.";
        this.user = new access_model_1.UserModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(40)]],
            password: ['', [forms_1.Validators.required]]
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
    };
    LoginComponent.prototype.makeLoginRequest = function () {
        var _this = this;
        this.RestService
            .post({ username: this.user.username, password: this.user.password }, "log-in")
            .subscribe(function (res) {
            _this.validateMembership(res);
        });
        this.UserService.username = this.user.username;
    };
    LoginComponent.prototype.validateMembership = function (res) {
        if (res.isEcUser) {
            if (!(res.trailUserName == "false")) {
                this.goToRegister();
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
        this.router.navigate(['register'], {
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.component.html",
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLDhDQUE2RDtBQUM3RCxnREFBNEM7QUFRNUMsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUF3QixFQUFVLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxFQUFjO1FBQXBILFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFGakksb0JBQWUsR0FBVywrQ0FBK0MsQ0FBQztRQUc3RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFH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QUFDO0lBR04scUJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDO0FBdkZZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7cUNBVThCLHlCQUFnQixFQUF1QixzQkFBVyxFQUF1QixzQkFBVyxFQUFhLG1CQUFXO0dBUi9ILGNBQWMsQ0F1RjFCO0FBdkZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xuICAgIHVzZXI6IFVzZXJNb2RlbDtcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICB1c2VybmFtZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgICBwYXNzd29yZENvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHB1YmxpYyBzdWJ0aXRsZU1lc3NhZ2U6IHN0cmluZyA9IFwiUGxlYXNlIHNpZ24gaW4gd2l0aCB5b3VyIEVhcmxoYW0gY3JlZGVudGlhbHMuXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgVXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGZiOkZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNDApXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddO1xuICAgICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddO1xuICAgIH1cblxuXG4gICAgcHVibGljIG9uTG9nSW4oKSB7XG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSlcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICBlbHNlIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcignbWlubGVuZ3RoJykpXG4gICAgICAgIGFsZXJ0KCdVc2VybmFtZSBpcyB0b28gc2hvcnQnKTtcbiAgICAgIGVsc2UgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdtYXhsZW5ndGgnKSlcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGlzIHRvbyBsb25nJyk7XG4gICAgICBlbHNlIGlmICh0aGlzLnBhc3N3b3JkQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSlcbiAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMubWFrZUxvZ2luUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZUxvZ2luUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgIC5wb3N0KHsgdXNlcm5hbWU6IHRoaXMudXNlci51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCB9LCBcImxvZy1pblwiKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZU1lbWJlcnNoaXAocmVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5Vc2VyU2VydmljZS51c2VybmFtZSA9IHRoaXMudXNlci51c2VybmFtZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZU1lbWJlcnNoaXAocmVzKSB7XG4gICAgICAgIGlmKHJlcy5pc0VjVXNlcikge1xuICAgICAgICAgICAgaWYoIShyZXMudHJhaWxVc2VyTmFtZSA9PSBcImZhbHNlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZENyZWRlbnRpYWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncmVnaXN0ZXInXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZhbGlkQ3JlZGVudGlhbHMoKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3I6IFVzZXJuYW1lICYgcGFzc3dvcmQgZG8gbm90IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgdGhpcy5zdWJ0aXRsZU1lc3NhZ2UgPSBcIkVycm9yOiBVc2VybmFtZSAmIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICB9O1xuXG5cbn1cbiJdfQ==