import { Button } from "@mui/material"
import { fontWeight } from "@mui/system"

export const ButtonCommonReset= ( 
    {
        variant= "text",
        color = "secondary",
        onclick,

    }
 ) => {
    return(
        <Button
        color={color}
        variant= {variant}
        sx={{
            fontWeight: 'bold',
        }}
        onclick= {onclick}
        > 
        Limpiar

        </Button>
    );

}