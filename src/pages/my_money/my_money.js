// my.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        money: "",
        page: 1,
        allPage: 1,
        allDone: false,
        loadFlag: false,
        record: [],
        playStatus: null
    },
    onLoad() {
        this.getMoney();
        this.loadMore();
    },
    onShow() {
        var $this = this;
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
    linkPay(event) {
        wx.navigateTo({
            url: '../pay/pay'
        })
    },
    getMoney() {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_account_info,
            data: {
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    $this.setData({
                        money: res.data.data.balance
                    });
                } else {
                    console.log(res.data.msg);
                }
            }
        })
    },
    loadMore: function(event) {
        var $this = this;
        if (!$this.data.loadFlag) {
            $this.setData({
                loadFlag: true
            });
            if ($this.data.page > $this.data.allPage) {
                $this.setData({
                    allDone: true
                });
            } else {
                wx.request({
                    url: ajaxurl.api_user_bangbi_recode,
                    data: {
                        "page": $this.data.page,
                        "page_num": 10,
                        "token": app.globalData.token
                    },
                    method: "POST",
                    method: "POST",
                    success: function(res) {
                        $this.setData({
                            record: $this.data.record.concat(res.data.data.data_list),
                            allPage: res.data.data.page_num,
                            page: $this.data.page + 1,
                            loadFlag: false
                        });
                        if ($this.data.page > $this.data.allPage) {
                            $this.setData({
                                allDone: true
                            });
                        }
                    }
                });
            }
        } else {
            setTimeout(function() {
                $this.setData({
                    loadFlag: false
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
