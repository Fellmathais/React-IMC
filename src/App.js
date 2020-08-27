import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import GlobalCss from './globalStyles';
import Routes from './Router';
import { Provider } from 'react-redux';
import Store from './store';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });



  return (
    <Provider store={Store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalCss></GlobalCss>
          <Routes />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
