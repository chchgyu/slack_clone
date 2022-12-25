import { CardContent, Grid, Paper, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { currentChannelAtom } from '../../store';

const ChatHeader = () => {
  const currentChannel = useRecoilValue(currentChannelAtom);

  return (
    <Grid container component={Paper} variant="outlined">
      <CardContent>
        <Typography variant="h5"># {currentChannel?.name}</Typography>
        <Typography variant="body1">{currentChannel?.details}</Typography>
      </CardContent>
    </Grid>
  );
};

export default ChatHeader;
