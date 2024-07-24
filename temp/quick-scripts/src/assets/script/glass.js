"use strict";
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