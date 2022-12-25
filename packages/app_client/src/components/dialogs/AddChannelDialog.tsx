import '../../firebase';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { CreateChannelRequestDto } from '@slack_clone/common';
import { child, getDatabase, push, ref, update } from 'firebase/database';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface AddChannelDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddChannelDialog: FC<AddChannelDialogProps> = ({ onClose, open }) => {
  const { register, watch, getValues, setValue } = useForm<CreateChannelRequestDto>();

  const onCreate = async () => {
    const db = getDatabase();
    const key = push(child(ref(db), 'chennels')).key;
    const newChannel = {
      id: key,
      name: getValues('name'),
      details: getValues('details'),
    };

    const updates = {} as { [k: string]: typeof newChannel };
    updates[`/channels/${key}`] = newChannel;

    try {
      await update(ref(db), updates);
      setValue('name', '');
      setValue('details', '');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>채널 추가</DialogTitle>
      <DialogContent>
        <DialogContentText>생성할 채널명과 설명을 입력해주세요.</DialogContentText>
        <TextField
          margin="dense"
          label="채널명"
          type="text"
          variant="standard"
          autoComplete="off"
          fullWidth
          required
          {...register('name', { required: true })}
        />
        <TextField
          margin="dense"
          label="설명"
          type="text"
          variant="standard"
          autoComplete="off"
          fullWidth
          required
          {...register('details', { required: true })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onCreate} disabled={!watch('details') || !watch('name')}>
          생성
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChannelDialog;
