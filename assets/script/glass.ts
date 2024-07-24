import { princessControl, delay, dell } from "./tool/princessControl";
import { pgData } from "./tool/princessGameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class glass extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    maskBox: cc.Node = null;

    @property(cc.Node)
    preBtn: cc.Node = null;

    @property(cc.Node)
    nextBtn: cc.Node = null;

    @property(cc.Label)
    levelNum: cc.Label = null;

    @property(cc.Label)
    username: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    private nowIndex = 0;
    private speedNum = 0.7;

    start() {
        this.nowIndex = pgData.userData.level;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.updataInfo();
        princessControl.setsceneNode(this.node);
        princessControl.adapterBg(this.bg);

        let fine_2 = this.maskBox.getChildByName("fine_2");
        fine_2.getChildByName("mask").active = false;
        this.levelNum.string = "" + this.nowIndex;
        princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), fine_2.getChildByName("img").getComponent(cc.Sprite));

        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        } else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        } else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }

        this.preBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);

        for (let i = 0; i < this.maskBox.children.length; i++) {
            let ele = this.maskBox.children[i];
            ele.on(cc.Node.EventType.TOUCH_END, this.onClick_img, this);
        }
    }


    updataInfo() {
        this.username.string = pgData.userData.gameName;
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (pgData.userData.avatarId), this.icon);
    }

    onClick_setting() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessResUtil.showDialog(dell.IsabellaPop, { isGame: false });
    }


    showToast(text: string) {
        princessControl.princessResUtil.showToast(text);
    }

    onClick_preBtn() {
        princessControl.princessSoundTool.commonBtnClick();

        this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);

        cc.log("上一页");
        this.nowIndex = this.nowIndex - 1;
        if (this.nowIndex <= 1) {
            this.nowIndex = 1;
        }

        this.levelNum.string = "" + this.nowIndex;
        for (let i = 0; i < this.maskBox.children.length; i++) {
            let ele = this.maskBox.children[i];
            cc.Tween.stopAllByTarget(ele);
            if (ele.x == -640) {
                if (this.nowIndex > pgData.userData.level) {
                    ele.getChildByName("mask").active = true;
                } else {
                    ele.getChildByName("mask").active = false;
                }
                princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            } else if (ele.x == 640) {
                ele.x = -640;
            } else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(640, 0) }).call(() => {
                    this.preBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
                    this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
                }).start();
            }
        }


        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        } else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        } else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }
    }


    onClick_nextBtn() {
        princessControl.princessSoundTool.commonBtnClick();
        cc.log("下一页");

        this.preBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
        this.nextBtn.off(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);

        this.nowIndex = this.nowIndex + 1;
        if (this.nowIndex >= 30) {
            this.nowIndex = 30;
        }

        this.levelNum.string = "" + this.nowIndex;
        for (let i = 0; i < this.maskBox.children.length; i++) {
            let ele = this.maskBox.children[i];
            cc.Tween.stopAllByTarget(ele);


            if (ele.x == -640) {
                ele.x = 640;
            } else if (ele.x == 640) {
                if (this.nowIndex > pgData.userData.level) {
                    ele.getChildByName("mask").active = true;
                } else {
                    ele.getChildByName("mask").active = false;
                }
                princessControl.princessResUtil.loadSprite("openImg/" + "open_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            } else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(-640, 0) }).call(() => {
                    this.preBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_preBtn, this);
                    this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onClick_nextBtn, this);
                }).start();
            }
        }

        if (this.nowIndex >= 30) {
            this.preBtn.active = true;
            this.nextBtn.active = false;
        } else if (this.nowIndex <= 1) {
            this.preBtn.active = false;
            this.nextBtn.active = true;
        } else {
            this.preBtn.active = true;
            this.nextBtn.active = true;
        }
    }

    onClick_blueBook() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessResUtil.showToast("The feature is not available yet");
    }

    onClick_img() {
        princessControl.princessSoundTool.commonBtnClick();
        cc.log(this.nowIndex)
        if (this.nowIndex > pgData.userData.level) {       //锁住
            princessControl.princessResUtil.showDialog(dell.EvelynPop)
        } else {                                            //没锁
            princessControl.imgId = this.nowIndex;
            pgData.userData.isHall = false;
            pgData.storageData();
            cc.director.loadScene(delay.flask);
        }
    }

    onClick_startBtn() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.imgId = pgData.userData.level;
        pgData.userData.isHall = false;
        pgData.storageData();
        cc.director.loadScene(delay.flask);
    }


    click_changeinfo() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessResUtil.showDialog(dell.AmeliaPop, {
            callback: () => {
                this.updataInfo();
            }
        })

    }
}
