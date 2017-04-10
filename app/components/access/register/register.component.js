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
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBZ0Q7QUFFaEQsd0NBQWtHO0FBU2xHLElBQWEsaUJBQWlCO0lBUzFCLDJCQUFvQixLQUFxQixFQUFVLE1BQXdCLEVBQVUsV0FBd0IsRUFBVSxFQUFjO1FBQWpILFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDckksQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0seUNBQWEsR0FBcEI7UUFDUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLElBQUk7WUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFBQSxpQkFLQztRQUpPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFPLEVBQUUsYUFBYTtRQUF2QyxpQkFNQztRQUxPLElBQUksQ0FBQyxXQUFXO2FBQ1AsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUUsZUFBZSxDQUFDO2FBQ3JFLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDhDQUFrQixHQUFsQixVQUFtQixHQUFHO1FBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNULENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQztBQTlEWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLHNCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FVNkIsdUJBQWMsRUFBa0IseUJBQWdCLEVBQXVCLHNCQUFXLEVBQWEsbUJBQVc7R0FUNUgsaUJBQWlCLENBOEQ3QjtBQTlEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBSZWdNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtcmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXQgdXNlcm5hbWUgZnJvbSBsb2dpbiB2aWV3XG5cbiAgICB1c2VybmFtZTogU3RyaW5nO1xuICAgIGZ1bGxuYW1lOlN0cmluZztcbiAgICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICB1c2VybmFtZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIFJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcikgIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICAgICAgZnVsbG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDApXV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ107XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVmFsaWRpdHkoKXtcbiAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZE5hbWUoKVxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBwYXJhbXNbJ3VzZXJuYW1lJ107XG4gICAgICAgICAgICAgdGhpcy5yZWdpc3RlclRoaXNVc2VyKHRoaXMudXNlcm5hbWUsIHRoaXMuZnVsbG5hbWUpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJUaGlzVXNlcih1c2VyX2lkLCB1c2VyX2Z1bGxuYW1lKXtcbiAgICAgICAgICAgIHRoaXMuUmVzdFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QoeyB1c2VybmFtZTogdXNlcl9pZCwgZnVsbG5hbWU6IHVzZXJfZnVsbG5hbWUgfSwgXCJyZWdpc3Rlci11c2VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSZWdpc3RlcmVkKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlUmVnaXN0ZXJlZChyZXMpe1xuICAgICAgICAgICBpZiAoIShyZXMudHJhaWxVc2VyTmFtZSA9PSBcImZhbHNlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWROYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52YWxpZE5hbWUoKXtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6IFRoZSBuYW1lIGVudGVyZWQgaXMgaW52YWxpZFwiKTtcbiAgICB9XG59XG4iXX0=