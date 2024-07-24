import { amuseControl } from "../tool/amuseControl";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlanetDialog extends cc.Component {

    callback: Function = null;


    protected start(): void {
       
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_cancel() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    }

    onClick_closeBtn() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    }
}
