import {Button, Grid} from "@mui/material";
import React from "react";

export const ButtonActionForm = (
    label,
    type = "submit"
) => {
    return (
        <Grid
            container
            justifyContent="flex-end"
            sx={{
                mt: 2
            }}
        >
            <Button
                variant="text"
                sx={{
                    fontWeight: 'bold',
                }}
                color='secondary'
                type={type}
            >
                {label}
            </Button>
        </Grid>
    );
}
