
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