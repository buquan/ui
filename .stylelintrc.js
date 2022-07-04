// stylelint：http://stylelint.cn/user-guide/rules/
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order'
  ],
  rules: {
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-colon-notation': null,
    'color-function-notation': 'legacy', // rgb禁止计算
    'alpha-value-notation': 'number',
    'number-leading-zero': 'never',
    'at-rule-empty-line-before': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': null,
    'color-hex-case': null,
    'color-no-invalid-hex': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'unit-no-unknown': null,
    'no-descending-specificity': null,
    'selector-type-no-unknown': null // 如果是uni-app允许page等
  }
};
