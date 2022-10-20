import { Grid } from '@mui/material';
import React from 'react';

export const ModalItemCommon40 = ({ autocomplete }) => {
  return (
    <Grid
      item
      sx={{
        width: '45%'
      }}
    >
      {autocomplete}
    </Grid>
  );
};
