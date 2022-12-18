import { useNavigationGuard } from '../hooks';

const Main = () => {
  useNavigationGuard({ isAuth: true });

  return <div>Main</div>;
};

export default Main;
