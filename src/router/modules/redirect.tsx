import React from 'react';
import Redirect from 'router/components/Redirect';

export default (path: string) => () => <Redirect to={path} />;
