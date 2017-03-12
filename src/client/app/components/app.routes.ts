// app
import { RegisterRoutes } from './register/register.routes';
import { AboutRoutes } from './about/about.routes';
import {SigninRoutes} from "./signin/signin.routes";
import { HomeRoutes } from './home/home.routes';

export const routes: Array<any> = [
  ...RegisterRoutes,
  ...AboutRoutes,
  ...SigninRoutes,
  ...HomeRoutes
];
