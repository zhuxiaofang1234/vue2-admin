
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath:  "/",
  outputDir: "dist",
  lintOnSave: false,
  // webpack配置别名
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src")); //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  devServer: {
    port: 2021,
    host: "0.0.0.0", // ip
    disableHostCheck: true, //是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
    hotOnly: false, // 热更新
    https: false, // https:{type:Boolean}配置前缀
    open: true, //配置自动启动浏览器
    /* 使用代理 */
    // proxy: {
    //   '/api': {
    //     /* 目标代理服务器地址 */
    //     target: 'http://dx.jiace.com:9030',
    //
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  },
};
