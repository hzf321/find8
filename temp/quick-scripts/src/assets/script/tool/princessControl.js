"use strict";
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