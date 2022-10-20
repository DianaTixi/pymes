import moment from 'moment/moment';

export const getDateFormat = (fecha) => {
  return moment(fecha).format('YYYY-MM-DD h:mm:ss');
};

export const getDateFormatOnlyDate = (fecha) => {
  return moment(fecha).format('DD-MM-YYYY');
};

export const getDateFormatOnlyYear = (fecha) => {
  return moment(fecha).format('YYYY-MM-DD');
};

export const getDateFormatOnlyMonth = (fecha) => {
  return moment(fecha).format('MM-DD-YYYY');
};
