// 引入包，拼接路径
const path = require('path')
// 自动生成html文件，并且做出处理
const htmlWebpackPlugin = require('html-webpack-plugin')
// 自动删除dist文件夹，防止文件残留
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

/**
 * 配置完成之后
 * 这只是一个打包用的
 *
 * 那么本地调试的时候也是需要ts编译的，就需要tsconfig.json文件了。
 * @type {{output: {path: string, filename: string}, entry: string, module: {rules: [{test: RegExp, use: string, exclude: RegExp}]}}}
 */
module.exports = {
    mode: "development",
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        // 这里使用路径解析，效果等于直接写 './dist'，只是这个能够给出完整的路径。
        path: path.resolve(__dirname, 'dist'),
        // 打包之后文件的名字
        filename: "bundle.js"
    },
    // 指定webpack打包需要使用的模块
    module: {
        // 指定loader加载的规则
        rules: [
            {
                // test 指定规则生效的文件，这是一个正则表达式，表示匹配所有以ts结尾的文件。
                test: /\.ts$/,
                // 怎么处理？使用ts-loader
                use: 'ts-loader',
                // 要排除的文件，或者文件夹，一般排除 node_modules
                // 这里仍然是正则表达式，只要是路径中有 node_modules 就不编译了。
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 自动生成html文件并且引入相关的js脚本
        new htmlWebpackPlugin({
            title: "custom title",
            // 这是模板
            template: "./src/index.html"
        }),
        // 删除之前生成的dist文件夹
        new CleanWebpackPlugin()
    ],
    // 设置引用模块扩展
    resolve: {
        // 只要是 .js 和 .ts 结尾的，都可以作为模块引用。
        // 否则import 会报错的
        extensions: ['.js', '.ts']
    }
}