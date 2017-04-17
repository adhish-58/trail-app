"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var page_1 = require("ui/page");
var services_1 = require("../../../services");
var access_model_1 = require("../access.model");
var LoginComponent = (function () {
    function LoginComponent(router, RestService, UserService, fb, page) {
        this.router = router;
        this.RestService = RestService;
        this.UserService = UserService;
        this.fb = fb;
        this.page = page;
        this.subtitleMessage = "Please sign in with your Earlham credentials.";
        this.user = new access_model_1.UserModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.loginForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(40)]],
            password: ['', [forms_1.Validators.required]]
        });
        this.usernameControl = this.loginForm.controls['username'];
        this.passwordControl = this.loginForm.controls['password'];
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
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
            if (res.trailUserName == false) {
                this.goToRegister();
            }
            else {
                this.goToHome();
            }
        }
        else {
            this.invalidCredentials();
        }
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['/register'], {
            transition: {
                name: 'flipRight',
                duration: 350,
                curve: "linear"
            },
        });
    };
    LoginComponent.prototype.goToHome = function () {
        this.router.navigate(['/main'], {
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
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.component.html",
        styleUrls: ["./login-common.css", "./login.component.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLGdDQUErQjtBQUUvQiw4Q0FBNkQ7QUFDN0QsZ0RBQTRDO0FBVTVDLElBQWEsY0FBYztJQVV2Qix3QkFBb0IsTUFBd0IsRUFBVSxXQUF3QixFQUFVLFdBQXdCLEVBQVUsRUFBYyxFQUFVLElBQVU7UUFBeEksV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKckosb0JBQWUsR0FBVywrQ0FBK0MsQ0FBQztRQUs3RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxD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Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyw0REFBNEQsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUdOLHFCQUFDO0FBQUQsQ0FBQyxBQTlGRCxJQThGQztBQXRGMEI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVcsaUJBQVU7Z0RBQUM7QUFSbkMsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7UUFDMUQsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztxQ0FZOEIseUJBQWdCLEVBQXVCLHNCQUFXLEVBQXVCLHNCQUFXLEVBQWEsbUJBQVcsRUFBZ0IsV0FBSTtHQVZuSixjQUFjLENBOEYxQjtBQTlGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL2FjY2Vzcy5tb2RlbFwiO1xuaW1wb3J0IHNjcm9sbFZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvc2Nyb2xsLXZpZXdcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcbiAgICB1c2VyOiBVc2VyTW9kZWw7XG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgdXNlcm5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgcGFzc3dvcmRDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgICBwdWJsaWMgc3VidGl0bGVNZXNzYWdlOiBzdHJpbmcgPSBcIlBsZWFzZSBzaWduIGluIHdpdGggeW91ciBFYXJsaGFtIGNyZWRlbnRpYWxzLlwiO1xuXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgUmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIFVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQwKV1dLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sndXNlcm5hbWUnXTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXTtcbiAgICB9XG5cbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9nSW4oKSB7XG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1ZhbGlkaXR5KCl7XG4gICAgICBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykpXG4gICAgICAgIGFsZXJ0KCdVc2VybmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgZWxzZSBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpKVxuICAgICAgICBhbGVydCgnVXNlcm5hbWUgaXMgdG9vIHNob3J0Jyk7XG4gICAgICBlbHNlIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcignbWF4bGVuZ3RoJykpXG4gICAgICAgIGFsZXJ0KCdVc2VybmFtZSBpcyB0b28gbG9uZycpO1xuICAgICAgZWxzZSBpZiAodGhpcy5wYXNzd29yZENvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykpXG4gICAgICAgIGFsZXJ0KCdQYXNzd29yZCBpcyByZXF1aXJlZCcpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLm1ha2VMb2dpblJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VMb2dpblJlcXVlc3QoKSB7XG4gICAgICAgIHRoaXMuUmVzdFNlcnZpY2VcbiAgICAgICAgICAgICAgICAucG9zdCh7IHVzZXJuYW1lOiB0aGlzLnVzZXIudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQgfSwgXCJsb2ctaW5cIilcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVNZW1iZXJzaGlwKHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuVXNlclNlcnZpY2UudXNlcm5hbWUgPSB0aGlzLnVzZXIudXNlcm5hbWU7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNZW1iZXJzaGlwKHJlcykge1xuICAgICAgICBpZihyZXMuaXNFY1VzZXIpIHtcbiAgICAgICAgICAgIGlmKHJlcy50cmFpbFVzZXJOYW1lID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkQ3JlZGVudGlhbHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9SZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVnaXN0ZXInXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmbGlwUmlnaHQnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYWluJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZhbGlkQ3JlZGVudGlhbHMoKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3I6IFVzZXJuYW1lICYgcGFzc3dvcmQgZG8gbm90IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgdGhpcy5zdWJ0aXRsZU1lc3NhZ2UgPSBcIkVycm9yOiBVc2VybmFtZSAmIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICB9O1xuXG5cbn1cbiJdfQ==