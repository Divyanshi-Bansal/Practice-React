import React from 'react'; //we using this module just because of we use jsx expression.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './Practice/Heading';
import * as app1 from './Practice/App';

const wishColor = {
  color:"pink"
};

const time = new Date().getHours();

var wish = "";
if(time >=4 && time < 12){
  wish = "Good Morning";
  wishColor.color = 'green';
}
else if(time >=12 && time <= 16){
  wish = "Good Afternoon";
  wishColor.color = 'yellow';
}
else if(time >= 17 && time <= 19){
  wish = "Good Evening";
  wishColor.color = 'red';
}
else{
  wish = "Good night";
  wishColor.color = 'black';
}


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <Heading />
    <h1 className="heading">Hello Mam ,<span style={wishColor}>{`${wish}`}</span></h1>
    <h1>{app1.default}</h1>
    <h1>{app1.subject}</h1>
    <h1>{app1.medium +" , "+  app1.another}</h1>
    
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
