
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/princessSoundTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9wcmluY2Vzc1NvdW5kVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTzs7O0FBRVAscURBQW9EO0FBR3BELElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFFbEM7SUFvQ0k7UUE5QlEsbUJBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVMsR0FBaUIsSUFBSSxDQUFDO1FBNEJuQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlDQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEdBQUcsaUNBQWUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQ0FBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBN0JNLDhDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU87UUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7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QUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTCx3QkFBQztBQUFELENBckpBLEFBcUpDLElBQUE7QUFySlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/pn7PpopHlt6XlhbfnsbtcclxuXHJcbmltcG9ydCB7IHByaW5jZXNzU3RvcmFnZSB9IGZyb20gXCIuL3ByaW5jZXNzU3RvcmFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IGNvbW1vbkJ0blBhdGggPSBcInNvdW5kL2NsaWNrXCI7XHJcbmNvbnN0IGNvbW1vbkJnbVBhdGggPSBcInNvdW5kL2JnbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHByaW5jZXNzU291bmRUb29sIHtcclxuICAgICBcclxuICAgIG11c2ljU3dpdGNoOiBib29sZWFuOyAgICAvL+iDjOaZr+mfs+S5kOW8gOWFs1xyXG4gICAgZWZmZWN0U3dpdGNoOiBib29sZWFuOyAgIC8v6Z+z5pWI5byA5YWzXHJcbiAgICBzaG9ja1N3aXRjaDogYm9vbGVhbjsgICAgLy8g6ZyH5Yqo5byA5YWzICAgXHJcblxyXG4gICAgcHJpdmF0ZSBidG5DbGlja0VmZmVjdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmdtTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluaXRCdG5DbGlja0VmZmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idG5DbGlja0VmZmVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CdG5QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xpY2tFZmZlY3QgPSBjbGlwO1xyXG4gICAgICAgICAgICBjbGlwLmFkZFJlZigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0YmdtTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtTXVzaWMpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoY29tbW9uQmdtUGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJnbU11c2ljID0gY2xpcDtcclxuICAgICAgICAgICAgdGhpcy5jb21tb25iZ21NdXNpYygpO1xyXG4gICAgICAgICAgICBjbGlwLmFkZFJlZigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfZWZmZWN0XCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2hvY2tTd2l0Y2ggPSBwcmluY2Vzc1N0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfc2hvY2tcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3aXRjaE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXVzaWNTd2l0Y2ggPSAhdGhpcy5tdXNpY1N3aXRjaDtcclxuICAgICAgICBwcmluY2Vzc1N0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdGhpcy5tdXNpY1N3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyck11c2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmN1cnJNdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0U3dpdGNoID0gIXRoaXMuZWZmZWN0U3dpdGNoO1xyXG4gICAgICAgIHByaW5jZXNzU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdGhpcy5lZmZlY3RTd2l0Y2gpO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoU2hvY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9ICF0aGlzLnNob2NrU3dpdGNoO1xyXG4gICAgICAgIHByaW5jZXNzU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0aGlzLnNob2NrU3dpdGNoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBsYXlNdXNpYyhhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3Vyck11c2ljID0gYXVkaW87Ly/kv53lrZjlvZPliY3og4zmma/pn7PkuZBcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhhdWRpbywgaXNMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3QoYXVkaW86IGNjLkF1ZGlvQ2xpcCwgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5lZmZlY3RTd2l0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSUQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0V2l0aFBhdGgocGF0aDogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhdGhpcy5lZmZlY3RTd2l0Y2gpIHJldHVybjtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L296Z+z5pWI6LWE5rqQ5aSx6LSlXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgaXNMb29wLCAxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc3VtZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wRWZmZWN0KGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwYXVzZShhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc3VtZShhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21tb25CdG5DbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QodGhpcy5idG5DbGlja0VmZmVjdCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21tb25iZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmJnbU11c2ljKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==