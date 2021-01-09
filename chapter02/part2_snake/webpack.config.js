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
    // mode: "development",
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        // 这里使用路径解析，效果等于直接写 './dist'，只是这个能够给出完整的路径。
        path: path.resolve(__dirname, 'dist'),
        // 打包之后文件的名字
        filename: "bundle.js",
        // 告诉webpack不使用箭头函数，否则ie11不兼容。
        environment: {
            arrowFunction: false
        }
    },
    // 指定webpack打包需要使用的模块
    module: {
        // 指定loader加载的规则
        rules: [
            {
                // test 指定规则生效的文件，这是一个正则表达式，表示匹配所有以ts结尾的文件。
                test: /\.ts$/,
                // 怎么处理？使用ts-loader
                // 执行顺序是从后往前执行，先用ts-loader转成js，再用babel-loader转成旧版本浏览器能使用的代码。
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境，也就是假设代码在哪些浏览器中运行
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 浏览器中的版本
                                        targets: {
                                            // 兼容到88版本的
                                            "chrome": "58",
                                            // 这个基本上秒杀所有老版本的浏览器。
                                            "ie": "11"
                                        },
                                        // 使用的core-js的版本，只写版本号最前面的数字。
                                        // 比如在ie中使用Promise
                                        "corejs": "3",
                                        // 使用core-js的方法 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件，或者文件夹，一般排除 node_modules
                // 这里仍然是正则表达式，只要是路径中有 node_modules 就不编译了。
                exclude: /node_modules/
            },
            {
                // 设置less文件的处理
                test: /\.less$/,
                // 注意这里的执行顺序是从下往上
                use: [
                    "style-loader",
                    "css-loader",
                    // 对旧版本浏览器做兼容，例如加上前缀等等。
                    // 使用 postcss-loader
                    // 下面的格式适用于大多数场景。
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browser: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 设置引用模块扩展
    resolve: {
        // 只要是 .js 和 .ts 结尾的，都可以作为模块引用。
        // 否则import 会报错的
        extensions: ['.js', '.ts'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
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
}