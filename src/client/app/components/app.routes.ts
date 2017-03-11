// app
import { RegisterRoutes } from './register/register.routes';
import { AboutRoutes } from './about/about.routes';
import {TrailRoutes} from "./trail/trail.routes";
import {SigninRoutes} from "./signin/signin.routes";

export const routes: Array<any> = [
  ...RegisterRoutes,
  ...AboutRoutes,
  ...TrailRoutes,
  ...SigninRoutes
];
