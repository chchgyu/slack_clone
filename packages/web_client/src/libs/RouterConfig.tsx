import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { PATH_TO } from '../constants/router';

const Login = lazy(() => import('../pages/Signin'));
const Signup = lazy(() => import('../pages/Signup'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: PATH_TO.HOME, element: <Navigate to={PATH_TO.SIGN_IN} /> },
    { path: PATH_TO.SIGN_IN, element: <Login /> },
    { path: PATH_TO.SIGN_UP, element: <Signup /> },
  ]);

  return routes;
};

export default RouterConfig;
