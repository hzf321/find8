"use strict";
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