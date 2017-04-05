"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(RouterExtensions) {
        this.RouterExtensions = RouterExtensions;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        //        this.RouterExtensions.navigate(['/home'], {
        //            transition: {
        //                duration: 500,
        //                name: 'slideLeft',
        //            },
        //            clearHistory: true
        //        });
        //this.SignInService.registerThisUser(this.userName, this.fullname);
        console.log("register");
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "tl-register",
        moduleId: module.id,
        templateUrl: "./register.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQTZEO0FBTzdELElBQWEsaUJBQWlCO0lBRTFCLDJCQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFMUQsb0NBQVEsR0FBUixjQUFrQixDQUFDO0lBRW5CLG9DQUFRLEdBQVI7UUFDQSxxREFBcUQ7UUFDckQsMkJBQTJCO1FBQzNCLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxhQUFhO1FBQ1gsb0VBQW9FO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkJBQTJCO0tBQzNDLENBQUM7cUNBR3VDLHlCQUFnQjtHQUY1QyxpQkFBaUIsQ0FpQjdCO0FBakJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0bC1yZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgUm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAvLyAgICAgICAgdGhpcy5Sb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgIC8vICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgIC8vICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgLy8gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgLy8gICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgLy8gICAgICAgIH0pO1xuICAgICAgLy90aGlzLlNpZ25JblNlcnZpY2UucmVnaXN0ZXJUaGlzVXNlcih0aGlzLnVzZXJOYW1lLCB0aGlzLmZ1bGxuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclwiKTtcbiAgICB9XG59XG4iXX0=