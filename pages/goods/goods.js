// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [{
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }, {
      "pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591109167&di=a1c73b0b8026d1ac8e68599c0c95fab4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170201%2F6b83011bcefd404f8a802d490d88209e_th.jpg",
      "cmName": "荔枝",
      "repo": "100",
      "saleNum": "22",
      "unit": "颗"
    }],
    "groups": ["所有分组", "水果", "生肉", "零食"],
    "isShowPop": false
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


  // 点击加号
  onClickPlus: function() {
    wx.showToast({
      title: '添加商品',
    })
  },

  //点击popwindow外侧
  onClickMask: function() {
    this.setData({
      isShowPop: false
    })
  },


  onClickGroup: function() {
    this.setData({
      isShowPop: true
    })
  }
})