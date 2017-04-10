import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ReactiveFormsModule } from '@angular/forms';


// ===========================================================================================
// TRAIL APP
// ===========================================================================================
import { RestService, GameService, UserService } from "./services";
import { LoginComponent, RegisterComponent } from "./components/access";

import { HomeComponent } from "./components/home/home.component";
import { CreateGameComponent } from "./components/home/createGame/createGame.component";
import { CreateMessageComponent } from "./components/home/createMessage/createMessage.component";
import { GameViewComponent } from "./components/home/gameView/gameView.component";


import { ListComponent } from "./components/list/list.component";
import { HttpModule } from '@angular/http';
// ===========================================================================================

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        CreateGameComponent,
        CreateMessageComponent,
        GameViewComponent,
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
