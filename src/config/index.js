const cli = require('./cli.config')
const cache = require('./cache.config')
const set = require('./set.config')
const theme = require('./theme.config')

module.exports = {
  ...cli,
  ...cache,
  ...set,
  themeConfig: theme,
}
