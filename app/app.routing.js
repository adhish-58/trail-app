"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
var access_1 = require("./components/access");
var home_component_1 = require("./components/home/home.component");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var messageView_component_1 = require("./components/home/messageView/messageView.component");
var seeInvites_component_1 = require("./components/home/seeInvites/seeInvites.component");
var list_component_1 = require("./components/list/list.component");
var play_component_1 = require("./components/home/play/play.component");
var main_component_1 = require("./components/home/main/main.component");
// ===========================================================================================
var routes = [
    { path: "", redirectTo: "/play", pathMatch: "full" },
    { path: "login", component: access_1.LoginComponent },
    { path: "register", component: access_1.RegisterComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "createGame", component: createGame_component_1.CreateGameComponent },
    { path: "createMessage", component: createMessage_component_1.CreateMessageComponent },
    { path: "gameView", component: gameView_component_1.GameViewComponent },
    { path: "messageView", component: messageView_component_1.MessageViewComponent },
    { path: "seeInvites", component: seeInvites_component_1.SeeInvitesComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "play", component: play_component_1.PlayComponent },
    { path: "main", component: main_component_1.MainComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw4RkFBOEY7QUFDOUYsa0JBQWtCO0FBQ2xCLDhGQUE4RjtBQUM5Riw4Q0FBdUU7QUFDdkUsbUVBQXFFO0FBQ3JFLDBGQUF3RjtBQUN4RixtR0FBaUc7QUFDakcsb0ZBQWtGO0FBQ2xGLDZGQUEyRjtBQUMzRiwwRkFBd0Y7QUFDeEYsbUVBQXFFO0FBQ3JFLHdFQUEwRTtBQUMxRSx3RUFBMEU7QUFFMUUsOEZBQThGO0FBRTlGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMEJBQWlCLEVBQUM7SUFDakQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnREFBc0IsRUFBRTtJQUM1RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUU3QyxDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRSQUlMIEFQUCBTVFVGRlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2Nlc3NcIlxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWF0ZUdhbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY3JlYXRlR2FtZS9jcmVhdGVHYW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVNZXNzYWdlL2NyZWF0ZU1lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYW1lVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9nYW1lVmlldy9nYW1lVmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL21lc3NhZ2VWaWV3L21lc3NhZ2VWaWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VlSW52aXRlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9zZWVJbnZpdGVzL3NlZUludml0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheUNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvcGxheS9wbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGxheVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZUdhbWVcIiwgY29tcG9uZW50OiBDcmVhdGVHYW1lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZU1lc3NhZ2VcIiwgY29tcG9uZW50OiBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImdhbWVWaWV3XCIsIGNvbXBvbmVudDogR2FtZVZpZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibWVzc2FnZVZpZXdcIiwgY29tcG9uZW50OiBNZXNzYWdlVmlld0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWVJbnZpdGVzXCIsIGNvbXBvbmVudDogU2VlSW52aXRlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsaXN0XCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJwbGF5XCIsIGNvbXBvbmVudDogUGxheUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCB9LFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=