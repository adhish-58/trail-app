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
var list_component_1 = require("./components/list/list.component");
var http_2 = require("@angular/http");
// ===========================================================================================
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
            list_component_1.ListComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQW1FO0FBQ25FLHdDQUFxRDtBQUdyRCw4RkFBOEY7QUFDOUYsWUFBWTtBQUNaLDhGQUE4RjtBQUM5Rix1Q0FBbUU7QUFDbkUsOENBQXdFO0FBRXhFLG1FQUFpRTtBQUNqRSwwRkFBd0Y7QUFDeEYsbUdBQWlHO0FBQ2pHLG9GQUFrRjtBQUNsRiw2RkFBMkY7QUFHM0YsbUVBQWlFO0FBQ2pFLHNDQUEyQztBQUMzQyw4RkFBOEY7QUFtQzlGLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQWpDckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QixpQkFBVTtZQUNWLDJCQUFtQjtTQUN0QjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osdUJBQWM7WUFDZCwwQkFBaUI7WUFDakIsOEJBQWE7WUFDYiwwQ0FBbUI7WUFDbkIsZ0RBQXNCO1lBQ3RCLHNDQUFpQjtZQUNqQiw0Q0FBb0I7WUFDcEIsOEJBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxzQkFBVztZQUNYLHNCQUFXO1lBQ1gsc0JBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FFVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVFJBSUwgQVBQXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgeyBSZXN0U2VydmljZSwgR2FtZVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjZXNzXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWF0ZUdhbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY3JlYXRlR2FtZS9jcmVhdGVHYW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVNZXNzYWdlL2NyZWF0ZU1lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYW1lVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9nYW1lVmlldy9nYW1lVmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL21lc3NhZ2VWaWV3L21lc3NhZ2VWaWV3LmNvbXBvbmVudFwiO1xuXG5cbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIENyZWF0ZUdhbWVDb21wb25lbnQsXG4gICAgICAgIENyZWF0ZU1lc3NhZ2VDb21wb25lbnQsXG4gICAgICAgIEdhbWVWaWV3Q29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlVmlld0NvbXBvbmVudCxcbiAgICAgICAgTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlc3RTZXJ2aWNlLFxuICAgICAgICBHYW1lU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==