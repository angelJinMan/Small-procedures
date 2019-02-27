// pages/device/member/member-details/member-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected1: true,
    selected2: false,
    selected3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '成员详情',
      success: function (res) {
        // success
      }
    })
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false,
      selected3: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: true
    })
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

  },
  //跳转到添加密码
  addPassword: function () {
    wx.navigateTo({
      url: '../../add-password/add-password',
    })
  },
  //跳转到添加指纹
  addFingerprint:function(){
    wx.navigateTo({
      url: '../../add-fingerprint/add-fingerprint',
    })
  },
  //跳转到添加卡片
  addCard: function () {
    wx.navigateTo({
      url: '../../add-cord/add-cord',
    })
  }
})