
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/SummerDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'SummerDialog');
// script/dialog/SummerDialog.ts

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
var SummerDialog = /** @class */ (function (_super) {
    __extends(SummerDialog, _super);
    function SummerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    SummerDialog.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    SummerDialog.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    SummerDialog.prototype.onClick_AD_btn = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                amuseGameData_1.agData.closeBanner();
            });
        });
    };
    SummerDialog.prototype.onClick_restart = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    SummerDialog = __decorate([
        ccclass
    ], SummerDialog);
    return SummerDialog;
}(cc.Component));
exports.default = SummerDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1N1bW1lckRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBL0JHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWEsSUFBSSxDQUFDOztJQThCckMsQ0FBQztJQTVCRyw0QkFBSyxHQUFMO1FBQ0ksc0JBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7SUFHRCxxQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRywyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxzQkFBTSxDQUFDLFNBQVMsQ0FBQztZQUNiLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLHNCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixzQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFoQ2dCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpQ2hDO0lBQUQsbUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBaUNyRDtrQkFqQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbXVzZUNvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSB9IGZyb20gXCIuLi90b29sL2FtdXNlR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bW1lckRpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBBRGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcmVzdGFydENhbGxCYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgYWdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG5cbiAgICAgICAgdGhpcy5BRGNhbGxiYWNrID0gZGF0YS5BRGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnJlc3RhcnRDYWxsQmFjayA9IGRhdGEucmVzdGFydENhbGxCYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19BRF9idG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBhZ0RhdGEuc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuQURjYWxsYmFjayAmJiB0aGlzLkFEY2FsbGJhY2soKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgYWdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19yZXN0YXJ0KCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBhZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=