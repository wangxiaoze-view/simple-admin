// import cacheConfig from './cache'
// import cliConfig from './cli'
// import setConfig from './setting'
// import themeConfig from './theme'
//
// export { cacheConfig, cliConfig, setConfig, themeConfig }

const cli = require('./cli')
const cache = require('./cache')
const set = require('./setting')
const theme = require('./theme')

module.exports = {
  ...cli,
  ...cache,
  ...set,
  themeConfig: theme,
}
