import React from 'react'; //we using this module just because of we use jsx expression.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.Fragment>
    <h1>Practice Project-1 </h1>
    <h2>Show the list of top netflix series</h2>
    <ol>
    <li>The Vampire Dairies</li>
    <li>Dark</li>
    <li>Hobbies</li>
    <li>Mr Robot</li>
    <li>The Holo Love </li>
    </ol>
  </React.Fragment>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello world</h1>
//     <p>Practicising React</p>
//     <h2>By Divyanshi Bansal</h2>


//   </React.Fragment>, document.getElementById('root'));
