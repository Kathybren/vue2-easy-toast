var path = require("path");
module.exports = {
  entry: __dirname + "/src/lib/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "vue2-easy-toast.js",
    libraryTarget: 'umd',
    library:["vueToasts"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
  // module: {
  //     rules:[
  //         {
  //             test: /\.vue$/,
  //             loader: 'vue-loader',
  //             exclude:/node_modules/,
  //             options: {
  //                 loaders: {
  //                     scss:'style-loader!css-loader!sass-loader'
  //                 }
  //             }
  //         },
  //         {
  //             test: /\.js$/,
  //             loader: 'babel-loader',
  //             exclude:/node_modules/
  //         }
  //     ]
  // }
};
