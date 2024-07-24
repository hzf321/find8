
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'princessControl');
// script/tool/princessControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dell = exports.delay = exports.princessControl = void 0;
var princessSoundTool_1 = require("./princessSoundTool");
var princessResUtil_1 = require("./princessResUtil");
var princessControlClass = /** @class */ (function () {
    function princessControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.princessSoundTool = new princessSoundTool_1.princessSoundTool();
        this.eventTarget = new cc.EventTarget();
        this.princessResUtil = princessResUtil_1.princessResUtil;
        this.designWidth = 1280; //设计分辨率宽
        this.designHeight = 720; //设计分辨率高
        this.isIpadFix = false;
        this.isIphoneXSMaxFix = false;
        this.iphoneXSMaxY = 0;
        this.isLiuhaiFix = false; //是否有刘海
        this.liuhaiY = 0; //刘海高度
    }
    princessControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new princessControlClass();
        }
        return this._instance;
    };
    princessControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    princessControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    princessControlClass.prototype.timeChange = function (value) {
        value = +value;
        var minute = Math.floor(value / 60);
        var second = Math.floor(value % 60);
        var minStr = "";
        if (minute < 10) { //分钟
            minStr = "0" + minute;
        }
        else {
            minStr = minute.toString();
        }
        var secStr = "";
        if (second < 10) { //秒数
            secStr = "0" + second;
        }
        else {
            secStr = second.toString();
        }
        return minStr + ":" + secStr;
    };
    //返回范围的随机数
    princessControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    princessControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    princessControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    princessControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
        var CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(function () { if (_callback)
            _callback(); })
            .start();
    };
    princessControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
        var _this = this;
        if (isLoop === void 0) { isLoop = false; }
        if (endCallback === void 0) { endCallback = null; }
        spSkel.setCompleteListener(function () {
            if (endCallback) {
                _this.delayCallBack(0.02, function () {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    };
    princessControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    princessControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    princessControlClass._instance = null;
    return princessControlClass;
}());
exports.princessControl = princessControlClass.getInstance();
exports.delay = {
    flask: "flask",
    glass: "glass",
    cup: "cup",
};
exports.dell = {
    EmilyPop: "EmilyPop",
    SophiaPop: "SophiaPop",
    AvaPop: "AvaPop",
    IsabellaPop: "IsabellaPop",
    MiaPop: "MiaPop",
    AmeliaPop: "AmeliaPop",
    EvelynPop: "EvelynPop",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELHFEQUFvRDtBQVlwRDtJQUFBO1FBV1csY0FBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLHNCQUFpQixHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDL0QsZ0JBQVcsR0FBbUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxpQ0FBZSxDQUFDO1FBR3pDLGdCQUFXLEdBQVcsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUNuQyxpQkFBWSxHQUFXLEdBQUcsQ0FBQyxDQUFBLFFBQVE7UUFFbkMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixxQkFBZ0IsR0FBVyxLQUFLLENBQUM7UUFDakMsaUJBQVksR0FBVSxDQUFDLENBQUM7UUFFeEIsZ0JBQVcsR0FBVyxLQUFLLENBQUMsQ0FBQSxPQUFPO1FBQ25DLFlBQU8sR0FBVSxDQUFDLENBQUMsQ0FBQSxNQUFNO0lBOEY3QixDQUFDO0lBdEhpQixnQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQXFCRCwyQ0FBWSxHQUFaLFVBQWEsSUFBYTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBR0Q7O01BRUU7SUFDRix5Q0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FB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RztJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixXQUFXLEVBQUUsYUFBYTtJQUMxQixNQUFNLEVBQUUsUUFBUTtJQUNoQixTQUFTLEVBQUUsV0FBVztJQUN0QixTQUFTLEVBQUUsV0FBVztDQUN6QixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbmNlc3NTb3VuZFRvb2wgfSBmcm9tIFwiLi9wcmluY2Vzc1NvdW5kVG9vbFwiO1xyXG5pbXBvcnQgeyBwcmluY2Vzc1Jlc1V0aWwgfSBmcm9tIFwiLi9wcmluY2Vzc1Jlc1V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHByaW5jZXNzX0RhdGEge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBwcmluY2Vzc0NvbnRyb2xDbGFzcyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogcHJpbmNlc3NDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogcHJpbmNlc3NDb250cm9sQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHByaW5jZXNzQ29udHJvbENsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHVibGljIGltZ0lkOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcHJpbmNlc3NTb3VuZFRvb2w6IHByaW5jZXNzU291bmRUb29sID0gbmV3IHByaW5jZXNzU291bmRUb29sKCk7XHJcbiAgICBwdWJsaWMgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICBwdWJsaWMgcHJpbmNlc3NSZXNVdGlsID0gcHJpbmNlc3NSZXNVdGlsO1xyXG5cclxuXHJcbiAgICBkZXNpZ25XaWR0aDpudW1iZXIgID0gMTI4MDsvL+iuvuiuoeWIhui+qOeOh+WuvVxyXG4gICAgZGVzaWduSGVpZ2h0Om51bWJlciA9ICA3MjA7Ly/orr7orqHliIbovqjnjofpq5hcclxuXHJcbiAgICBpc0lwYWRGaXg6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNJcGhvbmVYU01heEZpeDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpcGhvbmVYU01heFk6bnVtYmVyID0gMDtcclxuXHJcbiAgICBpc0xpdWhhaUZpeDpib29sZWFuID0gZmFsc2U7Ly/mmK/lkKbmnInliJjmtbdcclxuICAgIGxpdWhhaVk6bnVtYmVyID0gMDsvL+WImOa1t+mrmOW6plxyXG5cclxuICAgIHNldHNjZW5lTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHNjZW5lTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2i77yM56eSLT7liIbnp5IsIG1tOnNzXHJcbiAgICAqL1xyXG4gICAgdGltZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgICAgIGxldCBtaW51dGU6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlY29uZDogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAlIDYwKTtcclxuICAgICAgICBsZXQgbWluU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKG1pbnV0ZSA8IDEwKSB7ICAgICAgICAvL+WIhumSn1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBcIjBcIiArIG1pbnV0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pblN0ciA9IG1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VjU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDEwKSB7ICAgICAgICAvL+enkuaVsFxyXG4gICAgICAgICAgICBzZWNTdHIgPSBcIjBcIiArIHNlY29uZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlY1N0ciA9IHNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bWluU3RyfToke3NlY1N0cn1gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+i/lOWbnuiMg+WbtOeahOmaj+acuuaVsFxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAwLjk5OTk5OTk5OSkpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFqOWxj+eql+WPo+iDjOaZr+WbvumAgumFjVxyXG4gICAgYWRhcHRlckJnKGJnTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8v6IOM5pmv5aSn5Zu+6YCC6YWNIOetieavlOe8qeaUviDkuI3nlZnpu5HovrlcclxuICAgICAgICBsZXQgX2JnV2lkdGhTY2FsZSA9IGNjLndpblNpemUud2lkdGggLyBiZ05vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGJnTm9kZS5zY2FsZSA9IE1hdGgubWF4KF9iZ1dpZHRoU2NhbGUsIF9iZ0hlaWdodFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i9rOaIkOiKgueCueWdkOagh1xyXG4gICAgY2hhbmdlUG9zKHRvTm9kZTogY2MuTm9kZSwgZnJvbU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodG9Ob2RlKSB8fCAhY2MuaXNWYWxpZChmcm9tTm9kZSkpIHJldHVybiBjYy52MygwLCAwKTtcclxuICAgICAgICBsZXQgX3BvcyA9IHRvTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IF9ucG9zID0gZnJvbU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKF9wb3MpO1xyXG4gICAgICAgIHJldHVybiBfbnBvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1hbmltLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkZWxheUNhbGxCYWNrKHRpbWU6IG51bWJlciwgX2NhbGxiYWNrOiBhbnksIG5vZGVEZWxheT86IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgQ2FudmFzTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGVEZWxheSkpIHtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZSA9IG5vZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KENhbnZhc05vZGUpOy8v6L+Z6YeM5LiN6IO95YGc5q2iQ2FudmFzTm9kZeeahOaJgOacieWKqOS9nFxyXG4gICAgICAgIGNjLnR3ZWVuKENhbnZhc05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGlmIChfY2FsbGJhY2spIF9jYWxsYmFjaygpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgbmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZW5kQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2FsbEJhY2soMC4wMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzcFNrZWwubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIHNwU2tlbC5zZXREaXNwb3NlTGlzdGVuZXIoZW5kQ2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNwU2tlbC5zZXRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgIH1cclxuICAgIHN0b3BTcChzcFNrZWw6IHNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgLy8gc3BTa2VsLmNsZWFyVHJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bqP5YiX5Yqo55S7KOa3u+WKoOS4gOS4quWKqOeUu+WIsOWwvuW3tCDov5jlj6/ku6Xlu7bov5/lh6Dnp5IpXHJcbiAgICBhZGRTZXF1ZW5jZVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGRlbGF5VGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3AsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcmluY2Vzc0NvbnRyb2wgPSBwcmluY2Vzc0NvbnRyb2xDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSB7XHJcbiAgICBmbGFzazogXCJmbGFza1wiLCAgICAgICAgICAgICAgIC8v5ri45oiP5Zy65pmvXHJcbiAgICBnbGFzczogXCJnbGFzc1wiLCAgICAgICAgICAgICAgIC8v5aSn5Y6FXHJcbiAgICBjdXA6IFwiY3VwXCIsICAgICAgICAgICAgICAgICAgIC8v55m75b2V6aG1XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxsID0ge1xyXG4gICAgRW1pbHlQb3A6IFwiRW1pbHlQb3BcIiwgICAgICAgICAgICAgICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBTb3BoaWFQb3A6IFwiU29waGlhUG9wXCIsICAgICAgICAgICAgICAgLy/ml7bpl7TliLBcclxuICAgIEF2YVBvcDogXCJBdmFQb3BcIiwgICAgICAgICAgICAgICAgICAgICAvL+mAgOWHuiDov5Tlm57lpKfljoVcclxuICAgIElzYWJlbGxhUG9wOiBcIklzYWJlbGxhUG9wXCIsICAgICAgICAgICAvL+iuvue9rlxyXG4gICAgTWlhUG9wOiBcIk1pYVBvcFwiLCAgICAgICAgICAgICAgICAgICAgIC8v55m75b2V6aG16ZqQ56eB5Y2P6K6uXHJcbiAgICBBbWVsaWFQb3A6IFwiQW1lbGlhUG9wXCIsICAgICAgICAgICAgICAgLy/lpLTlg4/mm7TmlLlcclxuICAgIEV2ZWx5blBvcDogXCJFdmVseW5Qb3BcIiwgICAgICAgICAgICAgICAvL+acquino+mUgeW8ueeql1xyXG59ICAgIl19