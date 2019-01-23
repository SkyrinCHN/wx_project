// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  checkForm: function(e) { //录入商品信息
    // console.log("提交表单")
    var pname = e.detail.value.pname;
    var price = e.detail.value.price;
    // console.log(pname, price);
    if (pname.trim().length == 0) {
      wx.showToast({
        title: '名称不能为空',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function() {
        wx.hideToast();
      }, 1500)
      return;
    }
    var reg = /^[0-9]{1,}(\.[0-9]{1,2})?$/;
    if (!reg.test(price)) {
      wx.showToast({
        title: '价格不正确',
        icon: 'none',
        duration: 1500
      });
      setTimeout(function() {
        wx.hideToast();
      }, 1500);
      return;
    }
    var url = "http://localhost:3000/addProduct";
    wx.request({
      url: url,
      data: {
        pname: pname,
        price: price
      },
      success: (res) => {
        console.log(res.data.msg);
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          duration: 1500
        });
        setTimeout(function() {
          wx.hideToast();
        }, 1500);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showModal({
      title: '提示',
      content: '开始录入商品?',
      cancelText: '再想想',
      confirmText: '开始吧!',
      cancelColor: '#6112ee',
      confirmColor: '#006699',
      success: (res) => {
        if (res.confirm) {
          // console.log("开始录入商品信息");
          wx.showToast({
            title: '开始录入...',
            icon: 'none',
            duration: 1000
          });
          setTimeout(function() {
            wx.hideToast();
          }, 1000)
        }
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