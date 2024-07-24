"use strict";
cc._RF.push(module, '57cabiblbxOB7KtkV6MiZG/', 'amuseGameData');
// script/tool/amuseGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.agData = void 0;
var amuseStorage_1 = require("./amuseStorage");
var onCloseFinishCb = null;
var onClosefailCb = null;
var amuseGameData = /** @class */ (function () {
    function amuseGameData() {
        this.privacyPolicyUrl = "https://sites.google.com/view/difference-discoverer-privacy-/halaman-muka";
        this.termsofServiceUrl = "https://sites.google.com/view/difference-discoverer-terms-of/halaman-muka";
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
    amuseGameData.getInstance = function () {
        if (this._instance == null) {
            this._instance = new amuseGameData();
        }
        return this._instance;
    };
    amuseGameData.prototype.storageData = function () {
        amuseStorage_1.amuseStorage.setStorageJSON(storage.gamedata, this.userData);
    };
    amuseGameData.prototype.setVideoFailCb = function (cb) {
        // onClosefailCb = null;
        // onClosefailCb = cb;
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    amuseGameData.prototype.showVideo = function (finishCb) {
        finishCb();
        return;
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("FindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    amuseGameData.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    };
    //关闭banner
    amuseGameData.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    };
    //打开url
    amuseGameData.prototype.openUrl = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    };
    amuseGameData.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    amuseGameData.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
    };
    amuseGameData._instance = null;
    return amuseGameData;
}());
exports.agData = amuseGameData.getInstance();
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