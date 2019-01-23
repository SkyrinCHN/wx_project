//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    age: 0,
    user: { id: 1, age: 22, name: "jerry" },
    product: [{ id: 1, pname: "六神花露水", price: "¥18.88" }, { id: 2, pname: "舒肤佳沐浴露", price: "¥28.80" }],
    list:[{id:1,img_url:"http://localhost:3000/img/banner1.png"},{id:2,img_url:"http://localhost:3000/img/banner2.png"},{id:3,img_url:"http://localhost:3000/img/banner3.png"}]
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
