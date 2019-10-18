// pages/me/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "problems": [{
      "tittle": "如何找到斌斌回收机器？",
      "content": "打开微信小程序查找",
      "isShow": false
    }, {
      "tittle": "上面回收免费吗？",
      "content": "我们不收取费用",
      "isShow": false
    }],
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

  //常见问题item点击
  onProblemTittleClick: function(event) {
    var index = event.currentTarget.dataset.index;

    var current = this.data.problems[index];
    current.isShow = !current.isShow;
    var newProblems = this.data.problems;
    newProblems[index] = current;
    this.setData({
      problems: newProblems
    });
  },

  //电话客服点击
  onTelClick: function(event) {

    var tel = event.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: "13770583585",
      success: function() {

      },
      fail: function() {

      }

    })
  },




})