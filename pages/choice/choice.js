// pages/choice/choice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftY:0,
        swiperH:0,
        show:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        let query = wx.createSelectorQuery();
        query.select('.swiper').boundingClientRect(rect => {
            let height = rect.height;
            // console.log(height);
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
        console.log(e.detail.y.toFixed(0))
        let that = this
       
            wx.pageScrollTo({
                scrollTop: e.detail.y.toFixed(0) ,
                duration: 500
            })
   
    },
    onPageScroll: function (e) {
        console.log(e.scrollTop.toFixed(0))
        let that = this
            // that.setData({
            //     leftY: e.scrollTop.toFixed(0) ,
            // })
    },
    showActive:function (e) {//点击显示小球颜色
    console.log(e)
        this.setData({
            show:true
        })
    }
})