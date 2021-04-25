import React from 'react'; //we using this module just because of we use jsx expression.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './Practice/Heading';
import * as app1 from './Practice/App';
// import Calculator from './Projects/Calculator';
import Add from './Practice/Add';
import Division from './Practice/Division';
import Multiply from './Practice/Multiply';
import Subtract from './Practice/Subtract';



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <h1>Addition of two number {Add(2,3)}</h1>
    <h1>Subtraction of two number {Subtract(7,3)}</h1>
    <h1>Multiplication of two number {Multiply(2,3)}</h1>
    <h1>Division of two number {Division(8,2)}</h1>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
