// my.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        money: 0,
        cindex: 0,
        interest: [],
        scale: ['请选择', '1家校区', '2-5家校区', '6家及以上校区'],
        sindex: 0,
        company: ['请选择', '在线教育', '体制内', '职业教育', '国际教育', '艺术教育', '幼儿教育', 'K12教育', '语言教育'],
        cindex: 0,
        choose: new Array(8),
        submitFlag: false,
        playStatus: null
    },
    onLoad() {},
    onShow() {
        var $this = this;
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
                res.title = wx.getStorageSync("musicTitle");
                res.bg = wx.getStorageSync("musicBg");
                res.id = wx.getStorageSync("musicId");
                console.log(res);
                $this.setData({
                    playStatus: res
                });
            }
        });
    },
    onShareAppMessage: function(res) {
        return {
            title: '校长得道--加入邦友',
            path: '/pages/vip/vip'
        }
    },
    payForVip: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_join_vip,
            data: {
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    if (res.data.data !== true) {
                        var data = res.data.data;
                        wx.requestPayment({
                            'timeStamp': data.timeStamp.toString(),
                            'nonceStr': data.nonceStr,
                            'package': data.package,
                            'signType': data.signType,
                            'paySign': data.paySign,
                            'success': function(res) {
                                console.log(res);
                                wx.showToast({
                                    title: '支付成功!',
                                    icon: 'success',
                                    duration: 2000,
                                    complete: function() {
                                        wx.setStorageSync('vip', true);
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }
                                });
                            },
                            'fail': function(res) {
                                console.log(res);
                                wx.showToast({
                                    title: '取消充值!',
                                    icon: 'fail',
                                    duration: 2000
                                });
                            }
                        });
                    } else {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'success',
                            duration: 2000,
                            complete: function() {
                                wx.setStorageSync('vip', true);
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    }
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 2000
                    });
                }
            }
        });
    },
    choose: function(event) {
        var $this = this;
        var dataset = event.currentTarget.dataset;
        var tmpData = util.clone($this.data.choose);
        if (tmpData[dataset.index]) {
            tmpData[dataset.index] = null;
        } else {
            tmpData[dataset.index] = dataset.value;
        }
        $this.setData({
            choose: tmpData
        });
    },
    scaleChange: function(e) {
        this.setData({
            sindex: e.detail.value
        })
    },
    companyChange: function(e) {
        this.setData({
            cindex: e.detail.value
        })
    },
    formSubmit: function(event) {
        var $this = this;
        var data = event.detail.value;
        console.log(data);
        if (data.real_name.length < 2) {
            wx.showToast({
                title: '姓名不合法',
                duration: 2000
            });
            return false;
        };
        if (data.mobile.length < 11) {
            wx.showToast({
                title: '手机不合法',
                duration: 2000
            });
            return false;
        };
        var tmpData = util.clone(data);
        tmpData.interest = $this.data.choose.join(",");
        if (data.scale > 0) {
            tmpData.scale = $this.data.scale[data.scale];
        } else {
            tmpData.scale = "";
        }
        if (data.company_type > 0) {
            tmpData.company_type = $this.data.company[data.company_type];
        } else {
            tmpData.company_type = "";
        }
        tmpData.token = app.globalData.token;
        if (!$this.data.submitFlag) {
            $this.setData({
                submitFlag: true
            });
            wx.request({
                url: ajaxurl.api_user_info_update,
                data: tmpData,
                method: "POST",
                method: "POST",
                success: function(res) {
                    console.log(res);
                    if (!res.data.code) {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'success',
                            duration: 2000
                        });
                        setTimeout(function() {
                            $this.payForVip();
                        }, 2000);
                    } else {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'success',
                            duration: 2000
                        });
                    }
                    $this.setData({
                        submitFlag: false
                    });
                }
            });
        } else {
            wx.showToast({
                title: "提交太频繁!",
                icon: 'success',
                duration: 2000
            });
            setTimeout(function() {
                $this.setData({
                    submitFlag: false
                });
            }, 5000);
        }
    },
    openPlay(event) {
        var $this = this;
        var id = $this.data.playStatus.id;
        if (id) {
            if (id.substr(0, 1) == "d") {
                wx.navigateTo({
                    url: '../dk_play/play?play=true&id=' + id.substr(1)
                })
            } else {
                wx.navigateTo({
                    url: '../gh_play/play?play=true&id=' + id.substr(1)
                })
            }
        }
        return false;
    },
    stopMusic(event) {
        var $this = this;
        wx.pauseBackgroundAudio();
        var tmp = util.clone($this.data.playStatus);
        tmp.status = 0;
        $this.setData({
            playStatus: tmp
        });
        return false;
    },
    playMusic(event) {
        var $this = this;
        wx.playBackgroundAudio({
            dataUrl: $this.data.playStatus.dataUrl,
            title: $this.data.playStatus.title,
            coverImgUrl: $this.data.playStatus.bg
        });
        var tmp = util.clone($this.data.playStatus);
        tmp.status = 1;
        $this.setData({
            playStatus: tmp
        });
        return false;
    }
});