import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser';
import parserVue from 'vue-eslint-parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', '.idea/**', '.vscode/**', ''],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: {
      vue: eslintPluginVue,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTs,
        ecmaVersion: 2018,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
]
