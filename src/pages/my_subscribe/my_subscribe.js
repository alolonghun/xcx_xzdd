// my.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        showGH: true,
        showDK: false,
        dklesson: [],
        dkpage: 1,
        dkallPage: 1,
        dkallDone: false,
        dkloadFlag: false,
        ghlesson: [],
        ghpage: 1,
        ghallPage: 1,
        ghallDone: false,
        ghloadFlag: false,
        playStatus: null
    },
    onLoad: function() {
        this.ghloadMore();
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
    opendkDetail: function(event) {
        wx.navigateTo({
            url: '../dk_detail/detail?id=' + event.currentTarget.dataset.id
        })
    },
    openghDetail: function(event) {
        wx.navigateTo({
            url: '../gh_detail/detail?id=' + event.currentTarget.dataset.id
        })
    },
    showGHTab: function(e) {
        this.setData({
            showGH: true,
            showDK: false
        });
        this.ghloadMore();
    },
    showDKTab: function(e) {
        this.setData({
            showGH: false,
            showDK: true
        });
        this.dkloadMore();
    },
    dkloadMore: function(event) {
        var $this = this;
        if (!$this.data.dkloadFlag) {
            $this.setData({
                dkloadFlag: true
            });
            if ($this.data.dkpage > $this.data.dkallPage) {
                $this.setData({
                    dkallDone: true
                });
            } else {
                wx.request({
                    url: ajaxurl.api_user_subscribe_list,
                    data: {
                        "page": $this.data.dkpage,
                        "page_num": 10,
                        "type": 1,
                        "token": app.globalData.token
                    },
                    method: "POST",
                    success: function(res) {
                        $this.setData({
                            dklesson: $this.data.dklesson.concat(res.data.data.data_list),
                            dkallPage: res.data.data.page_num,
                            dkpage: $this.data.dkpage + 1,
                            dkloadFlag: false
                        });
                        if ($this.data.dkpage > $this.data.dkallPage) {
                            $this.setData({
                                dkallDone: true
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
    ghloadMore: function(event) {
        var $this = this;
        if (!$this.data.ghloadFlag) {
            $this.setData({
                ghloadFlag: true
            });
            if ($this.data.ghpage > $this.data.ghallPage) {
                $this.setData({
                    ghallDone: true
                });
            } else {
                wx.request({
                    url: ajaxurl.api_user_subscribe_list,
                    data: {
                        "page": $this.data.ghpage,
                        "page_num": 10,
                        "type": 2,
                        "token": app.globalData.token
                    },
                    method: "POST",
                    success: function(res) {
                        $this.setData({
                            ghlesson: $this.data.ghlesson.concat(res.data.data.data_list),
                            ghallPage: res.data.data.page_num,
                            ghpage: $this.data.ghpage + 1,
                            ghloadFlag: false
                        });
                        if ($this.data.ghpage > $this.data.ghallPage) {
                            $this.setData({
                                ghallDone: true
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
