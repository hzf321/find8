
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