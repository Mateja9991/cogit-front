import React, { useMemo } from 'react';
import { Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import authService from 'services/authService';
import credentialsService from 'services/credentialsService';
import { Role } from 'models/User';

export type EnhancedRouteProps = {
  authorized?: boolean;
  onlyPublic?: boolean;
  authorizedRoles?: Array<Role>;
  componentProps?: Object;
} & RouteProps<string> &
  RouteComponentProps;

const EnhancedRoute: React.FC<EnhancedRouteProps> = (props) => {
  const {
    authorized = false,
    onlyPublic = false,
    component: Component,
    componentProps,
    authorizedRoles,
    ...rest
  } = props;

  const isLoggedIn = useMemo(() => credentialsService.token, []);
  const user = useMemo(() => credentialsService.user, []);

  const finalRoute = useMemo(() => {
    if ((authorized || authorizedRoles) && !isLoggedIn) {
      return (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    }

    if (onlyPublic && isLoggedIn) {
      return <Redirect to="/" />;
    }
    if (authorizedRoles) {
      const userAllowed = authService.checkRolesForUser(user, authorizedRoles);
      if (!userAllowed) credentialsService.removeAuthBody();
    }
    return <Component {...rest} {...componentProps} />;
  }, [
    authorized,
    authorizedRoles,
    componentProps,
    isLoggedIn,
    onlyPublic,
    props.location,
    rest,
    user,
  ]);

  return finalRoute;
};

export default EnhancedRoute;
