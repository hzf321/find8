
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/cup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f30aa1wRVDbLr8Lgi0ltz2', 'cup');
// script/cup.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var princessStorage_1 = require("./tool/princessStorage");
var princessControl_1 = require("./tool/princessControl");
var princessGameData_1 = require("./tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cup = /** @class */ (function (_super) {
    __extends(cup, _super);
    function cup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading_bg = null;
        _this.loading_bg2 = null;
        _this.loadingBox = null;
        _this.gotoHallBox = null;
        _this.loading_play = null;
        _this.load_play = null;
        _this.resNum = 6;
        _this.nowNum = 0;
        return _this;
    }
    cup.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        princessControl_1.princessControl.adapterBg(this.loading_bg);
        princessControl_1.princessControl.adapterBg(this.loading_bg2);
        princessControl_1.princessControl.princessSoundTool.initBtnClickEffect();
        princessControl_1.princessControl.princessSoundTool.initbgmMusic();
        var playroomStorage = princessStorage_1.princessStorage.getStorageJSON(princessGameData_1.storage.gamedata);
        if (playroomStorage) {
            princessGameData_1.pgData.userData = playroomStorage;
        }
        console.log(princessGameData_1.pgData.userData, " pgData.userData");
        princessControl_1.princessControl.setsceneNode(this.node);
        if (!princessGameData_1.pgData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.MiaPop, {
                callback: function () {
                    princessGameData_1.pgData.userData.isClause = true;
                    _this.gotoHallBox.active = true;
                    _this.loadingBox.active = false;
                    princessGameData_1.pgData.storageData();
                    cc.tween(_this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        }
        else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;
            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }
        princessGameData_1.pgData.setVideoFailCb(function () {
            cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                princessControl_1.princessControl.princessResUtil.bindResAsset(toast, prefab);
                var parentNode = princessControl_1.princessControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "Sorry, no ads available at the moment. Please try again later!";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    cup.prototype.onClick_gotoPlay = function () {
        var _this = this;
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        cc.tween(this.load_play).to(2, { angle: -360 }).call(function () {
            _this.load_play.angle = 0;
        }).union().repeatForever().start();
        cc.loader.loadResDir("prefeb", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("openImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('openImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("strongImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('strongImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("familyData", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            princessGameData_1.pgData.levelAll = assets.length;
            console.log('familyData assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.director.preloadScene(princessControl_1.delay.flask, function (err, assets) {
            cc.log("game scene preloaded");
            _this.progressBarEvent();
        });
        cc.director.preloadScene(princessControl_1.delay.glass, function (err, assets) {
            cc.log("hall scene preloaded");
            _this.progressBarEvent();
        });
    };
    cup.prototype.progressBarEvent = function () {
        this.nowNum++;
        if (this.nowNum == this.resNum) {
            this.scheduleOnce(function () {
                if (princessGameData_1.pgData.userData.isHall) {
                    cc.director.loadScene(princessControl_1.delay.glass);
                }
                else {
                    princessControl_1.princessControl.imgId = princessGameData_1.pgData.userData.level;
                    cc.director.loadScene(princessControl_1.delay.flask);
                }
            }, 0.05);
        }
    };
    cup.prototype.showShiPing = function () {
        console.log("android---------------showShiPing------------------");
        princessGameData_1.pgData.showVideo(function () {
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        });
    };
    cup.prototype.showbanner = function () {
        console.log("android---------------showbanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    };
    cup.prototype.hidebanner = function () {
        console.log("android---------------hidebanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    };
    __decorate([
        property(cc.Node)
    ], cup.prototype, "loading_bg", void 0);
    __decorate([
        property(cc.Node)
    ], cup.prototype, "loading_bg2", void 0);
    __decorate([
        property(cc.Node)
    ], cup.prototype, "loadingBox", void 0);
    __decorate([
        property(cc.Node)
    ], cup.prototype, "gotoHallBox", void 0);
    __decorate([
        property(cc.Node)
    ], cup.prototype, "loading_play", void 0);
    __decorate([
        property(cc.Node)
    ], cup.prototype, "load_play", void 0);
    cup = __decorate([
        ccclass
    ], cup);
    return cup;
}(cc.Component));
exports.default = cup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtRCxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBR0Qsd0JBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBR0Qsd0JBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBM0tEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNRO0lBbEJULEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0ErS3ZCO0lBQUQsVUFBQztDQS9LRCxBQStLQyxDQS9LZ0MsRUFBRSxDQUFDLFNBQVMsR0ErSzVDO2tCQS9Lb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCB7IHByaW5jZXNzU3RvcmFnZSB9IGZyb20gXCIuL3Rvb2wvcHJpbmNlc3NTdG9yYWdlXCI7XG5pbXBvcnQgeyBkZWxheSwgZGVsbCwgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbmltcG9ydCB7IHBnRGF0YSwgc3RvcmFnZSB9IGZyb20gXCIuL3Rvb2wvcHJpbmNlc3NHYW1lRGF0YVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuIFxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGN1cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nX2JnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdfYmcyOiBjYy5Ob2RlID0gbnVsbDtcbiBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvdG9IYWxsQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdfcGxheTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkX3BsYXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByZXNOdW0gPSA2O1xuICAgIHByaXZhdGUgbm93TnVtID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5hZGFwdGVyQmcodGhpcy5sb2FkaW5nX2JnKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmxvYWRpbmdfYmcyKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmluaXRCdG5DbGlja0VmZmVjdCgpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuaW5pdGJnbU11c2ljKCk7XG5cbiAgICAgICAgbGV0IHBsYXlyb29tU3RvcmFnZSA9IHByaW5jZXNzU3RvcmFnZS5nZXRTdG9yYWdlSlNPTihzdG9yYWdlLmdhbWVkYXRhKTtcbiAgICAgICAgaWYgKHBsYXlyb29tU3RvcmFnZSkge1xuICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhID0gcGxheXJvb21TdG9yYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coIHBnRGF0YS51c2VyRGF0YSwgXCIgcGdEYXRhLnVzZXJEYXRhXCIpXG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAoIXBnRGF0YS51c2VyRGF0YS5pc0NsYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0JveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd0RpYWxvZyhkZWxsLk1pYVBvcCwge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBnRGF0YS51c2VyRGF0YS5pc0NsYXVzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ290b0hhbGxCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5sb2FkaW5nX3BsYXkpLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0pLnRvKDAuNSwgeyBzY2FsZTogMSB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWRpbmdfcGxheSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHBnRGF0YS5zZXRWaWRlb0ZhaWxDYigoKT0+e1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvdG9hc3RcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmJpbmRSZXNBc3NldCh0b2FzdCwgcHJlZmFiKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHByaW5jZXNzQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9hc3QgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHRvYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0b2FzdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTb3JyeSwgbm8gYWRzIGF2YWlsYWJsZSBhdCB0aGUgbW9tZW50LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIVwiO1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0b2FzdCkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiBcblxuICAgIH1cblxuXG4gICAgb25DbGlja19nb3RvUGxheSgpIHtcbiAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9hZF9wbGF5KS50bygyLCB7YW5nbGU6IC0zNjB9KS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmxvYWRfcGxheS5hbmdsZSA9IDA7XG4gICAgICAgIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwicHJlZmViXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlYiBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwib3BlbkltZ1wiLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuSW1nIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJzdHJvbmdJbWdcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3Ryb25nSW1nIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJmYW1pbHlEYXRhXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGdEYXRhLmxldmVsQWxsID0gYXNzZXRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYW1pbHlEYXRhIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoZGVsYXkuZmxhc2ssIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiZ2FtZSBzY2VuZSBwcmVsb2FkZWRcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShkZWxheS5nbGFzcywgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJoYWxsIHNjZW5lIHByZWxvYWRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByb2dyZXNzQmFyRXZlbnQoKSB7XG4gICAgICAgIHRoaXMubm93TnVtKys7XG4gICAgICAgIGlmICh0aGlzLm5vd051bSA9PSB0aGlzLnJlc051bSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEuaXNIYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLmltZ0lkID0gcGdEYXRhLnVzZXJEYXRhLmxldmVsO1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZGVsYXkuZmxhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuMDUpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob3dTaGlQaW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS0tLS1zaG93U2hpUGluZy0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBwZ0RhdGEuc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInp6enp6enp6enp6enp6enp6enp6d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dcIik7XG4gICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHNob3diYW5uZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLXNob3diYW5uZXItLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd2Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICB9XG5cblxuICAgIGhpZGViYW5uZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLWhpZGViYW5uZXItLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICB9XG59XG5cbiJdfQ==