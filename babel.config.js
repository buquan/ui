/* eslint-disable */

const babel_env = process.env.BABEL_ENV;

let modules = false;
let useESModules = false;
switch (babel_env) {
  case 'commonjs':
    modules = 'cjs';
    useESModules = false;
    break;
  case 'es':
    modules = false;
    useESModules = true;
    break;
  case 'umd':
    modules = false;
    useESModules = false;
    break;
}
/* eslint-enable */

// useBuiltIns: true 如果为 true 且引入了polyfill
// (import "babel-polyfill"）的话，插件 会根据 targets 的配置，重写 import "babel-polyfill" ，
// 只引入对应环境必须的 "babel-polyfill" 的子模块，减少了多余的代码引入
const presets = [['@babel/preset-env'], '@babel/preset-react'];
const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  ['@babel/plugin-transform-runtime', {useESModules, loose: true}],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ]
];

module.exports = {presets, plugins};
