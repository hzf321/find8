import { princessControl, delay } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class AvaPop extends cc.Component {

    callback: Function = null;


    protected start(): void {
        pgData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_continue_btn() {
        princessControl.princessSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        pgData.closeBanner();
    }

    onClick_backHall() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
        pgData.closeBanner();
        pgData.userData.isHall = true;
        pgData.storageData();
        cc.director.loadScene(delay.glass);

    }
}
