import { EnhancedRouteProps } from 'router/routes/Enhanced/Enhanced.route';
import SubPage from './pages/Sub/Sub.page';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';

export default [
  {
    path: '/test1',
    component: Test1,
  },
  {
    path: '/test2',
    component: Test2,
    authorized: true,
  },
  {
    path: '/',
    component: SubPage,
  },
] as Array<EnhancedRouteProps>;
