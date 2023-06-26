module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:prettier/recommended',
        'prettier',
    ],

    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: true },
        ],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
    },
};
