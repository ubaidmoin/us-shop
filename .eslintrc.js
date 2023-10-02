module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'babel',
        trailingComma: 'none',
        arrowParens: 'avoid',
        'no-inline-styles': false
      }
    ],
    'comma-dangle': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0
  }
};
