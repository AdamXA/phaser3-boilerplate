const merge = require("webpack-merge");
const dev = require("./webpack.dev");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(dev, {
  mode: "production",
  output: {
    filename: "bundle.min.js"
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
});