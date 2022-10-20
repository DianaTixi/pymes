import { Box, Card, CardMedia, Grid, Modal } from '@mui/material';
import { ModalButton } from './ModalButton';
import React from 'react';

export const ModalImageCommon = ({ open, handleClose, image }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90%',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 2
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <Card>
              <CardMedia
                sx={{
                  width: 600,
                  height: 600,
                  p: 4
                }}
                component="img"
                alt="image"
                id="image"
                image={image}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            mt: 2
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
        </Grid>
        <ModalButton color="primary" label="Cerrar" onClick={handleClose} />
      </Box>
    </Modal>
  );
};
