import { Box, Grid, Modal, Typography } from '@mui/material';
import React from 'react';

export const ModalCommon = ({ open, handleClose, autocompletes, buttons, label }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {label}
        </Typography>
        <Box />

        <Grid container spacing={2}>
          {autocompletes}
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            mt: 2
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          {buttons}
        </Grid>
      </Box>
    </Modal>
  );
};
