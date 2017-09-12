const util = require('./utils/util');
const ajaxurl = require('./utils/ajaxurl');
//app.js
App({
    onLaunch: function() {
        this.getToken();
        this.getUserSystem();
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            that.globalData.userInfo = wx.getStorageSync('userInfo');
            typeof cb == "function" && cb(that.globalData.userInfo);
        }
    },
    getToken: function() {
        var $this = this;
        var token = wx.getStorageSync('token');
        if (!token) {
            wx.showLoading({ title: '加载中...' });
            wx.login({
                method: "POST",
                success: function(res) {
                    if (res.code) {
                        //发起网络请求
                        wx.request({
                            url: ajaxurl.api_wechat_login,
                            method: "POST",
                            data: {
                                code: res.code
                            },
                            success: function(res) {
                                console.log(res.data);
                                if (!res.data.code) {
                                    //执行回调
                                    $this.globalData.token = res.data.data;
                                    wx.setStorageSync('token', res.data.data);
                                    wx.hideLoading();
                                    wx.reLaunch({
                                        url: 'ganhuo?login=true'
                                    });
                                }
                            }
                        });
                        //保存个人信息
                        wx.getUserInfo({
                            success: function(res) {
                                wx.setStorageSync('userInfo', res);
                            }
                        });
                    } else {
                        console.log('获取用户登录态失败！' + res.errMsg)
                    }
                },
                withCredentials: true
            });
        } else {
            $this.globalData.token = token;
        }
    },
    xlog: function (key, value) {
        var $this = this;
        var date = new Date().getMilliseconds();
        wx.request({
            url: ajaxurl.api_xlog,
            method: "POST",
            data: {
                k: key + "||" + value,
                "token": $this.globalData.token,
                'time': date
            }
        });
    },
    getURL: function() {
        for(var i in ajaxurl) {
            if(ajaxurl[i].indexOf(this.globalData.version) > 0) {
                break;
            } else{
                ajaxurl[i] += this.globalData.version;
            }
        }
        return ajaxurl;          
    },
    getErr: function(err, type) {
        var time = new Date();
        return wx.setStorageSync("cache_error", wx.getStorageSync("cache_error")+ '#' + time.getTime() +'|' + type + '|' + err);
    },
    getUserSystem: function() {
        var $this = this;
        wx.getSystemInfo({
            success: function(res) {
                $this.globalData.userSystem = res;
            }
        })
    },
    globalData: {
        userInfo: null,
        token: null,
        cartData: {
            type: '', //vip,daka,ganhuo,daka_play,ganhuo_play
            id: 0,
            price: 0,
            vip: 0,
            title: "",
            detailId: 0
        },
        version: "?v=v1.1.8",
        userSystem: null
    }
})