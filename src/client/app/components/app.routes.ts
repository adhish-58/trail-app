// app
import { RegisterRoutes } from './register/register.routes';
import { AboutRoutes } from './about/about.routes';
import {TrailRoutes} from "./trail/trail.routes";

export const routes: Array<any> = [
  ...RegisterRoutes,
  ...AboutRoutes,
  ...TrailRoutes
];
