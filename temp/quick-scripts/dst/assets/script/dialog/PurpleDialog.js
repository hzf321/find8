
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