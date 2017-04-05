"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
var access_1 = require("./components/access");
var home_component_1 = require("./components/home/home.component");
var create_component_1 = require("./components/home/create/create.component");
var list_component_1 = require("./components/list/list.component");
// ===========================================================================================
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: access_1.LoginComponent },
    { path: "register", component: access_1.RegisterComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "create", component: create_component_1.CreateComponent },
    { path: "list", component: list_component_1.ListComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw4RkFBOEY7QUFDOUYsa0JBQWtCO0FBQ2xCLDhGQUE4RjtBQUM5Riw4Q0FBdUU7QUFDdkUsbUVBQXFFO0FBQ3JFLDhFQUE4RTtBQUM5RSxtRUFBcUU7QUFDckUsOEZBQThGO0FBRTlGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMEJBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FDN0MsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQStCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUUkFJTCBBUFAgU1RVRkZcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjZXNzXCJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVcIiwgY29tcG9uZW50OiBDcmVhdGVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge30iXX0=