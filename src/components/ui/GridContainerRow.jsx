import {Grid} from "@mui/material";

export const GridContainerRow = ({children}) => {
    return (
        <Grid
            container
            direction="row"
            spacing={2}
            sx={{mt: 1}}
        >
            {children}
        </Grid>
    );
}
