// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    console.log(myDate);
    this.setData({
      date: myDate
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
  onPullDownRefresh: function() {
  	this.setData({
  		searchLoading: true
  	});
  	let that = this;
  	console.log("111")
  	//wx.showNavigationBarLoading(); //在标题栏中显示加载
  	setTimeout(function(e) {
  		wx.hideNavigationBarLoading(); //完成停止加载
  		wx.stopPullDownRefresh(); //停止下拉刷新
  		that.setData({
  			searchLoading: false
  		});
  	}, 2000);
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
  	this.setData({
  		isHideLoadMore: true
  	});
  	let that = this;
  	console.log("222")
  	//wx.showNavigationBarLoading(); //在标题栏中显示加载
  	setTimeout(function(e) {
  		wx.hideNavigationBarLoading(); //完成停止加载
  		wx.stopPullDownRefresh(); //停止下拉刷新
  		
  	}, 2000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})