"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var services_1 = require("../../../services");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, RestService) {
        this.route = route;
        this.router = router;
        this.RestService = RestService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
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
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "tl-register",
        moduleId: module.id,
        templateUrl: "./register.component.html",
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, services_1.RestService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCw4Q0FBZ0Q7QUFTaEQsSUFBYSxpQkFBaUI7SUFNMUIsMkJBQW9CLEtBQXFCLEVBQVUsTUFBd0IsRUFBVSxXQUF3QjtRQUF6RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDN0csQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVaLG9DQUFRLEdBQWY7UUFBQSxpQkFLQztRQUpPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFPLEVBQUUsYUFBYTtRQUF2QyxpQkFNQztRQUxPLElBQUksQ0FBQyxXQUFXO2FBQ1AsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUUsZUFBZSxDQUFDO2FBQ3JFLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDhDQUFrQixHQUFsQixVQUFtQixHQUFHO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsc0JBQVcsQ0FBQztLQUMzQixDQUFDO3FDQU82Qix1QkFBYyxFQUFrQix5QkFBZ0IsRUFBdUIsc0JBQVc7R0FOcEcsaUJBQWlCLENBdUM3QjtBQXZDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBSZWdNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtcmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXQgdXNlcm5hbWUgZnJvbSBsb2dpbiB2aWV3XG5cbiAgICB1c2VybmFtZTogU3RyaW5nO1xuICAgIGZ1bGxuYW1lOlN0cmluZztcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UpICB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gcGFyYW1zWyd1c2VybmFtZSddO1xuICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUaGlzVXNlcih0aGlzLnVzZXJuYW1lLCB0aGlzLmZ1bGxuYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29Ub1JlZ2lzdGVyKCl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlclRoaXNVc2VyKHVzZXJfaWQsIHVzZXJfZnVsbG5hbWUpe1xuICAgICAgICAgICAgdGhpcy5SZXN0U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucG9zdCh7IHVzZXJuYW1lOiB1c2VyX2lkLCBmdWxsbmFtZTogdXNlcl9mdWxsbmFtZSB9LCBcInJlZ2lzdGVyLXVzZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJlZ2lzdGVyZWQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZWdpc3RlcmVkKHJlcyl7XG4gICAgICAgICAgICB0aGlzLmdvVG9SZWdpc3RlcjtcbiAgICB9XG59XG4iXX0=