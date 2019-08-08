// pages/choice/choice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftY:10,
        swiperH:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        let query = wx.createSelectorQuery();
        query.select('.swiper').boundingClientRect(rect => {
            let height = rect.height;
            console.log(height);
            this.setData({
                swiperH:height
            })
        }).exec();
        
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



        setTimeout(function () {
            wx.stopPullDownRefresh() //停止下拉刷新
        }, 500);
  
     
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        console.log(1111)
        // wx.showLoading({
        //   title: '玩命加载中',
        // })
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 2000)
      
      

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    goDetail: function() {
        wx.navigateTo({
            url: '../detail/detail',
        })
    },
    change:function(e){
        console.log(e.detail.y)
        wx.pageScrollTo({
            scrollTop: e.detail.y + this.data.swiperH,
            duration:1000
        })
    },
    onPageScroll: function (e) {
        console.log(e.scrollTop)
        // let that = this
        // setTimeout(function(){
        //     that.setData({
        //         leftY: e.scrollTop - that.data.swiperH
        //     })
        // },1000)
    },
    share:function(){
        console.log(111111111111)
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

})