"use strict";
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