
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