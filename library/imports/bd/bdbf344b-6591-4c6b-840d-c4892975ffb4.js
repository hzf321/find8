"use strict";
cc._RF.push(module, 'bdbf3RLZZFMa4QNxIkpdf+0', 'OrangeDialog');
// script/dialog/OrangeDialog.ts

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
var OrangeDialog = /** @class */ (function (_super) {
    __extends(OrangeDialog, _super);
    function OrangeDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatarIcon = null;
        _this.contentBox = null;
        _this.editBox = null;
        _this.callback = null;
        _this.clickid = 0;
        return _this;
    }
    OrangeDialog.prototype.start = function () {
        var _this = this;
        this.editBox.string = amuseGameData_1.agData.userData.gameName;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.avatarIcon);
        this.clickid = amuseGameData_1.agData.userData.avatarId;
        var _loop_1 = function (i) {
            var item = this_1.contentBox.children[i];
            var icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, function () {
                _this.changeIcon((i + 1));
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.contentBox.children.length; i++) {
            _loop_1(i);
        }
    };
    OrangeDialog.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    OrangeDialog.prototype.onClick_agreen = function () {
        amuseGameData_1.agData.userData.gameName = this.editBox.string;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.userData.avatarId = this.clickid;
        amuseGameData_1.agData.storageData();
        this.callback && this.callback();
        this.node.destroy();
    };
    OrangeDialog.prototype.onClick_close = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    OrangeDialog.prototype.onClick_cannel = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    };
    OrangeDialog.prototype.changeIcon = function (index) {
        this.clickid = index;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (index), this.avatarIcon);
    };
    __decorate([
        property(cc.Sprite)
    ], OrangeDialog.prototype, "avatarIcon", void 0);
    __decorate([
        property(cc.Node)
    ], OrangeDialog.prototype, "contentBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], OrangeDialog.prototype, "editBox", void 0);
    OrangeDialog = __decorate([
        ccclass
    ], OrangeDialog);
    return OrangeDialog;
}(cc.Component));
exports.default = OrangeDialog;

cc._RF.pop();