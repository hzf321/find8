
import { amuseControl } from "../tool/amuseControl";
import { agData } from "../tool/amuseGameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OrangeDialog extends cc.Component {


    @property(cc.Sprite)
    avatarIcon: cc.Sprite = null;

    @property(cc.Node)
    contentBox: cc.Node = null;

    @property(cc.EditBox)
    editBox: cc.EditBox = null;


    callback: Function = null;


    clickid = 0;

    start(): void {
        this.editBox.string = agData.userData.gameName;
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (agData.userData.avatarId), this.avatarIcon);
        this.clickid = agData.userData.avatarId;
        for (let i = 0; i < this.contentBox.children.length; i++) {
            let item = this.contentBox.children[i];
            let icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, () => {
                this.changeIcon((i + 1))
            }, this);
        }
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_agreen() {
        agData.userData.gameName = this.editBox.string
        amuseControl.amuseSoundTool.commonBtnClick();
        agData.userData.avatarId = this.clickid;
        agData.storageData();
        this.callback &&  this.callback();
        this.node.destroy();
    }

    onClick_close() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    }

    onClick_cannel() {
        amuseControl.amuseSoundTool.commonBtnClick();
        this.node.destroy();
    }

    changeIcon(index: number) {
        this.clickid = index;
        amuseControl.amuseResUtil.loadSprite("head/" + "haed" + (index), this.avatarIcon);
    }
}
