const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: 'DeviceLayout', // package name
    libraryTarget: 'umd', // output format
  },
  module: {
    rules: [
      {
        test: /\.js$/, // compile all .js files
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', // use babel loader to transpile ES6+ syntax
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // compile all .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // compile all image files
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  externals: {
    react: "commonjs react",
  },
};
