const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : {//配置模块的入口
        index : './src/index.js'
    },
    output : {//配置如何输出最终想要的代码
        //将所有依赖的模块合并输出到一个[name].bundle.js文件
        filename : '[name].bundle.js',//打包输出文件名称 name对应entry里面的index
        path : path.resolve(__dirname,'dist'),//打包输出路径
        publicPath : ''//配置发布到线上资源的URL前缀
    },
    module : {//配置处理模块的规则
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    },
    resolve : {//配置寻找模块的规则
        alias : {
            vue : 'vue/dist/vue.js'
        }
    },
    plugins : [//配置扩展插件
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title : 'vue+webpack模块化开发简例',
            filename : 'index.html',
            template : './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool : 'inline-source-map',
    devServer : {//配置DevServer
        contentBase : './dist',//用来指定被访问html页面所在目录
        watchContentBase : true,
        compress : true,
        inline:true,
        port : 8089,
        hot : true,
        open : true,
    }

}
