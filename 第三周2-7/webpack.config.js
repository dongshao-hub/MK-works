const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// console.log(path.resolve())
// console.log(path.join(_dirname, './dist'))

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    // path.join() 去拼接路径
    // __dirname 当前文件的绝对路径
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
  },
  // 压缩js css
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      // {
      //   // sass-loader node-sass两个依赖都需要安装
      //   test: /\.(scss|sass)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      // 打包并从js中抽离css
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // 打包js
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // 打包图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: '[name]-[hash:4].[ext]',
              outputpath: 'images',
            },
          },
        ],
      },
      // 打包字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:4].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    // 自动生成html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'images'),
        to: 'images',
      },
    ]),
    // 从bundle.js中 抽离css
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}

module.exports = config
