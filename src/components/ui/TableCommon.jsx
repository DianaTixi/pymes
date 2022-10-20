import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { TablePaginationActionsButtons } from './TablePaginationActionsButtons';

export const TableCommon = ({
  maxHeight = '55vh',
  rowsHead,
  rowsContent,
  itemsPagination = []
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (page > Math.ceil(rowsContent.length / rowsPerPage))
      setPage(Math.ceil(rowsContent.length / rowsPerPage) - 1);
  }, [rowsContent]);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: maxHeight }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>{rowsHead}</TableHead>
          <TableBody>
            {itemsPagination.length > 0
              ? rowsContent
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return row;
                  })
              : rowsContent}
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
          page={page < Math.ceil(rowsContent.length / rowsPerPage) ? page : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActionsButtons}
        />
      )}
    </Paper>
  );
};
