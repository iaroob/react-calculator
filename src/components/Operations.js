import React from 'react';

const Operations = props => {
  return (
    <div>
      <button onClick={() => props.handleOperatorClick('+')}>+</button>
      <button onClick={() => props.handleOperatorClick('-')}>-</button>
      <button onClick={() => props.handleOperatorClick('*')}>*</button>
      <button onClick={() => props.handleOperatorClick('/')}>/</button>
      <button onClick={props.handleEqualClick}>=</button>
      <button onClick={props.handleClearClick}>Clear</button>
    </div>
  );
};

export default Operations;
