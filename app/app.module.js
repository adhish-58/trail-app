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
var home_component_1 = require("./components/home/home.component");
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
            forms_2.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            access_1.LoginComponent,
            access_1.RegisterComponent,
            home_component_1.HomeComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQW1FO0FBQ25FLHdDQUFxRDtBQUdyRCw4RkFBOEY7QUFDOUYsWUFBWTtBQUNaLDhGQUE4RjtBQUM5Rix1Q0FBbUU7QUFDbkUsOENBQXdFO0FBRXhFLG1FQUFpRTtBQUNqRSwwRkFBd0Y7QUFDeEYsbUdBQWlHO0FBQ2pHLG9GQUFrRjtBQUNsRiw2RkFBMEY7QUFDMUYsMEZBQXdGO0FBQ3hGLHdFQUEwRTtBQUMxRSx1RkFBeUY7QUFDekYsc0dBQXdHO0FBQ3hHLHdFQUEwRTtBQUUxRSxtRUFBaUU7QUFDakUsc0NBQTJDO0FBQzNDLDhGQUE4RjtBQUU5RixtQ0FBOEM7QUFDOUMsMkJBQWtCLEVBQUUsQ0FBQztBQXlDckIsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBdkNyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw4QkFBZ0I7WUFDaEIsNkJBQXNCO1lBQ3RCLGlCQUFVO1lBQ1YsMkJBQW1CO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWix1QkFBYztZQUNkLDBCQUFpQjtZQUNqQiw4QkFBYTtZQUNiLDBDQUFtQjtZQUNuQixnREFBc0I7WUFDdEIsc0NBQWlCO1lBQ2pCLDRDQUFvQjtZQUNwQiwwQ0FBbUI7WUFDbkIsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2Isd0NBQWtCO1lBQ2xCLGtEQUF1QjtTQUUxQjtRQUNELFNBQVMsRUFBRTtZQUNQLHNCQUFXO1lBQ1gsc0JBQVc7WUFDWCxzQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUVXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUUkFJTCBBUFBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBHYW1lU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2Nlc3NcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlR2FtZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVHYW1lL2NyZWF0ZUdhbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZU1lc3NhZ2UvY3JlYXRlTWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhbWVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2dhbWVWaWV3L2dhbWVWaWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWVzc2FnZVZpZXcvbWVzc2FnZVZpZXcuY29tcG9uZW50XCJcbmltcG9ydCB7IFNlZUludml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvc2VlSW52aXRlcy9zZWVJbnZpdGVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheUNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvcGxheS9wbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgWW91ckdhbWVzQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS95b3VyR2FtZXMveW91ckdhbWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tcGxldGVkR2FtZXNDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NvbXBsZXRlZEdhbWVzL2NvbXBsZXRlZEdhbWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3NoYXJlZFwiO1xuc2V0U3RhdHVzQmFyQ29sb3JzKCk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVHYW1lQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICBHYW1lVmlld0NvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFNlZUludml0ZXNDb21wb25lbnQsXG4gICAgICAgIExpc3RDb21wb25lbnQsXG4gICAgICAgIFBsYXlDb21wb25lbnQsXG4gICAgICAgIE1haW5Db21wb25lbnQsXG4gICAgICAgIFlvdXJHYW1lc0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGxldGVkR2FtZXNDb21wb25lbnRcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlc3RTZXJ2aWNlLFxuICAgICAgICBHYW1lU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==