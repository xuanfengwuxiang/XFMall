// pages/me/setting/setting.js

const app = getApp()
import {
  LOGOUT
} from '../../../global/httpConstant.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  //退出登录
  logout(event) {

    if (app.globalData.loginBean == null) {
      wx.showToast({
        title: '已经退出登录了！',
      })
      return
    }
    wx.showLoading({
      title: '退出中',
    })
    // const ss = wx.getStorageSync("sessionId");
    wx.request({
      url: app.globalData.host + LOGOUT,
      data: {
        token: app.globalData.loginBean.sessionId

      },
      success: res => {
        wx.hideLoading();

        if (!res.data.isOk) {
          wx.showToast({
            title: '退出登录失败',
            image: "/images/global/ic_toast_error.png"
          })
          return;
        }

        wx.showToast({
          title: '退出成功',
        })
        app.globalData.loginBean = null
        wx.removeStorage({
          key: app.globalData.key,
          success: function(res) {},
        });
        wx.navigateBack({})
      },
      fail: err => {
        wx.hideLoading();
      }
    })
  }
})