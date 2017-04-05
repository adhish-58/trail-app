import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";


// ===========================================================================================
// TRAIL APP
// ===========================================================================================
import { RestService, GameService, UserService } from "./services";
import { LoginComponent, RegisterComponent } from "./components/access";

import { HomeComponent } from "./components/home/home.component";
import { CreateComponent } from "./components/home/create/create.component";

import { ListComponent } from "./components/list/list.component";
import { HttpModule } from '@angular/http';
// ===========================================================================================

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        CreateComponent,
        ListComponent
    ],
    providers: [
        RestService,
        GameService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {}
