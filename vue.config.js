module.exports = {
    devServer: {
        port: 10001  , // 启动端口
        headers: {
            "Access-Control-Allow-Origin": '*' // 配置跨域
        }
    }, 
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd'
        }
    }
}