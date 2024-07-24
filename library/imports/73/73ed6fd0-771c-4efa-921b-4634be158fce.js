"use strict";
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