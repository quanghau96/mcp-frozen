import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  );
};

// If we are in development and in isolation,
// call mount immediately
const devRoot = document.querySelector('#_frozen-app');

if (devRoot) mount(devRoot);

export { mount };