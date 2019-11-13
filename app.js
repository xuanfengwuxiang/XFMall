//app.js
// 测试提交===
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //1、先从本地取出sessionId
    const sessionId = wx.getStorageSync(this.globalData.key);

    //2、判断sessionId是否有值
    if (sessionId && sessionId.length !== 0) { //有sessionId,判断过期
      this.checkLoginExpire(sessionId)
    } else { //没有，登录
      this.login()
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  //检查sessionId有没有过期
  checkLoginExpire(sessionId) {

    wx.showLoading({
      title: '登录中',
    })

    wx.request({
      url: this.globalData.host + '/me/checkLogin',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': sessionId
      },
      success: res => {
        wx.hideLoading();

        if (res.statusCode == 200) {
          if (res.data.isOk) {

            this.globalData.isLoginSucess = true;
            this.globalData.loginBean = res.data.data;

            wx.showToast({
              title: '自动登录成功',
            })
            
          } else {
            this.globalData.isLoginSucess = false;
            wx.showToast({
              title: res.data.errorMsg,
            })
          }
        } else {
          wx.showToast({
            title: '接口响应成功，状态code失败',
          })
        }

      },
      fail: err => {
        wx.hideLoading();
        
        wx.showToast({
          title: '接口响应失败',
        })
      }
    })

  },

  // 登录方法,本处暂不使用 账号登录.需前往登录界面
  login() {
    this.globalData.isLoginSucess = false;
    wx.showToast({
      title: '没有sessionId',
      image: '/images/global/ic_toast_error.png'
    })
  },

  //全局数据
  globalData: {
    userInfo: null,
    themeColor: "#EE7A77",
    host: "http://192.168.31.195:8080",
    key: "sessionId",
    isLoginSucess: false,
    loginBean: null,
  }
})