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
        this.RouterExtensions.navigate(['/register'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELG9EQUFrRDtBQVFsRCxJQUFhLGNBQWM7SUFHdkIsd0JBQW1CLGdCQUFrQyxFQUFVLGFBQTRCO1FBQXhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFaEcsaUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQ0FBYSxHQUFiO1FBQ1MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FJdUMseUJBQWdCLEVBQXlCLDhCQUFhO0dBSGxGLGNBQWMsQ0FpQjFCO0FBakJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tIFwiLi4vYWNjZXNzLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRsLWxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgUm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBBY2Nlc3NTZXJ2aWNlOiBBY2Nlc3NTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIGF1dGhlbnRpY2F0b3IoKSB7XG4gICAgICAgICAgICAgdGhpcy5Sb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3JlZ2lzdGVyJ10sIHtcbiAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICB9KTtcbiAgICAgIHRoaXMuQWNjZXNzU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgfVxufVxuIl19