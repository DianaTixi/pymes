import { Autocomplete, FormHelperText, TextField } from '@mui/material';
import React from 'react';

export const AutocompleteCommon = ({
  options,
  label,
  helper,
  optionLabel,
  onChange,
  valueSelected,
  hidden = false,
  disabled = false
}) => {
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option[`${optionLabel}`]
  };

  const onChangeHandler = (v) => {
    onChange(v);
  };

  return (
    <>
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        color="secondary"
        clearOnEscape
        disabled={disabled}
        onChange={(e, v) => onChangeHandler(v)}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" color="secondary" />
        )}
        value={valueSelected}
        hidden={hidden}
      />
      <FormHelperText>{helper}</FormHelperText>
    </>
  );
};
