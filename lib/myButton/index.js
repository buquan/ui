'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var MyButton = function MyButton(props) {
  return /*#__PURE__*/ _react['default'].createElement(
    'button',
    {
      className: 'myButton'
    },
    props.text
  );
};

var _default = MyButton;
exports['default'] = _default;
