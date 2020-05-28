// pages/goods/addProduct/addProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "productType": "",
    "productName": "",
    "repo": "",
    "unit": "",
    "price": "",
    "images": []
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

  // 获取商品类型
  getProductType: function(event) {
    this.data.productType = event.detail.value;
  },

  // 获取商品名称
  getProductName: function(event) {
    this.data.productName = event.detail.value;
  },

  // 获取库存数量
  getRepo: function(event) {
    this.data.repo = event.detail.value;
  },

  // 获取销售价格
  getProductPrice: function(event) {
    this.data.price = event.detail.value;
  },

  // 获取售价单位
  getProductUnit: function(event) {
    this.data.unit = event.detail.value;
  },

  //添加图片
  addPic: function(event) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        this.setData({
          images: images.length <= 3 ? images : images.slice(0, 3)
        })
      }
    })
  },

  //点击图片预览
  onClickPic: function(event) {
    var index = event.currentTarget.dataset.index;
    const images = this.data.images
    wx.previewImage({
      current: images[index], //当前预览的图片
      urls: images, //所有要预览的图片
    })
  },

  //点击删除图片
  deletePic:function(event){
      var index = event.currentTarget.dataset.index;
      var temp = this.data.images;
    temp.splice(index,1);
      this.setData({
        images: temp
      })
  },

  //上架水果
  addProduct: function(event) {

  }
})