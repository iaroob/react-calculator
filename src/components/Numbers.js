import React from 'react';

const Numbers = props => {
  return (
    <div className='numbers-container'>
      <div className='numbers-section'>
        <button onClick={() => props.handleNumberClick('1')}>1</button>
        <button onClick={() => props.handleNumberClick('2')}>2</button>
        <button onClick={() => props.handleNumberClick('3')}>3</button>
      </div>
      <div className='numbers-section'>
        <button onClick={() => props.handleNumberClick('4')}>4</button>
        <button onClick={() => props.handleNumberClick('5')}>5</button>
        <button onClick={() => props.handleNumberClick('6')}>6</button>
      </div>
      <div className='numbers-section'>
        <button onClick={() => props.handleNumberClick('7')}>7</button>
        <button onClick={() => props.handleNumberClick('8')}>8</button>
        <button onClick={() => props.handleNumberClick('9')}>9</button>
      </div>
      <div className='numbers-section'>
      <button onClick={() => props.handleNumberClick('0')}>0</button>
      </div> 
    </div>
  );
};

export default Numbers;