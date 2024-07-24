"use strict";
cc._RF.push(module, '87fb2mrp1VFOI1j4qX/zAH6', 'EvelynPop');
// script/dialog/EvelynPop.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EvelynPop = /** @class */ (function (_super) {
    __extends(EvelynPop, _super);
    function EvelynPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    EvelynPop.prototype.start = function () {
    };
    EvelynPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    EvelynPop.prototype.onClick_cancel = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    EvelynPop.prototype.onClick_closeBtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    EvelynPop = __decorate([
        ccclass
    ], EvelynPop);
    return EvelynPop;
}(cc.Component));
exports.default = EvelynPop;

cc._RF.pop();