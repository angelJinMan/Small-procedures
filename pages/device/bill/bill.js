// pages/bill/bill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected1: true,
    selected2: false,
    flag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '账单管理',
      success: function (res) {
        // success
      }
    })
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
    })
  },
  show: function () {
    this.setData({ flag: false })
  },
  // 当遮罩层与conts区域出现时，执行hide,flag变为true，遮罩层与conts区域再次被隐藏
  hide: function () {
    this.setData({ flag: true })
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})