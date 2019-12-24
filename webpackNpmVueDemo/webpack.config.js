const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : {//配置模块的入口
        index : './src/index.js',
        app:'./src/app.js'
    },
    output : {//配置如何输出最终想要的代码
        //将所有依赖的模块合并输出到一个[name].bundle.js文件
        filename : '[name].bundle.js',//打包输出文件名称 name对应entry里面的index
        path : path.resolve(__dirname,'dist'),//打包输出路径
        publicPath : '/'//此路径下的打包文件可以在浏览器中访问
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
        new CleanWebpackPlugin(),//清理dist文件夹
        new HtmlWebpackPlugin({
            title : 'vue+webpack模块化开发简例',
            filename : 'index.html',
            template : './index.html',
        }),
        new webpack.NamedModulesPlugin(),//方便查看要修补的依赖
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool : 'inline-source-map',//追踪错误和警告,将编译后的代码映射回原始源代码
    devServer : {//配置DevServer
        contentBase : path.join(__dirname, "public"),//用来指定被访问html页面所在目录
        watchContentBase : false,
        compress : true,
        inline:true,//自动刷新网页
        port : 8089,//指定端口
        hot : true,//启动webpack热模块更换的功能 在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
        open : true,//告诉dev-server在服务器启动后打开浏览器
    }

}
