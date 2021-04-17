import React, { useCallback } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import EnhancedRoute, {
  EnhancedRouteProps,
} from 'router/routes/Enhanced/Enhanced.route';

type RoutesProps = {
  routes: EnhancedRouteProps[];
};
const Routes: React.FC<RoutesProps> = ({ routes }) => {
  const { url } = useRouteMatch();

  const finalPath = useCallback(
    (to = '') => {
      const { length } = url;
      if (url[length - 1] === to[0] && to[0] === '/') {
        return url + to.slice(1);
      }
      return url + to;
    },
    [url],
  );

  return (
    <Switch>
      {routes.map(({ path, exact = true, ...rest }) => (
        <Route
          key={`${path}`}
          path={finalPath(path)}
          exact={exact}
          render={(props) => <EnhancedRoute {...props} {...rest} />}
        />
      ))}
    </Switch>
  );
};

export default Routes;
