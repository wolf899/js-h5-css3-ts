//引入一个包
const path = require('path')
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    // mode: development,
    //指定入口文件
    entry:'./src/index.ts',
    //指定打包文件所在的目录
    output:{
        //指定打包文件目录
        path: path.resolve(__dirname,'dist'),
        //打包后的文件
        filename:'bundle.js',
        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    //指定webpack打包使用模块
    module:{
        //指定加载规则
        rules:[
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //loader执行顺序是从下向上的
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            //设置预定义环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        // targets:{
                                        //     "chrome":"88"
                                        // },
                                        //指定core-js版本
                                        "corejs": {
                                            version: 3
                                        },
                                        //使用crea-js的方式,usage表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //指定要排除的文件
                exclude:/node-moudles/
            },
            //设置less文件预处理
            {
                test:/\.less$/,
                //loader执行顺序是从下向上的
                use:[
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
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
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                // title:'自定义title',
                template:'./src/index.html'
            }
        )
    ],
    //用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}