import {Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

export const CheckboxCommon = ({label, id, name, value, onChange, onBlur, checked}) => {
    return (
        <FormControlLabel
            label={label}
            control={
                <Checkbox
                    id={id}
                    color="secondary"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={checked}
                />
            }
        />
    );
}
