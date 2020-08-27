import React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import Grid from '@material-ui/core/Grid';
import UseStyle from './tablestyles'

export default function Tabelas(props) {
  const classes = UseStyle();
  return (
    <>
    <Grid item xs={6} md={6} lg={6} sm={12}>
      <h4 className={classes.titleTable}>Confira na tabela abaixo para identificar o seu IMC e o grau de Obsidade</h4>
      <br/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">IMC</TableCell>
              <TableCell align="center">Classificação</TableCell>
              <TableCell align="center">Obsidade(grau)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Menor que 18,5</TableCell>
              <TableCell align="center">MAGREZA</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ENTRE 18,5 E 24,9</TableCell>
              <TableCell align="center">NORMAL</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ENTRE 25,0 E 29,9</TableCell>
              <TableCell align="center">SOBREPESO</TableCell>
              <TableCell align="center">I</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ENTRE 30,0 E 39,9</TableCell>
              <TableCell align="center">OBESIDADE</TableCell>
              <TableCell align="center">II</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">MAIOR QUE 40,0</TableCell>
              <TableCell align="center">OBESIDADE GRAVE</TableCell>
              <TableCell align="center">III</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
    </>
  );
}