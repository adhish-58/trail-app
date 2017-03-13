// app
import { RegisterRoutes } from './register/register.routes';
import { AboutRoutes } from './about/about.routes';
import { SigninRoutes } from "./signin/signin.routes";
import { HomeRoutes } from './home/home.routes';
import { CreateMessageRoutes } from './createMessage/createMessage.routes';
import { HelpRoutes } from './help/help.routes';
import { GameNameRoutes } from './gameName/gameName.routes';
import { GameViewRoutes } from './gameView/gameView.routes';

export const routes: Array<any> = [
  ...RegisterRoutes,
  ...AboutRoutes,
  ...SigninRoutes,
  ...HomeRoutes,
  ...CreateMessageRoutes,
  ...HelpRoutes,
  ...GameNameRoutes,
  ...GameViewRoutes
];
