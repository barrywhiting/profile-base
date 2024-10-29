const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { dirname } = require('node:path');
// const { fileURLToPath } = require('node:url');
    
// const __dirname = dirname(fileURLToPath(import.meta.url));

module.exports = {
 entry: {
  main: './src/pages/home/index.tsx'
},
 mode: 'development',
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'bundle.js',
   publicPath: '/dist/',
   sourceMapFilename: '[file].map',
 },
 infrastructureLogging: {
   level: 'log',
 },
 target: ['web', 'es5'], 
 resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
  static: {
    directory: path.join(__dirname, "./public")
  },
  client: {
    logging: 'verbose',
  },
  port: 3000,
  historyApiFallback: {
    disableDotRule: true,
  },
  open: true,
  server: 'http',
  hot: true,
},
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.js|jsx|ts|tsx?$/i,
       exclude: /node-modules/,
       use: {
         loader: 'babel-loader',
         options: {
            presets: ["@babel/preset-env", ["@babel/preset-react", {targets: {node: 'current'}}],  "@babel/preset-typescript"]
         }
       }
     },
     {
       test: /\.css$/i,
       use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        },
        {
          loader: '@teamsupercell/typings-for-css-modules-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true,
            sourceMap: true,
          }
        },
      ]
     },
     {
        test: /\.scss$/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        },
        {
          loader: "@teamsupercell/typings-for-css-modules-loader",
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
        }]
     },
     {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    }
   ]
 },
 plugins: [
    new HtmlWebpackPlugin({ 
      inject: "body",
      scriptLoading: "defer",
      showErrors: true,
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      manifest: path.resolve(__dirname, "public/manifest.json"),
      publicPath: '/'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      linkType: 'text/css',
      ignoreOrder: false,
    })
  ],
}