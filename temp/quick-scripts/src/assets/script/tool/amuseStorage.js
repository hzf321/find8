"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'amuseStorage');
// script/tool/amuseStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amuseStorage = void 0;
var amuseStorage = /** @class */ (function () {
    function amuseStorage() {
    }
    amuseStorage.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    amuseStorage.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    amuseStorage.setBoolByKey = function (key, boolValue) {
        this.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    amuseStorage.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    amuseStorage.setIntegerByKey = function (key, defaultValue) {
        this.setStringByKey(key, defaultValue.toString());
    };
    amuseStorage.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    amuseStorage.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    amuseStorage.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    amuseStorage.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return amuseStorage;
}());
exports.amuseStorage = amuseStorage;

cc._RF.pop();