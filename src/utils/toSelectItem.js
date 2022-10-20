export const toSelectItem = (object, fieldName, fieldName2) => {
  let dev;
  if (fieldName2 != null && fieldName2 != undefined) {
    dev = {
      value: object,
      label: object[`${fieldName}`] + " " + object[`${fieldName2}`],
    };
  } else {
    dev = { value: object, label: object[`${fieldName}`] };
  }
  return dev;
};
