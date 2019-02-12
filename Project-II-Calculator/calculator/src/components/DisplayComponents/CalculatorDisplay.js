import React from 'react';
import './Display.css';

const CalculatorDisplay = props =>{
    return(
        <p className={props.calculatorDisplay}>{props.text}</p>
        )
        }
  
  export default CalculatorDisplay;