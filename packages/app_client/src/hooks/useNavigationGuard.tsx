import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ROUTER_NAME } from '../constants';
import { currentUserAtom } from '../store';

type NavigationGuard = {
  isAuth?: boolean;
};

/** @param isAuth 회원서비스용 페이지 분기처리를 위한 파라미터 */
const useNavigationGuard = (data: NavigationGuard) => {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserAtom);

  useEffect(() => {
    if (data.isAuth && !currentUser) navigate(ROUTER_NAME.LOGIN);
    if (!data.isAuth && currentUser) navigate(ROUTER_NAME.MAIN);
  }, [currentUser, data.isAuth, navigate]);
};

export default useNavigationGuard;
