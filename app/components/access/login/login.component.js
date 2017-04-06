"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var services_1 = require("../../../services");
var access_model_1 = require("../access.model");
var LoginComponent = (function () {
    function LoginComponent(router, RestService) {
        this.router = router;
        this.RestService = RestService;
        this.subtitleMessage = "Please sign in with your Earlham credentials.";
        this.user = new access_model_1.UserModel();
        this.user.username = "";
        this.user.password = "";
    }
    LoginComponent.prototype.onLogIn = function () {
        this.makeLoginRequest();
    };
    LoginComponent.prototype.makeLoginRequest = function () {
        var _this = this;
        this.RestService
            .post({ username: this.user.username, password: this.user.password }, "log-in")
            .subscribe(function (res) {
            _this.validateMembership(res);
        });
    };
    LoginComponent.prototype.validateMembership = function (res) {
        if (res.isEcUser) {
            if (res.isTrailUser) {
                this.goToHome();
            }
            else {
                this.goToRegister();
            }
        }
        else {
            this.invalidCredentials();
        }
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['register', this.user.username], {
            transition: {
                duration: 500,
                name: 'slideTop',
            },
        });
    };
    LoginComponent.prototype.goToHome = function () {
        this.router.navigate(['/home'], {
            transition: {
                duration: 500,
                name: 'slideLeft',
            },
            clearHistory: true
        });
    };
    LoginComponent.prototype.invalidCredentials = function () {
        alert("Error: Username & password do not match. Please try again.");
        this.subtitleMessage = "Error: Username & password do not match. Please try again.";
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.component.html",
        providers: [services_1.RestService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, services_1.RestService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFFL0IsOENBQWdEO0FBQ2hELGdEQUE0QztBQVE1QyxJQUFhLGNBQWM7SUFJdkIsd0JBQW9CLE1BQXdCLEVBQVUsV0FBd0I7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ2RSxvQkFBZSxHQUFXLCtDQUErQyxDQUFDO1FBRzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sZ0NBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyx5Q0FBZ0IsR0FBeEI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXO2FBQ1AsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQzthQUM5RSxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixHQUFHO1FBQ2xCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25ELFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsVUFBVTthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyw0REFBNEQsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUNOLHFCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxzQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBTThCLHlCQUFnQixFQUF1QixzQkFBVztHQUpyRSxjQUFjLENBeUQxQjtBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9hY2Nlc3MubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XG4gICAgdXNlcjogVXNlck1vZGVsO1xuICAgIHB1YmxpYyBzdWJ0aXRsZU1lc3NhZ2U6IHN0cmluZyA9IFwiUGxlYXNlIHNpZ24gaW4gd2l0aCB5b3VyIEVhcmxoYW0gY3JlZGVudGlhbHMuXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBSZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2RlbCgpO1xuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvZ0luKCkge1xuICAgICAgICB0aGlzLm1ha2VMb2dpblJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VMb2dpblJlcXVlc3QoKSB7XG4gICAgICAgIHRoaXMuUmVzdFNlcnZpY2VcbiAgICAgICAgICAgICAgICAucG9zdCh7IHVzZXJuYW1lOiB0aGlzLnVzZXIudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQgfSwgXCJsb2ctaW5cIilcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVNZW1iZXJzaGlwKHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNZW1iZXJzaGlwKHJlcykge1xuICAgICAgICBpZihyZXMuaXNFY1VzZXIpIHtcbiAgICAgICAgICAgIGlmKHJlcy5pc1RyYWlsVXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0hvbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZENyZWRlbnRpYWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncmVnaXN0ZXInLCB0aGlzLnVzZXIudXNlcm5hbWVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGludmFsaWRDcmVkZW50aWFscygpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvcjogVXNlcm5hbWUgJiBwYXNzd29yZCBkbyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB0aGlzLnN1YnRpdGxlTWVzc2FnZSA9IFwiRXJyb3I6IFVzZXJuYW1lICYgcGFzc3dvcmQgZG8gbm90IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgIH07XG59XG4iXX0=