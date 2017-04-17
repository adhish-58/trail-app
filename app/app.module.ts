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

import { CreateGameComponent } from "./components/home/createGame/createGame.component";
import { CreateMessageComponent } from "./components/home/createMessage/createMessage.component";
import { GameViewComponent } from "./components/home/gameView/gameView.component";
import { MessageViewComponent } from "./components/home/messageView/messageView.component"
import { SeeInvitesComponent } from "./components/home/seeInvites/seeInvites.component";
import { PlayComponent }     from "./components/home/play/play.component";
import { YourGamesComponent }     from "./components/home/yourGames/yourGames.component";
import { CompletedGamesComponent }     from "./components/home/completedGames/completedGames.component";
import { MainComponent }     from "./components/home/main/main.component";

import { ListComponent } from "./components/list/list.component";
import { HttpModule } from '@angular/http';
// ===========================================================================================


// ===========================================================================================
// Telerik UI
// ===========================================================================================
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
// ===========================================================================================


import { setStatusBarColors } from "./shared";
setStatusBarColors();

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
        ReactiveFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        CreateGameComponent,
        CreateMessageComponent,
        GameViewComponent,
        MessageViewComponent,
        SeeInvitesComponent,
        ListComponent,
        PlayComponent,
        MainComponent,
        YourGamesComponent,
        CompletedGamesComponent

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
