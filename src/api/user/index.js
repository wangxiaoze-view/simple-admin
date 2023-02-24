import SimHttp from '@/utils/http/index'

export default class User {
  static async login(data) {
    return SimHttp.post('/sim-api/login', data)
  }
}
