module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'prettier', 'prettier/vue'],
  plugins: ['import', 'markdown', 'vue', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue']
      }
    }
  },
  rules: {
    'no-console': 1,
    'no-param-reassign': 0,
    'vue/no-v-html': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error'
  }
}
