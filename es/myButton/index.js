import React from 'react';

var MyButton = function MyButton(props) {
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      className: 'myButton'
    },
    props.text
  );
};

export default MyButton;
