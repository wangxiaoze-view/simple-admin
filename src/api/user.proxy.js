import instance from '@/utils/http'

export default class UserProxy {
  static async login(data) {
    return instance.post('/login', data)
  }

  static async test() {
    return instance.get('/getUsers')
  }
}
