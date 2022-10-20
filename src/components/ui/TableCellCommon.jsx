import { TableCell } from '@mui/material';

export const TableCellCommon = ({
  myKey,
  align = 'left',
  style = { fontSize: '13px' },
  children
}) => {
  return (
    <TableCell key={myKey} align={align} style={style}>
      {children}
    </TableCell>
  );
};
