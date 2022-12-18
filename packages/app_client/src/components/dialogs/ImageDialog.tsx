import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from '@mui/material';
import { FC } from 'react';

interface ImageDialogProps {
  onClose: () => void;
  open: boolean;
  setPercent: any;
  setUploading: any;
}

const ImageDialog: FC<ImageDialogProps> = ({ onClose, open, setPercent, setUploading }) => {
  const onChangeAddFile = () => {
    console.log('onChangeAddFile');
  };

  const onClickSendFile = () => {
    console.log('onClickSendFile');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>이미지 보내기</DialogTitle>
      <DialogContent>
        <Input
          margin="dense"
          inputProps={{ accept: 'image/jpeg, image/jpg, image/png, image/gif' }}
          type="file"
          fullWidth
          onChange={onChangeAddFile}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onClickSendFile}>전송</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
