// pages/test/success04/success04.js
const app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uname:app.globalData.uname
    })
    wx.showToast({
      title: app.globalData.uname+'欢迎回来',
    });
    setTimeout(function(){
      wx.hideToast();
    },1500)
  },
  logout:function(){
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗?',
      confirmText:'退出',
      confirmColor:'green',
      cancelText:'我再想想',
      cancelColor:'red',
      success:(res)=>{
        if(res.confirm){
          this.setData({
            uname:null,
          })
        app.globalData.uname= null
        console.log(this.data.uname,app.globalData.uname);
        // wx.showToast({
        //   title: '再见',
        //   icon: 'success',
        //   duration: 1500
        // });
        // setTimeout(function(){
        //   wx.hideToast();
        // },1500);
        wx.navigateTo({
          url: '/pages/test/login03/login03'
        })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})