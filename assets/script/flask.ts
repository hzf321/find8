import newhand from "./prefeb/newhand";
import { princessControl, dell, delay, princess_Data } from "./tool/princessControl";
import { pgData, sound } from "./tool/princessGameData";


const { ccclass, property } = cc._decorator;

enum findState {
    ZHAODAO,       //找到
    MEIZHAODAO,        //没找到    
    CHONGFU,     //找到重复的  
}

@ccclass
export default class flask extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    pipeibg: cc.Node = null;

    @property(cc.Node)
    originalImg: cc.Node = null;

    @property(cc.Node)
    finishImg: cc.Node = null;

    @property(cc.Node)
    tishi_qipao: cc.Node = null;

    @property(cc.Prefab)
    gameFindPrefab2: cc.Prefab = null;

    @property(cc.Prefab)
    gameFindPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameErrPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameTishiPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    game_tuowei: cc.Prefab = null;

    @property(cc.Node)
    imgSignBox: cc.Node = null;

    @property(cc.Node)
    yeziBox: cc.Node = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    timeAll: cc.Node = null;

    @property(cc.Node)
    reduceTime: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    @property(cc.Node)
    heartBox: cc.Node = null;

    @property(cc.Node)
    emptyheartBox: cc.Node = null;

    @property(cc.Node)
    pipeiNode: cc.Node = null;

    @property(cc.Node)
    movePaly1: cc.Node = null;

    @property(cc.Node)
    movePaly2: cc.Node = null;

    @property(cc.Sprite)
    userIcon1: cc.Sprite = null;

    @property(cc.Sprite)
    userIcon2: cc.Sprite = null;

    @property(cc.Label)
    levelNum: cc.Label = null;

    @property(cc.Node)
    soundHallBtn: cc.Node = null;

    @property(cc.Node)
    musicHallBtn: cc.Node = null;

    @property(cc.Node)
    setContorl: cc.Node = null;

    @property(cc.Node)
    gameOverAnim: cc.Node = null;


    princess_Data: princess_Data[] = [];
    princessY: number = 192;
    princessvScale: number = 0.4;

    yeziAllNum: number = 10;
    princessFindNum: number = 0;
    princessOutTime: number = 0;

    lovelyIsPrompt: boolean = false;

    timer = null;
    isStop: boolean = false;
    oneErr: boolean = false;

    private audioClips: cc.AudioClip[] = [];

    newhandNode: newhand = null;

    private duishouIcon: cc.SpriteFrame = null;

    private gameoverBool = false;

    private move1Y = 128;
    private move2Y = 0;

    start() {
        pgData.setGamestop(() => {
            princessControl.princessSoundTool.pauseAll()
        });

        pgData.setGamerecovery(() => {
            princessControl.princessSoundTool.resumeAll()
        });

        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }

        this.resetAll();
        princessControl.setsceneNode(this.node);
        princessControl.adapterBg(this.bg);
        princessControl.adapterBg(this.pipeibg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        // this.checkNewHand();

        this.pipeiAnim();


        cc.resources.loadDir("sound", cc.AudioClip, (err: Error, clips: cc.AudioClip[]) => {
            if (err || !cc.isValid(this)) return;
            this.audioClips = clips;
            this.addAutoReleaseAssets(clips);
        });
    }

    onEvent() {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    }

    resetAll(clearData?) {
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
    }

    checkNewHand() {
        if (pgData.userData.isGudie || princessControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            princessControl.princessResUtil.bindResAsset(node, prefab);
            this.node.addChild(node);
            this.newhandNode = node.getComponent(newhand);
            this.newhandNode.showdong1();
        })
    }


    pipeiAnim() {
        this.pipeiNode.active = true;
        let palyer_1 = this.pipeiNode.getChildByName("palyer_1");
        let palyer_2 = this.pipeiNode.getChildByName("palyer_2");

        let iconBox = palyer_2.getChildByName("mask");
        let finishTemp = false;
        for (let i = 0; i < iconBox.children.length; i++) {
            let icon = iconBox.children[i];
            let tempNum = princessControl.getRandomInt(1, 20);
            princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(() => {
                if (icon.y == -120) {
                    let randomNum = princessControl.getRandomInt(1, 20);
                    princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (randomNum), icon.getComponent(cc.Sprite));
                    icon.y = 240
                }
            }).union().repeat(20).delay(0.5).call(() => {
                if (!finishTemp) {
                    cc.log("结束")
                    this.checkNewHand();
                    for (let i = 0; i < iconBox.children.length; i++) {
                        let ele = iconBox.children[i];
                        if (ele.y == 0) {
                            this.duishouIcon = ele.getComponent(cc.Sprite).spriteFrame;
                            cc.find("mask/icon", this.movePaly2).getComponent(cc.Sprite).spriteFrame = this.duishouIcon;
                            this.autoFind();
                        }
                    }
                    this.pipeiNode.active = false;
                }
                finishTemp = true;
            }).start();
        }
    }

    autoFind() {
        let num = this.movePaly2.getChildByName("num").getComponent(cc.Label).string
        if (parseInt(num) >= 10) return
        if (this.gameoverBool) return
        let minTime = 3; // 最小时间间隔（秒）
        let maxTime = 5; // 最大时间间隔（秒）

        if (parseInt(num) == 9) {
            minTime = 300;
            maxTime = 300;
        }

        let randomTime = Math.random() * (maxTime - minTime) + minTime; // 生成随机时间间隔

        this.scheduleOnce(() => {
            //执行的逻辑代码
            this.findNodeNum(this.movePaly2, true);
            // 执行完逻辑后再次调度下一个随机定时器
            this.autoFind();
        }, randomTime);
    }

    findNodeNum(parentNode: cc.Node, bool?: boolean) {
        let finishBox = parentNode.getChildByName("finishBox");
        let num = parentNode.getChildByName("num").getComponent(cc.Label);
        let tmepIndex = 0;
        for (let i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            let item = finishBox.children[i];
            let nofinish = item.getChildByName("nofinish");
            let finish = item.getChildByName("finish");
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
                this.showGameOverAnim(() => {
                    this.scheduleOnce(() => {
                        princessControl.princessResUtil.showDialog(dell.EmilyPop, {
                            state: false,
                            img: this.duishouIcon,
                            princess_Data: this.princess_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                            callback: () => {
                                if (princessControl.imgId + 1 <= pgData.levelAll) {
                                    princessControl.imgId = princessControl.imgId + 1;
                                    this.resetAll();
                                    this.init();
                                    this.startDownTime();
                                    this.loadRes();
                                } else {
                                    pgData.userData.isHall = true;
                                    pgData.storageData();
                                    cc.director.loadScene(delay.glass);
                                }
                            }
                        });
                    }, 0.5);
                });

            }
        }


        let num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        let num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        // if (parseInt(num1) >= parseInt(num2)) {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        // } else {
        //     cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
        //     cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        // }
    }

    showGameOverAnim(call: Function) {
        this.gameOverAnim.active = true;
        let muzhi = this.gameOverAnim.getChildByName("muzhi");
        muzhi.active = false;
        let mask1 = this.gameOverAnim.getChildByName("mask1");
        let mask2 = this.gameOverAnim.getChildByName("mask2");
        cc.Tween.stopAllByTarget(mask2);
        cc.Tween.stopAllByTarget(mask1);
        cc.Tween.stopAllByTarget(muzhi);
        mask1.height = mask2.height = 0;

        cc.tween(mask1).to(1, { height: 336 }).start();
        cc.tween(mask2).to(1, { height: 336 }).call(() => {
            muzhi.scale = 0;
            muzhi.active = true;
            cc.tween(muzhi).to(0.2, { scale: 1.2 }).to(0.1, { scale: 0.9 }).to(0.1, { scale: 1 }).delay(0.5).call(() => {
                call && call();
            }).start()
        }).start();
    }

    init() {
        this.levelNum.string = "" + princessControl.imgId;
        if (!princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        } else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        } else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (let i = 0; i < this.yeziBox.children.length; i++) {
            let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            princessControl.playSp(anim, "1_an_stop");
        }

        this.changeQiPaoNum();
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (pgData.userData.avatarId), this.userIcon1);
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (pgData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        // this.tishi_qipao.active = false;
        // this.princessOutTime = this.getDownTime();
        // let time = princessControl.timeChange(this.princessOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        this.gameOverAnim.active = false;
        this.setContorl.getChildByName("img").active = false;
        for (let i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
        let finishBox1 = this.movePaly1.getChildByName("finishBox");
        for (let i = 0; i < finishBox1.children.length; i++) {
            let item = finishBox1.children[i];
            item.getChildByName("finish").active = false;
        }
        let finishBox2 = this.movePaly2.getChildByName("finishBox");
        for (let i = 0; i < finishBox2.children.length; i++) {
            let item = finishBox2.children[i];
            item.getChildByName("finish").active = false;
        }
    }


    //开启倒计时
    startDownTime() {
        return
        if (this.princessOutTime > 0) {
            let time = princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    }

    downTimeEvent() {

        return
        if (this.isStop) {
            return
        }
        this.princessOutTime--;
        let time = princessControl.timeChange(this.princessOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.princessOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
        }
    }


    //点错了
    errReduceTime() {
        let findheart = false;
        for (let i = this.heartBox.children.length - 1; i >= 0; i--) {
            let heartItem = this.heartBox.children[i];
            let emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem.active) {
                findheart = true;
                heartItem.active = false;
                emptyheartItem.active = true;
                let anim = emptyheartItem.getComponent(sp.Skeleton);
                princessControl.playSp(anim, "posui");
                break;
            }
        }
        return
        let heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            princessControl.princessResUtil.showDialog(dell.SophiaPop, {
                ADcallback: () => {
                    // this.princessOutTime = 60;
                    // pgData.userData.tishiNum++;
                    pgData.storageData();
                    this.changeQiPaoNum();
                    this.startDownTime();

                    for (let i = 0; i < this.heartBox.children.length; i++) {
                        this.heartBox.children[i].active = true;
                        this.emptyheartBox.children[i].active = false;
                    }
                },

                restartCallBack: () => {
                    this.resetAll(true);
                    this.init();
                    this.startDownTime();
                    cc.log(this.princess_Data, "this.princess_Data");
                    for (let i = 0; i < this.princess_Data.length; i++) {
                        this.princess_Data[i].isFind = false;
                    }
                }
            });
        }
        return
        //时间
        if (!this.oneErr) return
        let posY = this.timeAll.y;
        let reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(() => {
            this.reduceTime.active = false;
        }).start();

        this.princessOutTime -= reduceTime;
        if (this.princessOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        } else {
            let time = princessControl.timeChange(this.princessOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    }

    changeQiPaoNum() {
        if (pgData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("numbg").active = true;
            cc.find("numbg/num_label", this.tishi_qipao).getComponent(cc.Label).string = pgData.userData.tishiNum.toString();
        } else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("numbg").active = false;
        }
    }

    loadRes() {
        princessControl.princessResUtil.loadSprite("openImg/" + "open_" + princessControl.imgId, this.originalImg.getComponent(cc.Sprite));

        princessControl.princessResUtil.loadSprite("strongImg/" + "strong_" + princessControl.imgId, this.finishImg.getComponent(cc.Sprite));

        cc.resources.load("familyData/family" + princessControl.imgId, cc.JsonAsset, (err, res) => {
            if (err) {
                cc.log(err)
                return;
            }
            // 获取到 Json 数据
            princessControl.princessResUtil.bindResAsset(this.node, res);
            const jsonData = res.json;
            if (jsonData && jsonData.path) {
                this.princess_Data = jsonData.path;
                for (let i = 0; i < this.princess_Data.length; i++) {
                    this.princess_Data[i].isFind = false;
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
        })
    }


    yeziLight(pos: cc.Vec3) {

        let finishBox = this.movePaly1.getChildByName("finishBox");
        let tmepIndex = 0;
        let targetEle = null;
        for (let i = 0; i < finishBox.children.length; i++) {
            tmepIndex++;
            let item = finishBox.children[i];
            let nofinish = item.getChildByName("nofinish");
            if (nofinish.active) {
                targetEle = item;
                break;
            }
        }

        if (!cc.isValid(targetEle)) return;

        let anim = this.yeziBox.children[this.princessFindNum - 1].getComponent(sp.Skeleton);

        let tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);

        let changePos = princessControl.changePos(targetEle, tuowei);

        let time = 1;

        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(() => {
            this.findNodeNum(this.movePaly1);
            this.scheduleOnce(() => {
                tuowei.destroy();
            }, 0.3);
            princessControl.playSp(anim, "2_bianliang");
            princessControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    }

    findSignSucc(targetPos: cc.Vec3, pgData: princess_Data) {
        for (let i = 0; i < 2; i++) {
            let gameFind = cc.instantiate(this.gameFindPrefab2);

            let imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.princessvScale + this.princessY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind)
            } else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind)
                imgY = targetPos.y * this.princessvScale - this.princessY;
            }
            let centerPos = cc.v3(targetPos.x * this.princessvScale, imgY);

            gameFind.setPosition(centerPos);

            //     正方形
            gameFind.width = pgData.blockSize.wid * this.princessvScale;
            gameFind.height = pgData.blockSize.hei * this.princessvScale;


            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;


            cc.tween(gameFind).to(0.3, { scale: 1.3 }).to(0.1, { scale: 1.1 }).start();
        }
    }

    findSignErr(targetPos: cc.Vec3) {
        let clickPos = targetPos;
        let gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);

        let otherErrSign: cc.Node = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.princessY * 2)));
        } else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.princessY * 2)));
        }

        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    }

    imgEvent(event: cc.Event.EventTouch) {

        let minY = 136;
        let setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        }


        let pos = event.getLocation();
        let clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        let data = this.checkImgSign(clickPos);
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

            } else if (this.newhandNode && this.princessFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                pgData.userData.isGudie = true;
                pgData.storageData();
            }
            this.playCommonSound(sound.correct);

            if (this.princessFindNum >= this.yeziAllNum) {       //胜利 游戏结束
                this.gameEnd();
            }
        } else if (data.type == findState.MEIZHAODAO) {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        } else {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    }

    checkImgSign(targetPos: cc.Vec3) {
        let type: findState = null;
        let pgData = null;
        for (let i = 0; i < this.princess_Data.length; i++) {
            let data = this.princess_Data[i];
            let x = data.centerPos.x * this.princessvScale;
            let y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.princessvScale + this.princessY;
            } else {
                y = data.centerPos.y * this.princessvScale - this.princessY;
            }

            let wid = data.blockSize.wid * this.princessvScale;
            let hei = data.blockSize.hei * this.princessvScale;

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
                } else {
                    type = findState.CHONGFU;
                    cc.log("找到重复的了");
                }
                return { type, pgData }
            } else {
                type = findState.MEIZHAODAO;
                cc.log("没找到");
            }
        }

        return { type, pgData }
    }


    errSignAnim(node: cc.Node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(() => {
                node.destroy();
            }).start();
    }


    gameEnd() {
        cc.log("游戏结束");
        this.mask.active = true;
        this.gameoverBool = true;
        this.playCommonSound(sound.win);
        if (pgData.userData.level + 1 <= pgData.levelAll) {
            if (princessControl.imgId == pgData.userData.level) {
                pgData.userData.level = pgData.userData.level + 1;
                pgData.storageData();
            }
        }
        this.showGameOverAnim(() => {
            this.scheduleOnce(() => {
                princessControl.princessResUtil.showDialog(dell.EmilyPop, {
                    state: true,
                    img: this.duishouIcon,
                    princess_Data: this.princess_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                    callback: () => {
                        if (princessControl.imgId + 1 <= pgData.levelAll) {
                            princessControl.imgId = princessControl.imgId + 1;
                            this.resetAll();
                            this.init();
                            this.startDownTime();
                            this.loadRes();
                        } else {
                            pgData.userData.isHall = true;
                            pgData.storageData();
                            cc.director.loadScene(delay.glass);
                        }
                    }
                });
            }, 1);
        })
        return
        this.scheduleOnce(() => {
            for (let i = 0; i < this.yeziBox.children.length; i++) {
                let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
                this.scheduleOnce(() => {
                    princessControl.playSp(anim, "4_man", false, () => {
                        this.scheduleOnce(() => {
                            if (i == this.yeziBox.children.length - 1) {
                                this.playCommonSound(sound.win);
                                if (pgData.userData.level + 1 <= pgData.levelAll) {
                                    pgData.userData.level = pgData.userData.level + 1;
                                    pgData.storageData();
                                }
                                princessControl.princessResUtil.showDialog(dell.EmilyPop, {
                                    img: this.duishouIcon,
                                    princess_Data: this.princess_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                                    callback: () => {
                                        if (princessControl.imgId + 1 <= pgData.levelAll) {
                                            princessControl.imgId = princessControl.imgId + 1;
                                            this.resetAll();
                                            this.init();
                                            this.startDownTime();
                                            this.loadRes();
                                        } else {
                                            pgData.userData.isHall = true;
                                            pgData.storageData();
                                            cc.director.loadScene(delay.glass);
                                        }
                                    }
                                });
                            }
                        })
                    });
                }, 0.1 * i);
            }
        }, 0.5);
    }


    //获取当前关卡的倒计时
    getDownTime() {
        let level = princessControl.imgId;
        let time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        } else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        } else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        } else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        } else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        } else {
            time = 1 * 60;
        }
        return time;
    }


    //时间到
    timeOutEvent() {
        princessControl.princessResUtil.showDialog(dell.SophiaPop, {
            ADcallback: () => {
                this.princessOutTime = 60;
                pgData.userData.tishiNum++;
                pgData.storageData();
                this.changeQiPaoNum();
                this.startDownTime();
            },

            restartCallBack: () => {
                this.resetAll(true);
                this.init();
                this.startDownTime();
                cc.log(this.princess_Data, "this.princess_Data");
                for (let i = 0; i < this.princess_Data.length; i++) {
                    this.princess_Data[i].isFind = false;
                }
            }
        });
    }

    onClick_back() {
        princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;
        princessControl.princessResUtil.showDialog(dell.AvaPop, { callback: () => { this.isStop = false } });
    }


    onClick_pause() {
        princessControl.princessSoundTool.commonBtnClick();
        this.isStop = true;

        let maxY = 510;
        let minY = 136;
        let setimg = this.setContorl.getChildByName("img");
        cc.Tween.stopAllByTarget(this.setContorl);
        if (setimg.active) {
            setimg.active = false;
            cc.tween(this.setContorl).to(0.5, { height: minY }).start();
        } else {
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

    }

    onClick_tishi() {

        princessControl.princessSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            princessControl.princessResUtil.showToast("Prompt already exists");
            return;
        }
        let lvdata: princess_Data = null;
        for (let i = 0; i < this.princess_Data.length; i++) {
            if (!this.princess_Data[i].isFind) {
                lvdata = this.princess_Data[i];
                break;
            }
        }

        if (!pgData) {
            return
        }
        if (pgData.userData.tishiNum <= 0) {
            cc.log("看广告")

            pgData.showVideo(() => {
                this.showTiShi(lvdata);
            });

            return;
        }
        pgData.userData.tishiNum = pgData.userData.tishiNum - 1;
        pgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    }

    showTiShi(pgData: princess_Data) {
        if (pgData) {
            this.lovelyIsPrompt = true;
            for (let i = 0; i < 2; i++) {
                let tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);

                let x = pgData.centerPos.x * this.princessvScale;
                let y = 0
                if (i == 0) {
                    y = pgData.centerPos.y * this.princessvScale + this.princessY;
                } else {
                    y = pgData.centerPos.y * this.princessvScale - this.princessY;
                }

                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }

        }
    }


    onClick_musicChange() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessSoundTool.switchMusic();
        if (!princessControl.princessSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        } else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    }



    onClick_soundChange() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessSoundTool.switchEffect();
        if (!princessControl.princessSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        } else {
            this.soundHallBtn.getChildByName("line").active = false;
        }

    }



    onClick_exit() {
        princessControl.princessSoundTool.commonBtnClick();
        pgData.userData.isHall = true;
        pgData.storageData();
        cc.director.loadScene(delay.glass);
    }


    //播放音效
    playCommonSound(audioName: string, loop: boolean = false): number {
        for (let i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                let audioID = princessControl.princessSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    }
}
