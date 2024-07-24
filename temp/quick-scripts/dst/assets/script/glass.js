
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