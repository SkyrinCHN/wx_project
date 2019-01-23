// pages/test/test.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = app.globalData.loginName;
    console.log(name);
    app.globalData.loginName="jerry";
    console.log(app.globalData.loginName);
    wx.showActionSheet({
      itemList: ["点赞","踩踩","忽略"],
      success:(res)=>{
        var index = res.tapIndex;
        console.log(index);
      }
    })
  },
  chose:function(){
    wx.showActionSheet({
      itemList: ["添加操作","删除操作"],
      success:(res)=>{
        var index = res.tapIndex;
        var page = '/pages/test/addExam/addExam';
        if(index == 1){
          wx.navigateTo({
            url: '/pages/test/delExam/delExam',
            success: function (res) { console.log("跳转成功") },
            fail: function (res) { console.log("跳转失败") },
            complete: function (res) { console.log("反正我是跳转了") },
          })
        }else{
          wx.navigateTo({
            url: page
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