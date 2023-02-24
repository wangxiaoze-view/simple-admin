import UserMock from './template/user'

export default {
  'post|/login': (data) => {
    return UserMock.getLoginToken(data.body)
  },

  'get|/getUsers': (option) => {
    console.log(option)
    return {
      status: 200,
      message: 'success',
      data: UserMock.getUsetList(),
    }
  },
}
