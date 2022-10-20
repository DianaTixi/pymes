import { Autocomplete, FormHelperText, TextField } from '@mui/material';
import React from 'react';

export const AutocompleteCommonValue = ({
  options,
  label,
  helper,
  optionLabel,
  onChange,
  valueSelected
}) => {
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option[`${optionLabel}`],
    isOptionEqualToValue: (option, value) => option.value === value.value
  };

  const onChangeHandler = (v) => {
    onChange(v);
  };

  return (
    <>
      <Autocomplete
        {...defaultProps}
        id="comonvalue"
        color="secondary"
        clearOnEscape
        onChange={(e, v) => onChangeHandler(v)}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" color="secondary" />
        )}
        value={valueSelected}
      />
      <FormHelperText>{helper}</FormHelperText>
    </>
  );
};
