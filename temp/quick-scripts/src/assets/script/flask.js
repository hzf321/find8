"use strict";
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