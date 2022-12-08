import React from 'react';
import ReactDOM from 'react-dom';
import { registerServiceWorker } from "./register-sw";
import './index.css';
import App from './App';


registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(
//   <React.StrictMode>
//    <App />
//   </React.StrictMode>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
