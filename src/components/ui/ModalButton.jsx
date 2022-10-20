import { Button, Grid } from '@mui/material';
import React from 'react';

export const ModalButton = ({
  label,
  onClick,
  type = 'button',
  variant = 'contained',
  color = 'secondary'
}) => {
  return (
    <Grid item>
      <Button
        type={type}
        variant={variant}
        sx={{
          fontWeight: 'bold'
        }}
        color={color}
        onClick={onClick}
      >
        {label}
      </Button>
    </Grid>
  );
};
