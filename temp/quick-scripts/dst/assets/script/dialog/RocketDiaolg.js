
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/RocketDiaolg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9335d26T05DjJw8MacCCseS', 'RocketDiaolg');
// script/dialog/RocketDiaolg.ts

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
var RocketDiaolg = /** @class */ (function (_super) {
    __extends(RocketDiaolg, _super);
    function RocketDiaolg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    RocketDiaolg.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    RocketDiaolg.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    RocketDiaolg.prototype.onClick_continue_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    RocketDiaolg.prototype.onClick_backHall = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
    };
    RocketDiaolg = __decorate([
        ccclass
    ], RocketDiaolg);
    return RocketDiaolg;
}(cc.Component));
exports.default = RocketDiaolg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1JvY2tldERpYW9sZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNEQ7QUFDNUQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBOEJDO1FBNUJHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBNEI5QixDQUFDO0lBekJhLDRCQUFLLEdBQWY7UUFDSSxzQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0QsMkNBQW9CLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHNCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsc0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQTdCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQThCaEM7SUFBRCxtQkFBQztDQTlCRCxBQThCQyxDQTlCeUMsRUFBRSxDQUFDLFNBQVMsR0E4QnJEO2tCQTlCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlQ29udHJvbCwgc3Ryb25nIH0gZnJvbSBcIi4uL3Rvb2wvYW11c2VDb250cm9sXCI7XG5pbXBvcnQgeyBhZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUdhbWVEYXRhXCI7XG4gXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrZXREaWFvbGcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBhZ0RhdGEuc2hvd0Jhbm5lcigpO1xuICAgIH1cblxuICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGRhdGEuY2FsbGJhY2s7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlX2J0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGFnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFja0hhbGwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBhZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3Ryb25nLmZsb3dlcik7XG5cbiAgICB9XG59XG4iXX0=