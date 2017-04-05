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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQTZEO0FBTzdELElBQWEsaUJBQWlCO0lBRTFCLDJCQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFMUQsb0NBQVEsR0FBUixjQUFrQixDQUFDO0lBRW5CLG9DQUFRLEdBQVI7UUFDQSxxREFBcUQ7UUFDckQsMkJBQTJCO1FBQzNCLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxhQUFhO1FBQ1gsb0VBQW9FO0lBQ3RFLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQUd1Qyx5QkFBZ0I7R0FGNUMsaUJBQWlCLENBZ0I3QjtBQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGwtcmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIFJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgLy8gICAgICAgIHRoaXMuUm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAvLyAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAvLyAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgIC8vICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgIC8vICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgIC8vICAgICAgICB9KTtcbiAgICAgIC8vdGhpcy5TaWduSW5TZXJ2aWNlLnJlZ2lzdGVyVGhpc1VzZXIodGhpcy51c2VyTmFtZSwgdGhpcy5mdWxsbmFtZSk7XG4gICAgfVxufVxuIl19