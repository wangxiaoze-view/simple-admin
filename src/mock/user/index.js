import UserMock from './template'

export default {
  'post|/sim-api/login': (data) => {
    return UserMock.getLoginToken(data.body)
  },

  'get|/sim-api/getUsers': (option) => {
    console.log(option)
    return {
      status: 200,
      message: 'success',
      data: UserMock.getUserList(),
    }
  },
}
