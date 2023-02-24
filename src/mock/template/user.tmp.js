// 所及生成用户列表
import Mock from 'mockjs'

export default class UserMock {
  // 模拟登陆
  static getLoginToken(data) {
    const { userName, password } = JSON.parse(data)
    if (userName === 'admin' && password === '123') {
      const name = Mock.mock('@cname')

      return {
        status: 200,
        message: '验证成功',
        data: Mock.mock({
          id: '@id',
          token: '@string(15)',
          nickName: '@last',
          email: '@email',
          phone: /^1[34578]\d{9}$/,
          name,
          isMale: '@boolean',
          author: Mock.Random.image(
            '200x100',
            '#756bef',
            '#ffffff',
            name.substring(0, 1)
          ),
        }),
      }
    }
    return {
      status: 206,
      message: '用户名或者密码不正确!',
      data: null,
    }
  }

  // 获取用户列表
  static getUserList() {
    return Mock.mock({
      'list|10': [
        {
          id: '@id', // 随机id
          name: '@cname', // 随机名称
          nickName: '@last', // 随机昵称
          phone: /^1[34578]\d{9}$/, // 随机电话号码
          'age|11-99': 1, // 年龄
          address: '@county(true)', // 随机地址
          email: '@email', // 随机邮箱
          isMale: '@boolean', // 随机性别
          createTime: '@datetime', // 创建时间
        },
      ],
    })
  }
}
