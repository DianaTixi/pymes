import {CircularProgress, Grid} from "@mui/material";
import React from "react";

export const CircularProgressCommon = () => {
    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Grid>
    );
}
