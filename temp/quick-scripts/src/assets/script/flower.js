"use strict";
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