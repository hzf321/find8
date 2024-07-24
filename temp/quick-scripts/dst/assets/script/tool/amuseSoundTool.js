
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/amuseSoundTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9hbXVzZVNvdW5kVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTzs7O0FBRVAsK0NBQThDO0FBRzlDLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFFbEM7SUFvQ0k7UUE5QlEsbUJBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVMsR0FBaUIsSUFBSSxDQUFDO1FBNEJuQyxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsMkJBQVksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFdBQVcsR0FBRywyQkFBWSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBN0JNLDJDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU87UUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFFBQVE7WUFB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LEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSx1Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTCxxQkFBQztBQUFELENBckpBLEFBcUpDLElBQUE7QUFySlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+mfs+mikeW3peWFt+exu1xyXG5cclxuaW1wb3J0IHsgYW11c2VTdG9yYWdlIH0gZnJvbSBcIi4vYW11c2VTdG9yYWdlXCI7XHJcblxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgYW11c2VTb3VuZFRvb2wge1xyXG4gICAgIFxyXG4gICAgbXVzaWNTd2l0Y2g6IGJvb2xlYW47ICAgIC8v6IOM5pmv6Z+z5LmQ5byA5YWzXHJcbiAgICBlZmZlY3RTd2l0Y2g6IGJvb2xlYW47ICAgLy/pn7PmlYjlvIDlhbNcclxuICAgIHNob2NrU3dpdGNoOiBib29sZWFuOyAgICAvLyDpnIfliqjlvIDlhbMgICBcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNsaWNrRWZmZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZ21NdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdEJ0bkNsaWNrRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkNsaWNrRWZmZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJ0blBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5DbGlja0VmZmVjdCA9IGNsaXA7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRiZ21NdXNpYygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21NdXNpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChjb21tb25CZ21QYXRoLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCAhY2MuaXNWYWxpZCh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmdtTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1vbmJnbU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmVmZmVjdFN3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IGFtdXNlU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9zaG9ja1wiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1N3aXRjaCA9ICF0aGlzLm11c2ljU3dpdGNoO1xyXG4gICAgICAgIGFtdXNlU3RvcmFnZS5zZXRCb29sQnlLZXkoXCJra19zZXR1cF9tdXNpY1wiLCB0aGlzLm11c2ljU3dpdGNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXNpY1N3aXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyTXVzaWMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuY3Vyck11c2ljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSAhdGhpcy5lZmZlY3RTd2l0Y2g7XHJcbiAgICAgICAgYW11c2VTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgYW11c2VTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRoaXMuc2hvY2tTd2l0Y2gpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheU11c2ljKGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyTXVzaWMgPSBhdWRpbzsvL+S/neWtmOW9k+WJjeiDjOaZr+mfs+S5kFxyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGF1ZGlvLCBpc0xvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChhdWRpbzogY2MuQXVkaW9DbGlwLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdFN3aXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlFZmZlY3RXaXRoUGF0aChwYXRoOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICF0aGlzLmVmZmVjdFN3aXRjaCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3pn7PmlYjotYTmupDlpLHotKVcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBpc0xvb3AsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcE11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChhdWRpb0lEKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBhdXNlKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lKGF1ZGlvSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljU3dpdGNoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbkJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmJ0bkNsaWNrRWZmZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1vbmJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuYmdtTXVzaWMpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19