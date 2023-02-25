/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
const copyWebpackPlugin = require("copy-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve(__dirname, "./src/app.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/Assets/manifest.json"),
          to: path.resolve(__dirname, "./dist"),
        },
        {
          from: path.resolve(__dirname, "./src/Assets/icons"),
          to: path.resolve(__dirname, "./dist"),
        },
      ],
    }),
    new htmlWebpackPlugin({
      title: "LN Campaign",
      filename: "app.html",
      chunks: ["popup"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
}
