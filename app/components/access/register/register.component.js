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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBNkQ7QUFFN0Qsd0NBQWtHO0FBVWxHLElBQWEsaUJBQWlCO0lBUzFCLDJCQUFvQixLQUFxQixFQUFVLE1BQXdCLEVBQVUsV0FBd0IsRUFBVSxXQUF1QixFQUFVLEVBQWM7UUFBbEosVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3RLLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHlDQUFhLEdBQXBCO1FBQ1EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUk7WUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFDUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLE9BQU8sRUFBRSxhQUFhO1FBQXZDLGlCQU1DO1FBTE8sSUFBSSxDQUFDLFdBQVc7YUFDUCxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxlQUFlLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQW1CLEdBQUc7UUFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ1QsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztxQ0FVNkIsdUJBQWMsRUFBa0IseUJBQWdCLEVBQXVCLHNCQUFXLEVBQXNCLHNCQUFXLEVBQWEsbUJBQVc7R0FUN0osaUJBQWlCLENBa0U3QjtBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgUmVnTW9kZWwgfSBmcm9tIFwiLi4vYWNjZXNzLm1vZGVsXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgc2Nyb2xsVmlld01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9zY3JvbGwtdmlld1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtcmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0IHVzZXJuYW1lIGZyb20gbG9naW4gdmlld1xuXG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBmdWxsbmFtZTpzdHJpbmc7XG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgdXNlcm5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgVXNlclNlcnZpY2U6VXNlclNlcnZpY2UsIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIpICB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgICAgIGZ1bGxuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV1dLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1ZhbGlkaXR5KCl7XG4gICAgICAgICAgICB0aGlzLmZ1bGxuYW1lID0gdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykpXG4gICAgICAgICAgICAgIGFsZXJ0KCdGdWxsbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpKVxuICAgICAgICAgICAgICBhbGVydCgnRnVsbG5hbWUgaXMgdG9vIHNob3J0Jyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcignbWF4bGVuZ3RoJykpXG4gICAgICAgICAgICAgIGFsZXJ0KCdGdWxsbmFtZSBpcyB0b28gbG9uZycpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5Vc2VyU2VydmljZS51c2VybmFtZTtcblxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclRoaXNVc2VyKHRoaXMudXNlcm5hbWUsIHRoaXMuZnVsbG5hbWUpO1xuICAgIH1cblxuICAgIGdvVG9Ib21lKCkge1xuICAgICAgICB0aGlzLlVzZXJTZXJ2aWNlLmZ1bGxuYW1lID0gdGhpcy5mdWxsbmFtZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJUaGlzVXNlcih1c2VyX2lkLCB1c2VyX2Z1bGxuYW1lKXtcbiAgICAgICAgICAgIHRoaXMuUmVzdFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QoeyB1c2VybmFtZTogdXNlcl9pZCwgZnVsbG5hbWU6IHVzZXJfZnVsbG5hbWUgfSwgXCJyZWdpc3Rlci11c2VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSZWdpc3RlcmVkKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlUmVnaXN0ZXJlZChyZXMpe1xuICAgICAgICAgICBpZiAoIShyZXMudHJhaWxVc2VyTmFtZSA9PSBcImZhbHNlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWROYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52YWxpZE5hbWUoKXtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6IFRoZSBuYW1lIGVudGVyZWQgaXMgaW52YWxpZFwiKTtcbiAgICB9XG59XG4iXX0=