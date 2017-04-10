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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHdDQUFrRztBQUVsRyxtQ0FBaUM7QUFDakMsaUNBQStCO0FBRS9CLDhDQUE2RDtBQUM3RCxnREFBNEM7QUFTNUMsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUF3QixFQUFVLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxFQUFjO1FBQXBILFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFGakksb0JBQWUsR0FBVywrQ0FBK0MsQ0FBQztRQUc3RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFHTSxnQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFTyxzQ0FBYSxHQUFyQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUk7WUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8seUNBQWdCLEdBQXhCO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVzthQUNQLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUM7YUFDOUUsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsR0FBRztRQUNsQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDL0IsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLDREQUE0RCxDQUFDO0lBQ3hGLENBQUM7SUFBQSxDQUFDO0lBR04scUJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDO0FBdkZZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7cUNBVThCLHlCQUFnQixFQUF1QixzQkFBVyxFQUF1QixzQkFBVyxFQUFhLG1CQUFXO0dBUi9ILGNBQWMsQ0F1RjFCO0FBdkZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcbmltcG9ydCBzY3JvbGxWaWV3TW9kdWxlID0gcmVxdWlyZShcInVpL3Njcm9sbC12aWV3XCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XG4gICAgdXNlcjogVXNlck1vZGVsO1xuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHVzZXJuYW1lQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICAgIHBhc3N3b3JkQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gICAgcHVibGljIHN1YnRpdGxlTWVzc2FnZTogc3RyaW5nID0gXCJQbGVhc2Ugc2lnbiBpbiB3aXRoIHlvdXIgRWFybGhhbSBjcmVkZW50aWFscy5cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIFJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBVc2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2RlbCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0MCldXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ107XG4gICAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ107XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25Mb2dJbigpIHtcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWU7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGl0eSgpe1xuICAgICAgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKVxuICAgICAgICBhbGVydCgnVXNlcm5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgIGVsc2UgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSlcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCcpO1xuICAgICAgZWxzZSBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21heGxlbmd0aCcpKVxuICAgICAgICBhbGVydCgnVXNlcm5hbWUgaXMgdG9vIGxvbmcnKTtcbiAgICAgIGVsc2UgaWYgKHRoaXMucGFzc3dvcmRDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKVxuICAgICAgICBhbGVydCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5tYWtlTG9naW5SZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWtlTG9naW5SZXF1ZXN0KCkge1xuICAgICAgICB0aGlzLlJlc3RTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnBvc3QoeyB1c2VybmFtZTogdGhpcy51c2VyLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkIH0sIFwibG9nLWluXCIpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlTWVtYmVyc2hpcChyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLlVzZXJTZXJ2aWNlLnVzZXJuYW1lID0gdGhpcy51c2VyLnVzZXJuYW1lO1xuICAgIH1cblxuICAgIHZhbGlkYXRlTWVtYmVyc2hpcChyZXMpIHtcbiAgICAgICAgaWYocmVzLmlzRWNVc2VyKSB7XG4gICAgICAgICAgICBpZighKHJlcy50cmFpbFVzZXJOYW1lID09IFwiZmFsc2VcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib21lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1JlZ2lzdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRDcmVkZW50aWFscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3JlZ2lzdGVyJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52YWxpZENyZWRlbnRpYWxzKCkge1xuICAgICAgICBhbGVydChcIkVycm9yOiBVc2VybmFtZSAmIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHRoaXMuc3VidGl0bGVNZXNzYWdlID0gXCJFcnJvcjogVXNlcm5hbWUgJiBwYXNzd29yZCBkbyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgfTtcblxuXG59XG4iXX0=