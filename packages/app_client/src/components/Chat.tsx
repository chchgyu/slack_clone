import { Divider, Grid, List, Paper, Toolbar } from '@mui/material';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserAtom } from '../store';
import { ChatHeader, ChatInput, ChatMessage } from './chats';

const Chat = () => {
  const currentUser = useRecoilValue(currentUserAtom);

  const messageEndRef = useRef<HTMLDivElement>(null);

  const messages: any[] = [];

  return (
    <>
      <Toolbar />
      <ChatHeader />
      <Grid container component={Paper} variant="outlined" sx={{ mt: 3, position: 'relative' }}>
        <List
          sx={{
            height: 'calc(100vh - 350px)',
            overflow: 'scroll',
            width: '100%',
            position: 'relative',
          }}
        >
          {messages.map((message) => (
            <ChatMessage key={message.timestamp} message={message} user={currentUser} />
          ))}
          <div ref={messageEndRef}></div>
        </List>
        <Divider />
        <ChatInput />
      </Grid>
    </>
  );
};

export default Chat;
