
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseResBind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'amuseResBind');
// script/tool/amuseResBind.ts

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
cc.Component.prototype.addAutoReleaseAsset = function (_asset) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
};
cc.Component.prototype.addAutoReleaseAssets = function (_assets) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (var _i = 0, _assets_1 = _assets; _i < _assets_1.length; _i++) {
        var _assetOne = _assets_1[_i];
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
};
//-----------------------------------------------------------------------------------------------------AutoReleaseAssets
var ccclass = cc._decorator.ccclass;
var AutoReleaseAssets = /** @class */ (function (_super) {
    __extends(AutoReleaseAssets, _super);
    function AutoReleaseAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicsAssets = [];
        return _this;
    }
    AutoReleaseAssets.prototype.addAutoReleaseAsset = function (_asset) {
        if (cc.isValid(_asset)) {
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("1111111111");
        }
    };
    AutoReleaseAssets.prototype.onDestroy = function () {
        // console.log("222222222");
        for (var index = 0; index < this.dynamicsAssets.length; index++) {
            if (cc.isValid(this.dynamicsAssets[index])) {
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    };
    AutoReleaseAssets = __decorate([
        ccclass
    ], AutoReleaseAssets);
    return AutoReleaseAssets;
}(cc.Component));
exports.default = AutoReleaseAssets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVJlc0JpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBUyxNQUFlO0lBQ2pFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBO0FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBUyxPQUFrQjtJQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pELElBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsS0FBeUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7UUFBN0IsSUFBTSxTQUFTLGdCQUFBO1FBQ2hCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQztBQUNMLENBQUMsQ0FBQTtBQUVELHdIQUF3SDtBQUVqSCxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXNCQztRQXBCVyxvQkFBYyxHQUFlLEVBQUUsQ0FBQzs7SUFvQjVDLENBQUM7SUFsQlUsK0NBQW1CLEdBQTFCLFVBQTJCLE1BQWU7UUFDdEMsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyw2QkFBNkI7U0FDaEM7SUFDTCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLDRCQUE0QjtRQUM1QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0QsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2QztTQUNKO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBCZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FzQnJDO0lBQUQsd0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjhDLEVBQUUsQ0FBQyxTQUFTLEdBc0IxRDtrQkF0Qm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldCA9IGZ1bmN0aW9uKF9hc3NldDpjYy5Bc3NldCkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldCk7XHJcbn1cclxuXHJcbmNjLkNvbXBvbmVudC5wcm90b3R5cGUuYWRkQXV0b1JlbGVhc2VBc3NldHMgPSBmdW5jdGlvbihfYXNzZXRzOmNjLkFzc2V0W10pIHtcclxuICAgIGxldCB0ZW1wQXV0byA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgaWYoIWNjLmlzVmFsaWQodGVtcEF1dG8pKXtcclxuICAgICAgICB0ZW1wQXV0byA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VBc3NldHMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBfYXNzZXRPbmUgIG9mIF9hc3NldHMpIHtcclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KF9hc3NldE9uZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvUmVsZWFzZUFzc2V0c1xyXG5cclxuY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9SZWxlYXNlQXNzZXRzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGR5bmFtaWNzQXNzZXRzOiBjYy5Bc3NldFtdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0OmNjLkFzc2V0KXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKF9hc3NldCkpe1xyXG4gICAgICAgICAgICBfYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY3NBc3NldHMucHVzaChfYXNzZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjExMTExMTExMTFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIyMjIyMjIyMlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5keW5hbWljc0Fzc2V0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCh0aGlzLmR5bmFtaWNzQXNzZXRzW2luZGV4XSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0c1tpbmRleF0uZGVjUmVmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgIFxyXG59XHJcbiJdfQ==