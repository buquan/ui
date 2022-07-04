import React from 'react';

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
