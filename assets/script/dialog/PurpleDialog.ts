import { amuseControl, strong } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PurpleDialog extends cc.Component {

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
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (agData.userData.avatarId), this.userIcon);
    }


    start(): void {
        amuseControl.adapterBg(this.bg);
    }

    onClick_continueBtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        // this.callback && this.callback();

        agData.userData.isHall = true;
        agData.storageData();
        cc.director.loadScene(strong.flower);

        this.node.destroy();

    }

    onClick_close() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    }
}
