// pages/my/my.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '我的',
      success: function (res) {
        // success
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 跳转到安装说明页
   */
  showInstallation:function(){
    wx.navigateTo({
      url: '../my/installation-instructions/installation-instructions',
    })
  },
  /**
   * 跳转到使用说明
   */
  showInstructions:function(){
    wx.navigateTo({
      url: '../my/instructions/instructions',
    })
  },
  /**
   * 跳转到绑定手机号
   */
  showBindPhone: function () {
    wx.navigateTo({
      url: '../my/bind-cellphone/bind-cellphone',
    })
  },
  /**
   * 跳转到关于我们
   */
  showAboutUs: function () {
    wx.navigateTo({
      url: '../my/about-us/about-us',
    })
  },
})