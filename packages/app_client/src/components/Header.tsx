import '../firebase';

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { MouseEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserAtom } from '../store';
import Logo from './Logo';

type AnchorElUser = MouseEvent<HTMLButtonElement>['currentTarget'] | null;

const Header = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  const [anchorElUser, setAnchorElUser] = useState<AnchorElUser>(null);

  const onOpenMeun = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = async () => {
    await signOut(getAuth());
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: '#9A939B',
          backgroundColor: '#4C3C4C',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Box>
          <Box>
            <IconButton onClick={onOpenMeun}>
              <Typography variant="h6" component="div" sx={{ color: '#9A939B' }}>
                {currentUser?.displayName}
              </Typography>
              <Avatar sx={{ ml: '10px' }} alt="profileImage" src={currentUser?.photoURL || ''} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={onCloseMenu}
            >
              <MenuItem>
                <Typography textAlign="center">프로필 이미지</Typography>
              </MenuItem>
              <MenuItem onClick={onClickLogout}>
                <Typography textAlign="center">로그아웃</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
