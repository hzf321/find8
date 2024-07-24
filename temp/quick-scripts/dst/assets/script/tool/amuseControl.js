
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'amuseControl');
// script/tool/amuseControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.strong = exports.amuseControl = void 0;
var amuseSoundTool_1 = require("./amuseSoundTool");
var amuseResUtil_1 = require("./amuseResUtil");
var amuseControlClass = /** @class */ (function () {
    function amuseControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.amuseSoundTool = new amuseSoundTool_1.amuseSoundTool();
        this.eventTarget = new cc.EventTarget();
        this.amuseResUtil = amuseResUtil_1.amuseResUtil;
        this.designWidth = 1280; //设计分辨率宽
        this.designHeight = 720; //设计分辨率高
        this.isIpadFix = false;
        this.isIphoneXSMaxFix = false;
        this.iphoneXSMaxY = 0;
        this.isLiuhaiFix = false; //是否有刘海
        this.liuhaiY = 0; //刘海高度
    }
    amuseControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new amuseControlClass();
        }
        return this._instance;
    };
    amuseControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    amuseControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    amuseControlClass.prototype.timeChange = function (value) {
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
    amuseControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    amuseControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    amuseControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    amuseControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
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
    amuseControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
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
    amuseControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    amuseControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    amuseControlClass._instance = null;
    return amuseControlClass;
}());
exports.amuseControl = amuseControlClass.getInstance();
exports.strong = {
    sunset: "sunset",
    flower: "flower",
    bright: "bright",
};
exports.circle = {
    PurpleDialog: "PurpleDialog",
    SummerDialog: "SummerDialog",
    RocketDiaolg: "RocketDiaolg",
    SpiritDialog: "SpiritDialog",
    YellowDialog: "YellowDialog",
    OrangeDialog: "OrangeDialog",
    PlanetDialog: "PlanetDialog",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELCtDQUE4QztBQVk5QztJQUFBO1FBV1csY0FBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQ3RELGdCQUFXLEdBQW1CLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELGlCQUFZLEdBQUcsMkJBQVksQ0FBQztRQUduQyxnQkFBVyxHQUFXLElBQUksQ0FBQyxDQUFBLFFBQVE7UUFDbkMsaUJBQVksR0FBVyxHQUFHLENBQUMsQ0FBQSxRQUFRO1FBRW5DLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsS0FBSyxDQUFDLENBQUEsT0FBTztRQUNuQyxZQUFPLEdBQVUsQ0FBQyxDQUFDLENBQUEsTUFBTTtJQThGN0IsQ0FBQztJQXRIaUIsNkJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFxQkQsd0NBQVksR0FBWixVQUFhLElBQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUdEOztNQUVFO0lBQ0Ysc0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFD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SUFDbEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7Q0FDL0IsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFtdXNlU291bmRUb29sIH0gZnJvbSBcIi4vYW11c2VTb3VuZFRvb2xcIjtcclxuaW1wb3J0IHsgYW11c2VSZXNVdGlsIH0gZnJvbSBcIi4vYW11c2VSZXNVdGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBtZWludkRhdGEge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBhbXVzZUNvbnRyb2xDbGFzcyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW11c2VDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogYW11c2VDb250cm9sQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGFtdXNlQ29udHJvbENsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHVibGljIGltZ0lkOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgYW11c2VTb3VuZFRvb2w6IGFtdXNlU291bmRUb29sID0gbmV3IGFtdXNlU291bmRUb29sKCk7XHJcbiAgICBwdWJsaWMgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICBwdWJsaWMgYW11c2VSZXNVdGlsID0gYW11c2VSZXNVdGlsO1xyXG5cclxuXHJcbiAgICBkZXNpZ25XaWR0aDpudW1iZXIgID0gMTI4MDsvL+iuvuiuoeWIhui+qOeOh+WuvVxyXG4gICAgZGVzaWduSGVpZ2h0Om51bWJlciA9ICA3MjA7Ly/orr7orqHliIbovqjnjofpq5hcclxuXHJcbiAgICBpc0lwYWRGaXg6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNJcGhvbmVYU01heEZpeDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpcGhvbmVYU01heFk6bnVtYmVyID0gMDtcclxuXHJcbiAgICBpc0xpdWhhaUZpeDpib29sZWFuID0gZmFsc2U7Ly/mmK/lkKbmnInliJjmtbdcclxuICAgIGxpdWhhaVk6bnVtYmVyID0gMDsvL+WImOa1t+mrmOW6plxyXG5cclxuICAgIHNldHNjZW5lTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHNjZW5lTm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZU5vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2i77yM56eSLT7liIbnp5IsIG1tOnNzXHJcbiAgICAqL1xyXG4gICAgdGltZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgICAgIGxldCBtaW51dGU6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlY29uZDogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAlIDYwKTtcclxuICAgICAgICBsZXQgbWluU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKG1pbnV0ZSA8IDEwKSB7ICAgICAgICAvL+WIhumSn1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBcIjBcIiArIG1pbnV0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pblN0ciA9IG1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VjU3RyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgaWYgKHNlY29uZCA8IDEwKSB7ICAgICAgICAvL+enkuaVsFxyXG4gICAgICAgICAgICBzZWNTdHIgPSBcIjBcIiArIHNlY29uZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlY1N0ciA9IHNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bWluU3RyfToke3NlY1N0cn1gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+i/lOWbnuiMg+WbtOeahOmaj+acuuaVsFxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAwLjk5OTk5OTk5OSkpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFqOWxj+eql+WPo+iDjOaZr+WbvumAgumFjVxyXG4gICAgYWRhcHRlckJnKGJnTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIC8v6IOM5pmv5aSn5Zu+6YCC6YWNIOetieavlOe8qeaUviDkuI3nlZnpu5HovrlcclxuICAgICAgICBsZXQgX2JnV2lkdGhTY2FsZSA9IGNjLndpblNpemUud2lkdGggLyBiZ05vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9iZ0hlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBiZ05vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGJnTm9kZS5zY2FsZSA9IE1hdGgubWF4KF9iZ1dpZHRoU2NhbGUsIF9iZ0hlaWdodFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i9rOaIkOiKgueCueWdkOagh1xyXG4gICAgY2hhbmdlUG9zKHRvTm9kZTogY2MuTm9kZSwgZnJvbU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodG9Ob2RlKSB8fCAhY2MuaXNWYWxpZChmcm9tTm9kZSkpIHJldHVybiBjYy52MygwLCAwKTtcclxuICAgICAgICBsZXQgX3BvcyA9IHRvTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IF9ucG9zID0gZnJvbU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKF9wb3MpO1xyXG4gICAgICAgIHJldHVybiBfbnBvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1hbmltLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBkZWxheUNhbGxCYWNrKHRpbWU6IG51bWJlciwgX2NhbGxiYWNrOiBhbnksIG5vZGVEZWxheT86IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgQ2FudmFzTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGVEZWxheSkpIHtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZSA9IG5vZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KENhbnZhc05vZGUpOy8v6L+Z6YeM5LiN6IO95YGc5q2iQ2FudmFzTm9kZeeahOaJgOacieWKqOS9nFxyXG4gICAgICAgIGNjLnR3ZWVuKENhbnZhc05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGlmIChfY2FsbGJhY2spIF9jYWxsYmFjaygpOyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgbmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZW5kQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2FsbEJhY2soMC4wMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzcFNrZWwubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIHNwU2tlbC5zZXREaXNwb3NlTGlzdGVuZXIoZW5kQ2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNwU2tlbC5zZXRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgIH1cclxuICAgIHN0b3BTcChzcFNrZWw6IHNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgLy8gc3BTa2VsLmNsZWFyVHJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bqP5YiX5Yqo55S7KOa3u+WKoOS4gOS4quWKqOeUu+WIsOWwvuW3tCDov5jlj6/ku6Xlu7bov5/lh6Dnp5IpXHJcbiAgICBhZGRTZXF1ZW5jZVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGRlbGF5VGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3AsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BTa2VsLmFkZEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbXVzZUNvbnRyb2wgPSBhbXVzZUNvbnRyb2xDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb25nID0ge1xyXG4gICAgc3Vuc2V0OiBcInN1bnNldFwiLCAgICAgICAgICAgICAgIC8v5ri45oiP5Zy65pmvXHJcbiAgICBmbG93ZXI6IFwiZmxvd2VyXCIsICAgICAgICAgICAgICAgLy/lpKfljoVcclxuICAgIGJyaWdodDogXCJicmlnaHRcIiwgICAgICAgICAgICAgICAvL+eZu+W9lemhtVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2lyY2xlID0ge1xyXG4gICAgUHVycGxlRGlhbG9nOiBcIlB1cnBsZURpYWxvZ1wiLCAgICAgICAgICAgICAgICAgLy/muLjmiI/nu5PmnZ9cclxuICAgIFN1bW1lckRpYWxvZzogXCJTdW1tZXJEaWFsb2dcIiwgICAgICAgICAgICAgICAgIC8v5pe26Ze05YiwXHJcbiAgICBSb2NrZXREaWFvbGc6IFwiUm9ja2V0RGlhb2xnXCIsICAgICAgICAgICAgICAgICAvL+mAgOWHuiDov5Tlm57lpKfljoVcclxuICAgIFNwaXJpdERpYWxvZzogXCJTcGlyaXREaWFsb2dcIiwgICAgICAgICAgICAgICAgIC8v6K6+572uXHJcbiAgICBZZWxsb3dEaWFsb2c6IFwiWWVsbG93RGlhbG9nXCIsICAgICAgICAgICAgICAgICAvL+eZu+W9lemhtemakOengeWNj+iurlxyXG4gICAgT3JhbmdlRGlhbG9nOiBcIk9yYW5nZURpYWxvZ1wiLCAgICAgICAgICAgICAgIC8v5aS05YOP5pu05pS5XHJcbiAgICBQbGFuZXREaWFsb2c6IFwiUGxhbmV0RGlhbG9nXCIsICAgICAgICAgICAgICAgLy/mnKrop6PplIHlvLnnqpdcclxufSAgICJdfQ==