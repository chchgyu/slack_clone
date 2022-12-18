import { CircularProgress, Stack } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ROUTER_NAME } from '../constants';
import { Login, Main, Signup } from '../pages';
import { currentUserAtom, userLoadingAtom } from '../store';

const RootRoutes = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const isUserLoading = useRecoilValue(userLoadingAtom);

  const navigateProps = {
    to: currentUser ? ROUTER_NAME.MAIN : ROUTER_NAME.MAIN,
  };

  return isUserLoading ? (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress color="secondary" size={150} />
    </Stack>
  ) : (
    <Routes>
      <Route path={ROUTER_NAME.HOME} element={<Navigate {...navigateProps} />} />
      <Route path={ROUTER_NAME.LOGIN} element={<Login />} />
      <Route path={ROUTER_NAME.MAIN} element={<Main />} />
      <Route path={ROUTER_NAME.SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default RootRoutes;
