const cache = require('./cache')
const set = require('./setting')
const theme = require('./theme')

module.exports = {
  ...cache,
  ...set,
  themeConfig: theme,
}
