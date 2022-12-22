import '../firebase';

import { Divider, Grid, List, Paper, Toolbar } from '@mui/material';
import { MessageResponseDto } from '@slack_clone/common';
import type { User } from 'firebase/auth';
import {
  child,
  get,
  getDatabase,
  onChildAdded,
  orderByChild,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { currentChannelAtom, currentUserAtom } from '../store';
import { ChatHeader, ChatInput, ChatMessage } from './chats';

const Chat = () => {
  const currentChannel = useRecoilValue(currentChannelAtom);
  const currentUser = useRecoilValue(currentUserAtom) as User;

  const messageEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageResponseDto[] | []>([]);

  const getMessage = useCallback(async () => {
    const snapShot = await get(child(ref(getDatabase()), `messages/${currentChannel?.id}`));
    setMessages(snapShot.val() ? (Object.values(snapShot.val()) as MessageResponseDto[]) : []);
  }, [currentChannel?.id]);

  useEffect(() => {
    if (!currentChannel) return;
    getMessage();

    return () => {
      setMessages([]);
    };
  }, [currentChannel, getMessage]);

  useEffect(() => {
    if (!currentChannel) return;

    const sorted = query(
      ref(getDatabase(), `messages/${currentChannel.id}`),
      orderByChild('timestamp'),
    );

    const unsubscribe = onChildAdded(query(sorted, startAt(Date.now())), (snapshot) =>
      setMessages((prev) => [...prev, snapshot.val()]),
    );

    return () => {
      unsubscribe?.();
    };
  }, [currentChannel]);

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
