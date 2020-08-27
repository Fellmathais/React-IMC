import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';

export default function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
  );
}