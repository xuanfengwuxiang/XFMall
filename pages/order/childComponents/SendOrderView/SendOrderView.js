// pages/order/childComponents/SendOrderView/SendOrderView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "hidden": {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "tittles": ["未处理", "处理中", "已送达", "所有"],
    "sendOrders": [{
      "orderId": "2020052400001",
      "products": [{
        "cmName": "苹果",
        "cmNum": "3",
        "pic": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
      }, {
        "cmName": "苹果",
        "cmNum": "3",
        "pic": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
      }, {
        "cmName": "苹果",
        "cmNum": "3",
        "pic": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
      }]
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})