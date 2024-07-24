
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'amuseScroll');
// script/tool/amuseScroll.ts

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
var scrollTool = /** @class */ (function (_super) {
    __extends(scrollTool, _super);
    function scrollTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    scrollTool.prototype.onLoad = function () {
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
    scrollTool.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    scrollTool.prototype._check_collision = function (node_o_) {
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
    scrollTool.prototype._event_update_opacity = function () {
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
    scrollTool = __decorate([
        ccclass
    ], scrollTool);
    return scrollTool;
}(cc.Component));
exports.default = scrollTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxxQkFBcUI7QUFFckI7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBa0RBLENBQUM7SUFqREcsa0ZBQWtGO0lBQ2xGLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUNELHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDNUIsK0NBQTBCLEdBQWxDLFVBQW1DLE9BQVk7UUFDM0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDaEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUM3QixHQUFHLEVBQ0gsR0FBRyxDQUNOLENBQUM7UUFDRixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELFVBQVU7SUFDRixxQ0FBZ0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELHlCQUF5QjtRQUN6QixPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMENBQTBDO0lBQ2xDLDBDQUFxQixHQUE3QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMvRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FrRDlCO0lBQUQsaUJBQUM7Q0FsREQsQUFrREMsQ0FsRHVDLEVBQUUsQ0FBQyxTQUFTLEdBa0RuRDtrQkFsRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoq5YiX6KGoZHJhdyBjYWxs5LyY5YyW57uE5Lu2ICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2Nyb2xsVG9vbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zZWdtZW50YXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuS4jeWtmOWcqFNjcm9sbFZpZXfnu4Tku7bvvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5LqL5Lu255uR5ZCsXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNjcm9sbGluZ1wiLCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9SRU1PVkVELCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5DSElMRF9SRU9SREVSLCB0aGlzLl9ldmVudF91cGRhdGVfb3BhY2l0eSwgdGhpcyk7XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKuWKn+iDveWHveaVsCoqKioqKioqKioqKioqKiAqL1xuICAgIC8qKuiOt+WPluWcqOS4lueVjOWdkOagh+ezu+S4i+eahOiKgueCueWMheWbtOebkijkuI3ljIXlkKvoh6rouqvmv4DmtLvnmoTlrZDoioLngrnojIPlm7QpICovXG4gICAgcHJpdmF0ZSBfZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZChub2RlX29fOiBhbnkpOiBjYy5SZWN0IHtcbiAgICAgICAgbGV0IHdfbjogbnVtYmVyID0gbm9kZV9vXy5fY29udGVudFNpemUud2lkdGg7XG4gICAgICAgIGxldCBoX246IG51bWJlciA9IG5vZGVfb18uX2NvbnRlbnRTaXplLmhlaWdodDtcbiAgICAgICAgbGV0IHJlY3RfbyA9IGNjLnJlY3QoXG4gICAgICAgICAgICAtbm9kZV9vXy5fYW5jaG9yUG9pbnQueCAqIHdfbiwgXG4gICAgICAgICAgICAtbm9kZV9vXy5fYW5jaG9yUG9pbnQueSAqIGhfbiwgXG4gICAgICAgICAgICB3X24sIFxuICAgICAgICAgICAgaF9uXG4gICAgICAgICk7XG4gICAgICAgIG5vZGVfb18uX2NhbGN1bFdvcmxkTWF0cml4KCk7XG4gICAgICAgIHJlY3Rfby50cmFuc2Zvcm1NYXQ0KHJlY3Rfbywgbm9kZV9vXy5fd29ybGRNYXRyaXgpO1xuICAgICAgICByZXR1cm4gcmVjdF9vO1xuICAgIH1cbiAgICAvKirmo4DmtYvnorDmkp4gKi9cbiAgICBwcml2YXRlIF9jaGVja19jb2xsaXNpb24obm9kZV9vXzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVjdDFfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LnBhcmVudCk7XG4gICAgICAgIGxldCByZWN0Ml9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZChub2RlX29fKTtcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5L+d6Zmp6IyD5Zu0XG4gICAgICAgIHJlY3QxX28ud2lkdGggKz0gcmVjdDFfby53aWR0aCAqIDAuNTtcbiAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHJlY3QxX28ueCAtPSByZWN0MV9vLndpZHRoICogMC4yNTtcbiAgICAgICAgcmVjdDFfby55IC09IHJlY3QxX28uaGVpZ2h0ICogMC4yNTtcbiAgICAgICAgcmV0dXJuIHJlY3QxX28uaW50ZXJzZWN0cyhyZWN0Ml9vKTtcbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioq6Ieq5a6a5LmJ5LqL5Lu2KioqKioqKioqKioqKioqICAqL1xuICAgIHByaXZhdGUgX2V2ZW50X3VwZGF0ZV9vcGFjaXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCh2MV9vPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3QxX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5wYXJlbnQpO1xuICAgICAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICAgICAgcmVjdDFfby5oZWlnaHQgKz0gcmVjdDFfby5oZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLnggLT0gcmVjdDFfby53aWR0aCAqIDAuMjU7XG4gICAgICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuXG4gICAgICAgICAgICB2MV9vLm9wYWNpdHkgPSB0aGlzLl9jaGVja19jb2xsaXNpb24odjFfbykgPyAyNTUgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19