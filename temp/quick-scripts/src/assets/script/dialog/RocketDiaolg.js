"use strict";
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