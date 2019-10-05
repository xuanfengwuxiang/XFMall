//首页逻辑层

import {
  getBannerList
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
        image: "/images/home/ic_banner_1.jpg"
      },
      {
        image: "/images/home/ic_banner_2.jpg"
      },
      {
        image: "/images/home/ic_banner_3.jpg"
      }
    ],
    recommends: [{
      "image": "/images/home/ic_classify_tip.png",
      "tittle": "分类指南"
    }, {
      "image": "/images/home/ic_invite_gift.png",
      "tittle": "邀请有礼"
    }, {
      "image": "/images/home/ic_integral_mall.png",
      "tittle": "积分商城"
    }, {
      "image": "/images/home/ic_sign_integral.png",
      "tittle": "签到积分"
    }],
    protection: {
      "currentMoney": "¥100.00",
      "protectionNum": "0",
      "currentIntegral": "5000"
    },
    nearstPlace:{
      nearestPlace: "天润城",
      placeDetail: "10栋",
      distance:"2.0km"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //请求轮播图
    // getBannerList().then(res => {
    //   console.log
    // })
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

  // 流行模块点击事件
  onPopularClick: function() {
    wx.navigateTo({
      url: './collectToHome/collectToHome',
    })
  }

})