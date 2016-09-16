var webpack = require('webpack');
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
      // 数组内不能有标点符号
      new webpack.BannerPlugin('This is created by fanbright')
    ]
};
