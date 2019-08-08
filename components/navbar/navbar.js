// components/navbar/navbar.js
const app = getApp()
var util = require('../../utils/util.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    time: "123"
  },

  attached:function() {
    var time = util.formatTime(new Date());
    this.setData({//获取当前时间
      time: time
    });
  },
  
  methods: {
    goList: function () {//点击跳转到列表页
      wx.navigateTo({
        url: '../../pages/index/list/list',
      })
    }
  }
})
