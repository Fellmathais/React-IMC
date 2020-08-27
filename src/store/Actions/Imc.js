//criando uma action
export function ToggleValue(Peso,Altura,IMC){
  //sempre em formato de objeto e retorna um type, que serio o identificador para o reducer
  return{
    type: 'TOOGLE_IMC',
    Data:{
      Peso,
      Altura,
      IMC
    }
  }
}
