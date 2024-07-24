
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/bright');
require('./assets/script/dialog/OrangeDialog');
require('./assets/script/dialog/PlanetDialog');
require('./assets/script/dialog/PurpleDialog');
require('./assets/script/dialog/RocketDiaolg');
require('./assets/script/dialog/SpiritDialog');
require('./assets/script/dialog/SummerDialog');
require('./assets/script/dialog/YellowDialog');
require('./assets/script/flower');
require('./assets/script/prefeb/newhand');
require('./assets/script/sunset');
require('./assets/script/tool/amuseControl');
require('./assets/script/tool/amuseGameData');
require('./assets/script/tool/amuseResBind');
require('./assets/script/tool/amuseResUtil');
require('./assets/script/tool/amuseScroll');
require('./assets/script/tool/amuseSoundTool');
require('./assets/script/tool/amuseStorage');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/SummerDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'SummerDialog');
// script/dialog/SummerDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SummerDialog = /** @class */ (function (_super) {
    __extends(SummerDialog, _super);
    function SummerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    SummerDialog.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    SummerDialog.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    SummerDialog.prototype.onClick_AD_btn = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                amuseGameData_1.agData.closeBanner();
            });
        });
    };
    SummerDialog.prototype.onClick_restart = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    SummerDialog = __decorate([
        ccclass
    ], SummerDialog);
    return SummerDialog;
}(cc.Component));
exports.default = SummerDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1N1bW1lckRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBL0JHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWEsSUFBSSxDQUFDOztJQThCckMsQ0FBQztJQTVCRyw0QkFBSyxHQUFMO1FBQ0ksc0JBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7SUFHRCxxQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRywyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxzQkFBTSxDQUFDLFNBQVMsQ0FBQztZQUNiLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLHNCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFoQ2dCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpQ2hDO0lBQUQsbUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBaUNyRDtrQkFqQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbXVzZUNvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSB9IGZyb20gXCIuLi90b29sL2FtdXNlR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bW1lckRpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBBRGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcmVzdGFydENhbGxCYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgYWdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG5cbiAgICAgICAgdGhpcy5BRGNhbGxiYWNrID0gZGF0YS5BRGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnJlc3RhcnRDYWxsQmFjayA9IGRhdGEucmVzdGFydENhbGxCYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19BRF9idG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBhZ0RhdGEuc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuQURjYWxsYmFjayAmJiB0aGlzLkFEY2FsbGJhY2soKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgYWdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19yZXN0YXJ0KCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBhZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/newhand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a1e0lTY71PmJruz9bjJlQK', 'newhand');
// script/prefeb/newhand.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var newhand = /** @class */ (function (_super) {
    __extends(newhand, _super);
    function newhand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dong1_top = null;
        _this.dongdong1_bottom = null;
        _this.hand1 = null;
        _this.dong2_top = null;
        _this.dongdong2_bottom = null;
        _this.hand2 = null;
        return _this;
    }
    newhand.prototype.start = function () {
    };
    newhand.prototype.showdong1 = function () {
        var _this = this;
        this.dong1_top.active = true;
        this.dongdong1_bottom.active = true;
        this.hand1.active = false;
        this.dong1_top.width = 500;
        this.dong1_top.height = 500;
        this.dongdong1_bottom.width = 500;
        this.dongdong1_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong1_top);
        cc.Tween.stopAllByTarget(this.dongdong1_bottom);
        cc.tween(this.dong1_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand1.active = true;
        }).start();
    };
    newhand.prototype.hidedong1 = function () {
        this.dong1_top.active = false;
        this.dongdong1_bottom.active = false;
        this.hand1.active = false;
    };
    newhand.prototype.showdong2 = function () {
        var _this = this;
        this.dong2_top.active = true;
        this.dongdong2_bottom.active = true;
        this.hand2.active = false;
        this.dong2_top.width = 500;
        this.dong2_top.height = 500;
        this.dongdong2_bottom.width = 500;
        this.dongdong2_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong2_top);
        cc.Tween.stopAllByTarget(this.dongdong2_bottom);
        cc.tween(this.dong2_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand2.active = true;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong1_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong1_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong2_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong2_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand2", void 0);
    newhand = __decorate([
        ccclass
    ], newhand);
    return newhand;
}(cc.Component));
exports.default = newhand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL25ld2hhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RUM7UUF6RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUl0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZERyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FB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U0FBUyxHQTRFaEQ7a0JBNUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2hhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZzFfdG9wOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvbmdkb25nMV9ib3R0b206IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkb25nMl90b3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZ2RvbmcyX2JvdHRvbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dkb25nMSgpIHtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRvbmcxX3RvcC53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuZG9uZ2RvbmcxX2JvdHRvbS53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmhlaWdodCA9IDUwMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZzFfdG9wKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSk7XG5cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRvbmcxX3RvcCkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLmRlbGF5KDAuMSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgaGlkZWRvbmcxKCkge1xuICAgICAgICB0aGlzLmRvbmcxX3RvcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2hvd2RvbmcyKCkge1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZG9uZzJfdG9wLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5kb25nZG9uZzJfYm90dG9tLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nMl90b3ApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nZG9uZzJfYm90dG9tKTtcblxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZzJfdG9wKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb25nZG9uZzJfYm90dG9tKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuZGVsYXkoMC4xKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57cabiblbxOB7KtkV6MiZG/', 'amuseGameData');
// script/tool/amuseGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.agData = void 0;
var amuseStorage_1 = require("./amuseStorage");
var onCloseFinishCb = null;
var onClosefailCb = null;
var amuseGameData = /** @class */ (function () {
    function amuseGameData() {
        this.privacyPolicyUrl = "https://sites.google.com/view/difference-discoverer-privacy-/halaman-muka";
        this.termsofServiceUrl = "https://sites.google.com/view/difference-discoverer-terms-of/halaman-muka";
        this.levelAll = 30;
        this.userData = {
            isClause: false,
            tishiNum: 1,
            level: 1,
            isHall: false,
            isGudie: false,
            finishLevel5: false,
            gameName: "StrongBanana",
            avatarId: 1,
        };
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }
    amuseGameData.getInstance = function () {
        if (this._instance == null) {
            this._instance = new amuseGameData();
        }
        return this._instance;
    };
    amuseGameData.prototype.storageData = function () {
        amuseStorage_1.amuseStorage.setStorageJSON(storage.gamedata, this.userData);
    };
    amuseGameData.prototype.setVideoFailCb = function (cb) {
        // onClosefailCb = null;
        // onClosefailCb = cb;
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    amuseGameData.prototype.showVideo = function (finishCb) {
        finishCb();
        return;
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("FindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    amuseGameData.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    };
    //关闭banner
    amuseGameData.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    };
    //打开url
    amuseGameData.prototype.openUrl = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    };
    amuseGameData.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    amuseGameData.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
    };
    amuseGameData._instance = null;
    return amuseGameData;
}());
exports.agData = amuseGameData.getInstance();
var storage;
(function (storage) {
    storage["gamedata"] = "gamedata";
})(storage = exports.storage || (exports.storage = {}));
var sound;
(function (sound) {
    sound["bgm"] = "bgm";
    sound["click"] = "click";
    sound["correct"] = "correct";
    sound["err"] = "err";
    sound["fail"] = "fail";
    sound["win"] = "win";
})(sound = exports.sound || (exports.sound = {}));
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onClosefailCb']();
};
window['onClosefailCb'] = function () {
};
//游戏暂停
window['gamestop'] = function () {
};
//游戏恢复
window['gamerecovery'] = function () {
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZUdhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUE4QztBQUU5QyxJQUFJLGVBQWUsR0FBZSxJQUFJLENBQUM7QUFDdkMsSUFBSSxhQUFhLEdBQWUsSUFBSSxDQUFDO0FBQ3JDO0lBWUk7UUFNQSxxQkFBZ0IsR0FBVywyRUFBMkUsQ0FBQztRQUN2RyxzQkFBaUIsR0FBVywyRUFBMkUsQ0FBQztRQUV4RyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBUTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFsQkUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFaYSx5QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUF3QkQsbUNBQVcsR0FBWDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHRCxzQ0FBYyxHQUFkLFVBQWUsRUFBYztRQUN6Qix3QkFBd0I7UUFDeEIsc0JBQXNC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d0JBQWUsQ0FBQTtJQUNmLDRCQUFtQixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFHRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFHRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUc7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUVELE1BQU07QUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgeyBhbXVzZVN0b3JhZ2UgfSBmcm9tIFwiLi9hbXVzZVN0b3JhZ2VcIjtcblxubGV0IG9uQ2xvc2VGaW5pc2hDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5sZXQgb25DbG9zZWZhaWxDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5jbGFzcyBhbXVzZUdhbWVEYXRhIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW11c2VHYW1lRGF0YSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IGFtdXNlR2FtZURhdGEge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgYW11c2VHYW1lRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2RpZmZlcmVuY2UtZGlzY292ZXJlci1wcml2YWN5LS9oYWxhbWFuLW11a2FcIjtcbiAgICB0ZXJtc29mU2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9kaWZmZXJlbmNlLWRpc2NvdmVyZXItdGVybXMtb2YvaGFsYW1hbi1tdWthXCI7XG5cbiAgICBsZXZlbEFsbDogbnVtYmVyID0gMzA7XG4gICAgdXNlckRhdGE6IGFueSA9IHtcbiAgICAgICAgaXNDbGF1c2U6IGZhbHNlLCAgICAvL+aYr+WQpuaJk+W8gOi/h+makOengeWNj+iuriAgICBcbiAgICAgICAgdGlzaGlOdW06IDEsICAgICAgICAvL+aPkOekuuasoeaVsFxuICAgICAgICBsZXZlbDogMSwgICAgICAgICAgIC8v5b2T5YmN5YWz5Y2hXG4gICAgICAgIGlzSGFsbDogZmFsc2UsICAgICAgLy/mmK/lkKbov5Tlm57ov4flpKfljoVcbiAgICAgICAgaXNHdWRpZTogZmFsc2UsICAgICAgLy/mmK/lkKbmiZPlvIDov4fmlrDmiYvlvJXlr7xcbiAgICAgICAgZmluaXNoTGV2ZWw1OiBmYWxzZSwgIC8v5piv5ZCm5a6M5oiQ6L+H56ysNeWFs1xuICAgICAgICBnYW1lTmFtZTogXCJTdHJvbmdCYW5hbmFcIiwgICAvL+eOqeWutuWQjeWtl1xuICAgICAgICBhdmF0YXJJZDogMSwgICAgICAgICAvL+WktOWDj2lkXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBhbXVzZVN0b3JhZ2Uuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyBvbkNsb3NlZmFpbENiID0gbnVsbDtcbiAgICAgICAgLy8gb25DbG9zZWZhaWxDYiA9IGNiO1xuXG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gbnVsbDtcbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gID0gY2I7XG4gICAgfVxuXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgZmluaXNoQ2IoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLeeci+W5v+WRilwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd1NoaVBpbmdcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBudWxsO1xuICAgICAgICAgICAgb25DbG9zZUZpbmlzaENiID0gZmluaXNoQ2I7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19JT1MgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJGaW5kQWRNZ3JcIiwgXCJsb2FkUmV3YXJkXCIpO1xuICAgICAgICAgICAgd2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9IG51bGw7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbmlzaENiKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aJk+W8gGJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93YmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lhbPpl61iYW5uZXJcbiAgICBjbG9zZUJhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImhpZGViYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aJk+W8gHVybFxuICAgIG9wZW5VcmwoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJvcGVuVXJsXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHNldEdhbWVzdG9wKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZXN0b3AnXSA9IGZ1bmM7XG4gICAgfVxuXG4gICAgc2V0R2FtZXJlY292ZXJ5KGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZXJlY292ZXJ5J10gPSBmdW5jO1xuICAgIH1cblxufVxuXG5leHBvcnQgbGV0IGFnRGF0YSA9IGFtdXNlR2FtZURhdGEuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gc3RvcmFnZSB7XG4gICAgZ2FtZWRhdGEgPSBcImdhbWVkYXRhXCIsXG59XG5cbmV4cG9ydCBlbnVtIHNvdW5kIHtcbiAgICBiZ20gPSBcImJnbVwiLFxuICAgIGNsaWNrID0gXCJjbGlja1wiLFxuICAgIGNvcnJlY3QgPSBcImNvcnJlY3RcIixcbiAgICBlcnIgPSBcImVyclwiLFxuICAgIGZhaWwgPSBcImZhaWxcIixcbiAgICB3aW4gPSBcIndpblwiLFxufVxuXG5cbndpbmRvd1snb25DbG9zZUZpbmlzaENiJ10gPSAoKSA9PiB7XG4gICBcbn1cblxuLyoqc2Rr6LCD55SoanPph4zpnaJ3aW5kb3flhazkvJfnmoTlh73mlbAgKi9cbndpbmRvd1snb25DbG9zZVZkaWVvRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgd2luZG93WydvbkNsb3NlRmluaXNoQ2InXSgpXG59XG5cblxuLyoqc2Rr6LCD55SoanPph4zpnaJ3aW5kb3flhazkvJfnmoTlh73mlbAgKi9cbndpbmRvd1snb25DbG9zZVZkaWVvZmFpbENiJ10gPSAoKSA9PiB7XG4gICAgLy8gaWYgKGlzUGxheU11c2ljKSB7XG4gICAgLy8gICAgIEF1ZGlvQ3RyLmJnKCk7XG4gICAgLy8gfVxuICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddKClcbn1cblxud2luZG93WydvbkNsb3NlZmFpbENiJ10gPSAoKSA9PiB7XG4gICBcbn1cblxuLy/muLjmiI/mmoLlgZxcbndpbmRvd1snZ2FtZXN0b3AnXSA9ICgpID0+IHtcblxufVxuXG5cbi8v5ri45oiP5oGi5aSNXG53aW5kb3dbJ2dhbWVyZWNvdmVyeSddID0gKCkgPT4ge1xuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/YellowDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'YellowDialog');
// script/dialog/YellowDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YellowDialog = /** @class */ (function (_super) {
    __extends(YellowDialog, _super);
    function YellowDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    YellowDialog.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    YellowDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    YellowDialog.prototype.onClick_Agreen = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    YellowDialog.prototype.onClick_PrivacyPolicy_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(amuseGameData_1.agData.privacyPolicyUrl);
    };
    YellowDialog.prototype.onClick_Termsofservicebtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(amuseGameData_1.agData.termsofServiceUrl);
    };
    YellowDialog = __decorate([
        ccclass
    ], YellowDialog);
    return YellowDialog;
}(cc.Component));
exports.default = YellowDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1llbGxvd0RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkJDO1FBM0JHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBMkI5QixDQUFDO0lBekJHLDRCQUFLLEdBQUw7UUFDSSxzQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsc0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0RBQXlCLEdBQXpCO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnREFBeUIsR0FBekI7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTNCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZCaEM7SUFBRCxtQkFBQztDQTdCRCxBQTZCQyxDQTdCeUMsRUFBRSxDQUFDLFNBQVMsR0E2QnJEO2tCQTdCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCB7IGFtdXNlQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2FtdXNlQ29udHJvbFwiO1xuaW1wb3J0IHsgYWdEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvYW11c2VHYW1lRGF0YVwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVsbG93RGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgYWdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfQWdyZWVuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKClcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgYWdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuIFxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChhZ0RhdGEucHJpdmFjeVBvbGljeVVybCk7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKGFnRGF0YS50ZXJtc29mU2VydmljZVVybCk7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/sunset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'sunset');
// script/sunset.ts

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
var newhand_1 = require("./prefeb/newhand");
var amuseControl_1 = require("./tool/amuseControl");
var amuseGameData_1 = require("./tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["discover"] = 0] = "discover";
    GameState[GameState["wrong"] = 1] = "wrong";
    GameState[GameState["repeat"] = 2] = "repeat";
})(GameState || (GameState = {}));
var sunset = /** @class */ (function (_super) {
    __extends(sunset, _super);
    function sunset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.pipeibg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab2 = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.heartBox = null;
        _this.emptyheartBox = null;
        _this.pipeiNode = null;
        _this.movePaly1 = null;
        _this.movePaly2 = null;
        _this.userIcon1 = null;
        _this.userIcon2 = null;
        _this.levelNum = null;
        _this.soundHallBtn = null;
        _this.musicHallBtn = null;
        _this.meinv_Data = [];
        _this.meinvY = 175;
        _this.meinvScale = 0.372;
        _this.yeziAllNum = 10;
        _this.meinvFindNum = 0;
        _this.meinvOutTime = 0;
        _this.lovelyIsPrompt = false;
        _this.timer = null;
        _this.isStop = false;
        _this.oneErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        _this.duishouIcon = null;
        _this.gameoverBool = false;
        _this.move1Y = 128;
        _this.move2Y = 0;
        return _this;
    }
    sunset.prototype.start = function () {
        var _this = this;
        amuseGameData_1.agData.setGamestop(function () {
            amuseControl_1.amuseControl.amuseSoundTool.pauseAll();
        });
        amuseGameData_1.agData.setGamerecovery(function () {
            amuseControl_1.amuseControl.amuseSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.resetAll();
        amuseControl_1.amuseControl.setsceneNode(this.node);
        amuseControl_1.amuseControl.adapterBg(this.bg);
        amuseControl_1.amuseControl.adapterBg(this.pipeibg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        // this.checkNewHand();
        this.pipeiAnim();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    sunset.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    sunset.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.meinv_Data = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.oneErr = false;
        this.isStop = false;
        this.timer = null;
        this.lovelyIsPrompt = false;
        this.meinvFindNum = 0;
        this.init();
        this.gameoverBool = false;
    };
    sunset.prototype.checkNewHand = function () {
        var _this = this;
        if (amuseGameData_1.agData.userData.isGudie || amuseControl_1.amuseControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    sunset.prototype.pipeiAnim = function () {
        var _this = this;
        this.pipeiNode.active = true;
        var palyer_1 = this.pipeiNode.getChildByName("palyer_1");
        var palyer_2 = this.pipeiNode.getChildByName("palyer_2");
        var iconBox = palyer_2.getChildByName("mask");
        var finishTemp = false;
        var _loop_1 = function (i) {
            var icon = iconBox.children[i];
            var tempNum = amuseControl_1.amuseControl.getRandomInt(1, 19);
            amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(function () {
                if (icon.y == -120) {
                    var randomNum = amuseControl_1.amuseControl.getRandomInt(1, 19);
                    amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (randomNum), icon.getComponent(cc.Sprite));
                    icon.y = 240;
                }
            }).union().repeat(20).delay(0.5).call(function () {
                if (!finishTemp) {
                    cc.log("结束");
                    _this.checkNewHand();
                    for (var i_1 = 0; i_1 < iconBox.children.length; i_1++) {
                        var ele = iconBox.children[i_1];
                        if (ele.y == 0) {
                            _this.duishouIcon = ele.getComponent(cc.Sprite).spriteFrame;
                            cc.find("mask/icon", _this.movePaly2).getComponent(cc.Sprite).spriteFrame = _this.duishouIcon;
                            _this.autoFind();
                        }
                    }
                    _this.pipeiNode.active = false;
                }
                finishTemp = true;
            }).start();
        };
        for (var i = 0; i < iconBox.children.length; i++) {
            _loop_1(i);
        }
    };
    sunset.prototype.autoFind = function () {
        var _this = this;
        var num = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        if (parseInt(num) >= 10)
            return;
        if (this.gameoverBool)
            return;
        var minTime = 3; // 最小时间间隔（秒）
        var maxTime = 5; // 最大时间间隔（秒）
        if (parseInt(num) == 9) {
            minTime = 300;
            maxTime = 300;
        }
        var randomTime = Math.random() * (maxTime - minTime) + minTime; // 生成随机时间间隔
        this.scheduleOnce(function () {
            //执行的逻辑代码
            _this.findNodeNum(_this.movePaly2, true);
            // 执行完逻辑后再次调度下一个随机定时器
            _this.autoFind();
        }, randomTime);
    };
    sunset.prototype.findNodeNum = function (parentNode, bool) {
        var _this = this;
        var finishBox = parentNode.getChildByName("finishBox");
        var num = parentNode.getChildByName("num").getComponent(cc.Label);
        var tmepIndex = 0;
        for (var i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            var item = finishBox.children[i];
            var nofinish = item.getChildByName("nofinish");
            var finish = item.getChildByName("finish");
            if (nofinish.active) {
                nofinish.active = false;
                finish.active = true;
                num.string = tmepIndex + "";
                break;
            }
        }
        if (bool) {
            if (parseInt(num.string) >= 10) {
                this.mask.active = true;
                this.gameoverBool = true;
                this.scheduleOnce(function () {
                    amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                        state: false,
                        img: _this.duishouIcon,
                        meinv_Data: _this.meinv_Data,
                        callback: function () {
                            if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                                amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                                _this.resetAll();
                                _this.init();
                                _this.startDownTime();
                                _this.loadRes();
                            }
                            else {
                                amuseGameData_1.agData.userData.isHall = true;
                                amuseGameData_1.agData.storageData();
                                cc.director.loadScene(amuseControl_1.strong.flower);
                            }
                        }
                    });
                }, 0.5);
            }
        }
        var num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        var num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        if (parseInt(num1) >= parseInt(num2)) {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        }
        else {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        }
    };
    sunset.prototype.init = function () {
        this.levelNum.string = "" + amuseControl_1.amuseControl.imgId;
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            amuseControl_1.amuseControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon1);
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        this.tishi_qipao.active = false;
        // this.meinvOutTime = this.getDownTime();
        // let time = amuseControl.timeChange(this.meinvOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        for (var i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
        var finishBox1 = this.movePaly1.getChildByName("finishBox");
        for (var i = 0; i < finishBox1.children.length; i++) {
            var item = finishBox1.children[i];
            item.getChildByName("finish").active = false;
        }
        var finishBox2 = this.movePaly2.getChildByName("finishBox");
        for (var i = 0; i < finishBox2.children.length; i++) {
            var item = finishBox2.children[i];
            item.getChildByName("finish").active = false;
        }
    };
    //开启倒计时
    sunset.prototype.startDownTime = function () {
        return;
        if (this.meinvOutTime > 0) {
            var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    sunset.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.meinvOutTime--;
        var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.meinvOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(amuseGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    sunset.prototype.errReduceTime = function () {
        var _this = this;
        var findheart = false;
        for (var i = this.heartBox.children.length - 1; i >= 0; i--) {
            var heartItem_1 = this.heartBox.children[i];
            var emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem_1.active) {
                findheart = true;
                heartItem_1.active = false;
                emptyheartItem.active = true;
                var anim = emptyheartItem.getComponent(sp.Skeleton);
                amuseControl_1.amuseControl.playSp(anim, "posui");
                break;
            }
        }
        return;
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SummerDialog, {
                ADcallback: function () {
                    // this.meinvOutTime = 60;
                    // agData.userData.tishiNum++;
                    amuseGameData_1.agData.storageData();
                    _this.changeQiPaoNum();
                    _this.startDownTime();
                    for (var i = 0; i < _this.heartBox.children.length; i++) {
                        _this.heartBox.children[i].active = true;
                        _this.emptyheartBox.children[i].active = false;
                    }
                },
                restartCallBack: function () {
                    _this.resetAll(true);
                    _this.init();
                    _this.startDownTime();
                    cc.log(_this.meinv_Data, "this.meinv_Data");
                    for (var i = 0; i < _this.meinv_Data.length; i++) {
                        _this.meinv_Data[i].isFind = false;
                    }
                }
            });
        }
        return;
        //时间
        if (!this.oneErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.meinvOutTime -= reduceTime;
        if (this.meinvOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(amuseGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    sunset.prototype.changeQiPaoNum = function () {
        if (amuseGameData_1.agData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = amuseGameData_1.agData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    sunset.prototype.loadRes = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + amuseControl_1.amuseControl.imgId, this.originalImg.getComponent(cc.Sprite));
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("fightImg/" + "fight_" + amuseControl_1.amuseControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("meinvImg/moon" + amuseControl_1.amuseControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.meinv_Data = jsonData.path;
                for (var i = 0; i < _this.meinv_Data.length; i++) {
                    _this.meinv_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.meinv_Data.length; i++) {
                //     let data = this.meinv_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.meinv_Data.length; i++) {
                //     let data = this.meinv_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    sunset.prototype.yeziLight = function (pos) {
        var _this = this;
        var finishBox = this.movePaly1.getChildByName("finishBox");
        var tmepIndex = 0;
        var targetEle = null;
        for (var i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            var item = finishBox.children[i];
            var nofinish = item.getChildByName("nofinish");
            if (nofinish.active) {
                targetEle = item;
                break;
            }
        }
        if (!cc.isValid(targetEle))
            return;
        var anim = this.yeziBox.children[this.meinvFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = amuseControl_1.amuseControl.changePos(targetEle, tuowei);
        var time = 1;
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.findNodeNum(_this.movePaly1);
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            amuseControl_1.amuseControl.playSp(anim, "2_bianliang");
            amuseControl_1.amuseControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    sunset.prototype.findSignSucc = function (targetPos, agData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.meinvScale + this.meinvY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.meinvScale - this.meinvY;
            }
            var centerPos = cc.v3(targetPos.x * this.meinvScale, imgY);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = agData.blockSize.wid * this.meinvScale;
            gameFind.height = agData.blockSize.hei * this.meinvScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    sunset.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.meinvY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.meinvY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    sunset.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.discover) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.meinvFindNum = this.meinvFindNum + 1;
            this.findSignSucc(cc.v3(data.agData.centerPos.x, data.agData.centerPos.y), data.agData);
            this.yeziLight(clickPos);
            // this.findNodeNum(this.movePaly1);
            if (this.newhandNode && this.meinvFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.meinvFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                amuseGameData_1.agData.userData.isGudie = true;
                amuseGameData_1.agData.storageData();
            }
            this.playCommonSound(amuseGameData_1.sound.correct);
            if (this.meinvFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.wrong) {
            this.playCommonSound(amuseGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(amuseGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    sunset.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var agData = null;
        for (var i = 0; i < this.meinv_Data.length; i++) {
            var data = this.meinv_Data[i];
            var x = data.centerPos.x * this.meinvScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.meinvScale + this.meinvY;
            }
            else {
                y = data.centerPos.y * this.meinvScale - this.meinvY;
            }
            var wid = data.blockSize.wid * this.meinvScale;
            var hei = data.blockSize.hei * this.meinvScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.discover;
                    agData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type: type, agData: agData };
            }
            else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }
        return { type: type, agData: agData };
    };
    sunset.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    sunset.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.gameoverBool = true;
        this.playCommonSound(amuseGameData_1.sound.win);
        if (amuseGameData_1.agData.userData.level + 1 <= amuseGameData_1.agData.levelAll) {
            if (amuseControl_1.amuseControl.imgId == amuseGameData_1.agData.userData.level) {
                amuseGameData_1.agData.userData.level = amuseGameData_1.agData.userData.level + 1;
                amuseGameData_1.agData.storageData();
            }
        }
        this.scheduleOnce(function () {
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                state: true,
                img: _this.duishouIcon,
                meinv_Data: _this.meinv_Data,
                callback: function () {
                    if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                        amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                        _this.resetAll();
                        _this.init();
                        _this.startDownTime();
                        _this.loadRes();
                    }
                    else {
                        amuseGameData_1.agData.userData.isHall = true;
                        amuseGameData_1.agData.storageData();
                        cc.director.loadScene(amuseControl_1.strong.flower);
                    }
                }
            });
        }, 1);
        return;
        this.scheduleOnce(function () {
            var _loop_2 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    amuseControl_1.amuseControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(amuseGameData_1.sound.win);
                                if (amuseGameData_1.agData.userData.level + 1 <= amuseGameData_1.agData.levelAll) {
                                    amuseGameData_1.agData.userData.level = amuseGameData_1.agData.userData.level + 1;
                                    amuseGameData_1.agData.storageData();
                                }
                                amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                                    img: _this.duishouIcon,
                                    meinv_Data: _this.meinv_Data,
                                    callback: function () {
                                        if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                                            amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            amuseGameData_1.agData.userData.isHall = true;
                                            amuseGameData_1.agData.storageData();
                                            cc.director.loadScene(amuseControl_1.strong.flower);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_2(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    sunset.prototype.getDownTime = function () {
        var level = amuseControl_1.amuseControl.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    sunset.prototype.timeOutEvent = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SummerDialog, {
            ADcallback: function () {
                _this.meinvOutTime = 60;
                amuseGameData_1.agData.userData.tishiNum++;
                amuseGameData_1.agData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.meinv_Data, "this.meinv_Data");
                for (var i = 0; i < _this.meinv_Data.length; i++) {
                    _this.meinv_Data[i].isFind = false;
                }
            }
        });
    };
    sunset.prototype.onClick_back = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.RocketDiaolg, { callback: function () { _this.isStop = false; } });
    };
    sunset.prototype.onClick_pause = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SpiritDialog, {
            isGame: true,
            callback: function () {
                if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
                    _this.soundHallBtn.getChildByName("line").active = true;
                }
                else {
                    _this.soundHallBtn.getChildByName("line").active = false;
                }
                if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
                    _this.musicHallBtn.getChildByName("line").active = true;
                }
                else {
                    _this.musicHallBtn.getChildByName("line").active = false;
                }
                _this.isStop = false;
            }
        });
    };
    sunset.prototype.onClick_tishi = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            amuseControl_1.amuseControl.amuseResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.meinv_Data.length; i++) {
            if (!this.meinv_Data[i].isFind) {
                lvdata = this.meinv_Data[i];
                break;
            }
        }
        if (!amuseGameData_1.agData) {
            return;
        }
        if (amuseGameData_1.agData.userData.tishiNum <= 0) {
            cc.log("看广告");
            amuseGameData_1.agData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        amuseGameData_1.agData.userData.tishiNum = amuseGameData_1.agData.userData.tishiNum - 1;
        amuseGameData_1.agData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    sunset.prototype.showTiShi = function (agData) {
        if (agData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = agData.centerPos.x * this.meinvScale;
                var y = 0;
                if (i == 0) {
                    y = agData.centerPos.y * this.meinvScale + this.meinvY;
                }
                else {
                    y = agData.centerPos.y * this.meinvScale - this.meinvY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }
        }
    };
    sunset.prototype.onClick_musicChange = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchMusic();
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    };
    sunset.prototype.onClick_soundChange = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchEffect();
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
    };
    sunset.prototype.onClick_exit = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
    };
    //播放音效
    sunset.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = amuseControl_1.amuseControl.amuseSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "pipeibg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], sunset.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "emptyheartBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "pipeiNode", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "movePaly1", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "movePaly2", void 0);
    __decorate([
        property(cc.Sprite)
    ], sunset.prototype, "userIcon1", void 0);
    __decorate([
        property(cc.Sprite)
    ], sunset.prototype, "userIcon2", void 0);
    __decorate([
        property(cc.Label)
    ], sunset.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "soundHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "musicHallBtn", void 0);
    sunset = __decorate([
        ccclass
    ], sunset);
    return sunset;
}(cc.Component));
exports.default = sunset;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3Vuc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QyxvREFBOEU7QUFDOUUsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLGlEQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBR0Q7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1NUJDO1FBcDVCRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FB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R0FBRyxDQUFDLENBQUM7YUFDWDtTQUNKO1FBR0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEc7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdGLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hHO0lBQ0wsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsMkJBQVksQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJ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QUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUE5RVosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXU1QjFCO0lBQUQsYUFBQztDQXY1QkQsQUF1NUJDLENBdjVCbUMsRUFBRSxDQUFDLFNBQVMsR0F1NUIvQztrQkF2NUJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld2hhbmQgZnJvbSBcIi4vcHJlZmViL25ld2hhbmRcIjtcbmltcG9ydCB7IGFtdXNlQ29udHJvbCwgY2lyY2xlLCBzdHJvbmcsIG1laW52RGF0YSB9IGZyb20gXCIuL3Rvb2wvYW11c2VDb250cm9sXCI7XG5pbXBvcnQgeyBhZ0RhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9hbXVzZUdhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBHYW1lU3RhdGUge1xuICAgIGRpc2NvdmVyLCAgICAgICAvL+aJvuWIsFxuICAgIHdyb25nLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgcmVwZWF0LCAgICAgLy/mib7liLDph43lpI3nmoQgIFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3Vuc2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBpcGVpYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3JpZ2luYWxJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmluaXNoSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpc2hpX3FpcGFvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWIyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVtcHR5aGVhcnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGlwZWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1vdmVQYWx5MTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtb3ZlUGFseTI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB1c2VySWNvbjE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHVzZXJJY29uMjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc291bmRIYWxsQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljSGFsbEJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBtZWludl9EYXRhOiBtZWludkRhdGFbXSA9IFtdO1xuICAgIG1laW52WTogbnVtYmVyID0gMTc1O1xuICAgIG1laW52U2NhbGU6IG51bWJlciA9IDAuMzcyO1xuXG4gICAgeWV6aUFsbE51bTogbnVtYmVyID0gMTA7XG4gICAgbWVpbnZGaW5kTnVtOiBudW1iZXIgPSAwO1xuICAgIG1laW52T3V0VGltZTogbnVtYmVyID0gMDtcblxuICAgIGxvdmVseUlzUHJvbXB0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0aW1lciA9IG51bGw7XG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XG4gICAgb25lRXJyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBuZXdoYW5kTm9kZTogbmV3aGFuZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGR1aXNob3VJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBtb3ZlMVkgPSAxMjg7XG4gICAgcHJpdmF0ZSBtb3ZlMlkgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGFnRGF0YS5zZXRHYW1lc3RvcCgoKT0+e1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnBhdXNlQWxsKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWdEYXRhLnNldEdhbWVyZWNvdmVyeSgoKT0+e1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnJlc3VtZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFkYXB0ZXJCZyh0aGlzLnBpcGVpYmcpO1xuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgLy8gdGhpcy5jaGVja05ld0hhbmQoKTtcblxuICAgICAgICB0aGlzLnBpcGVpQW5pbSgpO1xuXG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm1laW52X0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZUVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1laW52RmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKGFnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IGFtdXNlQ29udHJvbC5pbWdJZCAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwaXBlaUFuaW0oKSB7XG4gICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwYWx5ZXJfMSA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzFcIik7XG4gICAgICAgIGxldCBwYWx5ZXJfMiA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzJcIik7XG5cbiAgICAgICAgbGV0IGljb25Cb3ggPSBwYWx5ZXJfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XG4gICAgICAgIGxldCBmaW5pc2hUZW1wID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBpY29uQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHRlbXBOdW0gPSBhbXVzZUNvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDE5KTtcbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwubG9hZFNwcml0ZShcImhlYWQvXCIgKyBcImhhZWRcIiArICh0ZW1wTnVtKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoaWNvbik7XG4gICAgICAgICAgICBjYy50d2VlbihpY29uKS5ieSgwLjE1LCB7IHk6IC0xMjAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGljb24ueSA9PSAtMTIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21OdW0gPSBhbXVzZUNvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDE5KTtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKHJhbmRvbU51bSksIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpY29uLnkgPSAyNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS51bmlvbigpLnJlcGVhdCgyMCkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmlzaFRlbXApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXdIYW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IGljb25Cb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlLnkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVpc2hvdUljb24gPSBlbGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIm1hc2svaWNvblwiLCB0aGlzLm1vdmVQYWx5MikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmR1aXNob3VJY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0ZpbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpcGVpTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluaXNoVGVtcCA9IHRydWU7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXV0b0ZpbmQoKSB7XG4gICAgICAgIGxldCBudW0gPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZ1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtKSA+PSAxMCkgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmdhbWVvdmVyQm9vbCkgcmV0dXJuXG4gICAgICAgIGxldCBtaW5UaW1lID0gMzsgLy8g5pyA5bCP5pe26Ze06Ze06ZqU77yI56eS77yJXG4gICAgICAgIGxldCBtYXhUaW1lID0gNTsgLy8g5pyA5aSn5pe26Ze06Ze06ZqU77yI56eS77yJXG5cbiAgICAgICAgaWYgKHBhcnNlSW50KG51bSkgPT0gOSkge1xuICAgICAgICAgICAgbWluVGltZSA9IDMwMDtcbiAgICAgICAgICAgIG1heFRpbWUgPSAzMDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tVGltZSA9IE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUpICsgbWluVGltZTsgLy8g55Sf5oiQ6ZqP5py65pe26Ze06Ze06ZqUXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy/miafooYznmoTpgLvovpHku6PnoIFcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTIsIHRydWUpO1xuICAgICAgICAgICAgLy8g5omn6KGM5a6M6YC76L6R5ZCO5YaN5qyh6LCD5bqm5LiL5LiA5Liq6ZqP5py65a6a5pe25ZmoXG4gICAgICAgICAgICB0aGlzLmF1dG9GaW5kKCk7XG4gICAgICAgIH0sIHJhbmRvbVRpbWUpO1xuICAgIH1cblxuICAgIGZpbmROb2RlTnVtKHBhcmVudE5vZGU6IGNjLk5vZGUsIGJvb2w/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBmaW5pc2hCb3ggPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpO1xuICAgICAgICBsZXQgbnVtID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsZXQgdG1lcEluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBsZXQgZmluaXNoID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKTtcbiAgICAgICAgICAgIGlmIChub2ZpbmlzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBub2ZpbmlzaC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmaW5pc2guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBudW0uc3RyaW5nID0gdG1lcEluZGV4ICsgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJvb2wpe1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KG51bS5zdHJpbmcpID49IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lb3ZlckJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5QdXJwbGVEaWFsb2csIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1laW52X0RhdGE6IHRoaXMubWVpbnZfRGF0YSwvLyBjYy5pbnN0YW50aWF0ZSh0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmltZ0lkID0gYW11c2VDb250cm9sLmltZ0lkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG5cbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLm1vdmVQYWx5MS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubW92ZVBhbHkxKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubW92ZVBhbHkyKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpID49IHBhcnNlSW50KG51bTIpKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5MS54LCB0aGlzLm1vdmUxWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkyKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkyLngsIHRoaXMubW92ZTJZKSB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tb3ZlUGFseTEpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlUGFseTEueCwgdGhpcy5tb3ZlMlkpIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5Mi54LCB0aGlzLm1vdmUxWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIGFtdXNlQ29udHJvbC5pbWdJZDtcbiAgICAgICAgaWYgKCFhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wucGxheVNwKGFuaW0sIFwiMV9hbl9zdG9wXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJoZWFkL1wiICsgXCJoYWVkXCIgKyAoYWdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjEpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJoZWFkL1wiICsgXCJoYWVkXCIgKyAoYWdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGlzaGlfcWlwYW8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubWVpbnZPdXRUaW1lID0gdGhpcy5nZXREb3duVGltZSgpO1xuICAgICAgICAvLyBsZXQgdGltZSA9IGFtdXNlQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMubWVpbnZPdXRUaW1lKTtcbiAgICAgICAgLy8gdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVBbGwuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtcHR5aGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaEJveDEgPSB0aGlzLm1vdmVQYWx5MS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3gxLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveDEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaW5pc2hCb3gyID0gdGhpcy5tb3ZlUGFseTIuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluaXNoQm94Mi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3gyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/lvIDlkK/lgJLorqHml7ZcbiAgICBzdGFydERvd25UaW1lKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMubWVpbnZPdXRUaW1lID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvd25UaW1lRXZlbnQoKSB7XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZWludk91dFRpbWUtLTtcbiAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIGlmICh0aGlzLm1laW52T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ngrnplJnkuoZcbiAgICBlcnJSZWR1Y2VUaW1lKCkge1xuICAgICAgICBsZXQgZmluZGhlYXJ0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBlbXB0eWhlYXJ0SXRlbSA9IHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZmluZGhlYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBoZWFydEl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW1wdHloZWFydEl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGVtcHR5aGVhcnRJdGVtLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcInBvc3VpXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKCFoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlN1bW1lckRpYWxvZywge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5tZWludk91dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLm1laW52X0RhdGEsIFwidGhpcy5tZWludl9EYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIC8v5pe26Ze0XG4gICAgICAgIGlmICghdGhpcy5vbmVFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5tZWludk91dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMubWVpbnZPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUWlQYW9OdW0oKSB7XG4gICAgICAgIGlmIChhZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYWdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUmVzKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJzdW5JbWcvXCIgKyBcInN1bl9cIiArIGFtdXNlQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiZmlnaHRJbWcvXCIgKyBcImZpZ2h0X1wiICsgYW11c2VDb250cm9sLmltZ0lkLCB0aGlzLmZpbmlzaEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtZWludkltZy9tb29uXCIgKyBhbXVzZUNvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuYmluZFJlc0Fzc2V0KHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gcmVzLmpzb247XG4gICAgICAgICAgICBpZiAoanNvbkRhdGEgJiYganNvbkRhdGEucGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVpbnZfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMubWVpbnZfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLm1laW52X0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcblxuICAgICAgICBsZXQgZmluaXNoQm94ID0gdGhpcy5tb3ZlUGFseTEuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0RWxlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBpZiAobm9maW5pc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxlID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0YXJnZXRFbGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5tZWludkZpbmROdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gYW11c2VDb250cm9sLmNoYW5nZVBvcyh0YXJnZXRFbGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAxO1xuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1b3dlaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgYWdEYXRhOiBtZWludkRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIyKTtcblxuICAgICAgICAgICAgbGV0IGltZ1kgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMubWVpbnZTY2FsZSArIHRoaXMubWVpbnZZO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgICAgICBpbWdZID0gdGFyZ2V0UG9zLnkgKiB0aGlzLm1laW52U2NhbGUgLSB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBjYy52Myh0YXJnZXRQb3MueCAqIHRoaXMubWVpbnZTY2FsZSwgaW1nWSk7XG5cbiAgICAgICAgICAgIGdhbWVGaW5kLnNldFBvc2l0aW9uKGNlbnRlclBvcyk7XG5cbiAgICAgICAgICAgIC8vICAgICDmraPmlrnlvaJcbiAgICAgICAgICAgIGdhbWVGaW5kLndpZHRoID0gYWdEYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICBnYW1lRmluZC5oZWlnaHQgPSBhZ0RhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMubWVpbnZTY2FsZTtcblxuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueSA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55IC0gKHRoaXMubWVpbnZZICogMikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55ICsgKHRoaXMubWVpbnZZICogMikpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUuZGlzY292ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvdmVseUlzUHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZWludkZpbmROdW0gPSB0aGlzLm1laW52RmluZE51bSArIDE7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmFnRGF0YS5jZW50ZXJQb3MueCwgZGF0YS5hZ0RhdGEuY2VudGVyUG9zLnkpLCBkYXRhLmFnRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnllemlMaWdodChjbGlja1Bvcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmZpbmROb2RlTnVtKHRoaXMubW92ZVBhbHkxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMubWVpbnZGaW5kTnVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLmhpZGVkb25nMSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMubWVpbnZGaW5kTnVtID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmlzR3VkaWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuY29ycmVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1laW52RmluZE51bSA+PSB0aGlzLnllemlBbGxOdW0pIHsgICAgICAgLy/og5zliKkg5ri45oiP57uT5p2fXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09IEdhbWVTdGF0ZS53cm9uZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5lcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJSZWR1Y2VUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgICAgIHRoaXMub25lRXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1nU2lnbih0YXJnZXRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IHR5cGU6IEdhbWVTdGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBhZ0RhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm1laW52X0RhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm1laW52U2NhbGUgKyB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm1laW52U2NhbGUgLSB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHdpZCA9IGRhdGEuYmxvY2tTaXplLndpZCAqIHRoaXMubWVpbnZTY2FsZTtcbiAgICAgICAgICAgIGxldCBoZWkgPSBkYXRhLmJsb2NrU2l6ZS5oZWkgKiB0aGlzLm1laW52U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5kaXNjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYWdEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUucmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGFnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUud3Jvbmc7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgYWdEYXRhIH1cbiAgICB9XG5cblxuICAgIGVyclNpZ25BbmltKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IDE1IH0pLnRvKDAuMDUsIHsgYW5nbGU6IDAgfSkudG8oMC4wNSwgeyBhbmdsZTogLTE1IH0pXG4gICAgICAgICAgICAudG8oMC4wNywgeyBhbmdsZTogMTAgfSkudG8oMC4wNywgeyBhbmdsZTogMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAtMTAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDcgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTcgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDMgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgZ2FtZUVuZCgpIHtcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lb3ZlckJvb2wgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICBpZiAoYWdEYXRhLnVzZXJEYXRhLmxldmVsICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgIGlmIChhbXVzZUNvbnRyb2wuaW1nSWQgPT0gYWdEYXRhLnVzZXJEYXRhLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmxldmVsID0gYWdEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlB1cnBsZURpYWxvZywge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICBtZWludl9EYXRhOiB0aGlzLm1laW52X0RhdGEsLy8gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtdXNlQ29udHJvbC5pbWdJZCA9IGFtdXNlQ29udHJvbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMueWV6aUJveC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcIjRfbWFuXCIsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy55ZXppQm94LmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQud2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnRGF0YS51c2VyRGF0YS5sZXZlbCArIDEgPD0gYWdEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEudXNlckRhdGEubGV2ZWwgPSBhZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5QdXJwbGVEaWFsb2csIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1laW52X0RhdGE6IHRoaXMubWVpbnZfRGF0YSwvLyBjYy5pbnN0YW50aWF0ZSh0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmltZ0lkID0gYW11c2VDb250cm9sLmltZ0lkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOWAkuiuoeaXtlxuICAgIGdldERvd25UaW1lKCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSBhbXVzZUNvbnRyb2wuaW1nSWQ7XG4gICAgICAgIGxldCB0aW1lID0gMDtcbiAgICAgICAgaWYgKGxldmVsID49IDEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICAgICAgdGltZSA9IDUgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSA2ICYmIGxldmVsIDw9IDEwKSB7XG4gICAgICAgICAgICB0aW1lID0gMyAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDExICYmIGxldmVsIDw9IDE1KSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTYgJiYgbGV2ZWwgPD0gMjApIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMjEgJiYgbGV2ZWwgPD0gMjUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG5cbiAgICAvL+aXtumXtOWIsFxuICAgIHRpbWVPdXRFdmVudCgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5TdW1tZXJEaWFsb2csIHtcbiAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1laW52T3V0VGltZSA9IDYwO1xuICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSsrO1xuICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUWlQYW9OdW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMubWVpbnZfRGF0YSwgXCJ0aGlzLm1laW52X0RhdGFcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlJvY2tldERpYW9sZywgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzU3RvcCA9IGZhbHNlIH0gfSk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX3BhdXNlKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlNwaXJpdERpYWxvZywge1xuICAgICAgICAgICAgaXNHYW1lOiB0cnVlLCBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmVmZmVjdFN3aXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLm11c2ljU3dpdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tfdGlzaGkoKSB7XG5cbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmxvdmVseUlzUHJvbXB0KSB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dUb2FzdChcIlByb21wdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbHZkYXRhOiBtZWludkRhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1laW52X0RhdGFbaV0uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbHZkYXRhID0gdGhpcy5tZWludl9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChhZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIGFnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKGFnRGF0YTogbWVpbnZEYXRhKSB7XG4gICAgICAgIGlmIChhZ0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMubG92ZWx5SXNQcm9tcHQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlzaGkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVUaXNoaVByZWZhYik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuYWRkQ2hpbGQodGlzaGkpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHggPSBhZ0RhdGEuY2VudGVyUG9zLnggKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gYWdEYXRhLmNlbnRlclBvcy55ICogdGhpcy5tZWludlNjYWxlICsgdGhpcy5tZWludlk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGFnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubWVpbnZTY2FsZSAtIHRoaXMubWVpbnZZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRpc2hpLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aXNoaSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGlzaGkpLnRvKDAuNSwgeyBzY2FsZTogMC41IH0pLnRvKDAuNSwgeyBzY2FsZTogMC43IH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25DbGlja19tdXNpY0NoYW5nZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5zd2l0Y2hNdXNpYygpO1xuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgb25DbGlja19zb3VuZENoYW5nZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5zd2l0Y2hFZmZlY3QoKTtcbiAgICAgICAgaWYgKCFhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIG9uQ2xpY2tfZXhpdCgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wucGxheUVmZmVjdCh0aGlzLmF1ZGlvQ2xpcHNbaV0sIGxvb3ApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/OrangeDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdbf3RLZZFMa4QNxIkpdf+0', 'OrangeDialog');
// script/dialog/OrangeDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrangeDialog = /** @class */ (function (_super) {
    __extends(OrangeDialog, _super);
    function OrangeDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatarIcon = null;
        _this.contentBox = null;
        _this.editBox = null;
        _this.callback = null;
        _this.clickid = 0;
        return _this;
    }
    OrangeDialog.prototype.start = function () {
        var _this = this;
        this.editBox.string = amuseGameData_1.agData.userData.gameName;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.avatarIcon);
        this.clickid = amuseGameData_1.agData.userData.avatarId;
        var _loop_1 = function (i) {
            var item = this_1.contentBox.children[i];
            var icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, function () {
                _this.changeIcon((i + 1));
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.contentBox.children.length; i++) {
            _loop_1(i);
        }
    };
    OrangeDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    OrangeDialog.prototype.onClick_agreen = function () {
        amuseGameData_1.agData.userData.gameName = this.editBox.string;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.userData.avatarId = this.clickid;
        amuseGameData_1.agData.storageData();
        this.callback && this.callback();
        this.node.destroy();
    };
    OrangeDialog.prototype.onClick_close = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    OrangeDialog.prototype.onClick_cannel = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    OrangeDialog.prototype.changeIcon = function (index) {
        this.clickid = index;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (index), this.avatarIcon);
    };
    __decorate([
        property(cc.Sprite)
    ], OrangeDialog.prototype, "avatarIcon", void 0);
    __decorate([
        property(cc.Node)
    ], OrangeDialog.prototype, "contentBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], OrangeDialog.prototype, "editBox", void 0);
    OrangeDialog = __decorate([
        ccclass
    ], OrangeDialog);
    return OrangeDialog;
}(cc.Component));
exports.default = OrangeDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL09yYW5nZURpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkRDO1FBdkRHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTJDaEIsQ0FBQztJQXpDRyw0QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsMkJBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0NBQy9CLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCwyQkFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxTQUFPLENBQUM7OztRQU5iLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUEvQyxDQUFDO1NBT1Q7SUFDTCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDOUMsMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0Msc0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEMsc0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxJQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLDJCQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ007SUFWVixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMkRoQztJQUFELG1CQUFDO0NBM0RELEFBMkRDLENBM0R5QyxFQUFFLENBQUMsU0FBUyxHQTJEckQ7a0JBM0RvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBhbXVzZUNvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSB9IGZyb20gXCIuLi90b29sL2FtdXNlR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JhbmdlRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBhdmF0YXJJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuXG4gICAgY2xpY2tpZCA9IDA7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lZGl0Qm94LnN0cmluZyA9IGFnRGF0YS51c2VyRGF0YS5nYW1lTmFtZTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGFnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMuYXZhdGFySWNvbik7XG4gICAgICAgIHRoaXMuY2xpY2tpZCA9IGFnRGF0YS51c2VyRGF0YS5hdmF0YXJJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jb250ZW50Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5maW5kKFwibWFzay9pY29uXCIsIGl0ZW0pLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGkgKyAxKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbigoaSArIDEpKVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYWdyZWVuKCkge1xuICAgICAgICBhZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWUgPSB0aGlzLmVkaXRCb3guc3RyaW5nXG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBhZ0RhdGEudXNlckRhdGEuYXZhdGFySWQgPSB0aGlzLmNsaWNraWQ7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jYW5uZWwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoYW5nZUljb24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNsaWNraWQgPSBpbmRleDtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGluZGV4KSwgdGhpcy5hdmF0YXJJY29uKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'amuseResUtil');
// script/tool/amuseResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.amuseResUtil = void 0;
var amuseResBind_1 = require("./amuseResBind");
var amuseControl_1 = require("./amuseControl");
var amuseResUtil = /** @class */ (function () {
    function amuseResUtil() {
    }
    // 绑定资源释放
    amuseResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(amuseResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(amuseResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    amuseResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    amuseResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    amuseResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    amuseResUtil.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.releaseRes(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------  
    amuseResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(node, prefab);
            var parentNode = amuseControl_1.amuseControl.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    amuseResUtil.showToast = function (text) {
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
                toastLabel.getComponent(cc.Label).string = text;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    return amuseResUtil;
}());
exports.amuseResUtil = amuseResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVJlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVM7OztBQUVULCtDQUEwQztBQUMxQywrQ0FBOEM7QUFJOUM7SUFBQTtJQW9HQSxDQUFDO0lBbEdHLFNBQVM7SUFDSyx5QkFBWSxHQUExQixVQUEyQixNQUFlLEVBQUUsS0FBZTtRQUN2RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGNBQWM7SUFDQSx1QkFBVSxHQUF4QixVQUF5QixLQUFlO1FBQ3BDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxvQ0FBb0M7SUFDdEIsc0JBQVMsR0FBdkIsVUFBd0IsU0FBaUIsRUFBRSxTQUEwQixFQUFFLE9BQXNCO1FBQ3pGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUs7SUFDUyx5QkFBWSxHQUExQixVQUEyQixTQUFpQixFQUFFLFNBQTBCO1FBQ3BFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUztJQUNLLHVCQUFVLEdB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QUNuQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQUksVUFBVSxHQUFHLDJCQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDN0MsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0MsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3BHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FwR0EsQUFvR0MsSUFBQTtBQXBHWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL+i1hOa6kOWKoOi9veW3peWFt+exu1xyXG5cclxuaW1wb3J0IGFtdXNlUmVzQmluZCBmcm9tIFwiLi9hbXVzZVJlc0JpbmRcIjtcclxuaW1wb3J0IHsgYW11c2VDb250cm9sIH0gZnJvbSBcIi4vYW11c2VDb250cm9sXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBc3NldENhbGxGdW5jID0gKGVycjogRXJyb3IsIGFzc2V0RGF0YTogY2MuQXNzZXQpID0+IHZvaWQ7XHJcbiBcclxuZXhwb3J0IGNsYXNzIGFtdXNlUmVzVXRpbCB7XHJcbiAgICAgXHJcbiAgICAvLyDnu5HlrprotYTmupDph4rmlL5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmluZFJlc0Fzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChhbXVzZVJlc0JpbmQpO1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0ZW1wQXV0bykpIHtcclxuICAgICAgICAgICAgdGVtcEF1dG8gPSBwYXJlbnQuYWRkQ29tcG9uZW50KGFtdXNlUmVzQmluZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOajgOa1i+W8leeUqOiuoeaVsOWQjumHiuaUvui1hOa6kFxyXG4gICAgcHVibGljIHN0YXRpYyByZWxlYXNlUmVzKGFzc2V0OiBjYy5Bc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGFzc2V0KSAmJiBhc3NldC5yZWZDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9vSjlv4XpobvphY3lkIhhZGRBdXRvUmVsZWFzZUFzc2V0IOS9v+eUqOe7keWumui1hOa6kClcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0KGFzc2V0UGF0aDogc3RyaW5nLCBhc3NldFR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgYXNzZXRDYjogQXNzZXRDYWxsRnVuYyk6IHZvaWQge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGFzc2V0UGF0aCwgYXNzZXRUeXBlLCBhc3NldENiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mihOWKoOi9vVxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVsb2FkQXNzZXQoYXNzZXRQYXRoOiBzdHJpbmcsIGFzc2V0VHlwZTogdHlwZW9mIGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoYXNzZXRQYXRoLCBhc3NldFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9veWNleW8oOWbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3ByaXRlKHBpY1BhdGg6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGRlZlBhdGg/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZmluaXNoQ2FsbGJhY2sgPSAoZXJyLCBzcDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZlBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGUoZGVmUGF0aCwgc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoc3ByaXRlKSAmJiBzcHJpdGVbXCJuZXdVcmxcIl0gPT0gcGljUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFkZEF1dG9SZWxlYXNlQXNzZXQoc3ApO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMoc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZVtcIm5ld1VybFwiXSA9IHBpY1BhdGg7Ly8g6K6w5b2V5pyA5pawdXJsIOmYsuatouWkmuasoeivt+axguW8guatpeiuvue9ruS6huaXp+eahFxyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7Ly/nva7nqbog6Ziy5q2i546p5a6255yL5Yiw5pen55qE6YGT5YW36K+v5LyaXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGljUGF0aCwgY2MuU3ByaXRlRnJhbWUsIGZpbmlzaENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3otYTmupDliqDovb0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93RGlhbG9nKHVybDogc3RyaW5nLCBkYXRhPywgY2FsbGJhY2s/KSB7XHJcbiAgICAgXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvXCIgKyB1cmwsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmJpbmRSZXNBc3NldChub2RlLCBwcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGFtdXNlQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCh1cmwpLmluaXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi90b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRvYXN0ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5iaW5kUmVzQXNzZXQodG9hc3QsIHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gYW11c2VDb250cm9sLmdldHNjZW5lTm9kZSgpO1xyXG4gICAgICAgICAgICBpZiAodG9hc3QgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0b2FzdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Qub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRvYXN0KS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'amuseScroll');
// script/tool/amuseScroll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表draw call优化组件 */
var scrollTool = /** @class */ (function (_super) {
    __extends(scrollTool, _super);
    function scrollTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    scrollTool.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    scrollTool.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    scrollTool.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件***************  */
    scrollTool.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    scrollTool = __decorate([
        ccclass
    ], scrollTool);
    return scrollTool;
}(cc.Component));
exports.default = scrollTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxxQkFBcUI7QUFFckI7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBa0RBLENBQUM7SUFqREcsa0ZBQWtGO0lBQ2xGLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUNELHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDNUIsK0NBQTBCLEdBQWxDLFVBQW1DLE9BQVk7UUFDM0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDaEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixHQUFHLEVBQ0gsR0FBRyxDQUNOLENBQUM7UUFDRixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELFVBQVU7SUFDRixxQ0FBZ0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELHlCQUF5QjtRQUN6QixPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMENBQTBDO0lBQ2xDLDBDQUFxQixHQUE3QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FrRDlCO0lBQUQsaUJBQUM7Q0FsREQsQUFrREMsQ0FsRHVDLEVBQUUsQ0FBQyxTQUFTLEdBa0RuRDtrQkFsRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoq5YiX6KGoZHJhdyBjYWxs5LyY5YyW57uE5Lu2ICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2Nyb2xsVG9vbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zZWdtZW50YXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuS4jeWtmOWcqFNjcm9sbFZpZXfnu4Tku7bvvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5LqL5Lu255uR5ZCsXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNjcm9sbGluZ1wiLCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9SRU1PVkVELCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9SRU9SREVSLCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuWKn+iDveWHveaVsCoqKioqKioqKioqKioqKiAqL1xuICAgIC8qKuiOt+WPluWcqOS4lueVjOWdkOagh+ezu+S4i+eahOiKgueCueWMheWbtOebkijkuI3ljIXlkKvoh6rouqvmv4DmtLvnmoTlrZDoioLngrnojIPlm7QpICovXG4gICAgcHJpdmF0ZSBfZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZChub2RlX29fOiBhbnkpOiBjYy5SZWN0IHtcbiAgICAgICAgbGV0IHdfbjogbnVtYmVyID0gbm9kZV9vXy5fY29udGVudFNpemUud2lkdGg7XG4gICAgICAgIGxldCBoX246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLmhlaWdodDtcbiAgICAgICAgbGV0IHJlY3RfbyA9IGNjLnJlY3QoXG4gICAgICAgICAgICAtbm9kZV9vXy5fYW5jaG9yUG9pbnQueCAqIHdfbiwgXG4gICAgICAgICAgICAtbm9kZV9vXy5fYW5jaG9yUG9pbnQueSAqIGhfbiwgXG4gICAgICAgICAgICB3X24sIFxuICAgICAgICAgICAgaF9uXG4gICAgICAgICk7XG4gICAgICAgIG5vZGVfb18uX2NhbGN1bFdvcmxkTWF0cml4KCk7XG4gICAgICAgIHJlY3Rfby50cmFuc2Zvcm1NYXQ0KHJlY3Rfbywgbm9kZV9vXy5fd29ybGRNYXRyaXgpO1xuICAgICAgICByZXR1cm4gcmVjdF9vO1xuICAgIH1cbiAgICAvKirmo4DmtYvnorDmkp4gKi9cbiAgICBwcml2YXRlIF9jaGVja19jb2xsaXNpb24obm9kZV9vXzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVjdDFfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LnBhcmVudCk7XG4gICAgICAgIGxldCByZWN0Ml9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZChub2RlX29fKTtcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5L+d6Zmp6IyD5Zu0XG4gICAgICAgIHJlY3QxX28ud2lkdGggKz0gcmVjdDFfby53aWR0aCAqIDAuNTtcbiAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHJlY3QxX28ueCAtPSByZWN0MV9vLndpZHRoICogMC4yNTtcbiAgICAgICAgcmVjdDFfby55IC09IHJlY3QxX28uaGVpZ2h0ICogMC4yNTtcbiAgICAgICAgcmV0dXJuIHJlY3QxX28uaW50ZXJzZWN0cyhyZWN0Ml9vKTtcbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioq6Ieq5a6a5LmJ5LqL5Lu2KioqKioqKioqKioqKioqICAqL1xuICAgIHByaXZhdGUgX2V2ZW50X3VwZGF0ZV9vcGFjaXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCh2MV9vPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuXG4gICAgICAgICAgICB2MV9vLm9wYWNpdHkgPSB0aGlzLl9jaGVja19jb2xsaXNpb24odjFfbykgPyAyNTUgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseSoundTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'amuseSoundTool');
// script/tool/amuseSoundTool.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.amuseSoundTool = void 0;
var amuseStorage_1 = require("./amuseStorage");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var amuseSoundTool = /** @class */ (function () {
    function amuseSoundTool() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_shock", true);
    }
    amuseSoundTool.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    amuseSoundTool.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    amuseSoundTool.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    amuseSoundTool.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    amuseSoundTool.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    amuseSoundTool.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    amuseSoundTool.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    amuseSoundTool.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    amuseSoundTool.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    amuseSoundTool.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    amuseSoundTool.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    amuseSoundTool.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    amuseSoundTool.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    amuseSoundTool.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    amuseSoundTool.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    amuseSoundTool.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    amuseSoundTool.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return amuseSoundTool;
}());
exports.amuseSoundTool = amuseSoundTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVNvdW5kVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTzs7O0FBRVAsK0NBQThDO0FBRzlDLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFFbEM7SUFvQ0k7UUE5QlEsbUJBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVMsR0FBaUIsSUFBSSxDQUFDO1FBNEJuQyxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsMkJBQVksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFdBQVcsR0FBRywyQkFBWSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBN0JNLDJDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU87UUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBVSxFQUFFLElBQWtCO1lBQzFFLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsRUFBRTtnQkFDMUIsT0FBTzthQUNWO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFRTSxvQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLDJCQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QywyQkFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1NBRXRCO2FBQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsMkJBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFHTSxrQ0FBUyxHQUFoQixVQUFpQixLQUFtQixFQUFFLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsYUFBc0I7UUFDeEQsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUEsVUFBVTtRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsb0JBQW9CO1lBQ3BCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFFTSxtQ0FBVSxHQUFqQixVQUFrQixLQUFtQixFQUFFLE1BQXVCLEVBQUUsUUFBeUI7UUFBbEQsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLHlCQUFBLEVBQUEsZUFBeUI7UUFDckYsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksUUFBUTtnQkFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQ0FBa0IsR0FBekIsVUFBMEIsSUFBWSxFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDM0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTztRQUN4QyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxJQUFrQjtZQUNqRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTzthQUNWO1lBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTSxrQ0FBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUdNLGdDQUFPLEdBQWQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBR00sa0NBQVMsR0FBaEI7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFHTSxtQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHTSw4QkFBSyxHQUFaLFVBQWEsT0FBZTtRQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR00sK0JBQU0sR0FBYixVQUFjLE9BQWU7UUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVNLHVDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSx1Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTCxxQkFBQztBQUFELENBckpBLEFBcUpDLElBQUE7QUFySlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+mfs+mikeW3peWFt+exu1xyXG5cclxuaW1wb3J0IHsgYW11c2VTdG9yYWdlIH0gZnJvbSBcIi4vYW11c2VTdG9yYWdlXCI7XHJcblxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgYW11c2VTb3VuZFRvb2wge1xyXG4gICAgIFxyXG4gICAgbXVzaWNTd2l0Y2g6IGJvb2xlYW47ICAgIC8v6IOM5pmv6Z+z5LmQ5byA5YWzXHJcbiAgICBlZmZlY3RTd2l0Y2g6IGJvb2xlYW47ICAgLy/pn7PmlYjlvIDlhbNcclxuICAgIHNob2NrU3dpdGNoOiBib29sZWFuOyAgICAvLyDpnIfliqjlvIDlhbMgICBcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNsaWNrRWZmZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZ21NdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdEJ0bkNsaWNrRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkNsaWNrRWZmZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJ0blBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5DbGlja0VmZmVjdCA9IGNsaXA7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRiZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21NdXNpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CZ21QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmdtTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1vbmJnbU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVmZmVjdFN3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9ICF0aGlzLm11c2ljU3dpdGNoO1xyXG4gICAgICAgIGFtdXNlU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0aGlzLm11c2ljU3dpdGNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyTXVzaWMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuY3Vyck11c2ljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSAhdGhpcy5lZmZlY3RTd2l0Y2g7XHJcbiAgICAgICAgYW11c2VTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgYW11c2VTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRoaXMuc2hvY2tTd2l0Y2gpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheU11c2ljKGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyTXVzaWMgPSBhdWRpbzsvL+S/neWtmOW9k+WJjeiDjOaZr+mfs+S5kFxyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGF1ZGlvLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3RXaXRoUGF0aChwYXRoOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICF0aGlzLmVmZmVjdFN3aXRjaCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3pn7PmlYjotYTmupDlpLHotKVcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBhdXNlKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbkJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmJ0bkNsaWNrRWZmZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbmJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuYmdtTXVzaWMpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/flower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'flower');
// script/flower.ts

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
var amuseControl_1 = require("./tool/amuseControl");
var amuseGameData_1 = require("./tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var flower = /** @class */ (function (_super) {
    __extends(flower, _super);
    function flower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.maskBox = null;
        _this.preBtn = null;
        _this.nextBtn = null;
        _this.levelNum = null;
        _this.username = null;
        _this.icon = null;
        _this.nowIndex = 0;
        _this.speedNum = 0.7;
        return _this;
    }
    flower.prototype.start = function () {
        this.nowIndex = amuseGameData_1.agData.userData.level;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.updataInfo();
        amuseControl_1.amuseControl.setsceneNode(this.node);
        amuseControl_1.amuseControl.adapterBg(this.bg);
        var fine_2 = this.maskBox.getChildByName("fine_2");
        fine_2.getChildByName("mask").active = false;
        this.levelNum.string = "" + this.nowIndex;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), fine_2.getChildByName("img").getComponent(cc.Sprite));
        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        }
        else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        }
        else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }
        this.preBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
        for (var i = 0; i < this.maskBox.children.length; i++) {
            var ele = this.maskBox.children[i];
            ele.on(cc.Node.EventType.TOUCH_END, this.onClick_img, this);
        }
    };
    flower.prototype.updataInfo = function () {
        this.username.string = amuseGameData_1.agData.userData.gameName;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.icon);
    };
    flower.prototype.onClick_setting = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SpiritDialog, { isGame: false });
    };
    flower.prototype.showToast = function (text) {
        amuseControl_1.amuseControl.amuseResUtil.showToast(text);
    };
    flower.prototype.onClick_preBtn = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
        cc.log("上一页");
        this.nowIndex = this.nowIndex - 1;
        if (this.nowIndex <= 1) {
            this.nowIndex = 1;
        }
        this.levelNum.string = "" + this.nowIndex;
        for (var i = 0; i < this.maskBox.children.length; i++) {
            var ele = this.maskBox.children[i];
            cc.Tween.stopAllByTarget(ele);
            if (ele.x == -520) {
                if (this.nowIndex > amuseGameData_1.agData.userData.level) {
                    ele.getChildByName("mask").active = true;
                }
                else {
                    ele.getChildByName("mask").active = false;
                }
                amuseControl_1.amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            }
            else if (ele.x == 520) {
                ele.x = -520;
            }
            else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(520, 0) }).call(function () {
                    _this.preBtn.on(cc.Node.EventType.TOUCH_END, _this.onClick_preBtn, _this);
                    _this.nextBtn.on(cc.Node.EventType.TOUCH_END, _this.onClick_nextBtn, _this);
                }).start();
            }
        }
        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        }
        else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        }
        else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }
    };
    flower.prototype.onClick_nextBtn = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.log("下一页");
        this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
        this.nowIndex = this.nowIndex + 1;
        if (this.nowIndex >= 30) {
            this.nowIndex = 30;
        }
        this.levelNum.string = "" + this.nowIndex;
        for (var i = 0; i < this.maskBox.children.length; i++) {
            var ele = this.maskBox.children[i];
            cc.Tween.stopAllByTarget(ele);
            if (ele.x == -520) {
                ele.x = 520;
            }
            else if (ele.x == 520) {
                if (this.nowIndex > amuseGameData_1.agData.userData.level) {
                    ele.getChildByName("mask").active = true;
                }
                else {
                    ele.getChildByName("mask").active = false;
                }
                amuseControl_1.amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            }
            else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(-520, 0) }).call(function () {
                    _this.preBtn.on(cc.Node.EventType.TOUCH_END, _this.onClick_preBtn, _this);
                    _this.nextBtn.on(cc.Node.EventType.TOUCH_END, _this.onClick_nextBtn, _this);
                }).start();
            }
        }
        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        }
        else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        }
        else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }
    };
    flower.prototype.onClick_blueBook = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseResUtil.showToast("The feature is not available yet");
    };
    flower.prototype.onClick_img = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.log(this.nowIndex);
        if (this.nowIndex > amuseGameData_1.agData.userData.level) { //锁住
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PlanetDialog);
        }
        else { //没锁
            amuseControl_1.amuseControl.imgId = this.nowIndex;
            amuseGameData_1.agData.userData.isHall = false;
            amuseGameData_1.agData.storageData();
            cc.director.loadScene(amuseControl_1.strong.sunset);
        }
    };
    flower.prototype.onClick_startBtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.imgId = amuseGameData_1.agData.userData.level;
        amuseGameData_1.agData.userData.isHall = false;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.sunset);
    };
    flower.prototype.click_changeinfo = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.OrangeDialog, { callback: function () {
                _this.updataInfo();
            } });
    };
    __decorate([
        property(cc.Node)
    ], flower.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], flower.prototype, "maskBox", void 0);
    __decorate([
        property(cc.Node)
    ], flower.prototype, "preBtn", void 0);
    __decorate([
        property(cc.Node)
    ], flower.prototype, "nextBtn", void 0);
    __decorate([
        property(cc.Label)
    ], flower.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Label)
    ], flower.prototype, "username", void 0);
    __decorate([
        property(cc.Sprite)
    ], flower.prototype, "icon", void 0);
    flower = __decorate([
        ccclass
    ], flower);
    return flower;
}(cc.Component));
exports.default = flower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZmxvd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRTtBQUNuRSxzREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErTUM7UUE1TUcsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUVmLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFRLEdBQUcsR0FBRyxDQUFDOztJQXVMM0IsQ0FBQztJQXJMRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsMkJBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFF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LENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBTSxDQUFDLFlBQVksRUFBRSxFQUFDLFFBQVEsRUFBRTtnQkFDakUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFDLENBQUE7SUFFUCxDQUFDO0lBM01EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFyQk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStNMUI7SUFBRCxhQUFDO0NBL01ELEFBK01DLENBL01tQyxFQUFFLENBQUMsU0FBUyxHQStNL0M7a0JBL01vQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW11c2VDb250cm9sLCBzdHJvbmcsIGNpcmNsZSB9IGZyb20gXCIuL3Rvb2wvYW11c2VDb250cm9sXCI7XG5pbXBvcnQgeyBhZ0RhdGEgfSBmcm9tIFwiLi90b29sL2FtdXNlR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmxvd2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1hc2tCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJlQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5leHRCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdXNlcm5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbm93SW5kZXggPSAwO1xuICAgIHByaXZhdGUgc3BlZWROdW0gPSAwLjc7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub3dJbmRleCA9IGFnRGF0YS51c2VyRGF0YS5sZXZlbDtcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0YUluZm8oKTtcbiAgICAgICAgYW11c2VDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIGxldCBmaW5lXzIgPSB0aGlzLm1hc2tCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5lXzJcIik7XG4gICAgICAgIGZpbmVfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIHRoaXMubm93SW5kZXg7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwubG9hZFNwcml0ZShcInN1bkltZy9cIiArIFwic3VuX1wiICsgKHRoaXMubm93SW5kZXgpLCBmaW5lXzIuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID49IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZXh0QnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm93SW5kZXggPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX3ByZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMubmV4dEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19uZXh0QnRuLCB0aGlzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFza0JveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMubWFza0JveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGVsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19pbWcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGFJbmZvKCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lLnN0cmluZyA9IGFnRGF0YS51c2VyRGF0YS5nYW1lTmFtZTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGFnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMuaWNvbik7XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5TcGlyaXREaWFsb2csIHsgaXNHYW1lOiBmYWxzZSB9KTtcbiAgICB9XG5cblxuICAgIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93VG9hc3QodGV4dCk7XG4gICAgfVxuXG4gICAgb25DbGlja19wcmVCdG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuXG4gICAgICAgIHRoaXMucHJlQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19wcmVCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5leHRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX25leHRCdG4sIHRoaXMpO1xuXG4gICAgICAgIGNjLmxvZyhcIuS4iuS4gOmhtVwiKTtcbiAgICAgICAgdGhpcy5ub3dJbmRleCA9IHRoaXMubm93SW5kZXggLSAxO1xuICAgICAgICBpZiAodGhpcy5ub3dJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5vd0luZGV4ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIHRoaXMubm93SW5kZXg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXNrQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlID0gdGhpcy5tYXNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGVsZSk7XG4gICAgICAgICAgICBpZiAoZWxlLnggPT0gLTUyMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID4gYWdEYXRhLnVzZXJEYXRhLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJzdW5JbWcvXCIgKyBcInN1bl9cIiArICh0aGlzLm5vd0luZGV4KSwgZWxlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlbGUpLnRvKHRoaXMuc3BlZWROdW0sIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS54ID09IDUyMCkge1xuICAgICAgICAgICAgICAgIGVsZS54ID0gLTUyMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZSkudG8odGhpcy5zcGVlZE51bSwgeyBwb3NpdGlvbjogY2MudjMoNTIwLCAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tfcHJlQnRuLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX25leHRCdG4sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID49IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZXh0QnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm93SW5kZXggPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25DbGlja19uZXh0QnRuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgY2MubG9nKFwi5LiL5LiA6aG1XCIpO1xuXG4gICAgICAgIHRoaXMucHJlQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19wcmVCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5leHRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX25leHRCdG4sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubm93SW5kZXggPSB0aGlzLm5vd0luZGV4ICsgMTtcbiAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPj0gMzApIHtcbiAgICAgICAgICAgIHRoaXMubm93SW5kZXggPSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIHRoaXMubm93SW5kZXg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXNrQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlID0gdGhpcy5tYXNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGVsZSk7XG5cblxuICAgICAgICAgICAgaWYgKGVsZS54ID09IC01MjApIHtcbiAgICAgICAgICAgICAgICBlbGUueCA9IDUyMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnggPT0gNTIwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPiBhZ0RhdGEudXNlckRhdGEubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwubG9hZFNwcml0ZShcInN1bkltZy9cIiArIFwic3VuX1wiICsgKHRoaXMubm93SW5kZXgpLCBlbGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZSkudG8odGhpcy5zcGVlZE51bSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZSkudG8odGhpcy5zcGVlZE51bSwgeyBwb3NpdGlvbjogY2MudjMoLTUyMCwgMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX3ByZUJ0biwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19uZXh0QnRuLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPj0gMzApIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3dJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19ibHVlQm9vaygpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuc2hvd1RvYXN0KFwiVGhlIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSB5ZXRcIik7XG4gICAgfVxuXG4gICAgb25DbGlja19pbWcoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5sb2codGhpcy5ub3dJbmRleClcbiAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPiBhZ0RhdGEudXNlckRhdGEubGV2ZWwpIHsgICAgICAgLy/plIHkvY9cbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuc2hvd0RpYWxvZyhjaXJjbGUuUGxhbmV0RGlhbG9nKVxuICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/msqHplIFcbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5pbWdJZCA9IHRoaXMubm93SW5kZXg7XG4gICAgICAgICAgICBhZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzdHJvbmcuc3Vuc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tfc3RhcnRCdG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuaW1nSWQgPSAgYWdEYXRhLnVzZXJEYXRhLmxldmVsO1xuICAgICAgICBhZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3Ryb25nLnN1bnNldCk7XG4gICAgfVxuXG5cbiAgICBjbGlja19jaGFuZ2VpbmZvKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5PcmFuZ2VEaWFsb2csIHtjYWxsYmFjazogKCk9PntcbiAgICAgICAgICAgIHRoaXMudXBkYXRhSW5mbygpO1xuICAgICAgICB9fSlcblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'amuseControl');
// script/tool/amuseControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.strong = exports.amuseControl = void 0;
var amuseSoundTool_1 = require("./amuseSoundTool");
var amuseResUtil_1 = require("./amuseResUtil");
var amuseControlClass = /** @class */ (function () {
    function amuseControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.amuseSoundTool = new amuseSoundTool_1.amuseSoundTool();
        this.eventTarget = new cc.EventTarget();
        this.amuseResUtil = amuseResUtil_1.amuseResUtil;
        this.designWidth = 1280; //设计分辨率宽
        this.designHeight = 720; //设计分辨率高
        this.isIpadFix = false;
        this.isIphoneXSMaxFix = false;
        this.iphoneXSMaxY = 0;
        this.isLiuhaiFix = false; //是否有刘海
        this.liuhaiY = 0; //刘海高度
    }
    amuseControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new amuseControlClass();
        }
        return this._instance;
    };
    amuseControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    amuseControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    amuseControlClass.prototype.timeChange = function (value) {
        value = +value;
        var minute = Math.floor(value / 60);
        var second = Math.floor(value % 60);
        var minStr = "";
        if (minute < 10) { //分钟
            minStr = "0" + minute;
        }
        else {
            minStr = minute.toString();
        }
        var secStr = "";
        if (second < 10) { //秒数
            secStr = "0" + second;
        }
        else {
            secStr = second.toString();
        }
        return minStr + ":" + secStr;
    };
    //返回范围的随机数
    amuseControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    amuseControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    amuseControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    amuseControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
        var CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(function () { if (_callback)
            _callback(); })
            .start();
    };
    amuseControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
        var _this = this;
        if (isLoop === void 0) { isLoop = false; }
        if (endCallback === void 0) { endCallback = null; }
        spSkel.setCompleteListener(function () {
            if (endCallback) {
                _this.delayCallBack(0.02, function () {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    };
    amuseControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    amuseControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    amuseControlClass._instance = null;
    return amuseControlClass;
}());
exports.amuseControl = amuseControlClass.getInstance();
exports.strong = {
    sunset: "sunset",
    flower: "flower",
    bright: "bright",
};
exports.circle = {
    PurpleDialog: "PurpleDialog",
    SummerDialog: "SummerDialog",
    RocketDiaolg: "RocketDiaolg",
    SpiritDialog: "SpiritDialog",
    YellowDialog: "YellowDialog",
    OrangeDialog: "OrangeDialog",
    PlanetDialog: "PlanetDialog",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELCtDQUE4QztBQVk5QztJQUFBO1FBV1csY0FBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQ3RELGdCQUFXLEdBQW1CLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELGlCQUFZLEdBQUcsMkJBQVksQ0FBQztRQUduQyxnQkFBVyxHQUFXLElBQUksQ0FBQyxDQUFBLFFBQVE7UUFDbkMsaUJBQVksR0FBVyxHQUFHLENBQUMsQ0FBQSxRQUFRO1FBRW5DLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsS0FBSyxDQUFDLENBQUEsT0FBTztRQUNuQyxZQUFPLEdBQVUsQ0FBQyxDQUFDLENBQUEsTUFBTTtJQThGN0IsQ0FBQztJQXRIaUIsNkJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFxQkQsd0NBQVksR0FBWixVQUFhLElBQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUdEOztNQUVFO0lBQ0Ysc0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUE7UUFDdkIsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFLEVBQVMsSUFBSTtZQUMxQixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQTtTQUN4QjthQUFNO1lBQ0gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQTtRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBUyxJQUFJO1lBQzFCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFBO1NBQ3hCO2FBQU07WUFDSCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBVSxNQUFNLFNBQUksTUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFHRCxVQUFVO0lBQ1Ysd0NBQVksR0FBWixVQUFhLEdBQVcsRUFBRSxHQUFXO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxZQUFZO0lBQ1oscUNBQVMsR0FBVCxVQUFVLE1BQWU7UUFDckIsa0JBQWtCO1FBQ2xCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxRQUFRO0lBQ1IscUNBQVMsR0FBVCxVQUFVLE1BQWUsRUFBRSxRQUFpQjtRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRCwrR0FBK0c7SUFDL0cseUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxTQUFjLEVBQUUsU0FBbUI7UUFDM0QsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDMUI7UUFDRCwrREFBK0Q7UUFDL0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDZixLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1gsSUFBSSxDQUFDLGNBQVEsSUFBSSxTQUFTO1lBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0MsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxNQUFtQixFQUFFLElBQVksRUFBRSxNQUF1QixFQUFFLFdBQTRCO1FBQS9GLGlCQVdDO1FBWHlDLHVCQUFBLEVBQUEsY0FBdUI7UUFBRSw0QkFBQSxFQUFBLGtCQUE0QjtRQUMzRixNQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDdkIsSUFBSSxXQUFXLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7b0JBQ3JCLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLDBDQUEwQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsa0NBQU0sR0FBTixVQUFPLE1BQW1CO1FBQ3RCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyx3QkFBd0I7SUFDNUIsQ0FBQztJQUVELDBCQUEwQjtJQUMxQix5Q0FBYSxHQUFiLFVBQWMsTUFBbUIsRUFBRSxJQUFZLEVBQUUsTUFBdUIsRUFBRSxTQUFrQjtRQUEzQyx1QkFBQSxFQUFBLGNBQXVCO1FBQ3BFLElBQUksU0FBUyxFQUFFO1lBQ1gsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQXZIYywyQkFBUyxHQUFzQixJQUFJLENBQUM7SUF3SHZELHdCQUFDO0NBMUhELEFBMEhDLElBQUE7QUFFVSxRQUFBLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUk3QyxRQUFBLE1BQU0sR0FBRztJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtDQUNuQixDQUFBO0FBRVksUUFBQSxNQUFNLEdBQUc7SUFDbEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7Q0FDL0IsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlU291bmRUb29sIH0gZnJvbSBcIi4vYW11c2VTb3VuZFRvb2xcIjtcclxuaW1wb3J0IHsgYW11c2VSZXNVdGlsIH0gZnJvbSBcIi4vYW11c2VSZXNVdGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBtZWludkRhdGEge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBhbXVzZUNvbnRyb2xDbGFzcyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW11c2VDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogYW11c2VDb250cm9sQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGFtdXNlQ29udHJvbENsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHVibGljIGltZ0lkOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgYW11c2VTb3VuZFRvb2w6IGFtdXNlU291bmRUb29sID0gbmV3IGFtdXNlU291bmRUb29sKCk7XHJcbiAgICBwdWJsaWMgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICBwdWJsaWMgYW11c2VSZXNVdGlsID0gYW11c2VSZXNVdGlsO1xyXG5cclxuXHJcbiAgICBkZXNpZ25XaWR0aDpudW1iZXIgID0gMTI4MDsvL+iuvuiuoeWIhui+qOeOh+WuvVxyXG4gICAgZGVzaWduSGVpZ2h0Om51bWJlciA9ICA3MjA7Ly/orr7orqHliIbovqjnjofpq5hcclxuXHJcbiAgICBpc0lwYWRGaXg6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNJcGhvbmVYU01heEZpeDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpcGhvbmVYU01heFk6bnVtYmVyID0gMDtcclxuXHJcbiAgICBpc0xpdWhhaUZpeDpib29sZWFuID0gZmFsc2U7Ly/mmK/lkKbmnInliJjmtbdcclxuICAgIGxpdWhhaVk6bnVtYmVyID0gMDsvL+WImOa1t+mrmOW6plxyXG5cclxuICAgIHNldHNjZW5lTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHNjZW5lTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2i77yM56eSLT7liIbnp5IsIG1tOnNzXHJcbiAgICAqL1xyXG4gICAgdGltZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgICAgIGxldCBtaW51dGU6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlY29uZDogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAlIDYwKTtcclxuICAgICAgICBsZXQgbWluU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKG1pbnV0ZSA8IDEwKSB7ICAgICAgICAvL+WIhumSn1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBcIjBcIiArIG1pbnV0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pblN0ciA9IG1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VjU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDEwKSB7ICAgICAgICAvL+enkuaVsFxyXG4gICAgICAgICAgICBzZWNTdHIgPSBcIjBcIiArIHNlY29uZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlY1N0ciA9IHNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bWluU3RyfToke3NlY1N0cn1gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+i/lOWbnuiMg+WbtOeahOmaj+acuuaVsFxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAwLjk5OTk5OTk5OSkpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFqOWxj+eql+WPo+iDjOaZr+WbvumAgumFjVxyXG4gICAgYWRhcHRlckJnKGJnTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8v6IOM5pmv5aSn5Zu+6YCC6YWNIOetieavlOe8qeaUviDkuI3nlZnpu5HovrlcclxuICAgICAgICBsZXQgX2JnV2lkdGhTY2FsZSA9IGNjLndpblNpemUud2lkdGggLyBiZ05vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGJnTm9kZS5zY2FsZSA9IE1hdGgubWF4KF9iZ1dpZHRoU2NhbGUsIF9iZ0hlaWdodFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i9rOaIkOiKgueCueWdkOagh1xyXG4gICAgY2hhbmdlUG9zKHRvTm9kZTogY2MuTm9kZSwgZnJvbU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodG9Ob2RlKSB8fCAhY2MuaXNWYWxpZChmcm9tTm9kZSkpIHJldHVybiBjYy52MygwLCAwKTtcclxuICAgICAgICBsZXQgX3BvcyA9IHRvTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IF9ucG9zID0gZnJvbU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKF9wb3MpO1xyXG4gICAgICAgIHJldHVybiBfbnBvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1hbmltLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkZWxheUNhbGxCYWNrKHRpbWU6IG51bWJlciwgX2NhbGxiYWNrOiBhbnksIG5vZGVEZWxheT86IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgQ2FudmFzTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGVEZWxheSkpIHtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZSA9IG5vZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KENhbnZhc05vZGUpOy8v6L+Z6YeM5LiN6IO95YGc5q2iQ2FudmFzTm9kZeeahOaJgOacieWKqOS9nFxyXG4gICAgICAgIGNjLnR3ZWVuKENhbnZhc05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGlmIChfY2FsbGJhY2spIF9jYWxsYmFjaygpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgbmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZW5kQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2FsbEJhY2soMC4wMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzcFNrZWwubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIHNwU2tlbC5zZXREaXNwb3NlTGlzdGVuZXIoZW5kQ2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNwU2tlbC5zZXRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgIH1cclxuICAgIHN0b3BTcChzcFNrZWw6IHNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgLy8gc3BTa2VsLmNsZWFyVHJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bqP5YiX5Yqo55S7KOa3u+WKoOS4gOS4quWKqOeUu+WIsOWwvuW3tCDov5jlj6/ku6Xlu7bov5/lh6Dnp5IpXHJcbiAgICBhZGRTZXF1ZW5jZVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGRlbGF5VGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3AsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbXVzZUNvbnRyb2wgPSBhbXVzZUNvbnRyb2xDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb25nID0ge1xyXG4gICAgc3Vuc2V0OiBcInN1bnNldFwiLCAgICAgICAgICAgICAgIC8v5ri45oiP5Zy65pmvXHJcbiAgICBmbG93ZXI6IFwiZmxvd2VyXCIsICAgICAgICAgICAgICAgLy/lpKfljoVcclxuICAgIGJyaWdodDogXCJicmlnaHRcIiwgICAgICAgICAgICAgICAvL+eZu+W9lemhtVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2lyY2xlID0ge1xyXG4gICAgUHVycGxlRGlhbG9nOiBcIlB1cnBsZURpYWxvZ1wiLCAgICAgICAgICAgICAgICAgLy/muLjmiI/nu5PmnZ9cclxuICAgIFN1bW1lckRpYWxvZzogXCJTdW1tZXJEaWFsb2dcIiwgICAgICAgICAgICAgICAgIC8v5pe26Ze05YiwXHJcbiAgICBSb2NrZXREaWFvbGc6IFwiUm9ja2V0RGlhb2xnXCIsICAgICAgICAgICAgICAgICAvL+mAgOWHuiDov5Tlm57lpKfljoVcclxuICAgIFNwaXJpdERpYWxvZzogXCJTcGlyaXREaWFsb2dcIiwgICAgICAgICAgICAgICAgIC8v6K6+572uXHJcbiAgICBZZWxsb3dEaWFsb2c6IFwiWWVsbG93RGlhbG9nXCIsICAgICAgICAgICAgICAgICAvL+eZu+W9lemhtemakOengeWNj+iurlxyXG4gICAgT3JhbmdlRGlhbG9nOiBcIk9yYW5nZURpYWxvZ1wiLCAgICAgICAgICAgICAgIC8v5aS05YOP5pu05pS5XHJcbiAgICBQbGFuZXREaWFsb2c6IFwiUGxhbmV0RGlhbG9nXCIsICAgICAgICAgICAgICAgLy/mnKrop6PplIHlvLnnqpdcclxufSAgICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/PlanetDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87fb2mrp1VFOI1j4qX/zAH6', 'PlanetDialog');
// script/dialog/PlanetDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlanetDialog = /** @class */ (function (_super) {
    __extends(PlanetDialog, _super);
    function PlanetDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    PlanetDialog.prototype.start = function () {
    };
    PlanetDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    PlanetDialog.prototype.onClick_cancel = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    PlanetDialog.prototype.onClick_closeBtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    PlanetDialog = __decorate([
        ccclass
    ], PlanetDialog);
    return PlanetDialog;
}(cc.Component));
exports.default = PlanetDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1BsYW5ldERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFHOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1QkM7UUFyQkcsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFxQjlCLENBQUM7SUFsQmEsNEJBQUssR0FBZjtJQUVBLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0QscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXRCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVCaEM7SUFBRCxtQkFBQztDQXZCRCxBQXVCQyxDQXZCeUMsRUFBRSxDQUFDLFNBQVMsR0F1QnJEO2tCQXZCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2FtdXNlQ29udHJvbFwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0RGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19jYW5jZWwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY2xvc2VCdG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseResBind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'amuseResBind');
// script/tool/amuseResBind.ts

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
cc.Component.prototype.addAutoReleaseAsset = function (_asset) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
};
cc.Component.prototype.addAutoReleaseAssets = function (_assets) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (var _i = 0, _assets_1 = _assets; _i < _assets_1.length; _i++) {
        var _assetOne = _assets_1[_i];
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
};
//-----------------------------------------------------------------------------------------------------AutoReleaseAssets
var ccclass = cc._decorator.ccclass;
var AutoReleaseAssets = /** @class */ (function (_super) {
    __extends(AutoReleaseAssets, _super);
    function AutoReleaseAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicsAssets = [];
        return _this;
    }
    AutoReleaseAssets.prototype.addAutoReleaseAsset = function (_asset) {
        if (cc.isValid(_asset)) {
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("1111111111");
        }
    };
    AutoReleaseAssets.prototype.onDestroy = function () {
        // console.log("222222222");
        for (var index = 0; index < this.dynamicsAssets.length; index++) {
            if (cc.isValid(this.dynamicsAssets[index])) {
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    };
    AutoReleaseAssets = __decorate([
        ccclass
    ], AutoReleaseAssets);
    return AutoReleaseAssets;
}(cc.Component));
exports.default = AutoReleaseAssets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVJlc0JpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBUyxNQUFlO0lBQ2pFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBO0FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBUyxPQUFrQjtJQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pELElBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsS0FBeUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7UUFBN0IsSUFBTSxTQUFTLGdCQUFBO1FBQ2hCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQztBQUNMLENBQUMsQ0FBQTtBQUVELHdIQUF3SDtBQUVqSCxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXNCQztRQXBCVyxvQkFBYyxHQUFlLEVBQUUsQ0FBQzs7SUFvQjVDLENBQUM7SUFsQlUsK0NBQW1CLEdBQTFCLFVBQTJCLE1BQWU7UUFDdEMsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyw2QkFBNkI7U0FDaEM7SUFDTCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLDRCQUE0QjtRQUM1QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0QsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2QztTQUNKO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBCZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FzQnJDO0lBQUQsd0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjhDLEVBQUUsQ0FBQyxTQUFTLEdBc0IxRDtrQkF0Qm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldCA9IGZ1bmN0aW9uKF9hc3NldDpjYy5Bc3NldCkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldCk7XHJcbn1cclxuXHJcbmNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldHMgPSBmdW5jdGlvbihfYXNzZXRzOmNjLkFzc2V0W10pIHtcclxuICAgIGxldCB0ZW1wQXV0byA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgaWYoIWNjLmlzVmFsaWQodGVtcEF1dG8pKXtcclxuICAgICAgICB0ZW1wQXV0byA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBfYXNzZXRPbmUgIG9mIF9hc3NldHMpIHtcclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldE9uZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvUmVsZWFzZUFzc2V0c1xyXG5cclxuY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9SZWxlYXNlQXNzZXRzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGR5bmFtaWNzQXNzZXRzOiBjYy5Bc3NldFtdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0OmNjLkFzc2V0KXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKF9hc3NldCkpe1xyXG4gICAgICAgICAgICBfYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMucHVzaChfYXNzZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjExMTExMTExMTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIyMjIyMjIyMlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5keW5hbWljc0Fzc2V0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCh0aGlzLmR5bmFtaWNzQXNzZXRzW2luZGV4XSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0c1tpbmRleF0uZGVjUmVmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/SpiritDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '373fe8INcZH8KIbG9PDCZWr', 'SpiritDialog');
// script/dialog/SpiritDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiritDialog = /** @class */ (function (_super) {
    __extends(SpiritDialog, _super);
    function SpiritDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.pause_sprite = null;
        _this.setting_sprite = null;
        _this.soundBox = null;
        _this.musicBox = null;
        _this.zhengdongBox = null;
        _this.setting_pausebtn = null;
        _this.setting_ok = null;
        _this.callback = null;
        return _this;
    }
    SpiritDialog.prototype.start = function () {
        this.init();
        amuseGameData_1.agData.showBanner();
    };
    SpiritDialog.prototype.initData = function (data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
        else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    };
    SpiritDialog.prototype.init = function () {
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
        if (!amuseControl_1.amuseControl.amuseSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    SpiritDialog.prototype.onClick_musicbtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchMusic();
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    };
    SpiritDialog.prototype.onClick_soundbtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchEffect();
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    };
    SpiritDialog.prototype.onClick_zhengdongbtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchShock();
        if (!amuseControl_1.amuseControl.amuseSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    SpiritDialog.prototype.onClick_continue_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
        this.callback && this.callback();
    };
    SpiritDialog.prototype.onClick_ok_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    SpiritDialog.prototype.onClick_PrivacyPolicy_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(amuseGameData_1.agData.privacyPolicyUrl);
    };
    SpiritDialog.prototype.onClick_Termsofservicebtn = function () {
        cc.sys.openURL(amuseGameData_1.agData.termsofServiceUrl);
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
    };
    __decorate([
        property(cc.Sprite)
    ], SpiritDialog.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SpiritDialog.prototype, "pause_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SpiritDialog.prototype, "setting_sprite", void 0);
    __decorate([
        property(cc.Node)
    ], SpiritDialog.prototype, "soundBox", void 0);
    __decorate([
        property(cc.Node)
    ], SpiritDialog.prototype, "musicBox", void 0);
    __decorate([
        property(cc.Node)
    ], SpiritDialog.prototype, "zhengdongBox", void 0);
    __decorate([
        property(cc.Node)
    ], SpiritDialog.prototype, "setting_pausebtn", void 0);
    __decorate([
        property(cc.Node)
    ], SpiritDialog.prototype, "setting_ok", void 0);
    SpiritDialog = __decorate([
        ccclass
    ], SpiritDialog);
    return SpiritDialog;
}(cc.Component));
exports.default = SpiritDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1NwaXJpdERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMElDO1FBdElHLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBR3BDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBK0c5QixDQUFDO0lBN0dHLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixzQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxD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QVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EwSWhDO0lBQUQsbUJBQUM7Q0ExSUQsQUEwSUMsQ0ExSXlDLEVBQUUsQ0FBQyxTQUFTLEdBMElyRDtrQkExSW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbXVzZUNvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSB9IGZyb20gXCIuLi90b29sL2FtdXNlR2FtZURhdGFcIjtcbiBcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaXJpdERpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdGl0bGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcGF1c2Vfc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2V0dGluZ19zcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNvdW5kQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHpoZW5nZG9uZ0JveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXR0aW5nX3BhdXNlYnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNldHRpbmdfb2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgYWdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBpZiAoZGF0YS5pc0dhbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBhdXNlX3Nwcml0ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ19vay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nX3BhdXNlYnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2V0dGluZ19zcHJpdGU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfb2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ19wYXVzZWJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuc2hvY2tTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25DbGlja19tdXNpY2J0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5zd2l0Y2hNdXNpYygpO1xuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX3NvdW5kYnRuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnN3aXRjaEVmZmVjdCgpO1xuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tfemhlbmdkb25nYnRuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnN3aXRjaFNob2NrKCk7XG4gICAgICAgIGlmICghYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnNob2NrU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlX2J0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGFnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfb2tfYnRuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGFnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChhZ0RhdGEucHJpdmFjeVBvbGljeVVybCk7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoYWdEYXRhLnRlcm1zb2ZTZXJ2aWNlVXJsKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgfVxuXG4gXG4gICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/RocketDiaolg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9335d26T05DjJw8MacCCseS', 'RocketDiaolg');
// script/dialog/RocketDiaolg.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RocketDiaolg = /** @class */ (function (_super) {
    __extends(RocketDiaolg, _super);
    function RocketDiaolg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    RocketDiaolg.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    RocketDiaolg.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    RocketDiaolg.prototype.onClick_continue_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    RocketDiaolg.prototype.onClick_backHall = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
    };
    RocketDiaolg = __decorate([
        ccclass
    ], RocketDiaolg);
    return RocketDiaolg;
}(cc.Component));
exports.default = RocketDiaolg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1JvY2tldERpYW9sZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNEQ7QUFDNUQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBOEJDO1FBNUJHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBNEI5QixDQUFDO0lBekJhLDRCQUFLLEdBQWY7UUFDSSxzQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0QsMkNBQW9CLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHNCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsc0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQTdCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQThCaEM7SUFBRCxtQkFBQztDQTlCRCxBQThCQyxDQTlCeUMsRUFBRSxDQUFDLFNBQVMsR0E4QnJEO2tCQTlCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlQ29udHJvbCwgc3Ryb25nIH0gZnJvbSBcIi4uL3Rvb2wvYW11c2VDb250cm9sXCI7XG5pbXBvcnQgeyBhZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUdhbWVEYXRhXCI7XG4gXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrZXREaWFvbGcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBhZ0RhdGEuc2hvd0Jhbm5lcigpO1xuICAgIH1cblxuICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGRhdGEuY2FsbGJhY2s7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlX2J0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGFnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFja0hhbGwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBhZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3Ryb25nLmZsb3dlcik7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/PurpleDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'PurpleDialog');
// script/dialog/PurpleDialog.ts

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
var amuseControl_1 = require("../tool/amuseControl");
var amuseGameData_1 = require("../tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PurpleDialog = /** @class */ (function (_super) {
    __extends(PurpleDialog, _super);
    function PurpleDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.playerIcon = null;
        _this.userIcon = null;
        _this.winNode = null;
        _this.failNode = null;
        _this.img = null;
        _this.callback = null;
        return _this;
    }
    PurpleDialog.prototype.initData = function (data) {
        this.img = data.img;
        this.playerIcon.spriteFrame = this.img;
        this.callback = data.callback;
        if (data.state) {
            this.winNode.active = true;
            this.failNode.active = false;
        }
        else {
            this.winNode.active = false;
            this.failNode.active = true;
        }
    };
    PurpleDialog.prototype.onLoad = function () {
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon);
    };
    PurpleDialog.prototype.start = function () {
        amuseControl_1.amuseControl.adapterBg(this.bg);
    };
    PurpleDialog.prototype.onClick_continueBtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        // this.callback && this.callback();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
        this.node.destroy();
    };
    PurpleDialog.prototype.onClick_close = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], PurpleDialog.prototype, "playerIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], PurpleDialog.prototype, "userIcon", void 0);
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "winNode", void 0);
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "failNode", void 0);
    PurpleDialog = __decorate([
        ccclass
    ], PurpleDialog);
    return PurpleDialog;
}(cc.Component));
exports.default = PurpleDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1B1cnBsZURpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNEQ7QUFDNUQsdURBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkRDO1FBeERHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUF3QzlCLENBQUM7SUF0Q0csK0JBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNoQzthQUFJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksMkJBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUdELDRCQUFLLEdBQUw7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDBDQUFtQixHQUFuQjtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLG9DQUFvQztRQUVwQyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHNCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMscUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQWZSLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyRGhDO0lBQUQsbUJBQUM7Q0EzREQsQUEyREMsQ0EzRHlDLEVBQUUsQ0FBQyxTQUFTLEdBMkRyRDtrQkEzRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbXVzZUNvbnRyb2wsIHN0cm9uZyB9IGZyb20gXCIuLi90b29sL2FtdXNlQ29udHJvbFwiO1xuaW1wb3J0IHsgYWdEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvYW11c2VHYW1lRGF0YVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVycGxlRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcGxheWVySWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdXNlckljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmFpbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbWcgPSBkYXRhLmltZztcbiAgICAgICAgdGhpcy5wbGF5ZXJJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pbWc7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBpZihkYXRhLnN0YXRlKXtcbiAgICAgICAgICAgIHRoaXMud2luTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mYWlsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLndpbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZhaWxOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwubG9hZFNwcml0ZShcImhlYWQvXCIgKyBcImhhZWRcIiArIChhZ0RhdGEudXNlckRhdGEuYXZhdGFySWQpLCB0aGlzLnVzZXJJY29uKTtcbiAgICB9XG5cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY29udGludWVCdG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICAvLyB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcblxuICAgICAgICBhZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgYWdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzdHJvbmcuZmxvd2VyKTtcblxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuXG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
