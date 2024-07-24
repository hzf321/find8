"use strict";
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