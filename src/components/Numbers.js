import React from 'react';

const Numbers = props => {
  return (
    <div>
      <button onClick={() => props.handleNumberClick('1')}>1</button>
      <button onClick={() => props.handleNumberClick('2')}>2</button>
      <button onClick={() => props.handleNumberClick('3')}>3</button>
      <button onClick={() => props.handleNumberClick('4')}>4</button>
      <button onClick={() => props.handleNumberClick('5')}>5</button>
      <button onClick={() => props.handleNumberClick('6')}>6</button>
      <button onClick={() => props.handleNumberClick('7')}>7</button>
      <button onClick={() => props.handleNumberClick('8')}>8</button>
      <button onClick={() => props.handleNumberClick('9')}>9</button>
      <button onClick={() => props.handleNumberClick('0')}>0</button>
    </div>
  );
};

export default Numbers;