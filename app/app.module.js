"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("nativescript-angular/http");
var forms_2 = require("@angular/forms");
// ===========================================================================================
// TRAIL APP
// ===========================================================================================
var services_1 = require("./services");
var access_1 = require("./components/access");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var messageView_component_1 = require("./components/home/messageView/messageView.component");
var seeInvites_component_1 = require("./components/home/seeInvites/seeInvites.component");
var play_component_1 = require("./components/home/play/play.component");
var yourGames_component_1 = require("./components/home/yourGames/yourGames.component");
var completedGames_component_1 = require("./components/home/completedGames/completedGames.component");
var main_component_1 = require("./components/home/main/main.component");
var list_component_1 = require("./components/list/list.component");
var http_2 = require("@angular/http");
// ===========================================================================================
// ===========================================================================================
// Telerik UI
// ===========================================================================================
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
// ===========================================================================================
var shared_1 = require("./shared");
shared_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            http_2.HttpModule,
            forms_2.ReactiveFormsModule,
            angular_1.NativeScriptUISideDrawerModule,
            angular_2.NativeScriptUIListViewModule
        ],
        declarations: [
            app_component_1.AppComponent,
            access_1.LoginComponent,
            access_1.RegisterComponent,
            createGame_component_1.CreateGameComponent,
            createMessage_component_1.CreateMessageComponent,
            gameView_component_1.GameViewComponent,
            messageView_component_1.MessageViewComponent,
            seeInvites_component_1.SeeInvitesComponent,
            list_component_1.ListComponent,
            play_component_1.PlayComponent,
            main_component_1.MainComponent,
            yourGames_component_1.YourGamesComponent,
            completedGames_component_1.CompletedGamesComponent
        ],
        providers: [
            services_1.RestService,
            services_1.GameService,
            services_1.UserService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQW1FO0FBQ25FLHdDQUFxRDtBQUdyRCw4RkFBOEY7QUFDOUYsWUFBWTtBQUNaLDhGQUE4RjtBQUM5Rix1Q0FBbUU7QUFDbkUsOENBQXdFO0FBRXhFLDBGQUF3RjtBQUN4RixtR0FBaUc7QUFDakcsb0ZBQWtGO0FBQ2xGLDZGQUEwRjtBQUMxRiwwRkFBd0Y7QUFDeEYsd0VBQTBFO0FBQzFFLHVGQUF5RjtBQUN6RixzR0FBd0c7QUFDeEcsd0VBQTBFO0FBRTFFLG1FQUFpRTtBQUNqRSxzQ0FBMkM7QUFDM0MsOEZBQThGO0FBRzlGLDhGQUE4RjtBQUM5RixhQUFhO0FBQ2IsOEZBQThGO0FBQzlGLHNFQUE0RjtBQUM1RixvRUFBd0Y7QUFDeEYsOEZBQThGO0FBRzlGLG1DQUE4QztBQUM5QywyQkFBa0IsRUFBRSxDQUFDO0FBMENyQixJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUF4Q3JCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDhCQUFnQjtZQUNoQiw2QkFBc0I7WUFDdEIsaUJBQVU7WUFDViwyQkFBbUI7WUFDbkIsd0NBQThCO1lBQzlCLHNDQUE0QjtTQUMvQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osdUJBQWM7WUFDZCwwQkFBaUI7WUFDakIsMENBQW1CO1lBQ25CLGdEQUFzQjtZQUN0QixzQ0FBaUI7WUFDakIsNENBQW9CO1lBQ3BCLDBDQUFtQjtZQUNuQiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYix3Q0FBa0I7WUFDbEIsa0RBQXVCO1NBRTFCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asc0JBQVc7WUFDWCxzQkFBVztZQUNYLHNCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRSQUlMIEFQUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgUmVzdFNlcnZpY2UsIEdhbWVTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY2Vzc1wiO1xuXG5pbXBvcnQgeyBDcmVhdGVHYW1lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZUdhbWUvY3JlYXRlR2FtZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWF0ZU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY3JlYXRlTWVzc2FnZS9jcmVhdGVNZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FtZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvZ2FtZVZpZXcvZ2FtZVZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9tZXNzYWdlVmlldy9tZXNzYWdlVmlldy5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2VlSW52aXRlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9zZWVJbnZpdGVzL3NlZUludml0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGF5Q29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9wbGF5L3BsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBZb3VyR2FtZXNDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3lvdXJHYW1lcy95b3VyR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wbGV0ZWRHYW1lc0NvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY29tcGxldGVkR2FtZXMvY29tcGxldGVkR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9tYWluL21haW4uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUZWxlcmlrIFVJXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5pbXBvcnQgeyBzZXRTdGF0dXNCYXJDb2xvcnMgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbnNldFN0YXR1c0JhckNvbG9ycygpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVHYW1lQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICBHYW1lVmlld0NvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFNlZUludml0ZXNDb21wb25lbnQsXG4gICAgICAgIExpc3RDb21wb25lbnQsXG4gICAgICAgIFBsYXlDb21wb25lbnQsXG4gICAgICAgIE1haW5Db21wb25lbnQsXG4gICAgICAgIFlvdXJHYW1lc0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGxldGVkR2FtZXNDb21wb25lbnRcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlc3RTZXJ2aWNlLFxuICAgICAgICBHYW1lU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==