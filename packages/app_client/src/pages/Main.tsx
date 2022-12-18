import { Box } from '@mui/material';

import { Header } from '../components';
import { useNavigationGuard } from '../hooks';

const Main = () => {
  useNavigationGuard({ isAuth: true });

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <Header />
    </Box>
  );
};

export default Main;
