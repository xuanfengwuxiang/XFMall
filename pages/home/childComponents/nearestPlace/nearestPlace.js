// pages/home/childComponents/nearestPlace/nearestPlace.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nearestPlace:{
      type:String,
      value:""
    },
    placeDetail: {
      type: String,
      value: ""
    },
    distance: {
      type: String,
      value: ""
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
    onClickPlace:function(){
        wx.navigateTo({
          url: './nearestPlace/nearestPlace',
        })
    }
  }
})
