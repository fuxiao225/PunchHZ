// pages/select/select.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		slide_imgUrls:[
			'../../image/new.jpg',
			'../../image/con_img.jpg',
			'../../image/new.jpg'
		],
		rightId:[
			'id0',
			'id1',
			'id2',
			'id3'
		],
		items:[1,2,3,4,5,6,7,8,9,10],
		cate:'fruit'
	},
  scrollList:function(e){
    this.setData({
      cate: e.currentTarget.dataset.cate
    })
    console.log(e)
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
