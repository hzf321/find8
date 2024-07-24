 
import { amuseControl } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class YellowDialog extends cc.Component {

    callback: Function = null;

    start(): void {
        agData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_Agreen() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        agData.closeBanner();
    }
 
    onClick_PrivacyPolicy_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(agData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        cc.sys.openURL(agData.termsofServiceUrl);
    }

}
