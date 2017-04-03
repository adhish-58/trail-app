import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// DELETE LATER
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
//Access
import { LoginComponent } from "./components/access/login/login.component";
import { RegisterComponent } from "./components/access/register/register.component";

import { HomeComponent } from "./components/home/home.component";
import { CreateComponent } from "./components/home/create/create.component";

import { ListComponent } from "./components/list/list.component";

// ===========================================================================================
const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" },
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent },

    // TRAIL APP STUFF
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "create", component: CreateComponent },
    { path: "list", component: ListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }