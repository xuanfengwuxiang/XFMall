// pages/me/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "currentIndex": 0,
    "tittles": ["门店回收", "上门回收"],
    "orders": [{
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "http://img.weiye.me/zcimgdir/thumb/t_14966428515934f523ae28a.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "斤",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }, {
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "http://img.weiye.me/zcimgdir/thumb/t_14966428515934f523ae28a.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }],
    "orders2": [{
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/scratchComfort.png",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/scratchComfort.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }, {
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/scratchComfort.png",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/scratchComfort.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }],
    "orders3": [{
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "http://img.weiye.me/zcimgdir/thumb/t_14966428515934f523ae28a.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "斤",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }, {
      "productList": [{
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "http://img.weiye.me/zcimgdir/thumb/t_14966428515934f523ae28a.png",
        "recycleType": "H002",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }, {
        "icon": "https://cdn.jisuapp.cn/zhichi_frontend/static/webapp/images/share_feng.jpg",
        "recycleType": "H001",
        "num": "20",
        "unit": "个",
        "commodityPrice": "33"
      }]
    }]
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

  // 订单类型点击事件
  onTypeClick: function(event) {

    var index = event.currentTarget.dataset.index;

    this.setData({
      currentIndex: index,
    });

    switch (index) {
      case 0:
        this.setData({
          orders: this.data.orders3
        });
        break;

      case 1:
        this.setData({
          orders: this.data.orders2
        });
        break;
      default:

        break;

    }

  },
  // 订单列表item点击事件
  onOrderItemClick: function(event) {

    var index = event.currentTarget.dataset.index;
    var productList = this.data.orders[index].productList;
    var jsonString = JSON.stringify(productList);
    wx.navigateTo({
      url: 'orderDetail/orderDetail?productList=' + jsonString,
    })
  }

})