// pages/test/logout05/logout05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false, //背景音乐是否播放 默认没有
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  },
  play:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://localhost:3000/bg.mp3',
    })
  },
  pause:function(){
    wx.pauseBackgroundAudio();
  },
  stop:function(){
    wx.stopBackgroundAudio();
  },
  onMusicTap: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://localhost:3000/bg.mp3',
    });
    if (this.data.isPlaying) {
      wx.pauseBackgroundAudio();
      this.setData({ isPlaying: false });

    } else {
      wx.playBackgroundAudio();
      this.setData({isPlaying:true})
    }
    
  }
})