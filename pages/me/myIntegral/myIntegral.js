// pages/me/myIntegral/myIntegral.js
const app = getApp()
import {
  INTEGRAL_DETAIL
} from '../../../global/httpConstant.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "integralList": [{
      "useType": "in",
      "integralSource": "recycle",
      "amount": "5"
    }, {
      "useType": "in",
      "integralSource": "recycle",
      "amount": "5"
    }, {
      "useType": "in",

      "integralSource": "recycle",
      "amount": "5"
    }, {
      "useType": "out",
      "integralSource": "mall",
      "amount": "10"
    }, {
      "useType": "in",
      "integralSource": "sign",
      "amount": "5"
    }, {
      "useType": "in",
      "integralSource": "recycle",
      "amount": "5"
    }],
    "currentIndex": 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getIntegral();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  get: function() {

  },

  //获取我的积分
  getIntegral() {

    if (app.globalData.loginBean == null) {
      this.showErrorToast('登录后查看积分详情！');
      return;
    }

    wx.request({

      url: app.globalData.host + INTEGRAL_DETAIL,
      data: {
        tel: app.globalData.loginBean.tel
      },
      success: res => {
        console.log(res.data);

        if (res.data.isOK === false) {
          this.showErrorToast('积分详情获取失败');
          return
        };

        this.setData({
          integralList: res.data.data
        });
      },

      fail: err => {
        console.log(err);
      }
    })
  },

  showErrorToast(value) {
    wx.showToast({
      title: '' + value,
      image: '/images/global/ic_toast_error.png'
    })
  }
})