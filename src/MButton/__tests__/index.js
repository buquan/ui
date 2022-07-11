import React from 'react';
import ReactDom, {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import MyButton from '../index';

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('MyButton-测试', () => {
  test('MyButton -> render', () => {
    act(() => {
      ReactDom.render(<MyButton />, container);
    });
    expect(document.querySelectorAll('.myButton').length).toEqual(1);
  });
  test('MyButton -> props', () => {
    const text = '123456';
    act(() => {
      ReactDom.render(<MyButton text={text} />, container);
    });
    expect(document.querySelector('.myButton').textContent).toEqual(text);
  });
});
