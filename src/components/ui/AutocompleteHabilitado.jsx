import {Autocomplete, FormHelperText, TextField} from "@mui/material";
import React from "react";

export const AutocompleteHabilitado = ({onChange, valueSelected}) => {

    const options = [
        { id_habilitado: 0, nombre_habilitado: "DADO DE BAJA" },
        { id_habilitado: 1, nombre_habilitado: "ACTIVOS" }
    ];

    const defaultProps = {
        options: options,
        getOptionLabel: (option) => option.nombre_habilitado,
        isOptionEqualToValue: (option, value) => option.value === value.value
    };

    const onChangeHandler = (v) => {
        onChange(v);
    };

    return (
        <>
            <Autocomplete
                {...defaultProps}
                id="estado"
                color="secondary"
                clearOnEscape
                onChange={(e, v) => onChangeHandler(v)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Estado"
                        variant="standard"
                        color="secondary"
                    />
                )}
                value={valueSelected}
            />
            <FormHelperText>
                Seleccione un tipo de habilitado
            </FormHelperText>
        </>
    );
}
