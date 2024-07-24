"use strict";
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