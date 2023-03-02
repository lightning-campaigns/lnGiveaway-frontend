/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
const copyWebpackPlugin = require("copy-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [[tailwindcss, autoprefixer]],
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|woff|woff2|tff|eot)$/,
        use: "assets/resource",
        type: "assets/resource",
      },
    ],
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/Assets"),
          to: path.resolve(__dirname, "./dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
}

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new htmlWebpackPlugin({
        title: "LN Campaign",
        filename: `${chunk}.html`,
        chunks: [chunk],
      }),
  )
}
