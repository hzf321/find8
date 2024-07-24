import { princessControl } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class IsabellaPop extends cc.Component {


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
        pgData.showBanner();
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

        if (!princessControl.princessSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }

        if (!princessControl.princessSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }

        if (!princessControl.princessSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }


    onClick_musicbtn() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessSoundTool.switchMusic();
        if (!princessControl.princessSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_soundbtn() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessSoundTool.switchEffect();
        if (!princessControl.princessSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    }
    onClick_zhengdongbtn() {
        princessControl.princessSoundTool.commonBtnClick();
        princessControl.princessSoundTool.switchShock();
        if (!princessControl.princessSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_continue_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
        pgData.closeBanner();
        this.callback && this.callback();
    }


    onClick_ok_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        pgData.closeBanner();
    }

    onClick_PrivacyPolicy_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(pgData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        cc.sys.openURL(pgData.termsofServiceUrl);
        princessControl.princessSoundTool.commonBtnClick();
    }

 
     
}
