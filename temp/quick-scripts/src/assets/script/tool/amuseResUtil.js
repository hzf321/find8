"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'amuseResUtil');
// script/tool/amuseResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.amuseResUtil = void 0;
var amuseResBind_1 = require("./amuseResBind");
var amuseControl_1 = require("./amuseControl");
var amuseResUtil = /** @class */ (function () {
    function amuseResUtil() {
    }
    // 绑定资源释放
    amuseResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(amuseResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(amuseResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    amuseResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    amuseResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    amuseResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    amuseResUtil.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.releaseRes(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------  
    amuseResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(node, prefab);
            var parentNode = amuseControl_1.amuseControl.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    amuseResUtil.showToast = function (text) {
        cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var toast = cc.instantiate(prefab);
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(toast, prefab);
            var parentNode = amuseControl_1.amuseControl.getsceneNode();
            if (toast && parentNode) {
                toast.active = true;
                parentNode.addChild(toast);
                var toastLabel = toast.getChildByName("label");
                toastLabel.getComponent(cc.Label).string = text;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    return amuseResUtil;
}());
exports.amuseResUtil = amuseResUtil;

cc._RF.pop();