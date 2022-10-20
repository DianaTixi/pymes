import { Grid } from '@mui/material';
import React from 'react';

export const ModalItemCommonCheck = ({ autocomplete }) => {
  return (
    <Grid
      item
      sx={{
        width: '10%',
        marginTop: 2
      }}
    >
      {autocomplete}
    </Grid>
  );
};
