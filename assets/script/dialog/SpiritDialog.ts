import { amuseControl } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpiritDialog extends cc.Component {


    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    pause_sprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    setting_sprite: cc.SpriteFrame = null;

    @property(cc.Node)
    soundBox: cc.Node = null;

    @property(cc.Node)
    musicBox: cc.Node = null;

    @property(cc.Node)
    zhengdongBox: cc.Node = null;

    @property(cc.Node)
    setting_pausebtn: cc.Node = null;

    @property(cc.Node)
    setting_ok: cc.Node = null;

    callback: Function = null;

    start() {
        this.init();
        agData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        } else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    }


    init() {

        if (!amuseControl.amuseSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }

        if (!amuseControl.amuseSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }

        if (!amuseControl.amuseSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }


    onClick_musicbtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseSoundTool.switchMusic();
        if (!amuseControl.amuseSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_soundbtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseSoundTool.switchEffect();
        if (!amuseControl.amuseSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    }
    onClick_zhengdongbtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        amuseControl.amuseSoundTool.switchShock();
        if (!amuseControl.amuseSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_continue_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
        agData.closeBanner();
        this.callback && this.callback();
    }


    onClick_ok_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        agData.closeBanner();
    }

    onClick_PrivacyPolicy_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(agData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        cc.sys.openURL(agData.termsofServiceUrl);
        amuseControl.amuseSoundTool.commonBtnClick();
    }

 
     
}
