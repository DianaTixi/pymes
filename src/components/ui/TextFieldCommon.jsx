import { TextField } from '@mui/material';
import React from 'react';

export const TextFieldCommon = ({
  id,
  label,
  type = 'text',
  onchange,
  required = false,
  fullWidth = false,
  variant = 'standard',
  color = 'secondary',
  handleBlur,
  disabled = false,
  errors,
  helperText = '',
  value,
  inputProps,
  ...rest
}) => {
  return (
    <TextField
      id={id}
      label={label}
      margin="normal"
      type={type}
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      onChange={onchange}
      onBlur={handleBlur}
      disabled={disabled}
      error={errors}
      helperText={helperText}
      value={value}
      inputProps={inputProps}
      {...rest}
    />
  );
};
