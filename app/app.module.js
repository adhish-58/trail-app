"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
// DELETE LATER
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
//Access
var access_service_1 = require("./components/access/access.service");
var login_component_1 = require("./components/access/login/login.component");
var register_component_1 = require("./components/access/register/register.component");
var home_component_1 = require("./components/home/home.component");
var create_component_1 = require("./components/home/create/create.component");
var list_component_1 = require("./components/list/list.component");
// ===========================================================================================
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            // DELETE LATER
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            // TRAIL APP STUFF
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            home_component_1.HomeComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent
        ],
        providers: [
            // DELETE LATER
            item_service_1.ItemService,
            access_service_1.AccessService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxlQUFlO0FBQ2Ysb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFFbkUsOEZBQThGO0FBQzlGLGtCQUFrQjtBQUNsQiw4RkFBOEY7QUFDOUYsUUFBUTtBQUNSLHFFQUFtRTtBQUNuRSw2RUFBMkU7QUFDM0Usc0ZBQW9GO0FBRXBGLG1FQUFpRTtBQUNqRSw4RUFBNEU7QUFFNUUsbUVBQWlFO0FBRWpFLDhGQUE4RjtBQWdDOUYsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBOUJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osZUFBZTtZQUNmLGdDQUFjO1lBQ2QsMkNBQW1CO1lBRW5CLGtCQUFrQjtZQUNsQixnQ0FBYztZQUNkLHNDQUFpQjtZQUNqQiw4QkFBYTtZQUNiLGtDQUFlO1lBQ2YsOEJBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxlQUFlO1lBQ2YsMEJBQVc7WUFDWCw4QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuLy8gREVMRVRFIExBVEVSXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVFJBSUwgQVBQIFNUVUZGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL0FjY2Vzc1xuaW1wb3J0IHsgQWNjZXNzU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjZXNzL2FjY2Vzcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjZXNzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY2Vzcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICAvLyBERUxFVEUgTEFURVJcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG5cbiAgICAgICAgLy8gVFJBSUwgQVBQIFNUVUZGXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLy8gREVMRVRFIExBVEVSXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBBY2Nlc3NTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==