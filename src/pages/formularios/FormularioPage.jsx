import {
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField
  } from '@mui/material';
import { Formik } from 'formik';
import {PymesLayout } from "../../components/layouts/PymesLayout"
import { AutocompleteCommon } from '../../components/ui/AutocompleteCommon';
import { TitleBar } from "../../components/ui/TitleBar"

export const FormularioPage = () =>{
    return (
        <PymesLayout >
            <TitleBar
                title={"Crear "} 
            />
            <Grid item xs={12}>
        <Card>
          <CardContent>
            <Formik
              initialValues={{
                
              }}
              validationSchema={() => {
                
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if ("") {
                  onSubmitUpdateFormHanlder(values, setSubmitting, resetForm);
                } else {
                  onSubmitFormHanlder(values, setSubmitting, resetForm);
                }
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <AutocompleteCommon
                      options={""}
                      label={''}
                      helper={'L'}
                      optionLabel={''}
                    />
                    <AutocompleteCommon
                      options={""}
                      label={''}
                      helper={''}
                      optionLabel={''}
                    />
                    <AutocompleteCommon
                      options={''}
                      label={''}
                      helper={''}
                      optionLabel={''}
                    />
                    <AutocompleteCommon
                      options={''}
                      label={''}
                      helper={''}
                      optionLabel={''}
                    />
                    <AutocompleteCommon
                      options={''}
                      label={''}
                      helper={''}
                      optionLabel={''}
                    />
                    <TextField
                      id="texto"
                      label="Texto"
                      margin="normal"
                      type="string"
                      fullWidth
                      variant="standard"
                      color="secondary"
                    />
                    <TextField
                    id="texto"
                    label="Texto"
                    margin="normal"
                    type="string"
                    fullWidth
                    variant="standard"
                    color="secondary"
                    />
                    <TextField
                      id="texto"
                      label="Texto"
                      margin="normal"
                      type="string"
                      fullWidth
                      variant="standard"
                      color="secondary"
                    />
                    <TextField
                      id="texto"
                      label="Texto"
                      margin="normal"
                      type="string"
                      fullWidth
                      variant="standard"
                      color="secondary"
                    />
                    <TextField
                      id="texto"
                      label="Texto"
                      margin="normal"
                      type="string"
                      fullWidth
                      variant="standard"
                      color="secondary"
                    />
                    <FormGroup>
                      <FormControlLabel
                        label="Estado"
                        control={
                          <Checkbox
                            id="estado"
                            color="secondary"
                          />
                        }
                      />
                    </FormGroup>
                    <TextField
                    id="texto"
                    label="Texto"
                    margin="normal"
                    type="string"
                    fullWidth
                    variant="standard"
                    color="secondary"
                    />
                    <TextField
                    id="texto"
                    label="Texto"
                    margin="normal"
                    type="string"
                    fullWidth
                    variant="standard"
                    color="secondary"
                    />
                    <TextField
                    id="texto"
                    label="Texto"
                    margin="normal"
                    type="string"
                    fullWidth
                    variant="standard"
                    color="secondary"
                     
                    />
                    <TextField
                    id="texto"
                    label="Texto"
                    margin="normal"
                    type="string"
                    fullWidth
                    variant="standard"
                    color="secondary"
                      
                    />
                    <Grid
                      container
                      justifyContent="flex-end"
                      sx={{
                        mt: 2
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          fontWeight: 'bold'
                        }}
                        color="secondary"
                        type="submit"
                      >
                        {'Crear'}
                      </Button>
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </Grid>

        </PymesLayout>
    )

    
}