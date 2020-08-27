import React from 'react';
import { makeStyles, TableCell } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  table:{
    minWidth: 300,
  },
  titleTable:{
    textAlign:"center",
    fontWeight:300,
    marginTop:"2rem",
  }
}));


export default useStyle;