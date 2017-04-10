import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
import { LoginComponent, RegisterComponent } from "./components/access"
import { HomeComponent }     from "./components/home/home.component";
import { CreateComponent }   from "./components/home/create/create.component";
import { ListComponent }     from "./components/list/list.component";
// ===========================================================================================

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent},
    { path: "home", component: HomeComponent },
    { path: "create", component: CreateComponent },
    { path: "list", component: ListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
