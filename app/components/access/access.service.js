"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var platform = require("platform");
var AccessService = (function () {
    function AccessService(http, RouterExtensions) {
        this.http = http;
        this.RouterExtensions = RouterExtensions;
    }
    AccessService.prototype.signIn = function (username, pwd) {
        var nativePlatformLocalhost;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (platform.device.os === platform.platformNames.ios) {
            nativePlatformLocalhost = 'http://127.0.0.1:7225/sign-in';
        }
        else if (platform.device.os === platform.platformNames.android) {
            nativePlatformLocalhost = 'http://10.0.2.2:7225/sign-in';
        }
        return this.http.post(nativePlatformLocalhost, { 'username': username, 'password': pwd }, options)
            .map(function (response) { return response.json(); });
    };
    AccessService.prototype.goToRegister = function (username) {
        this.RouterExtensions.navigate(['/register'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
        this.ecUsername = username;
        console.log("THis is in REgistration View: " + this.ecUsername);
    };
    AccessService.prototype.registerThisUser = function (username, fullname) {
        var _this = this;
        console.log("I Have to the User: " + username + " with the fullname: " + fullname);
        var nativePlatformLocalhost;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (platform.device.os === platform.platformNames.ios) {
            nativePlatformLocalhost = 'http://127.0.0.1:7225/register-user';
        }
        else if (platform.device.os === platform.platformNames.android) {
            nativePlatformLocalhost = 'http://10.0.2.2:7225/register-user';
        }
        var auth = this.http.post(nativePlatformLocalhost, { 'username': username, 'fullname': fullname }, options)
            .map(function (response) { return response.json(); });
        auth.subscribe(function (response) {
            var user = response['user'];
            var userInfo = response['userInfo'];
            var isTrailUser = response['isTrailUser'];
            var trailMembership = _this.checkMembership(isTrailUser);
            console.log("====>>> user: " + user + " userInfo: " + userInfo + " isTrailUser: " + trailMembership);
            if (!trailMembership) {
                console.log("Something went wrong! Sorry!");
            }
            else if (trailMembership) {
                console.log("Welcome New User!");
                _this.ecUsername = user.toString();
                _this.RouterExtensions.navigate(['/home'], {
                    transition: {
                        duration: 1000,
                        name: 'slideTop',
                    }
                });
            }
        }, function (error) { console.log("Error happened" + error); });
        this.RouterExtensions.navigate(['/home'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    AccessService.prototype.checkMembership = function (status) {
        if (status.localeCompare('False') == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    AccessService.prototype.authenticate = function (username, pwd) {
        var _this = this;
        var auth = this.signIn(username, pwd);
        auth.subscribe(function (response) {
            var user = response['user'];
            var isEcUser = response['isEcUser'];
            var isTrailUser = response['isTrailUser'];
            var ecMembership = _this.checkMembership(isEcUser);
            var trailMembership = _this.checkMembership(isTrailUser);
            console.log("user: " + user + " isEcUser: " + ecMembership + " isTrailUser: " + trailMembership);
            if (!ecMembership) {
                console.log("Username or Password is incorrect. Please Try Again.");
            }
            else if (ecMembership && !trailMembership) {
                console.log("Is EC Member but Not Trail Member");
                _this.goToRegister(user);
            }
            else if (ecMembership && trailMembership) {
                console.log("Welcome Back User!");
                _this.ecUsername = user.toString();
                _this.RouterExtensions.navigate(['/home'], {
                    transition: {
                        duration: 1000,
                        name: 'slideTop',
                    }
                });
            }
        }, function (error) { console.log("Error happened" + error); });
    }; //authenticate()
    return AccessService;
}());
AccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.RouterExtensions])
], AccessService);
exports.AccessService = AccessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2Nlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNEQUErRDtBQUMvRCxzQ0FBd0U7QUFJeEUsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxtQ0FBc0M7QUFHdEMsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQixJQUFVLEVBQVMsZ0JBQWtDO1FBQXJELFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUU3RSw4QkFBTSxHQUFOLFVBQU8sUUFBUSxFQUFFLEdBQUc7UUFDbEIsSUFBSSx1QkFBdUIsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ3BELHVCQUF1QixHQUFFLCtCQUErQixDQUFDO1FBQzNELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQy9ELHVCQUF1QixHQUFFLDhCQUE4QixDQUFDO1FBQzFELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUMsRUFBRSxPQUFPLENBQUM7YUFD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ZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgcGxhdGZvcm0gPSByZXF1aXJlKFwicGxhdGZvcm1cIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2Nlc3NTZXJ2aWNlIHtcbiAgcHVibGljIGVjVXNlcm5hbWU6IFN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwdWJsaWMgUm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBzaWduSW4odXNlcm5hbWUsIHB3ZCl7XG4gICAgdmFyIG5hdGl2ZVBsYXRmb3JtTG9jYWxob3N0O1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgIGlmKHBsYXRmb3JtLmRldmljZS5vcyA9PT0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lcy5pb3Mpe1xuICAgICAgbmF0aXZlUGxhdGZvcm1Mb2NhbGhvc3Q9ICdodHRwOi8vMTI3LjAuMC4xOjcyMjUvc2lnbi1pbic7XG4gICAgfSBlbHNlIGlmKHBsYXRmb3JtLmRldmljZS5vcyA9PT0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lcy5hbmRyb2lkKXtcbiAgICAgIG5hdGl2ZVBsYXRmb3JtTG9jYWxob3N0PSAnaHR0cDovLzEwLjAuMi4yOjcyMjUvc2lnbi1pbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KG5hdGl2ZVBsYXRmb3JtTG9jYWxob3N0LCB7J3VzZXJuYW1lJzogdXNlcm5hbWUsICdwYXNzd29yZCc6IHB3ZH0sIG9wdGlvbnMpXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgZ29Ub1JlZ2lzdGVyKHVzZXJuYW1lKXtcbiAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcmVnaXN0ZXInXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVjVXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICBjb25zb2xlLmxvZyhcIlRIaXMgaXMgaW4gUkVnaXN0cmF0aW9uIFZpZXc6IFwiICsgdGhpcy5lY1VzZXJuYW1lKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVGhpc1VzZXIodXNlcm5hbWUsIGZ1bGxuYW1lKSB7XG4gICAgY29uc29sZS5sb2coXCJJIEhhdmUgdG8gdGhlIFVzZXI6IFwiICsgdXNlcm5hbWUgKyBcIiB3aXRoIHRoZSBmdWxsbmFtZTogXCIgKyBmdWxsbmFtZSk7XG4gICAgdmFyIG5hdGl2ZVBsYXRmb3JtTG9jYWxob3N0O1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgIGlmKHBsYXRmb3JtLmRldmljZS5vcyA9PT0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lcy5pb3Mpe1xuICAgICAgbmF0aXZlUGxhdGZvcm1Mb2NhbGhvc3Q9ICdodHRwOi8vMTI3LjAuMC4xOjcyMjUvcmVnaXN0ZXItdXNlcic7XG4gICAgfSBlbHNlIGlmKHBsYXRmb3JtLmRldmljZS5vcyA9PT0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lcy5hbmRyb2lkKXtcbiAgICAgIG5hdGl2ZVBsYXRmb3JtTG9jYWxob3N0PSAnaHR0cDovLzEwLjAuMi4yOjcyMjUvcmVnaXN0ZXItdXNlcic7XG4gICAgfVxuXG4gICAgbGV0IGF1dGggPSB0aGlzLmh0dHAucG9zdChuYXRpdmVQbGF0Zm9ybUxvY2FsaG9zdCwgeyd1c2VybmFtZSc6IHVzZXJuYW1lLCAnZnVsbG5hbWUnOiBmdWxsbmFtZX0sIG9wdGlvbnMpXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgYXV0aC5zdWJzY3JpYmUocmVzcG9uc2UgID0+IHtcbiAgICAgIGxldCB1c2VyID0gcmVzcG9uc2VbJ3VzZXInXTtcbiAgICAgIGxldCB1c2VySW5mbyA9IHJlc3BvbnNlWyd1c2VySW5mbyddO1xuICAgICAgbGV0IGlzVHJhaWxVc2VyID0gcmVzcG9uc2VbJ2lzVHJhaWxVc2VyJ107XG5cbiAgICAgIHZhciB0cmFpbE1lbWJlcnNoaXAgPSB0aGlzLmNoZWNrTWVtYmVyc2hpcChpc1RyYWlsVXNlcik7XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT0+Pj4gdXNlcjogXCIgKyB1c2VyICsgXCIgdXNlckluZm86IFwiICsgdXNlckluZm8gKyBcIiBpc1RyYWlsVXNlcjogXCIgKyB0cmFpbE1lbWJlcnNoaXApO1xuXG4gICAgICBpZighdHJhaWxNZW1iZXJzaGlwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFNvcnJ5IVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodHJhaWxNZW1iZXJzaGlwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSBOZXcgVXNlciFcIik7XG4gICAgICAgIHRoaXMuZWNVc2VybmFtZSA9IHVzZXIudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5Sb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAgIGVycm9yID0+IHsgY29uc29sZS5sb2coXCJFcnJvciBoYXBwZW5lZFwiICsgZXJyb3IpOyB9LFxuICAgICk7XG5cbiAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tNZW1iZXJzaGlwKHN0YXR1cykge1xuICAgIGlmKHN0YXR1cy5sb2NhbGVDb21wYXJlKCdGYWxzZScpID09IDApe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lLCBwd2QpIHtcbiAgICBsZXQgYXV0aCA9IHRoaXMuc2lnbkluKHVzZXJuYW1lLCBwd2QpO1xuICAgIGF1dGguc3Vic2NyaWJlKHJlc3BvbnNlICA9PiB7XG4gICAgICBsZXQgdXNlciA9IHJlc3BvbnNlWyd1c2VyJ107XG4gICAgICBsZXQgaXNFY1VzZXIgPSByZXNwb25zZVsnaXNFY1VzZXInXTtcbiAgICAgIGxldCBpc1RyYWlsVXNlciA9IHJlc3BvbnNlWydpc1RyYWlsVXNlciddO1xuXG4gICAgICB2YXIgZWNNZW1iZXJzaGlwID0gdGhpcy5jaGVja01lbWJlcnNoaXAoaXNFY1VzZXIpO1xuICAgICAgdmFyIHRyYWlsTWVtYmVyc2hpcCA9IHRoaXMuY2hlY2tNZW1iZXJzaGlwKGlzVHJhaWxVc2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyB1c2VyICsgXCIgaXNFY1VzZXI6IFwiICsgZWNNZW1iZXJzaGlwICsgXCIgaXNUcmFpbFVzZXI6IFwiICsgdHJhaWxNZW1iZXJzaGlwKTtcblxuICAgICAgaWYoIWVjTWVtYmVyc2hpcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4gUGxlYXNlIFRyeSBBZ2Fpbi5cIik7XG4gICAgICB9IGVsc2UgaWYgKGVjTWVtYmVyc2hpcCAmJiAhdHJhaWxNZW1iZXJzaGlwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXMgRUMgTWVtYmVyIGJ1dCBOb3QgVHJhaWwgTWVtYmVyXCIpO1xuICAgICAgICB0aGlzLmdvVG9SZWdpc3Rlcih1c2VyKTtcbiAgICAgIH0gZWxzZSBpZiAoZWNNZW1iZXJzaGlwICYmIHRyYWlsTWVtYmVyc2hpcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgQmFjayBVc2VyIVwiKTtcbiAgICAgICAgdGhpcy5lY1VzZXJuYW1lID0gdXNlci50b1N0cmluZygpO1xuICAgICAgICB0aGlzLlJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgICAgZXJyb3IgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGhhcHBlbmVkXCIgKyBlcnJvcik7IH0sXG4gICAgKTtcblxuICB9Ly9hdXRoZW50aWNhdGUoKVxuXG59XG4iXX0=