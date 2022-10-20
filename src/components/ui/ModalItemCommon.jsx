import { Grid } from '@mui/material';
import React from 'react';

export const ModalItemCommon = ({ autocomplete }) => {
  return (
    <Grid
      item
      sx={{
        width: '50%'
      }}
    >
      {autocomplete}
    </Grid>
  );
};
