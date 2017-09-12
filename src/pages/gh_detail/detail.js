// index.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        showInfo: false,
        showList: true,
        showJudge: false,
        id: 0,
        detail: null,
        video_list: [],
        comment_list: [],
        page: 1,
        allPage: 1,
        allDone: false,
        comment: [],
        is_collection: 0,
        is_subscribe: 0,
        playStatus: null
    },
    onLoad: function(option) {
        if (option.id) {
            this.setData({
                id: option.id
            });
            this.getDetail();
            this.userHistory();
        } else {
            wx.showToast({
                title: '无法获取到ID',
                icon: 'warn',
                duration: 2000
            });
            wx.navigateBack(1);
        }
    },
    onShareAppMessage: function(res) {
        var $this = this;
        return {
            title: $this.data.detail.entity.title,
            path: '/pages/gh_detail/detail?id=' + $this.data.id
        }
    },
    onShow() {
        var $this = this;
        // wx.playBackgroundAudio({
        //     dataUrl: 'http://file.xiaozhangbang.org/video/201707/07/2239d437ae4c886b574635233d94859e.ogg?a=1',
        //     success: function(res) {
        //         console.log(res);
        //     }
        // })
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
                res.title = wx.getStorageSync("musicTitle");
                res.bg = wx.getStorageSync("musicBg");
                res.id = wx.getStorageSync("musicId");
                $this.setData({
                    playStatus: res
                });
            }
        });
    },
    showInfoTab: function(e) {
        this.setData({
            showInfo: true,
            showList: false,
            showJudge: false
        });
    },
    showListTab: function(e) {
        this.setData({
            showInfo: false,
            showList: true,
            showJudge: false
        });
    },
    showJudgeTab: function(e) {
        this.setData({
            showInfo: false,
            showList: false,
            showJudge: true
        });
        this.loadMore();
    },
    getDetail: function() {
        var $this = this;
        wx.request({
            url: ajaxurl.api_driedfood_detail,
            data: {
                "token": app.globalData.token,
                "dried_food_id": $this.data.id
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    $this.setData({
                        detail: res.data.data,
                        video_list: res.data.data.video_list,
                        comment: res.data.data.comment_list,
                        is_subscribe: res.data.data.entity.is_subscribe,
                        is_collection: res.data.data.entity.is_collection
                    });
                } else {
                    console.log(res.data.msg);
                    wx.showToast({
                        title: res.data.msg,
                        duration: 2000,
                        complete: function() {
                            setTimeout(function() {
                                wx.navigateBack(1);
                            }, 2000);
                        }
                    });
                }
            },
            fail: function (err) {
                var errType = '1003'
                app.getErr(err.errMsg, errType);
            }
        })
    },
    loadMore: function() {
        var $this = this;
        if ($this.data.page > $this.data.allPage) {
            $this.setData({
                allDone: true
            });
        } else {
            wx.request({
                url: ajaxurl.api_driedfood_comment_list,
                data: {
                    "page": $this.data.page,
                    "page_num": 10,
                    "dried_food_id": $this.data.id,
                    "token": app.globalData.token
                },
                method: "POST",
                success: function(res) {
                    $this.setData({
                        comment_list: $this.data.comment_list.concat(res.data.data.data_list),
                        allPage: res.data.data.page_num,
                        page: $this.data.page + 1
                    });
                    if ($this.data.page > $this.data.allPage) {
                        $this.setData({
                            allDone: true
                        });
                    }
                }
            });
        }
    },
    userVote: function(event) {
        var $this = this;
        var index = event.currentTarget.dataset.index,
            can = event.currentTarget.dataset.can;
        if (can) {
            wx.showToast({
                title: '你已经点过赞了',
                icon: 'warn',
                duration: 2000
            });
            return false;
        }
        wx.request({
            url: ajaxurl.api_driedfood_comment_point,
            data: {
                "dried_food_comment_id": event.currentTarget.dataset.id,
                "token": app.globalData.token
            },
            method: "POST",
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    var obj = util.clone($this.data.comment_list);
                    obj[index].point_number = obj[index].point_number + 1;
                    obj[index].is_point = 1;
                    $this.setData({
                        comment_list: obj
                    });
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'warn',
                        duration: 2000
                    });
                }
            }
        });
    },
    userCollection: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_collection,
            data: {
                "mid": $this.data.id,
                "type": 2,
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    wx.showToast({
                        title: '收藏成功',
                        icon: 'success',
                        duration: 2000
                    });
                    $this.setData({
                        is_collection: 1
                    });
                } else {
                    console.log(res.data.msg);
                }
            }
        });
    },
    userSubscribe: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.user_subscribe_driedfood, //仅为示例，并非真实的接口地址
            data: {
                "dried_food_id": $this.data.id,
                "token": app.globalData.token
            },
            methods: "POST",
            success: function(res) {
                console.log(res);
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
                                    title: '订阅成功!',
                                    icon: 'success',
                                    duration: 2000
                                });
                                $this.setData({
                                    is_subscribe: 1
                                });
                            },
                            'fail': function(res) {
                                console.log(res);
                                wx.showToast({
                                    title: '取消充值!',
                                    icon: 'fail',
                                    duration: 2000
                                });
                                return false;
                            }
                        });
                    } else {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'success',
                            duration: 2000
                        });
                        $this.setData({
                            is_subscribe: 1
                        });
                    }
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 2000
                    });
                    return false;
                }
            }
        });
    },
    userUncollection: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_uncollection,
            data: {
                "mid": $this.data.id,
                "type": 2,
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    wx.showToast({
                        title: '取消收藏成功',
                        icon: 'success',
                        duration: 2000
                    });
                    $this.setData({
                        is_collection: 0
                    });
                } else {
                    console.log(res.data.msg);
                }
            }
        });
    },
    userUnsubscribe: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_unsubscribe,
            data: {
                "mid": $this.data.id,
                "type": 2,
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    wx.showToast({
                        title: '取消订阅成功',
                        icon: 'success',
                        duration: 2000
                    });
                    $this.setData({
                        is_subscribe: 0
                    });
                } else {
                    console.log(res.data.msg);
                }
            }
        });
    },
    userHistory: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_driedfood_click,
            data: {
                "dried_food_id": $this.data.id,
                "token": app.globalData.token
            },
            method: "POST",
            success: function(res) {
                console.log(res.data.msg);
            }
        });
    },
    openVideoDetail: function(event) {
        console.log(event.currentTarget.dataset.id);
        wx.navigateTo({
            url: '../gh_play/play?id=' + event.currentTarget.dataset.id
        })
    },
    openPlay(event) {
        var $this = this;
        var id = $this.data.playStatus.id;
        console.log(id);
        if (id) {
            if (id.substr(0, 1) == "d") {
                wx.navigateTo({
                    url: '../dk_play/play?play=true&id=' + id.substr(1)
                })
            } else {
                wx.navigateTo({
                    url: '../gh_play/play?id=' + id.substr(1)
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
