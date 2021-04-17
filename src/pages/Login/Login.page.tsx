import React from 'react';
import './Login.styles.scss';

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  const { children } = props;

  return (
    <div>
      hello from Login!
      {children}
    </div>
  );
};

export default Login;
