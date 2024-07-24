import { princessControl } from "../tool/princessControl";
import { pgData } from "../tool/princessGameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class AmeliaPop extends cc.Component {


    @property(cc.Sprite)
    avatarIcon: cc.Sprite = null;

    @property(cc.Node)
    contentBox: cc.Node = null;

    @property(cc.EditBox)
    editBox: cc.EditBox = null;


    callback: Function = null;


    clickid = 0;

    start(): void {
        this.editBox.string = pgData.userData.gameName;
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (pgData.userData.avatarId), this.avatarIcon);
        this.clickid = pgData.userData.avatarId;
        for (let i = 0; i < this.contentBox.children.length; i++) {
            let item = this.contentBox.children[i];
            let icon = cc.find("mask/icon", item).getComponent(cc.Sprite);
            princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (i + 1), icon.getComponent(cc.Sprite));
            item.on(cc.Node.EventType.TOUCH_END, () => {
                this.changeIcon((i + 1))
            }, this);
        }
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_agreen() {
        pgData.userData.gameName = this.editBox.string
        princessControl.princessSoundTool.commonBtnClick();
        pgData.userData.avatarId = this.clickid;
        pgData.storageData();
        this.callback &&  this.callback();
        this.node.destroy();
    }

    onClick_close() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    }

    onClick_cannel() {
        princessControl.princessSoundTool.commonBtnClick();
        this.node.destroy();
    }
    
    changeIcon(index: number) {
        this.clickid = index;
        princessControl.princessResUtil.loadSprite("meimei/" + "meimei" + (index), this.avatarIcon);
    }
}
