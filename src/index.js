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
import NetflixCards from './Projects/NetflixCards';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
  <NetflixCards imgsrc='https://upload.wikimedia.org/wikipedia/en/2/22/TVD_cast.jpg' category='A NETFLIX ORIGINAL SERIES' title='The Vampire Dairies' link='https://www.netflix.com/in/' />  
  <NetflixCards imgsrc='https://pdqwire.com/wp-content/uploads/2020/08/35285-1024x575.jpg' category='A NETFLIX ORIGINAL SERIES' title='SEX Education' link='https://www.netflix.com/in/' />  
  <NetflixCards imgsrc='https://images-na.ssl-images-amazon.com/images/I/51MmI%2BNl5DL._AC_.jpg' category='A NETFLIX ORIGINAL SERIES' title='Dark' link='https://www.netflix.com/in/' />  
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
