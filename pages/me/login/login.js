// pages/me/login/login.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    "account": "",
    "password": "",
    "isLogin": true
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

  //登录 注册
  login: function(event) {

    wx.showLoading({
      title: '加载中',
    })

    if (this.data.isLogin) { //登录
      //先获取code，5分钟有效期
      wx.login({
        success: res => {
          if (res.code) {

            //将code发送给服务器
            wx.request({

              url: app.globalData.host + '/me/login',
              data: {
                code: res.code,
                tel: this.data.account,
                password: this.data.password
              },

              success: res => {

                if (res.statusCode === 200) { // 登录成功
                  if (res.data.isOk) {

                    wx.showToast({
                      title: "登录成功",
                    });
                    //持久化
                    wx.setStorage({
                      key: app.globalData.key,
                      data: res.data.data.sessionId,
                    });
                    //缓存
                    app.globalData.sessionId = res.data.data.sessionId;

                  } else {
                    wx.showToast({
                      title: res.data.errorMsg,
                    })
                  }

                }

              }
            })

            return;

          }
          console.log('获取用户登录态失败！' + res.errMsg);
          wx.showToast({
            title: '获取用户登录态失败！' + res.data.errorMsg,
          })
        }
      })

      wx.hideLoading();
      return;
    }

    wx.hideLoading();
    //注册
    wx.showToast({
      title: '注册' + this.data.account + this.data.password,
    })
  },

  //获取账号
  getAccount: function(event) {
    this.data.account = event.detail.value;
  },

  //获取密码
  getPassword: function(event) {
    this.data.password = event.detail.value;
  },

  //切换输入模式
  changeInputType: function(event) {
    var origin = this.data.isLogin;
    origin = !origin;
    this.setData({
      isLogin: origin
    })
  }
})