// pages/home/childComponents/myProtection/myProtection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentMoney:{
      type:String,
      value:""
    },
    protectionNum:{
      type:String,
      value:""
    },
    currentIntegral:{
      type:String,
      value:""
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

    onMoneyClick: function(){
      wx.navigateTo({
        url: './currentMoney/currentMoney',
      })
    },

    onNumClick: function () {
      wx.navigateTo({
        url: './protectionNum/protectionNum',
      })
    },

    onIntegralClick: function () {
      wx.navigateTo({
        url: './currentIntegral/currentIntegral',
      })
    },
  }

  
})
