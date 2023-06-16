import React from 'react';

const Operations = props => {
  return (
    <div className='operators-container'>
      <div className='operators-section'>
        <button onClick={() => props.handleOperatorClick('+')}>+</button>
        <button onClick={() => props.handleOperatorClick('-')}>-</button>
        <button onClick={() => props.handleOperatorClick('*')}>*</button>
        <button onClick={() => props.handleOperatorClick('/')}>/</button>
      </div>
      <div className='operators-section'>
        <button onClick={props.handleEqualClick}>=</button>
        <button onClick={props.handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default Operations;
