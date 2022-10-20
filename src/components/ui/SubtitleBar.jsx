import {Box, Grid, Typography} from "@mui/material";
import React from "react";

export const SubtitleBar = ({title, buttons}) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{mb: 2, mt: 0}}
        >
            <Box/>

            {/*<Grid item>*/}
            {/*    <Typography variant='h6' fontWeight="bold">*/}
            {/*        {title}*/}
            {/*    </Typography>*/}
            {/*</Grid>*/}

            {buttons}
        </Grid>
    );
}
