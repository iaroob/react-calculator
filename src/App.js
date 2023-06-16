import React, { useState } from 'react';
import Numbers from './components/Numbers';
import Operations from './components/Operations';
import * as math from 'mathjs';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue(displayValue + operator);
  };

  const handleEqualClick = () => {
    try {
      const calculatedResult = math.evaluate(displayValue);
      setResult(calculatedResult.toString());
      setDisplayValue(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
    <div className="wrapper">
      <div>
      <h1>Simple Calculator</h1>
      <div className='display-wrapper'>
        <input type="text" value={displayValue} disabled />
      </div>
      <div className='number-wrapper'>
        <Numbers 
        handleNumberClick={handleNumberClick} 
        />
      </div>
      <div className='operations-wrapper'>
        <Operations
          handleOperatorClick={handleOperatorClick}
          handleEqualClick={handleEqualClick}
          handleClearClick={handleClearClick}
        />
      </div>
      </div>
    </div>
  );
};

export default App;