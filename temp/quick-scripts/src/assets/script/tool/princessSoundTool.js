"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'princessSoundTool');
// script/tool/princessSoundTool.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessSoundTool = void 0;
var princessStorage_1 = require("./princessStorage");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var princessSoundTool = /** @class */ (function () {
    function princessSoundTool() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = princessStorage_1.princessStorage.getBoolByKey("kk_setup_shock", true);
    }
    princessSoundTool.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    princessSoundTool.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    princessSoundTool.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    princessSoundTool.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    princessSoundTool.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        princessStorage_1.princessStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    princessSoundTool.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    princessSoundTool.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    princessSoundTool.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    princessSoundTool.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    princessSoundTool.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    princessSoundTool.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    princessSoundTool.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    princessSoundTool.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    princessSoundTool.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    princessSoundTool.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    princessSoundTool.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    princessSoundTool.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return princessSoundTool;
}());
exports.princessSoundTool = princessSoundTool;

cc._RF.pop();