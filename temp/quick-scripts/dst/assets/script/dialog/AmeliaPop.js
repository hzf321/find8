
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/AmeliaPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0FtZWxpYVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsNkRBQWtEO0FBRzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMkRDO1FBdkRHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTJDaEIsQ0FBQztJQXpDRyx5QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsaUNBQWUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsQ0FBQyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLE9BQU8sR0FBRyx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0NBQy9CLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxTQUFPLENBQUM7OztRQU5iLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUEvQyxDQUFDO1NBT1Q7SUFDTCxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDOUMsaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRCx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4Qyx5QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLElBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlDQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ007SUFWVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkQ3QjtJQUFELGdCQUFDO0NBM0RELEFBMkRDLENBM0RzQyxFQUFFLENBQUMsU0FBUyxHQTJEbEQ7a0JBM0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvcHJpbmNlc3NDb250cm9sXCI7XG5pbXBvcnQgeyBwZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9wcmluY2Vzc0dhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtZWxpYVBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYXZhdGFySWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cblxuICAgIGNsaWNraWQgPSAwO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWRpdEJveC5zdHJpbmcgPSBwZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWU7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy5hdmF0YXJJY29uKTtcbiAgICAgICAgdGhpcy5jbGlja2lkID0gcGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnRCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmZpbmQoXCJtYXNrL2ljb25cIiwgaXRlbSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJtZWltZWkvXCIgKyBcIm1laW1laVwiICsgKGkgKyAxKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbigoaSArIDEpKVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYWdyZWVuKCkge1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuZ2FtZU5hbWUgPSB0aGlzLmVkaXRCb3guc3RyaW5nXG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuYXZhdGFySWQgPSB0aGlzLmNsaWNraWQ7XG4gICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jbG9zZSgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25DbGlja19jYW5uZWwoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2VJY29uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jbGlja2lkID0gaW5kZXg7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAoaW5kZXgpLCB0aGlzLmF2YXRhckljb24pO1xuICAgIH1cbn1cbiJdfQ==