import React, { useState } from 'react';
import Numbers from './components/Numbers';
import Operations from './components/Operations';
import Result from './components/Result';
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
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div>
        <input type="text" value={displayValue} disabled />
      </div>
      <Numbers 
      handleNumberClick={handleNumberClick} 
      />
      <Operations
        handleOperatorClick={handleOperatorClick}
        handleEqualClick={handleEqualClick}
        handleClearClick={handleClearClick}
      />
      <Result 
      result={result} 
      />
    </div>
  );
};

export default App;