import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b2430',
      light: '#232F3E',
      dark: '#19212C',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
