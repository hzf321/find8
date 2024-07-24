
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/flask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'flask');
// script/flask.ts

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
var princessControl_1 = require("./tool/princessControl");
var princessGameData_1 = require("./tool/princessGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var findState;
(function (findState) {
    findState[findState["ZHAODAO"] = 0] = "ZHAODAO";
    findState[findState["MEIZHAODAO"] = 1] = "MEIZHAODAO";
    findState[findState["CHONGFU"] = 2] = "CHONGFU";
})(findState || (findState = {}));
var flask = /** @class */ (function (_super) {
    __extends(flask, _super);
    function flask() {
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
        _this.setContorl = null;
        _this.gameOverAnim = null;
        _this.princess_Data = [];
        _this.princessY = 192;
        _this.princessvScale = 0.4;
        _this.yeziAllNum = 10;
        _this.princessFindNum = 0;
        _this.princessOutTime = 0;
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
    flask.prototype.start = function () {
        var _this = this;
        princessGameData_1.pgData.setGamestop(function () {
            princessControl_1.princessControl.princessSoundTool.pauseAll();
        });
        princessGameData_1.pgData.setGamerecovery(function () {
            princessControl_1.princessControl.princessSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.resetAll();
        princessControl_1.princessControl.setsceneNode(this.node);
        princessControl_1.princessControl.adapterBg(this.bg);
        princessControl_1.princessControl.adapterBg(this.pipeibg);
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
    flask.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    flask.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.princess_Data = [];
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
        this.princessFindNum = 0;
        this.init();
        this.gameoverBool = false;
    };
    flask.prototype.checkNewHand = function () {
        var _this = this;
        if (princessGameData_1.pgData.userData.isGudie || princessControl_1.princessControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            princessControl_1.princessControl.princessResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    flask.prototype.pipeiAnim = function () {
        var _this = this;
        this.pipeiNode.active = true;
        var palyer_1 = this.pipeiNode.getChildByName("palyer_1");
        var palyer_2 = this.pipeiNode.getChildByName("palyer_2");
        var iconBox = palyer_2.getChildByName("mask");
        var finishTemp = false;
        var _loop_1 = function (i) {
            var icon = iconBox.children[i];
            var tempNum = princessControl_1.princessControl.getRandomInt(1, 20);
            princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(function () {
                if (icon.y == -120) {
                    var randomNum = princessControl_1.princessControl.getRandomInt(1, 20);
                    princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (randomNum), icon.getComponent(cc.Sprite));
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
    flask.prototype.autoFind = function () {
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
    flask.prototype.findNodeNum = function (parentNode, bool) {
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
                this.showGameOverAnim(function () {
                    _this.scheduleOnce(function () {
                        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                            state: false,
                            img: _this.duishouIcon,
                            princess_Data: _this.princess_Data,
                            callback: function () {
                                if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                                    princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                                    _this.resetAll();
                                    _this.init();
                                    _this.startDownTime();
                                    _this.loadRes();
                                }
                                else {
                                    princessGameData_1.pgData.userData.isHall = true;
                                    princessGameData_1.pgData.storageData();
                                    cc.director.loadScene(princessControl_1.delay.glass);
                                }
                            }
                        });
                    }, 0.5);
                });
            }
        }
        var num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        var num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        // if (parseInt(num1) >= parseInt(num2)) {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        // } else {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        // }
    };
    flask.prototype.showGameOverAnim = function (call) {
        this.gameOverAnim.active = true;
        var muzhi = this.gameOverAnim.getChildByName("muzhi");
        muzhi.active = false;
        var mask1 = this.gameOverAnim.getChildByName("mask1");
        var mask2 = this.gameOverAnim.getChildByName("mask2");
        cc.Tween.stopAllByTarget(mask2);
        cc.Tween.stopAllByTarget(mask1);
        cc.Tween.stopAllByTarget(muzhi);
        mask1.height = mask2.height = 0;
        cc.tween(mask1).to(1, { height: 336 }).start();
        cc.tween(mask2).to(1, { height: 336 }).call(function () {
            muzhi.scale = 0;
            muzhi.active = true;
            cc.tween(muzhi).to(0.2, { scale: 1.2 }).to(0.1, { scale: 0.9 }).to(0.1, { scale: 1 }).delay(0.5).call(function () {
                call && call();
            }).start();
        }).start();
    };
    flask.prototype.init = function () {
        this.levelNum.string = "" + princessControl_1.princessControl.imgId;
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            princessControl_1.princessControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon1);
        princessControl_1.princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (princessGameData_1.pgData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        // this.tishi_qipao.active = false;
        // this.princessOutTime = this.getDownTime();
        // let time = princessControl.timeChange(this.princessOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        this.gameOverAnim.active = false;
        this.setContorl.getChildByName("img").active = false;
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
    flask.prototype.startDownTime = function () {
        return;
        if (this.princessOutTime > 0) {
            var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    flask.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.princessOutTime--;
        var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.princessOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(princessGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    flask.prototype.errReduceTime = function () {
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
                princessControl_1.princessControl.playSp(anim, "posui");
                break;
            }
        }
        return;
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.SophiaPop, {
                ADcallback: function () {
                    // this.princessOutTime = 60;
                    // pgData.userData.tishiNum++;
                    princessGameData_1.pgData.storageData();
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
                    cc.log(_this.princess_Data, "this.princess_Data");
                    for (var i = 0; i < _this.princess_Data.length; i++) {
                        _this.princess_Data[i].isFind = false;
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
        this.princessOutTime -= reduceTime;
        if (this.princessOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(princessGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = princessControl_1.princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    flask.prototype.changeQiPaoNum = function () {
        if (princessGameData_1.pgData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("numbg").active = true;
            cc.find("numbg/num_label", this.tishi_qipao).getComponent(cc.Label).string = princessGameData_1.pgData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("numbg").active = false;
        }
    };
    flask.prototype.loadRes = function () {
        var _this = this;
        princessControl_1.princessControl.princessResUtil.loadSprite("openImg/" + "open_" + princessControl_1.princessControl.imgId, this.originalImg.getComponent(cc.Sprite));
        princessControl_1.princessControl.princessResUtil.loadSprite("strongImg/" + "strong_" + princessControl_1.princessControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("familyData/family" + princessControl_1.princessControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            princessControl_1.princessControl.princessResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.princess_Data = jsonData.path;
                for (var i = 0; i < _this.princess_Data.length; i++) {
                    _this.princess_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.princess_Data.length; i++) {
                //     let data = this.princess_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.princess_Data.length; i++) {
                //     let data = this.princess_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    flask.prototype.yeziLight = function (pos) {
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
        var anim = this.yeziBox.children[this.princessFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = princessControl_1.princessControl.changePos(targetEle, tuowei);
        var time = 1;
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.findNodeNum(_this.movePaly1);
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            princessControl_1.princessControl.playSp(anim, "2_bianliang");
            princessControl_1.princessControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    flask.prototype.findSignSucc = function (targetPos, pgData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.princessvScale + this.princessY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.princessvScale - this.princessY;
            }
            var centerPos = cc.v3(targetPos.x * this.princessvScale, imgY);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = pgData.blockSize.wid * this.princessvScale;
            gameFind.height = pgData.blockSize.hei * this.princessvScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.3 }).to(0.1, { scale: 1.1 }).start();
        }
    };
    flask.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.princessY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.princessY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    flask.prototype.imgEvent = function (event) {
        var minY = 136;
        var setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        }
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == findState.ZHAODAO) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.princessFindNum = this.princessFindNum + 1;
            this.findSignSucc(cc.v3(data.pgData.centerPos.x, data.pgData.centerPos.y), data.pgData);
            this.yeziLight(clickPos);
            // this.findNodeNum(this.movePaly1);
            if (this.newhandNode && this.princessFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.princessFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                princessGameData_1.pgData.userData.isGudie = true;
                princessGameData_1.pgData.storageData();
            }
            this.playCommonSound(princessGameData_1.sound.correct);
            if (this.princessFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == findState.MEIZHAODAO) {
            this.playCommonSound(princessGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(princessGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    flask.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var pgData = null;
        for (var i = 0; i < this.princess_Data.length; i++) {
            var data = this.princess_Data[i];
            var x = data.centerPos.x * this.princessvScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.princessvScale + this.princessY;
            }
            else {
                y = data.centerPos.y * this.princessvScale - this.princessY;
            }
            var wid = data.blockSize.wid * this.princessvScale;
            var hei = data.blockSize.hei * this.princessvScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = findState.ZHAODAO;
                    pgData = data;
                    data.isFind = true;
                }
                else {
                    type = findState.CHONGFU;
                    cc.log("找到重复的了");
                }
                return { type: type, pgData: pgData };
            }
            else {
                type = findState.MEIZHAODAO;
                cc.log("没找到");
            }
        }
        return { type: type, pgData: pgData };
    };
    flask.prototype.errSignAnim = function (node) {
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
    flask.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.gameoverBool = true;
        this.playCommonSound(princessGameData_1.sound.win);
        if (princessGameData_1.pgData.userData.level + 1 <= princessGameData_1.pgData.levelAll) {
            if (princessControl_1.princessControl.imgId == princessGameData_1.pgData.userData.level) {
                princessGameData_1.pgData.userData.level = princessGameData_1.pgData.userData.level + 1;
                princessGameData_1.pgData.storageData();
            }
        }
        this.showGameOverAnim(function () {
            _this.scheduleOnce(function () {
                princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                    state: true,
                    img: _this.duishouIcon,
                    princess_Data: _this.princess_Data,
                    callback: function () {
                        if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                            princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                            _this.resetAll();
                            _this.init();
                            _this.startDownTime();
                            _this.loadRes();
                        }
                        else {
                            princessGameData_1.pgData.userData.isHall = true;
                            princessGameData_1.pgData.storageData();
                            cc.director.loadScene(princessControl_1.delay.glass);
                        }
                    }
                });
            }, 1);
        });
        return;
        this.scheduleOnce(function () {
            var _loop_2 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    princessControl_1.princessControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(princessGameData_1.sound.win);
                                if (princessGameData_1.pgData.userData.level + 1 <= princessGameData_1.pgData.levelAll) {
                                    princessGameData_1.pgData.userData.level = princessGameData_1.pgData.userData.level + 1;
                                    princessGameData_1.pgData.storageData();
                                }
                                princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.EmilyPop, {
                                    img: _this.duishouIcon,
                                    princess_Data: _this.princess_Data,
                                    callback: function () {
                                        if (princessControl_1.princessControl.imgId + 1 <= princessGameData_1.pgData.levelAll) {
                                            princessControl_1.princessControl.imgId = princessControl_1.princessControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            princessGameData_1.pgData.userData.isHall = true;
                                            princessGameData_1.pgData.storageData();
                                            cc.director.loadScene(princessControl_1.delay.glass);
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
    flask.prototype.getDownTime = function () {
        var level = princessControl_1.princessControl.imgId;
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
    flask.prototype.timeOutEvent = function () {
        var _this = this;
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.SophiaPop, {
            ADcallback: function () {
                _this.princessOutTime = 60;
                princessGameData_1.pgData.userData.tishiNum++;
                princessGameData_1.pgData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.princess_Data, "this.princess_Data");
                for (var i = 0; i < _this.princess_Data.length; i++) {
                    _this.princess_Data[i].isFind = false;
                }
            }
        });
    };
    flask.prototype.onClick_back = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;
        princessControl_1.princessControl.princessResUtil.showDialog(princessControl_1.dell.AvaPop, { callback: function () { _this.isStop = false; } });
    };
    flask.prototype.onClick_pause = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;
        var maxY = 510;
        var minY = 136;
        var setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        }
        else {
            setimg.active = true;
            cc.tween(this.setContorl).to(0.5, { height: maxY }).start();
        }
        // princessControl.princessResUtil.showDialog(circle.SpiritDialog, {
        //     isGame: true, callback: () => {
        //         if (!princessControl.princessSoundTool.effectSwitch) {
        //             this.soundHallBtn.getChildByName("line").active = true;
        //         } else {
        //             this.soundHallBtn.getChildByName("line").active = false;
        //         }
        //         if (!princessControl.princessSoundTool.musicSwitch) {
        //             this.musicHallBtn.getChildByName("line").active = true;
        //         } else {
        //             this.musicHallBtn.getChildByName("line").active = false;
        //         }
        //         this.isStop = false
        //     }
        // });
    };
    flask.prototype.onClick_tishi = function () {
        var _this = this;
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            princessControl_1.princessControl.princessResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.princess_Data.length; i++) {
            if (!this.princess_Data[i].isFind) {
                lvdata = this.princess_Data[i];
                break;
            }
        }
        if (!princessGameData_1.pgData) {
            return;
        }
        if (princessGameData_1.pgData.userData.tishiNum <= 0) {
            cc.log("看广告");
            princessGameData_1.pgData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        princessGameData_1.pgData.userData.tishiNum = princessGameData_1.pgData.userData.tishiNum - 1;
        princessGameData_1.pgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    flask.prototype.showTiShi = function (pgData) {
        if (pgData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = pgData.centerPos.x * this.princessvScale;
                var y = 0;
                if (i == 0) {
                    y = pgData.centerPos.y * this.princessvScale + this.princessY;
                }
                else {
                    y = pgData.centerPos.y * this.princessvScale - this.princessY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }
        }
    };
    flask.prototype.onClick_musicChange = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchMusic();
        if (!princessControl_1.princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        }
        else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    };
    flask.prototype.onClick_soundChange = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessControl_1.princessControl.princessSoundTool.switchEffect();
        if (!princessControl_1.princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        }
        else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
    };
    flask.prototype.onClick_exit = function () {
        princessControl_1.princessControl.princessSoundTool.commonBtnClick();
        princessGameData_1.pgData.userData.isHall = true;
        princessGameData_1.pgData.storageData();
        cc.director.loadScene(princessControl_1.delay.glass);
    };
    //播放音效
    flask.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = princessControl_1.princessControl.princessSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], flask.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "pipeibg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], flask.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], flask.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "emptyheartBox", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "pipeiNode", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "movePaly1", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "movePaly2", void 0);
    __decorate([
        property(cc.Sprite)
    ], flask.prototype, "userIcon1", void 0);
    __decorate([
        property(cc.Sprite)
    ], flask.prototype, "userIcon2", void 0);
    __decorate([
        property(cc.Label)
    ], flask.prototype, "levelNum", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "soundHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "musicHallBtn", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "setContorl", void 0);
    __decorate([
        property(cc.Node)
    ], flask.prototype, "gameOverAnim", void 0);
    flask = __decorate([
        ccclass
    ], flask);
    return flask;
}(cc.Component));
exports.default = flask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZmxhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLDBEQUFxRjtBQUNyRiw0REFBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsK0NBQU8sQ0FBQTtJQUNQLHFEQUFVLENBQUE7SUFDViwrQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFHRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWc5QkM7UUE3OEJHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFH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OytDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNXO0lBcEZaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FnOUJ6QjtJQUFELFlBQUM7Q0FoOUJELEFBZzlCQyxDQWg5QmtDLEVBQUUsQ0FBQyxTQUFTLEdBZzlCOUM7a0JBaDlCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdoYW5kIGZyb20gXCIuL3ByZWZlYi9uZXdoYW5kXCI7XG5pbXBvcnQgeyBwcmluY2Vzc0NvbnRyb2wsIGRlbGwsIGRlbGF5LCBwcmluY2Vzc19EYXRhIH0gZnJvbSBcIi4vdG9vbC9wcmluY2Vzc0NvbnRyb2xcIjtcbmltcG9ydCB7IHBnRGF0YSwgc291bmQgfSBmcm9tIFwiLi90b29sL3ByaW5jZXNzR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIGZpbmRTdGF0ZSB7XG4gICAgWkhBT0RBTywgICAgICAgLy/mib7liLBcbiAgICBNRUlaSEFPREFPLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgQ0hPTkdGVSwgICAgIC8v5om+5Yiw6YeN5aSN55qEICBcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZsYXNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBpcGVpYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3JpZ2luYWxJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmluaXNoSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpc2hpX3FpcGFvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWIyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVyclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZVRpc2hpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lX3R1b3dlaTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltZ1NpZ25Cb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgeWV6aUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWVBbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVkdWNlVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVtcHR5aGVhcnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGlwZWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1vdmVQYWx5MTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtb3ZlUGFseTI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB1c2VySWNvbjE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHVzZXJJY29uMjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc291bmRIYWxsQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljSGFsbEJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXRDb250b3JsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVPdmVyQW5pbTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHByaW5jZXNzX0RhdGE6IHByaW5jZXNzX0RhdGFbXSA9IFtdO1xuICAgIHByaW5jZXNzWTogbnVtYmVyID0gMTkyO1xuICAgIHByaW5jZXNzdlNjYWxlOiBudW1iZXIgPSAwLjQ7XG5cbiAgICB5ZXppQWxsTnVtOiBudW1iZXIgPSAxMDtcbiAgICBwcmluY2Vzc0ZpbmROdW06IG51bWJlciA9IDA7XG4gICAgcHJpbmNlc3NPdXRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgbG92ZWx5SXNQcm9tcHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbmVFcnI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIG5ld2hhbmROb2RlOiBuZXdoYW5kID0gbnVsbDtcblxuICAgIHByaXZhdGUgZHVpc2hvdUljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FtZW92ZXJCb29sID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIG1vdmUxWSA9IDEyODtcbiAgICBwcml2YXRlIG1vdmUyWSA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgcGdEYXRhLnNldEdhbWVzdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5wYXVzZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBnRGF0YS5zZXRHYW1lcmVjb3ZlcnkoKCkgPT4ge1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLnJlc3VtZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmJnKTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkYXB0ZXJCZyh0aGlzLnBpcGVpYmcpO1xuICAgICAgICB0aGlzLm9uRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgLy8gdGhpcy5jaGVja05ld0hhbmQoKTtcblxuICAgICAgICB0aGlzLnBpcGVpQW5pbSgpO1xuXG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByaW5jZXNzX0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZUVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaW5jZXNzRmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKHBnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IHByaW5jZXNzQ29udHJvbC5pbWdJZCAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwaXBlaUFuaW0oKSB7XG4gICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwYWx5ZXJfMSA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzFcIik7XG4gICAgICAgIGxldCBwYWx5ZXJfMiA9IHRoaXMucGlwZWlOb2RlLmdldENoaWxkQnlOYW1lKFwicGFseWVyXzJcIik7XG5cbiAgICAgICAgbGV0IGljb25Cb3ggPSBwYWx5ZXJfMi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XG4gICAgICAgIGxldCBmaW5pc2hUZW1wID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbkJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBpY29uQm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHRlbXBOdW0gPSBwcmluY2Vzc0NvbnRyb2wuZ2V0UmFuZG9tSW50KDEsIDIwKTtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAodGVtcE51bSksIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGljb24pO1xuICAgICAgICAgICAgY2MudHdlZW4oaWNvbikuYnkoMC4xNSwgeyB5OiAtMTIwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpY29uLnkgPT0gLTEyMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tTnVtID0gcHJpbmNlc3NDb250cm9sLmdldFJhbmRvbUludCgxLCAyMCk7XG4gICAgICAgICAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocmFuZG9tTnVtKSwgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIGljb24ueSA9IDI0MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnVuaW9uKCkucmVwZWF0KDIwKS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZmluaXNoVGVtcCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLnu5PmnZ9cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja05ld0hhbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlID0gaWNvbkJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGUueSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kdWlzaG91SWNvbiA9IGVsZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwibWFzay9pY29uXCIsIHRoaXMubW92ZVBhbHkyKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZHVpc2hvdUljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvRmluZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlwZWlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5pc2hUZW1wID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRvRmluZCgpIHtcbiAgICAgICAgbGV0IG51bSA9IHRoaXMubW92ZVBhbHkyLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nXG4gICAgICAgIGlmIChwYXJzZUludChudW0pID49IDEwKSByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZW92ZXJCb29sKSByZXR1cm5cbiAgICAgICAgbGV0IG1pblRpbWUgPSAzOyAvLyDmnIDlsI/ml7bpl7Tpl7TpmpTvvIjnp5LvvIlcbiAgICAgICAgbGV0IG1heFRpbWUgPSA1OyAvLyDmnIDlpKfml7bpl7Tpl7TpmpTvvIjnp5LvvIlcblxuICAgICAgICBpZiAocGFyc2VJbnQobnVtKSA9PSA5KSB7XG4gICAgICAgICAgICBtaW5UaW1lID0gMzAwO1xuICAgICAgICAgICAgbWF4VGltZSA9IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21UaW1lID0gTWF0aC5yYW5kb20oKSAqIChtYXhUaW1lIC0gbWluVGltZSkgKyBtaW5UaW1lOyAvLyDnlJ/miJDpmo/mnLrml7bpl7Tpl7TpmpRcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvL+aJp+ihjOeahOmAu+i+keS7o+eggVxuICAgICAgICAgICAgdGhpcy5maW5kTm9kZU51bSh0aGlzLm1vdmVQYWx5MiwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyDmiafooYzlrozpgLvovpHlkI7lho3mrKHosIPluqbkuIvkuIDkuKrpmo/mnLrlrprml7blmahcbiAgICAgICAgICAgIHRoaXMuYXV0b0ZpbmQoKTtcbiAgICAgICAgfSwgcmFuZG9tVGltZSk7XG4gICAgfVxuXG4gICAgZmluZE5vZGVOdW0ocGFyZW50Tm9kZTogY2MuTm9kZSwgYm9vbD86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGZpbmlzaEJveCA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCBudW0gPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmlzaEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1lcEluZGV4Kys7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBub2ZpbmlzaCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJub2ZpbmlzaFwiKTtcbiAgICAgICAgICAgIGxldCBmaW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpO1xuICAgICAgICAgICAgaWYgKG5vZmluaXNoLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG5vZmluaXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpbmlzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG51bS5zdHJpbmcgPSB0bWVwSW5kZXggKyBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChudW0uc3RyaW5nKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXJCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lT3ZlckFuaW0oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dEaWFsb2coZGVsbC5FbWlseVBvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IHRoaXMuZHVpc2hvdUljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaW5jZXNzQ29udHJvbC5pbWdJZCArIDEgPD0gcGdEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbnVtMSA9IHRoaXMubW92ZVBhbHkxLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMubW92ZVBhbHkyLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5tb3ZlUGFseTIpO1xuICAgICAgICAvLyBpZiAocGFyc2VJbnQobnVtMSkgPj0gcGFyc2VJbnQobnVtMikpIHtcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkxKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkxLngsIHRoaXMubW92ZTFZKSB9KS5zdGFydCgpO1xuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tb3ZlUGFseTIpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlUGFseTIueCwgdGhpcy5tb3ZlMlkpIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1vdmVQYWx5MSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVQYWx5MS54LCB0aGlzLm1vdmUyWSkgfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubW92ZVBhbHkyKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMubW92ZVBhbHkyLngsIHRoaXMubW92ZTFZKSB9KS5zdGFydCgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc2hvd0dhbWVPdmVyQW5pbShjYWxsOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmdhbWVPdmVyQW5pbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbXV6aGkgPSB0aGlzLmdhbWVPdmVyQW5pbS5nZXRDaGlsZEJ5TmFtZShcIm11emhpXCIpO1xuICAgICAgICBtdXpoaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1hc2sxID0gdGhpcy5nYW1lT3ZlckFuaW0uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrMVwiKTtcbiAgICAgICAgbGV0IG1hc2syID0gdGhpcy5nYW1lT3ZlckFuaW0uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrMlwiKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG1hc2syKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG1hc2sxKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG11emhpKTtcbiAgICAgICAgbWFzazEuaGVpZ2h0ID0gbWFzazIuaGVpZ2h0ID0gMDtcblxuICAgICAgICBjYy50d2VlbihtYXNrMSkudG8oMSwgeyBoZWlnaHQ6IDMzNiB9KS5zdGFydCgpO1xuICAgICAgICBjYy50d2VlbihtYXNrMikudG8oMSwgeyBoZWlnaHQ6IDMzNiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIG11emhpLnNjYWxlID0gMDtcbiAgICAgICAgICAgIG11emhpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy50d2VlbihtdXpoaSkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xLCB7IHNjYWxlOiAwLjkgfSkudG8oMC4xLCB7IHNjYWxlOiAxIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbCAmJiBjYWxsKCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbE51bS5zdHJpbmcgPSBcIlwiICsgcHJpbmNlc3NDb250cm9sLmltZ0lkO1xuICAgICAgICBpZiAoIXByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEhhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLm11c2ljU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wbGF5U3AoYW5pbSwgXCIxX2FuX3N0b3BcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwubG9hZFNwcml0ZShcIm1laW1laS9cIiArIFwibWVpbWVpXCIgKyAocGdEYXRhLnVzZXJEYXRhLmF2YXRhcklkKSwgdGhpcy51c2VySWNvbjEpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLmxvYWRTcHJpdGUoXCJtZWltZWkvXCIgKyBcIm1laW1laVwiICsgKHBnRGF0YS51c2VyRGF0YS5hdmF0YXJJZCksIHRoaXMudXNlckljb24yKTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnRpc2hpX3FpcGFvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnByaW5jZXNzT3V0VGltZSA9IHRoaXMuZ2V0RG93blRpbWUoKTtcbiAgICAgICAgLy8gbGV0IHRpbWUgPSBwcmluY2Vzc0NvbnRyb2wudGltZUNoYW5nZSh0aGlzLnByaW5jZXNzT3V0VGltZSk7XG4gICAgICAgIC8vIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRDb250b3JsLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmluaXNoQm94MSA9IHRoaXMubW92ZVBhbHkxLmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmlzaEJveDEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmluaXNoQm94MS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaEJveDIgPSB0aGlzLm1vdmVQYWx5Mi5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3gyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZpbmlzaEJveDIuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+W8gOWQr+WAkuiuoeaXtlxuICAgIHN0YXJ0RG93blRpbWUoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc091dFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IHByaW5jZXNzQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMucHJpbmNlc3NPdXRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93blRpbWVFdmVudCgpIHtcblxuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW5jZXNzT3V0VGltZS0tO1xuICAgICAgICBsZXQgdGltZSA9IHByaW5jZXNzQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMucHJpbmNlc3NPdXRUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+eCuemUmeS6hlxuICAgIGVyclJlZHVjZVRpbWUoKSB7XG4gICAgICAgIGxldCBmaW5kaGVhcnQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBoZWFydEl0ZW0gPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGVtcHR5aGVhcnRJdGVtID0gdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGhlYXJ0SXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmaW5kaGVhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhlYXJ0SXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbXB0eWhlYXJ0SXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gZW1wdHloZWFydEl0ZW0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucGxheVNwKGFuaW0sIFwicG9zdWlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGxldCBoZWFydEl0ZW0gPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoIWhlYXJ0SXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd0RpYWxvZyhkZWxsLlNvcGhpYVBvcCwge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcmluY2Vzc091dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLnByaW5jZXNzX0RhdGEsIFwidGhpcy5wcmluY2Vzc19EYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc19EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIC8v5pe26Ze0XG4gICAgICAgIGlmICghdGhpcy5vbmVFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5wcmluY2Vzc091dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NPdXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmZhaWwpO1xuICAgICAgICAgICAgY2MubG9nKFwi5pe26Ze05Yiw5LqGXCIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBwcmluY2Vzc0NvbnRyb2wudGltZUNoYW5nZSh0aGlzLnByaW5jZXNzT3V0VGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUWlQYW9OdW0oKSB7XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwiYWRfbGFiZWxcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtYmdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJudW1iZy9udW1fbGFiZWxcIiwgdGhpcy50aXNoaV9xaXBhbykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlcygpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5sb2FkU3ByaXRlKFwib3BlbkltZy9cIiArIFwib3Blbl9cIiArIHByaW5jZXNzQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5sb2FkU3ByaXRlKFwic3Ryb25nSW1nL1wiICsgXCJzdHJvbmdfXCIgKyBwcmluY2Vzc0NvbnRyb2wuaW1nSWQsIHRoaXMuZmluaXNoSW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcblxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcImZhbWlseURhdGEvZmFtaWx5XCIgKyBwcmluY2Vzc0NvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuYmluZFJlc0Fzc2V0KHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gcmVzLmpzb247XG4gICAgICAgICAgICBpZiAoanNvbkRhdGEgJiYganNvbkRhdGEucGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc19EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMucHJpbmNlc3NfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLnByaW5jZXNzX0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcblxuICAgICAgICBsZXQgZmluaXNoQm94ID0gdGhpcy5tb3ZlUGFseTEuZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIik7XG4gICAgICAgIGxldCB0bWVwSW5kZXggPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0RWxlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5pc2hCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtZXBJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmaW5pc2hCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbm9maW5pc2ggPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9maW5pc2hcIik7XG4gICAgICAgICAgICBpZiAobm9maW5pc2guYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxlID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0YXJnZXRFbGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5wcmluY2Vzc0ZpbmROdW0gLSAxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGxldCB0dW93ZWkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVfdHVvd2VpKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5hZGRDaGlsZCh0dW93ZWkpO1xuICAgICAgICB0dW93ZWkuc2V0UG9zaXRpb24ocG9zKTtcblxuICAgICAgICBsZXQgY2hhbmdlUG9zID0gcHJpbmNlc3NDb250cm9sLmNoYW5nZVBvcyh0YXJnZXRFbGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAxO1xuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1b3dlaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgcGdEYXRhOiBwcmluY2Vzc19EYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2FtZUZpbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVGaW5kUHJlZmFiMik7XG5cbiAgICAgICAgICAgIGxldCBpbWdZID0gMDtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBpbWdZID0gdGFyZ2V0UG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlICsgdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwib3JpZ0JveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpLmFkZENoaWxkKGdhbWVGaW5kKVxuICAgICAgICAgICAgICAgIGltZ1kgPSB0YXJnZXRQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgLSB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBjYy52Myh0YXJnZXRQb3MueCAqIHRoaXMucHJpbmNlc3N2U2NhbGUsIGltZ1kpO1xuXG4gICAgICAgICAgICBnYW1lRmluZC5zZXRQb3NpdGlvbihjZW50ZXJQb3MpO1xuXG4gICAgICAgICAgICAvLyAgICAg5q2j5pa55b2iXG4gICAgICAgICAgICBnYW1lRmluZC53aWR0aCA9IHBnRGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgIGdhbWVGaW5kLmhlaWdodCA9IHBnRGF0YS5ibG9ja1NpemUuaGVpICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcblxuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuMyB9KS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueSA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55IC0gKHRoaXMucHJpbmNlc3NZICogMikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54LCBjbGlja1Bvcy55ICsgKHRoaXMucHJpbmNlc3NZICogMikpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG5cbiAgICAgICAgbGV0IG1pblkgPSAxMzY7XG4gICAgICAgIGxldCBzZXRpbWcgPSB0aGlzLnNldENvbnRvcmwuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNldENvbnRvcmwpO1xuICAgICAgICBpZiAoc2V0aW1nLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2V0aW1nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zZXRDb250b3JsKS50bygwLjUsIHsgaGVpZ2h0OiBtaW5ZIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBmaW5kU3RhdGUuWkhBT0RBTykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByaW5jZXNzRmluZE51bSA9IHRoaXMucHJpbmNlc3NGaW5kTnVtICsgMTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEucGdEYXRhLmNlbnRlclBvcy54LCBkYXRhLnBnRGF0YS5jZW50ZXJQb3MueSksIGRhdGEucGdEYXRhKTtcbiAgICAgICAgICAgIHRoaXMueWV6aUxpZ2h0KGNsaWNrUG9zKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZmluZE5vZGVOdW0odGhpcy5tb3ZlUGFseTEpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5wcmluY2Vzc0ZpbmROdW0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuaGlkZWRvbmcxKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5wcmluY2Vzc0ZpbmROdW0gPT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEuaXNHdWRpZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5jb3JyZWN0KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NGaW5kTnVtID49IHRoaXMueWV6aUFsbE51bSkgeyAgICAgICAvL+iDnOWIqSDmuLjmiI/nu5PmnZ9cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gZmluZFN0YXRlLk1FSVpIQU9EQU8pIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5vbmVFcnIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBmaW5kU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgcGdEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaW5jZXNzX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmluY2Vzc19EYXRhW2ldO1xuICAgICAgICAgICAgbGV0IHggPSBkYXRhLmNlbnRlclBvcy54ICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGlmICh0YXJnZXRQb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gZGF0YS5jZW50ZXJQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgKyB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlIC0gdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aWQgPSBkYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLnByaW5jZXNzdlNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMucHJpbmNlc3N2U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRTdGF0ZS5aSEFPREFPO1xuICAgICAgICAgICAgICAgICAgICBwZ0RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRTdGF0ZS5DSE9OR0ZVO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIHBnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kU3RhdGUuTUVJWkhBT0RBTztcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmsqHmib7liLBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB0eXBlLCBwZ0RhdGEgfVxuICAgIH1cblxuXG4gICAgZXJyU2lnbkFuaW0obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBhbmdsZTogMTUgfSkudG8oMC4wNSwgeyBhbmdsZTogMCB9KS50bygwLjA1LCB7IGFuZ2xlOiAtMTUgfSlcbiAgICAgICAgICAgIC50bygwLjA3LCB7IGFuZ2xlOiAxMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IC0xMCB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogNyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSkudG8oMC4xLCB7IGFuZ2xlOiAtNyB9KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMyB9KS50bygwLjEsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBnYW1lRW5kKCkge1xuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIik7XG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWVvdmVyQm9vbCA9IHRydWU7XG4gICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLndpbik7XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IHBnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgaWYgKHByaW5jZXNzQ29udHJvbC5pbWdJZCA9PSBwZ0RhdGEudXNlckRhdGEubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEubGV2ZWwgPSBwZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyQW5pbSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuRW1pbHlQb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5kdWlzaG91SWNvbixcbiAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpbmNlc3NDb250cm9sLmltZ0lkICsgMSA8PSBwZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGRlbGF5LmdsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucGxheVNwKGFuaW0sIFwiNF9tYW5cIiwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGdEYXRhLnVzZXJEYXRhLmxldmVsICsgMSA8PSBwZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBnRGF0YS51c2VyRGF0YS5sZXZlbCA9IHBnRGF0YS51c2VyRGF0YS5sZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NSZXNVdGlsLnNob3dEaWFsb2coZGVsbC5FbWlseVBvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiB0aGlzLmR1aXNob3VJY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNlc3NfRGF0YTogdGhpcy5wcmluY2Vzc19EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxIDw9IHBnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZGVsYXkuZ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOWAkuiuoeaXtlxuICAgIGdldERvd25UaW1lKCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSBwcmluY2Vzc0NvbnRyb2wuaW1nSWQ7XG4gICAgICAgIGxldCB0aW1lID0gMDtcbiAgICAgICAgaWYgKGxldmVsID49IDEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICAgICAgdGltZSA9IDUgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSA2ICYmIGxldmVsIDw9IDEwKSB7XG4gICAgICAgICAgICB0aW1lID0gMyAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDExICYmIGxldmVsIDw9IDE1KSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTYgJiYgbGV2ZWwgPD0gMjApIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMjEgJiYgbGV2ZWwgPD0gMjUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUgPSAxICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG5cbiAgICAvL+aXtumXtOWIsFxuICAgIHRpbWVPdXRFdmVudCgpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuU29waGlhUG9wLCB7XG4gICAgICAgICAgICBBRGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmluY2Vzc091dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0rKztcbiAgICAgICAgICAgICAgICBwZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLnByaW5jZXNzX0RhdGEsIFwidGhpcy5wcmluY2Vzc19EYXRhXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcmluY2Vzc19EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NfRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFjaygpIHtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgcHJpbmNlc3NDb250cm9sLnByaW5jZXNzUmVzVXRpbC5zaG93RGlhbG9nKGRlbGwuQXZhUG9wLCB7IGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNTdG9wID0gZmFsc2UgfSB9KTtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfcGF1c2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgICAgICAgbGV0IG1heFkgPSA1MTA7XG4gICAgICAgIGxldCBtaW5ZID0gMTM2O1xuICAgICAgICBsZXQgc2V0aW1nID0gdGhpcy5zZXRDb250b3JsLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zZXRDb250b3JsKTtcbiAgICAgICAgaWYgKHNldGltZy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNldGltZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2V0Q29udG9ybCkudG8oMC41LCB7IGhlaWdodDogbWluWSB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0aW1nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNldENvbnRvcmwpLnRvKDAuNSwgeyBoZWlnaHQ6IG1heFkgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd0RpYWxvZyhjaXJjbGUuU3Bpcml0RGlhbG9nLCB7XG4gICAgICAgIC8vICAgICBpc0dhbWU6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc291bmRIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG4gICAgb25DbGlja190aXNoaSgpIHtcblxuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1Jlc1V0aWwuc2hvd1RvYXN0KFwiUHJvbXB0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsdmRhdGE6IHByaW5jZXNzX0RhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbmNlc3NfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByaW5jZXNzX0RhdGFbaV0uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbHZkYXRhID0gdGhpcy5wcmluY2Vzc19EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChwZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIHBnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IHBnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIHBnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKHBnRGF0YTogcHJpbmNlc3NfRGF0YSkge1xuICAgICAgICBpZiAocGdEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpc2hpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lVGlzaGlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmFkZENoaWxkKHRpc2hpKTtcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gcGdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5wcmluY2Vzc3ZTY2FsZTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IDBcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwZ0RhdGEuY2VudGVyUG9zLnkgKiB0aGlzLnByaW5jZXNzdlNjYWxlICsgdGhpcy5wcmluY2Vzc1k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMucHJpbmNlc3N2U2NhbGUgLSB0aGlzLnByaW5jZXNzWTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aXNoaS5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGlzaGkpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRpc2hpKS50bygwLjUsIHsgc2NhbGU6IDAuNSB9KS50bygwLjUsIHsgc2NhbGU6IDAuNyB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfbXVzaWNDaGFuZ2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuc3dpdGNoTXVzaWMoKTtcbiAgICAgICAgaWYgKCFwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNIYWxsQnRuLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0hhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIG9uQ2xpY2tfc291bmRDaGFuZ2UoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwcmluY2Vzc0NvbnRyb2wucHJpbmNlc3NTb3VuZFRvb2wuc3dpdGNoRWZmZWN0KCk7XG4gICAgICAgIGlmICghcHJpbmNlc3NDb250cm9sLnByaW5jZXNzU291bmRUb29sLmVmZmVjdFN3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEhhbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kSGFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBvbkNsaWNrX2V4aXQoKSB7XG4gICAgICAgIHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBwZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgcGdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShkZWxheS5nbGFzcyk7XG4gICAgfVxuXG5cbiAgICAvL+aSreaUvumfs+aViFxuICAgIHBsYXlDb21tb25Tb3VuZChhdWRpb05hbWU6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvQ2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvQ2xpcHNbaV0ubmFtZSA9PSBhdWRpb05hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRCA9IHByaW5jZXNzQ29udHJvbC5wcmluY2Vzc1NvdW5kVG9vbC5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1tpXSwgbG9vcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19