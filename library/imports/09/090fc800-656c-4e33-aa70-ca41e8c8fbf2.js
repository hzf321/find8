"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'amuseSoundTool');
// script/tool/amuseSoundTool.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.amuseSoundTool = void 0;
var amuseStorage_1 = require("./amuseStorage");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var amuseSoundTool = /** @class */ (function () {
    function amuseSoundTool() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = amuseStorage_1.amuseStorage.getBoolByKey("kk_setup_shock", true);
    }
    amuseSoundTool.prototype.initBtnClickEffect = function () {
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
    amuseSoundTool.prototype.initbgmMusic = function () {
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
    amuseSoundTool.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    amuseSoundTool.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    amuseSoundTool.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        amuseStorage_1.amuseStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    amuseSoundTool.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    amuseSoundTool.prototype.playEffect = function (audio, isLoop, callback) {
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
    amuseSoundTool.prototype.playEffectWithPath = function (path, isLoop) {
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
    amuseSoundTool.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    amuseSoundTool.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    amuseSoundTool.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    amuseSoundTool.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    amuseSoundTool.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    amuseSoundTool.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    amuseSoundTool.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    amuseSoundTool.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    amuseSoundTool.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return amuseSoundTool;
}());
exports.amuseSoundTool = amuseSoundTool;

cc._RF.pop();