'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'MyButton', {
  enumerable: true,
  get: function get() {
    return _myButton['default'];
  }
});
exports['default'] = void 0;
Object.defineProperty(exports, 'sum', {
  enumerable: true,
  get: function get() {
    return _sum['default'];
  }
});

var _myButton = _interopRequireDefault(require('./myButton'));

var _sum = _interopRequireDefault(require('./utils/sum'));

var _default = {
  MyButton: _myButton['default'],
  sum: _sum['default']
};
exports['default'] = _default;
