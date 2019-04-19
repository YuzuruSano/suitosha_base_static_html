const merge = require("webpack-merge"); // webpack-merge
const common = require("./webpack.common.js"); // 汎用設定をインポート
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const globImporter = require("node-sass-glob-importer");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminJpegTran = require("imagemin-jpegtran");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const supported = ["IE 11", "last 2 versions"];

const config = merge(common, {
  output: {
    publicPath: "/"
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new WebpackNotifierPlugin({
      title: "Success compiled!",
      contentImage: path.join(__dirname, "dev/js/icons/shibasaki_ko.jpg"),
      alwaysNotify: true
    })
  ],
  devServer: {
    open: true,
    compress: true,
    inline: true,
    hot: true,
    host: "localhost",
    disableHostCheck: true
  }
});

for (const key in config.entry) {
  if (config.entry.hasOwnProperty(key)) {
    config.entry[key].unshift(
      "webpack-dev-server/client?http://localhost:8080/"
    );
    config.entry[key].unshift("webpack/hot/only-dev-server");
  }
}

config.module.rules.push({
  test: /\.scss$/,
  exclude: /(node_modules)/,
  use: [
    "css-hot-loader",
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
        url: false
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        plugins: [
          require("autoprefixer")({
            browsers: supported
          }),
          require("cssnano"),
          require("postcss-assets")({
            loadPaths: ["dev/images/"],
            relative: "./dev/css"
          })
        ]
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        importer: globImporter()
      }
    }
  ]
});

module.exports = config;