
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/sunset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'sunset');
// script/sunset.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var newhand_1 = require("./prefeb/newhand");
var amuseControl_1 = require("./tool/amuseControl");
var amuseGameData_1 = require("./tool/amuseGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["discover"] = 0] = "discover";
    GameState[GameState["wrong"] = 1] = "wrong";
    GameState[GameState["repeat"] = 2] = "repeat";
})(GameState || (GameState = {}));
var sunset = /** @class */ (function (_super) {
    __extends(sunset, _super);
    function sunset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.pipeibg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab2 = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.heartBox = null;
        _this.emptyheartBox = null;
        _this.pipeiNode = null;
        _this.movePaly1 = null;
        _this.movePaly2 = null;
        _this.userIcon1 = null;
        _this.userIcon2 = null;
        _this.levelNum = null;
        _this.soundHallBtn = null;
        _this.musicHallBtn = null;
        _this.meinv_Data = [];
        _this.meinvY = 175;
        _this.meinvScale = 0.372;
        _this.yeziAllNum = 10;
        _this.meinvFindNum = 0;
        _this.meinvOutTime = 0;
        _this.lovelyIsPrompt = false;
        _this.timer = null;
        _this.isStop = false;
        _this.oneErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        _this.duishouIcon = null;
        _this.gameoverBool = false;
        _this.move1Y = 128;
        _this.move2Y = 0;
        return _this;
    }
    sunset.prototype.start = function () {
        var _this = this;
        amuseGameData_1.agData.setGamestop(function () {
            amuseControl_1.amuseControl.amuseSoundTool.pauseAll();
        });
        amuseGameData_1.agData.setGamerecovery(function () {
            amuseControl_1.amuseControl.amuseSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.resetAll();
        amuseControl_1.amuseControl.setsceneNode(this.node);
        amuseControl_1.amuseControl.adapterBg(this.bg);
        amuseControl_1.amuseControl.adapterBg(this.pipeibg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        // this.checkNewHand();
        this.pipeiAnim();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    sunset.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    sunset.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.meinv_Data = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.oneErr = false;
        this.isStop = false;
        this.timer = null;
        this.lovelyIsPrompt = false;
        this.meinvFindNum = 0;
        this.init();
        this.gameoverBool = false;
    };
    sunset.prototype.checkNewHand = function () {
        var _this = this;
        if (amuseGameData_1.agData.userData.isGudie || amuseControl_1.amuseControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    sunset.prototype.pipeiAnim = function () {
        var _this = this;
        this.pipeiNode.active = true;
        var palyer_1 = this.pipeiNode.getChildByName("palyer_1");
        var palyer_2 = this.pipeiNode.getChildByName("palyer_2");
        var iconBox = palyer_2.getChildByName("mask");
        var finishTemp = false;
        var _loop_1 = function (i) {
            var icon = iconBox.children[i];
            var tempNum = amuseControl_1.amuseControl.getRandomInt(1, 19);
            amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(function () {
                if (icon.y == -120) {
                    var randomNum = amuseControl_1.amuseControl.getRandomInt(1, 19);
                    amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (randomNum), icon.getComponent(cc.Sprite));
                    icon.y = 240;
                }
            }).union().repeat(20).delay(0.5).call(function () {
                if (!finishTemp) {
                    cc.log("结束");
                    _this.checkNewHand();
                    for (var i_1 = 0; i_1 < iconBox.children.length; i_1++) {
                        var ele = iconBox.children[i_1];
                        if (ele.y == 0) {
                            _this.duishouIcon = ele.getComponent(cc.Sprite).spriteFrame;
                            cc.find("mask/icon", _this.movePaly2).getComponent(cc.Sprite).spriteFrame = _this.duishouIcon;
                            _this.autoFind();
                        }
                    }
                    _this.pipeiNode.active = false;
                }
                finishTemp = true;
            }).start();
        };
        for (var i = 0; i < iconBox.children.length; i++) {
            _loop_1(i);
        }
    };
    sunset.prototype.autoFind = function () {
        var _this = this;
        var num = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        if (parseInt(num) >= 10)
            return;
        if (this.gameoverBool)
            return;
        var minTime = 3; // 最小时间间隔（秒）
        var maxTime = 5; // 最大时间间隔（秒）
        if (parseInt(num) == 9) {
            minTime = 300;
            maxTime = 300;
        }
        var randomTime = Math.random() * (maxTime - minTime) + minTime; // 生成随机时间间隔
        this.scheduleOnce(function () {
            //执行的逻辑代码
            _this.findNodeNum(_this.movePaly2, true);
            // 执行完逻辑后再次调度下一个随机定时器
            _this.autoFind();
        }, randomTime);
    };
    sunset.prototype.findNodeNum = function (parentNode, bool) {
        var _this = this;
        var finishBox = parentNode.getChildByName("finishBox");
        var num = parentNode.getChildByName("num").getComponent(cc.Label);
        var tmepIndex = 0;
        for (var i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            var item = finishBox.children[i];
            var nofinish = item.getChildByName("nofinish");
            var finish = item.getChildByName("finish");
            if (nofinish.active) {
                nofinish.active = false;
                finish.active = true;
                num.string = tmepIndex + "";
                break;
            }
        }
        if (bool) {
            if (parseInt(num.string) >= 10) {
                this.mask.active = true;
                this.gameoverBool = true;
                this.scheduleOnce(function () {
                    amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                        state: false,
                        img: _this.duishouIcon,
                        meinv_Data: _this.meinv_Data,
                        callback: function () {
                            if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                                amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                                _this.resetAll();
                                _this.init();
                                _this.startDownTime();
                                _this.loadRes();
                            }
                            else {
                                amuseGameData_1.agData.userData.isHall = true;
                                amuseGameData_1.agData.storageData();
                                cc.director.loadScene(amuseControl_1.strong.flower);
                            }
                        }
                    });
                }, 0.5);
            }
        }
        var num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        var num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        if (parseInt(num1) >= parseInt(num2)) {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        }
        else {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        }
    };
    sunset.prototype.init = function () {
        this.levelNum.string = "" + amuseControl_1.amuseControl.imgId;
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            amuseControl_1.amuseControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon1);
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (amuseGameData_1.agData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        this.tishi_qipao.active = false;
        // this.meinvOutTime = this.getDownTime();
        // let time = amuseControl.timeChange(this.meinvOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        for (var i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
        var finishBox1 = this.movePaly1.getChildByName("finishBox");
        for (var i = 0; i < finishBox1.children.length; i++) {
            var item = finishBox1.children[i];
            item.getChildByName("finish").active = false;
        }
        var finishBox2 = this.movePaly2.getChildByName("finishBox");
        for (var i = 0; i < finishBox2.children.length; i++) {
            var item = finishBox2.children[i];
            item.getChildByName("finish").active = false;
        }
    };
    //开启倒计时
    sunset.prototype.startDownTime = function () {
        return;
        if (this.meinvOutTime > 0) {
            var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    sunset.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.meinvOutTime--;
        var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.meinvOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(amuseGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    sunset.prototype.errReduceTime = function () {
        var _this = this;
        var findheart = false;
        for (var i = this.heartBox.children.length - 1; i >= 0; i--) {
            var heartItem_1 = this.heartBox.children[i];
            var emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem_1.active) {
                findheart = true;
                heartItem_1.active = false;
                emptyheartItem.active = true;
                var anim = emptyheartItem.getComponent(sp.Skeleton);
                amuseControl_1.amuseControl.playSp(anim, "posui");
                break;
            }
        }
        return;
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SummerDialog, {
                ADcallback: function () {
                    // this.meinvOutTime = 60;
                    // agData.userData.tishiNum++;
                    amuseGameData_1.agData.storageData();
                    _this.changeQiPaoNum();
                    _this.startDownTime();
                    for (var i = 0; i < _this.heartBox.children.length; i++) {
                        _this.heartBox.children[i].active = true;
                        _this.emptyheartBox.children[i].active = false;
                    }
                },
                restartCallBack: function () {
                    _this.resetAll(true);
                    _this.init();
                    _this.startDownTime();
                    cc.log(_this.meinv_Data, "this.meinv_Data");
                    for (var i = 0; i < _this.meinv_Data.length; i++) {
                        _this.meinv_Data[i].isFind = false;
                    }
                }
            });
        }
        return;
        //时间
        if (!this.oneErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.meinvOutTime -= reduceTime;
        if (this.meinvOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(amuseGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = amuseControl_1.amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    sunset.prototype.changeQiPaoNum = function () {
        if (amuseGameData_1.agData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = amuseGameData_1.agData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    sunset.prototype.loadRes = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + amuseControl_1.amuseControl.imgId, this.originalImg.getComponent(cc.Sprite));
        amuseControl_1.amuseControl.amuseResUtil.loadSprite("fightImg/" + "fight_" + amuseControl_1.amuseControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("meinvImg/moon" + amuseControl_1.amuseControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            amuseControl_1.amuseControl.amuseResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.meinv_Data = jsonData.path;
                for (var i = 0; i < _this.meinv_Data.length; i++) {
                    _this.meinv_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.meinv_Data.length; i++) {
                //     let data = this.meinv_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.meinv_Data.length; i++) {
                //     let data = this.meinv_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    sunset.prototype.yeziLight = function (pos) {
        var _this = this;
        var finishBox = this.movePaly1.getChildByName("finishBox");
        var tmepIndex = 0;
        var targetEle = null;
        for (var i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            var item = finishBox.children[i];
            var nofinish = item.getChildByName("nofinish");
            if (nofinish.active) {
                targetEle = item;
                break;
            }
        }
        if (!cc.isValid(targetEle))
            return;
        var anim = this.yeziBox.children[this.meinvFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = amuseControl_1.amuseControl.changePos(targetEle, tuowei);
        var time = 1;
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.findNodeNum(_this.movePaly1);
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            amuseControl_1.amuseControl.playSp(anim, "2_bianliang");
            amuseControl_1.amuseControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    sunset.prototype.findSignSucc = function (targetPos, agData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.meinvScale + this.meinvY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.meinvScale - this.meinvY;
            }
            var centerPos = cc.v3(targetPos.x * this.meinvScale, imgY);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = agData.blockSize.wid * this.meinvScale;
            gameFind.height = agData.blockSize.hei * this.meinvScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    sunset.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.meinvY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.meinvY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    sunset.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.discover) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.meinvFindNum = this.meinvFindNum + 1;
            this.findSignSucc(cc.v3(data.agData.centerPos.x, data.agData.centerPos.y), data.agData);
            this.yeziLight(clickPos);
            // this.findNodeNum(this.movePaly1);
            if (this.newhandNode && this.meinvFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.meinvFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                amuseGameData_1.agData.userData.isGudie = true;
                amuseGameData_1.agData.storageData();
            }
            this.playCommonSound(amuseGameData_1.sound.correct);
            if (this.meinvFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.wrong) {
            this.playCommonSound(amuseGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(amuseGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    sunset.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var agData = null;
        for (var i = 0; i < this.meinv_Data.length; i++) {
            var data = this.meinv_Data[i];
            var x = data.centerPos.x * this.meinvScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.meinvScale + this.meinvY;
            }
            else {
                y = data.centerPos.y * this.meinvScale - this.meinvY;
            }
            var wid = data.blockSize.wid * this.meinvScale;
            var hei = data.blockSize.hei * this.meinvScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.discover;
                    agData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type: type, agData: agData };
            }
            else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }
        return { type: type, agData: agData };
    };
    sunset.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    sunset.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.gameoverBool = true;
        this.playCommonSound(amuseGameData_1.sound.win);
        if (amuseGameData_1.agData.userData.level + 1 <= amuseGameData_1.agData.levelAll) {
            if (amuseControl_1.amuseControl.imgId == amuseGameData_1.agData.userData.level) {
                amuseGameData_1.agData.userData.level = amuseGameData_1.agData.userData.level + 1;
                amuseGameData_1.agData.storageData();
            }
        }
        this.scheduleOnce(function () {
            amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                state: true,
                img: _this.duishouIcon,
                meinv_Data: _this.meinv_Data,
                callback: function () {
                    if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                        amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                        _this.resetAll();
                        _this.init();
                        _this.startDownTime();
                        _this.loadRes();
                    }
                    else {
                        amuseGameData_1.agData.userData.isHall = true;
                        amuseGameData_1.agData.storageData();
                        cc.director.loadScene(amuseControl_1.strong.flower);
                    }
                }
            });
        }, 1);
        return;
        this.scheduleOnce(function () {
            var _loop_2 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    amuseControl_1.amuseControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(amuseGameData_1.sound.win);
                                if (amuseGameData_1.agData.userData.level + 1 <= amuseGameData_1.agData.levelAll) {
                                    amuseGameData_1.agData.userData.level = amuseGameData_1.agData.userData.level + 1;
                                    amuseGameData_1.agData.storageData();
                                }
                                amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.PurpleDialog, {
                                    img: _this.duishouIcon,
                                    meinv_Data: _this.meinv_Data,
                                    callback: function () {
                                        if (amuseControl_1.amuseControl.imgId + 1 <= amuseGameData_1.agData.levelAll) {
                                            amuseControl_1.amuseControl.imgId = amuseControl_1.amuseControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            amuseGameData_1.agData.userData.isHall = true;
                                            amuseGameData_1.agData.storageData();
                                            cc.director.loadScene(amuseControl_1.strong.flower);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_2(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    sunset.prototype.getDownTime = function () {
        var level = amuseControl_1.amuseControl.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    sunset.prototype.timeOutEvent = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SummerDialog, {
            ADcallback: function () {
                _this.meinvOutTime = 60;
                amuseGameData_1.agData.userData.tishiNum++;
                amuseGameData_1.agData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.meinv_Data, "this.meinv_Data");
                for (var i = 0; i < _this.meinv_Data.length; i++) {
                    _this.meinv_Data[i].isFind = false;
                }
            }
        });
    };
    sunset.prototype.onClick_back = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.RocketDiaolg, { callback: function () { _this.isStop = false; } });
    };
    sunset.prototype.onClick_pause = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl_1.amuseControl.amuseResUtil.showDialog(amuseControl_1.circle.SpiritDialog, {
            isGame: true,
            callback: function () {
                if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
                    _this.soundHallBtn.getChildByName("line").active = true;
                }
                else {
                    _this.soundHallBtn.getChildByName("line").active = false;
                }
                if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
                    _this.musicHallBtn.getChildByName("line").active = true;
                }
                else {
                    _this.musicHallBtn.getChildByName("line").active = false;
                }
                _this.isStop = false;
            }
        });
    };
    sunset.prototype.onClick_tishi = function () {
        var _this = this;
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            amuseControl_1.amuseControl.amuseResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.meinv_Data.length; i++) {
            if (!this.meinv_Data[i].isFind) {
                lvdata = this.meinv_Data[i];
                break;
            }
        }
        if (!amuseGameData_1.agData) {
            return;
        }
        if (amuseGameData_1.agData.userData.tishiNum <= 0) {
            cc.log("看广告");
            amuseGameData_1.agData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        amuseGameData_1.agData.userData.tishiNum = amuseGameData_1.agData.userData.tishiNum - 1;
        amuseGameData_1.agData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    sunset.prototype.showTiShi = function (agData) {
        if (agData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = agData.centerPos.x * this.meinvScale;
                var y = 0;
                if (i == 0) {
                    y = agData.centerPos.y * this.meinvScale + this.meinvY;
                }
                else {
                    y = agData.centerPos.y * this.meinvScale - this.meinvY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }
        }
    };
    sunset.prototype.onClick_musicChange = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchMusic();
        if (!amuseControl_1.amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    };
    sunset.prototype.onClick_soundChange = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl_1.amuseControl.amuseSoundTool.switchEffect();
        if (!amuseControl_1.amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
    };
    sunset.prototype.onClick_exit = function () {
        amuseControl_1.amuseControl.amuseSoundTool.commonBtnClick();
        amuseGameData_1.agData.userData.isHall = true;
        amuseGameData_1.agData.storageData();
        cc.director.loadScene(amuseControl_1.strong.flower);
    };
    //播放音效
    sunset.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = amuseControl_1.amuseControl.amuseSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "pipeibg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], sunset.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], sunset.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "emptyheartBox", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "pipeiNode", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "movePaly1", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "movePaly2", void 0);
    __decorate([
        property(cc.Sprite)
    ], sunset.prototype, "userIcon1", void 0);
    __decorate([
        property(cc.Sprite)
    ], sunset.prototype, "userIcon2", void 0);
    __decorate([
        property(cc.Label)
    ], sunset.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "soundHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], sunset.prototype, "musicHallBtn", void 0);
    sunset = __decorate([
        ccclass
    ], sunset);
    return sunset;
}(cc.Component));
exports.default = sunset;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3Vuc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QyxvREFBOEU7QUFDOUUsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLGlEQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBR0Q7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1NUJDO1FBcDVCRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FB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R0FBRyxDQUFDLENBQUM7YUFDWDtTQUNKO1FBR0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEc7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdGLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hHO0lBQ0wsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsMkJBQVksQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJ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QUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUE5RVosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXU1QjFCO0lBQUQsYUFBQztDQXY1QkQsQUF1NUJDLENBdjVCbUMsRUFBRSxDQUFDLFNBQVMsR0F1NUIvQztrQkF2NUJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld2hhbmQgZnJvbSBcIi4vcHJlZmViL25ld2hhbmRcIjtcbmltcG9ydCB7IGFtdXNlQ29udHJvbCwgY2lyY2xlLCBzdHJvbmcsIG1laW52RGF0YSB9IGZyb20gXCIuL3Rvb2wvYW11c2VDb250cm9sXCI7XG5pbXBvcnQgeyBhZ0RhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9hbXVzZUdhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBHYW1lU3RhdGUge1xuICAgIGRpc2NvdmVyLCAgICAgICAvL+aJvuWIsFxuICAgIHdyb25nLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgcmVwZWF0LCAgICAgLy/mib7liLDph43lpI3nmoQgIFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3Vuc2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBpcGVpYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3JpZ2luYWxJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmluaXNoSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpc2hpX3FpcGFvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWIyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVtcHR5aGVhcnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGlwZWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1vdmVQYWx5MTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtb3ZlUGFseTI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB1c2VySWNvbjE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHVzZXJJY29uMjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc291bmRIYWxsQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljSGFsbEJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBtZWludl9EYXRhOiBtZWludkRhdGFbXSA9IFtdO1xuICAgIG1laW52WTogbnVtYmVyID0gMTc1O1xuICAgIG1laW52U2NhbGU6IG51bWJlciA9IDAuMzcyO1xuXG4gICAgeWV6aUFsbE51bTogbnVtYmVyID0gMTA7XG4gICAgbWVpbnZGaW5kTnVtOiBudW1iZXIgPSAwO1xuICAgIG1laW52T3V0VGltZTogbnVtYmVyID0gMDtcblxuICAgIGxvdmVseUlzUHJvbXB0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0aW1lciA9IG51bGw7XG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XG4gICAgb25lRXJyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBuZXdoYW5kTm9kZTogbmV3aGFuZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGR1aXNob3VJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBtb3ZlMVkgPSAxMjg7XG4gICAgcHJpdmF0ZSBtb3ZlMlkgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGFnRGF0YS5zZXRHYW1lc3RvcCgoKT0+e1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnBhdXNlQWxsKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWdEYXRhLnNldEdhbWVyZWNvdmVyeSgoKT0+e1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLnJlc3VtZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICAgICAgYW11c2VDb250cm9sLmFkYXB0ZXJCZyh0aGlzLnBpcGVpYmcpO1xuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgLy8gdGhpcy5jaGVja05ld0hhbmQoKTtcblxuICAgICAgICB0aGlzLnBpcGVpQW5pbSgpO1xuXG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm1laW52X0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZUVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1laW52RmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKGFnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IGFtdXNlQ29udHJvbC5pbWdJZCAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwaXBlaUFuaW0oKSB7XG4gICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwYWx5ZXJfMSA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzFcIik7XG4gICAgICAgIGxldCBwYWx5ZXJfMiA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzJcIik7XG5cbiAgICAgICAgbGV0IGljb25Cb3ggPSBwYWx5ZXJfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XG4gICAgICAgIGxldCBmaW5pc2hUZW1wID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBpY29uQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHRlbXBOdW0gPSBhbXVzZUNvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDE5KTtcbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwubG9hZFNwcml0ZShcImhlYWQvXCIgKyBcImhhZWRcIiArICh0ZW1wTnVtKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoaWNvbik7XG4gICAgICAgICAgICBjYy50d2VlbihpY29uKS5ieSgwLjE1LCB7IHk6IC0xMjAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGljb24ueSA9PSAtMTIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21OdW0gPSBhbXVzZUNvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDE5KTtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiaGVhZC9cIiArIFwiaGFlZFwiICsgKHJhbmRvbU51bSksIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpY29uLnkgPSAyNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS51bmlvbigpLnJlcGVhdCgyMCkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmlzaFRlbXApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXdIYW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IGljb25Cb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlLnkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVpc2hvdUljb24gPSBlbGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIm1hc2svaWNvblwiLCB0aGlzLm1vdmVQYWx5MikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmR1aXNob3VJY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0ZpbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpcGVpTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluaXNoVGVtcCA9IHRydWU7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXV0b0ZpbmQoKSB7XG4gICAgICAgIGxldCBudW0gPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZ1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtKSA+PSAxMCkgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmdhbWVvdmVyQm9vbCkgcmV0dXJuXG4gICAgICAgIGxldCBtaW5UaW1lID0gMzsgLy8g5pyA5bCP5pe26Ze06Ze06ZqU77yI56eS77yJXG4gICAgICAgIGxldCBtYXhUaW1lID0gNTsgLy8g5pyA5aSn5pe26Ze06Ze06ZqU77yI56eS77yJXG5cbiAgICAgICAgaWYgKHBhcnNlSW50KG51bSkgPT0gOSkge1xuICAgICAgICAgICAgbWluVGltZSA9IDMwMDtcbiAgICAgICAgICAgIG1heFRpbWUgPSAzMDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tVGltZSA9IE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUpICsgbWluVGltZTsgLy8g55Sf5oiQ6ZqP5py65pe26Ze06Ze06ZqUXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy/miafooYznmoTpgLvovpHku6PnoIFcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTIsIHRydWUpO1xuICAgICAgICAgICAgLy8g5omn6KGM5a6M6YC76L6R5ZCO5YaN5qyh6LCD5bqm5LiL5LiA5Liq6ZqP5py65a6a5pe25ZmoXG4gICAgICAgICAgICB0aGlzLmF1dG9GaW5kKCk7XG4gICAgICAgIH0sIHJhbmRvbVRpbWUpO1xuICAgIH1cblxuICAgIGZpbmROb2RlTnVtKHBhcmVudE5vZGU6IGNjLk5vZGUsIGJvb2w/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBmaW5pc2hCb3ggPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpO1xuICAgICAgICBsZXQgbnVtID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsZXQgdG1lcEluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBsZXQgZmluaXNoID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKTtcbiAgICAgICAgICAgIGlmIChub2ZpbmlzaC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBub2ZpbmlzaC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmaW5pc2guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBudW0uc3RyaW5nID0gdG1lcEluZGV4ICsgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJvb2wpe1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KG51bS5zdHJpbmcpID49IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lb3ZlckJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5QdXJwbGVEaWFsb2csIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1laW52X0RhdGE6IHRoaXMubWVpbnZfRGF0YSwvLyBjYy5pbnN0YW50aWF0ZSh0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmltZ0lkID0gYW11c2VDb250cm9sLmltZ0lkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG5cbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLm1vdmVQYWx5MS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubW92ZVBhbHkxKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubW92ZVBhbHkyKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpID49IHBhcnNlSW50KG51bTIpKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5MS54LCB0aGlzLm1vdmUxWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkyKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkyLngsIHRoaXMubW92ZTJZKSB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tb3ZlUGFseTEpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlUGFseTEueCwgdGhpcy5tb3ZlMlkpIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5Mi54LCB0aGlzLm1vdmUxWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gXCJcIiArIGFtdXNlQ29udHJvbC5pbWdJZDtcbiAgICAgICAgaWYgKCFhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wucGxheVNwKGFuaW0sIFwiMV9hbl9zdG9wXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJoZWFkL1wiICsgXCJoYWVkXCIgKyAoYWdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjEpO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJoZWFkL1wiICsgXCJoYWVkXCIgKyAoYWdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGlzaGlfcWlwYW8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubWVpbnZPdXRUaW1lID0gdGhpcy5nZXREb3duVGltZSgpO1xuICAgICAgICAvLyBsZXQgdGltZSA9IGFtdXNlQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMubWVpbnZPdXRUaW1lKTtcbiAgICAgICAgLy8gdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVBbGwuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtcHR5aGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaEJveDEgPSB0aGlzLm1vdmVQYWx5MS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3gxLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveDEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaW5pc2hCb3gyID0gdGhpcy5tb3ZlUGFseTIuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluaXNoQm94Mi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3gyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/lvIDlkK/lgJLorqHml7ZcbiAgICBzdGFydERvd25UaW1lKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMubWVpbnZPdXRUaW1lID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvd25UaW1lRXZlbnQoKSB7XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZWludk91dFRpbWUtLTtcbiAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIGlmICh0aGlzLm1laW52T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ngrnplJnkuoZcbiAgICBlcnJSZWR1Y2VUaW1lKCkge1xuICAgICAgICBsZXQgZmluZGhlYXJ0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBlbXB0eWhlYXJ0SXRlbSA9IHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZmluZGhlYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBoZWFydEl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW1wdHloZWFydEl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGVtcHR5aGVhcnRJdGVtLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcInBvc3VpXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKCFoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlN1bW1lckRpYWxvZywge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5tZWludk91dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLm1laW52X0RhdGEsIFwidGhpcy5tZWludl9EYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIC8v5pe26Ze0XG4gICAgICAgIGlmICghdGhpcy5vbmVFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5tZWludk91dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMubWVpbnZPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBhbXVzZUNvbnRyb2wudGltZUNoYW5nZSh0aGlzLm1laW52T3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUWlQYW9OdW0oKSB7XG4gICAgICAgIGlmIChhZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYWdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUmVzKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLmxvYWRTcHJpdGUoXCJzdW5JbWcvXCIgKyBcInN1bl9cIiArIGFtdXNlQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5sb2FkU3ByaXRlKFwiZmlnaHRJbWcvXCIgKyBcImZpZ2h0X1wiICsgYW11c2VDb250cm9sLmltZ0lkLCB0aGlzLmZpbmlzaEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtZWludkltZy9tb29uXCIgKyBhbXVzZUNvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVJlc1V0aWwuYmluZFJlc0Fzc2V0KHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gcmVzLmpzb247XG4gICAgICAgICAgICBpZiAoanNvbkRhdGEgJiYganNvbkRhdGEucGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVpbnZfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMubWVpbnZfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLm1laW52X0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcblxuICAgICAgICBsZXQgZmluaXNoQm94ID0gdGhpcy5tb3ZlUGFseTEuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0RWxlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBpZiAobm9maW5pc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxlID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0YXJnZXRFbGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5tZWludkZpbmROdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gYW11c2VDb250cm9sLmNoYW5nZVBvcyh0YXJnZXRFbGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAxO1xuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1b3dlaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgYW11c2VDb250cm9sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgYWdEYXRhOiBtZWludkRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIyKTtcblxuICAgICAgICAgICAgbGV0IGltZ1kgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMubWVpbnZTY2FsZSArIHRoaXMubWVpbnZZO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgICAgICBpbWdZID0gdGFyZ2V0UG9zLnkgKiB0aGlzLm1laW52U2NhbGUgLSB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBjYy52Myh0YXJnZXRQb3MueCAqIHRoaXMubWVpbnZTY2FsZSwgaW1nWSk7XG5cbiAgICAgICAgICAgIGdhbWVGaW5kLnNldFBvc2l0aW9uKGNlbnRlclBvcyk7XG5cbiAgICAgICAgICAgIC8vICAgICDmraPmlrnlvaJcbiAgICAgICAgICAgIGdhbWVGaW5kLndpZHRoID0gYWdEYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICBnYW1lRmluZC5oZWlnaHQgPSBhZ0RhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMubWVpbnZTY2FsZTtcblxuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueSA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55IC0gKHRoaXMubWVpbnZZICogMikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55ICsgKHRoaXMubWVpbnZZICogMikpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUuZGlzY292ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvdmVseUlzUHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZWludkZpbmROdW0gPSB0aGlzLm1laW52RmluZE51bSArIDE7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmFnRGF0YS5jZW50ZXJQb3MueCwgZGF0YS5hZ0RhdGEuY2VudGVyUG9zLnkpLCBkYXRhLmFnRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnllemlMaWdodChjbGlja1Bvcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmZpbmROb2RlTnVtKHRoaXMubW92ZVBhbHkxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMubWVpbnZGaW5kTnVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLmhpZGVkb25nMSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMubWVpbnZGaW5kTnVtID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmlzR3VkaWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuY29ycmVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1laW52RmluZE51bSA+PSB0aGlzLnllemlBbGxOdW0pIHsgICAgICAgLy/og5zliKkg5ri45oiP57uT5p2fXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09IEdhbWVTdGF0ZS53cm9uZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5lcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJSZWR1Y2VUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgICAgIHRoaXMub25lRXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1nU2lnbih0YXJnZXRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IHR5cGU6IEdhbWVTdGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBhZ0RhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm1laW52X0RhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm1laW52U2NhbGUgKyB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLm1laW52U2NhbGUgLSB0aGlzLm1laW52WTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHdpZCA9IGRhdGEuYmxvY2tTaXplLndpZCAqIHRoaXMubWVpbnZTY2FsZTtcbiAgICAgICAgICAgIGxldCBoZWkgPSBkYXRhLmJsb2NrU2l6ZS5oZWkgKiB0aGlzLm1laW52U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5kaXNjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYWdEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUucmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGFnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUud3Jvbmc7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgYWdEYXRhIH1cbiAgICB9XG5cblxuICAgIGVyclNpZ25BbmltKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IDE1IH0pLnRvKDAuMDUsIHsgYW5nbGU6IDAgfSkudG8oMC4wNSwgeyBhbmdsZTogLTE1IH0pXG4gICAgICAgICAgICAudG8oMC4wNywgeyBhbmdsZTogMTAgfSkudG8oMC4wNywgeyBhbmdsZTogMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAtMTAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDcgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTcgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDMgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgZ2FtZUVuZCgpIHtcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lb3ZlckJvb2wgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICBpZiAoYWdEYXRhLnVzZXJEYXRhLmxldmVsICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgIGlmIChhbXVzZUNvbnRyb2wuaW1nSWQgPT0gYWdEYXRhLnVzZXJEYXRhLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgYWdEYXRhLnVzZXJEYXRhLmxldmVsID0gYWdEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlB1cnBsZURpYWxvZywge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICBtZWludl9EYXRhOiB0aGlzLm1laW52X0RhdGEsLy8gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtdXNlQ29udHJvbC5pbWdJZCA9IGFtdXNlQ29udHJvbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMueWV6aUJveC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLnBsYXlTcChhbmltLCBcIjRfbWFuXCIsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy55ZXppQm94LmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQud2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnRGF0YS51c2VyRGF0YS5sZXZlbCArIDEgPD0gYWdEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEudXNlckRhdGEubGV2ZWwgPSBhZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5QdXJwbGVEaWFsb2csIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1laW52X0RhdGE6IHRoaXMubWVpbnZfRGF0YSwvLyBjYy5pbnN0YW50aWF0ZSh0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW11c2VDb250cm9sLmltZ0lkICsgMSA8PSBhZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW11c2VDb250cm9sLmltZ0lkID0gYW11c2VDb250cm9sLmltZ0lkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOWAkuiuoeaXtlxuICAgIGdldERvd25UaW1lKCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSBhbXVzZUNvbnRyb2wuaW1nSWQ7XG4gICAgICAgIGxldCB0aW1lID0gMDtcbiAgICAgICAgaWYgKGxldmVsID49IDEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICAgICAgdGltZSA9IDUgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSA2ICYmIGxldmVsIDw9IDEwKSB7XG4gICAgICAgICAgICB0aW1lID0gMyAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDExICYmIGxldmVsIDw9IDE1KSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTYgJiYgbGV2ZWwgPD0gMjApIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMjEgJiYgbGV2ZWwgPD0gMjUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG5cbiAgICAvL+aXtumXtOWIsFxuICAgIHRpbWVPdXRFdmVudCgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlUmVzVXRpbC5zaG93RGlhbG9nKGNpcmNsZS5TdW1tZXJEaWFsb2csIHtcbiAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1laW52T3V0VGltZSA9IDYwO1xuICAgICAgICAgICAgICAgIGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSsrO1xuICAgICAgICAgICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUWlQYW9OdW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMubWVpbnZfRGF0YSwgXCJ0aGlzLm1laW52X0RhdGFcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1laW52X0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWludl9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlJvY2tldERpYW9sZywgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzU3RvcCA9IGZhbHNlIH0gfSk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX3BhdXNlKCkge1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dEaWFsb2coY2lyY2xlLlNwaXJpdERpYWxvZywge1xuICAgICAgICAgICAgaXNHYW1lOiB0cnVlLCBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmVmZmVjdFN3aXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLm11c2ljU3dpdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tfdGlzaGkoKSB7XG5cbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmxvdmVseUlzUHJvbXB0KSB7XG4gICAgICAgICAgICBhbXVzZUNvbnRyb2wuYW11c2VSZXNVdGlsLnNob3dUb2FzdChcIlByb21wdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbHZkYXRhOiBtZWludkRhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVpbnZfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1laW52X0RhdGFbaV0uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbHZkYXRhID0gdGhpcy5tZWludl9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChhZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIGFnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGFnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIGFnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKGFnRGF0YTogbWVpbnZEYXRhKSB7XG4gICAgICAgIGlmIChhZ0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMubG92ZWx5SXNQcm9tcHQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlzaGkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVUaXNoaVByZWZhYik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuYWRkQ2hpbGQodGlzaGkpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHggPSBhZ0RhdGEuY2VudGVyUG9zLnggKiB0aGlzLm1laW52U2NhbGU7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gYWdEYXRhLmNlbnRlclBvcy55ICogdGhpcy5tZWludlNjYWxlICsgdGhpcy5tZWludlk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGFnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubWVpbnZTY2FsZSAtIHRoaXMubWVpbnZZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRpc2hpLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aXNoaSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGlzaGkpLnRvKDAuNSwgeyBzY2FsZTogMC41IH0pLnRvKDAuNSwgeyBzY2FsZTogMC43IH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25DbGlja19tdXNpY0NoYW5nZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5zd2l0Y2hNdXNpYygpO1xuICAgICAgICBpZiAoIWFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5tdXNpY1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgb25DbGlja19zb3VuZENoYW5nZSgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFtdXNlQ29udHJvbC5hbXVzZVNvdW5kVG9vbC5zd2l0Y2hFZmZlY3QoKTtcbiAgICAgICAgaWYgKCFhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIG9uQ2xpY2tfZXhpdCgpIHtcbiAgICAgICAgYW11c2VDb250cm9sLmFtdXNlU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGFnRGF0YS51c2VyRGF0YS5pc0hhbGwgPSB0cnVlO1xuICAgICAgICBhZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHN0cm9uZy5mbG93ZXIpO1xuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBhbXVzZUNvbnRyb2wuYW11c2VTb3VuZFRvb2wucGxheUVmZmVjdCh0aGlzLmF1ZGlvQ2xpcHNbaV0sIGxvb3ApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==