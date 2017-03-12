import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  RegisterComponent,
  SigninComponent,
  HomeComponent,
  CreateComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './register/register.component';
export * from './signin/signin.component';
export * from './home/home.component';
