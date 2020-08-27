import React from 'react';
import Grid from '@material-ui/core/Grid'
import Formulario from '../../components/Formulario';
import Menu from '../../components/MenuApp';
import Tables from '../../components/Table';

export default () => {
  return (
    <>
      <Menu></Menu>
      <Grid container container
        direction="row"
        justify="center"
        alignItems="center">
        <Formulario></Formulario>
        <Tables></Tables>
      </Grid>
    </>
  );
}