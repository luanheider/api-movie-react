import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyled from '../src/styles/global-styles'
import RoutesApp from '../src/routes'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <RoutesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
