"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'SophiaPop');
// script/dialog/SophiaPop.ts

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
var SophiaPop = /** @class */ (function (_super) {
    __extends(SophiaPop, _super);
    function SophiaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    SophiaPop.prototype.start = function () {
        princessGameData_1.pgData.showBanner();
    };
    SophiaPop.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    SophiaPop.prototype.onClick_AD_btn = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                princessGameData_1.pgData.closeBanner();
            });
        });
    };
    SophiaPop.prototype.onClick_restart = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        princessGameData_1.pgData.closeBanner();
    };
    SophiaPop = __decorate([
        ccclass
    ], SophiaPop);
    return SophiaPop;
}(cc.Component));
exports.default = SophiaPop;

cc._RF.pop();