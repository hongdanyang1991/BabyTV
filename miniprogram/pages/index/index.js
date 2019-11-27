Page({
  data: {
    PageCur: 'guide'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '微信精选视频',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})