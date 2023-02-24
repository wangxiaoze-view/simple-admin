import NoticeMock from './template/index'

export default {
  'get|/sim-api/getNotice': () => {
    return {
      status: 200,
      message: 'success',
      data: NoticeMock.getNoticeList(),
    }
  },
}
