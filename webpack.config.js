const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // build mode 
    mode : "development",
    // start file 
    entry : {
        main : path.resolve(__dirname, "src/index.ts"),
    },
    // output of the file 
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : 'bundle.js',
        clean : true
    },
    // loaders 
    module : {
        rules : [
            // css loader 
            {
                test : /\.(css|scss)$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // typescript loader
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, 
            // font awesome and image 
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                exclude : /node_modules/,
            }
        ]
    },
    // ts extension 
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // devtool
    devServer: {
        watchFiles : ["src/**/*"],
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open : true,
        hot : true,
    }, 
    // plugins
    plugins : [
        new HtmlWebpackPlugin({
            filename : "index.html",
            template : path.resolve(__dirname, "src/index.html"),
        })
    ]

}