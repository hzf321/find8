"use strict";
cc._RF.push(module, '87fb2mrp1VFOI1j4qX/zAH6', 'PlanetDialog');
// script/dialog/PlanetDialog.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlanetDialog = /** @class */ (function (_super) {
    __extends(PlanetDialog, _super);
    function PlanetDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    PlanetDialog.prototype.start = function () {
    };
    PlanetDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    PlanetDialog.prototype.onClick_cancel = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    PlanetDialog.prototype.onClick_closeBtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    PlanetDialog = __decorate([
        ccclass
    ], PlanetDialog);
    return PlanetDialog;
}(cc.Component));
exports.default = PlanetDialog;

cc._RF.pop();