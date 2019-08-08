// pages/user/user.js
var app = getApp();
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		mode: 'scaleToFill'
	},

	//login
	// login: function() {
	// 	console.log("121212")
	// 	wx.login({
	// 		success(res) {
	// 			if (res.code) {
	// 				//发起网络请求
	// 				wx.request({
	// 					url: 'https://test.com/onLogin',
	// 					data: {
	// 						code: res.code
	// 					}
	// 				})
	// 			} else {
	// 				console.log('登录失败！' + res.errMsg)
	// 			}
	// 		}
	// 	})
	// },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		// 查看是否授权
		var that = this;
		var that = this;
		// 查看是否授权
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: function(res) {
							// 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
							// 根据自己的需求有其他操作再补充
							// 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
							wx.login({
								success: res => {
									// 获取到用户的 code 之后：res.code
									console.log("用户的code:" + res.code);
									// 可以传给后台，再经过解析获取用户的 openid
									// 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
									wx.request({
									     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxbafbdf082fd43311&secret=23ef9a23a2bbbb38c1b2f4c0446dcf7c&js_code=' + res.code + '&grant_type=authorization_code',
									     success: res => {
									         // 获取到用户的 openid
									         console.log("用户的openid:" + res.data.openid);
									   }
									 });
								}
							});
						}
					});
				} else {
					// 用户没有授权
					// 改变 isHide 的值，显示授权页面
					that.setData({
						isHide: true
					});
				}
			}
		});
	},
	bindGetUserInfo(e) {
		// 获取到用户信息
		console.log(e.detail.userInfo)
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
