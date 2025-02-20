// pages/home/moreData/moreData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    periods: [{
      "index": 0,
      "name": "一周"
    },
    {
      "index": 1,
      "name": "二周"
    }, {
      "index": 2,
      "name": "三周"
    }, {
      "index": 3,
      "name": "一个月"
    }, {
      "index": 4,
      "name": "二个月"
    }, {
      "index": 5,
      "name": "三个月"
    }, {
      "index": 6,
      "name": "四个月"
    }
    ],
    array: ['一周', '二周', '三周', '一个月', "二个月", "三个月", "四个月"],
    index: 0


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  //时间段滚轮
  bindPickerChange: function (e) {
    console.log(e);
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }

})