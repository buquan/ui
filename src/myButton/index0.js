import React from 'react';
import {Button} from 'antd';
import 'antd/es/button/style/index';
import headerPng from './assets/assets/22.png';

const MyButton = ({text = ''}) => {
  return (
    <div>
      <button type="button" className="myButton">
        {text}
        1234567890
      </button>
      <img src={headerPng} alt="img" />
      <div className="bg" />
      <Button type="primary">antd</Button>
    </div>
  );
};

export default MyButton;
