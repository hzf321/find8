
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bright.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f30aa1wRVDbLr8Lgi0ltz2', 'bright');
// script/bright.ts

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
var amuseStorage_1 = require("./tool/amuseStorage");
var amuseControl_1 = require("./tool/amuseControl");
var amuseGameData_1 = require("./tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bright = /** @class */ (function (_super) {
    __extends(bright, _super);
    function bright() {
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
    bright.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        amuseControl_1.amuseControl.adapterBg(this.loading_bg);
        amuseControl_1.amuseControl.adapterBg(this.loading_bg2);
        amuseControl_1.amuseControl.amuseSoundTool.initBtnClickEffect();
        amuseControl_1.amuseControl.amuseSoundTool.initbgmMusic();
        var playroomStorage = amuseStorage_1.amuseStorage.getStorageJSON(amuseGameData_1.storage.gamedata);
        if (playroomStorage) {
            amuseGameData_1.agData.userData = playroomStorage;
        }
        console.log(amuseGameData_1.agData.userData, " agData.userData");
        amuseControl_1.amuseControl.setsceneNode(this.node);
        if (!amuseGameData_1.agData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.YellowDialog, {
                callback: function () {
                    amuseGameData_1.agData.userData.isClause = true;
                    _this.gotoHallBox.active = true;
                    _this.loadingBox.active = false;
                    amuseGameData_1.agData.storageData();
                    cc.tween(_this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        }
        else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;
            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }
        amuseGameData_1.agData.setVideoFailCb(function () {
            cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                amuseControl_1.amuseControl.amuseResUtil.bindResAsset(toast, prefab);
                var parentNode = amuseControl_1.amuseControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    bright.prototype.onClick_gotoPlay = function () {
        var _this = this;
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
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
        cc.loader.loadResDir("sunImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('sunImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("fightImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('fightImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("meinvImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            amuseGameData_1.agData.levelAll = assets.length;
            console.log('meinvImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.director.preloadScene(amuseControl_1.strong.sunset, function (err, assets) {
            cc.log("game scene preloaded");
            _this.progressBarEvent();
        });
        cc.director.preloadScene(amuseControl_1.strong.flower, function (err, assets) {
            cc.log("hall scene preloaded");
            _this.progressBarEvent();
        });
    };
    bright.prototype.progressBarEvent = function () {
        this.nowNum++;
        if (this.nowNum == this.resNum) {
            this.scheduleOnce(function () {
                if (amuseGameData_1.agData.userData.isHall) {
                    cc.director.loadScene(amuseControl_1.strong.flower);
                }
                else {
                    amuseControl_1.amuseControl.imgId = amuseGameData_1.agData.userData.level;
                    cc.director.loadScene(amuseControl_1.strong.sunset);
                }
            }, 0.05);
        }
    };
    bright.prototype.showShiPing = function () {
        console.log("android---------------showShiPing------------------");
        amuseGameData_1.agData.showVideo(function () {
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        });
    };
    bright.prototype.showbanner = function () {
        console.log("android---------------showbanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    };
    bright.prototype.hidebanner = function () {
        console.log("android---------------hidebanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    };
    __decorate([
        property(cc.Node)
    ], bright.prototype, "loading_bg", void 0);
    __decorate([
        property(cc.Node)
    ], bright.prototype, "loading_bg2", void 0);
    __decorate([
        property(cc.Node)
    ], bright.prototype, "loadingBox", void 0);
    __decorate([
        property(cc.Node)
    ], bright.prototype, "gotoHallBox", void 0);
    __decorate([
        property(cc.Node)
    ], bright.prototype, "loading_play", void 0);
    __decorate([
        property(cc.Node)
    ], bright.prototype, "load_play", void 0);
    bright = __decorate([
        ccclass
    ], bright);
    return bright;
}(cc.Component));
exports.default = bright;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBR0QsMkJBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBR0QsMkJBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBM0tEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNRO0lBbEJULE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErSzFCO0lBQUQsYUFBQztDQS9LRCxBQStLQyxDQS9LbUMsRUFBRSxDQUFDLFNBQVMsR0ErSy9DO2tCQS9Lb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCB7IGFtdXNlU3RvcmFnZSB9IGZyb20gXCIuL3Rvb2wvYW11c2VTdG9yYWdlXCI7XG5pbXBvcnQgeyBzdHJvbmcsIGNpcmNsZSwgYW11c2VDb250cm9sIH0gZnJvbSBcIi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSwgc3RvcmFnZSB9IGZyb20gXCIuL3Rvb2wvYW11c2VHYW1lRGF0YVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuIFxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJyaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nX2JnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdfYmcyOiBjYy5Ob2RlID0gbnVsbDtcbiBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvdG9IYWxsQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdfcGxheTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkX3BsYXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByZXNOdW0gPSA2O1xuICAgIHByaXZhdGUgbm93TnVtID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFtdXNlQ29udHJvbC5hZGFwdGVyQmcodGhpcy5sb2FkaW5nX2JnKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmxvYWRpbmdfYmcyKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmluaXRCdG5DbGlja0VmZmVjdCgpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuaW5pdGJnbU11c2ljKCk7XG5cbiAgICAgICAgbGV0IHBsYXlyb29tU3RvcmFnZSA9IGFtdXNlU3RvcmFnZS5nZXRTdG9yYWdlSlNPTihzdG9yYWdlLmdhbWVkYXRhKTtcbiAgICAgICAgaWYgKHBsYXlyb29tU3RvcmFnZSkge1xuICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhID0gcGxheXJvb21TdG9yYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coIGFnRGF0YS51c2VyRGF0YSwgXCIgYWdEYXRhLnVzZXJEYXRhXCIpXG4gICAgICAgIGFtdXNlQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAoIWFnRGF0YS51c2VyRGF0YS5pc0NsYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0JveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuc2hvd0RpYWxvZyhjaXJjbGUuWWVsbG93RGlhbG9nLCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmlzQ2xhdXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWRpbmdfcGxheSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubG9hZGluZ19wbGF5KS50bygwLjUsIHsgc2NhbGU6IDEuMSB9KS50bygwLjUsIHsgc2NhbGU6IDEgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYWdEYXRhLnNldFZpZGVvRmFpbENiKCgpPT57XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi90b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuYmluZFJlc0Fzc2V0KHRvYXN0LCBwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gYW11c2VDb250cm9sLmdldHNjZW5lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2FzdCAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9hc3RMYWJlbCA9IHRvYXN0LmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk5vIGFkcyBhdCB0aGUgbW9tZW50XCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0b2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRvYXN0KS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuIFxuXG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX2dvdG9QbGF5KCkge1xuICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2FkX3BsYXkpLnRvKDIsIHthbmdsZTogLTM2MH0pLmNhbGwoKCk9PntcbiAgICAgICAgICAgIHRoaXMubG9hZF9wbGF5LmFuZ2xlID0gMDtcbiAgICAgICAgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgICBcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJwcmVmZWJcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJlZmViIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJzdW5JbWdcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VuSW1nIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJmaWdodEltZ1wiLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWdodEltZyBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwibWVpbnZJbWdcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZ0RhdGEubGV2ZWxBbGwgPSBhc3NldHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21laW52SW1nIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc3Ryb25nLnN1bnNldCwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJnYW1lIHNjZW5lIHByZWxvYWRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiaGFsbCBzY2VuZSBwcmVsb2FkZWRcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcm9ncmVzc0JhckV2ZW50KCkge1xuICAgICAgICB0aGlzLm5vd051bSsrO1xuICAgICAgICBpZiAodGhpcy5ub3dOdW0gPT0gdGhpcy5yZXNOdW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWdEYXRhLnVzZXJEYXRhLmlzSGFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3Ryb25nLmZsb3dlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmltZ0lkID0gYWdEYXRhLnVzZXJEYXRhLmxldmVsO1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3Ryb25nLnN1bnNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4wNSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvd1NoaVBpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLXNob3dTaGlQaW5nLS0tLS0tLS0tLS0tLS0tLS0tXCIpXG4gICAgICAgIGFnRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwienp6enp6enp6enp6enp6enp6enp3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1wiKTtcbiAgICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgc2hvd2Jhbm5lcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0tLS0tc2hvd2Jhbm5lci0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93YmFubmVyXCIsIFwiKClWXCIpO1xuICAgIH1cblxuXG4gICAgaGlkZWJhbm5lcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0tLS0taGlkZWJhbm5lci0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlYmFubmVyXCIsIFwiKClWXCIpO1xuICAgIH1cbn1cblxuIl19