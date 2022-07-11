import React from 'react';

console.log('MButton inito');
const MButton = ({text = ''}) => {
  return (
    <div>
      <button type="button" className="myButton">
        {text} kkkkdl
      </button>
    </div>
  );
};

export default MButton;
