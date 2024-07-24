 
import { princessControl } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class MiaPop extends cc.Component {

    callback: Function = null;

    start(): void {
        pgData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_Agreen() {
        princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        pgData.closeBanner();
    }
 
    onClick_PrivacyPolicy_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(pgData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        princessControl.princessSoundTool.commonBtnClick();
        cc.sys.openURL(pgData.termsofServiceUrl);
    }

}
