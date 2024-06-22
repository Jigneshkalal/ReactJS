const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Replace 'public' with your directory name
    },
    compress: true,
    port: 3000,
    hot: true, // Enable hot module replacement if needed
    // Other valid options as per the error message
    allowedHosts: ['localhost'],
    historyApiFallback: true, // Example of enabling history API fallback
    // Add other necessary options as per your project's requirements
  },
  mode: 'development',
};
