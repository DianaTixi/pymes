import { Button, Grid } from '@mui/material';
import React from 'react';

export const TitleBarButton = ({
  icon,
  label,
  onClick,
  href,
  type,
  variant = 'outlined',
  color = 'secondary'
}) => {
  return (
    <Grid item>
      <Button
        variant={variant}
        startIcon={icon}
        sx={{
          fontWeight: 'bold'
        }}
        color={color}
        onClick={onClick}
        href={href}
        type={type}
      >
        {label}
      </Button>
    </Grid>
  );
};
