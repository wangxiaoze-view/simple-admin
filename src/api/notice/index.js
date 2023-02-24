import SimHttp from '@/utils/http/index'

export default class Notice {
  static async getList() {
    return SimHttp.get('/sim-api/getNotice', {})
  }
}
