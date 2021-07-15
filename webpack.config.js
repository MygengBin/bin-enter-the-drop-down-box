const path = require('path');
const webpack = require('webpack');
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader", // 用babel-loader处理
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "targets": {
                                    "browsers": ["> 1%", "last 2 versions"]
                                }
                            }]
                        ]
                    }
                }
            }
        ],
    },
    plugins:[
        new webpack.BannerPlugin({
            banner:()=>{
                const newData = new Date();
                return `
耿彬
${newData.getFullYear()}年${newData.getMonth()+1}月${newData.getDate()}日 ${newData.getHours()}点${newData.getMinutes()}分
输入下拉框        
                    `
            },
            entryOnly:false,
        }),
        new uglifyJsWebpackPlugin(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'  
        })
    ],
    devtool: "inline-source-map",
    devServer:{
        host:'0.0.0.0',
        port:8080
    },
}