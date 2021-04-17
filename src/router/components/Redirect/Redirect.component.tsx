import React, { useMemo } from 'react';
import {
  useRouteMatch,
  Redirect as ReactRedirect,
  RedirectProps,
} from 'react-router-dom';

const Redirect: React.FC<RedirectProps> = (props) => {
  const { to } = props;
  const { url } = useRouteMatch();

  const finalPath = useMemo(() => {
    const { length: urlLength } = url;
    const toString = to as string;
    if (url[urlLength - 1] === toString[0] && toString[0] === '/') {
      return url + toString.slice(1);
    }
    return url + to;
  }, [url, to]);

  return <ReactRedirect to={finalPath} />;
};

export default Redirect;
