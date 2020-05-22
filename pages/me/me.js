//我的js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    myList: [{
      "icon": "/images/me/ic_arrow_right.png",
      "name": "需求反馈"
    }, {
      "icon": "/images/me/ic_arrow_right.png",
      "name": "关于旋风商城"
    }, {
      "icon": "/images/me/ic_arrow_right.png",
      "name": "帮助中心"
    }, {
      "icon": "/images/me/ic_arrow_right.png",
      "name": "设置"
    }],
    isLoginSucess: false,
    name: '',
    headPic: ''
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

    this.setData({
      isLoginSucess: app.globalData.loginBean != null,
      name: app.globalData.loginBean != null ? app.globalData.userInfo.nickName : null,
      headPic: app.globalData.userInfo != null ? app.globalData.userInfo.avatarUrl : null
    });

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
  onItemClick(event) {
    var index = event.currentTarget.dataset.index;
    switch (this.data.myList[index].name) {
    
      case "需求反馈":
        wx.navigateTo({
          url: '/pages/me/feedback/feedback',
        })
        break;
      case "关于旋风商城":
        wx.navigateTo({
          url: '/pages/me/aboutUs/aboutUs',
        })
        break;
      case "帮助中心":
        wx.navigateTo({
          url: '/pages/me/help/help',
        })
        break;
      case "设置":
        wx.navigateTo({
          url: '/pages/me/setting/setting',
        })
        break;
      default:

        break;
    }
  },

  //登录
  login: function() {
    if (this.data.isLoginSucess) {
      return;
    }
    wx.navigateTo({
      url: '/pages/me/login/login',
    })
  }
})