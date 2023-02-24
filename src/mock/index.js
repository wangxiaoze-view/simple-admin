const Mock = require('mockjs')

Mock.setup({
  timeout: '200-600',
})

let configArr = []

const mockFiles = require.context('.', true, /\.js$/)

mockFiles.keys().forEach((key) => {
  configArr = configArr.concat(mockFiles(key).default)
})

// 注册所有的Mock服务
configArr.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|')
    Mock.mock(new RegExp(`^${protocol[1]}`), protocol[0], target)
  }
})
