import {Card, CardContent, Grid} from "@mui/material";

export const FormCommon = ({components = [], buttons = []}) => {
    return (
        <Card>
            <CardContent>
                {components}
                <Grid
                    container
                    justifyContent="flex-end"
                    sx={{
                        mt: 2
                    }}
                >
                    {buttons}
                </Grid>
            </CardContent>
        </Card>
    );
}
