// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], //分页数据
    pageIndex: 0, //分页页码
    pageSize: 7,  //每页大小
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopList(); //调用获取商店列表的方法
  },
  getShopList: function () {//获取商店列表
    wx.showLoading({ title: 'Loading' });
    var url = "http://localhost:3000/getShopList";
    if (this.data.hasMore == false) { return };
    var pn = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    setTimeout(function(){
      wx.hideLoading();
    },1000)
    wx.request({
      url: url,
      data: { pno: pn, pageSize: ps },
      success: (res) => {
        var rows = this.data.list.concat(res.data.data);
        var pc = res.data.pageCount; //总页数
        var frag = pn < pc; //判断当前页数是否小于总页数
        this.setData({
          list: rows,
          pageIndex: pn,
          hasMore: frag
        });
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
    console.log("用户下拉操作...刷新第一页的内容");
    this.setData({
      pageIndex: 0,
      list: [],
      hasMore: true
    });
    this.getShopList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getShopList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})