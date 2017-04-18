import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
import { LoginComponent, RegisterComponent } from "./components/access"
import { CreateGameComponent } from "./components/home/createGame/createGame.component";
import { CreateMessageComponent } from "./components/home/createMessage/createMessage.component";
import { GameViewComponent } from "./components/home/gameView/gameView.component";
import { MessageViewComponent } from "./components/home/messageView/messageView.component";
import { SeeInvitesComponent } from "./components/home/seeInvites/seeInvites.component";
import { ListComponent }     from "./components/list/list.component";
import { PlayComponent }     from "./components/home/play/play.component";
import { YourGamesComponent }     from "./components/home/yourGames/yourGames.component";
import { CompletedGamesComponent }     from "./components/home/completedGames/completedGames.component";
import { MainComponent }     from "./components/home/main/main.component";
import { AboutComponent }     from "./components/home/about/about.component";

// ===========================================================================================

const routes: Routes = [
    { path: "", redirectTo: "/seeInvites", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent},
    { path: "createGame", component: CreateGameComponent },
    { path: "createMessage", component: CreateMessageComponent },
    { path: "gameView", component: GameViewComponent },
    { path: "messageView", component: MessageViewComponent },
    { path: "seeInvites", component: SeeInvitesComponent },
    { path: "list", component: ListComponent },
    { path: "play", component: PlayComponent },
    { path: "main", component: MainComponent },
    { path: "yourGames", component: YourGamesComponent },
    { path: "completedGames", component: CompletedGamesComponent },
    { path: "about", component: AboutComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
