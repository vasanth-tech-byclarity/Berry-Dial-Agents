import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Added TypeScript extensions
    languageOptions: {
      ecmaVersion: 2022, // Updated to latest stable version
      globals: {
        ...globals.browser,
        ...globals.node // Added Node.js globals
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { 
          jsx: true,
          impliedStrict: true // Added strict mode
        },
        sourceType: 'module',
      },
    },
    settings: { 
      react: { 
        version: 'detect' // Changed to auto-detect React version
      } 
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': ['warn', { enforceDynamicLinks: 'always' }], // Changed to warning with config
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'error', // Added prop types validation
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
  },
]
