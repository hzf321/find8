
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'princessResUtil');
// script/tool/princessResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessResUtil = void 0;
var princessResBind_1 = require("./princessResBind");
var princessControl_1 = require("./princessControl");
var princessResUtil = /** @class */ (function () {
    function princessResUtil() {
    }
    // 绑定资源释放
    princessResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(princessResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(princessResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    princessResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    princessResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    princessResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    princessResUtil.loadSprite = function (picPath, sprite, defPath) {
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
    princessResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            princessControl_1.princessControl.princessResUtil.bindResAsset(node, prefab);
            var parentNode = princessControl_1.princessControl.getsceneNode();
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
    princessResUtil.showToast = function (text) {
        cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var toast = cc.instantiate(prefab);
            princessControl_1.princessControl.princessResUtil.bindResAsset(toast, prefab);
            var parentNode = princessControl_1.princessControl.getsceneNode();
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
    return princessResUtil;
}());
exports.princessResUtil = princessResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1Jlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVM7OztBQUVULHFEQUFnRDtBQUNoRCxxREFBb0Q7QUFJcEQ7SUFBQTtJQW9HQSxDQUFDO0lBbEdHLFNBQVM7SUFDSyw0QkFBWSxHQUExQixVQUEyQixNQUFlLEVBQUUsS0FBZTtRQUN2RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGNBQWM7SUFDQSwwQkFBVSxHQUF4QixVQUF5QixLQUFlO1FBQ3BDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxvQ0FBb0M7SUFDdEIseUJBQVMsR0FBdkIsVUFBd0IsU0FBaUIsRUFBRSxTQUEwQixFQUFFLE9BQXNCO1FBQ3pGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUs7SUFDUyw0QkFBWSxHQUExQixVQUEyQixTQUFpQixFQUFFLFNBQTBCO1FBQ3BFLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUztJQUNLLDBCQUFV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t+exu1xyXG5cclxuaW1wb3J0IHByaW5jZXNzUmVzQmluZCBmcm9tIFwiLi9wcmluY2Vzc1Jlc0JpbmRcIjtcclxuaW1wb3J0IHsgcHJpbmNlc3NDb250cm9sIH0gZnJvbSBcIi4vcHJpbmNlc3NDb250cm9sXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBc3NldENhbGxGdW5jID0gKGVycjogRXJyb3IsIGFzc2V0RGF0YTogY2MuQXNzZXQpID0+IHZvaWQ7XHJcbiBcclxuZXhwb3J0IGNsYXNzIHByaW5jZXNzUmVzVXRpbCB7XHJcbiAgICAgXHJcbiAgICAvLyDnu5HlrprotYTmupDph4rmlL5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmluZFJlc0Fzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChwcmluY2Vzc1Jlc0JpbmQpO1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0ZW1wQXV0bykpIHtcclxuICAgICAgICAgICAgdGVtcEF1dG8gPSBwYXJlbnQuYWRkQ29tcG9uZW50KHByaW5jZXNzUmVzQmluZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOajgOa1i+W8leeUqOiuoeaVsOWQjumHiuaUvui1hOa6kFxyXG4gICAgcHVibGljIHN0YXRpYyByZWxlYXNlUmVzKGFzc2V0OiBjYy5Bc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGFzc2V0KSAmJiBhc3NldC5yZWZDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQoYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9vSjlv4XpobvphY3lkIhhZGRBdXRvUmVsZWFzZUFzc2V0IOS9v+eUqOe7keWumui1hOa6kClcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0KGFzc2V0UGF0aDogc3RyaW5nLCBhc3NldFR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgYXNzZXRDYjogQXNzZXRDYWxsRnVuYyk6IHZvaWQge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGFzc2V0UGF0aCwgYXNzZXRUeXBlLCBhc3NldENiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mihOWKoOi9vVxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVsb2FkQXNzZXQoYXNzZXRQYXRoOiBzdHJpbmcsIGFzc2V0VHlwZTogdHlwZW9mIGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoYXNzZXRQYXRoLCBhc3NldFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9veWNleW8oOWbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU3ByaXRlKHBpY1BhdGg6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGRlZlBhdGg/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZmluaXNoQ2FsbGJhY2sgPSAoZXJyLCBzcDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZlBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGUoZGVmUGF0aCwgc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoc3ByaXRlKSAmJiBzcHJpdGVbXCJuZXdVcmxcIl0gPT0gcGljUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFkZEF1dG9SZWxlYXNlQXNzZXQoc3ApO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMoc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZVtcIm5ld1VybFwiXSA9IHBpY1BhdGg7Ly8g6K6w5b2V5pyA5pawdXJsIOmYsuatouWkmuasoeivt+axguW8guatpeiuvue9ruS6huaXp+eahFxyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7Ly/nva7nqbog6Ziy5q2i546p5a6255yL5Yiw5pen55qE6YGT5YW36K+v5LyaXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGljUGF0aCwgY2MuU3ByaXRlRnJhbWUsIGZpbmlzaENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3otYTmupDliqDovb0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93RGlhbG9nKHVybDogc3RyaW5nLCBkYXRhPywgY2FsbGJhY2s/KSB7XHJcbiAgICAgXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvXCIgKyB1cmwsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmJpbmRSZXNBc3NldChub2RlLCBwcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHByaW5jZXNzQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCh1cmwpLmluaXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dUb2FzdCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi90b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRvYXN0ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5iaW5kUmVzQXNzZXQodG9hc3QsIHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gcHJpbmNlc3NDb250cm9sLmdldHNjZW5lTm9kZSgpO1xyXG4gICAgICAgICAgICBpZiAodG9hc3QgJiYgcGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvYXN0TGFiZWwgPSB0b2FzdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodG9hc3QpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Qub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRvYXN0KS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==