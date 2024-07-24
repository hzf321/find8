"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'PurpleDialog');
// script/dialog/PurpleDialog.ts

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
var PurpleDialog = /** @class */ (function (_super) {
    __extends(PurpleDialog, _super);
    function PurpleDialog() {
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
    PurpleDialog.prototype.initData = function (data) {
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
    PurpleDialog.prototype.onLoad = function () {
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon);
    };
    PurpleDialog.prototype.start = function () {
        amuseControl_1.amuseControl.adapterBg(this.bg);
    };
    PurpleDialog.prototype.onClick_continueBtn = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        // this.callback && this.callback();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
        this.node.destroy();
    };
    PurpleDialog.prototype.onClick_close = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], PurpleDialog.prototype, "playerIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], PurpleDialog.prototype, "userIcon", void 0);
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "winNode", void 0);
    __decorate([
        property(cc.Node)
    ], PurpleDialog.prototype, "failNode", void 0);
    PurpleDialog = __decorate([
        ccclass
    ], PurpleDialog);
    return PurpleDialog;
}(cc.Component));
exports.default = PurpleDialog;

cc._RF.pop();