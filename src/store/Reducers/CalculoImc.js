
const INICIAL_STATE =  {
  Data:{
    Altura:0,
    Peso:0,
    IMC:0,
    
  }
}

//Reducer que será responsavel por alterar o store
export default function CalculoImc(state = INICIAL_STATE, action  ){
  //identifica a action executa para poder alterar a variavel
  if(action.type === "TOGGLE_IMC"){
    return {Data:action.Data}
  }

if(action.type === "TOOGLE_IMC"){
    return {Data:action.Data};
}

  if(action.type === "TOGGLE_PESO"){
    return {...state,  Data: action.Peso };
  }
  return state;
}