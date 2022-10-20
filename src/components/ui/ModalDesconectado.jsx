import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { CircleLoader } from 'react-spinners';

export const ModalDesconectado = ({ open }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '30vh',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold'
          }}
        >
          Se perdio la conexion ... Volver a conectar
        </Typography>

        <CircleLoader
          cssOverride={{
            display: 'block',
            margin: '0 auto',
            borderColor: 'red'
          }}
          color="#ff0000"
          size={125}
        />
      </Box>
    </Modal>
  );
};
