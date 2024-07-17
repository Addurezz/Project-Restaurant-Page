const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/modules/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets"
                }
              },
            ],
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
        ],
      },
    devServer: {
        static: path.resolve(__dirname,"dist")
    }
      
};