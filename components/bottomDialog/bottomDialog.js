// components/bottomDialog/bottomDialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "tittle": {
      type: String,
      value: ""
    },
    "content": {
      type: String,
      value: ""
    },
    "isShow": {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "isShowPop": false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹窗
    hideModel: function(event) {
      this.setData({
        isShow: false
      })
    },

    //点击事件
    call: function(event) {
      var content = event.currentTarget.dataset.content;
      wx.showToast({
        title: '点击{{content}}',
      })
    }
  }
})