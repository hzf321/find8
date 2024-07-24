 
import { amuseStorage } from "./tool/amuseStorage";
import { strong, circle, amuseControl } from "./tool/amuseControl";
import { agData, storage } from "./tool/amuseGameData";

const { ccclass, property } = cc._decorator;
 
@ccclass
export default class bright extends cc.Component {

    @property(cc.Node)
    loading_bg: cc.Node = null;

    @property(cc.Node)
    loading_bg2: cc.Node = null;
 
    @property(cc.Node)
    loadingBox: cc.Node = null;

    @property(cc.Node)
    gotoHallBox: cc.Node = null;

    @property(cc.Node)
    loading_play: cc.Node = null;

    @property(cc.Node)
    load_play: cc.Node = null;

    private resNum = 6;
    private nowNum = 0;

    start() {
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        amuseControl.adapterBg(this.loading_bg);
        amuseControl.adapterBg(this.loading_bg2);
        amuseControl.amuseSoundTool.initBtnClickEffect();
        amuseControl.amuseSoundTool.initbgmMusic();

        let playroomStorage = amuseStorage.getStorageJSON(storage.gamedata);
        if (playroomStorage) {
            agData.userData = playroomStorage;
        }

        console.log( agData.userData, " agData.userData")
        amuseControl.setsceneNode(this.node);

        if (!agData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            amuseControl.amuseResUtil.showDialog(circle.YellowDialog, {
                callback: () => {
                    agData.userData.isClause = true;
                    this.gotoHallBox.active = true;
                    this.loadingBox.active = false;
                    agData.storageData();
                    cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        } else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;

            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }


        agData.setVideoFailCb(()=>{
            cc.resources.load("prefeb/toast", cc.Prefab, (err, prefab) => {
                if (err) {
                    return;
                }
                
                let toast = cc.instantiate(prefab);
                amuseControl.amuseResUtil.bindResAsset(toast, prefab);
                let parentNode = amuseControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    let toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                        toast.destroy();
                    }).start();
                }
            })
        });
 

    }


    onClick_gotoPlay() {
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        amuseControl.amuseSoundTool.commonBtnClick();

        cc.tween(this.load_play).to(2, {angle: -360}).call(()=>{
            this.load_play.angle = 0;
        }).union().repeatForever().start();
          
        cc.loader.loadResDir("prefeb", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("sunImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('sunImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("fightImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('fightImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("meinvImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            agData.levelAll = assets.length;
            console.log('meinvImg assets in  have been loaded.');
            this.progressBarEvent();
        });

        cc.director.preloadScene(strong.sunset, (err, assets) => {
            cc.log("game scene preloaded");
            this.progressBarEvent();
        });
        cc.director.preloadScene(strong.flower, (err, assets) => {
            cc.log("hall scene preloaded");
            this.progressBarEvent();
        });

    }

    progressBarEvent() {
        this.nowNum++;
        if (this.nowNum == this.resNum) {
            this.scheduleOnce(() => {
                if (agData.userData.isHall) {
                    cc.director.loadScene(strong.flower);
                } else {
                    amuseControl.imgId = agData.userData.level;
                    cc.director.loadScene(strong.sunset);
                }
            }, 0.05)
        }
    }


    showShiPing() {
        console.log("android---------------showShiPing------------------")
        agData.showVideo(()=>{
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          })
    }


    showbanner() {
        console.log("android---------------showbanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    }


    hidebanner() {
        console.log("android---------------hidebanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    }
}

