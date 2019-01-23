// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[], //消息数组
    pno:1,
    pageSize:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url ="http://localhost:3000/getMessage";
    var pno = this.data.pno;
    var pageSize = this.data.pageSize;
    console.log(pno,pageSize);
    wx.request({
      url: url,
      data:{
        pno:pno,
        pageSize:pageSize
      },
      success:(res)=>{
        // console.log(res.data.data);
        this.setData({
          list:res.data.data
        })
        console.log(this.data.list);
      },
      fail:(res)=>{
        console.log("请求消息列表出错了")
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