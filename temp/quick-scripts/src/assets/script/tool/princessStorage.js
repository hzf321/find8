"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'princessStorage');
// script/tool/princessStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessStorage = void 0;
var princessStorage = /** @class */ (function () {
    function princessStorage() {
    }
    princessStorage.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    princessStorage.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    princessStorage.setBoolByKey = function (key, boolValue) {
        this.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    princessStorage.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    princessStorage.setIntegerByKey = function (key, defaultValue) {
        this.setStringByKey(key, defaultValue.toString());
    };
    princessStorage.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    princessStorage.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    princessStorage.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    princessStorage.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return princessStorage;
}());
exports.princessStorage = princessStorage;

cc._RF.pop();