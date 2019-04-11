"use strict";
const { resolve } = require("path");

module.exports = {
  entry: "./client/index.js", // entry point is the index.js in root folder
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  // devtool: "source-maps",
  // node: {
  //   fs: "empty"
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
