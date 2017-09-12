// index.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        banner: [],
        lesson: [],
        page: 1,
        allPage: 1,
        allDone: false,
        loadFlag: false,
        playStatus: null
    },
    onLoad() {
        var $this = this;
        $this.getBannerList();
        $this.loadMore();
    },
    onShareAppMessage: function(res) {
        return {
            title: '校长得道--大咖专栏',
            path: '/pages/daka/daka'
        }
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
    openDetail: function(event) {
        var $this = this;
        var index = event.currentTarget.dataset.index;
        var tmpData = util.clone($this.data.lesson);
        if (index >= 0 && tmpData[index].update_status) {
            tmpData[index].update_status = 0;
        }
        $this.setData({
            lesson: tmpData
        });
        wx.navigateTo({
            url: '../dk_detail/detail?id=' + event.currentTarget.dataset.id
        })
    },
    getBannerList: function() {
        var $this = this;
        wx.request({
            url: ajaxurl.api_banner_list,
            data: {
                "type": 1
            },
            method: "POST",
            success: function(res) {
                $this.setData({
                    banner: res.data.data
                });
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
                    url: ajaxurl.api_bigshot_list,
                    data: {
                        "page": $this.data.page,
                        "page_num": 10,
                        "token": app.globalData.token
                    },
                    method: "POST",
                    success: function(res) {
                        $this.setData({
                            lesson: $this.data.lesson.concat(res.data.data.data_list),
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
