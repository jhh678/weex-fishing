// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    weex: true,
    Vue: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'comma-dangle': 1,
    'eol-last': 0,
    'spaced-comment': 1,
    'keyword-spacing': 0,
    'space-in-parens': 1,
    'eqeqeq': 1,
    'indent': 0,
    'semi': 1,
    'func-call-spacing': 0,
    'no-unexpected-multiline': 0,
    'no-useless-escape': 0,
    'one-var': 0,
    'no-multiple-empty-lines': 0
  }
}
