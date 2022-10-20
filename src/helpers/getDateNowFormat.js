export const getDateNowFormat = () => {
  return new Date(Date.now()).toISOString().split('T')[0];
};
export const getDateAddDaysFormat = ({ fechaInicial = new Date(Date.now()), days }) => {
  const copy = new Date(fechaInicial);
  copy.setDate(fechaInicial.getDate() + days);
  return copy.toISOString().split('T')[0];
};
