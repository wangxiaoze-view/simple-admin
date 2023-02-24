/**
 * @description  全局的设置配置文件
 */

module.exports = {
  // 标题
  title: 'simplify-admin',
  // 标题分隔符
  titleDivision: ' | ',
  // logo
  logo: '',
  // 描述
  description:
    'simplify-admin是一款基于element-plus免费开源的中后台模板。使用最新的vue3,vite3,pinia等主流技术进行开发,达到简版模板的开发即用的前端解决方案,可以用来作为一个练手的开源项目',

  // keywords
  keywords: 'vue3, vite3, pinia, element-plus',
  // author
  author: 'WangXiaoZe',
  email: 'wangxiaoze@petalmail.com',
  // 底部 copyright
  copyright: 'WangXiaoZe wangxiaoze@petalmail.com',
  // 显示路由的最大数量
  keepAliveRouterMax: 15,
  // 路由显示的方式, 是否显示哈希
  isHash: false,
  // 系统白名单
  routerWhiteList: ['/login', '/register', '/404'],
  // loading文字
  loadingText: 'sim正在努力加载, 请稍等...',
  // 语言设置
  i18n: 'zh',
  // 哪些环境是需要错误日志的
  errorLogEnv: ['development', 'production', 'preview'],
}
