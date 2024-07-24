import { princessControl } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SophiaPop extends cc.Component {

    ADcallback: Function = null;
    restartCallBack: Function = null;

    start(): void {
        pgData.showBanner();
    }

    initData(data) {

        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    }


    onClick_AD_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        pgData.showVideo(()=>{
            this.scheduleOnce(()=>{
                this.ADcallback && this.ADcallback()
                this.node.destroy();
                pgData.closeBanner();
            });
        });
    }

    onClick_restart() {
        princessControl.princessSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack()
        this.node.destroy();
        pgData.closeBanner();
    }
}
