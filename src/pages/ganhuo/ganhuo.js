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
        console.warn('onLoad');
        this.getBannerList();
        app.getToken();
        this.loadMore();
        if (!app.globalData.token) {
            this.gettingToken()
        }
    },
    gettingToken: function() {
        var timer = null;
        var $this = this;
        clearInterval(timer);
        timer = setInterval(function(){
            if (!app.globalData.token) {
                app.getToken();
            } else {
                $this.loadMore();
                clearInterval(timer);
            }
        },500)
    },
    onShareAppMessage: function(res) {
        return {
            title: '校长得道--干货精选',
            path: '/pages/ganhuo/ganhuo'
        }
    },
    onShow() {
        var $this = this;
        console.warn('onShow');
        // if ($this.data.lessen) {
        //     return;
        // }else {
        //     this.loadMore();
        // }
        // app.getErr("err", 1001);
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
        // console.log(ajaxurl.api_xlog);
        if(wx.getStorageSync("cache_error")) {
            wx.request({
                url: ajaxurl.api_xlog,
                method: "POST",
                data: {
                    "token": app.globalData.token,
                    "model": app.globalData.userSystem.model,
                    "pixelRatio": app.globalData.userSystem.pixelRatio,
                    "screenWidth": app.globalData.userSystem.screenWidth,
                    "screenHeight": app.globalData.userSystem.screenHeight,
                    "windowWidth": app.globalData.userSystem.windowWidth,
                    "windowHeight": app.globalData.userSystem.windowHeight,
                    "language": app.globalData.userSystem.language,
                    "weixin_version": app.globalData.userSystem.version,
                    "system": app.globalData.userSystem.system,
                    "platform": app.globalData.userSystem.platform,
                    "SDKVersion": app.globalData.userSystem.SDKVersion,
                    "ERR": wx.getStorageSync("cache_error")
                },
                success: function(res) {
                    console.log('success');
                    wx.removeStorageSync("cache_error");
                },
                fail: function(err) {
                    console.log(err);
                }
            });
        }
        
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
        //跳转
        wx.navigateTo({
            url: '../gh_detail/detail?id=' + event.currentTarget.dataset.id
        })
    },
    getBannerList: function() {
        var $this = this;
        console.warn('getBannerList');
        wx.request({
            url: ajaxurl.api_banner_list,
            data: {
                "type": 2
            },
            method: "POST",
            success: function(res) {
                console.warn('getBannerList:success');
                $this.setData({
                    banner: res.data.data
                });
                wx.setStorageSync('cache_banner', res.data.data);
            },
            fail: function(err) {
                // wx.connectSocket({
                //     url: 'wss://api.xiaozhangbang.org/websocket',
                //     method: 'POST',
                //     success: function(res) {
                //         console.warn('getBannerList:websocketSuccess');
                //     },
                //     fail: function() {
                //         console.warn('getBannerList:websocketFail');
                //     }
                // })
                // var cache_banner = wx.getStorageSync('cache_banner');
                // $this.setData({
                //     banner: cache_banner
                // });
                console.log(err);
                var errType = '1001'
                app.getErr(err.errMsg, errType);
            }
        })
    },
    loadMore: function(event) {
        var $this = this;
        console.warn('loadMore');
        if (!$this.data.loadFlag) {
            console.warn('loadMore:(if: true1)');
            $this.setData({
                loadFlag: true
            });
            if ($this.data.page > $this.data.allPage) {
                console.warn('loadMore:(if: true2)');
                $this.setData({
                    allDone: true
                });
            } else {
                console.warn('loadMore:(if: false2)');
                wx.request({
                    url: ajaxurl.api_driedfood_list,
                    data: {
                        "page": $this.data.page,
                        "page_num": 10,
                        "token": app.globalData.token
                    },
                    method: "POST",
                    success: function(res) {
                        console.warn('loadMore:(false2:success)');
                        $this.setData({
                            lesson: $this.data.lesson.concat(res.data.data.data_list),
                            allPage: res.data.data.page_num,
                            page: $this.data.page + 1,
                            loadFlag: false
                        });
                        wx.setStorageSync('cache_allDone', false);
                        if ($this.data.page > $this.data.allPage) {
                            $this.setData({
                                allDone: true
                            });
                            wx.setStorageSync('cache_allDone', true);
                        }
                        wx.setStorageSync('cache_lessen', $this.data.lesson.concat(res.data.data.data_list));
                        wx.setStorageSync('cache_allPage', res.data.data.page_num);
                        wx.setStorageSync('cache_page', $this.data.page + 1);
                        wx.setStorageSync('cache_loadFlag', false);
                    },
                    fail: function(err) {
                        // console.warn('loadMore:(false2:fail)');
                        // wx.connectSocket({
                        //     url: 'wss://api.xiaozhangbang.org/websocket',
                        //     method: 'POST',
                        //     success: function(res) {
                        //         console.warn('loadMore:websocketSuccess');
                        //     },
                        //     fail: function() {
                        //         console.warn('loadMore:websocketFail');
                        //     }
                        // })
                        // var cache_lessen = wx.getStorageSync('cache_lessen');
                        // var cache_allPage = wx.getStorageSync('cache_allPage');
                        // var cache_page = wx.getStorageSync('cache_page');
                        // var cache_loadFlag = wx.getStorageSync('cache_loadFlag');
                        // var cache_allDone = wx.getStorageSync('cache_allDone');
                        // $this.setData({
                        //     lesson: cache_lessen,
                        //     allPage: cache_allPage,
                        //     page: cache_page,
                        //     loadFlag: cache_loadFlag,
                        //     allDone: cache_allDone
                        // });
                        var errType = '1002'
                        app.getErr(err.errMsg, errType);
                    }
                });
            }
        } else {
            console.warn('loadMore-if: false1');
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
