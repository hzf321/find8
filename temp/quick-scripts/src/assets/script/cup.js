"use strict";
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