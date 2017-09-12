// index.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {
        id: 0,
        detail: null,
        video_list: [],
        page: 1,
        allPage: 1,
        allDone: false,
        comment: [],
        is_collection: 0,
        is_subscribe: 0,
        video_url: "",
        recommends: [],
        now: 0,
        duration: 1,
        bg_img: "",
        bgst: null,
        st: null,
        ppts: [],
        ppt: {},
        nowTimes: "00:00",
        comment_list: [],
        ablumId: 0,
        popShow: false,
        video_list: [],
        video_index: 0,
        commentString: "",
        commentFlag: false,
        comment_form_value: "",
        is_pay: false,
        tryFlag: true,
        musicContinue: false,
        stepShow: false,
        now_ppt: 0,
        isHideMusicInfo: false,
        tryDig: true
    },
    onLoad: function(option) {
        var $this = this;
        wx.showLoading({
            mask: true
        });
        if (!option.play) {
            wx.stopBackgroundAudio();
        } else {
            $this.fmContinue();
            this.setData({
                musicContinue: true
            });
        }
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
            path: '/pages/dk_play/play?id=' + $this.data.id
        }
    },
    onShow() {
        var $this = this;
        $this.playMusicStopStatus();
        //是否可以试听
        if ($this.data.detail) {
            $this.canUserTry();
        }
    },
    onHide() {
        var $this = this;
    },
    getDetail: function() {
        var $this = this;
        wx.request({
            url: ajaxurl.api_bigshot_video_detail,
            data: {
                "token": app.globalData.token,
                "big_shot_video_id": $this.data.id
            },
            method: "POST",
            method: "POST",
            success: function(res) {
                if (!res.data.code) {
                    //初始化数据
                    $this.setData({
                        detail: res.data.data,
                        ablumId: res.data.data.entity.big_shot_id,
                        comment: res.data.data.comment_list,
                        comment_list: res.data.data.comment_list.data_list,
                        recommends: res.data.data.recommends,
                        bg_img: res.data.data.entity.images[0].path,
                        is_pay: res.data.data.entity.is_pay,
                        duration: res.data.data.entity.duration,
                        video_url: res.data.data.entity.video_url,
                        is_collection: res.data.data.entity.is_collection,
                        allPage: res.data.data.comment_list.page_num,
                        page: $this.data.page + 1,
                        video_list: res.data.data.video_list
                    });

                    //是否可以试听
                    $this.canUserTry();

                    //判断是否显示试听
                    if ($this.data.is_pay || ($this.data.detail.entity.price == 0) || ($this.data.detail.entity.free_duration >= $this.data.detail.entity.duration)) {
                        $this.setData({
                            tryFlag: false
                        });
                    } else {
                        $this.setData({
                            tryFlag: true
                        });
                    }

                    //音频播放                    
                    if (!$this.data.musicContinue) {
                        if (res.data.data.entity.previous_record > 0 && res.data.data.entity.previous_record <= $this.data.duration && !$this.data.tryFlag) {
                            $this.fmPlay(res.data.data.entity.previous_record);
                            $this.setData({
                                now: res.data.data.entity.previous_record
                            });
                        } else {
                            $this.fmPlay(0);
                            $this.setData({
                                now: 0
                            });
                            $this.saveUserPlay(0);
                        }
                    }

                    //刷ppt
                    var ppts = res.data.data.entity.images,
                        ppt = {};
                    for (var i = 0; i < ppts.length; i++) {
                        var item = ppts[i];
                        ppt[item.time] = item.path;
                    }
                    $this.setData({
                        ppt: ppt,
                        ppts: ppts
                    });

                    //下拉加载
                    if ($this.data.page > $this.data.allPage) {
                        $this.setData({
                            allDone: true
                        });
                    }
                    //video
                    for (var j = 0; j < res.data.data.video_list.length; j++) {
                        if (res.data.data.video_list[j].big_shot_video_id == $this.data.id) {
                            $this.setData({
                                video_index: j
                            });
                            return false;
                        }
                    }
                } else {
                    console.log(res.data.msg);
                    wx.showToast({
                        title: res.data.msg,
                        duration: 2000,
                        complete: function() {
                            wx.navigateBack(1);
                        }
                    });
                }
            }
        })
    },
    userSubscribe: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.user_subscribe_bigshot, //仅为示例，并非真实的接口地址
            data: {
                "big_shot_id": $this.data.ablumId,
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
                                $this.getDetail();
                                $this.userHistory();
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
                        $this.getDetail();
                        $this.userHistory();
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
    openListDetail: function(event) {
        wx.navigateTo({
            url: '../dk_detail/detail?id=' + event.currentTarget.dataset.id
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
                url: ajaxurl.api_bigshot_video_detail,
                data: {
                    "page": $this.data.page,
                    "page_num": 10,
                    "token": app.globalData.token,
                    "big_shot_video_id": $this.data.id
                },
                method: "POST",
                method: "POST",
                success: function(res) {
                    console.log(res);
                    if (!res.data.code) {
                        $this.setData({
                            comment_list: $this.data.comment_list.concat(res.data.data.comment_list.data_list)
                        });
                    } else {
                        console.log(res.data.msg);
                    }
                }
            })
        }
    },
    userHistory: function(event) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_user_bigshot_play,
            data: {
                "big_shot_video_id": $this.data.id,
                "token": app.globalData.token
            },
            method: "POST",
            method: "POST",
            success: function(res) {
                console.log(res.data.msg);
            }
        });
    },
    saveUserPlay: function(time) {
        var $this = this;
        wx.request({
            url: ajaxurl.api_bigshot_video_play,
            data: {
                "big_shot_video_id": $this.data.id,
                "big_shot_id": $this.data.ablumId,
                "token": app.globalData.token,
                "time": time
            },
            method: "POST",
            method: "POST",
            success: function(res) {
                console.log(res.data.msg);
            }
        });
    },
    fmPlay: function(event) {
        var $this = this,
            nowTime = 0;
        //是否需要跳转时间
        if (event > 0) {
            nowTime = event;
        }
        //播放
        wx.playBackgroundAudio({
            dataUrl: $this.data.video_url,
            title: $this.data.detail.entity.title,
            coverImgUrl: $this.data.detail.entity.img,
            success: function() {
                wx.setStorageSync("musicTitle", $this.data.detail.entity.title);
                wx.setStorageSync("musicBg", $this.data.detail.entity.img);
                wx.setStorageSync("musicId", "d" + $this.data.id);
                if (nowTime > 0) {
                    wx.seekBackgroundAudio({
                        position: nowTime,
                        complete: function() {
                            wx.hideLoading();
                            var times = "",
                                now = (nowTime || 0);
                            var min = Math.floor(now / 60);
                            var second = now % 60;
                            times = (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second);
                            $this.setData({
                                now: (nowTime || 0),
                                nowTimes: times
                            });
                            //判断是不是在真正播放
                            $this.getMusicTruePlay();
                        }
                    });
                } else {
                    //判断是不是在真正播放
                    $this.getMusicTruePlay();
                }
            }
        });
    },
    fmStop: function(event) {
        var $this = this;
        wx.pauseBackgroundAudio();
        wx.getBackgroundAudioPlayerState({
            method: "POST",
            success: function(res) {
                var times = "",
                    now = (res.currentPosition || 0);
                var min = Math.floor(now / 60);
                var second = now % 60;
                times = (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second);
                $this.setData({
                    now: (res.currentPosition || 0),
                    nowTimes: times
                });
            }
        });
    },
    fmContinue(event) {
        var $this = this,
            nowTime = 0;
        $this.canUserTry();
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
                wx.hideLoading();
                var times = "",
                    now = (res.currentPosition || 0);
                var min = Math.floor(now / 60);
                var second = now % 60;
                times = (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second);
                $this.setData({
                    now: (res.currentPosition || 0),
                    nowTimes: times
                });
                //继续播放音乐
                if (res.status != 1) {
                    wx.playBackgroundAudio({
                        dataUrl: res.dataUrl,
                        success: function() {
                            $this.playMusicStatus();
                            wx.seekBackgroundAudio({
                                position: res.currentPosition
                            });
                        }
                    });
                } else {
                    $this.playMusicStatus();
                }
            }
        });
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
            url: ajaxurl.api_bigshot_comment_point,
            data: {
                "big_shot_comment_id": event.currentTarget.dataset.id,
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
    popClose: function(event) {
        var $this = this;
        $this.setData({
            popShow: false
        });
    },
    popOpen: function(event) {
        var $this = this;
        $this.setData({
            popShow: true
        });
    },
    openDetail: function(event) {
        if (event.currentTarget.dataset.id == this.data.id) {
            return false;
        };
        $this.saveUserPlay($this.data.now);
        $this.setData({
            id: event.currentTarget.dataset.id,
            musicContinue: false
        });
        $this.getDetail();
        $this.userHistory();
    },
    videoPrew: function() {
        var $this = this;
        if ($this.data.video_index == 0) {
            wx.showToast({
                title: "这是第一集了",
                icon: 'warn',
                duration: 2000
            });
            return false;
        } else {
            $this.saveUserPlay($this.data.now);
            $this.setData({
                id: $this.data.video_list[$this.data.video_index - 1].big_shot_video_id,
                musicContinue: false
            });
            $this.getDetail();
            $this.userHistory();
        }
    },
    videoNext: function() {
        var $this = this;
        if ($this.data.video_index == $this.data.video_list.length - 1) {
            wx.showToast({
                title: "这是最后一集了",
                icon: 'success',
                duration: 2000
            });
            return false;
        } else {
            $this.saveUserPlay($this.data.now);
            $this.setData({
                id: $this.data.video_list[$this.data.video_index + 1].big_shot_video_id,
                musicContinue: false
            });
            $this.getDetail();
            $this.userHistory();
        }
    },
    userComment: function(event) {
        var $this = this;
        if ($this.data.commentString.length > 0) {
            if (!$this.data.commentFlag) {
                wx.showToast({
                    title: "请勿重复提交!",
                    icon: 'success',
                    duration: 2000
                });
                return false;
            }
            $this.setData({
                commentFlag: false
            });
            wx.request({
                url: ajaxurl.api_user_create_bigshot_comment,
                data: {
                    "big_shot_video_id": $this.data.id,
                    "big_shot_id": $this.data.ablumId,
                    "token": app.globalData.token,
                    "content": $this.data.commentString
                },
                method: "POST",
                method: "POST",
                success: function(res) {
                    if (!res.data.code) {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'success',
                            duration: 2000
                        });
                        var tmpData = util.clone($this.data.comment_list);
                        var tmpStr = [res.data.data];
                        $this.setData({
                            comment_form_value: "",
                            comment_list: tmpStr.concat(tmpData)
                        });
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
        } else {
            wx.showToast({
                title: "评论不能为空!",
                icon: 'success',
                duration: 2000
            });
            return false;
        }
    },
    bindKeyInput: function(e) {
        this.setData({
            commentString: e.detail.value,
            commentFlag: true
        });
    },
    canUserTry() {
        var $this = this;
        //没有试听 &&没有试听
        if (!$this.data.is_pay && $this.data.detail.entity.free_duration == 0) {
            wx.hideLoading();
            wx.stopBackgroundAudio();
            if ($this.data.tryDig) {
                $this.setData({
                    tryDig: false
                });
                wx.showModal({
                    title: '免费试听结束',
                    content: '支付' + $this.data.detail.entity.price + '邦币可畅听整个课程',
                    showCancel: false,
                    confirmText: '点击支付',
                    confirmColor: '#3694cb',
                    method: "POST",
                    success: function(res) {
                        if (res.confirm) {
                            $this.userSubscribe();
                        } else if (res.cancel) {
                            wx.stopBackgroundAudio();
                        }
                        $this.setData({
                            tryDig: true
                        });
                    },
                    fail: function(res) {
                        $this.setData({
                            tryDig: true
                        });
                    }
                });
            } else {
                wx.stopBackgroundAudio();
            }
            if ($this.data.st) {
                clearInterval($this.data.st);
                $this.setData({
                    st: null
                });
            }
            return false;
        }
    },
    playMusicStatus(event) {
        var $this = this;
        wx.hideLoading();
        //是否可以试听
        $this.canUserTry();
        if ($this.data.st) {
            clearInterval($this.data.st);
            $this.setData({
                st: null
            });
        }
        var st = setInterval(function() {
                var times = "",
                    now = $this.data.now + 1;
                var min = Math.floor(now / 60);
                var second = now % 60;
                times = (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second);
                $this.setData({
                    now: $this.data.now + 1,
                    nowTimes: times
                });
                try {
                    var ppts = $this.data.ppts;
                    for (var i = 0; i < ppts.length; i++) {
                        if ($this.data.now > ppts[ppts.length - 1].time) {
                            $this.setData({
                                bg_img: ppts[ppts.length - 1].path,
                                now_ppt: ppts.length - 1
                            });
                            return fasle;
                        }
                        if ($this.data.now < ppts[0].time) {
                            $this.setData({
                                bg_img: ppts[0].path,
                                now_ppt: 0
                            });
                            return fasle;
                        }
                        if (ppts[i].time <= $this.data.now && $this.data.now < ppts[i + 1].time) {
                            $this.setData({
                                bg_img: ppts[i].path,
                                now_ppt: i
                            });
                            return fasle;
                        }
                    }
                } catch (error) {}
                if ($this.data.now >= $this.data.detail.entity.free_duration && $this.data.tryFlag) {
                    clearInterval(st);
                    wx.stopBackgroundAudio();
                    if ($this.data.tryDig) {
                        $this.setData({
                            tryDig: false
                        });
                        wx.showModal({
                            title: '免费试听结束',
                            content: '支付' + $this.data.detail.entity.price + '邦币可畅听整个课程',
                            showCancel: false,
                            confirmText: '点击支付',
                            confirmColor: '#3694cb',
                            method: "POST",
                            success: function(res) {
                                if (res.confirm) {
                                    $this.userSubscribe();
                                } else if (res.cancel) {
                                    wx.stopBackgroundAudio();
                                }
                                $this.setData({
                                    tryDig: true
                                });
                            },
                            fail: function(res) {
                                $this.setData({
                                    tryDig: true
                                });
                            }
                        });
                    } else {
                        wx.stopBackgroundAudio();
                    }
                    if ($this.data.st) {
                        clearInterval($this.data.st);
                        $this.setData({
                            st: null
                        });
                    }
                    return false;
                }
                if ($this.data.now >= $this.data.duration) {
                    clearInterval(st);
                    $this.videoNext();
                }
                //校正时间轴
                wx.getBackgroundAudioPlayerState({
                    success: function(res) {
                        var nowTime = res.currentPosition;
                        $this.setData({
                            now: nowTime || 0
                        });
                    }
                });
            },
            1000);
        $this.setData({
            st: st
        });
    },
    playMusicStopStatus() {
        var $this = this;
        //监听播放
        wx.onBackgroundAudioPlay(function() {
            if ($this.data.now >= $this.data.detail.entity.free_duration && $this.data.tryFlag) {
                wx.stopBackgroundAudio();
                if ($this.data.tryDig) {
                    $this.setData({
                        tryDig: false
                    });
                    wx.showModal({
                        title: '免费试听结束',
                        content: '支付' + $this.data.detail.entity.price + '邦币可畅听整个课程',
                        showCancel: false,
                        confirmText: '点击支付',
                        confirmColor: '#3694cb',
                        method: "POST",
                        success: function(res) {
                            if (res.confirm) {
                                $this.userSubscribe();
                            } else if (res.cancel) {
                                wx.stopBackgroundAudio();
                            }
                            $this.setData({
                                tryDig: true
                            });
                        },
                        fail: function(res) {
                            $this.setData({
                                tryDig: true
                            });
                        }
                    });
                } else {
                    wx.stopBackgroundAudio();
                }
                if ($this.data.st) {
                    clearInterval($this.data.st);
                    $this.setData({
                        st: null
                    });
                }
                return false;
            }
        });
        //监听暂停
        wx.onBackgroundAudioPause(function() {
            if ($this.data.now < $this.data.duration - 5) {
                $this.saveUserPlay($this.data.now);
            }
            if ($this.data.st) {
                clearInterval($this.data.st);
                $this.setData({
                    st: null
                });
            }
        });
        //监听结束
        wx.onBackgroundAudioStop(function() {
            if ($this.data.now < $this.data.duration - 5) {
                $this.saveUserPlay($this.data.now);
            }
            if ($this.data.st) {
                clearInterval($this.data.st);
                $this.setData({
                    st: null
                });
            }
        });
    },
    musicStep(event) {
        var $this = this;
        var nowTime = 0;
        //是否需要跳转时间
        if (event > 0) {
            nowTime = event;
        } else {
            nowTime = event.detail.value;
        }
        $this.setData({
            now: (nowTime || 0)
        });
        wx.seekBackgroundAudio({
            position: nowTime,
            success: function() {
                var times = "",
                    now = (nowTime || 0);
                var min = Math.floor(now / 60);
                var second = now % 60;
                times = (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second);
                $this.setData({
                    now: (nowTime || 0),
                    nowTimes: times
                });
                $this.playMusicStatus();
            }
        });
    },
    stepShow() {
        this.setData({
            stepShow: true
        });
    },
    stepHide() {
        this.setData({
            stepShow: false
        });
    },
    swiper(event) {
        console.log(event);
        var $this = this;
        if (event.detail.current == $this.data.now_ppt) {
            return false;
        }
        var $this = this,
            ppts = $this.data.ppts,
            index = event.detail.current,
            times = ppts[index].time;
        if (typeof(times) != 'undefined') {
            $this.musicStep(times);
            $this.setData({
                now: Number(times)
            });
            if ($this.data.ppt[$this.data.now]) {
                $this.setData({
                    bg_img: $this.data.ppt[$this.data.now]
                });
            }
        }
        return false;
    },
    hideMusicInfo(event) {
        var $this = this;
        if ($this.data.isHideMusicInfo) {
            $this.setData({
                isHideMusicInfo: false
            });
        } else {
            $this.setData({
                isHideMusicInfo: true
            });
        }
    },
    getMusicTruePlay: function() {
        var $this = this;
        $this.playMusicStatus();
    }
});