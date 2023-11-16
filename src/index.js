import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
// commented out strictmode, import index, and report webvitals if it causes error, uncomment it

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
