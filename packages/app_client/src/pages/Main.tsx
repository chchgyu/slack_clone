import styled from '@emotion/styled';
import { Box, Drawer, Toolbar } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { ChannelMenu, Chat, Header } from '../components';
import { useNavigationGuard } from '../hooks';
import { themeAtom } from '../store';

const Main = () => {
  useNavigationGuard({ isAuth: true });

  const theme = useRecoilValue(themeAtom);

  return (
    <Box sx={{ display: 'flex', backgroundColor: theme.subTheme }}>
      <Header />
      <DrawerNoScroll variant="permanent" sx={{ width: 240 }}>
        <Toolbar />
        <Box sx={{ display: 'flex', minHeight: 'calc( 100vh - 64px )' }}>
          {/* <ThemeMenu /> */}
          <ChannelMenu />
        </Box>
      </DrawerNoScroll>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Chat />
      </Box>
    </Box>
  );
};

export default Main;

const DrawerNoScroll = styled(Drawer)`
  &*::-webkit-scrollbar {
    display: none;
  }
`;
