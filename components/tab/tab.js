// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tittles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "currentIndex":0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onItemClick(event){
          var index = event.currentTarget.dataset.index;

          this.setData({
            currentIndex:index
          });

          this.triggerEvent('itemClick',{index,tittle:this.properties.tittles[index]},{})
      }
  }
})
