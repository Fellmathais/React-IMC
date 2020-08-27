import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

export default (props) => {
  return (
    <AppBar position="static" background="primary">
      <Toolbar>
        <Typography variant="h6" >
          Calculo IMC
      </Typography>
      </Toolbar>
    </AppBar>
  );
}