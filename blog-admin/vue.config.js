module.exports = {
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                // 要代理的地址
                // target: 'https://czjdream.com:8089/',
                target: 'http://localhost:8082/',
                ws:true,
                //允许跨域
                changeOrigin: true,
                // 如果是https接口的话，需要配置这个参数
                secure: true,
                //重写接口
                pathRewrite: {
                    // '^/api': 'https://czjdream.com:8089/'
                    '^/api': 'http://localhost:8082/'
                },
            }
        }
    }
}