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
        this.UserService.store_name(this.user.username);
    };
    LoginComponent.prototype.validateMembership = function (res) {
        if (res.isEcUser) {
            if (!(res.trailUserName == "false")) {
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
        providers: [services_1.RestService, services_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLDhDQUE2RDtBQUM3RCxnREFBNEM7QUFRNUMsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUF3QixFQUFVLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxFQUFjO1FBQXBILFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFGakksb0JBQWUsR0FBVywrQ0FBK0MsQ0FBQztRQUc3RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUdNLGdDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFB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O0FBcEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2UsIFVzZXJTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xuICAgIHVzZXI6IFVzZXJNb2RlbDtcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICB1c2VybmFtZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgICBwYXNzd29yZENvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHB1YmxpYyBzdWJ0aXRsZU1lc3NhZ2U6IHN0cmluZyA9IFwiUGxlYXNlIHNpZ24gaW4gd2l0aCB5b3VyIEVhcmxoYW0gY3JlZGVudGlhbHMuXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgVXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGZiOkZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNDApXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sndXNlcm5hbWUnXTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVxuICAgIH1cblxuXG4gICAgcHVibGljIG9uTG9nSW4oKSB7XG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpXG4gICAgICAgIHRoaXMuaW5wdXRJbnZhbGlkKCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMubWFrZUxvZ2luUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZUxvZ2luUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgIC5wb3N0KHsgdXNlcm5hbWU6IHRoaXMudXNlci51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCB9LCBcImxvZy1pblwiKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZU1lbWJlcnNoaXAocmVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5Vc2VyU2VydmljZS5zdG9yZV9uYW1lKHRoaXMudXNlci51c2VybmFtZSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNZW1iZXJzaGlwKHJlcykge1xuICAgICAgICBpZihyZXMuaXNFY1VzZXIpIHtcbiAgICAgICAgICAgIGlmKCEocmVzLnRyYWlsVXNlck5hbWUgPT0gXCJmYWxzZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0hvbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZENyZWRlbnRpYWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncmVnaXN0ZXInLCB0aGlzLnVzZXIudXNlcm5hbWVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGludmFsaWRDcmVkZW50aWFscygpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvcjogVXNlcm5hbWUgJiBwYXNzd29yZCBkbyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB0aGlzLnN1YnRpdGxlTWVzc2FnZSA9IFwiRXJyb3I6IFVzZXJuYW1lICYgcGFzc3dvcmQgZG8gbm90IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgIH07XG5cbiAgICBpbnB1dEludmFsaWQoKXtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6IEludmFsaWQgdXNlcm5hbWUuIFBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgICB0aGlzLnN1YnRpdGxlTWVzc2FnZSA9IFwiRXJyb3I6IFVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGludmFsaWQuIFBsZWFzZSB0cnkgYWdhaW5cIjtcbiAgICB9XG59XG4iXX0=