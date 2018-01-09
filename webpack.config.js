module.exports = {
    // entry: __dirname + "/src/main.js",  //入口文件
    entry: __dirname + "/src/index.js",  //入口文件
    output: {
        path: __dirname + "/dist",  //打包后的文件存放的目录
        filename: "bundle.js" //打包后输出文件的文件名
    },
    /*loader之babel配置*/
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {               //css文件模块化，被整合到bundle.js中
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
};

/*__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录*/