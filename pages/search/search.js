// pages/search/search.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		hideHeader: true,//下拉刷新
		hideBottom: true,//上拉加载
		inputShowed: false,
		inputVal: "", //搜索框
		mode: 'widthFix'
	},
	//搜索
	showInput: function() {
		this.setData({
			inputShowed: true
		});
	},
	clearInput: function() {
		this.setData({
			inputVal: ""
		});
	},
	search_content: function(e) {
		this.setData({
			inputVal: e.detail.value
		});
		console.log("12121")
		console.log(this.data.inputVal)
	},



	//下拉刷新
	refresh: function(e) {
		var self = this;
		console.log("21212");
		self.setData({
			// currentPage: 1,
			// refreshTime: date.toLocaleTimeString(),
			hideHeader: false
		});
		//self.getData();获取数据
		setTimeout(function() {
			self.setData({
				// currentPage: 1,
				// refreshTime: date.toLocaleTimeString(),
				hideHeader: true
			});
			console.log('下拉刷新');
		}, 1500);


	},
	//下拉刷新
	loadMore: function(e) {
		var self = this;
		self.setData({
			// currentPage: 1,
			// refreshTime: date.toLocaleTimeString(),
			hideBottom: false
		});
		//self.getData();获取数据
		setTimeout(function() {
			console.log('shanglajiazai');
			self.setData({
				// currentPage: 1,
				// refreshTime: date.toLocaleTimeString(),
				hideBottom: true
			});

		}, 1500);

	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		var inputVal = options.inputVal;
		this.setData({
			inputVal: inputVal
		});
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
