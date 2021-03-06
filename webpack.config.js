const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yolo',
      template: 'src/index.html',
    })
  ]
}