"use strict";
cc._RF.push(module, 'bdbf3RLZZFMa4QNxIkpdf+0', 'AmeliaPop');
// script/dialog/AmeliaPop.ts

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
var AmeliaPop = /** @class */ (function (_super) {
    __extends(AmeliaPop, _super);
    function AmeliaPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatarIcon = null;
        _this.contentBox = null;
        _this.editBox = null;
        _this.callback = null;
        _this.clickid = 0;
        return _this;
    }
    AmeliaPop.prototype.start = function () {
        var _this = this;
        this.editBox.string = princessGameData_1.pgData.userData.gameName;
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.avatarIcon);
        this.clickid = princessGameData_1.pgData.userData.avatarId;
        var _loop_1 = function (i) {
            var item = this_1.contentBox.children[i];
            var icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, function () {
                _this.changeIcon((i + 1));
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.contentBox.children.length; i++) {
            _loop_1(i);
        }
    };
    AmeliaPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    AmeliaPop.prototype.onClick_agreen = function () {
        princessGameData_1.pgData.userData.gameName = this.editBox.string;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.userData.avatarId = this.clickid;
        princessGameData_1.pgData.storageData();
        this.callback && this.callback();
        this.node.destroy();
    };
    AmeliaPop.prototype.onClick_close = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    AmeliaPop.prototype.onClick_cannel = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    };
    AmeliaPop.prototype.changeIcon = function (index) {
        this.clickid = index;
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (index), this.avatarIcon);
    };
    __decorate([
        property(cc.Sprite)
    ], AmeliaPop.prototype, "avatarIcon", void 0);
    __decorate([
        property(cc.Node)
    ], AmeliaPop.prototype, "contentBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], AmeliaPop.prototype, "editBox", void 0);
    AmeliaPop = __decorate([
        ccclass
    ], AmeliaPop);
    return AmeliaPop;
}(cc.Component));
exports.default = AmeliaPop;

cc._RF.pop();