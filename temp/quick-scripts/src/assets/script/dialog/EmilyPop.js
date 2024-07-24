"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'EmilyPop');
// script/dialog/EmilyPop.ts

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
var EmilyPop = /** @class */ (function (_super) {
    __extends(EmilyPop, _super);
    function EmilyPop() {
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
    EmilyPop.prototype.initData = function (data) {
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
    EmilyPop.prototype.onLoad = function () {
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon);
    };
    EmilyPop.prototype.start = function () {
        princessControl_1.princessControl.adapterBg(this.bg);
    };
    EmilyPop.prototype.onClick_continueBtn = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        // this.callback && this.callback();
        princessGameData_1.pgData.userData.isHall = true;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.glass);
        this.node.destroy();
    };
    EmilyPop.prototype.onClick_close = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], EmilyPop.prototype, "playerIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], EmilyPop.prototype, "userIcon", void 0);
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "winNode", void 0);
    __decorate([
        property(cc.Node)
    ], EmilyPop.prototype, "failNode", void 0);
    EmilyPop = __decorate([
        ccclass
    ], EmilyPop);
    return EmilyPop;
}(cc.Component));
exports.default = EmilyPop;

cc._RF.pop();