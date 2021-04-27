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
import sdata from './Practice/NetflixData';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
  <h1 className='heading'>This is top-5 Netflix Series</h1>
  <NetflixCards imgsrc={sdata[0].imgsrc} category={sdata[0].category} title={sdata[0].title} link={sdata[0].link} />  
  <NetflixCards imgsrc={sdata[1].imgsrc} category={sdata[1].category} title={sdata[1].title} link={sdata[1].link} />  
  <NetflixCards imgsrc={sdata[2].imgsrc} category={sdata[2].category} title={sdata[2].title} link={sdata[2].link} />  
  <NetflixCards imgsrc={sdata[3].imgsrc} category={sdata[3].category} title={sdata[3].title} link={sdata[3].link} />  
  <NetflixCards imgsrc={sdata[4].imgsrc} category={sdata[4].category} title={sdata[4].title} link={sdata[4].link} />  
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
