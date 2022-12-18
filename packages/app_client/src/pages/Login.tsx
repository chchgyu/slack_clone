import { useNavigationGuard } from '../hooks';

const Login = () => {
  useNavigationGuard({ isAuth: false });

  return <div>Login</div>;
};

export default Login;
