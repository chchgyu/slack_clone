import { Add as AddIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ChannelResponenseDto } from '@slack_clone/common';
import { getDatabase, onChildAdded, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentChannelAtom, themeAtom } from '../store';
import AddChannelDialog from './dialogs/AddChannelDialog';

const ChannelMenu = () => {
  const theme = useRecoilValue(themeAtom);
  const setCurrentChannel = useSetRecoilState(currentChannelAtom);

  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState<ChannelResponenseDto[]>([]);
  const [activeChannelId, setActiveChannelId] = useState('');
  const [firstLoaded, setFirstLoaded] = useState(true);

  useEffect(() => {
    const unsubscribe = onChildAdded(ref(getDatabase(), 'channels'), (snapshot) => {
      setChannels((channelArr) => [...channelArr, snapshot.val()]);
    });

    return () => {
      setChannels([]);
      unsubscribe();
    };
  }, []);

  const onClickOpen = () => setOpen(true);
  const onClickClose = () => setOpen(false);

  const onClickChangeChannel = (channel: ChannelResponenseDto) => () => {
    setActiveChannelId(channel.id);
  };

  useEffect(() => {
    if (channels.length > 0 && firstLoaded) {
      setActiveChannelId(channels[0].id);
      setCurrentChannel(channels[0]);
      setFirstLoaded(false);
    }
  }, [channels, firstLoaded, setCurrentChannel]);

  return (
    <>
      <List sx={{ overflow: 'auto', width: 240, backgroundColor: theme.mainTheme }}>
        <ListItem
          secondaryAction={
            <IconButton sx={{ color: '#9A939B' }} onClick={onClickOpen}>
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemIcon sx={{ color: '#9A939B' }}>
            <ArrowDropDownIcon />
          </ListItemIcon>
          <ListItemText primary="채널" sx={{ wordBreak: 'break-all', color: '#9A939B' }} />
        </ListItem>
        <List component="div" disablePadding sx={{ pl: 3 }}>
          {channels.map((channel) => (
            <ListItemButton
              selected={channel.id === activeChannelId}
              onClick={onClickChangeChannel(channel)}
              key={channel.id}
            >
              <ListItemText
                primary={`# ${channel.name}`}
                sx={{ wordBreak: 'break-all', color: '#918890' }}
              />
            </ListItemButton>
          ))}
        </List>
      </List>
      <AddChannelDialog onClose={onClickClose} open={open} />
    </>
  );
};

export default ChannelMenu;
