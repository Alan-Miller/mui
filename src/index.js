import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
unregister();
