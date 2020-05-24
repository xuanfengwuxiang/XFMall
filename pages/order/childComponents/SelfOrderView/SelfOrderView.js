// pages/order/childComponents/SelfOrderView/SelfOrderView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "hidden": {
      type: Boolean,
      value: false
    },
    nearestPlace: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "tittles": ["未自提", "已自提", "所有"]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})