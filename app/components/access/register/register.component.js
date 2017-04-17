"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var services_1 = require("../../../services");
var forms_1 = require("@angular/forms");
var page_1 = require("ui/page");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, RestService, UserService, fb, page) {
        this.route = route;
        this.router = router;
        this.RestService = RestService;
        this.UserService = UserService;
        this.fb = fb;
        this.page = page;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.loginForm = this.fb.group({
            fullname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(100)]],
        });
        this.usernameControl = this.loginForm.controls['fullname'];
        this.userText = "Welcome, " + this.UserService.username + "!";
    };
    RegisterComponent.prototype.checkValidity = function () {
        this.fullname = this.usernameControl.value;
        if (this.usernameControl.hasError('required'))
            alert('Fullname is required');
        else if (this.usernameControl.hasError('minlength'))
            alert('Fullname is too short');
        else if (this.usernameControl.hasError('maxlength'))
            alert('Fullname is too long');
        else
            this.register();
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.UserService.username;
        this.registerThisUser(this.username, this.fullname);
    };
    RegisterComponent.prototype.goToHome = function () {
        this.UserService.fullname = this.fullname;
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
        styleUrls: ["./register-common.css", "./register.component.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder, page_1.Page])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBNkQ7QUFFN0Qsd0NBQWtHO0FBQ2xHLGdDQUErQjtBQVcvQixJQUFhLGlCQUFpQjtJQVMxQiwyQkFBb0IsS0FBcUIsRUFBVSxNQUF3QixFQUFVLFdBQXdCLEVBQVUsV0FBdUIsRUFBVSxFQUFjLEVBQVUsSUFBVTtRQUF0SyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzFMLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1RixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNsRSxDQUFDO0lBRU0seUNBQWEsR0FBcEI7UUFDUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEMsSUFBSTtZQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNRLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsT0FBTyxFQUFFLGFBQWE7UUFBdkMsaUJBTUM7UUFMTyxJQUFJLENBQUMsV0FBVzthQUNQLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxFQUFFLGVBQWUsQ0FBQzthQUNyRSxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEIsVUFBbUIsR0FBRztRQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDVCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksaUJBQWlCO0lBUDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO3FDQVU2Qix1QkFBYyxFQUFrQix5QkFBZ0IsRUFBdUIsc0JBQVcsRUFBc0Isc0JBQVcsRUFBYSxtQkFBVyxFQUFnQixXQUFJO0dBVGpMLGlCQUFpQixDQW9FN0I7QUFwRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFJlZ01vZGVsIH0gZnJvbSBcIi4uL2FjY2Vzcy5tb2RlbFwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgc2Nyb2xsVmlld01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9zY3JvbGwtdmlld1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtcmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcmVnaXN0ZXItY29tbW9uLmNzc1wiLCBcIi4vcmVnaXN0ZXIuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0IHVzZXJuYW1lIGZyb20gbG9naW4gdmlld1xuXG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHVzZXJuYW1lQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICAgIHB1YmxpYyB1c2VyVGV4dDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIFJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBVc2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSAge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGZ1bGxuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV1dLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1snZnVsbG5hbWUnXTtcbiAgICAgICAgdGhpcy51c2VyVGV4dCA9IFwiV2VsY29tZSwgXCIgKyB0aGlzLlVzZXJTZXJ2aWNlLnVzZXJuYW1lICsgXCIhXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSlcbiAgICAgICAgICAgICAgYWxlcnQoJ0Z1bGxuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcignbWlubGVuZ3RoJykpXG4gICAgICAgICAgICAgIGFsZXJ0KCdGdWxsbmFtZSBpcyB0b28gc2hvcnQnKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdtYXhsZW5ndGgnKSlcbiAgICAgICAgICAgICAgYWxlcnQoJ0Z1bGxuYW1lIGlzIHRvbyBsb25nJyk7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVnaXN0ZXIoKVxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlcigpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLlVzZXJTZXJ2aWNlLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyVGhpc1VzZXIodGhpcy51c2VybmFtZSwgdGhpcy5mdWxsbmFtZSk7XG4gICAgfVxuXG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICAgIHRoaXMuVXNlclNlcnZpY2UuZnVsbG5hbWUgPSB0aGlzLmZ1bGxuYW1lO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlclRoaXNVc2VyKHVzZXJfaWQsIHVzZXJfZnVsbG5hbWUpe1xuICAgICAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucG9zdCh7IHVzZXJuYW1lOiB1c2VyX2lkLCBmdWxsbmFtZTogdXNlcl9mdWxsbmFtZSB9LCBcInJlZ2lzdGVyLXVzZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJlZ2lzdGVyZWQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZWdpc3RlcmVkKHJlcyl7XG4gICAgICAgICAgIGlmICghKHJlcy50cmFpbFVzZXJOYW1lID09IFwiZmFsc2VcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib21lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZE5hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZhbGlkTmFtZSgpe1xuICAgICAgYWxlcnQoXCJFcnJvcjogVGhlIG5hbWUgZW50ZXJlZCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbn1cbiJdfQ==