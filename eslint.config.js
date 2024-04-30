// @ts-check
import createEslintConfig from 'talljack-eslint-config'

export default createEslintConfig({
  typescript: true,
  formatters: true,
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
})
