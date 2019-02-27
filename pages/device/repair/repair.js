// pages/repair/repair.js
var dateTimePicker = require('../../../utils/dateTimePicker');

Page({
  data: {
    date: '2019-01-01',
    time1: '09:00',
    time2: '16:00',
    src: '',
    questions:[
      { "data_name": "打不开",  "state": 0 },
      { "data_name": "漏电", "state": 0 },
      { "data_name": "异常响动", "state": 0 },
      { "data_name": "网关离线维修", "state": 0 },
      { "data_name": "电量不足、没电", "state": 0 },
      { "data_name": "无法设置、修改密码", "state": 0 },
      { "data_name": "网关丢失", "state": 0 }
    ]
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
    wx.setNavigationBarTitle({
      title: '报修预约',
      success: function (res) {
        // success
      }
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange1(e) {
    this.setData({
      time1: e.detail.value
    })
  },
  bindTimeChange2(e) {
    this.setData({
      time2: e.detail.value
    })
  },
  takePhoto: function () {
    var _this = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        _this.setData({
          src: res.tempFilePaths
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }  
    } ) 
    // var that = this;
    // wx.chooseImage({
    //   count: 1,
    //   success: function (res) {
    //     // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
    //     app.startOperating("保存中")
    //     var filePath = res.tempFilePaths[0];
    //     var session_key = wx.getStorageSync('session_key');
    //     // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
    //     // wx.uploadFile({
    //     //   url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key,
    //     //   filePath: filePath,
    //     //   name: 'file',
    //     //   success: function (res) {
    //     //     app.stopOperating();
    //     //     // 下面的处理其实是跟我自己的业务逻辑有关
    //     //     var data = JSON.parse(res.data);
    //     //     if (parseInt(data.status) === 1) {
    //     //       app.showSuccess('文件保存成功');
    //     //     } else {
    //     //       app.showError("文件保存失败");
    //     //     }
    //     //   }
    //     // })
    //   },
    //   fail: function (error) {
    //     console.error("调用本地相册文件时出错")
    //     console.warn(error)
    //   },
    //   complete: function () {

    //   }
    // })
  },
  //选择问题的选中方法
  selection: function (e) {
    var index = e.currentTarget.dataset.key;
    if (this.data.questions[index].state == 1) {
      this.data.questions[index].state = 0;     
    } else if (this.data.questions[index].state == 0) {
      this.data.questions[index].state = 1;      
    }
     this.setData({
       questions: this.data.questions,
      });  
  }
})
