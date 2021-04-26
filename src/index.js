import React from 'react'; //we using this module just because of we use jsx expression.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './Practice/Heading';
import * as app1 from './Practice/App';
import Calculator from './Projects/Calculator';
import Add from './Practice/Add';
import Division from './Practice/Division';
import Multiply from './Practice/Multiply';
import Subtract from './Practice/Subtract';



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  // <Calculator/>
  <div className='cards'>
  <div className='card'>
  <img src='' alt='' className='card_Img' />
  <div className='card_Info'>
  <h3 className='card_title'></h3>
  <a href='' target='_blank'>
  <button>Watch Now</button>
  </a>
  </div>
  </div>
  </div>
    
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
