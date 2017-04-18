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
var about_component_1 = require("./components/home/about/about.component");
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
            completedGames_component_1.CompletedGamesComponent,
            about_component_1.AboutComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQW1FO0FBQ25FLHdDQUFxRDtBQUdyRCw4RkFBOEY7QUFDOUYsWUFBWTtBQUNaLDhGQUE4RjtBQUM5Rix1Q0FBbUU7QUFDbkUsOENBQXdFO0FBRXhFLDBGQUF3RjtBQUN4RixtR0FBaUc7QUFDakcsb0ZBQWtGO0FBQ2xGLDZGQUEwRjtBQUMxRiwwRkFBd0Y7QUFDeEYsd0VBQTBFO0FBQzFFLHVGQUF5RjtBQUN6RixzR0FBd0c7QUFDeEcsd0VBQTBFO0FBQzFFLDJFQUE2RTtBQUU3RSxtRUFBaUU7QUFDakUsc0NBQTJDO0FBQzNDLDhGQUE4RjtBQUc5Riw4RkFBOEY7QUFDOUYsYUFBYTtBQUNiLDhGQUE4RjtBQUM5RixzRUFBNEY7QUFDNUYsb0VBQXdGO0FBQ3hGLDhGQUE4RjtBQUc5RixtQ0FBOEM7QUFDOUMsMkJBQWtCLEVBQUUsQ0FBQztBQTJDckIsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBekNyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw4QkFBZ0I7WUFDaEIsNkJBQXNCO1lBQ3RCLGlCQUFVO1lBQ1YsMkJBQW1CO1lBQ25CLHdDQUE4QjtZQUM5QixzQ0FBNEI7U0FDL0I7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLHVCQUFjO1lBQ2QsMEJBQWlCO1lBQ2pCLDBDQUFtQjtZQUNuQixnREFBc0I7WUFDdEIsc0NBQWlCO1lBQ2pCLDRDQUFvQjtZQUNwQiwwQ0FBbUI7WUFDbkIsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2Isd0NBQWtCO1lBQ2xCLGtEQUF1QjtZQUN2QixnQ0FBYztTQUVqQjtRQUNELFNBQVMsRUFBRTtZQUNQLHNCQUFXO1lBQ1gsc0JBQVc7WUFDWCxzQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUVXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUUkFJTCBBUFBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBHYW1lU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2Nlc3NcIjtcblxuaW1wb3J0IHsgQ3JlYXRlR2FtZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVHYW1lL2NyZWF0ZUdhbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZU1lc3NhZ2UvY3JlYXRlTWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhbWVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2dhbWVWaWV3L2dhbWVWaWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWVzc2FnZVZpZXcvbWVzc2FnZVZpZXcuY29tcG9uZW50XCJcbmltcG9ydCB7IFNlZUludml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvc2VlSW52aXRlcy9zZWVJbnZpdGVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheUNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvcGxheS9wbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgWW91ckdhbWVzQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS95b3VyR2FtZXMveW91ckdhbWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tcGxldGVkR2FtZXNDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NvbXBsZXRlZEdhbWVzL2NvbXBsZXRlZEdhbWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVGVsZXJpayBVSVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgQ3JlYXRlR2FtZUNvbXBvbmVudCxcbiAgICAgICAgQ3JlYXRlTWVzc2FnZUNvbXBvbmVudCxcbiAgICAgICAgR2FtZVZpZXdDb21wb25lbnQsXG4gICAgICAgIE1lc3NhZ2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBTZWVJbnZpdGVzQ29tcG9uZW50LFxuICAgICAgICBMaXN0Q29tcG9uZW50LFxuICAgICAgICBQbGF5Q29tcG9uZW50LFxuICAgICAgICBNYWluQ29tcG9uZW50LFxuICAgICAgICBZb3VyR2FtZXNDb21wb25lbnQsXG4gICAgICAgIENvbXBsZXRlZEdhbWVzQ29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudFxuXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzdFNlcnZpY2UsXG4gICAgICAgIEdhbWVTZXJ2aWNlLFxuICAgICAgICBVc2VyU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19