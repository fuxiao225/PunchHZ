// pages/discover/discover.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		hideHeader: true,//下拉刷新
		hideBottom: true,//上拉加载
		refreshTime: '', // 刷新的时间 
		contentlist: [], // 列表显示的数据源
		allPages: '', // 总页数
		currentPage: 1, // 当前页数  默认是1
		loadMoreData: '加载更多……',
		mode: 'widthFix',
		inputShowed: false,
		inputVal: "",
		currentIndex: 0, //选择卡
		whole: ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
		concert: ["GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF"],
		par_child: ["GFF1", "GFF1", "GFF1", "GFF1", "GFF1", "GFF1", "GFF1", "GFF1"],
		exhibition: ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
		sport: ["LXT1", "LXT1", "LXT1", "LXT1", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
		outside: ["LXT23", "LXT232", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT", "LXT"]
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
		console.log(this.data.inputVal)
	},
	search:function(){
		wx.navigateTo({
			url: '../search/search?inputVal='+this.data.inputVal,
		})
	},
	// 选择卡



	// 滚动切换标签样式
	switchTab: function(e) {
		console.log(e.detail);
		this.setData({
			currentIndex: e.detail.current
		});
	},
	//用户点击tab时调用
	titleClick: function(e) {
		this.setData({
			//拿到当前索引并动态改变
			currentIndex: e.currentTarget.dataset.idx
		})
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
		this.setData({

			isHideLoadMore: true
		});
		let that = this;
		console.log("111")
		//wx.showNavigationBarLoading(); //在标题栏中显示加载
		setTimeout(function(e) {
			wx.hideNavigationBarLoading(); //完成停止加载
			wx.stopPullDownRefresh(); //停止下拉刷新
			that.setData({

				isHideLoadMore: false
			});
		}, 1500);
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
		//	wx.showNavigationBarLoading(); //在标题栏中显示加载
		setTimeout(function(e) {
			//wx.hideNavigationBarLoading(); //完成停止加载
			//wx.stopPullDownRefresh(); //停止下拉刷新
			that.setData({
				isHideLoadMore: false
			});
		}, 2000);
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
