// pages/me/login/login.js



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

    if (this.data.isLogin) { //登录

      wx.showToast({
        title: '登录' + this.data.account + this.data.password,
      });

      wx.login({
        success:res=>{
          console.log(res);
        }
      })

    } else { //注册
      wx.showToast({
        title: '注册' + this.data.account + this.data.password,
      })
    }

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