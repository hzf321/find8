import { princessControl, delay } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EmilyPop extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Sprite)
    playerIcon: cc.Sprite = null;

    @property(cc.Sprite)
    userIcon: cc.Sprite = null;
    
    @property(cc.Node)
    winNode: cc.Node = null;
    
    @property(cc.Node)
    failNode: cc.Node = null;
    
    img: cc.SpriteFrame = null;

    callback: Function = null;

    initData(data) {
        this.img = data.img;
        this.playerIcon.spriteFrame = this.img;
        this.callback = data.callback;
        if(data.state){
            this.winNode.active = true;
            this.failNode.active = false;
        }else{
            this.winNode.active = false;
            this.failNode.active = true;
        }
    }

    onLoad(): void {
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (pgData.userData.avatarId), this.userIcon);
    }


    start(): void {
        princessControl.adapterBg(this.bg);
    }

    onClick_continueBtn() {
        princessControl.princessSoundTool.commonBtnClick();
        // this.callback && this.callback();

        pgData.userData.isHall = true;
        pgData.storageData();
        cc.director.loadScene(delay.glass);

        this.node.destroy();

    }

    onClick_close() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    }
}
