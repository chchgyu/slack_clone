import { Avatar, Grid, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { MessageResponseDto } from '@slack_clone/common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { User } from 'firebase/auth';
import { FC } from 'react';

dayjs.extend(relativeTime);

interface ChatMessageProps {
  message: MessageResponseDto;
  user: User;
}

// eslint-disable-next-line no-prototype-builtins
const IsImage = (message: MessageResponseDto) => message.hasOwnProperty('image');

const ChatMessage: FC<ChatMessageProps> = ({ message, user }) => {
  return (
    <ListItem>
      <ListItemAvatar sx={{ alignSelf: 'stretch' }}>
        <Avatar
          variant="rounded"
          sx={{ width: 50, height: 50 }}
          alt="profile image"
          src={message.user.avatar}
        />
      </ListItemAvatar>
      <Grid container sx={{ ml: 2 }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
          <ListItemText
            sx={{ display: 'flex' }}
            primary={message.user.name}
            primaryTypographyProps={{
              fontWeight: 'bold',
              color: message.user.id === user.uid ? 'orange' : 'black',
            }}
            secondary={dayjs(message.timestamp).fromNow()}
            secondaryTypographyProps={{ color: 'gray', ml: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          {IsImage(message) ? (
            <img alt="message" src={message.image} style={{ maxWidth: '100%' }} />
          ) : (
            <ListItemText sx={{ wordBreak: 'break-all' }} primary={message.content} />
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ChatMessage;
