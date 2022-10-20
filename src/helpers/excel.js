import * as XLSX from 'xlsx';

export const crearExcelErroresUtil = (data) => {
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Errores');
  XLSX.writeFile(wb, 'Errores.xlsx');
};

export const crearExcelCredencialesUtil = (data) => {
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Credenciales');
  XLSX.writeFile(wb, 'Credenciales.xlsx');
};

export const crearExcelUtil = (data, nombreExcel, nombreArchivo) => {
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, nombreExcel);
  XLSX.writeFile(wb, nombreArchivo);
};
