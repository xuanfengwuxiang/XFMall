// pages/home/childCompnents/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event) {
      var index = event.currentTarget.dataset.index;
      switch (index) {
        //分类指南
        case 0:
          wx.navigateTo({
            url: '/pages/home/recommend/classifyGuide/classifyGuide',
          })
          break;
          //邀请有礼
        case 1:

          wx.navigateTo({
            url: '/pages/home/recommend/inviteGift/inviteGift',
          })

          break;
          //积分商城
        case 2:
          wx.navigateTo({
            url: '/pages/home/recommend/integralMall/integralMall',
          })
          break;
          //签到积分
        case 3:
          wx.navigateTo({
            url: '/pages/home/recommend/signIntegral/signIntegral',
          })
          break;
        default:
          break;
      }
    }
  }
})