import { Button } from '@mui/material';
import React from 'react';

export const ButtonCommon = ({
  variant = 'text',
  color = 'secondary',
  type = 'button',
  label,
  onClick,
  icon
}) => {
  return (
    <Button
      type={type}
      endIcon={icon}
      variant={variant}
      sx={{
        fontWeight: 'bold'
      }}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
