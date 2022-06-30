import React from 'react';

const MyButton = ({text = ''}) => {
  return (
    <button type="button" className="myButton">
      {text}
    </button>
  );
};

export default MyButton;
