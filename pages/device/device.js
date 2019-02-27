// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设备',
      success: function (res) {
        // success
      }
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
  /**
   * 跳转成员
   */
  viewMember:function(){
    wx.navigateTo({
      url: '../device/member/member',
    })
  },
  //打开新增提示
  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  //关闭新增提示
    hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },
  //添加指纹
  addFingerprint:function(){
    wx.navigateTo({
      url: '../device/add-fingerprint/add-fingerprint',
    })
  },
  //添加密码
  addPassword: function () {
    wx.navigateTo({
      url: '../device/add-password/add-password',
    })
  },
  //添加卡片
  addCord: function () {
    wx.navigateTo({
      url: '../device/add-cord/add-cord',
    })
  },
  //添加时效密码
  addTemporary: function () {
    wx.navigateTo({
      url: '../device/add-temporary-password/add-temporary-password',
    })
  },
  //跳转到账单
  showBill:function(){
    wx.navigateTo({
      url: '../device/bill/bill',
    })
  },
  //跳转到消息记录
  showMessage:function(){
    wx.navigateTo({
      url: '../device/message/message',
    })
  },
  //跳转到开锁管理
  showLocking:function(){
    wx.navigateTo({
      url: '../device/unlocking-management/unlocking-management',
    })
  },
  //跳转到报修界面
  showRepair:function(){
    wx.navigateTo({
      url: '../device/repair/repair',
    })
  },
  //打开续租提示
  showRules: function () {
    this.setData({
      isRuleTrues: true
    }),
    setTimeout(function () {
      this.setData({
        isRuleTrues: false
      })
    }.bind(this), 1000)
  },
})