import Home from 'pages/Home';
import Login from 'pages/Login';
import SubRouter from 'router/subrouters/Sub';
import { EnhancedRouteProps } from './routes/Enhanced/Enhanced.route';
import redirect from 'router/modules/redirect';

export default [
  {
    path: '/login',
    authorized: false,
    onlyPublic: true,
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/sub',
    component: SubRouter,
    exact: false,
  },
  {
    path: '*',
    component: redirect('/login'),
  },
] as Array<EnhancedRouteProps>;
