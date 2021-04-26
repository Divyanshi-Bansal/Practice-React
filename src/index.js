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


function Card(props){
  return (
    <div className='cards'>
    <div className='card'>
      <img src='https://upload.wikimedia.org/wikipedia/en/2/22/TVD_cast.jpg' 
      alt='card_img' className='card_Img' />
      <div className='card_Info'>
        <span className='card_category'>A netflix Orignal Series</span>
        <h3 className='card_title'>The Vampire Daries</h3>
        <a href='https://www.netflix.com/in/' target='_blank'>
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  </div>
  );
}


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <Card imgsrc='https://upload.wikimedia.org/wikipedia/en/2/22/TVD_cast.jpg' category='A netflix Orignal Series' title='The Vampire Daries' link='https://www.netflix.com/in/' />  
  <Card imgsrc='https://upload.wikimedia.org/wikipedia/en/2/22/TVD_cast.jpg' category='A netflix Orignal Series' title='The Vampire Daries' link='https://www.netflix.com/in/' />  
  <Card imgsrc='https://upload.wikimedia.org/wikipedia/en/2/22/TVD_cast.jpg' category='A netflix Orignal Series' title='The Vampire Daries' link='https://www.netflix.com/in/' />  
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
