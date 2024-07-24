
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
require('./assets/script/cup');
require('./assets/script/dialog/AmeliaPop');
require('./assets/script/dialog/AvaPop');
require('./assets/script/dialog/EmilyPop');
require('./assets/script/dialog/EvelynPop');
require('./assets/script/dialog/IsabellaPop');
require('./assets/script/dialog/MiaPop');
require('./assets/script/dialog/SophiaPop');
require('./assets/script/flask');
require('./assets/script/glass');
require('./assets/script/prefeb/newhand');
require('./assets/script/tool/princessControl');
require('./assets/script/tool/princessGameData');
require('./assets/script/tool/princessResBind');
require('./assets/script/tool/princessResUtil');
require('./assets/script/tool/princessScroll');
require('./assets/script/tool/princessSoundTool');
require('./assets/script/tool/princessStorage');

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
                    var __filename = 'preview-scripts/assets/script/dialog/AvaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9335d26T05DjJw8MacCCseS', 'AvaPop');
// script/dialog/AvaPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AvaPop = /** @class */ (function (_super) {
    __extends(AvaPop, _super);
    function AvaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    AvaPop.prototype.start = function () {
        princessGameData_1.pgData.showBanner();
    };
    AvaPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    AvaPop.prototype.onClick_continue_btn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
    };
    AvaPop.prototype.onClick_backHall = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
        princessGameData_1.pgData.userData.isHall = true;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.glass);
    };
    AvaPop = __decorate([
        ccclass
    ], AvaPop);
    return AvaPop;
}(cc.Component));
exports.default = AvaPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0F2YVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBaUU7QUFDakUsNkRBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOEJDO1FBNUJHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBNEI5QixDQUFDO0lBekJhLHNCQUFLLEdBQWY7UUFDSSx5QkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0QscUNBQW9CLEdBQXBCO1FBQ0ksaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHlCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNJLGlDQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQix5QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLHlCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIseUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUE3QmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4QjFCO0lBQUQsYUFBQztDQTlCRCxBQThCQyxDQTlCbUMsRUFBRSxDQUFDLFNBQVMsR0E4Qi9DO2tCQTlCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW5jZXNzQ29udHJvbCwgZGVsYXkgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbmltcG9ydCB7IHBnRGF0YSB9IGZyb20gXCIuLi90b29sL3ByaW5jZXNzR2FtZURhdGFcIjtcbiBcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YVBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHBnRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfY29udGludWVfYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKClcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgcGdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrSGFsbCgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHBnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/glass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'glass');
// script/glass.ts

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
var princessControl_1 = require("./tool/princessControl");
var princessGameData_1 = require("./tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var glass = /** @class */ (function (_super) {
    __extends(glass, _super);
    function glass() {
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
    glass.prototype.start = function () {
        this.nowIndex = princessGameData_1.pgData.userData.level;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.updataInfo();
        princessControl_1.princessControl.setsceneNode(this.node);
        princessControl_1.princessControl.adapterBg(this.bg);
        var fine_2 = this.maskBox.getChildByName("fine_2");
        fine_2.getChildByName("mask").active = false;
        this.levelNum.string = "" + this.nowIndex;
        princessControl_1.princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), fine_2.getChildByName("img").getComponent(cc.Sprite));
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
    glass.prototype.updataInfo = function () {
        this.username.string = princessGameData_1.pgData.userData.gameName;
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.icon);
    };
    glass.prototype.onClick_setting = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.IsabellaPop, { isGame: false });
    };
    glass.prototype.showToast = function (text) {
        princessControl_1.princessControl.princessResUtil.showToast(text);
    };
    glass.prototype.onClick_preBtn = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
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
            if (ele.x == -640) {
                if (this.nowIndex > princessGameData_1.pgData.userData.level) {
                    ele.getChildByName("mask").active = true;
                }
                else {
                    ele.getChildByName("mask").active = false;
                }
                princessControl_1.princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            }
            else if (ele.x == 640) {
                ele.x = -640;
            }
            else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(640, 0) }).call(function () {
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
    glass.prototype.onClick_nextBtn = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
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
            if (ele.x == -640) {
                ele.x = 640;
            }
            else if (ele.x == 640) {
                if (this.nowIndex > princessGameData_1.pgData.userData.level) {
                    ele.getChildByName("mask").active = true;
                }
                else {
                    ele.getChildByName("mask").active = false;
                }
                princessControl_1.princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            }
            else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(-640, 0) }).call(function () {
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
    glass.prototype.onClick_blueBook = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessResUtil.showToast("The feature is not available yet");
    };
    glass.prototype.onClick_img = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        cc.log(this.nowIndex);
        if (this.nowIndex > princessGameData_1.pgData.userData.level) { //锁住
            princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EvelynPop);
        }
        else { //没锁
            princessControl_1.princessControl.imgId = this.nowIndex;
            princessGameData_1.pgData.userData.isHall = false;
            princessGameData_1.pgData.storageData();
            cc.director.loadScene(princessControl_1.delay.flask);
        }
    };
    glass.prototype.onClick_startBtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.imgId = princessGameData_1.pgData.userData.level;
        princessGameData_1.pgData.userData.isHall = false;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.flask);
    };
    glass.prototype.click_changeinfo = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.AmeliaPop, {
            callback: function () {
                _this.updataInfo();
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], glass.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], glass.prototype, "maskBox", void 0);
    __decorate([
        property(cc.Node)
    ], glass.prototype, "preBtn", void 0);
    __decorate([
        property(cc.Node)
    ], glass.prototype, "nextBtn", void 0);
    __decorate([
        property(cc.Label)
    ], glass.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Label)
    ], glass.prototype, "username", void 0);
    __decorate([
        property(cc.Sprite)
    ], glass.prototype, "icon", void 0);
    glass = __decorate([
        ccclass
    ], glass);
    return glass;
}(cc.Component));
exports.default = glass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztRQUNuRCxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsc0JBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkQsUUFBUSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QixDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQTdNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FDQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNHO0lBckJOLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpTnpCO0lBQUQsWUFBQztDQWpORCxBQWlOQyxDQWpOa0MsRUFBRSxDQUFDLFNBQVMsR0FpTjlDO2tCQWpOb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW5jZXNzQ29udHJvbCwgZGVsYXksIGRlbGwgfSBmcm9tIFwiLi90b29sL3ByaW5jZXNzQ29udHJvbFwiO1xuaW1wb3J0IHsgcGdEYXRhIH0gZnJvbSBcIi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1hc2tCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJlQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5leHRCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdXNlcm5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbm93SW5kZXggPSAwO1xuICAgIHByaXZhdGUgc3BlZWROdW0gPSAwLjc7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub3dJbmRleCA9IHBnRGF0YS51c2VyRGF0YS5sZXZlbDtcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0YUluZm8oKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIGxldCBmaW5lXzIgPSB0aGlzLm1hc2tCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5lXzJcIik7XG4gICAgICAgIGZpbmVfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIHRoaXMubm93SW5kZXg7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm9wZW5JbWcvXCIgKyBcIm9wZW5fXCIgKyAodGhpcy5ub3dJbmRleCksIGZpbmVfMi5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPj0gMzApIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3dJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmVCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tfcHJlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5uZXh0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX25leHRCdG4sIHRoaXMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXNrQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlID0gdGhpcy5tYXNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgZWxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX2ltZywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0YUluZm8oKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUuc3RyaW5nID0gcGdEYXRhLnVzZXJEYXRhLmdhbWVOYW1lO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJtZWltZWkvXCIgKyBcIm1laW1laVwiICsgKHBnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMuaWNvbik7XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuSXNhYmVsbGFQb3AsIHsgaXNHYW1lOiBmYWxzZSB9KTtcbiAgICB9XG5cblxuICAgIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93VG9hc3QodGV4dCk7XG4gICAgfVxuXG4gICAgb25DbGlja19wcmVCdG4oKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuXG4gICAgICAgIHRoaXMucHJlQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19wcmVCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5leHRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX25leHRCdG4sIHRoaXMpO1xuXG4gICAgICAgIGNjLmxvZyhcIuS4iuS4gOmhtVwiKTtcbiAgICAgICAgdGhpcy5ub3dJbmRleCA9IHRoaXMubm93SW5kZXggLSAxO1xuICAgICAgICBpZiAodGhpcy5ub3dJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5vd0luZGV4ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIHRoaXMubm93SW5kZXg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXNrQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlID0gdGhpcy5tYXNrQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGVsZSk7XG4gICAgICAgICAgICBpZiAoZWxlLnggPT0gLTY0MCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID4gcGdEYXRhLnVzZXJEYXRhLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJvcGVuSW1nL1wiICsgXCJvcGVuX1wiICsgKHRoaXMubm93SW5kZXgpLCBlbGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZSkudG8odGhpcy5zcGVlZE51bSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnggPT0gNjQwKSB7XG4gICAgICAgICAgICAgICAgZWxlLnggPSAtNjQwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGUueCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZWxlKS50byh0aGlzLnNwZWVkTnVtLCB7IHBvc2l0aW9uOiBjYy52Myg2NDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19wcmVCdG4sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tfbmV4dEJ0biwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMubm93SW5kZXggPj0gMzApIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3dJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX25leHRCdG4oKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5sb2coXCLkuIvkuIDpobVcIik7XG5cbiAgICAgICAgdGhpcy5wcmVCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrX3ByZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMubmV4dEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tfbmV4dEJ0biwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5ub3dJbmRleCA9IHRoaXMubm93SW5kZXggKyAxO1xuICAgICAgICBpZiAodGhpcy5ub3dJbmRleCA+PSAzMCkge1xuICAgICAgICAgICAgdGhpcy5ub3dJbmRleCA9IDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZXZlbE51bS5zdHJpbmcgPSBcIlwiICsgdGhpcy5ub3dJbmRleDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hc2tCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGUgPSB0aGlzLm1hc2tCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZWxlKTtcblxuXG4gICAgICAgICAgICBpZiAoZWxlLnggPT0gLTY0MCkge1xuICAgICAgICAgICAgICAgIGVsZS54ID0gNjQwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGUueCA9PSA2NDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub3dJbmRleCA+IHBnRGF0YS51c2VyRGF0YS5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5sb2FkU3ByaXRlKFwib3BlbkltZy9cIiArIFwib3Blbl9cIiArICh0aGlzLm5vd0luZGV4KSwgZWxlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlbGUpLnRvKHRoaXMuc3BlZWROdW0sIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS54ID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlbGUpLnRvKHRoaXMuc3BlZWROdW0sIHsgcG9zaXRpb246IGNjLnYzKC02NDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja19wcmVCdG4sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tfbmV4dEJ0biwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID49IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnByZUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZXh0QnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm93SW5kZXggPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcmVCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tfYmx1ZUJvb2soKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dUb2FzdChcIlRoZSBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgeWV0XCIpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfaW1nKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgY2MubG9nKHRoaXMubm93SW5kZXgpXG4gICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID4gcGdEYXRhLnVzZXJEYXRhLmxldmVsKSB7ICAgICAgIC8v6ZSB5L2PXG4gICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dEaWFsb2coZGVsbC5FdmVseW5Qb3ApXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ayoemUgVxuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLmltZ0lkID0gdGhpcy5ub3dJbmRleDtcbiAgICAgICAgICAgIHBnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGRlbGF5LmZsYXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tfc3RhcnRCdG4oKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwZ0RhdGEudXNlckRhdGEubGV2ZWw7XG4gICAgICAgIHBnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSBmYWxzZTtcbiAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5mbGFzayk7XG4gICAgfVxuXG5cbiAgICBjbGlja19jaGFuZ2VpbmZvKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuQW1lbGlhUG9wLCB7XG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRhSW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxufVxuIl19
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
        cc.tween(this.dong1_top).to(0.5, { width: 60, height: 60 }).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 60, height: 60 }).delay(0.1).call(function () {
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
        cc.tween(this.dong2_top).to(0.5, { width: 60, height: 60 }).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 60, height: 60 }).delay(0.1).call(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL25ld2hhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RUM7UUF6RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUl0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZERyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FB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U0FBUyxHQTRFaEQ7a0JBNUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2hhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZzFfdG9wOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvbmdkb25nMV9ib3R0b206IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkb25nMl90b3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZ2RvbmcyX2JvdHRvbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dkb25nMSgpIHtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRvbmcxX3RvcC53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuZG9uZ2RvbmcxX2JvdHRvbS53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmhlaWdodCA9IDUwMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZzFfdG9wKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSk7XG5cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRvbmcxX3RvcCkudG8oMC41LCB7IHdpZHRoOiA2MCwgaGVpZ2h0OiA2MH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSkudG8oMC41LCB7IHdpZHRoOiA2MCwgaGVpZ2h0OiA2MH0pLmRlbGF5KDAuMSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgaGlkZWRvbmcxKCkge1xuICAgICAgICB0aGlzLmRvbmcxX3RvcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2hvd2RvbmcyKCkge1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZG9uZzJfdG9wLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5kb25nZG9uZzJfYm90dG9tLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nMl90b3ApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nZG9uZzJfYm90dG9tKTtcblxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZzJfdG9wKS50bygwLjUsIHsgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb25nZG9uZzJfYm90dG9tKS50bygwLjUsIHsgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwfSkuZGVsYXkoMC4xKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/EvelynPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87fb2mrp1VFOI1j4qX/zAH6', 'EvelynPop');
// script/dialog/EvelynPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EvelynPop = /** @class */ (function (_super) {
    __extends(EvelynPop, _super);
    function EvelynPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    EvelynPop.prototype.start = function () {
    };
    EvelynPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    EvelynPop.prototype.onClick_cancel = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    EvelynPop.prototype.onClick_closeBtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    EvelynPop = __decorate([
        ccclass
    ], EvelynPop);
    return EvelynPop;
}(cc.Component));
exports.default = EvelynPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0V2ZWx5blBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF1QkM7UUFyQkcsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFxQjlCLENBQUM7SUFsQmEseUJBQUssR0FBZjtJQUVBLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0Qsa0NBQWMsR0FBZDtRQUNJLGlDQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0NBQWdCLEdBQWhCO1FBQ0ksaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF0QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1QjdCO0lBQUQsZ0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QnNDLEVBQUUsQ0FBQyxTQUFTLEdBdUJsRDtrQkF2Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmluY2Vzc0NvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbiBcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZWx5blBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgXG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfY2FuY2VsKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2Nsb3NlQnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/IsabellaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '373fe8INcZH8KIbG9PDCZWr', 'IsabellaPop');
// script/dialog/IsabellaPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IsabellaPop = /** @class */ (function (_super) {
    __extends(IsabellaPop, _super);
    function IsabellaPop() {
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
    IsabellaPop.prototype.start = function () {
        this.init();
        princessGameData_1.pgData.showBanner();
    };
    IsabellaPop.prototype.initData = function (data) {
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
    IsabellaPop.prototype.init = function () {
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
        if (!princessControl_1.princessControl.princessSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    IsabellaPop.prototype.onClick_musicbtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchMusic();
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    };
    IsabellaPop.prototype.onClick_soundbtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchEffect();
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    };
    IsabellaPop.prototype.onClick_zhengdongbtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchShock();
        if (!princessControl_1.princessControl.princessSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    IsabellaPop.prototype.onClick_continue_btn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
        this.callback && this.callback();
    };
    IsabellaPop.prototype.onClick_ok_btn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
    };
    IsabellaPop.prototype.onClick_PrivacyPolicy_btn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(princessGameData_1.pgData.privacyPolicyUrl);
    };
    IsabellaPop.prototype.onClick_Termsofservicebtn = function () {
        cc.sys.openURL(princessGameData_1.pgData.termsofServiceUrl);
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
    };
    __decorate([
        property(cc.Sprite)
    ], IsabellaPop.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], IsabellaPop.prototype, "pause_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], IsabellaPop.prototype, "setting_sprite", void 0);
    __decorate([
        property(cc.Node)
    ], IsabellaPop.prototype, "soundBox", void 0);
    __decorate([
        property(cc.Node)
    ], IsabellaPop.prototype, "musicBox", void 0);
    __decorate([
        property(cc.Node)
    ], IsabellaPop.prototype, "zhengdongBox", void 0);
    __decorate([
        property(cc.Node)
    ], IsabellaPop.prototype, "setting_pausebtn", void 0);
    __decorate([
        property(cc.Node)
    ], IsabellaPop.prototype, "setting_ok", void 0);
    IsabellaPop = __decorate([
        ccclass
    ], IsabellaPop);
    return IsabellaPop;
}(cc.Component));
exports.default = IsabellaPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0lzYWJlbGxhUG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCw2REFBa0Q7QUFHNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwSUM7UUF0SUcsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFHcEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUErRzlCLENBQUM7SUE3R0csMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLHlCQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENB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RSxDQUFDLElBQUksQ0FBQzttREFDUztJQXpCVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEkvQjtJQUFELGtCQUFDO0NBMUlELEFBMElDLENBMUl3QyxFQUFFLENBQUMsU0FBUyxHQTBJcEQ7a0JBMUlvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvcHJpbmNlc3NDb250cm9sXCI7XG5pbXBvcnQgeyBwZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG4gXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc2FiZWxsYVBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdGl0bGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcGF1c2Vfc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2V0dGluZ19zcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNvdW5kQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHpoZW5nZG9uZ0JveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXR0aW5nX3BhdXNlYnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNldHRpbmdfb2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgcGdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBpZiAoZGF0YS5pc0dhbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBhdXNlX3Nwcml0ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ19vay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nX3BhdXNlYnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2V0dGluZ19zcHJpdGU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfb2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ19wYXVzZWJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuc2hvY2tTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25DbGlja19tdXNpY2J0bigpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5zd2l0Y2hNdXNpYygpO1xuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX3NvdW5kYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLnN3aXRjaEVmZmVjdCgpO1xuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tfemhlbmdkb25nYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLnN3aXRjaFNob2NrKCk7XG4gICAgICAgIGlmICghcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLnNob2NrU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlX2J0bigpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHBnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfb2tfYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHBnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChwZ0RhdGEucHJpdmFjeVBvbGljeVVybCk7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwocGdEYXRhLnRlcm1zb2ZTZXJ2aWNlVXJsKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgfVxuXG4gXG4gICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/SophiaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'SophiaPop');
// script/dialog/SophiaPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SophiaPop = /** @class */ (function (_super) {
    __extends(SophiaPop, _super);
    function SophiaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    SophiaPop.prototype.start = function () {
        princessGameData_1.pgData.showBanner();
    };
    SophiaPop.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    SophiaPop.prototype.onClick_AD_btn = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                princessGameData_1.pgData.closeBanner();
            });
        });
    };
    SophiaPop.prototype.onClick_restart = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
    };
    SophiaPop = __decorate([
        ccclass
    ], SophiaPop);
    return SophiaPop;
}(cc.Component));
exports.default = SophiaPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1NvcGhpYVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsNkRBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBaUNDO1FBL0JHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWEsSUFBSSxDQUFDOztJQThCckMsQ0FBQztJQTVCRyx5QkFBSyxHQUFMO1FBQ0kseUJBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQUk7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7SUFHRCxrQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRyxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELHlCQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIseUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIseUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBaENnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUM3QjtJQUFELGdCQUFDO0NBakNELEFBaUNDLENBakNzQyxFQUFFLENBQUMsU0FBUyxHQWlDbEQ7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvcHJpbmNlc3NDb250cm9sXCI7XG5pbXBvcnQgeyBwZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3BoaWFQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQURjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHJlc3RhcnRDYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHBnRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgICAgIHRoaXMuQURjYWxsYmFjayA9IGRhdGEuQURjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgPSBkYXRhLnJlc3RhcnRDYWxsQmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfQURfYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcGdEYXRhLnNob3dWaWRlbygoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLkFEY2FsbGJhY2sgJiYgdGhpcy5BRGNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHBnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfcmVzdGFydCgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMucmVzdGFydENhbGxCYWNrICYmIHRoaXMucmVzdGFydENhbGxCYWNrKClcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgcGdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/AmeliaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdbf3RLZZFMa4QNxIkpdf+0', 'AmeliaPop');
// script/dialog/AmeliaPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AmeliaPop = /** @class */ (function (_super) {
    __extends(AmeliaPop, _super);
    function AmeliaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatarIcon = null;
        _this.contentBox = null;
        _this.editBox = null;
        _this.callback = null;
        _this.clickid = 0;
        return _this;
    }
    AmeliaPop.prototype.start = function () {
        var _this = this;
        this.editBox.string = princessGameData_1.pgData.userData.gameName;
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.avatarIcon);
        this.clickid = princessGameData_1.pgData.userData.avatarId;
        var _loop_1 = function (i) {
            var item = this_1.contentBox.children[i];
            var icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, function () {
                _this.changeIcon((i + 1));
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.contentBox.children.length; i++) {
            _loop_1(i);
        }
    };
    AmeliaPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    AmeliaPop.prototype.onClick_agreen = function () {
        princessGameData_1.pgData.userData.gameName = this.editBox.string;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.userData.avatarId = this.clickid;
        princessGameData_1.pgData.storageData();
        this.callback && this.callback();
        this.node.destroy();
    };
    AmeliaPop.prototype.onClick_close = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    AmeliaPop.prototype.onClick_cannel = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    AmeliaPop.prototype.changeIcon = function (index) {
        this.clickid = index;
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (index), this.avatarIcon);
    };
    __decorate([
        property(cc.Sprite)
    ], AmeliaPop.prototype, "avatarIcon", void 0);
    __decorate([
        property(cc.Node)
    ], AmeliaPop.prototype, "contentBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], AmeliaPop.prototype, "editBox", void 0);
    AmeliaPop = __decorate([
        ccclass
    ], AmeliaPop);
    return AmeliaPop;
}(cc.Component));
exports.default = AmeliaPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0FtZWxpYVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsNkRBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMkRDO1FBdkRHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTJDaEIsQ0FBQztJQXpDRyx5QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsaUNBQWUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsQ0FBQyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLE9BQU8sR0FBRyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0NBQy9CLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxTQUFPLENBQUM7OztRQU5iLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUEvQyxDQUFDO1NBT1Q7SUFDTCxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDOUMsaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4Qyx5QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLElBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlDQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ007SUFWVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkQ3QjtJQUFELGdCQUFDO0NBM0RELEFBMkRDLENBM0RzQyxFQUFFLENBQUMsU0FBUyxHQTJEbEQ7a0JBM0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvcHJpbmNlc3NDb250cm9sXCI7XG5pbXBvcnQgeyBwZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtZWxpYVBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYXZhdGFySWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cblxuICAgIGNsaWNraWQgPSAwO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWRpdEJveC5zdHJpbmcgPSBwZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWU7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy5hdmF0YXJJY29uKTtcbiAgICAgICAgdGhpcy5jbGlja2lkID0gcGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnRCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmZpbmQoXCJtYXNrL2ljb25cIiwgaXRlbSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJtZWltZWkvXCIgKyBcIm1laW1laVwiICsgKGkgKyAxKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbigoaSArIDEpKVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYWdyZWVuKCkge1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWUgPSB0aGlzLmVkaXRCb3guc3RyaW5nXG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuYXZhdGFySWQgPSB0aGlzLmNsaWNraWQ7XG4gICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jYW5uZWwoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2VJY29uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jbGlja2lkID0gaW5kZXg7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAoaW5kZXgpLCB0aGlzLmF2YXRhckljb24pO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'princessScroll');
// script/tool/princessScroll.ts

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
var princessScroll = /** @class */ (function (_super) {
    __extends(princessScroll, _super);
    function princessScroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    princessScroll.prototype.onLoad = function () {
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
    princessScroll.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    princessScroll.prototype._check_collision = function (node_o_) {
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
    princessScroll.prototype._event_update_opacity = function () {
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
    princessScroll = __decorate([
        ccclass
    ], princessScroll);
    return princessScroll;
}(cc.Component));
exports.default = princessScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxxQkFBcUI7QUFFckI7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBa0RBLENBQUM7SUFqREcsa0ZBQWtGO0lBQ2xGLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUNELHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDNUIsbURBQTBCLEdBQWxDLFVBQW1DLE9BQVk7UUFDM0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDaEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixHQUFHLEVBQ0gsR0FBRyxDQUNOLENBQUM7UUFDRixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELFVBQVU7SUFDRix5Q0FBZ0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELHlCQUF5QjtRQUN6QixPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMENBQTBDO0lBQ2xDLDhDQUFxQixHQUE3QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRGdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrRGxDO0lBQUQscUJBQUM7Q0FsREQsQUFrREMsQ0FsRDJDLEVBQUUsQ0FBQyxTQUFTLEdBa0R2RDtrQkFsRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoq5YiX6KGoZHJhdyBjYWxs5LyY5YyW57uE5Lu2ICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJpbmNlc3NTY3JvbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2VnbWVudGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuI3lrZjlnKhTY3JvbGxWaWV357uE5Lu277yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS6i+S7tuebkeWQrFxuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVNT1ZFRCwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVPUkRFUiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKirlip/og73lh73mlbAqKioqKioqKioqKioqKiogKi9cbiAgICAvKirojrflj5blnKjkuJbnlYzlnZDmoIfns7vkuIvnmoToioLngrnljIXlm7Tnm5Io5LiN5YyF5ZCr6Ieq6Lqr5r+A5rS755qE5a2Q6IqC54K56IyD5Zu0KSAqL1xuICAgIHByaXZhdGUgX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXzogYW55KTogY2MuUmVjdCB7XG4gICAgICAgIGxldCB3X246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLndpZHRoO1xuICAgICAgICBsZXQgaF9uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCByZWN0X28gPSBjYy5yZWN0KFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnggKiB3X24sIFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnkgKiBoX24sIFxuICAgICAgICAgICAgd19uLCBcbiAgICAgICAgICAgIGhfblxuICAgICAgICApO1xuICAgICAgICBub2RlX29fLl9jYWxjdWxXb3JsZE1hdHJpeCgpO1xuICAgICAgICByZWN0X28udHJhbnNmb3JtTWF0NChyZWN0X28sIG5vZGVfb18uX3dvcmxkTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHJlY3RfbztcbiAgICB9XG4gICAgLyoq5qOA5rWL56Kw5pKeICovXG4gICAgcHJpdmF0ZSBfY2hlY2tfY29sbGlzaW9uKG5vZGVfb186IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICBsZXQgcmVjdDJfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXyk7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS/nemZqeiMg+WbtFxuICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG4gICAgICAgIHJldHVybiByZWN0MV9vLmludGVyc2VjdHMocmVjdDJfbyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuiHquWumuS5ieS6i+S7tioqKioqKioqKioqKioqKiAgKi9cbiAgICBwcml2YXRlIF9ldmVudF91cGRhdGVfb3BhY2l0eSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LmNoaWxkcmVuLmZvckVhY2godjFfbz0+IHtcbiAgICAgICAgICAgIGxldCByZWN0MV9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQucGFyZW50KTtcbiAgICAgICAgICAgIHJlY3QxX28ud2lkdGggKz0gcmVjdDFfby53aWR0aCAqIDAuNTtcbiAgICAgICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby54IC09IHJlY3QxX28ud2lkdGggKiAwLjI1O1xuICAgICAgICAgICAgcmVjdDFfby55IC09IHJlY3QxX28uaGVpZ2h0ICogMC4yNTtcblxuICAgICAgICAgICAgdjFfby5vcGFjaXR5ID0gdGhpcy5fY2hlY2tfY29sbGlzaW9uKHYxX28pID8gMjU1IDogMDtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessSoundTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'princessSoundTool');
// script/tool/princessSoundTool.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessSoundTool = void 0;
var princessStorage_1 = require("./princessStorage");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var princessSoundTool = /** @class */ (function () {
    function princessSoundTool() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_shock", true);
    }
    princessSoundTool.prototype.initBtnClickEffect = function () {
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
    princessSoundTool.prototype.initbgmMusic = function () {
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
    princessSoundTool.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    princessSoundTool.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    princessSoundTool.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    princessSoundTool.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    princessSoundTool.prototype.playEffect = function (audio, isLoop, callback) {
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
    princessSoundTool.prototype.playEffectWithPath = function (path, isLoop) {
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
    princessSoundTool.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    princessSoundTool.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    princessSoundTool.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    princessSoundTool.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    princessSoundTool.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    princessSoundTool.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    princessSoundTool.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    princessSoundTool.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    princessSoundTool.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return princessSoundTool;
}());
exports.princessSoundTool = princessSoundTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1NvdW5kVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTzs7O0FBRVAscURBQW9EO0FBR3BELElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFFbEM7SUFvQ0k7UUE5QlEsbUJBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVMsR0FBaUIsSUFBSSxDQUFDO1FBNEJuQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlDQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEdBQUcsaUNBQWUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQ0FBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBN0JNLDhDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU87UUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7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QUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTCx3QkFBQztBQUFELENBckpBLEFBcUpDLElBQUE7QUFySlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/pn7PpopHlt6XlhbfnsbtcclxuXHJcbmltcG9ydCB7IHByaW5jZXNzU3RvcmFnZSB9IGZyb20gXCIuL3ByaW5jZXNzU3RvcmFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IGNvbW1vbkJ0blBhdGggPSBcInNvdW5kL2NsaWNrXCI7XHJcbmNvbnN0IGNvbW1vbkJnbVBhdGggPSBcInNvdW5kL2JnbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHByaW5jZXNzU291bmRUb29sIHtcclxuICAgICBcclxuICAgIG11c2ljU3dpdGNoOiBib29sZWFuOyAgICAvL+iDjOaZr+mfs+S5kOW8gOWFs1xyXG4gICAgZWZmZWN0U3dpdGNoOiBib29sZWFuOyAgIC8v6Z+z5pWI5byA5YWzXHJcbiAgICBzaG9ja1N3aXRjaDogYm9vbGVhbjsgICAgLy8g6ZyH5Yqo5byA5YWzICAgXHJcblxyXG4gICAgcHJpdmF0ZSBidG5DbGlja0VmZmVjdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmdtTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluaXRCdG5DbGlja0VmZmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idG5DbGlja0VmZmVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CdG5QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xpY2tFZmZlY3QgPSBjbGlwO1xyXG4gICAgICAgICAgICBjbGlwLmFkZFJlZigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0YmdtTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtTXVzaWMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoY29tbW9uQmdtUGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJnbU11c2ljID0gY2xpcDtcclxuICAgICAgICAgICAgdGhpcy5jb21tb25iZ21NdXNpYygpO1xyXG4gICAgICAgICAgICBjbGlwLmFkZFJlZigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfZWZmZWN0XCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2hvY2tTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfc2hvY2tcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3aXRjaE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXVzaWNTd2l0Y2ggPSAhdGhpcy5tdXNpY1N3aXRjaDtcclxuICAgICAgICBwcmluY2Vzc1N0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdGhpcy5tdXNpY1N3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyck11c2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmN1cnJNdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0U3dpdGNoID0gIXRoaXMuZWZmZWN0U3dpdGNoO1xyXG4gICAgICAgIHByaW5jZXNzU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdGhpcy5lZmZlY3RTd2l0Y2gpO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoU2hvY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9ICF0aGlzLnNob2NrU3dpdGNoO1xyXG4gICAgICAgIHByaW5jZXNzU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0aGlzLnNob2NrU3dpdGNoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBsYXlNdXNpYyhhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3Vyck11c2ljID0gYXVkaW87Ly/kv53lrZjlvZPliY3og4zmma/pn7PkuZBcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhhdWRpbywgaXNMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3QoYXVkaW86IGNjLkF1ZGlvQ2xpcCwgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5lZmZlY3RTd2l0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSUQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0V2l0aFBhdGgocGF0aDogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhdGhpcy5lZmZlY3RTd2l0Y2gpIHJldHVybjtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L296Z+z5pWI6LWE5rqQ5aSx6LSlXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgaXNMb29wLCAxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc3VtZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wRWZmZWN0KGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwYXVzZShhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc3VtZShhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21tb25CdG5DbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QodGhpcy5idG5DbGlja0VmZmVjdCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21tb25iZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmJnbU11c2ljKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/EmilyPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'EmilyPop');
// script/dialog/EmilyPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EmilyPop = /** @class */ (function (_super) {
    __extends(EmilyPop, _super);
    function EmilyPop() {
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
    EmilyPop.prototype.initData = function (data) {
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
    EmilyPop.prototype.onLoad = function () {
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon);
    };
    EmilyPop.prototype.start = function () {
        princessControl_1.princessControl.adapterBg(this.bg);
    };
    EmilyPop.prototype.onClick_continueBtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        // this.callback && this.callback();
        princessGameData_1.pgData.userData.isHall = true;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.glass);
        this.node.destroy();
    };
    EmilyPop.prototype.onClick_close = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], EmilyPop.prototype, "playerIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], EmilyPop.prototype, "userIcon", void 0);
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "winNode", void 0);
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "failNode", void 0);
    EmilyPop = __decorate([
        ccclass
    ], EmilyPop);
    return EmilyPop;
}(cc.Component));
exports.default = EmilyPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0VtaWx5UG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFpRTtBQUNqRSw2REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyREM7UUF4REcsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQW1CLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQXdDOUIsQ0FBQztJQXRDRywyQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQUk7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxDQUFDLHlCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBR0Qsd0JBQUssR0FBTDtRQUNJLGlDQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CO1FBQ0ksaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCxvQ0FBb0M7UUFFcEMseUJBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5Qix5QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHVCQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLGlDQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQWZSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRDVCO0lBQUQsZUFBQztDQTNERCxBQTJEQyxDQTNEcUMsRUFBRSxDQUFDLFNBQVMsR0EyRGpEO2tCQTNEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW5jZXNzQ29udHJvbCwgZGVsYXkgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbmltcG9ydCB7IHBnRGF0YSB9IGZyb20gXCIuLi90b29sL3ByaW5jZXNzR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaWx5UG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcGxheWVySWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdXNlckljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmFpbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbWcgPSBkYXRhLmltZztcbiAgICAgICAgdGhpcy5wbGF5ZXJJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pbWc7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBpZihkYXRhLnN0YXRlKXtcbiAgICAgICAgICAgIHRoaXMud2luTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mYWlsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLndpbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZhaWxOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbik7XG4gICAgfVxuXG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlQnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgLy8gdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG5cbiAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZGVsYXkuZ2xhc3MpO1xuXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrX2Nsb3NlKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessResBind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'princessResBind');
// script/tool/princessResBind.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1Jlc0JpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBUyxNQUFlO0lBQ2pFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBO0FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBUyxPQUFrQjtJQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pELElBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsS0FBeUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7UUFBN0IsSUFBTSxTQUFTLGdCQUFBO1FBQ2hCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQztBQUNMLENBQUMsQ0FBQTtBQUVELHdIQUF3SDtBQUVqSCxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXNCQztRQXBCVyxvQkFBYyxHQUFlLEVBQUUsQ0FBQzs7SUFvQjVDLENBQUM7SUFsQlUsK0NBQW1CLEdBQTFCLFVBQTJCLE1BQWU7UUFDdEMsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyw2QkFBNkI7U0FDaEM7SUFDTCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLDRCQUE0QjtRQUM1QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0QsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2QztTQUNKO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBCZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FzQnJDO0lBQUQsd0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjhDLEVBQUUsQ0FBQyxTQUFTLEdBc0IxRDtrQkF0Qm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldCA9IGZ1bmN0aW9uKF9hc3NldDpjYy5Bc3NldCkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldCk7XHJcbn1cclxuXHJcbmNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldHMgPSBmdW5jdGlvbihfYXNzZXRzOmNjLkFzc2V0W10pIHtcclxuICAgIGxldCB0ZW1wQXV0byA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgaWYoIWNjLmlzVmFsaWQodGVtcEF1dG8pKXtcclxuICAgICAgICB0ZW1wQXV0byA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBfYXNzZXRPbmUgIG9mIF9hc3NldHMpIHtcclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldE9uZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvUmVsZWFzZUFzc2V0c1xyXG5cclxuY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9SZWxlYXNlQXNzZXRzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGR5bmFtaWNzQXNzZXRzOiBjYy5Bc3NldFtdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0OmNjLkFzc2V0KXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKF9hc3NldCkpe1xyXG4gICAgICAgICAgICBfYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMucHVzaChfYXNzZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjExMTExMTExMTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIyMjIyMjIyMlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5keW5hbWljc0Fzc2V0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCh0aGlzLmR5bmFtaWNzQXNzZXRzW2luZGV4XSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0c1tpbmRleF0uZGVjUmVmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/MiaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'MiaPop');
// script/dialog/MiaPop.ts

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
var princessControl_1 = require("../tool/princessControl");
var princessGameData_1 = require("../tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MiaPop = /** @class */ (function (_super) {
    __extends(MiaPop, _super);
    function MiaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    MiaPop.prototype.start = function () {
        princessGameData_1.pgData.showBanner();
    };
    MiaPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    MiaPop.prototype.onClick_Agreen = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
    };
    MiaPop.prototype.onClick_PrivacyPolicy_btn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(princessGameData_1.pgData.privacyPolicyUrl);
    };
    MiaPop.prototype.onClick_Termsofservicebtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(princessGameData_1.pgData.termsofServiceUrl);
    };
    MiaPop = __decorate([
        ccclass
    ], MiaPop);
    return MiaPop;
}(cc.Component));
exports.default = MiaPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL01pYVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyREFBMEQ7QUFDMUQsNkRBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNkJDO1FBM0JHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBMkI5QixDQUFDO0lBekJHLHNCQUFLLEdBQUw7UUFDSSx5QkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQWMsR0FBZDtRQUNJLGlDQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQix5QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBeUIsR0FBekI7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHlCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMENBQXlCLEdBQXpCO1FBQ0ksaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyx5QkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTNCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZCMUI7SUFBRCxhQUFDO0NBN0JELEFBNkJDLENBN0JtQyxFQUFFLENBQUMsU0FBUyxHQTZCL0M7a0JBN0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIFxuaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvcHJpbmNlc3NDb250cm9sXCI7XG5pbXBvcnQgeyBwZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG4gXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaWFQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBwZ0RhdGEuc2hvd0Jhbm5lcigpO1xuICAgIH1cblxuICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGRhdGEuY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgb25DbGlja19BZ3JlZW4oKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBwZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG4gXG4gICAgb25DbGlja19Qcml2YWN5UG9saWN5X2J0bigpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKHBnRGF0YS5wcml2YWN5UG9saWN5VXJsKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX1Rlcm1zb2ZzZXJ2aWNlYnRuKCkge1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwocGdEYXRhLnRlcm1zb2ZTZXJ2aWNlVXJsKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'princessResUtil');
// script/tool/princessResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessResUtil = void 0;
var princessResBind_1 = require("./princessResBind");
var princessControl_1 = require("./princessControl");
var princessResUtil = /** @class */ (function () {
    function princessResUtil() {
    }
    // 绑定资源释放
    princessResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(princessResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(princessResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    princessResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    princessResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    princessResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    princessResUtil.loadSprite = function (picPath, sprite, defPath) {
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
    princessResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            princessControl_1.princessControl.princessResUtil.bindResAsset(node, prefab);
            var parentNode = princessControl_1.princessControl.getsceneNode();
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
    princessResUtil.showToast = function (text) {
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
                toastLabel.getComponent(cc.Label).string = text;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    return princessResUtil;
}());
exports.princessResUtil = princessResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1Jlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVM7OztBQUVULHFEQUFnRDtBQUNoRCxxREFBb0Q7QUFJcEQ7SUFBQTtJQW9HQSxDQUFDO0lBbEdHLFNBQVM7SUFDSyw0QkFBWSxHQUExQixVQUEyQixNQUFlLEVBQUUsS0FBZTtRQUN2RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGNBQWM7SUFDQSwwQkFBVSxHQUF4QixVQUF5QixLQUFlO1FBQ3BDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxvQ0FBb0M7SUFDdEIseUJBQVMsR0FBdkIsVUFBd0IsU0FBaUIsRUFBRSxTQUEwQixFQUFFLE9BQXNCO1FBQ3pGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUs7SUFDUyw0QkFBWSxHQUExQixVQUEyQixTQUFpQixFQUFFLFNBQTBCO1FBQ3BFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUztJQUNLLDBCQUFV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t+exu1xyXG5cclxuaW1wb3J0IHByaW5jZXNzUmVzQmluZCBmcm9tIFwiLi9wcmluY2Vzc1Jlc0JpbmRcIjtcclxuaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4vcHJpbmNlc3NDb250cm9sXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBc3NldENhbGxGdW5jID0gKGVycjogRXJyb3IsIGFzc2V0RGF0YTogY2MuQXNzZXQpID0+IHZvaWQ7XHJcbiBcclxuZXhwb3J0IGNsYXNzIHByaW5jZXNzUmVzVXRpbCB7XHJcbiAgICAgXHJcbiAgICAvLyDnu5HlrprotYTmupDph4rmlL5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmluZFJlc0Fzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChwcmluY2Vzc1Jlc0JpbmQpO1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0ZW1wQXV0bykpIHtcclxuICAgICAgICAgICAgdGVtcEF1dG8gPSBwYXJlbnQuYWRkQ29tcG9uZW50KHByaW5jZXNzUmVzQmluZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOajgOa1i+W8leeUqOiuoeaVsOWQjumHiuaUvui1hOa6kFxyXG4gICAgcHVibGljIHN0YXRpYyByZWxlYXNlUmVzKGFzc2V0OiBjYy5Bc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGFzc2V0KSAmJiBhc3NldC5yZWZDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9vSjlv4XpobvphY3lkIhhZGRBdXRvUmVsZWFzZUFzc2V0IOS9v+eUqOe7keWumui1hOa6kClcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0KGFzc2V0UGF0aDogc3RyaW5nLCBhc3NldFR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgYXNzZXRDYjogQXNzZXRDYWxsRnVuYyk6IHZvaWQge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGFzc2V0UGF0aCwgYXNzZXRUeXBlLCBhc3NldENiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mihOWKoOi9vVxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVsb2FkQXNzZXQoYXNzZXRQYXRoOiBzdHJpbmcsIGFzc2V0VHlwZTogdHlwZW9mIGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoYXNzZXRQYXRoLCBhc3NldFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9veWNleW8oOWbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3ByaXRlKHBpY1BhdGg6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGRlZlBhdGg/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZmluaXNoQ2FsbGJhY2sgPSAoZXJyLCBzcDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZlBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGUoZGVmUGF0aCwgc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoc3ByaXRlKSAmJiBzcHJpdGVbXCJuZXdVcmxcIl0gPT0gcGljUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFkZEF1dG9SZWxlYXNlQXNzZXQoc3ApO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMoc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZVtcIm5ld1VybFwiXSA9IHBpY1BhdGg7Ly8g6K6w5b2V5pyA5pawdXJsIOmYsuatouWkmuasoeivt+axguW8guatpeiuvue9ruS6huaXp+eahFxyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7Ly/nva7nqbog6Ziy5q2i546p5a6255yL5Yiw5pen55qE6YGT5YW36K+v5LyaXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGljUGF0aCwgY2MuU3ByaXRlRnJhbWUsIGZpbmlzaENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3otYTmupDliqDovb0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93RGlhbG9nKHVybDogc3RyaW5nLCBkYXRhPywgY2FsbGJhY2s/KSB7XHJcbiAgICAgXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvXCIgKyB1cmwsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmJpbmRSZXNBc3NldChub2RlLCBwcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHByaW5jZXNzQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCh1cmwpLmluaXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi90b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRvYXN0ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5iaW5kUmVzQXNzZXQodG9hc3QsIHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gcHJpbmNlc3NDb250cm9sLmdldHNjZW5lTm9kZSgpO1xyXG4gICAgICAgICAgICBpZiAodG9hc3QgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0b2FzdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Qub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRvYXN0KS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/flask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'flask');
// script/flask.ts

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
var princessControl_1 = require("./tool/princessControl");
var princessGameData_1 = require("./tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var findState;
(function (findState) {
    findState[findState["ZHAODAO"] = 0] = "ZHAODAO";
    findState[findState["MEIZHAODAO"] = 1] = "MEIZHAODAO";
    findState[findState["CHONGFU"] = 2] = "CHONGFU";
})(findState || (findState = {}));
var flask = /** @class */ (function (_super) {
    __extends(flask, _super);
    function flask() {
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
        _this.setContorl = null;
        _this.gameOverAnim = null;
        _this.princess_Data = [];
        _this.princessY = 192;
        _this.princessvScale = 0.4;
        _this.yeziAllNum = 10;
        _this.princessFindNum = 0;
        _this.princessOutTime = 0;
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
    flask.prototype.start = function () {
        var _this = this;
        princessGameData_1.pgData.setGamestop(function () {
            princessControl_1.princessControl.princessSoundTool.pauseAll();
        });
        princessGameData_1.pgData.setGamerecovery(function () {
            princessControl_1.princessControl.princessSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.resetAll();
        princessControl_1.princessControl.setsceneNode(this.node);
        princessControl_1.princessControl.adapterBg(this.bg);
        princessControl_1.princessControl.adapterBg(this.pipeibg);
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
    flask.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    flask.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.princess_Data = [];
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
        this.princessFindNum = 0;
        this.init();
        this.gameoverBool = false;
    };
    flask.prototype.checkNewHand = function () {
        var _this = this;
        if (princessGameData_1.pgData.userData.isGudie || princessControl_1.princessControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            princessControl_1.princessControl.princessResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    flask.prototype.pipeiAnim = function () {
        var _this = this;
        this.pipeiNode.active = true;
        var palyer_1 = this.pipeiNode.getChildByName("palyer_1");
        var palyer_2 = this.pipeiNode.getChildByName("palyer_2");
        var iconBox = palyer_2.getChildByName("mask");
        var finishTemp = false;
        var _loop_1 = function (i) {
            var icon = iconBox.children[i];
            var tempNum = princessControl_1.princessControl.getRandomInt(1, 20);
            princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(function () {
                if (icon.y == -120) {
                    var randomNum = princessControl_1.princessControl.getRandomInt(1, 20);
                    princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (randomNum), icon.getComponent(cc.Sprite));
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
    flask.prototype.autoFind = function () {
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
    flask.prototype.findNodeNum = function (parentNode, bool) {
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
                this.showGameOverAnim(function () {
                    _this.scheduleOnce(function () {
                        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                            state: false,
                            img: _this.duishouIcon,
                            princess_Data: _this.princess_Data,
                            callback: function () {
                                if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                                    princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                                    _this.resetAll();
                                    _this.init();
                                    _this.startDownTime();
                                    _this.loadRes();
                                }
                                else {
                                    princessGameData_1.pgData.userData.isHall = true;
                                    princessGameData_1.pgData.storageData();
                                    cc.director.loadScene(princessControl_1.delay.glass);
                                }
                            }
                        });
                    }, 0.5);
                });
            }
        }
        var num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        var num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        // if (parseInt(num1) >= parseInt(num2)) {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        // } else {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        // }
    };
    flask.prototype.showGameOverAnim = function (call) {
        this.gameOverAnim.active = true;
        var muzhi = this.gameOverAnim.getChildByName("muzhi");
        muzhi.active = false;
        var mask1 = this.gameOverAnim.getChildByName("mask1");
        var mask2 = this.gameOverAnim.getChildByName("mask2");
        cc.Tween.stopAllByTarget(mask2);
        cc.Tween.stopAllByTarget(mask1);
        cc.Tween.stopAllByTarget(muzhi);
        mask1.height = mask2.height = 0;
        cc.tween(mask1).to(1, { height: 336 }).start();
        cc.tween(mask2).to(1, { height: 336 }).call(function () {
            muzhi.scale = 0;
            muzhi.active = true;
            cc.tween(muzhi).to(0.2, { scale: 1.2 }).to(0.1, { scale: 0.9 }).to(0.1, { scale: 1 }).delay(0.5).call(function () {
                call && call();
            }).start();
        }).start();
    };
    flask.prototype.init = function () {
        this.levelNum.string = "" + princessControl_1.princessControl.imgId;
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            princessControl_1.princessControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon1);
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        // this.tishi_qipao.active = false;
        // this.princessOutTime = this.getDownTime();
        // let time = princessControl.timeChange(this.princessOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        this.gameOverAnim.active = false;
        this.setContorl.getChildByName("img").active = false;
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
    flask.prototype.startDownTime = function () {
        return;
        if (this.princessOutTime > 0) {
            var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    flask.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.princessOutTime--;
        var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.princessOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(princessGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    flask.prototype.errReduceTime = function () {
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
                princessControl_1.princessControl.playSp(anim, "posui");
                break;
            }
        }
        return;
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.SophiaPop, {
                ADcallback: function () {
                    // this.princessOutTime = 60;
                    // pgData.userData.tishiNum++;
                    princessGameData_1.pgData.storageData();
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
                    cc.log(_this.princess_Data, "this.princess_Data");
                    for (var i = 0; i < _this.princess_Data.length; i++) {
                        _this.princess_Data[i].isFind = false;
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
        this.princessOutTime -= reduceTime;
        if (this.princessOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(princessGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    flask.prototype.changeQiPaoNum = function () {
        if (princessGameData_1.pgData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("numbg").active = true;
            cc.find("numbg/num_label", this.tishi_qipao).getComponent(cc.Label).string = princessGameData_1.pgData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("numbg").active = false;
        }
    };
    flask.prototype.loadRes = function () {
        var _this = this;
        princessControl_1.princessControl.princessResUtil.loadSprite("openImg/" + "open_" + princessControl_1.princessControl.imgId, this.originalImg.getComponent(cc.Sprite));
        princessControl_1.princessControl.princessResUtil.loadSprite("strongImg/" + "strong_" + princessControl_1.princessControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("familyData/family" + princessControl_1.princessControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            princessControl_1.princessControl.princessResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.princess_Data = jsonData.path;
                for (var i = 0; i < _this.princess_Data.length; i++) {
                    _this.princess_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.princess_Data.length; i++) {
                //     let data = this.princess_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.princess_Data.length; i++) {
                //     let data = this.princess_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    flask.prototype.yeziLight = function (pos) {
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
        var anim = this.yeziBox.children[this.princessFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = princessControl_1.princessControl.changePos(targetEle, tuowei);
        var time = 1;
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.findNodeNum(_this.movePaly1);
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            princessControl_1.princessControl.playSp(anim, "2_bianliang");
            princessControl_1.princessControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    flask.prototype.findSignSucc = function (targetPos, pgData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.princessvScale + this.princessY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.princessvScale - this.princessY;
            }
            var centerPos = cc.v3(targetPos.x * this.princessvScale, imgY);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = pgData.blockSize.wid * this.princessvScale;
            gameFind.height = pgData.blockSize.hei * this.princessvScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.3 }).to(0.1, { scale: 1.1 }).start();
        }
    };
    flask.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.princessY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.princessY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    flask.prototype.imgEvent = function (event) {
        var minY = 136;
        var setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        }
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == findState.ZHAODAO) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.princessFindNum = this.princessFindNum + 1;
            this.findSignSucc(cc.v3(data.pgData.centerPos.x, data.pgData.centerPos.y), data.pgData);
            this.yeziLight(clickPos);
            // this.findNodeNum(this.movePaly1);
            if (this.newhandNode && this.princessFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.princessFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                princessGameData_1.pgData.userData.isGudie = true;
                princessGameData_1.pgData.storageData();
            }
            this.playCommonSound(princessGameData_1.sound.correct);
            if (this.princessFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == findState.MEIZHAODAO) {
            this.playCommonSound(princessGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(princessGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    flask.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var pgData = null;
        for (var i = 0; i < this.princess_Data.length; i++) {
            var data = this.princess_Data[i];
            var x = data.centerPos.x * this.princessvScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.princessvScale + this.princessY;
            }
            else {
                y = data.centerPos.y * this.princessvScale - this.princessY;
            }
            var wid = data.blockSize.wid * this.princessvScale;
            var hei = data.blockSize.hei * this.princessvScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = findState.ZHAODAO;
                    pgData = data;
                    data.isFind = true;
                }
                else {
                    type = findState.CHONGFU;
                    cc.log("找到重复的了");
                }
                return { type: type, pgData: pgData };
            }
            else {
                type = findState.MEIZHAODAO;
                cc.log("没找到");
            }
        }
        return { type: type, pgData: pgData };
    };
    flask.prototype.errSignAnim = function (node) {
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
    flask.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.gameoverBool = true;
        this.playCommonSound(princessGameData_1.sound.win);
        if (princessGameData_1.pgData.userData.level + 1 <= princessGameData_1.pgData.levelAll) {
            if (princessControl_1.princessControl.imgId == princessGameData_1.pgData.userData.level) {
                princessGameData_1.pgData.userData.level = princessGameData_1.pgData.userData.level + 1;
                princessGameData_1.pgData.storageData();
            }
        }
        this.showGameOverAnim(function () {
            _this.scheduleOnce(function () {
                princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                    state: true,
                    img: _this.duishouIcon,
                    princess_Data: _this.princess_Data,
                    callback: function () {
                        if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                            princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                            _this.resetAll();
                            _this.init();
                            _this.startDownTime();
                            _this.loadRes();
                        }
                        else {
                            princessGameData_1.pgData.userData.isHall = true;
                            princessGameData_1.pgData.storageData();
                            cc.director.loadScene(princessControl_1.delay.glass);
                        }
                    }
                });
            }, 1);
        });
        return;
        this.scheduleOnce(function () {
            var _loop_2 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    princessControl_1.princessControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(princessGameData_1.sound.win);
                                if (princessGameData_1.pgData.userData.level + 1 <= princessGameData_1.pgData.levelAll) {
                                    princessGameData_1.pgData.userData.level = princessGameData_1.pgData.userData.level + 1;
                                    princessGameData_1.pgData.storageData();
                                }
                                princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                                    img: _this.duishouIcon,
                                    princess_Data: _this.princess_Data,
                                    callback: function () {
                                        if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                                            princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            princessGameData_1.pgData.userData.isHall = true;
                                            princessGameData_1.pgData.storageData();
                                            cc.director.loadScene(princessControl_1.delay.glass);
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
    flask.prototype.getDownTime = function () {
        var level = princessControl_1.princessControl.imgId;
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
    flask.prototype.timeOutEvent = function () {
        var _this = this;
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.SophiaPop, {
            ADcallback: function () {
                _this.princessOutTime = 60;
                princessGameData_1.pgData.userData.tishiNum++;
                princessGameData_1.pgData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.princess_Data, "this.princess_Data");
                for (var i = 0; i < _this.princess_Data.length; i++) {
                    _this.princess_Data[i].isFind = false;
                }
            }
        });
    };
    flask.prototype.onClick_back = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.AvaPop, { callback: function () { _this.isStop = false; } });
    };
    flask.prototype.onClick_pause = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;
        var maxY = 510;
        var minY = 136;
        var setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        }
        else {
            setimg.active = true;
            cc.tween(this.setContorl).to(0.5, { height: maxY }).start();
        }
        // princessControl.princessResUtil.showDialog(circle.SpiritDialog, {
        //     isGame: true, callback: () => {
        //         if (!princessControl.princessSoundTool.effectSwitch) {
        //             this.soundHallBtn.getChildByName("line").active = true;
        //         } else {
        //             this.soundHallBtn.getChildByName("line").active = false;
        //         }
        //         if (!princessControl.princessSoundTool.musicSwitch) {
        //             this.musicHallBtn.getChildByName("line").active = true;
        //         } else {
        //             this.musicHallBtn.getChildByName("line").active = false;
        //         }
        //         this.isStop = false
        //     }
        // });
    };
    flask.prototype.onClick_tishi = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            princessControl_1.princessControl.princessResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.princess_Data.length; i++) {
            if (!this.princess_Data[i].isFind) {
                lvdata = this.princess_Data[i];
                break;
            }
        }
        if (!princessGameData_1.pgData) {
            return;
        }
        if (princessGameData_1.pgData.userData.tishiNum <= 0) {
            cc.log("看广告");
            princessGameData_1.pgData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        princessGameData_1.pgData.userData.tishiNum = princessGameData_1.pgData.userData.tishiNum - 1;
        princessGameData_1.pgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    flask.prototype.showTiShi = function (pgData) {
        if (pgData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = pgData.centerPos.x * this.princessvScale;
                var y = 0;
                if (i == 0) {
                    y = pgData.centerPos.y * this.princessvScale + this.princessY;
                }
                else {
                    y = pgData.centerPos.y * this.princessvScale - this.princessY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }
        }
    };
    flask.prototype.onClick_musicChange = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchMusic();
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    };
    flask.prototype.onClick_soundChange = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchEffect();
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
    };
    flask.prototype.onClick_exit = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.userData.isHall = true;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.glass);
    };
    //播放音效
    flask.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = princessControl_1.princessControl.princessSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], flask.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "pipeibg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], flask.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "emptyheartBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "pipeiNode", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "movePaly1", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "movePaly2", void 0);
    __decorate([
        property(cc.Sprite)
    ], flask.prototype, "userIcon1", void 0);
    __decorate([
        property(cc.Sprite)
    ], flask.prototype, "userIcon2", void 0);
    __decorate([
        property(cc.Label)
    ], flask.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "soundHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "musicHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "setContorl", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "gameOverAnim", void 0);
    flask = __decorate([
        ccclass
    ], flask);
    return flask;
}(cc.Component));
exports.default = flask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZmxhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLDBEQUFxRjtBQUNyRiw0REFBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsK0NBQU8sQ0FBQTtJQUNQLHFEQUFVLENBQUE7SUFDViwrQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFHRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWc5QkM7UUE3OEJHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFH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OytDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNXO0lBcEZaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnOUJ6QjtJQUFELFlBQUM7Q0FoOUJELEFBZzlCQyxDQWg5QmtDLEVBQUUsQ0FBQyxTQUFTLEdBZzlCOUM7a0JBaDlCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdoYW5kIGZyb20gXCIuL3ByZWZlYi9uZXdoYW5kXCI7XG5pbXBvcnQgeyBwcmluY2Vzc0NvbnRyb2wsIGRlbGwsIGRlbGF5LCBwcmluY2Vzc19EYXRhIH0gZnJvbSBcIi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbmltcG9ydCB7IHBnRGF0YSwgc291bmQgfSBmcm9tIFwiLi90b29sL3ByaW5jZXNzR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIGZpbmRTdGF0ZSB7XG4gICAgWkhBT0RBTywgICAgICAgLy/mib7liLBcbiAgICBNRUlaSEFPREFPLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgQ0hPTkdGVSwgICAgIC8v5om+5Yiw6YeN5aSN55qEICBcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZsYXNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBpcGVpYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3JpZ2luYWxJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmluaXNoSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpc2hpX3FpcGFvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWIyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVtcHR5aGVhcnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGlwZWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1vdmVQYWx5MTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtb3ZlUGFseTI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB1c2VySWNvbjE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHVzZXJJY29uMjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc291bmRIYWxsQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljSGFsbEJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXRDb250b3JsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVPdmVyQW5pbTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHByaW5jZXNzX0RhdGE6IHByaW5jZXNzX0RhdGFbXSA9IFtdO1xuICAgIHByaW5jZXNzWTogbnVtYmVyID0gMTkyO1xuICAgIHByaW5jZXNzdlNjYWxlOiBudW1iZXIgPSAwLjQ7XG5cbiAgICB5ZXppQWxsTnVtOiBudW1iZXIgPSAxMDtcbiAgICBwcmluY2Vzc0ZpbmROdW06IG51bWJlciA9IDA7XG4gICAgcHJpbmNlc3NPdXRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgbG92ZWx5SXNQcm9tcHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbmVFcnI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIG5ld2hhbmROb2RlOiBuZXdoYW5kID0gbnVsbDtcblxuICAgIHByaXZhdGUgZHVpc2hvdUljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FtZW92ZXJCb29sID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIG1vdmUxWSA9IDEyODtcbiAgICBwcml2YXRlIG1vdmUyWSA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgcGdEYXRhLnNldEdhbWVzdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5wYXVzZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBnRGF0YS5zZXRHYW1lcmVjb3ZlcnkoKCkgPT4ge1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLnJlc3VtZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLnBpcGVpYmcpO1xuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgLy8gdGhpcy5jaGVja05ld0hhbmQoKTtcblxuICAgICAgICB0aGlzLnBpcGVpQW5pbSgpO1xuXG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByaW5jZXNzX0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZUVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaW5jZXNzRmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKHBnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IHByaW5jZXNzQ29udHJvbC5pbWdJZCAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwaXBlaUFuaW0oKSB7XG4gICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwYWx5ZXJfMSA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzFcIik7XG4gICAgICAgIGxldCBwYWx5ZXJfMiA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzJcIik7XG5cbiAgICAgICAgbGV0IGljb25Cb3ggPSBwYWx5ZXJfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XG4gICAgICAgIGxldCBmaW5pc2hUZW1wID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBpY29uQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHRlbXBOdW0gPSBwcmluY2Vzc0NvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDIwKTtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAodGVtcE51bSksIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGljb24pO1xuICAgICAgICAgICAgY2MudHdlZW4oaWNvbikuYnkoMC4xNSwgeyB5OiAtMTIwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpY29uLnkgPT0gLTEyMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tTnVtID0gcHJpbmNlc3NDb250cm9sLmdldFJhbmRvbUludCgxLCAyMCk7XG4gICAgICAgICAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocmFuZG9tTnVtKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIGljb24ueSA9IDI0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnVuaW9uKCkucmVwZWF0KDIwKS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZmluaXNoVGVtcCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLnu5PmnZ9cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja05ld0hhbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlID0gaWNvbkJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGUueSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kdWlzaG91SWNvbiA9IGVsZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwibWFzay9pY29uXCIsIHRoaXMubW92ZVBhbHkyKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVpc2hvdUljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvRmluZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5pc2hUZW1wID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRvRmluZCgpIHtcbiAgICAgICAgbGV0IG51bSA9IHRoaXMubW92ZVBhbHkyLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nXG4gICAgICAgIGlmIChwYXJzZUludChudW0pID49IDEwKSByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZW92ZXJCb29sKSByZXR1cm5cbiAgICAgICAgbGV0IG1pblRpbWUgPSAzOyAvLyDmnIDlsI/ml7bpl7Tpl7TpmpTvvIjnp5LvvIlcbiAgICAgICAgbGV0IG1heFRpbWUgPSA1OyAvLyDmnIDlpKfml7bpl7Tpl7TpmpTvvIjnp5LvvIlcblxuICAgICAgICBpZiAocGFyc2VJbnQobnVtKSA9PSA5KSB7XG4gICAgICAgICAgICBtaW5UaW1lID0gMzAwO1xuICAgICAgICAgICAgbWF4VGltZSA9IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21UaW1lID0gTWF0aC5yYW5kb20oKSAqIChtYXhUaW1lIC0gbWluVGltZSkgKyBtaW5UaW1lOyAvLyDnlJ/miJDpmo/mnLrml7bpl7Tpl7TpmpRcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvL+aJp+ihjOeahOmAu+i+keS7o+eggVxuICAgICAgICAgICAgdGhpcy5maW5kTm9kZU51bSh0aGlzLm1vdmVQYWx5MiwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyDmiafooYzlrozpgLvovpHlkI7lho3mrKHosIPluqbkuIvkuIDkuKrpmo/mnLrlrprml7blmahcbiAgICAgICAgICAgIHRoaXMuYXV0b0ZpbmQoKTtcbiAgICAgICAgfSwgcmFuZG9tVGltZSk7XG4gICAgfVxuXG4gICAgZmluZE5vZGVOdW0ocGFyZW50Tm9kZTogY2MuTm9kZSwgYm9vbD86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGZpbmlzaEJveCA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCBudW0gPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmlzaEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1lcEluZGV4Kys7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBub2ZpbmlzaCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJub2ZpbmlzaFwiKTtcbiAgICAgICAgICAgIGxldCBmaW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpO1xuICAgICAgICAgICAgaWYgKG5vZmluaXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG5vZmluaXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpbmlzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG51bS5zdHJpbmcgPSB0bWVwSW5kZXggKyBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChudW0uc3RyaW5nKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXJCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lT3ZlckFuaW0oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dEaWFsb2coZGVsbC5FbWlseVBvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IHRoaXMuZHVpc2hvdUljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaW5jZXNzQ29udHJvbC5pbWdJZCArIDEgPD0gcGdEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbnVtMSA9IHRoaXMubW92ZVBhbHkxLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMubW92ZVBhbHkyLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5tb3ZlUGFseTIpO1xuICAgICAgICAvLyBpZiAocGFyc2VJbnQobnVtMSkgPj0gcGFyc2VJbnQobnVtMikpIHtcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkxKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkxLngsIHRoaXMubW92ZTFZKSB9KS5zdGFydCgpO1xuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tb3ZlUGFseTIpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlUGFseTIueCwgdGhpcy5tb3ZlMlkpIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5MS54LCB0aGlzLm1vdmUyWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkyKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkyLngsIHRoaXMubW92ZTFZKSB9KS5zdGFydCgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc2hvd0dhbWVPdmVyQW5pbShjYWxsOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmdhbWVPdmVyQW5pbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbXV6aGkgPSB0aGlzLmdhbWVPdmVyQW5pbS5nZXRDaGlsZEJ5TmFtZShcIm11emhpXCIpO1xuICAgICAgICBtdXpoaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1hc2sxID0gdGhpcy5nYW1lT3ZlckFuaW0uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrMVwiKTtcbiAgICAgICAgbGV0IG1hc2syID0gdGhpcy5nYW1lT3ZlckFuaW0uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrMlwiKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG1hc2syKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG1hc2sxKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG11emhpKTtcbiAgICAgICAgbWFzazEuaGVpZ2h0ID0gbWFzazIuaGVpZ2h0ID0gMDtcblxuICAgICAgICBjYy50d2VlbihtYXNrMSkudG8oMSwgeyBoZWlnaHQ6IDMzNiB9KS5zdGFydCgpO1xuICAgICAgICBjYy50d2VlbihtYXNrMikudG8oMSwgeyBoZWlnaHQ6IDMzNiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIG11emhpLnNjYWxlID0gMDtcbiAgICAgICAgICAgIG11emhpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy50d2VlbihtdXpoaSkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xLCB7IHNjYWxlOiAwLjkgfSkudG8oMC4xLCB7IHNjYWxlOiAxIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbCAmJiBjYWxsKCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbE51bS5zdHJpbmcgPSBcIlwiICsgcHJpbmNlc3NDb250cm9sLmltZ0lkO1xuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEhhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLm11c2ljU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wbGF5U3AoYW5pbSwgXCIxX2FuX3N0b3BcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjEpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJtZWltZWkvXCIgKyBcIm1laW1laVwiICsgKHBnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMudXNlckljb24yKTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnRpc2hpX3FpcGFvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnByaW5jZXNzT3V0VGltZSA9IHRoaXMuZ2V0RG93blRpbWUoKTtcbiAgICAgICAgLy8gbGV0IHRpbWUgPSBwcmluY2Vzc0NvbnRyb2wudGltZUNoYW5nZSh0aGlzLnByaW5jZXNzT3V0VGltZSk7XG4gICAgICAgIC8vIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRDb250b3JsLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmluaXNoQm94MSA9IHRoaXMubW92ZVBhbHkxLmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmlzaEJveDEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmluaXNoQm94MS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaEJveDIgPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3gyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveDIuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+W8gOWQr+WAkuiuoeaXtlxuICAgIHN0YXJ0RG93blRpbWUoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc091dFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IHByaW5jZXNzQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMucHJpbmNlc3NPdXRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93blRpbWVFdmVudCgpIHtcblxuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW5jZXNzT3V0VGltZS0tO1xuICAgICAgICBsZXQgdGltZSA9IHByaW5jZXNzQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMucHJpbmNlc3NPdXRUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+eCuemUmeS6hlxuICAgIGVyclJlZHVjZVRpbWUoKSB7XG4gICAgICAgIGxldCBmaW5kaGVhcnQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBoZWFydEl0ZW0gPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGVtcHR5aGVhcnRJdGVtID0gdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGhlYXJ0SXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmaW5kaGVhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhlYXJ0SXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbXB0eWhlYXJ0SXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gZW1wdHloZWFydEl0ZW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucGxheVNwKGFuaW0sIFwicG9zdWlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGxldCBoZWFydEl0ZW0gPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoIWhlYXJ0SXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd0RpYWxvZyhkZWxsLlNvcGhpYVBvcCwge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcmluY2Vzc091dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLnByaW5jZXNzX0RhdGEsIFwidGhpcy5wcmluY2Vzc19EYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc19EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIC8v5pe26Ze0XG4gICAgICAgIGlmICghdGhpcy5vbmVFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5wcmluY2Vzc091dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBwcmluY2Vzc0NvbnRyb2wudGltZUNoYW5nZSh0aGlzLnByaW5jZXNzT3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUWlQYW9OdW0oKSB7XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtYmdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJudW1iZy9udW1fbGFiZWxcIiwgdGhpcy50aXNoaV9xaXBhbykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlcygpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5sb2FkU3ByaXRlKFwib3BlbkltZy9cIiArIFwib3Blbl9cIiArIHByaW5jZXNzQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5sb2FkU3ByaXRlKFwic3Ryb25nSW1nL1wiICsgXCJzdHJvbmdfXCIgKyBwcmluY2Vzc0NvbnRyb2wuaW1nSWQsIHRoaXMuZmluaXNoSW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcblxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcImZhbWlseURhdGEvZmFtaWx5XCIgKyBwcmluY2Vzc0NvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuYmluZFJlc0Fzc2V0KHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gcmVzLmpzb247XG4gICAgICAgICAgICBpZiAoanNvbkRhdGEgJiYganNvbkRhdGEucGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc19EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMucHJpbmNlc3NfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLnByaW5jZXNzX0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcblxuICAgICAgICBsZXQgZmluaXNoQm94ID0gdGhpcy5tb3ZlUGFseTEuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0RWxlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBpZiAobm9maW5pc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxlID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0YXJnZXRFbGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5wcmluY2Vzc0ZpbmROdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gcHJpbmNlc3NDb250cm9sLmNoYW5nZVBvcyh0YXJnZXRFbGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAxO1xuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1b3dlaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgcGdEYXRhOiBwcmluY2Vzc19EYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2FtZUZpbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVGaW5kUHJlZmFiMik7XG5cbiAgICAgICAgICAgIGxldCBpbWdZID0gMDtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBpbWdZID0gdGFyZ2V0UG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlICsgdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwib3JpZ0JveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpLmFkZENoaWxkKGdhbWVGaW5kKVxuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgLSB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBjYy52Myh0YXJnZXRQb3MueCAqIHRoaXMucHJpbmNlc3N2U2NhbGUsIGltZ1kpO1xuXG4gICAgICAgICAgICBnYW1lRmluZC5zZXRQb3NpdGlvbihjZW50ZXJQb3MpO1xuXG4gICAgICAgICAgICAvLyAgICAg5q2j5pa55b2iXG4gICAgICAgICAgICBnYW1lRmluZC53aWR0aCA9IHBnRGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgIGdhbWVGaW5kLmhlaWdodCA9IHBnRGF0YS5ibG9ja1NpemUuaGVpICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcblxuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuMyB9KS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueSA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55IC0gKHRoaXMucHJpbmNlc3NZICogMikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55ICsgKHRoaXMucHJpbmNlc3NZICogMikpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG5cbiAgICAgICAgbGV0IG1pblkgPSAxMzY7XG4gICAgICAgIGxldCBzZXRpbWcgPSB0aGlzLnNldENvbnRvcmwuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNldENvbnRvcmwpO1xuICAgICAgICBpZiAoc2V0aW1nLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2V0aW1nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zZXRDb250b3JsKS50bygwLjUsIHsgaGVpZ2h0OiBtaW5ZIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBmaW5kU3RhdGUuWkhBT0RBTykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByaW5jZXNzRmluZE51bSA9IHRoaXMucHJpbmNlc3NGaW5kTnVtICsgMTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEucGdEYXRhLmNlbnRlclBvcy54LCBkYXRhLnBnRGF0YS5jZW50ZXJQb3MueSksIGRhdGEucGdEYXRhKTtcbiAgICAgICAgICAgIHRoaXMueWV6aUxpZ2h0KGNsaWNrUG9zKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5wcmluY2Vzc0ZpbmROdW0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuaGlkZWRvbmcxKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5wcmluY2Vzc0ZpbmROdW0gPT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEuaXNHdWRpZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5jb3JyZWN0KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NGaW5kTnVtID49IHRoaXMueWV6aUFsbE51bSkgeyAgICAgICAvL+iDnOWIqSDmuLjmiI/nu5PmnZ9cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gZmluZFN0YXRlLk1FSVpIQU9EQU8pIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5vbmVFcnIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBmaW5kU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgcGdEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmluY2Vzc19EYXRhW2ldO1xuICAgICAgICAgICAgbGV0IHggPSBkYXRhLmNlbnRlclBvcy54ICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGlmICh0YXJnZXRQb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gZGF0YS5jZW50ZXJQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgKyB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlIC0gdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aWQgPSBkYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLnByaW5jZXNzdlNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMucHJpbmNlc3N2U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRTdGF0ZS5aSEFPREFPO1xuICAgICAgICAgICAgICAgICAgICBwZ0RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRTdGF0ZS5DSE9OR0ZVO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIHBnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kU3RhdGUuTUVJWkhBT0RBTztcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmsqHmib7liLBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB0eXBlLCBwZ0RhdGEgfVxuICAgIH1cblxuXG4gICAgZXJyU2lnbkFuaW0obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBhbmdsZTogMTUgfSkudG8oMC4wNSwgeyBhbmdsZTogMCB9KS50bygwLjA1LCB7IGFuZ2xlOiAtMTUgfSlcbiAgICAgICAgICAgIC50bygwLjA3LCB7IGFuZ2xlOiAxMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IC0xMCB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogNyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtNyB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBnYW1lRW5kKCkge1xuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IHRydWU7XG4gICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLndpbik7XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IHBnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgaWYgKHByaW5jZXNzQ29udHJvbC5pbWdJZCA9PSBwZ0RhdGEudXNlckRhdGEubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEubGV2ZWwgPSBwZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyQW5pbSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuRW1pbHlQb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpbmNlc3NDb250cm9sLmltZ0lkICsgMSA8PSBwZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGRlbGF5LmdsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucGxheVNwKGFuaW0sIFwiNF9tYW5cIiwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGdEYXRhLnVzZXJEYXRhLmxldmVsICsgMSA8PSBwZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBnRGF0YS51c2VyRGF0YS5sZXZlbCA9IHBnRGF0YS51c2VyRGF0YS5sZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dEaWFsb2coZGVsbC5FbWlseVBvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiB0aGlzLmR1aXNob3VJY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxIDw9IHBnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZGVsYXkuZ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOWAkuiuoeaXtlxuICAgIGdldERvd25UaW1lKCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQ7XG4gICAgICAgIGxldCB0aW1lID0gMDtcbiAgICAgICAgaWYgKGxldmVsID49IDEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICAgICAgdGltZSA9IDUgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSA2ICYmIGxldmVsIDw9IDEwKSB7XG4gICAgICAgICAgICB0aW1lID0gMyAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDExICYmIGxldmVsIDw9IDE1KSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTYgJiYgbGV2ZWwgPD0gMjApIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMjEgJiYgbGV2ZWwgPD0gMjUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG5cbiAgICAvL+aXtumXtOWIsFxuICAgIHRpbWVPdXRFdmVudCgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuU29waGlhUG9wLCB7XG4gICAgICAgICAgICBBRGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc091dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0rKztcbiAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLnByaW5jZXNzX0RhdGEsIFwidGhpcy5wcmluY2Vzc19EYXRhXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcmluY2Vzc19EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NfRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFjaygpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuQXZhUG9wLCB7IGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNTdG9wID0gZmFsc2UgfSB9KTtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfcGF1c2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgICAgICAgbGV0IG1heFkgPSA1MTA7XG4gICAgICAgIGxldCBtaW5ZID0gMTM2O1xuICAgICAgICBsZXQgc2V0aW1nID0gdGhpcy5zZXRDb250b3JsLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zZXRDb250b3JsKTtcbiAgICAgICAgaWYgKHNldGltZy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNldGltZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2V0Q29udG9ybCkudG8oMC41LCB7IGhlaWdodDogbWluWSB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0aW1nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNldENvbnRvcmwpLnRvKDAuNSwgeyBoZWlnaHQ6IG1heFkgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd0RpYWxvZyhjaXJjbGUuU3Bpcml0RGlhbG9nLCB7XG4gICAgICAgIC8vICAgICBpc0dhbWU6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG4gICAgb25DbGlja190aXNoaSgpIHtcblxuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd1RvYXN0KFwiUHJvbXB0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsdmRhdGE6IHByaW5jZXNzX0RhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByaW5jZXNzX0RhdGFbaV0uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbHZkYXRhID0gdGhpcy5wcmluY2Vzc19EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIHBnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IHBnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKHBnRGF0YTogcHJpbmNlc3NfRGF0YSkge1xuICAgICAgICBpZiAocGdEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpc2hpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lVGlzaGlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmFkZENoaWxkKHRpc2hpKTtcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gcGdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IDBcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwZ0RhdGEuY2VudGVyUG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlICsgdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgLSB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aXNoaS5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGlzaGkpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRpc2hpKS50bygwLjUsIHsgc2NhbGU6IDAuNSB9KS50bygwLjUsIHsgc2NhbGU6IDAuNyB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfbXVzaWNDaGFuZ2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuc3dpdGNoTXVzaWMoKTtcbiAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIG9uQ2xpY2tfc291bmRDaGFuZ2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuc3dpdGNoRWZmZWN0KCk7XG4gICAgICAgIGlmICghcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmVmZmVjdFN3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEhhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBvbkNsaWNrX2V4aXQoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG4gICAgfVxuXG5cbiAgICAvL+aSreaUvumfs+aViFxuICAgIHBsYXlDb21tb25Tb3VuZChhdWRpb05hbWU6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvQ2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvQ2xpcHNbaV0ubmFtZSA9PSBhdWRpb05hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRCA9IHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1tpXSwgbG9vcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57cabiblbxOB7KtkV6MiZG/', 'princessGameData');
// script/tool/princessGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.pgData = void 0;
var princessStorage_1 = require("./princessStorage");
var onCloseFinishCb = null;
var onClosefailCb = null;
var princessGameData = /** @class */ (function () {
    function princessGameData() {
        this.privacyPolicyUrl = "https://sites.google.com/view/find-the-differences-fairy-pri/halaman-muka";
        this.termsofServiceUrl = "https://sites.google.com/view/find-the-differences-fairy-ter/halaman-muka";
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
    princessGameData.getInstance = function () {
        if (this._instance == null) {
            this._instance = new princessGameData();
        }
        return this._instance;
    };
    princessGameData.prototype.storageData = function () {
        princessStorage_1.princessStorage.setStorageJSON(storage.gamedata, this.userData);
    };
    princessGameData.prototype.setVideoFailCb = function (cb) {
        // onClosefailCb = null;
        // onClosefailCb = cb;
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    princessGameData.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("BeautifulFindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    princessGameData.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    };
    //关闭banner
    princessGameData.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    };
    //打开url
    princessGameData.prototype.openUrl = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    };
    princessGameData.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    princessGameData.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
    };
    princessGameData._instance = null;
    return princessGameData;
}());
exports.pgData = princessGameData.getInstance();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc0dhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFvRDtBQUVwRCxJQUFJLGVBQWUsR0FBZSxJQUFJLENBQUM7QUFDdkMsSUFBSSxhQUFhLEdBQWUsSUFBSSxDQUFDO0FBQ3JDO0lBWUk7UUFNQSxxQkFBZ0IsR0FBVywyRUFBMkUsQ0FBQztRQUN2RyxzQkFBaUIsR0FBVywyRUFBMkUsQ0FBQztRQUV4RyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBUTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFsQkUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFaYSw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQXdCRCxzQ0FBVyxHQUFYO1FBQ0ksaUNBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUdELHlDQUFjLEdBQWQsVUFBZSxFQUFjO1FBQ3pCLHdCQUF3QjtRQUN4Qixz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QixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFHRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFHRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUc7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUVELE1BQU07QUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgeyBwcmluY2Vzc1N0b3JhZ2UgfSBmcm9tIFwiLi9wcmluY2Vzc1N0b3JhZ2VcIjtcblxubGV0IG9uQ2xvc2VGaW5pc2hDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5sZXQgb25DbG9zZWZhaWxDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5jbGFzcyBwcmluY2Vzc0dhbWVEYXRhIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogcHJpbmNlc3NHYW1lRGF0YSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IHByaW5jZXNzR2FtZURhdGEge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgcHJpbmNlc3NHYW1lRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2ZpbmQtdGhlLWRpZmZlcmVuY2VzLWZhaXJ5LXByaS9oYWxhbWFuLW11a2FcIjtcbiAgICB0ZXJtc29mU2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9maW5kLXRoZS1kaWZmZXJlbmNlcy1mYWlyeS10ZXIvaGFsYW1hbi1tdWthXCI7XG5cbiAgICBsZXZlbEFsbDogbnVtYmVyID0gMzA7XG4gICAgdXNlckRhdGE6IGFueSA9IHtcbiAgICAgICAgaXNDbGF1c2U6IGZhbHNlLCAgICAvL+aYr+WQpuaJk+W8gOi/h+makOengeWNj+iuriAgICBcbiAgICAgICAgdGlzaGlOdW06IDEsICAgICAgICAvL+aPkOekuuasoeaVsFxuICAgICAgICBsZXZlbDogMSwgICAgICAgICAgIC8v5b2T5YmN5YWz5Y2hXG4gICAgICAgIGlzSGFsbDogZmFsc2UsICAgICAgLy/mmK/lkKbov5Tlm57ov4flpKfljoVcbiAgICAgICAgaXNHdWRpZTogZmFsc2UsICAgICAgLy/mmK/lkKbmiZPlvIDov4fmlrDmiYvlvJXlr7xcbiAgICAgICAgZmluaXNoTGV2ZWw1OiBmYWxzZSwgIC8v5piv5ZCm5a6M5oiQ6L+H56ysNeWFs1xuICAgICAgICBnYW1lTmFtZTogXCJTdHJvbmdCYW5hbmFcIiwgICAvL+eOqeWutuWQjeWtl1xuICAgICAgICBhdmF0YXJJZDogMSwgICAgICAgICAgICAvL+WktOWDj2lkXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBwcmluY2Vzc1N0b3JhZ2Uuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyBvbkNsb3NlZmFpbENiID0gbnVsbDtcbiAgICAgICAgLy8gb25DbG9zZWZhaWxDYiA9IGNiO1xuXG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gbnVsbDtcbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gID0gY2I7XG4gICAgfVxuXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0t55yL5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93U2hpUGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IG51bGw7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkJlYXV0aWZ1bEZpbmRBZE1nclwiLCBcImxvYWRSZXdhcmRcIik7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ109IGZpbmlzaENiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluaXNoQ2IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAYmFubmVyXG4gICAgc2hvd0Jhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3diYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAdXJsXG4gICAgb3BlblVybCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIm9wZW5VcmxcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2V0R2FtZXN0b3AoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lc3RvcCddID0gZnVuYztcbiAgICB9XG5cbiAgICBzZXRHYW1lcmVjb3ZlcnkoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lcmVjb3ZlcnknXSA9IGZ1bmM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgcGdEYXRhID0gcHJpbmNlc3NHYW1lRGF0YS5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZW51bSBzdG9yYWdlIHtcbiAgICBnYW1lZGF0YSA9IFwiZ2FtZWRhdGFcIixcbn1cblxuZXhwb3J0IGVudW0gc291bmQge1xuICAgIGJnbSA9IFwiYmdtXCIsXG4gICAgY2xpY2sgPSBcImNsaWNrXCIsXG4gICAgY29ycmVjdCA9IFwiY29ycmVjdFwiLFxuICAgIGVyciA9IFwiZXJyXCIsXG4gICAgZmFpbCA9IFwiZmFpbFwiLFxuICAgIHdpbiA9IFwid2luXCIsXG59XG5cblxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddKClcbn1cblxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9mYWlsQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10oKVxufVxuXG53aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vL+a4uOaIj+aaguWBnFxud2luZG93WydnYW1lc3RvcCddID0gKCkgPT4ge1xuXG59XG5cblxuLy/muLjmiI/mgaLlpI1cbndpbmRvd1snZ2FtZXJlY292ZXJ5J10gPSAoKSA9PiB7XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'princessControl');
// script/tool/princessControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dell = exports.delay = exports.princessControl = void 0;
var princessSoundTool_1 = require("./princessSoundTool");
var princessResUtil_1 = require("./princessResUtil");
var princessControlClass = /** @class */ (function () {
    function princessControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.princessSoundTool = new princessSoundTool_1.princessSoundTool();
        this.eventTarget = new cc.EventTarget();
        this.princessResUtil = princessResUtil_1.princessResUtil;
        this.designWidth = 1280; //设计分辨率宽
        this.designHeight = 720; //设计分辨率高
        this.isIpadFix = false;
        this.isIphoneXSMaxFix = false;
        this.iphoneXSMaxY = 0;
        this.isLiuhaiFix = false; //是否有刘海
        this.liuhaiY = 0; //刘海高度
    }
    princessControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new princessControlClass();
        }
        return this._instance;
    };
    princessControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    princessControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    princessControlClass.prototype.timeChange = function (value) {
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
    princessControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    princessControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    princessControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    princessControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
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
    princessControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
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
    princessControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    princessControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    princessControlClass._instance = null;
    return princessControlClass;
}());
exports.princessControl = princessControlClass.getInstance();
exports.delay = {
    flask: "flask",
    glass: "glass",
    cup: "cup",
};
exports.dell = {
    EmilyPop: "EmilyPop",
    SophiaPop: "SophiaPop",
    AvaPop: "AvaPop",
    IsabellaPop: "IsabellaPop",
    MiaPop: "MiaPop",
    AmeliaPop: "AmeliaPop",
    EvelynPop: "EvelynPop",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELHFEQUFvRDtBQVlwRDtJQUFBO1FBV1csY0FBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLHNCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDL0QsZ0JBQVcsR0FBbUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxpQ0FBZSxDQUFDO1FBR3pDLGdCQUFXLEdBQVcsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUNuQyxpQkFBWSxHQUFXLEdBQUcsQ0FBQyxDQUFBLFFBQVE7UUFFbkMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixxQkFBZ0IsR0FBVyxLQUFLLENBQUM7UUFDakMsaUJBQVksR0FBVSxDQUFDLENBQUM7UUFFeEIsZ0JBQVcsR0FBVyxLQUFLLENBQUMsQ0FBQSxPQUFPO1FBQ25DLFlBQU8sR0FBVSxDQUFDLENBQUMsQ0FBQSxNQUFNO0lBOEY3QixDQUFDO0lBdEhpQixnQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQXFCRCwyQ0FBWSxHQUFaLFVBQWEsSUFBYTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBR0Q7O01BRUU7SUFDRix5Q0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FB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RztJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixXQUFXLEVBQUUsYUFBYTtJQUMxQixNQUFNLEVBQUUsUUFBUTtJQUNoQixTQUFTLEVBQUUsV0FBVztJQUN0QixTQUFTLEVBQUUsV0FBVztDQUN6QixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NTb3VuZFRvb2wgfSBmcm9tIFwiLi9wcmluY2Vzc1NvdW5kVG9vbFwiO1xyXG5pbXBvcnQgeyBwcmluY2Vzc1Jlc1V0aWwgfSBmcm9tIFwiLi9wcmluY2Vzc1Jlc1V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHByaW5jZXNzX0RhdGEge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBwcmluY2Vzc0NvbnRyb2xDbGFzcyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogcHJpbmNlc3NDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogcHJpbmNlc3NDb250cm9sQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHByaW5jZXNzQ29udHJvbENsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHVibGljIGltZ0lkOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcHJpbmNlc3NTb3VuZFRvb2w6IHByaW5jZXNzU291bmRUb29sID0gbmV3IHByaW5jZXNzU291bmRUb29sKCk7XHJcbiAgICBwdWJsaWMgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICBwdWJsaWMgcHJpbmNlc3NSZXNVdGlsID0gcHJpbmNlc3NSZXNVdGlsO1xyXG5cclxuXHJcbiAgICBkZXNpZ25XaWR0aDpudW1iZXIgID0gMTI4MDsvL+iuvuiuoeWIhui+qOeOh+WuvVxyXG4gICAgZGVzaWduSGVpZ2h0Om51bWJlciA9ICA3MjA7Ly/orr7orqHliIbovqjnjofpq5hcclxuXHJcbiAgICBpc0lwYWRGaXg6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNJcGhvbmVYU01heEZpeDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpcGhvbmVYU01heFk6bnVtYmVyID0gMDtcclxuXHJcbiAgICBpc0xpdWhhaUZpeDpib29sZWFuID0gZmFsc2U7Ly/mmK/lkKbmnInliJjmtbdcclxuICAgIGxpdWhhaVk6bnVtYmVyID0gMDsvL+WImOa1t+mrmOW6plxyXG5cclxuICAgIHNldHNjZW5lTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHNjZW5lTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2i77yM56eSLT7liIbnp5IsIG1tOnNzXHJcbiAgICAqL1xyXG4gICAgdGltZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgICAgIGxldCBtaW51dGU6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlY29uZDogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAlIDYwKTtcclxuICAgICAgICBsZXQgbWluU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKG1pbnV0ZSA8IDEwKSB7ICAgICAgICAvL+WIhumSn1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBcIjBcIiArIG1pbnV0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pblN0ciA9IG1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VjU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDEwKSB7ICAgICAgICAvL+enkuaVsFxyXG4gICAgICAgICAgICBzZWNTdHIgPSBcIjBcIiArIHNlY29uZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlY1N0ciA9IHNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bWluU3RyfToke3NlY1N0cn1gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+i/lOWbnuiMg+WbtOeahOmaj+acuuaVsFxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAwLjk5OTk5OTk5OSkpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFqOWxj+eql+WPo+iDjOaZr+WbvumAgumFjVxyXG4gICAgYWRhcHRlckJnKGJnTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8v6IOM5pmv5aSn5Zu+6YCC6YWNIOetieavlOe8qeaUviDkuI3nlZnpu5HovrlcclxuICAgICAgICBsZXQgX2JnV2lkdGhTY2FsZSA9IGNjLndpblNpemUud2lkdGggLyBiZ05vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGJnTm9kZS5zY2FsZSA9IE1hdGgubWF4KF9iZ1dpZHRoU2NhbGUsIF9iZ0hlaWdodFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i9rOaIkOiKgueCueWdkOagh1xyXG4gICAgY2hhbmdlUG9zKHRvTm9kZTogY2MuTm9kZSwgZnJvbU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodG9Ob2RlKSB8fCAhY2MuaXNWYWxpZChmcm9tTm9kZSkpIHJldHVybiBjYy52MygwLCAwKTtcclxuICAgICAgICBsZXQgX3BvcyA9IHRvTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IF9ucG9zID0gZnJvbU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKF9wb3MpO1xyXG4gICAgICAgIHJldHVybiBfbnBvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1hbmltLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkZWxheUNhbGxCYWNrKHRpbWU6IG51bWJlciwgX2NhbGxiYWNrOiBhbnksIG5vZGVEZWxheT86IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgQ2FudmFzTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGVEZWxheSkpIHtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZSA9IG5vZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KENhbnZhc05vZGUpOy8v6L+Z6YeM5LiN6IO95YGc5q2iQ2FudmFzTm9kZeeahOaJgOacieWKqOS9nFxyXG4gICAgICAgIGNjLnR3ZWVuKENhbnZhc05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGlmIChfY2FsbGJhY2spIF9jYWxsYmFjaygpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgbmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZW5kQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2FsbEJhY2soMC4wMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzcFNrZWwubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIHNwU2tlbC5zZXREaXNwb3NlTGlzdGVuZXIoZW5kQ2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNwU2tlbC5zZXRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgIH1cclxuICAgIHN0b3BTcChzcFNrZWw6IHNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgLy8gc3BTa2VsLmNsZWFyVHJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bqP5YiX5Yqo55S7KOa3u+WKoOS4gOS4quWKqOeUu+WIsOWwvuW3tCDov5jlj6/ku6Xlu7bov5/lh6Dnp5IpXHJcbiAgICBhZGRTZXF1ZW5jZVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGRlbGF5VGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3AsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcmluY2Vzc0NvbnRyb2wgPSBwcmluY2Vzc0NvbnRyb2xDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSB7XHJcbiAgICBmbGFzazogXCJmbGFza1wiLCAgICAgICAgICAgICAgIC8v5ri45oiP5Zy65pmvXHJcbiAgICBnbGFzczogXCJnbGFzc1wiLCAgICAgICAgICAgICAgIC8v5aSn5Y6FXHJcbiAgICBjdXA6IFwiY3VwXCIsICAgICAgICAgICAgICAgICAgIC8v55m75b2V6aG1XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxsID0ge1xyXG4gICAgRW1pbHlQb3A6IFwiRW1pbHlQb3BcIiwgICAgICAgICAgICAgICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBTb3BoaWFQb3A6IFwiU29waGlhUG9wXCIsICAgICAgICAgICAgICAgLy/ml7bpl7TliLBcclxuICAgIEF2YVBvcDogXCJBdmFQb3BcIiwgICAgICAgICAgICAgICAgICAgICAvL+mAgOWHuiDov5Tlm57lpKfljoVcclxuICAgIElzYWJlbGxhUG9wOiBcIklzYWJlbGxhUG9wXCIsICAgICAgICAgICAvL+iuvue9rlxyXG4gICAgTWlhUG9wOiBcIk1pYVBvcFwiLCAgICAgICAgICAgICAgICAgICAgIC8v55m75b2V6aG16ZqQ56eB5Y2P6K6uXHJcbiAgICBBbWVsaWFQb3A6IFwiQW1lbGlhUG9wXCIsICAgICAgICAgICAgICAgLy/lpLTlg4/mm7TmlLlcclxuICAgIEV2ZWx5blBvcDogXCJFdmVseW5Qb3BcIiwgICAgICAgICAgICAgICAvL+acquino+mUgeW8ueeql1xyXG59ICAgIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTRDQSxDQUFDO0lBM0NpQiw4QkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsR0FBVztRQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFYSw4QkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsWUFBcUI7UUFDM0QsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBRWEsNEJBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLFNBQWtCO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVhLDRCQUFZLEdBQTFCLFVBQTJCLEdBQVcsRUFBRSxZQUFzQjtRQUMxRCxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3hFLENBQUM7SUFFYSwrQkFBZSxHQUE3QixVQUE4QixHQUFXLEVBQUUsWUFBb0I7UUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVhLCtCQUFlLEdBQTdCLFVBQThCLEdBQVcsRUFBRSxZQUFvQjtRQUMzRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7SUFFYSw4QkFBYyxHQUE1QixVQUE2QixHQUFXO1FBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLDhCQUFjLEdBQTVCLFVBQTZCLEdBQUcsRUFBRSxJQUFJO1FBQ2xDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFYSwyQkFBVyxHQUF6QixVQUEwQixHQUFXO1FBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBwcmluY2Vzc1N0b3JhZ2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdHJpbmdCeUtleShrZXk6IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RyaW5nQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogXCJcIjtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/IHRlbXBWYWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEJvb2xCeUtleShrZXk6IHN0cmluZywgYm9vbFZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJpbmdCeUtleShrZXksIChib29sVmFsdWUgPyBcIjFcIiA6IFwiMFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCb29sQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/ICh0ZW1wVmFsdWUgPT0gXCIxXCIgPyB0cnVlIDogZmFsc2UpIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW50ZWdlckJ5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RyaW5nQnlLZXkoa2V5LCBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRlZ2VyQnlLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdGVtcFZhbHVlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBWYWx1ZSA/IHBhcnNlSW50KHRlbXBWYWx1ZSkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTdG9yYWdlSlNPTihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA8IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBpZiAoZGF0YSkgeyByZXR1cm4gSlNPTi5wYXJzZShkYXRhKSB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFN0b3JhZ2VKU09OKGtleSwgZGF0YSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUJ5S2V5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
