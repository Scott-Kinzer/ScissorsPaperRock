const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  
  mode: 'development',
  entry: ['./js/script.js'
,
  './scss/style.scss',
  './scss/buttons.scss'

  ],

  output: {
    path: path.resolve('./js/'),
    filename: 'app.js'
  },

  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]


    },

    
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
    }
  ],   
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },



  

  plugins: [
    new MiniCssExtractPlugin(
               {
                   filename: "/../css/[name].css"
               }
           ),
      ],

     
};


