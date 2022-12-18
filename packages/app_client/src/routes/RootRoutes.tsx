import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ROUTER_NAME } from '../constants';
import { Login, Main, Signup } from '../pages';
import { currentUserAtom } from '../store';

const RootRoutes = () => {
  const currentUser = useRecoilValue(currentUserAtom);

  const navigateProps = {
    to: currentUser ? ROUTER_NAME.MAIN : ROUTER_NAME.MAIN,
  };

  return (
    <Routes>
      <Route path={ROUTER_NAME.HOME} element={<Navigate {...navigateProps} />} />
      <Route path={ROUTER_NAME.LOGIN} element={<Login />} />
      <Route path={ROUTER_NAME.MAIN} element={<Main />} />
      <Route path={ROUTER_NAME.SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default RootRoutes;
