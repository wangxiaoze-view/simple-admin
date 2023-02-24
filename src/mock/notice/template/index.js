// 所及生成用户列表
import Mock from 'mockjs'

export default class NoticeMock {
  // 获取公告列表
  static getNoticeList() {
    return Mock.mock({
      'list|5': [
        {
          id: '@id', // 随机id
          title: '@title(1, 2)', // 随机标题
          nickName: '@last', // 随机昵称
          desc: '@cparagraph(1, 2)', // 随机内容
          email: '@email', // 随机邮箱
          createTime: '@datetime', // 创建时间
          author: Mock.Random.image('200x100', '#756bef', '#ffffff'),
        },
      ],
    })
  }
}
