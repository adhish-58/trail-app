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
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService, services_1.UserService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBNkQ7QUFFN0Qsd0NBQWtHO0FBU2xHLElBQWEsaUJBQWlCO0lBUzFCLDJCQUFvQixLQUFxQixFQUFVLE1BQXdCLEVBQVUsV0FBd0IsRUFBVSxXQUF1QixFQUFVLEVBQWM7UUFBbEosVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3RLLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHlDQUFhLEdBQXBCO1FBQ1EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUk7WUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFDUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLE9BQU8sRUFBRSxhQUFhO1FBQXZDLGlCQU1DO1FBTE8sSUFBSSxDQUFDLFdBQVc7YUFDUCxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxlQUFlLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQW1CLEdBQUc7UUFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ1QsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztxQ0FVNkIsdUJBQWMsRUFBa0IseUJBQWdCLEVBQXVCLHNCQUFXLEVBQXNCLHNCQUFXLEVBQWEsbUJBQVc7R0FUN0osaUJBQWlCLENBa0U3QjtBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgUmVnTW9kZWwgfSBmcm9tIFwiLi4vYWNjZXNzLm1vZGVsXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRsLXJlZ2lzdGVyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dCB1c2VybmFtZSBmcm9tIGxvZ2luIHZpZXdcblxuICAgIHVzZXJuYW1lOiBTdHJpbmc7XG4gICAgZnVsbG5hbWU6U3RyaW5nO1xuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHVzZXJuYW1lQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgUmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIFVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBwcml2YXRlIGZiOkZvcm1CdWlsZGVyKSAge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgICAgICBmdWxsbmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMCldXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9sc1snZnVsbG5hbWUnXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tWYWxpZGl0eSgpe1xuICAgICAgICAgICAgdGhpcy5mdWxsbmFtZSA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKVxuICAgICAgICAgICAgICBhbGVydCgnRnVsbG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSlcbiAgICAgICAgICAgICAgYWxlcnQoJ0Z1bGxuYW1lIGlzIHRvbyBzaG9ydCcpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21heGxlbmd0aCcpKVxuICAgICAgICAgICAgICBhbGVydCgnRnVsbG5hbWUgaXMgdG9vIGxvbmcnKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWdpc3RlcigpXG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IHRoaXMuVXNlclNlcnZpY2UudXNlcm5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUaGlzVXNlcih0aGlzLnVzZXJuYW1lLCB0aGlzLmZ1bGxuYW1lKTtcbiAgICB9XG5cbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5Vc2VyU2VydmljZS5mdWxsbmFtZSA9IHRoaXMuZnVsbG5hbWU7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyVGhpc1VzZXIodXNlcl9pZCwgdXNlcl9mdWxsbmFtZSl7XG4gICAgICAgICAgICB0aGlzLlJlc3RTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHsgdXNlcm5hbWU6IHVzZXJfaWQsIGZ1bGxuYW1lOiB1c2VyX2Z1bGxuYW1lIH0sIFwicmVnaXN0ZXItdXNlclwiKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmVnaXN0ZXJlZChyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVJlZ2lzdGVyZWQocmVzKXtcbiAgICAgICAgICAgaWYgKCEocmVzLnRyYWlsVXNlck5hbWUgPT0gXCJmYWxzZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0hvbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkTmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGludmFsaWROYW1lKCl7XG4gICAgICBhbGVydChcIkVycm9yOiBUaGUgbmFtZSBlbnRlcmVkIGlzIGludmFsaWRcIik7XG4gICAgfVxufVxuIl19