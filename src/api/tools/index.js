import SimHttp from '@/utils/http/index'

export default class Tools {
  static async getDmImage(data) {
    return SimHttp.get('/apiImage', data)
  }
}
