import { princessControl } from "../tool/princessControl";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class EvelynPop extends cc.Component {

    callback: Function = null;


    protected start(): void {
       
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_cancel() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    }

    onClick_closeBtn() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    }
}
