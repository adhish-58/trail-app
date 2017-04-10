"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var services_1 = require("../../../services");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, RestService, UserService, fb) {
        this.route = route;
        this.router = router;
        this.RestService = RestService;
        this.UserService = UserService;
        this.fb = fb;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            fullname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(100)]],
        });
        this.usernameControl = this.loginForm.controls['fullname'];
    };
    RegisterComponent.prototype.checkValidity = function () {
        this.fullname = this.usernameControl.value;
        if (!this.loginForm.valid)
            this.invalidName();
        else
            this.register();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.UserService.get_username();
        this.sub = this.route.params.subscribe(function (params) {
            _this.username = params['username'];
            _this.registerThisUser(_this.username, _this.fullname);
        });
    };
    RegisterComponent.prototype.goToHome = function () {
        this.router.navigate(['/home'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    };
    RegisterComponent.prototype.registerThisUser = function (user_id, user_fullname) {
        var _this = this;
        this.RestService
            .post({ username: user_id, fullname: user_fullname }, "register-user")
            .subscribe(function (res) {
            _this.validateRegistered(res);
        });
    };
    RegisterComponent.prototype.validateRegistered = function (res) {
        if (!(res.trailUserName == "false")) {
            this.goToHome();
        }
        else {
            this.invalidName();
        }
    };
    RegisterComponent.prototype.invalidName = function () {
        alert("Error: The name entered is invalid");
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "tl-register",
        moduleId: module.id,
        templateUrl: "./register.component.html",
        providers: [services_1.RestService, services_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBNkQ7QUFFN0Qsd0NBQWtHO0FBU2xHLElBQWEsaUJBQWlCO0lBUzFCLDJCQUFvQixLQUFxQixFQUFVLE1BQXdCLEVBQVUsV0FBd0IsRUFBVSxXQUF1QixFQUFVLEVBQWM7UUFBbEosVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3RLLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHlDQUFhLEdBQXBCO1FBQ1EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixJQUFJO1lBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxvQ0FBUSxHQUFmO1FBQUEsaUJBTUM7UUFMTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzVDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLE9BQU8sRUFBRSxhQUFhO1FBQXZDLGlCQU1DO1FBTE8sSUFBSSxDQUFDLFdBQVc7YUFDUCxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxlQUFlLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQW1CLEdBQUc7UUFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ1QsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDO0FBL0RZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsc0JBQVcsRUFBRSxzQkFBVyxDQUFDO0tBQ3hDLENBQUM7cUNBVTZCLHVCQUFjLEVBQWtCLHlCQUFnQixFQUF1QixzQkFBVyxFQUFzQixzQkFBVyxFQUFhLG1CQUFXO0dBVDdKLGlCQUFpQixDQStEN0I7QUEvRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFJlZ01vZGVsIH0gZnJvbSBcIi4uL2FjY2Vzcy5tb2RlbFwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0bC1yZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlLCBVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXQgdXNlcm5hbWUgZnJvbSBsb2dpbiB2aWV3XG5cbiAgICB1c2VybmFtZTogU3RyaW5nO1xuICAgIGZ1bGxuYW1lOlN0cmluZztcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICB1c2VybmFtZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIFJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBVc2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcikgIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICAgICAgZnVsbG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDApXV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ107XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZE5hbWUoKVxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5Vc2VyU2VydmljZS5nZXRfdXNlcm5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IHBhcmFtc1sndXNlcm5hbWUnXTtcbiAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyVGhpc1VzZXIodGhpcy51c2VybmFtZSwgdGhpcy5mdWxsbmFtZSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlclRoaXNVc2VyKHVzZXJfaWQsIHVzZXJfZnVsbG5hbWUpe1xuICAgICAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucG9zdCh7IHVzZXJuYW1lOiB1c2VyX2lkLCBmdWxsbmFtZTogdXNlcl9mdWxsbmFtZSB9LCBcInJlZ2lzdGVyLXVzZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJlZ2lzdGVyZWQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZWdpc3RlcmVkKHJlcyl7XG4gICAgICAgICAgIGlmICghKHJlcy50cmFpbFVzZXJOYW1lID09IFwiZmFsc2VcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib21lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZE5hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZhbGlkTmFtZSgpe1xuICAgICAgYWxlcnQoXCJFcnJvcjogVGhlIG5hbWUgZW50ZXJlZCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbn1cbiJdfQ==