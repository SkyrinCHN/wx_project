//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    age:0
  },
  onLoad: function (options) {
    this.data.age = options.age;
    console.log(this.data.age);
    console.log(options.age);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
