// my.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        userInfo: {},
        vip: false,
        playStatus: null
    },
    onLoad() {
        const that = this;
        that.getUserInfo();
        console.log("onLoad:" + that.data.vip);
    },
    onShow() {
        var $this = this;
        var vip = wx.getStorageSync('vip');
        if (vip) {
            $this.setData({
                vip: true
            });
        } else {
            $this.setData({
                vip: false
            });
        }
        wx.getBackgroundAudioPlayerState({
            method: "POST",
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
    linkMySubscribe(event) {
        wx.navigateTo({
            url: '../my_subscribe/my_subscribe'
        })
    },
    linkMyCollect(event) {
        wx.navigateTo({
            url: '../my_collect/my_collect'
        })
    },
    linkMyMoney(event) {
        wx.navigateTo({
            url: '../my_money/my_money'
        })
    },
    linkVip(event) {
        wx.navigateTo({
            url: '../vip/vip'
        })
    },
    linkPay(event) {
        wx.navigateTo({
            url: '../pay/pay'
        })
    },
    link404(event) {
        wx.navigateTo({
            url: '../404/404'
        })
    },
    getUserInfo() {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_info,
            data: {
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    // console.log(res.data.data.head_img);
                    if (res.data.data.nick_name) {
                        $this.setData({
                            userInfo: {
                                avatarUrl: res.data.data.head_img,
                                nickName: res.data.data.nick_name
                            }
                        });
                        if (res.data.data.user_type) {
                            $this.setData({
                                vip: true
                            });
                            wx.setStorageSync('vip', true);
                        } else {
                            $this.setData({
                                vip: false
                            });
                            wx.setStorageSync('vip', false);
                        }
                    } else {
                        $this.saveUserInfo();
                    }
                } else {
                    console.log(res.data.msg);
                }
            }
        })
    },
    saveUserInfo() {
        var $this = this;
        app.getUserInfo((userInfo) => {
            wx.request({
                url: ajaxurl.api_wechat_getuserinfo,
                data: {
                    "token": app.globalData.token,
                    "encryptedData": userInfo.encryptedData,
                    "iv": userInfo.iv,
                },
                method: "POST",
                method: "POST",
                success: function(res) {
                    if (!res.data.code) {
                        $this.setData({
                            userInfo: userInfo.userInfo
                        });
                    } else {
                        console.log(res.data.msg);
                    }
                }
            });
        });
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
