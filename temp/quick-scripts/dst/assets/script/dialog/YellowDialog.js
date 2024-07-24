
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/YellowDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'YellowDialog');
// script/dialog/YellowDialog.ts

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
var YellowDialog = /** @class */ (function (_super) {
    __extends(YellowDialog, _super);
    function YellowDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    YellowDialog.prototype.start = function () {
        amuseGameData_1.agData.showBanner();
    };
    YellowDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    YellowDialog.prototype.onClick_Agreen = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        amuseGameData_1.agData.closeBanner();
    };
    YellowDialog.prototype.onClick_PrivacyPolicy_btn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(amuseGameData_1.agData.privacyPolicyUrl);
    };
    YellowDialog.prototype.onClick_Termsofservicebtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(amuseGameData_1.agData.termsofServiceUrl);
    };
    YellowDialog = __decorate([
        ccclass
    ], YellowDialog);
    return YellowDialog;
}(cc.Component));
exports.default = YellowDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1llbGxvd0RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkJDO1FBM0JHLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBMkI5QixDQUFDO0lBekJHLDRCQUFLLEdBQUw7UUFDSSxzQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsc0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0RBQXlCLEdBQXpCO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnREFBeUIsR0FBekI7UUFDSSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTNCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZCaEM7SUFBRCxtQkFBQztDQTdCRCxBQTZCQyxDQTdCeUMsRUFBRSxDQUFDLFNBQVMsR0E2QnJEO2tCQTdCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCB7IGFtdXNlQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2FtdXNlQ29udHJvbFwiO1xuaW1wb3J0IHsgYWdEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvYW11c2VHYW1lRGF0YVwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVsbG93RGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgYWdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfQWdyZWVuKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKClcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgYWdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuIFxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChhZ0RhdGEucHJpdmFjeVBvbGljeVVybCk7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKGFnRGF0YS50ZXJtc29mU2VydmljZVVybCk7XG4gICAgfVxuXG59XG4iXX0=