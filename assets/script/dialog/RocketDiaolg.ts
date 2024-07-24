import { amuseControl, strong } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class RocketDiaolg extends cc.Component {

    callback: Function = null;


    protected start(): void {
        agData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_continue_btn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        agData.closeBanner();
    }

    onClick_backHall() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
        agData.closeBanner();
        agData.userData.isHall = true;
        agData.storageData();
        cc.director.loadScene(strong.flower);

    }
}
