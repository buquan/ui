import React from 'react';

console.log('mybutton init');
const MyButton = ({text = ''}) => {
  return (
    <div>
      <button type="button" className="myButton">
        {text}
      </button>
    </div>
  );
};

export default MyButton;
