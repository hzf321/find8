
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57cabiblbxOB7KtkV6MiZG/', 'princessGameData');
// script/tool/princessGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.pgData = void 0;
var princessStorage_1 = require("./princessStorage");
var onCloseFinishCb = null;
var onClosefailCb = null;
var princessGameData = /** @class */ (function () {
    function princessGameData() {
        this.privacyPolicyUrl = "https://sites.google.com/view/find-the-differences-fairy-pri/halaman-muka";
        this.termsofServiceUrl = "https://sites.google.com/view/find-the-differences-fairy-ter/halaman-muka";
        this.levelAll = 30;
        this.userData = {
            isClause: false,
            tishiNum: 1,
            level: 1,
            isHall: false,
            isGudie: false,
            finishLevel5: false,
            gameName: "StrongBanana",
            avatarId: 1,
        };
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }
    princessGameData.getInstance = function () {
        if (this._instance == null) {
            this._instance = new princessGameData();
        }
        return this._instance;
    };
    princessGameData.prototype.storageData = function () {
        princessStorage_1.princessStorage.setStorageJSON(storage.gamedata, this.userData);
    };
    princessGameData.prototype.setVideoFailCb = function (cb) {
        // onClosefailCb = null;
        // onClosefailCb = cb;
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    princessGameData.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("BeautifulFindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    princessGameData.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    };
    //关闭banner
    princessGameData.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    };
    //打开url
    princessGameData.prototype.openUrl = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    };
    princessGameData.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    princessGameData.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
    };
    princessGameData._instance = null;
    return princessGameData;
}());
exports.pgData = princessGameData.getInstance();
var storage;
(function (storage) {
    storage["gamedata"] = "gamedata";
})(storage = exports.storage || (exports.storage = {}));
var sound;
(function (sound) {
    sound["bgm"] = "bgm";
    sound["click"] = "click";
    sound["correct"] = "correct";
    sound["err"] = "err";
    sound["fail"] = "fail";
    sound["win"] = "win";
})(sound = exports.sound || (exports.sound = {}));
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onClosefailCb']();
};
window['onClosefailCb'] = function () {
};
//游戏暂停
window['gamestop'] = function () {
};
//游戏恢复
window['gamerecovery'] = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc0dhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFvRDtBQUVwRCxJQUFJLGVBQWUsR0FBZSxJQUFJLENBQUM7QUFDdkMsSUFBSSxhQUFhLEdBQWUsSUFBSSxDQUFDO0FBQ3JDO0lBWUk7UUFNQSxxQkFBZ0IsR0FBVywyRUFBMkUsQ0FBQztRQUN2RyxzQkFBaUIsR0FBVywyRUFBMkUsQ0FBQztRQUV4RyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBUTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFsQkUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFaYSw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQXdCRCxzQ0FBVyxHQUFYO1FBQ0ksaUNBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUdELHlDQUFjLEdBQWQsVUFBZSxFQUFjO1FBQ3pCLHdCQUF3QjtRQUN4Qixz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QixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFHRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFHRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUc7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUVELE1BQU07QUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgeyBwcmluY2Vzc1N0b3JhZ2UgfSBmcm9tIFwiLi9wcmluY2Vzc1N0b3JhZ2VcIjtcblxubGV0IG9uQ2xvc2VGaW5pc2hDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5sZXQgb25DbG9zZWZhaWxDYjogKCkgPT4gdm9pZCA9IG51bGw7XG5jbGFzcyBwcmluY2Vzc0dhbWVEYXRhIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogcHJpbmNlc3NHYW1lRGF0YSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IHByaW5jZXNzR2FtZURhdGEge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgcHJpbmNlc3NHYW1lRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2ZpbmQtdGhlLWRpZmZlcmVuY2VzLWZhaXJ5LXByaS9oYWxhbWFuLW11a2FcIjtcbiAgICB0ZXJtc29mU2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9maW5kLXRoZS1kaWZmZXJlbmNlcy1mYWlyeS10ZXIvaGFsYW1hbi1tdWthXCI7XG5cbiAgICBsZXZlbEFsbDogbnVtYmVyID0gMzA7XG4gICAgdXNlckRhdGE6IGFueSA9IHtcbiAgICAgICAgaXNDbGF1c2U6IGZhbHNlLCAgICAvL+aYr+WQpuaJk+W8gOi/h+makOengeWNj+iuriAgICBcbiAgICAgICAgdGlzaGlOdW06IDEsICAgICAgICAvL+aPkOekuuasoeaVsFxuICAgICAgICBsZXZlbDogMSwgICAgICAgICAgIC8v5b2T5YmN5YWz5Y2hXG4gICAgICAgIGlzSGFsbDogZmFsc2UsICAgICAgLy/mmK/lkKbov5Tlm57ov4flpKfljoVcbiAgICAgICAgaXNHdWRpZTogZmFsc2UsICAgICAgLy/mmK/lkKbmiZPlvIDov4fmlrDmiYvlvJXlr7xcbiAgICAgICAgZmluaXNoTGV2ZWw1OiBmYWxzZSwgIC8v5piv5ZCm5a6M5oiQ6L+H56ysNeWFs1xuICAgICAgICBnYW1lTmFtZTogXCJTdHJvbmdCYW5hbmFcIiwgICAvL+eOqeWutuWQjeWtl1xuICAgICAgICBhdmF0YXJJZDogMSwgICAgICAgICAgICAvL+WktOWDj2lkXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBwcmluY2Vzc1N0b3JhZ2Uuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyBvbkNsb3NlZmFpbENiID0gbnVsbDtcbiAgICAgICAgLy8gb25DbG9zZWZhaWxDYiA9IGNiO1xuXG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gbnVsbDtcbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gID0gY2I7XG4gICAgfVxuXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0t55yL5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93U2hpUGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IG51bGw7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkJlYXV0aWZ1bEZpbmRBZE1nclwiLCBcImxvYWRSZXdhcmRcIik7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ109IGZpbmlzaENiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluaXNoQ2IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAYmFubmVyXG4gICAgc2hvd0Jhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3diYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAdXJsXG4gICAgb3BlblVybCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIm9wZW5VcmxcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2V0R2FtZXN0b3AoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lc3RvcCddID0gZnVuYztcbiAgICB9XG5cbiAgICBzZXRHYW1lcmVjb3ZlcnkoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lcmVjb3ZlcnknXSA9IGZ1bmM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgcGdEYXRhID0gcHJpbmNlc3NHYW1lRGF0YS5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZW51bSBzdG9yYWdlIHtcbiAgICBnYW1lZGF0YSA9IFwiZ2FtZWRhdGFcIixcbn1cblxuZXhwb3J0IGVudW0gc291bmQge1xuICAgIGJnbSA9IFwiYmdtXCIsXG4gICAgY2xpY2sgPSBcImNsaWNrXCIsXG4gICAgY29ycmVjdCA9IFwiY29ycmVjdFwiLFxuICAgIGVyciA9IFwiZXJyXCIsXG4gICAgZmFpbCA9IFwiZmFpbFwiLFxuICAgIHdpbiA9IFwid2luXCIsXG59XG5cblxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddKClcbn1cblxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9mYWlsQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10oKVxufVxuXG53aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vL+a4uOaIj+aaguWBnFxud2luZG93WydnYW1lc3RvcCddID0gKCkgPT4ge1xuXG59XG5cblxuLy/muLjmiI/mgaLlpI1cbndpbmRvd1snZ2FtZXJlY292ZXJ5J10gPSAoKSA9PiB7XG5cbn0iXX0=