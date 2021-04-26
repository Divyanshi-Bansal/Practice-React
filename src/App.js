import logo from './logo.svg';
import './App.css';
import React from 'react';
import netflixSeries from './Projects/netflixSeries';
import Calculator from './Projects/Calculator';

function App() {
  return (
    <div >
      <netflixSeries />
      <Calculator/>
    </div>
  );
}

export default App;
