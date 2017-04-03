import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// DELETE LATER
import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
//Access
import { AccessService } from "./components/access/access.service";
import { LoginComponent } from "./components/access/login/login.component";
import { RegisterComponent } from "./components/access/register/register.component";

import { HomeComponent } from "./components/home/home.component";
import { CreateComponent } from "./components/home/create/create.component";

import { ListComponent } from "./components/list/list.component";

// ===========================================================================================

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        // DELETE LATER
        ItemsComponent,
        ItemDetailComponent,

        // TRAIL APP STUFF
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        CreateComponent,
        ListComponent
    ],
    providers: [
        // DELETE LATER
        ItemService,
        AccessService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
