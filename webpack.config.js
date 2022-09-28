const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  watch: true,
  devServer: {
    static: "./dist",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "eryllus.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
