var time = 0;
var touchDot = 0; //触摸时的原点
var interval = "";
var flag_hd = true;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        anima: ''
    },

    onLoad: function() {
        var that = this
    },
    onShow: function() {
        flag_hd = true; //重新进入页面之后，可以再次执行滑动切换页面代码
        clearInterval(interval); // 清除setInterval
        time = 0;
    },
    // 触摸开始事件
    touchStart: function(e) {
        touchDot = e.touches[0].pageX; // 获取触摸时的原点
        // 使用js计时器记录时间    
        interval = setInterval(function() {
            time++;
        }, 100);
    },
    // 触摸结束事件
    touchEnd: function(e) {
        var touchMove = e.changedTouches[0].pageX;
        // 向左滑动   
        if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
            flag_hd = false;
            //执行切换页面的方法
            console.log("向右滑动");
            this.moveleft();
            // wx.navigateTo({
            //     url: ''
            // })
        }
        // 向右滑动   
        if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
            flag_hd = false;
            //执行切换页面的方法
            console.log("向左滑动");
            this.moveright();
            // wx.navigateTo({
            //     url: ''
            // })
        }
        clearInterval(interval); // 清除setInterval
        time = 0;
    },

    onShareAppMessage: function() {
        return {
            title: '城市日历',
            desc: '自定义分享描述',
            path: '/pages/index/index'
        }
    },
    moveleft: function() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: 100
        });
        animation.opacity(0.2).translate(-350, 0).step()
        this.setData({
            anima: animation.export()
        })
        let that = this
        setTimeout(function() {
            that.setData({
                anima: ''
            });
        }, 800)

    },
    moveright: function() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: 100
        });

        animation.opacity(0.2).translate(500, 0).step()
        this.setData({
            anima: animation.export()
        })
        let that = this
        setTimeout(function() {
            that.setData({
                anima: ''
            });
        }, 800)
    }
})