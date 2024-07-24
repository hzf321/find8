import { amuseControl } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SummerDialog extends cc.Component {

    ADcallback: Function = null;
    restartCallBack: Function = null;

    start(): void {
        agData.showBanner();
    }

    initData(data) {

        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    }


    onClick_AD_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        agData.showVideo(()=>{
            this.scheduleOnce(()=>{
                this.ADcallback && this.ADcallback()
                this.node.destroy();
                agData.closeBanner();
            });
        });
    }

    onClick_restart() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack()
        this.node.destroy();
        agData.closeBanner();
    }
}
