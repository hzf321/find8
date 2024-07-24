import newhand from "./prefeb/newhand";
import { amuseControl, circle, strong, meinvData } from "./tool/amuseControl";
import { agData, sound } from "./tool/amuseGameData";


const { ccclass, property } = cc._decorator;

enum GameState {
    discover,       //找到
    wrong,        //没找到    
    repeat,     //找到重复的  
}

@ccclass
export default class sunset extends cc.Component {

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

    meinv_Data: meinvData[] = [];
    meinvY: number = 175;
    meinvScale: number = 0.372;

    yeziAllNum: number = 10;
    meinvFindNum: number = 0;
    meinvOutTime: number = 0;

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
        agData.setGamestop(()=>{
            amuseControl.amuseSoundTool.pauseAll()
        });

        agData.setGamerecovery(()=>{
            amuseControl.amuseSoundTool.resumeAll()
        });

        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }

        this.resetAll();
        amuseControl.setsceneNode(this.node);
        amuseControl.adapterBg(this.bg);
        amuseControl.adapterBg(this.pipeibg);
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
    }

    checkNewHand() {
        if (agData.userData.isGudie || amuseControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            amuseControl.amuseResUtil.bindResAsset(node, prefab);
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
            let tempNum = amuseControl.getRandomInt(1, 19);
            amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (tempNum), icon.getComponent(cc.Sprite));
            cc.Tween.stopAllByTarget(icon);
            cc.tween(icon).by(0.15, { y: -120 }).call(() => {
                if (icon.y == -120) {
                    let randomNum = amuseControl.getRandomInt(1, 19);
                    amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (randomNum), icon.getComponent(cc.Sprite));
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

        if(bool){
            if (parseInt(num.string) >= 10) {
                this.mask.active = true;
                this.gameoverBool = true;
                this.scheduleOnce(() => {
                    amuseControl.amuseResUtil.showDialog(circle.PurpleDialog, {
                        state: false,
                        img: this.duishouIcon,
                        meinv_Data: this.meinv_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                        callback: () => {
                            if (amuseControl.imgId + 1 <= agData.levelAll) {
                                amuseControl.imgId = amuseControl.imgId + 1;
                                this.resetAll();
                                this.init();
                                this.startDownTime();
                                this.loadRes();
                            } else {
                                agData.userData.isHall = true;
                                agData.storageData();
                                cc.director.loadScene(strong.flower);
                            }
                        }
                    });
                }, 0.5);
            }
        }
      

        let num1 = this.movePaly1.getChildByName("num").getComponent(cc.Label).string;
        let num2 = this.movePaly2.getChildByName("num").getComponent(cc.Label).string;
        cc.Tween.stopAllByTarget(this.movePaly1);
        cc.Tween.stopAllByTarget(this.movePaly2);
        if (parseInt(num1) >= parseInt(num2)) {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move1Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move2Y) }).start();
        } else {
            cc.tween(this.movePaly1).to(0.5, { position: cc.v3(this.movePaly1.x, this.move2Y) }).start();
            cc.tween(this.movePaly2).to(0.5, { position: cc.v3(this.movePaly2.x, this.move1Y) }).start();
        }
    }

    init() {
        this.levelNum.string = "" + amuseControl.imgId;
        if (!amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        } else {
            this.soundHallBtn.getChildByName("line").active = false;
        }
        if (!amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        } else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
        for (let i = 0; i < this.yeziBox.children.length; i++) {
            let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            amuseControl.playSp(anim, "1_an_stop");
        }

        this.changeQiPaoNum();
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (agData.userData.avatarId), this.userIcon1);
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (agData.userData.avatarId), this.userIcon2);
        this.mask.active = false;
        this.tishi_qipao.active = false;
        // this.meinvOutTime = this.getDownTime();
        // let time = amuseControl.timeChange(this.meinvOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;

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
        if (this.meinvOutTime > 0) {
            let time = amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    }

    downTimeEvent() {

        return
        if (this.isStop) {
            return
        }
        this.meinvOutTime--;
        let time = amuseControl.timeChange(this.meinvOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.meinvOutTime <= 0) {
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
                amuseControl.playSp(anim, "posui");
                break;
            }
        }
        return
        let heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            amuseControl.amuseResUtil.showDialog(circle.SummerDialog, {
                ADcallback: () => {
                    // this.meinvOutTime = 60;
                    // agData.userData.tishiNum++;
                    agData.storageData();
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
                    cc.log(this.meinv_Data, "this.meinv_Data");
                    for (let i = 0; i < this.meinv_Data.length; i++) {
                        this.meinv_Data[i].isFind = false;
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

        this.meinvOutTime -= reduceTime;
        if (this.meinvOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        } else {
            let time = amuseControl.timeChange(this.meinvOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    }

    changeQiPaoNum() {
        if (agData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = agData.userData.tishiNum.toString();
        } else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    }

    loadRes() {
        amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + amuseControl.imgId, this.originalImg.getComponent(cc.Sprite));

        amuseControl.amuseResUtil.loadSprite("fightImg/" + "fight_" + amuseControl.imgId, this.finishImg.getComponent(cc.Sprite));

        cc.resources.load("meinvImg/moon" + amuseControl.imgId, cc.JsonAsset, (err, res) => {
            if (err) {
                cc.log(err)
                return;
            }
            // 获取到 Json 数据
            amuseControl.amuseResUtil.bindResAsset(this.node, res);
            const jsonData = res.json;
            if (jsonData && jsonData.path) {
                this.meinv_Data = jsonData.path;
                for (let i = 0; i < this.meinv_Data.length; i++) {
                    this.meinv_Data[i].isFind = false;
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

        let anim = this.yeziBox.children[this.meinvFindNum - 1].getComponent(sp.Skeleton);

        let tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);

        let changePos = amuseControl.changePos(targetEle, tuowei);

        let time = 1;

        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(() => {
            this.findNodeNum(this.movePaly1);
            this.scheduleOnce(() => {
                tuowei.destroy();
            }, 0.3);
            amuseControl.playSp(anim, "2_bianliang");
            amuseControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    }

    findSignSucc(targetPos: cc.Vec3, agData: meinvData) {
        for (let i = 0; i < 2; i++) {
            let gameFind = cc.instantiate(this.gameFindPrefab2);

            let imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.meinvScale + this.meinvY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind)
            } else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind)
                imgY = targetPos.y * this.meinvScale - this.meinvY;
            }
            let centerPos = cc.v3(targetPos.x * this.meinvScale, imgY);

            gameFind.setPosition(centerPos);

            //     正方形
            gameFind.width = agData.blockSize.wid * this.meinvScale;
            gameFind.height = agData.blockSize.hei * this.meinvScale;


            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;


            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
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
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.meinvY * 2)));
        } else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.meinvY * 2)));
        }

        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    }

    imgEvent(event: cc.Event.EventTouch) {
        let pos = event.getLocation();
        let clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        let data = this.checkImgSign(clickPos);
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

            } else if (this.newhandNode && this.meinvFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                agData.userData.isGudie = true;
                agData.storageData();
            }
            this.playCommonSound(sound.correct);

            if (this.meinvFindNum >= this.yeziAllNum) {       //胜利 游戏结束
                this.gameEnd();
            }
        } else if (data.type == GameState.wrong) {
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
        let type: GameState = null;
        let agData = null;
        for (let i = 0; i < this.meinv_Data.length; i++) {
            let data = this.meinv_Data[i];
            let x = data.centerPos.x * this.meinvScale;
            let y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.meinvScale + this.meinvY;
            } else {
                y = data.centerPos.y * this.meinvScale - this.meinvY;
            }

            let wid = data.blockSize.wid * this.meinvScale;
            let hei = data.blockSize.hei * this.meinvScale;

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
                } else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type, agData }
            } else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }

        return { type, agData }
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
        if (agData.userData.level + 1 <= agData.levelAll) {
            if (amuseControl.imgId == agData.userData.level) {
                agData.userData.level = agData.userData.level + 1;
                agData.storageData();
            }
        }
        this.scheduleOnce(() => {
            amuseControl.amuseResUtil.showDialog(circle.PurpleDialog, {
                state: true,
                img: this.duishouIcon,
                meinv_Data: this.meinv_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                callback: () => {
                    if (amuseControl.imgId + 1 <= agData.levelAll) {
                        amuseControl.imgId = amuseControl.imgId + 1;
                        this.resetAll();
                        this.init();
                        this.startDownTime();
                        this.loadRes();
                    } else {
                        agData.userData.isHall = true;
                        agData.storageData();
                        cc.director.loadScene(strong.flower);
                    }
                }
            });
        }, 1);
        return
        this.scheduleOnce(() => {
            for (let i = 0; i < this.yeziBox.children.length; i++) {
                let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
                this.scheduleOnce(() => {
                    amuseControl.playSp(anim, "4_man", false, () => {
                        this.scheduleOnce(() => {
                            if (i == this.yeziBox.children.length - 1) {
                                this.playCommonSound(sound.win);
                                if (agData.userData.level + 1 <= agData.levelAll) {
                                    agData.userData.level = agData.userData.level + 1;
                                    agData.storageData();
                                }
                                amuseControl.amuseResUtil.showDialog(circle.PurpleDialog, {
                                    img: this.duishouIcon,
                                    meinv_Data: this.meinv_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                                    callback: () => {
                                        if (amuseControl.imgId + 1 <= agData.levelAll) {
                                            amuseControl.imgId = amuseControl.imgId + 1;
                                            this.resetAll();
                                            this.init();
                                            this.startDownTime();
                                            this.loadRes();
                                        } else {
                                            agData.userData.isHall = true;
                                            agData.storageData();
                                            cc.director.loadScene(strong.flower);
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
        let level = amuseControl.imgId;
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
        amuseControl.amuseResUtil.showDialog(circle.SummerDialog, {
            ADcallback: () => {
                this.meinvOutTime = 60;
                agData.userData.tishiNum++;
                agData.storageData();
                this.changeQiPaoNum();
                this.startDownTime();
            },

            restartCallBack: () => {
                this.resetAll(true);
                this.init();
                this.startDownTime();
                cc.log(this.meinv_Data, "this.meinv_Data");
                for (let i = 0; i < this.meinv_Data.length; i++) {
                    this.meinv_Data[i].isFind = false;
                }
            }
        });
    }

    onClick_back() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl.amuseResUtil.showDialog(circle.RocketDiaolg, { callback: () => { this.isStop = false } });
    }


    onClick_pause() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.isStop = true;
        amuseControl.amuseResUtil.showDialog(circle.SpiritDialog, {
            isGame: true, callback: () => {
                if (!amuseControl.amuseSoundTool.effectSwitch) {
                    this.soundHallBtn.getChildByName("line").active = true;
                } else {
                    this.soundHallBtn.getChildByName("line").active = false;
                }
                if (!amuseControl.amuseSoundTool.musicSwitch) {
                    this.musicHallBtn.getChildByName("line").active = true;
                } else {
                    this.musicHallBtn.getChildByName("line").active = false;
                }
                this.isStop = false
            }
        });

    }

    onClick_tishi() {

        amuseControl.amuseSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            amuseControl.amuseResUtil.showToast("Prompt already exists");
            return;
        }
        let lvdata: meinvData = null;
        for (let i = 0; i < this.meinv_Data.length; i++) {
            if (!this.meinv_Data[i].isFind) {
                lvdata = this.meinv_Data[i];
                break;
            }
        }

        if (!agData) {
            return
        }
        if (agData.userData.tishiNum <= 0) {
            cc.log("看广告")

            agData.showVideo(() => {
                this.showTiShi(lvdata);
            });

            return;
        }
        agData.userData.tishiNum = agData.userData.tishiNum - 1;
        agData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    }

    showTiShi(agData: meinvData) {
        if (agData) {
            this.lovelyIsPrompt = true;
            for (let i = 0; i < 2; i++) {
                let tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);

                let x = agData.centerPos.x * this.meinvScale;
                let y = 0
                if (i == 0) {
                    y = agData.centerPos.y * this.meinvScale + this.meinvY;
                } else {
                    y = agData.centerPos.y * this.meinvScale - this.meinvY;
                }

                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.5 }).to(0.5, { scale: 0.7 }).union().repeatForever().start();
            }

        }
    }


    onClick_musicChange() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseSoundTool.switchMusic();
        if (!amuseControl.amuseSoundTool.musicSwitch) {
            this.musicHallBtn.getChildByName("line").active = true;
        } else {
            this.musicHallBtn.getChildByName("line").active = false;
        }
    }



    onClick_soundChange() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseSoundTool.switchEffect();
        if (!amuseControl.amuseSoundTool.effectSwitch) {
            this.soundHallBtn.getChildByName("line").active = true;
        } else {
            this.soundHallBtn.getChildByName("line").active = false;
        }

    }



    onClick_exit() {
        amuseControl.amuseSoundTool.commonBtnClick();
        agData.userData.isHall = true;
        agData.storageData();
        cc.director.loadScene(strong.flower);
    }


    //播放音效
    playCommonSound(audioName: string, loop: boolean = false): number {
        for (let i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                let audioID = amuseControl.amuseSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    }
}
