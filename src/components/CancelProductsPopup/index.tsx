import React, { memo, useEffect } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { ICancelProductsPopupProps } from './interfaces';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
};

const CancelProductsPopup = ({ isOpen, apply, undo, products }: ICancelProductsPopupProps) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Modal hideBackdrop open={open} onClose={undo} aria-labelledby="child-modal-title">
      <Box sx={{ ...boxStyle }}>
        <Typography id="child-modal-title" variant="h6" component="h6">
          Вы действительно хотите аннулировать выбранные товары:
          {' '}
          {products}
          {' '}
          ?
        </Typography>
        <Button variant="contained" onClick={apply}>
          Применить
        </Button>
        <Button sx={{ margin: '10px' }} variant="contained" onClick={undo}>
          Отклонить
        </Button>
      </Box>
    </Modal>
  );
};

export default memo(CancelProductsPopup);
