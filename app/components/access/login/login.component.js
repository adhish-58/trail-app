"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var access_service_1 = require("../access.service");
var LoginComponent = (function () {
    function LoginComponent(RouterExtensions, AccessService) {
        this.RouterExtensions = RouterExtensions;
        this.AccessService = AccessService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.authenticator = function () {
        //         this.RouterExtensions.navigate(['/register'], {
        //             transition: {
        //                 duration: 500,
        //                 name: 'slideLeft',
        //             },
        //             clearHistory: true
        //         });
        this.AccessService.authenticate(this.username, this.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "tl-login",
        moduleId: module.id,
        templateUrl: "./login.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, access_service_1.AccessService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELG9EQUFrRDtBQVFsRCxJQUFhLGNBQWM7SUFHdkIsd0JBQW1CLGdCQUFrQyxFQUFVLGFBQTRCO1FBQXhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFaEcsaUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQ0FBYSxHQUFiO1FBQ0EsMERBQTBEO1FBQzFELDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMscUNBQXFDO1FBQ3JDLGlCQUFpQjtRQUNqQixpQ0FBaUM7UUFDakMsY0FBYztRQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FJdUMseUJBQWdCLEVBQXlCLDhCQUFhO0dBSGxGLGNBQWMsQ0FpQjFCO0FBakJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tIFwiLi4vYWNjZXNzLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0bC1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIFJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQWNjZXNzU2VydmljZTogQWNjZXNzU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHt9XG5cbiAgICBhdXRoZW50aWNhdG9yKCkge1xuICAgIC8vICAgICAgICAgdGhpcy5Sb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3JlZ2lzdGVyJ10sIHtcbiAgICAvLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgLy8gICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAgIHRoaXMuQWNjZXNzU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgfVxufVxuIl19