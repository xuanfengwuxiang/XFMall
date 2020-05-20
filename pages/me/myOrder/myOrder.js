//我的订单 myOrder.js

const app = getApp();
import {
  MY_ORDERS
} from '../../../global/httpConstant.js';
const HOME = 'home';
const STORE = 'store';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "currentIndex": 0,
    "tittles": ["门店回收", "上门回收"],
    "orders": null,
    "store": [],
    "home": []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMyOrders();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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

  //请求我的订单接口
  getMyOrders: function() {

    //登录情况判断
    if (app.globalData.loginBean == null) {

      wx.showToast({
        title: '请先登录',
        image: '/images/global/ic_toast_error.png'
      })
      return;
    }

    //请求
    wx.showLoading({
      title: '',
    })
    wx.request({
      url: app.globalData.host + MY_ORDERS,
      data: {
        tel: app.globalData.loginBean.tel,
      },
      success: res => {
        wx.hideLoading();

        if (res.statusCode !== 200 || !res.data.isOk) {
          return;
        }
        this.classifyOrders(res.data.data);
        console.log(res.data.data);
      },
      fail: error => {
        wx.hideLoading();

      }
    })

  },

  //我的订单分类成：上门回收，门店回收
  classifyOrders(json) {
    if (json == null) {
      return;
    }

    var store = [];
    var home = [];

    for (var i = 0; i < json.length; i++) {

      var bean = json[i];
      if (STORE === bean[0].recycleType) {
        store.push(bean);
      } else {
        home.push(bean);
      }
    }

    this.setData({
      orders: store,
      store: store,
      home: home
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 订单类型点击事件
  onTypeClick: function(event) {

    var index = event.currentTarget.dataset.index;

    this.setData({
      currentIndex: index,
    });

    switch (index) {
      case 0:
        this.setData({
          orders: this.data.store
        });
        break;

      case 1:
        this.setData({
          orders: this.data.home
        });
        break;
      default:

        break;

    }

  },
  // 订单列表item点击事件
  onOrderItemClick: function(event) {

    var index = event.currentTarget.dataset.index;
    var productList = this.data.orders[index];
    var jsonString = JSON.stringify(productList);
    wx.navigateTo({
      url: 'orderDetail/orderDetail?productList=' + jsonString,
    })
  }

})