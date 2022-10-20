import React, {useState} from "react";
import {UploadFile} from "@mui/icons-material";
import {TitleBarButton} from "./TitleBarButton";
import {Grid, TextField} from "@mui/material";

export const ButtonFileUpload = ({handleFile, onSendFile}) => {

    const [file, setFile] = useState(null);
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event, onSendFile) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        setFile(fileUploaded);
        handleFile(fileUploaded);
    };

    const procesarArchivohandler = () => {
        onSendFile(file);
    };

    return (
        <>
            {!file && (
                <TitleBarButton
                    label={"Subir archivo"}
                    icon={<UploadFile/>}
                    onClick={handleClick}
                />
            )}
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                hidden
            />
            {file && (
                <>
                    <Grid sx={{ ml: 2}}/>
                    <TextField
                        margin="normal"
                        type="text"
                        variant="outlined"
                        color="secondary"
                        disabled
                        value={file.name}
                        size="small"
                        sx={{
                            width: '20%'
                        }}
                    />
                    <TitleBarButton
                        label={"Procesar"}
                        onClick={procesarArchivohandler}
                    />
                    <TitleBarButton
                        label={"Cancelar"}
                        onClick={() => {
                            setFile(null);
                        }}
                    />
                </>
            )}
        </>
    );

}
