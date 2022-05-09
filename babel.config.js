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

module.exports = {
  presets,
  plugins: [...plugins]
};
