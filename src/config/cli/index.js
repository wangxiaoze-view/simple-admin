/**
 * @description 全局的缓存设置
 * @author 王小泽
 */

function env(envArr = ['production', 'test', 'pre']) {
  return envArr.includes(process.env.NODE_ENV)
}
export default {
  //  是否兼容ie
  transpileDependencies: true,
  //  公共路径
  publicPath: './',
  //  打包的目录
  outputDir: 'dist',
  //  保存是是否lint操作
  lintOnSave: true,
  //  静态资源打包目录
  assetsDir: 'static',
  //  是否生成map文件
  productionSourceMap: false,
  //  pwa
  pwa: {},
  //  devServer
  devServer: {
    // 局域网和本地访问
    host: '0.0.0.0',
    port: 17501,
    hot: true,
    open: false,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions: {},
  // 配置 cdn, 拆分模块
  cdn: {
    css: [],
    js: [
      'http://assets.wangxiaoze.wang/vue/vue-3-2-13.min.js',
      'http://assets.wangxiaoze.wang/vue/vue-router.min.js',
      'http://assets.wangxiaoze.wang/vue/axios.min.js',
    ],
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
    },
  },
  productionGzipExtensions: ['js', 'css', 'html', 'json', 'ts', 'png', 'jpg'],
  //  什么情况下才会显示cdn
  isProcess: env(),
  //  是否为生产环境
  isProduction: env(['production']),
}
