import {
  Box,
  Grid,
  Modal,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Button,
  Card,
  CardHeader,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
  IconButton,
  Divider,
  FormGroup,
  Checkbox
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import * as Yup from 'yup';
import _ from 'lodash';
import { TextFieldCommon } from './TextFieldCommon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Carousel } from 'react-responsive-carousel';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { ModalButton } from './ModalButton';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { setPreguntasDetalles } from '../../store/talk/talkSlice';

export const ModalPreguntasCommon = ({ open, handleClose }) => {
  const { preguntasDetalles } = useSelector((state) => state.talk);
  const [nuevoDetalle, setNuevoDetalle] = useState('');
  const [update, setUpdate] = useState(false);
  const [indexCarousel, setIndexCarousel] = useState(0);
  const dispatch = useDispatch();
  const arrayHelpersRef = useRef(null);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '92%',
    maxHeight: '95%',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4
  };
  //console.log(preguntasDetalles);

  useEffect(() => {
    if (update) setUpdate(false);
  }, [update]);

  const schemaPregunta = Yup.object().shape({
    preguntas: Yup.array()
      .of(
        Yup.object().shape({
          tipo: Yup.number()
            .integer('Tipo no válido')
            .positive('Tipo no válido')
            .required('Ingrese un tipo')
            .typeError('Tipo no válido'),
          calificacion: Yup.number()
            .positive('La calificación debe ser positiva')
            .required('Ingrese una calificación')
            .typeError('Calificación no válido'),
          pregunta: Yup.string()
            .min(4, 'La pregunta es muy corta')
            .required('Ingrese una pregunta'),
          respuesta: Yup.string()
            .min(2, 'Respuesta correcta muy corta')
            .typeError('Seleccione una respuesta correcta')
            .required('Ingrese una respuesta correcta'),
          detalles: Yup.array().of(
            Yup.object().shape({
              nombre: Yup.string().min(2, 'Respuesta muy corta').required('Ingrese una respuesta')
            })
          )
        })
      )
      .required('Debe tener pregunta')
      .min(1, 'Ingese al menos una pregunta')
  });

  const onCloseModal = async (event, reason) => {
    if (reason !== 'backdropClick') handleClose();
  };

  const handleRenderTipoRespuesta = ({
    index,
    pregunta,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched
  }) => {
    switch (pregunta.tipo) {
      case 1:
        return (
          <FormControl variant="standard" sx={{ m: 1, minWidth: '95%' }}>
            <InputLabel id="select-standard-label">Respuesta</InputLabel>
            <Select
              labelId="select-label"
              id={`preguntas.${index}.respuesta`}
              label="respuesta"
              name={`preguntas.${index}.respuesta`}
              fullWidth
              value={pregunta.respuesta}
              onChange={handleChange}
            >
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
            </Select>
          </FormControl>
        );
      case 2:
        return (
          <TextFieldCommon
            id={`preguntas.${index}.respuesta`}
            label="Respuesta"
            margin="normal"
            type="text"
            fullWidth
            multiline
            maxRows={5}
            variant="standard"
            color="secondary"
            value={pregunta.respuesta}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.preguntas && typeof errors?.preguntas[index]?.respuesta == 'string'}
            inputProps={{ style: { textTransform: 'uppercase' } }}
            helperText={errors?.preguntas && errors.preguntas[index]?.respuesta}
          />
        );
      case 3:
        return (
          <FormControl>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={7}>
                <TextFieldCommon
                  id={`preguntas.${index}.pregunta`}
                  label="Nueva respuesta"
                  margin="normal"
                  type="text"
                  fullWidth
                  variant="standard"
                  color="secondary"
                  value={nuevoDetalle}
                  onChange={(e) => {
                    setNuevoDetalle(e.target.value);
                  }}
                  error={
                    errors?.preguntas && typeof errors?.preguntas[index]?.respuesta == 'string'
                  }
                  helperText={errors?.preguntas && errors.preguntas[index]?.respuesta}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  color="secondary"
                  variant="outlined"
                  endIcon={<AddCircleIcon />}
                  onClick={() => {
                    if (nuevoDetalle.length <= 2) {
                      setFieldError(`preguntas.${index}.respuesta`, 'La respuesta es muy corta');
                      return;
                    }
                    const tmpDetalles = [...pregunta.detalles];

                    if (_.find(tmpDetalles, { nombre: nuevoDetalle })) {
                      setFieldError(`preguntas.${index}.respuesta`, 'La respuesta ya existe');
                      return;
                    }
                    tmpDetalles.push({ nombre: nuevoDetalle });
                    setFieldError(`preguntas.${index}.respuesta`, '');

                    if (tmpDetalles.length == 2)
                      setFieldValue(`preguntas.${index}.respuesta`, tmpDetalles[0]?.nombre);
                    setFieldValue(`preguntas.${index}.detalles`, tmpDetalles);
                    setNuevoDetalle('');
                  }}
                >
                  Agregar
                </Button>
              </Grid>
            </Grid>

            {pregunta.detalles.length > 0 && !update && (
              <>
                <FormLabel id="demo-radio-buttons-group-label">Respuestas</FormLabel>
                <Paper style={{ height: '21vh', overflow: 'auto' }} elevation={0}>
                  <RadioGroup
                    onChange={(e) => {
                      setFieldValue(`preguntas.${index}.respuesta`, e.target.value);
                    }}
                  >
                    {pregunta.detalles.map((detalles, indexDetalle) => (
                      <Grid
                        key={`${detalles.nombre}_${JSON.stringify(indexDetalle)}`}
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={8}>
                          <FormControlLabel
                            value={detalles.nombre}
                            control={<Radio />}
                            disabled={pregunta.detalles.length < 2}
                            checked={pregunta.respuesta == pregunta.detalles[indexDetalle]?.nombre}
                            label={detalles.nombre}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={() => {
                              if (
                                pregunta.respuesta == pregunta.detalles[indexDetalle]?.nombre ||
                                pregunta.detalles.length <= 2
                              ) {
                                setFieldValue(`preguntas.${index}.respuesta`, null);
                              }
                              const tmpDetalles = [...pregunta.detalles];
                              tmpDetalles.splice(indexDetalle, 1);
                              setFieldValue(`preguntas.${index}.detalles`, tmpDetalles);
                              setUpdate(true);
                            }}
                            variant="contained"
                            color="primary"
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                    ))}
                  </RadioGroup>
                </Paper>
              </>
            )}
          </FormControl>
        );
      case 4:
        return (
          <FormControl>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={7}>
                <TextFieldCommon
                  id={`preguntas.${index}.pregunta`}
                  label="Nueva respuesta"
                  margin="normal"
                  type="text"
                  fullWidth
                  variant="standard"
                  color="secondary"
                  value={nuevoDetalle}
                  onChange={(e) => {
                    setNuevoDetalle(e.target.value);
                  }}
                  error={
                    errors?.preguntas && typeof errors?.preguntas[index]?.respuesta == 'string'
                  }
                  helperText={errors?.preguntas && errors.preguntas[index]?.respuesta}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  color="secondary"
                  variant="outlined"
                  endIcon={<AddCircleIcon />}
                  onClick={() => {
                    if (nuevoDetalle.length <= 2) {
                      setFieldError(`preguntas.${index}.respuesta`, 'La respuesta es muy corta');
                      return;
                    }
                    const tmpDetalles = [...pregunta.detalles];

                    if (_.find(tmpDetalles, { nombre: nuevoDetalle })) {
                      setFieldError(`preguntas.${index}.respuesta`, 'La respuesta ya existe');
                      return;
                    }
                    tmpDetalles.push({ nombre: nuevoDetalle });
                    setFieldError(`preguntas.${index}.respuesta`, '');

                    if (tmpDetalles.length == 2)
                      setFieldValue(`preguntas.${index}.respuesta`, tmpDetalles[0]?.nombre);
                    setFieldValue(`preguntas.${index}.detalles`, tmpDetalles);
                    setNuevoDetalle('');
                  }}
                >
                  Agregar
                </Button>
              </Grid>
            </Grid>
            {pregunta.detalles.length > 0 && !update && (
              <>
                <FormLabel id="demo-radio-buttons-group-label">Respuestas</FormLabel>
                <Paper style={{ height: '21vh', overflow: 'auto' }} elevation={0}>
                  <FormGroup>
                    {pregunta.detalles.map((detalles, indexDetalle) => (
                      <Grid
                        key={`${detalles.nombre}_${JSON.stringify(indexDetalle)}`}
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={8}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                control={<Radio />}
                                disabled={pregunta.detalles.length < 2}
                                checked={
                                  pregunta.respuesta
                                    ?.split(';;')
                                    ?.includes(pregunta.detalles[indexDetalle]?.nombre) || false
                                }
                                label={detalles.nombre}
                                onChange={(e) => {
                                  const arrayResp = pregunta?.respuesta?.split(';;') || [];
                                  if (e.target.checked) {
                                    arrayResp.push(e.target.name);
                                  } else {
                                    const indexValue = arrayResp.indexOf(e.target.name);
                                    if (indexValue !== -1) {
                                      arrayResp.splice(indexValue, 1);
                                    }
                                  }
                                  setFieldValue(
                                    `preguntas.${index}.respuesta`,
                                    arrayResp.length > 0 ? arrayResp.join(';;') : null
                                  );
                                }}
                                name={detalles.nombre}
                              />
                            }
                            label={detalles.nombre}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={() => {
                              if (
                                pregunta.respuesta == pregunta.detalles[indexDetalle]?.nombre ||
                                pregunta.detalles.length <= 2
                              ) {
                                setFieldValue(`preguntas.${index}.respuesta`, null);
                              }
                              const tmpDetalles = [...pregunta.detalles];
                              tmpDetalles.splice(indexDetalle, 1);
                              setFieldValue(`preguntas.${index}.detalles`, tmpDetalles);
                              setUpdate(true);
                            }}
                            variant="contained"
                            color="primary"
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                    ))}
                  </FormGroup>
                  <RadioGroup
                    onChange={(e) => {
                      setFieldValue(`preguntas.${index}.respuesta`, e.target.value);
                    }}
                  ></RadioGroup>
                </Paper>
              </>
            )}
          </FormControl>
        );

      default:
        return <Typography>No disponible</Typography>;
    }
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Formik
          initialValues={
            preguntasDetalles?.length > 0
              ? { preguntas: preguntasDetalles }
              : {
                  preguntas: [
                    {
                      tipo: 1,
                      pregunta: '',
                      calificacion: 0,
                      respuesta: 'SI',
                      detalles: []
                    }
                  ]
                }
          }
          validationSchema={schemaPregunta}
          onSubmit={(values) => {
            dispatch(setPreguntasDetalles(values.preguntas));
            handleClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldError,
            setFieldTouched
          }) => {
            return (
              <Form>
                <Paper
                  style={{ maxHeight: '65vh', minHeight: '30vh', overflow: 'auto' }}
                  elevation={0}
                >
                  <FieldArray
                    name="preguntas"
                    render={(arrayHelpers) => {
                      arrayHelpersRef.current = arrayHelpers;
                      return (
                        <Carousel
                          showArrows
                          infiniteLoop
                          onChange={(e) => {
                            setIndexCarousel(e);
                          }}
                          selectedItem={indexCarousel}
                          showThumbs={false}
                          showStatus={false}
                          renderIndicator={(onClickHandler, isSelected, index, label) => {
                            if (isSelected) {
                              return (
                                <IconButton
                                  sx={{
                                    alignContent: 'center',
                                    top: '2vh',
                                    zIndex: 100
                                  }}
                                  onClick={onClickHandler}
                                >
                                  <CircleIcon fontSize={'small'} />
                                </IconButton>
                              );
                            }
                            return (
                              <IconButton
                                sx={{
                                  alignContent: 'center',
                                  top: '2vh',
                                  zIndex: 100
                                }}
                                onClick={onClickHandler}
                              >
                                <CircleOutlinedIcon fontSize={'small'} />
                              </IconButton>
                            );
                          }}
                          renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                              <IconButton
                                sx={{
                                  alignContent: 'center',
                                  position: 'absolute',
                                  zIndex: 10,
                                  top: 'calc(50% - 15px)',
                                  left: '-0.2vw'
                                }}
                                color="secondary"
                                onClick={onClickHandler}
                              >
                                <ArrowLeftIcon sx={{ fontSize: 45 }} />
                              </IconButton>
                            )
                          }
                          renderArrowNext={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                              <IconButton
                                sx={{
                                  alignContent: 'center',
                                  position: 'absolute',
                                  zIndex: 10,
                                  top: 'calc(50% - 15px)',
                                  left: '81.5vw'
                                }}
                                color="secondary"
                                onClick={onClickHandler}
                              >
                                <ArrowRightIcon sx={{ fontSize: 45 }} />
                              </IconButton>
                            )
                          }
                        >
                          {values.preguntas &&
                            values.preguntas.length > 0 &&
                            values.preguntas.map((pregunta, index) => (
                              <div key={`${pregunta.tipo}_${JSON.stringify(index)}`}>
                                <Card
                                  variant="outlined"
                                  sx={{ m: 2, p: 2, borderWidth: 3, borderRadius: 5 }}
                                >
                                  <CardHeader
                                    action={
                                      <>
                                        {values.preguntas.length > 1 && (
                                          <>
                                            <IconButton
                                              onClick={() => {
                                                setIndexCarousel(index - 1);
                                                arrayHelpers.remove(index);
                                              }}
                                              color="primary"
                                              aria-label="delete"
                                            >
                                              <DeleteIcon sx={{ fontSize: 45 }} />
                                            </IconButton>
                                          </>
                                        )}
                                        <IconButton
                                          onClick={() => {
                                            setIndexCarousel(
                                              arrayHelpersRef?.current?.form?.values?.preguntas
                                                .length || indexCarousel + 1
                                            );
                                            arrayHelpersRef.current.push({
                                              tipo: 1,
                                              pregunta: '',
                                              calificacion: 0,
                                              respuesta: 'SI',
                                              detalles: []
                                            });
                                          }}
                                          color="secondary"
                                          aria-label="agregar"
                                        >
                                          <AddCircleIcon sx={{ fontSize: 45 }} />
                                        </IconButton>
                                      </>
                                    }
                                    title={
                                      <Typography variant="h4" gutterBottom>
                                        <strong>
                                          Pregunta {index + 1}/{values.preguntas.length}
                                        </strong>
                                      </Typography>
                                    }
                                  />
                                  <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={3}>
                                      <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: '100%' }}
                                      >
                                        <InputLabel id="select-standard-label">Tipo</InputLabel>
                                        <Select
                                          labelId="select-label"
                                          id={`preguntas.${index}.tipo`}
                                          label="Tipo"
                                          name={`preguntas.${index}.tipo`}
                                          fullWidth
                                          value={pregunta.tipo}
                                          onChange={(e) => {
                                            if (e.target.value === 1) {
                                              setFieldValue(`preguntas.${index}.respuesta`, 'SI');
                                            } else {
                                              setFieldValue(`preguntas.${index}.respuesta`, '');
                                            }
                                            if (![3, 4].includes(e.target.value))
                                              setFieldValue(`preguntas.${index}.detalles`, []);

                                            handleChange(e);
                                          }}
                                          error={
                                            errors?.preguntas &&
                                            touched?.preguntas &&
                                            errors?.preguntas[index]?.tipo &&
                                            touched?.preguntas[index]?.tipo
                                          }
                                        >
                                          <MenuItem value={1}>SI/NO</MenuItem>
                                          <MenuItem value={2}>Texto</MenuItem>
                                          <MenuItem value={3}>Respuesta única</MenuItem>
                                          <MenuItem value={4}>Respuesta múltiple</MenuItem>
                                        </Select>
                                      </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                      {/*  <TextField
                                        id={`preguntas.${index}.pregunta`}
                                        label="Pregunta"
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        multiline
                                        maxRows={5}
                                        variant="standard"
                                        color="secondary"
                                        value={pregunta.pregunta}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={
                                          errors?.preguntas &&
                                          touched?.preguntas &&
                                          errors?.preguntas[index]?.pregunta &&
                                          touched?.preguntas[index]?.pregunta
                                        }
                                        helperText={
                                          errors?.preguntas && errors?.preguntas[index]?.pregunta
                                        }
                                      /> */}
                                      <Field name={`preguntas.${index}.pregunta`}>
                                        {({ field, form, meta }) => (
                                          <div>
                                            <textarea
                                              rows="5"
                                              style={{
                                                resize: 'none',
                                                width: '90%',
                                                fontSize: 'inherit',
                                                fontFamily: 'inherit'
                                              }}
                                              {...field}
                                              placeholder="Pregunta"
                                            />
                                            {meta.touched && meta.error && (
                                              <div className="error">{meta.error}</div>
                                            )}
                                          </div>
                                        )}
                                      </Field>
                                    </Grid>
                                    <Grid item xs={1}>
                                      {
                                        <TextFieldCommon
                                          id={`preguntas.${index}.calificacion`}
                                          label="Calificacion"
                                          margin="normal"
                                          type="number"
                                          fullWidth
                                          variant="standard"
                                          color="secondary"
                                          value={pregunta.calificacion}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            errors?.preguntas &&
                                            touched?.preguntas &&
                                            errors?.preguntas[index]?.calificacion &&
                                            touched?.preguntas[index]?.calificacion
                                          }
                                          helperText={
                                            errors?.preguntas &&
                                            errors.preguntas[index]?.calificacion
                                          }
                                        />
                                      }
                                    </Grid>
                                    <Grid item xs={4}>
                                      {handleRenderTipoRespuesta({
                                        errors,
                                        handleBlur,
                                        handleChange,
                                        index,
                                        pregunta,
                                        touched,
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched
                                      })}
                                    </Grid>
                                  </Grid>
                                </Card>
                              </div>
                            ))}
                        </Carousel>
                      );
                    }}
                  />
                </Paper>
                {errors?.preguntas && (
                  <Paper
                    style={{ maxHeight: '12vh', overflow: 'auto' }}
                    sx={{ mt: 2, mx: 2, p: 2, borderWidth: 3, borderRadius: 5 }}
                    elevation={2}
                  >
                    <Typography
                      variant="h6"
                      color="red"
                      sx={{
                        fontWeight: 'bold'
                      }}
                    >
                      Errores
                    </Typography>

                    {errors?.preguntas?.map(
                      (errorActual, indexError) =>
                        errorActual && (
                          <Stack key={JSON.stringify(indexError)}>
                            <Typography
                              sx={{
                                fontWeight: 'bold'
                              }}
                            >
                              Pregunta #{indexError + 1}:{' '}
                              {errorActual?.tipo && `${errorActual.tipo}; `}
                              {errorActual?.pregunta && `${errorActual.pregunta}; `}
                              {errorActual?.calificacion && `${errorActual.calificacion}; `}
                              {errorActual?.respuesta && `${errorActual.respuesta}; `}
                            </Typography>
                          </Stack>
                        )
                    )}
                  </Paper>
                )}
                <Grid
                  container
                  spacing={2}
                  sx={{
                    mt: 2
                  }}
                >
                  <Box sx={{ flexGrow: 1 }} />
                  <ModalButton
                    color="primary"
                    type="button"
                    onClick={handleClose}
                    label={'Cerrar'}
                  />
                  <ModalButton color="secondary" label={'Aceptar'} type="submit" />
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Modal>
  );
};
