import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  Typography
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { TablePaginationActionsButtons } from './TablePaginationActionsButtons';

export const TableCommonFilter = ({
  maxHeight = '55vh',
  rowsHead,
  rowsContent, //esto de aqui no esta llegando el listado original aqui esta llegando un comp
  itemsPagination = [],
  buttons
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const searchRef = useRef(null);
  const [rowsBusqueda, setRowsBusqueda] = useState(rowsContent);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setRowsBusqueda(rowsContent);
    if (searchRef.current) {
      searchRef.current.filtrarBusqueda();
    }
    /* if (page > Math.ceil(rowsContent.length / rowsPerPage))
      setPage(Math.ceil(rowsContent.length / rowsPerPage) - 1); */
  }, [rowsContent]);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <Typography sx={{ maxHeight: maxHeight }}>{buttons}</Typography>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>{rowsHead}</TableHead>
          <TableBody>
            {itemsPagination.length > 0
              ? rowsBusqueda
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return row;
                  })
              : rowsBusqueda}
          </TableBody>
        </Table>
      </TableContainer>
      {itemsPagination.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          labelRowsPerPage="Por pagina"
          labelDisplayedRows={({ from, to, count }) => `(${from}-${to}) de ${count} registros`}
          count={itemsPagination.length}
          rowsPerPage={rowsPerPage}
          page={page < Math.ceil(rowsBusqueda.length / rowsPerPage) ? page : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActionsButtons}
        />
      )}
    </Paper>
  );
};
