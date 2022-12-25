import '../../firebase';

// import 'emoji-mart/css/emoji-mart.css';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  Image as ImageIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, LinearProgress, TextField } from '@mui/material';
import { getDatabase, push, ref, serverTimestamp, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ImageDialog from '../dialogs/ImageDialog';

const ChatInput = () => {
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { register, setFocus, getValues } = useForm<{ message: string }>();

  const onClickTogglePicker = () => {
    setShowEmoji((show) => !show);
  };

  const onClickOpen = () => {
    console.log('onClickOpen');
  };

  const onClickSendMessage = () => {
    console.log('onClickSendMessage');
  };

  const onSelectEmoji = () => {
    console.log('onSelectEmoji');
  };

  const onClickDialogOpen = () => setIsDialogOpen(true);
  const onClickDialogClose = () => setIsDialogOpen(false);

  useEffect(() => {
    setFocus('message', { shouldSelect: true });
  }, [setFocus]);

  return (
    <Grid container sx={{ p: '20px' }}>
      <Grid item xs={12} sx={{ position: 'relative' }}>
        {showEmoji && (
          <Picker
            set="google"
            className="emojipicker"
            title="이모지를 선택하세요."
            emoji="point_up"
            style={{ position: 'absolute', bottom: '80px' }}
            data={data}
            onSelect={onSelectEmoji}
          />
        )}
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={onClickTogglePicker}>
                  <InsertEmoticonIcon />
                </IconButton>
                <IconButton onClick={onClickOpen}>
                  <ImageIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <IconButton disabled={loading} onClick={onClickSendMessage}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete="off"
          label="메세지 입력"
          fullWidth
          {...register('message', { required: true })}
        />
        {uploading ? (
          <Grid item xs={12} sx={{ m: '10px' }}>
            <LinearProgress variant="determinate" value={percent} />
          </Grid>
        ) : null}
        <ImageDialog
          onClose={onClickDialogClose}
          open={isDialogOpen}
          setPercent={setPercent}
          setUploading={setUploading}
        />
      </Grid>
    </Grid>
  );
};

export default ChatInput;
