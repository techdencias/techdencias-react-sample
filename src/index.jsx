import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import $ from 'jquery';

((window) => {
  const app = document.createElement('div');
  window.document.body.appendChild(app);
  $('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
  ReactDom.render(<App />, app);
})(window);
