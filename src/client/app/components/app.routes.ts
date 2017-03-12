// app
import { RegisterRoutes } from './register/register.routes';
import { AboutRoutes } from './about/about.routes';
import { SigninRoutes } from "./signin/signin.routes";
import { HomeRoutes } from './home/home.routes';
import { CreateRoutes } from './create/create.routes';
import { TrailRoutes } from './trail/trail.routes';

export const routes: Array<any> = [
  ...RegisterRoutes,
  ...AboutRoutes,
  ...SigninRoutes,
  ...HomeRoutes,
  ...CreateRoutes,
  ...TrailRoutes
];
