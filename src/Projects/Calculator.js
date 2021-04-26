import React from 'react';
import ReactDOM from 'react-dom';
import Add from '../Practice/Add';
import Division from '../Practice/Division';
import Multiply from '../Practice/Multiply';
import Subtract from '../Practice/Subtract';


function Calculator(){
    return (
        <h1>Addition of two number {Add(1,3)}</h1>,
        <h1>Subtraction of two number {Subtract(5,3)}</h1>,
        <h1>Multiplication of two number {Multiply(9,3)}</h1>,
        <h1>Division of two number {Division(8,2)}</h1>
    );
}

export default Calculator;