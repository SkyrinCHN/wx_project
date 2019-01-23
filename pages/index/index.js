Page({
  // handleTap1:function(){
  //   wx.redirectTo({
  //     url: '/pages/shopList/shopList',
  //   })
  // },
  // handleTap2:function(){
  //   wx.navigateTo({
  //     url: '/pages/logs/logs',
  //   })
  // },
  // handleTap3:function(e){
  //   var age = e.target.dataset.age;
  //   wx.navigateTo({
  //     url: '/pages/logs/logs?age='+age,
  //   })
  // },
  handleTap:function(e){
    //拿到九宫格每一格相对应的id
    var id = e.target.dataset.id;
    var page = "/pages/shopList/shopList";
    if(id ==1){page = "/pages/shopList/shopList"}
    wx.navigateTo({url: page})},
  /**
   * 页面的初始数据
   */
  data: {
    list: [],//轮播图
    navlist: [] //九宫格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNavlist(); //调用获取九宫格方法
    this.getImages();//调用获取轮播图方法
  },
  getNavlist:function(){//获取九宫格信息
    var url = "http://localhost:3000/getNavImages";
    wx.request({
      url: url,
      success:(res)=>{
        this.setData({
          navlist:res.data
        })
      },
      fail:(res)=>{
        console.log(res.data);
      }
    })
  },
  getImages:function(){//获取轮播图
    var url ="http://localhost:3000/getImages";
    wx.request({
      url: url,
      success:(res)=>{
        this.setData({
          list:res.data
        })
      }
    })
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

  }
})