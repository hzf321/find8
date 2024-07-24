
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/OrangeDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL09yYW5nZURpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsdURBQStDO0FBR3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkRDO1FBdkRHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTJDaEIsQ0FBQztJQXpDRyw0QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsMkJBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0NBQy9CLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCwyQkFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxTQUFPLENBQUM7OztRQU5iLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUEvQyxDQUFDO1NBT1Q7SUFDTCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDOUMsMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0Msc0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEMsc0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxJQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksMkJBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLDJCQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ007SUFWVixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMkRoQztJQUFELG1CQUFDO0NBM0RELEFBMkRDLENBM0R5QyxFQUFFLENBQUMsU0FBUyxHQTJEckQ7a0JBM0RvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBhbXVzZUNvbnRyb2wgfSBmcm9tIFwiLi4vdG9vbC9hbXVzZUNvbnRyb2xcIjtcbmltcG9ydCB7IGFnRGF0YSB9IGZyb20gXCIuLi90b29sL2FtdXNlR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JhbmdlRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBhdmF0YXJJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuXG4gICAgY2xpY2tpZCA9IDA7XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lZGl0Qm94LnN0cmluZyA9IGFnRGF0YS51c2VyRGF0YS5nYW1lTmFtZTtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGFnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMuYXZhdGFySWNvbik7XG4gICAgICAgIHRoaXMuY2xpY2tpZCA9IGFnRGF0YS51c2VyRGF0YS5hdmF0YXJJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jb250ZW50Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5maW5kKFwibWFzay9pY29uXCIsIGl0ZW0pLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGkgKyAxKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbigoaSArIDEpKVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYWdyZWVuKCkge1xuICAgICAgICBhZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWUgPSB0aGlzLmVkaXRCb3guc3RyaW5nXG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBhZ0RhdGEudXNlckRhdGEuYXZhdGFySWQgPSB0aGlzLmNsaWNraWQ7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jYW5uZWwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoYW5nZUljb24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNsaWNraWQgPSBpbmRleDtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKGluZGV4KSwgdGhpcy5hdmF0YXJJY29uKTtcbiAgICB9XG59XG4iXX0=