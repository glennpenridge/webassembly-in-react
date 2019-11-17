const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // Bootstrap is used for the asynchronous loading to get the WASM to load properly.
  entry: "./src/bootstrap.js",
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(["index.html"]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bootstrap.js",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
