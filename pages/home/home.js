//首页逻辑层
const app = getApp();
import {
  getBannerList
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
        url: "/images/home/ic_banner_1.jpg"
      },
      {
        url: "/images/home/ic_banner_2.jpg"
      },
      {
        url: "/images/home/ic_banner_3.jpg"
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
    loginBean: null,
    nearstPlace: {
      nearestPlace: "天润城",
      placeDetail: "10栋",
      distance: "2.0km"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //请求轮播图
    this.getBanners();
    //监听器存到globalData
    app.globalData.homeListener = this.homeListener;
  },

/**
 * 监听loginBean
 */
  homeListener(loginBean) {
    this.setData({
      loginBean: app.globalData.loginBean
    })
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
    this.setData({
      loginBean: app.globalData.loginBean
    })
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

  // 获取轮播图
  getBanners() {
    wx.request({
      url: app.globalData.host + '/home/getBanners',
      data: {
        type: 'home'
      },
      method: 'GET',
      success: res => {
        if (!res.data.isOk) {
          return;
        };

        console.log(res.data.data);
        this.setData({
          banners: res.data.data
        });

      },
      fail: err => {

        wx.showToast({
          title: '' + JSON.stringify(err),
          image: '/images/global/ic_toast_error.png'
        })
      }
    })
  },

  // 流行模块点击事件
  onPopularClick: function() {
    wx.navigateTo({
      url: './collectToHome/collectToHome',
    })
  }

})