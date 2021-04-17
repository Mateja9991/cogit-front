import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Routes from 'router/components/Routes';
import routes from './routes';

const SubRouter: React.FC<RouteComponentProps> = () => {
  return <Routes routes={routes} />;
};

export default SubRouter;
