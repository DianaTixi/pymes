import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { filter, values } from 'lodash';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

export const SearchBarCommon = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    filtrarBusqueda() {
      if (busqueda.length > 1) {
        const tmpListado = filtroLodash(busqueda);
        props?.setRowsBusqueda(tmpListado);
      }
    }
  }));

  const [busqueda, setBusqueda] = useState('');

  const cancelSearch = () => {
    props?.setRowsBusqueda('');
    requestSearch('');
  };

  const filtroLodash = (termino) => {
    if (termino.length == 0) return props?.listado;
    return filter(props?.listado, function (a) {
      return values(a).some((b) => {
        let estado = null;
        switch (typeof b) {
          case 'string':
            return b.toUpperCase().includes(termino.trim().toUpperCase());
          case 'number':
            return b == Number(termino);
          case 'boolean':
            if (termino.trim().toUpperCase() === 'SI') estado = true;
            if (termino.trim().toUpperCase() === 'NO') estado = false;
            return b === estado;
        }
      });
    });
  };

  const requestSearch = (searchedVal) => {
    setBusqueda(searchedVal);
    const tmpListado = filtroLodash(searchedVal);
    props?.setRowsBusqueda(tmpListado);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        bgcolor: 'background.paper',
        width: '100%',
        borderRadius: 4,
        boxShadow: 15,
        px: 1,
        pt: 1,
        pb: 2,
        mb: 2
      }}
    >
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        label="Buscar"
        variant="standard"
        sx={{ width: '90%' }}
        value={busqueda}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={cancelSearch} edge="end" disabled={busqueda.length == 0}>
                <CancelIcon sx={{ color: busqueda.length > 0 ? 'red' : 'GrayText' }} />
              </IconButton>
            </InputAdornment>
          )
        }}
        onChange={(searchVal) => requestSearch(searchVal.target.value)}
      />
    </Box>
  );
});

SearchBarCommon.displayName = 'SearchBarCommon';
