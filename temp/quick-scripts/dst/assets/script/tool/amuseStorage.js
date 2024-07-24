
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTRDQSxDQUFDO0lBM0NpQiwyQkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsR0FBVztRQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFYSwyQkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsWUFBcUI7UUFDM0QsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBRWEseUJBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLFNBQWtCO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVhLHlCQUFZLEdBQTFCLFVBQTJCLEdBQVcsRUFBRSxZQUFzQjtRQUMxRCxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3hFLENBQUM7SUFFYSw0QkFBZSxHQUE3QixVQUE4QixHQUFXLEVBQUUsWUFBb0I7UUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVhLDRCQUFlLEdBQTdCLFVBQThCLEdBQVcsRUFBRSxZQUFvQjtRQUMzRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7SUFFYSwyQkFBYyxHQUE1QixVQUE2QixHQUFXO1FBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLDJCQUFjLEdBQTVCLFVBQTZCLEdBQUcsRUFBRSxJQUFJO1FBQ2xDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFYSx3QkFBVyxHQUF6QixVQUEwQixHQUFXO1FBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBhbXVzZVN0b3JhZ2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdHJpbmdCeUtleShrZXk6IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RyaW5nQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogXCJcIjtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/IHRlbXBWYWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEJvb2xCeUtleShrZXk6IHN0cmluZywgYm9vbFZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJpbmdCeUtleShrZXksIChib29sVmFsdWUgPyBcIjFcIiA6IFwiMFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCb29sQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/ICh0ZW1wVmFsdWUgPT0gXCIxXCIgPyB0cnVlIDogZmFsc2UpIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW50ZWdlckJ5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RyaW5nQnlLZXkoa2V5LCBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRlZ2VyQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/IHBhcnNlSW50KHRlbXBWYWx1ZSkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdG9yYWdlSlNPTihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA8IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBpZiAoZGF0YSkgeyByZXR1cm4gSlNPTi5wYXJzZShkYXRhKSB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFN0b3JhZ2VKU09OKGtleSwgZGF0YSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUJ5S2V5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==