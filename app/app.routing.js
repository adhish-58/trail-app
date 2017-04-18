"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
var access_1 = require("./components/access");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var messageView_component_1 = require("./components/home/messageView/messageView.component");
var seeInvites_component_1 = require("./components/home/seeInvites/seeInvites.component");
var list_component_1 = require("./components/list/list.component");
var play_component_1 = require("./components/home/play/play.component");
var yourGames_component_1 = require("./components/home/yourGames/yourGames.component");
var completedGames_component_1 = require("./components/home/completedGames/completedGames.component");
var main_component_1 = require("./components/home/main/main.component");
var about_component_1 = require("./components/home/about/about.component");
// ===========================================================================================
var routes = [
    { path: "", redirectTo: "/seeInvites", pathMatch: "full" },
    { path: "login", component: access_1.LoginComponent },
    { path: "register", component: access_1.RegisterComponent },
    { path: "createGame", component: createGame_component_1.CreateGameComponent },
    { path: "createMessage", component: createMessage_component_1.CreateMessageComponent },
    { path: "gameView", component: gameView_component_1.GameViewComponent },
    { path: "messageView", component: messageView_component_1.MessageViewComponent },
    { path: "seeInvites", component: seeInvites_component_1.SeeInvitesComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "play", component: play_component_1.PlayComponent },
    { path: "main", component: main_component_1.MainComponent },
    { path: "yourGames", component: yourGames_component_1.YourGamesComponent },
    { path: "completedGames", component: completedGames_component_1.CompletedGamesComponent },
    { path: "about", component: about_component_1.AboutComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw4RkFBOEY7QUFDOUYsa0JBQWtCO0FBQ2xCLDhGQUE4RjtBQUM5Riw4Q0FBdUU7QUFDdkUsMEZBQXdGO0FBQ3hGLG1HQUFpRztBQUNqRyxvRkFBa0Y7QUFDbEYsNkZBQTJGO0FBQzNGLDBGQUF3RjtBQUN4RixtRUFBcUU7QUFDckUsd0VBQTBFO0FBQzFFLHVGQUF5RjtBQUN6RixzR0FBd0c7QUFDeEcsd0VBQTBFO0FBQzFFLDJFQUE2RTtBQUU3RSw4RkFBOEY7QUFFOUYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwwQkFBaUIsRUFBQztJQUNqRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7SUFDNUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0NBRS9DLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUErQixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFHO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVFJBSUwgQVBQIFNUVUZGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY2Vzc1wiXG5pbXBvcnQgeyBDcmVhdGVHYW1lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZUdhbWUvY3JlYXRlR2FtZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWF0ZU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY3JlYXRlTWVzc2FnZS9jcmVhdGVNZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FtZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvZ2FtZVZpZXcvZ2FtZVZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9tZXNzYWdlVmlldy9tZXNzYWdlVmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlZUludml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvc2VlSW52aXRlcy9zZWVJbnZpdGVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYXlDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3BsYXkvcGxheS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFlvdXJHYW1lc0NvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUveW91ckdhbWVzL3lvdXJHYW1lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbXBsZXRlZEdhbWVzQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jb21wbGV0ZWRHYW1lcy9jb21wbGV0ZWRHYW1lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL21haW4vbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3NlZUludml0ZXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVHYW1lXCIsIGNvbXBvbmVudDogQ3JlYXRlR2FtZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVNZXNzYWdlXCIsIGNvbXBvbmVudDogQ3JlYXRlTWVzc2FnZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJnYW1lVmlld1wiLCBjb21wb25lbnQ6IEdhbWVWaWV3Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm1lc3NhZ2VWaWV3XCIsIGNvbXBvbmVudDogTWVzc2FnZVZpZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2VlSW52aXRlc1wiLCBjb21wb25lbnQ6IFNlZUludml0ZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicGxheVwiLCBjb21wb25lbnQ6IFBsYXlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibWFpblwiLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwieW91ckdhbWVzXCIsIGNvbXBvbmVudDogWW91ckdhbWVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNvbXBsZXRlZEdhbWVzXCIsIGNvbXBvbmVudDogQ29tcGxldGVkR2FtZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiJdfQ==