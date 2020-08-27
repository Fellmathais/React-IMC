import React from 'react';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  spacingicon: {
    marginRight: '0.5rem',
    marginTop: '1em',
    
  },

  formInput: {
    textAlign: 'center',
  },

  mensagemError:{
    textAlign:'center',
    fontSize:'0.9rem',
    color: '#f44336',
    marginBottom:"1rem",
  }

}));


export default useStyle;