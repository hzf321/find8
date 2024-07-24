"use strict";
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