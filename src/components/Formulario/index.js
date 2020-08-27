import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@material-ui/core';
import UseStyle from './MaterialCss'
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import { BackgroundDiv, OverlayBackground } from '../Banner/style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IMCAction from '../../store/Actions/Imc';


// o dispach serve para disparar actions para o nosso reducer
const FormularioIMC = ({ Data, dispatch, ToggleValue }) => {
  const classes = UseStyle();
  const [Peso, setPeso] = useState(Data.Peso);
  const [Altura, setAltura] = useState(Data.Altura)
  const [MensagemErro, setMensagemErro] = useState("");

  function handlerAlterAltura(event) {
    let altura = event.target.value;
    setAltura(parseFloat(altura));
  }

  function handlerAlterPeso(event) {
    let peso = event.target.value;
    setPeso(parseFloat(peso));
  }

  function  handlerCalcularEvnt(event) {
   

    if (Peso <= 0) {
      setMensagemErro("O valor do Peso não pode ser 0 ou menor que 0");
      console.error("L4752");
      return;
    }
    if (Altura <= 0) {
      setMensagemErro("O valor da Altura não pode ser 0 ou menor que 0");
      console.error("L089B");
      return;
    }
    let calculo = Peso / (Altura * Altura);
 
    ToggleValue(Peso, Altura,calculo.toFixed(1));
  }


  return (
    <Grid item xs={12} lg={12} md={12} sm={12} >
      <BackgroundDiv overlayColor="rgba(0,0,0,0.8)">
        <Box m={1} background="text-primary">
          <Container maxWidth="xl">
            <Box p={2} style={{ marginTop: "2rem" }}>
              <Box>
                {MensagemErro !== "" && <Typography className={classes.mensagemError}>{MensagemErro}</Typography>}
              </Box>
              <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                <Grid item xl={6} lg={6} md={6} sm={6} className={classes.formInput}>
                  <FitnessCenter className={classes.spacingicon} />
                  <TextField id="standard-basic" value={Peso} onChange={handlerAlterPeso} label="Informe o seu peso" type="number" />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} className={classes.formInput}>
                  <EmojiPeople className={classes.spacingicon} />
                  <TextField id="standard-basic" value={Altura} onChange={handlerAlterAltura} label="informe a sua altura" type="number" />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} className={classes.formInput}>
                  <Button type="button" variant="outlined" color="primary" onClick={handlerCalcularEvnt}>Primary</Button>
                  {Data.IMC > 0 && <Typography variant="h6"> {Data.IMC.replace('.',',')} </Typography>}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </BackgroundDiv>
    </Grid>
  );
}

const mapStateToProps = state => ({
  Data: state.IMC.Data
})

const mapDispatchToProps = dispatch => bindActionCreators(IMCAction, dispatch);
// const mapDispatchToProps = dispatch =>({
//   ToggleValue: (peso) => dispatch(IMCAction.ToggleValue(peso))
// });

// se por acaso o nome da propriedade e da action forem iguais assim como seus parametros podemos usar o 
//bindActionCreators, que maperia toda a action importada e retorna como propriedades
export default connect(mapStateToProps, mapDispatchToProps)(FormularioIMC);