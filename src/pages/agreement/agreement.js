// my.js
// 获取应用实例
const util = require('../../utils/util');
const app = getApp();
const ajaxurl = app.getURL();
Page({
    data: {},
    onLoad() {},
    backPage(event) {
        wx.navigateBack(1);
    }
});