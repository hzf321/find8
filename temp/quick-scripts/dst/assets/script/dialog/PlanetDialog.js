
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/PlanetDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1BsYW5ldERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFHOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1QkM7UUFyQkcsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFxQjlCLENBQUM7SUFsQmEsNEJBQUssR0FBZjtJQUVBLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBR0QscUNBQWMsR0FBZDtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDJCQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXRCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVCaEM7SUFBRCxtQkFBQztDQXZCRCxBQXVCQyxDQXZCeUMsRUFBRSxDQUFDLFNBQVMsR0F1QnJEO2tCQXZCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2FtdXNlQ29udHJvbFwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0RGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19jYW5jZWwoKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY2xvc2VCdG4oKSB7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==