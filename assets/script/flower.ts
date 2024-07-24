import { amuseControl, strong, circle } from "./tool/amuseControl";
import { agData } from "./tool/amuseGameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class flower extends cc.Component {

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
        this.nowIndex = agData.userData.level;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.updataInfo();
        amuseControl.setsceneNode(this.node);
        amuseControl.adapterBg(this.bg);

        let fine_2 = this.maskBox.getChildByName("fine_2");
        fine_2.getChildByName("mask").active = false;
        this.levelNum.string = "" + this.nowIndex;
        amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), fine_2.getChildByName("img").getComponent(cc.Sprite));

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
        this.username.string = agData.userData.gameName;
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (agData.userData.avatarId), this.icon);
    }

    onClick_setting() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseResUtil.showDialog(circle.SpiritDialog, { isGame: false });
    }


    showToast(text: string) {
        amuseControl.amuseResUtil.showToast(text);
    }

    onClick_preBtn() {
        amuseControl.amuseSoundTool.commonBtnClick();

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
            if (ele.x == -520) {
                if (this.nowIndex > agData.userData.level) {
                    ele.getChildByName("mask").active = true;
                } else {
                    ele.getChildByName("mask").active = false;
                }
                amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            } else if (ele.x == 520) {
                ele.x = -520;
            } else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(520, 0) }).call(() => {
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
        amuseControl.amuseSoundTool.commonBtnClick();
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


            if (ele.x == -520) {
                ele.x = 520;
            } else if (ele.x == 520) {
                if (this.nowIndex > agData.userData.level) {
                    ele.getChildByName("mask").active = true;
                } else {
                    ele.getChildByName("mask").active = false;
                }
                amuseControl.amuseResUtil.loadSprite("sunImg/" + "sun_" + (this.nowIndex), ele.getChildByName("img").getComponent(cc.Sprite));
                cc.tween(ele).to(this.speedNum, { position: cc.v3(0, 0) }).start();
            } else if (ele.x == 0) {
                cc.tween(ele).to(this.speedNum, { position: cc.v3(-520, 0) }).call(() => {
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
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseResUtil.showToast("The feature is not available yet");
    }

    onClick_img() {
        amuseControl.amuseSoundTool.commonBtnClick();
        cc.log(this.nowIndex)
        if (this.nowIndex > agData.userData.level) {       //锁住
            amuseControl.amuseResUtil.showDialog(circle.PlanetDialog)
        } else {                                            //没锁
            amuseControl.imgId = this.nowIndex;
            agData.userData.isHall = false;
            agData.storageData();
            cc.director.loadScene(strong.sunset);
        }
    }

    onClick_startBtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.imgId =  agData.userData.level;
        agData.userData.isHall = false;
        agData.storageData();
        cc.director.loadScene(strong.sunset);
    }


    click_changeinfo() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseResUtil.showDialog(circle.OrangeDialog, {callback: ()=>{
            this.updataInfo();
        }})

    }
}
