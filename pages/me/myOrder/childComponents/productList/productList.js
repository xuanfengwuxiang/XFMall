// pages/me/myOrder/childComponents/productList/productList.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "list": {
      type: Array,
      valur: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "host": app.globalData.host
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})