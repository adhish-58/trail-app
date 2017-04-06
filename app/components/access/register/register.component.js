"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var services_1 = require("../../../services");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, RestService, fb) {
        this.route = route;
        this.router = router;
        this.RestService = RestService;
        this.fb = fb;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            fullname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(40)]],
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
        this.sub = this.route.params.subscribe(function (params) {
            _this.username = params['username'];
            _this.registerThisUser(_this.username, _this.fullname);
        });
    };
    RegisterComponent.prototype.goToRegister = function () {
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
        this.goToRegister;
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
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBZ0Q7QUFFaEQsd0NBQWtHO0FBU2xHLElBQWEsaUJBQWlCO0lBUzFCLDJCQUFvQixLQUFxQixFQUFVLE1BQXdCLEVBQVUsV0FBd0IsRUFBVSxFQUFjO1FBQWpILFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDckksQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0seUNBQWEsR0FBcEI7UUFDUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLElBQUk7WUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFBQSxpQkFLQztRQUpPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFPLEVBQUUsYUFBYTtRQUF2QyxpQkFNQztRQUxPLElBQUksQ0FBQyxXQUFXO2FBQ1AsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUUsZUFBZSxDQUFDO2FBQ3JFLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDhDQUFrQixHQUFsQixVQUFtQixHQUFHO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQyxzQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBVTZCLHVCQUFjLEVBQWtCLHlCQUFnQixFQUF1QixzQkFBVyxFQUFhLG1CQUFXO0dBVDVILGlCQUFpQixDQTBEN0I7QUExRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgUmVnTW9kZWwgfSBmcm9tIFwiLi4vYWNjZXNzLm1vZGVsXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRsLXJlZ2lzdGVyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0IHVzZXJuYW1lIGZyb20gbG9naW4gdmlld1xuXG4gICAgdXNlcm5hbWU6IFN0cmluZztcbiAgICBmdWxsbmFtZTpTdHJpbmc7XG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgdXNlcm5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIpICB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgICAgIGZ1bGxuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNDApXV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ107XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZE5hbWUoKVxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBwYXJhbXNbJ3VzZXJuYW1lJ107XG4gICAgICAgICAgICAgdGhpcy5yZWdpc3RlclRoaXNVc2VyKHRoaXMudXNlcm5hbWUsIHRoaXMuZnVsbG5hbWUpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXIoKXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyVGhpc1VzZXIodXNlcl9pZCwgdXNlcl9mdWxsbmFtZSl7XG4gICAgICAgICAgICB0aGlzLlJlc3RTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHsgdXNlcm5hbWU6IHVzZXJfaWQsIGZ1bGxuYW1lOiB1c2VyX2Z1bGxuYW1lIH0sIFwicmVnaXN0ZXItdXNlclwiKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmVnaXN0ZXJlZChyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVJlZ2lzdGVyZWQocmVzKXtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1JlZ2lzdGVyO1xuICAgIH1cblxuICAgIGludmFsaWROYW1lKCl7XG4gICAgICBhbGVydChcIkVycm9yOiBUaGUgbmFtZSBlbnRlcmVkIGlzIGludmFsaWRcIik7XG4gICAgfVxufVxuIl19