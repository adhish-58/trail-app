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
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLDhDQUFnRDtBQUNoRCxnREFBNEM7QUFRNUMsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUF3QixFQUFVLFdBQXdCLEVBQVUsRUFBYztRQUFsRixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUYvRixvQkFBZSxHQUFXLCtDQUErQyxDQUFDO1FBRzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUs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IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL2FjY2Vzcy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcbiAgICB1c2VyOiBVc2VyTW9kZWw7XG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgdXNlcm5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgcGFzc3dvcmRDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgICBwdWJsaWMgc3VidGl0bGVNZXNzYWdlOiBzdHJpbmcgPSBcIlBsZWFzZSBzaWduIGluIHdpdGggeW91ciBFYXJsaGFtIGNyZWRlbnRpYWxzLlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgUmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIGZiOkZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNDApXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sndXNlcm5hbWUnXTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVxuICAgIH1cblxuXG4gICAgcHVibGljIG9uTG9nSW4oKSB7XG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpXG4gICAgICAgIHRoaXMuaW5wdXRJbnZhbGlkKCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMubWFrZUxvZ2luUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZUxvZ2luUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgIC5wb3N0KHsgdXNlcm5hbWU6IHRoaXMudXNlci51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCB9LCBcImxvZy1pblwiKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZU1lbWJlcnNoaXAocmVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZU1lbWJlcnNoaXAocmVzKSB7XG4gICAgICAgIGlmKHJlcy5pc0VjVXNlcikge1xuICAgICAgICAgICAgaWYoIShyZXMudHJhaWxVc2VyTmFtZSA9PSBcImZhbHNlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9SZWdpc3RlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkQ3JlZGVudGlhbHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9SZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydyZWdpc3RlcicsIHRoaXMudXNlci51c2VybmFtZV0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52YWxpZENyZWRlbnRpYWxzKCkge1xuICAgICAgICBhbGVydChcIkVycm9yOiBVc2VybmFtZSAmIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHRoaXMuc3VidGl0bGVNZXNzYWdlID0gXCJFcnJvcjogVXNlcm5hbWUgJiBwYXNzd29yZCBkbyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgfTtcblxuICAgIGlucHV0SW52YWxpZCgpe1xuICAgICAgYWxlcnQoXCJFcnJvcjogSW52YWxpZCB1c2VybmFtZS4gUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgIHRoaXMuc3VidGl0bGVNZXNzYWdlID0gXCJFcnJvcjogVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW52YWxpZC4gUGxlYXNlIHRyeSBhZ2FpblwiO1xuICAgIH1cbn1cbiJdfQ==