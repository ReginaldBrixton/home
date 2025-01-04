import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  javascript: true,
  vue: true,
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
  },
})
