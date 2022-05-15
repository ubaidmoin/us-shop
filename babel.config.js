const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      src: './src'
    }
  }
]);

plugins.push('react-native-reanimated/plugin');

module.exports = {
  presets,
  plugins: [...plugins]
};
