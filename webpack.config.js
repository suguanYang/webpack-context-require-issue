const path = require('path');
const ExternalResolvePlugin = require('./external.plugin.js');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    plugins: [
      new ExternalResolvePlugin(),
    ],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
