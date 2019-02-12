import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'



const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay calculatorDisplay="calc" text="0"/>
      <div className="flex-container">
      <ActionButton actionButton="action" text="Clear"/>
      <NumberButton numberButton="num" text="÷"/>
      </div>
      <div className="flex-container">
      <NumberButton numberButton="num" text="7"/>
      <NumberButton numberButton="num" text="8"/>
      <NumberButton numberButton="num" text="9"/>
      <NumberButton numberButton="ops" text="X"/>
      </div>
      <div className="flex-container">
      <NumberButton numberButton="num" text="4"/>
      <NumberButton numberButton="num" text="5"/>
      <NumberButton numberButton="num" text="6"/>
      <NumberButton numberButton="ops" text="-"/>
      </div>
      <div className="flex-container">
      <NumberButton numberButton="num" text="1"/>
      <NumberButton numberButton="num" text="2"/>
      <NumberButton numberButton="num" text="3"/>
      <NumberButton numberButton="ops" text="+"/>
      </div>
      <div className="flex-container">
      <ActionButton actionButton="action" text="0"/>
      <NumberButton numberButton="ops" text="÷"/>
      </div>
    </div>
  );
};

export default App;
