
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'princessScroll');
// script/tool/princessScroll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表draw call优化组件 */
var princessScroll = /** @class */ (function (_super) {
    __extends(princessScroll, _super);
    function princessScroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    princessScroll.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    princessScroll.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    princessScroll.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件***************  */
    princessScroll.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    princessScroll = __decorate([
        ccclass
    ], princessScroll);
    return princessScroll;
}(cc.Component));
exports.default = princessScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxxQkFBcUI7QUFFckI7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBa0RBLENBQUM7SUFqREcsa0ZBQWtGO0lBQ2xGLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUNELHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDNUIsbURBQTBCLEdBQWxDLFVBQW1DLE9BQVk7UUFDM0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDaEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixHQUFHLEVBQ0gsR0FBRyxDQUNOLENBQUM7UUFDRixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELFVBQVU7SUFDRix5Q0FBZ0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELHlCQUF5QjtRQUN6QixPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMENBQTBDO0lBQ2xDLDhDQUFxQixHQUE3QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRGdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrRGxDO0lBQUQscUJBQUM7Q0FsREQsQUFrREMsQ0FsRDJDLEVBQUUsQ0FBQyxTQUFTLEdBa0R2RDtrQkFsRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoq5YiX6KGoZHJhdyBjYWxs5LyY5YyW57uE5Lu2ICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJpbmNlc3NTY3JvbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2VnbWVudGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuI3lrZjlnKhTY3JvbGxWaWV357uE5Lu277yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS6i+S7tuebkeWQrFxuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVNT1ZFRCwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVPUkRFUiwgdGhpcy5fZXZlbnRfdXBkYXRlX29wYWNpdHksIHRoaXMpO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKirlip/og73lh73mlbAqKioqKioqKioqKioqKiogKi9cbiAgICAvKirojrflj5blnKjkuJbnlYzlnZDmoIfns7vkuIvnmoToioLngrnljIXlm7Tnm5Io5LiN5YyF5ZCr6Ieq6Lqr5r+A5rS755qE5a2Q6IqC54K56IyD5Zu0KSAqL1xuICAgIHByaXZhdGUgX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXzogYW55KTogY2MuUmVjdCB7XG4gICAgICAgIGxldCB3X246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLndpZHRoO1xuICAgICAgICBsZXQgaF9uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCByZWN0X28gPSBjYy5yZWN0KFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnggKiB3X24sIFxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnkgKiBoX24sIFxuICAgICAgICAgICAgd19uLCBcbiAgICAgICAgICAgIGhfblxuICAgICAgICApO1xuICAgICAgICBub2RlX29fLl9jYWxjdWxXb3JsZE1hdHJpeCgpO1xuICAgICAgICByZWN0X28udHJhbnNmb3JtTWF0NChyZWN0X28sIG5vZGVfb18uX3dvcmxkTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHJlY3RfbztcbiAgICB9XG4gICAgLyoq5qOA5rWL56Kw5pKeICovXG4gICAgcHJpdmF0ZSBfY2hlY2tfY29sbGlzaW9uKG5vZGVfb186IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICBsZXQgcmVjdDJfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXyk7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeS/nemZqeiMg+WbtFxuICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG4gICAgICAgIHJldHVybiByZWN0MV9vLmludGVyc2VjdHMocmVjdDJfbyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuiHquWumuS5ieS6i+S7tioqKioqKioqKioqKioqKiAgKi9cbiAgICBwcml2YXRlIF9ldmVudF91cGRhdGVfb3BhY2l0eSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LmNoaWxkcmVuLmZvckVhY2godjFfbz0+IHtcbiAgICAgICAgICAgIGxldCByZWN0MV9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQucGFyZW50KTtcbiAgICAgICAgICAgIHJlY3QxX28ud2lkdGggKz0gcmVjdDFfby53aWR0aCAqIDAuNTtcbiAgICAgICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby54IC09IHJlY3QxX28ud2lkdGggKiAwLjI1O1xuICAgICAgICAgICAgcmVjdDFfby55IC09IHJlY3QxX28uaGVpZ2h0ICogMC4yNTtcblxuICAgICAgICAgICAgdjFfby5vcGFjaXR5ID0gdGhpcy5fY2hlY2tfY29sbGlzaW9uKHYxX28pID8gMjU1IDogMDtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==